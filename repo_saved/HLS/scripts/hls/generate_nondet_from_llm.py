#!/usr/bin/env python
import argparse, json, random
from pathlib import Path

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('--sut',required=True)
    ap.add_argument('--hls_det',required=True)
    ap.add_argument('--trained_model_dir',required=True)
    ap.add_argument('--out',required=True)
    ap.add_argument('--seed',type=int,default=142)
    args=ap.parse_args()

    random.seed(args.seed)
    det=json.loads(Path(args.hls_det).read_text(encoding='utf-8'))

    # Placeholder: keep params unchanged (wire your LLM sampler here)
    stories=[{**s,'params': dict(s.get('params', {}))} for s in det['stories']]
    out={'sut':args.sut,'mode':'nondet','stories':stories}
    outp=Path(args.out); outp.parent.mkdir(parents=True, exist_ok=True)
    outp.write_text(json.dumps(out, indent=2), encoding='utf-8')
    print(f'Wrote {outp}')

if __name__=='__main__':
    main()
