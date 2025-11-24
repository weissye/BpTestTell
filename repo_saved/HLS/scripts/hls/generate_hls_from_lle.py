#!/usr/bin/env python
import argparse, json, random
from pathlib import Path
from typing import Dict, Any

def stable_id(prefix: str, i: int) -> str:
    return f"{prefix}_{i:04d}"

def inverse_op(op: str) -> str:
    if op == 'add': return 'delete'
    if op == 'delete': return 'add'
    return 'update'

def adapt_from_lle_record(rec: Dict[str, Any]) -> Dict[str, Any]:
    entity = rec.get('entity') or rec.get('tag') or 'Entity'
    op = rec.get('op') or 'add'
    key_fields = rec.get('keyFields') or ['id']
    params = rec.get('params') or {}
    return {'entity': entity, 'op': op, 'key_fields': key_fields, 'params': params}

def load_lle(path: Path):
    data = json.loads(path.read_text(encoding='utf-8'))
    if isinstance(data, dict) and 'records' in data:
        data = data['records']
    if not isinstance(data, list):
        raise ValueError("Expected LLE det-gold as list or dict with 'records'.")
    return data

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--sut', required=True)
    ap.add_argument('--lle_det_gold', required=True)
    ap.add_argument('--out', required=True)
    ap.add_argument('--seed', type=int, default=42)
    args = ap.parse_args()

    random.seed(args.seed)
    recs = load_lle(Path(args.lle_det_gold))
    def sort_key(r):
        try:
            import json as _j
            return (str(r.get('entity')), str(r.get('op')), _j.dumps(r, sort_keys=True))
        except Exception:
            return (str(r.get('entity')), str(r.get('op')), '')
    stories = []
    for i, rec in enumerate(sorted(recs, key=sort_key)):
        a = adapt_from_lle_record(rec)
        inv = inverse_op(a['op'])
        stories.append({
            'story_id': stable_id(f"hls_{a['entity']}_{a['op']}", i),
            'entity': a['entity'],
            'op': a['op'],
            'params': a['params'],
            'blocks': [{'op': inv, 'keyFields': a['key_fields']}],
            'checks': [{'type':'exists','entity':a['entity'],'key':a['key_fields'][0]}] if a['op']=='add' else
                      [{'type':'absent','entity':a['entity'],'key':a['key_fields'][0]}] if a['op']=='delete' else
                      [{'type':'updated','entity':a['entity'],'fields': list(a['params'].keys())}]
        })
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({'sut': args.sut, 'mode': 'det', 'stories': stories}, indent=2), encoding='utf-8')
    print(f"Wrote {out} with {len(stories)} stories")

if __name__ == '__main__':
    main()
