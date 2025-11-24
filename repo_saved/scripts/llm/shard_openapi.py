#!/usr/bin/env python3
import argparse, json, pathlib, math, itertools, collections

def roundrobin_chunks(items, n):
    buckets=[[] for _ in range(n)]
    for i, it in enumerate(items):
        buckets[i % n].append(it)
    return buckets

def by_tag(paths_obj, n):
    # group by first tag if present, else 'untagged'
    tagged=collections.defaultdict(list)
    for p, ops in paths_obj.items():
        tagset=set()
        for m,op in (ops or {}).items():
            if isinstance(op, dict) and 'tags' in op and op['tags']:
                tagset.add(op['tags'][0])
        tag = sorted(tagset)[0] if tagset else 'untagged'
        tagged[tag].append(p)
    # distribute groups across shards
    buckets=[[] for _ in range(n)]
    i=0
    for tag, plist in sorted(tagged.items(), key=lambda kv:-len(kv[1])):
        for pth in plist:
            buckets[i % n].append(pth)
            i+=1
    return buckets

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("openapi")
    ap.add_argument("out_dir")
    ap.add_argument("--n-shards", type=int, default=6)
    ap.add_argument("--strategy", choices=["roundrobin","bytag"], default="bytag")
    args=ap.parse_args()

    spec=json.loads(pathlib.Path(args.openapi).read_text("utf-8"))
    paths=spec.get("paths",{}) or {}
    items=list(paths.keys())
    if args.strategy=="bytag":
        buckets = by_tag(paths, args.n_shards)
    else:
        buckets = roundrobin_chunks(items, args.n_shards)

    outdir=pathlib.Path(args.out_dir); outdir.mkdir(parents=True, exist_ok=True)
    shard_files=[]
    for i, bucket in enumerate(buckets):
        sub = {p: paths[p] for p in bucket if p in paths}
        sh = dict(spec); sh["paths"]=sub
        f = outdir / f"shard_{i+1:02d}.json"
        f.write_text(json.dumps(sh, indent=2), encoding="utf-8")
        shard_files.append(str(f))
    print(json.dumps({"shards": shard_files}, indent=2))

if __name__=="__main__":
    main()
