import argparse, pathlib, sys, urllib.request

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--url-file", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    url_path = pathlib.Path(args.url_file)
    out_path = pathlib.Path(args.out)
    if not url_path.exists():
        print(f"[ERR] URL file not found: {url_path}", file=sys.stderr)
        sys.exit(2)

    url = url_path.read_text(encoding="utf-8").strip()
    if not url:
        print(f"[ERR] Empty URL in {url_path}", file=sys.stderr)
        sys.exit(2)

    print(f"[GET] {url}")
    with urllib.request.urlopen(url) as r:
        data = r.read()

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_bytes(data)
    print(f"[OK] Wrote OpenAPI to {out_path}")

if __name__ == "__main__":
    main()
