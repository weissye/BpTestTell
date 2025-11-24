#!/usr/bin/env bash
set -euo pipefail
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs -d '\n')
fi
exec "$@"
