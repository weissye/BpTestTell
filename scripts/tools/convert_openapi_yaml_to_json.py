import sys, json, pathlib
try:
    import yaml
except ImportError:
    sys.exit("ERROR: pyyaml not installed. Run: pip install pyyaml")
for root in sys.argv[1:]:
    p = pathlib.Path(root)
    for y in p.rglob("openapi.yaml"):
        j = y.with_suffix(".json")
        if not j.exists():
            data = yaml.safe_load(y.read_text(encoding="utf-8"))
            j.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
            print(f"[OK] wrote {j}")
