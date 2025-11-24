# scripts/analysis/infer_guards_from_domain.py
import json, sys, os
from pathlib import Path
from textwrap import shorten

from openai import OpenAI

def loadj(p): return json.loads(Path(p).read_text(encoding="utf-8"))

SYS = (
  "You analyze domain graphs (entities, relations, operations) and propose HLS guard stories. "
  "Return ONLY JSON: { guards: [ {entity, op, params, blocks, checks, why, source:'llm'} ] }. "
  "Rules: no hallucinated entities/fields/ops; keep to atomic LLE names; params must be realistic; add cross-entity checks."
)

def prompt(name, graph, lle_snip):
    return (
      f"SUT={name}\n"
      "Domain graph (truncated):\n" + shorten(json.dumps(graph, ensure_ascii=False), width=6000, placeholder="...") + "\n\n"
      "LLE ops sample (truncated):\n" + shorten(json.dumps(lle_snip, ensure_ascii=False), width=2000, placeholder="...") + "\n\n"
      "Propose 6-12 high-value guards (delete-with-dependents, requires-parent, duplicate-prevention, status preconditions, update-after-delete, amount bounds)."
    )

def main():
    if len(sys.argv) < 6:
        print("Usage: python scripts/analysis/infer_guards_from_domain.py <NAME> <domain_graph.json> <lle_det_gold.json> <model_ref.json or model_id> <OUT_JSON>", file=sys.stderr)
        sys.exit(2)
    name, graph_p, lle_p, model_or_ref, out_p = sys.argv[1], Path(sys.argv[2]), Path(sys.argv[3]), sys.argv[4], Path(sys.argv[5])
    graph = loadj(graph_p)
    lle = loadj(lle_p)
    lle_snip = {"stories": (lle.get("stories") or [])[:12]}  # small snippet

    # resolve model id
    if Path(model_or_ref).exists():
        m = loadj(model_or_ref).get("fine_tuned_model") or loadj(model_or_ref).get("model_id")
    else:
        m = model_or_ref
    if not m:
        print("[ERROR] missing model id", file=sys.stderr); sys.exit(3)

    client = OpenAI()
    resp = client.chat.completions.create(
        model=m,
        messages=[{"role":"system","content":SYS},{"role":"user","content":prompt(name, graph, lle_snip)}],
        temperature=0.7,
        max_tokens=1200,
        response_format={"type":"json_object"},
    )
    j = json.loads(resp.choices[0].message.content)
    out_p.parent.mkdir(parents=True, exist_ok=True)
    out_p.write_text(json.dumps({"sut": name, "guards": j.get("guards", [])}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[GUARDS.llm] {out_p}  ({len(j.get('guards',[]))} candidates)")

if __name__ == "__main__":
    main()
