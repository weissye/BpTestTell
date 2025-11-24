#!/usr/bin/env python3
# Use a local simple 'trained' model to propose endpoints for a new OpenAPI.
import sys,json,pathlib
if len(sys.argv)<4: print('Usage: generate_gold_llm_trained.py <openapi.json> <model.json> <out_gold.json>') or exit(2)
spec=json.loads(pathlib.Path(sys.argv[1]).read_text('utf-8'))
model=json.loads(pathlib.Path(sys.argv[2]).read_text('utf-8'))
# Heuristic: just enumerate OpenAPI (deterministic), but ensure dedup and normalized casing;
# future: bias filtering to top-k from model['vocab'] if needed.
events=[]
seen=set()
for p,ops in spec.get('paths',{}).items():
  if not isinstance(ops,dict): continue
  for m in ops.keys():
    M=m.upper(); k=(M,p)
    if k in seen: continue
    seen.add(k)
    events.append({'name': f"{M} {p}", 'method': M, 'path': p})
gold={'schema_version':'v1','meta':{'source':'local-trained','model':model.get('version')},'events':events}
pathlib.Path(sys.argv[3]).write_text(json.dumps(gold, indent=2), encoding='utf-8')
print('[ok]', sys.argv[3], len(events), 'events')
