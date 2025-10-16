# scripts/hls/generate_nondet_from_llm.py
import argparse, json, os, re, sys, time, random
from pathlib import Path
from typing import Any, Dict, List, Tuple
from openai import OpenAI

# ---------- IO helpers ----------

def read_json(p: Path) -> Any:
    with p.open("r", encoding="utf-8") as f:
        return json.load(f)

def write_json(obj: Any, p: Path) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)
    tmp = p.with_suffix(p.suffix + ".tmp")
    with tmp.open("w", encoding="utf-8") as f:
        json.dump(obj, f, indent=2, ensure_ascii=False)
    tmp.replace(p)

def load_model_id(trained_model_dir: Path, cli_model_id: str | None) -> str:
    """
    Priority:
      1) trained_model_dir/model_ref.json => {"model_id": "..."} or {"id": "..."} or {"model": "..."}
      2) --model_id from CLI
      3) base model fallback
    """
    mr = trained_model_dir / "model_ref.json"
    if mr.exists():
        try:
            data = read_json(mr)
            for k in ("model_id", "id", "model"):
                if isinstance(data, dict) and k in data and data[k]:
                    return str(data[k])
        except Exception:
            pass
    if cli_model_id:
        return cli_model_id
    # last resort base model
    return "gpt-4o-mini-2024-07-18"

# ---------- Guard hints ----------

def infer_analysis_dir(hls_det_path: Path) -> Path:
    # artifacts/hls_det/<provider>/<sut>/hls_det_gold.json  -> artifacts/analysis/<provider>/<sut>/
    parts = list(hls_det_path.parts)
    # find 'hls_det'
    try:
        idx = parts.index("hls_det")
    except ValueError:
        return hls_det_path.parent  # fallback
    # provider is next, sut is next
    if idx + 2 >= len(parts):
        return hls_det_path.parent
    provider = parts[idx + 1]
    sut = parts[idx + 2]
    return Path("artifacts") / "analysis" / provider / sut

def load_guard_hints(analysis_dir: Path) -> List[str]:
    """
    Look for guard_candidates.merged.valid.json then det/ openapi variants.
    Accept either:
      - {"motifs": ["...","..."]}
      - ["...","..."]
    """
    candidates = [
        analysis_dir / "guard_candidates.merged.valid.json",
        analysis_dir / "guard_candidates.det.valid.json",
        analysis_dir / "guard_candidates.openapi.valid.json",
    ]
    motifs: List[str] = []
    for p in candidates:
        if p.exists():
            try:
                data = read_json(p)
                if isinstance(data, dict) and "motifs" in data and isinstance(data["motifs"], list):
                    motifs.extend(str(x) for x in data["motifs"])
                elif isinstance(data, list):
                    motifs.extend(str(x) for x in data)
            except Exception:
                pass
    # de-dup, keep order
    seen = set()
    uniq = []
    for m in motifs:
        if m not in seen and m.strip():
            uniq.append(m.strip())
            seen.add(m.strip())
    return uniq

# ---------- Prompting ----------

SYSTEM_PREAMBLE = (
    "You are a careful generator of NON-DETERMINISTIC HLS (high-level stories). "
    "Given a deterministic story (det gold), produce **variants** that introduce legitimate nondeterminism "
    "(branching, retries, alternative flows) while respecting the system’s domain. "
    "Always return ONLY valid JSON (no prose, no code fences): an array of objects. "
    "Each object MUST have:\n"
    "- name (string)\n"
    "- entities: { active:[], lifecycle:[], passive:[] } (arrays of strings)\n"
    "- checks: { preconditions:[], postconditions:[], guards:[] } (arrays of strings)\n"
    "- steps: [] (ordered list of action names)\n"
    "- notes: [] (short strings)\n"
    "Keep names concise. Use existing entity/action vocabulary when possible.\n"
)

def build_system_with_hints(hints: List[str]) -> str:
    if hints:
        joined = "\n- " + "\n- ".join(hints[:50])  # don’t overload
        return SYSTEM_PREAMBLE + (
            "\nWhen choosing checks/blocks, prefer these guard motifs if they fit:\n"
            f"{joined}\n"
        )
    return SYSTEM_PREAMBLE

def build_user_prompt(sut: str, det_story: Dict[str, Any], n_per_story: int) -> str:
    # We show the DET story and ask for N variants
    det_json = json.dumps(det_story, ensure_ascii=False)
    return (
        f"SUT: {sut}\n"
        "Here is one deterministic HLS story (JSON):\n"
        f"{det_json}\n\n"
        f"Produce {n_per_story} nondeterministic variants strictly as a JSON array. "
        "Add meaningful guards and alternative paths, but keep domain-consistent vocabulary."
    )

# ---------- OpenAI call w/ retry ----------

def chat_with_retry(client: OpenAI, **kwargs):
    max_attempts = 4
    for attempt in range(1, max_attempts + 1):
        try:
            return client.chat.completions.create(**kwargs)
        except Exception as e:
            if attempt == max_attempts:
                raise
            time.sleep(1.5 * attempt)

# ---------- JSON output repair ----------

FENCE_RE = re.compile(r"^```(?:json)?\s*|\s*```$", re.MULTILINE)

