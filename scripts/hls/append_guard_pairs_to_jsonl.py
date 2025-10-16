# scripts/hls/append_guard_pairs_to_jsonl.py
import json, sys
from pathlib import Path

def app(out, name, graph, lle, guards):
    sys_msg = {"role":"system","content":"You analyze domain graphs and LLE ops and propose HLS guard stories. Return only JSON with 'guards' list."}
    usr = {"role":"user","content":json.dumps({"sut":name,"graph":graph,"lle_snip":{"stories":(lle.get("stories") or [])[:12]},"ask":"Propose high-value guards."}, ensure_ascii=False)}
    asst= {"role":"assistant","content":json.dumps({"guards":guards}, ensure_ascii=False)}
    out.write_text(out.read_text(encoding="utf-8")+json.dumps({"messages":[sys_msg,usr,asst]}, ensure_ascii=False)+"\n", encoding="utf-8")

def main():
    if len(sys.argv)<6:
        print("Usage: python scripts/hls/append_guard_pairs_to_jsonl.py <NAME> <graph.json> <lle_det.json> <guards.valid.json> <OUT_JSONL>", file=sys.stderr); sys.exit(2)
    name, g, l, gv, out = sys.argv[1], Path(sys.argv[2]), Path(sys.argv[3]), Path(sys.argv[4]), Path(sys.argv[5])
    app(Path(out), name, json.loads(g.read_text(encoding="utf-8")), json.loads(l.read_text(encoding="utf-8")), json.loads(gv.read_text(encoding="utf-8")).get("guards",[]))
    print(f"[TRAIN+] guard pair for {name} -> {out}")
if __name__=="__main__": main()
