import sys, json, os, glob

def find_gold_dir(sut: str):
    candidates = [
        f"artifacts/v25/nondet_checked/7_suts_llm_provider/{sut}",
        f"artifacts/v25/7_suts_llm_trained/{sut}",
        f"artifacts/v25/realworld/{sut}",
        f"artifacts/v25/nondet_checked/realworld/{sut}",
    ]
    for c in candidates:
        if os.path.isdir(c):
            gold = sorted(glob.glob(os.path.join(c, "*_llm_gold*.json")))
            if gold:
                return {"base_dir": c, "gold_files": gold}
    return {"base_dir": None, "gold_files": []}

if __name__ == "__main__":
    sut = sys.argv[1] if len(sys.argv)>1 else ""
    d = find_gold_dir(sut)
    print(json.dumps(d, indent=2))