def coerce_json_array(text: str) -> List[Dict[str, Any]]:
    # strip code fences
    s = FENCE_RE.sub("", text).strip()
    # take from first '[' to last ']'
    i = s.find("[")
    j = s.rfind("]")
    if i != -1 and j != -1 and j > i:
        s = s[i : j + 1]
    # try parse
    try:
        parsed = json.loads(s)
        if isinstance(parsed, list):
            return parsed
    except Exception:
        pass
    # last attempt: replace single quotes, trailing commas
    s2 = re.sub(r",\s*([}\]])", r"\1", s.replace("'", '"'))
    parsed = json.loads(s2)  # will raise if truly malformed
    if not isinstance(parsed, list):
        raise ValueError("Model did not return a JSON array.")
    return parsed

# ---------- Normalization ----------

def as_list(x) -> List[str]:
    if x is None:
        return []
    if isinstance(x, list):
        return [str(e) for e in x if str(e).strip()]
    return [str(x)]

def normalize_story(v: Dict[str, Any]) -> Dict[str, Any]:
    # name
    name = str(v.get("name", "")).strip() or "Variant"
    # entities
    entities = v.get("entities", {}) or {}
    if isinstance(entities, list):
        # rare bad outputs – treat as passive
        entities = {"active": [], "lifecycle": [], "passive": [str(x) for x in entities]}
    entities = {
        "active": as_list(entities.get("active", [])),
        "lifecycle": as_list(entities.get("lifecycle", [])),
        "passive": as_list(entities.get("passive", [])),
    }
    # checks
    checks = v.get("checks", {}) or {}
    if isinstance(checks, list):
        # extremely bad outputs – shove into guards
        checks = {"preconditions": [], "postconditions": [], "guards": [str(x) for x in checks]}
    checks = {
        "preconditions": as_list(checks.get("preconditions", [])),
        "postconditions": as_list(checks.get("postconditions", [])),
        "guards": as_list(checks.get("guards", [])),
    }
    # steps, notes
    steps = as_list(v.get("steps", []))
    notes = as_list(v.get("notes", []))
    return {
        "name": name,
        "entities": entities,
        "checks": checks,
        "steps": steps,
        "notes": notes,
    }

# ---------- LLM driver ----------

def llm_vary(
    client: OpenAI,
    model: str,
    sut: str,
    det_story: Dict[str, Any],
    guard_hints: List[str],
    n_per_story: int,
    temperature: float,
    top_p: float,
) -> List[Dict[str, Any]]:
    system_msg = build_system_with_hints(guard_hints)
    user_msg = build_user_prompt(sut, det_story, n_per_story)

    kwargs = {
        "model": model,
        "messages": [
            {"role": "system", "content": system_msg},
            {"role": "user", "content": user_msg},
        ],
        "temperature": temperature,
        "top_p": top_p,
    }
    resp = chat_with_retry(client, **kwargs)
    text = resp.choices[0].message.content or ""
    raw_list = coerce_json_array(text)
    return [normalize_story(x) for x in raw_list]

# ---------- main ----------

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut", required=True, help="SUT name")
    ap.add_argument("--hls_det", required=True, help="Path to input HLS det-gold JSON")
    ap.add_argument("--trained_model_dir", required=True, help="Directory with model_ref.json")
    ap.add_argument("--out", required=True, help="Path to output HLS NONDET JSON")
    ap.add_argument("--model_id", default=None, help="Override model id (e.g., ft:...)")
    ap.add_argument("--temperature", type=float, default=0.4)
    ap.add_argument("--top_p", type=float, default=0.95)
    ap.add_argument("--n_per_story", type=int, default=1)
    ap.add_argument("--seed", type=int, default=None, help="Seed Python RNG (optional)")
    args = ap.parse_args()

    if args.seed is not None:
        random.seed(args.seed)
        try:
            import numpy as np  # type: ignore
            np.random.seed(args.seed)
        except Exception:
            pass
        print(f"[INFO] Using seed={args.seed}")

    det_path = Path(args.hls_det)
    det = read_json(det_path)
    stories = det.get("stories") if isinstance(det, dict) else det
    if not isinstance(stories, list):
        print(f"[FAIL] Input det-gold is not a list or dict with 'stories': {det_path}")
        return 2

    model = load_model_id(Path(args.trained_model_dir), args.model_id)
    client = OpenAI()

    # Guard hints (optional)
    analysis_dir = infer_analysis_dir(det_path)
    guard_hints = load_guard_hints(analysis_dir)

    all_variants: List[Dict[str, Any]] = []
    for s in stories:
        try:
            vs = llm_vary(
                client=client,
                model=model,
                sut=args.sut,
                det_story=s,
                guard_hints=guard_hints,
                n_per_story=args.n_per_story,
                temperature=args.temperature,
                top_p=args.top_p,
            )
            all_variants.extend(vs)
        except Exception as e:
            print(f"[WARN] Story variation failed for '{s.get('name','?')}' -> {e}")

    out = {"stories": all_variants}
    write_json(out, Path(args.out))
    print(f"[OK] wrote {args.out} with {len(all_variants)} stories")
    return 0

if __name__ == "__main__":
    sys.exit(main())
