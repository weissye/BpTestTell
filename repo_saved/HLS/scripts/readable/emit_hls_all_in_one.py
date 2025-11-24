#!/usr/bin/env python
import argparse, json
from pathlib import Path

TPL_PASSIVE = (Path(__file__).resolve().parents[2] / 'templates' / 'hls_story_passive_bthread.js.j2').read_text(encoding='utf-8')

HEADER = "// HLS (active + passive) – single file\nif (mode === 'MODEL') {\n\n"
ACTIVE_HDR = "  // ===== ACTIVE LIFECYCLES (>=3 examples) =====\n"
PASSIVE_HDR = "\n  // ===== PASSIVE ASSERTIONS (generated) =====\n"
FOOTER = "\n}\n"

def camel(s: str) -> str:
    parts = ''.join(c if c.isalnum() else '_' for c in s).split('_')
    parts = [p for p in parts if p]
    if not parts: return 'story'
    return parts[0].lower() + ''.join(p.capitalize() for p in parts[1:])

def passive_from_gold(gold):
    chunks = []
    for s in gold['stories']:
        op_func = f"{s['op']}{s['entity']}"
        # build block lines using keyFields
        blines = []
        for b in s.get('blocks', []):
            key_exprs = [f"{k}: p.{k}" for k in b.get('keyFields', [])]
            blines.append(f"block(E.{b['op']}{s['entity']}({{ " + ', '.join(key_exprs) + " }}));")
        # checks
        clines = []
        for c in s.get('checks', []):
            e_lower = s['entity'].lower()
            if c['type'] == 'exists':
                clines.append(f"verify(Checks.{e_lower}Exists(p.{c['key']}));")
            elif c['type'] == 'absent':
                clines.append(f"verify(Checks.{e_lower}DoesNotExist(p.{c['key']}));")
            elif c['type'] == 'updated':
                clines.append(f"verify(Checks.{e_lower}Updated(p, {c.get('fields', [])}));")
        filled = TPL_PASSIVE.format(
            story_id=s['story_id'],
            params_json=json.dumps(s.get('params', {}), ensure_ascii=False),
            op_func=op_func,
            block_lines='\n  '.join(blines) if blines else "// (no inverse blocks)",
            check_lines='\n  '.join(clines) if clines else "// (no checks)",
        )
        chunks.append(filled)
    return chunks

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--gold', required=True, help='HLS gold (DET or NONDET) JSON')
    ap.add_argument('--active_samples', required=False, help='JSON with {js: ["bthread(...) {...}", ...]}')
    ap.add_argument('--out', required=True)
    args = ap.parse_args()

    gold = json.loads(Path(args.gold).read_text(encoding='utf-8'))
    active_chunks = []
    if args.active_samples and Path(args.active_samples).exists():
        data = json.loads(Path(args.active_samples).read_text(encoding='utf-8'))
        active_chunks = data.get('js', [])

    passive_chunks = passive_from_gold(gold)
    final = [HEADER]
    if active_chunks:
        final.append(ACTIVE_HDR + '\n\n'.join(active_chunks) + '\n')
    final.append(PASSIVE_HDR + '\n\n'.join(passive_chunks))
    final.append(FOOTER)

    outp = Path(args.out); outp.parent.mkdir(parents=True, exist_ok=True)
    outp.write_text(''.join(final), encoding='utf-8')
    print(f"Wrote combined JS to {outp}")

if __name__ == '__main__':
    main()
