#!/usr/bin/env bash
set -euo pipefail

usage() {
cat <<'EOF'
Usage:
  emit_readables_any.sh one-sut <name>
  emit_readables_any.sh all-7suts
  emit_readables_any.sh one-realworld <name>
  emit_readables_any.sh all-realworld
  emit_readables_any.sh all
EOF
}

[[ $# -lt 1 ]] && { usage; exit 2; }

MODE="$1"; NAME="${2:-}"

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"   # scripts/readable/../../ -> repo root
EMITTER="$ROOT/scripts/readable/emit_readables_from_gold.py"

OUT_7S="$ROOT/artifacts/readables/7_suts"
OUT_RW="$ROOT/artifacts/readables/realworld"
mkdir -p "$OUT_7S" "$OUT_RW"

SUTS=(banking config_control ecommerce factory garage library pharmacy)
REALWORLD=(airtable directus github jira_cloud notion shopify_admin stripe supabase trello twilio)

emit_one () {
  local kind="$1" name="$2"
  echo
  echo "==== $kind : $name ===="

  # recursively gather gold files anywhere under artifacts/
  mapfile -t gold_args < <(find "$ROOT/artifacts" -type f \( \
    -name "${name}_llm_gold_fixed.json" -o \
    -name "${name}_llm_gold_merged_fixed.json" -o \
    -name "${name}_llm_gold.json" -o \
    -name "${name}_llm_gold_merged.json" \) 2>/dev/null || true)

  if [[ ${#gold_args[@]} -eq 0 ]]; then
    echo "[SKIP] $kind:$name (no *_llm_gold*.json found under artifacts/)"
    return 0
  fi

  local out_dir
  if [[ "$kind" == "7S" ]]; then out_dir="$OUT_7S/$name"; else out_dir="$OUT_RW/$name"; fi
  mkdir -p "$out_dir"

  echo "[RUN] python $EMITTER --gold ${gold_args[*]} --out-dir $out_dir --force-crud"
  python "$EMITTER" --gold "${gold_args[@]}" --out-dir "$out_dir" --force-crud
  echo "[OK] $kind:$name → $out_dir"
}

case "$MODE" in
  one-sut)        [[ -z "$NAME" ]] && { usage; exit 2; }; emit_one "7S" "$NAME" ;;
  all-7suts)      for s in "${SUTS[@]}"; do emit_one "7S" "$s"; done ;;
  one-realworld)  [[ -z "$NAME" ]] && { usage; exit 2; }; emit_one "RW" "$NAME" ;;
  all-realworld)  for s in "${REALWORLD[@]}"; do emit_one "RW" "$s"; done ;;
  all)            for s in "${SUTS[@]}"; do emit_one "7S" "$s"; done; for s in "${REALWORLD[@]}"; do emit_one "RW" "$s"; done ;;
  *)              usage; exit 2 ;;
esac

echo
echo "[DONE]"
