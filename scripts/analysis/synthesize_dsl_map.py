#!/usr/bin/env python3
import argparse, json, re
from pathlib import Path

STEP_PAT = re.compile(r"^(?P<verb>add|create|update|delete|verify(?:\s+exists)?)\s+(?P<noun>[A-Za-z0-9_ -]+)", re.I)

# common fallbacks for id fields by noun
ID_FALLBACK = {
  "Customer": "id", "Vehicle": "vin", "WorkOrder": "woId",
  "Invoice": "invoiceId", "Payment": "paymentId", "Part": "partId",
}

DEFAULT_VERBS = {
  "add": "add{Noun}",
  "create": "add{Noun}",
  "update": "update{Noun}",
  "delete": "delete{Noun}",
  "verify_exists": "verify{Noun}Exists",
  "verify": "verify{Noun}",
}

def Title(s): return re.sub(r"[^A-Za-z0-9]", "", s[:1].upper()+s[1:])

def load_json(p: Path):
  return json.loads(p.read_text(encoding="utf-8"))

def nouns_and_verbs(hls_det: Path):
  doc = load_json(hls_det)
  stories = doc.get("stories", doc)
  nouns, verbs = set(), set()
  for st in stories:
    for step in st.get("steps", []):
      m = STEP_PAT.match(step.strip())
      if not m: continue
      v = m.group("verb").lower().strip()
      n = Title(m.group("noun").strip())
      nouns.add(n)
      verbs.add(v)
  return nouns, verbs

def guess_id_from_guards(guards_dir: Path, noun: str):
  # look into merged/openapi guard candidates for field names like <noun>Id or known ids
  candidates = list(guards_dir.glob("guard_candidates.*.valid.json"))
  keys = []
  for f in candidates:
    try:
      data = load_json(f)
      keys += json.dumps(data).split()
    except Exception:
      pass
  # simple heuristics
  noun_l = noun.lower()
  for token in keys:
    if noun_l+"id" in token.lower():                 # e.g., customerId
      return noun[0].lower()+noun[1:]+"Id"
    if noun.lower() == "vehicle" and "vin" in token.lower():
      return "vin"
  return ID_FALLBACK.get(noun, "id")

def main():
  ap = argparse.ArgumentParser()
  ap.add_argument("--sut", required=True)
  ap.add_argument("--hls_det", required=True)
  ap.add_argument("--analysis_dir", default=None,
                  help="artifacts/analysis/.../<sut> directory (optional; improves idField guessing)")
  ap.add_argument("--out", required=True)
  args = ap.parse_args()

  nouns, verbs = nouns_and_verbs(Path(args.hls_det))

  # build verbs map (only emit those actually seen, fallback to defaults)
  verbs_map = {}
  for v in verbs:
    if v in DEFAULT_VERBS:
      verbs_map[v] = DEFAULT_VERBS[v]
    elif v == "verify exists":
      verbs_map["verify_exists"] = DEFAULT_VERBS["verify_exists"]

  # build entities map with idField guesses
  ents_map = {}
  guards_dir = Path(args.analysis_dir) if args.analysis_dir else None
  for n in sorted(nouns):
    idf = guess_id_from_guards(guards_dir, n) if guards_dir and guards_dir.exists() else ID_FALLBACK.get(n, "id")
    ents_map[n[0].lower()+n[1:]] = {"noun": n, "idField": idf}

  out = {"verbs": verbs_map, "entities": ents_map}
  Path(args.out).parent.mkdir(parents=True, exist_ok=True)
  Path(args.out).write_text(json.dumps(out, indent=2), encoding="utf-8")
  print(f"[OK] wrote {args.out}")

if __name__ == "__main__":
  main()
