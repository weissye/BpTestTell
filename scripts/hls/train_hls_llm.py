#!/usr/bin/env python
import argparse, json, os
from pathlib import Path

def to_jsonl(data):
    for s in data['stories']:
        yield {
          'prompt': {
            'task':'emit_hls_passive_story',
            'entity':s['entity'],
            'op':s['op'],
            'params_keys': list(s.get('params', {}).keys()),
            'checks': s.get('checks', [])
          },
          'response': s
        }

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--sut', required=True)
    ap.add_argument('--hls_det', required=True)
    ap.add_argument('--out_dir', required=True)
    args = ap.parse_args()

    data = json.loads(Path(args.hls_det).read_text(encoding='utf-8'))
    out = Path(args.out_dir); out.mkdir(parents=True, exist_ok=True)
    jsonl = out / 'train.jsonl'
    with jsonl.open('w', encoding='utf-8') as f:
        for ex in to_jsonl(data):
            f.write(json.dumps(ex, ensure_ascii=False) + '\n')
    meta={'sut':args.sut,'provider':os.getenv('LLM_PROVIDER',''),'model':os.getenv('LLM_MODEL',''),'dataset':str(jsonl)}
    (out/'model_ref.json').write_text(json.dumps(meta, indent=2), encoding='utf-8')
    print(f'Prepared dataset at {jsonl}')

if __name__=='__main__':
    main()
