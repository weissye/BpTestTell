#!/usr/bin/env python3
"""Reset the Library SUT database before a Provengo run."""

from __future__ import annotations

import argparse
import json
import sys
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


def load_payload(path: str | None) -> bytes:
    if not path:
        return b"{}"

    payload_path = Path(path)
    with payload_path.open("r", encoding="utf-8") as handle:
        data = json.load(handle)
    return json.dumps(data).encode("utf-8")


def reset_sut(url: str, payload: bytes, timeout: float, retries: int, delay: float) -> int:
    request = Request(
        url,
        data=payload,
        method="POST",
        headers={"Content-Type": "application/json"},
    )

    last_error: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            with urlopen(request, timeout=timeout) as response:
                body = response.read().decode("utf-8", errors="replace")
                if response.status != 200:
                    print(f"Reset failed with HTTP {response.status}: {body}", file=sys.stderr)
                    return 1
                print(f"Reset SUT database: {body}")
                return 0
        except HTTPError as error:
            body = error.read().decode("utf-8", errors="replace")
            print(f"Reset failed with HTTP {error.code}: {body}", file=sys.stderr)
            return 1
        except URLError as error:
            last_error = error
        except TimeoutError as error:
            last_error = error

        if attempt < retries:
            time.sleep(delay)

    print(f"Reset failed after {retries} attempt(s): {last_error}", file=sys.stderr)
    return 1


def main() -> int:
    parser = argparse.ArgumentParser(description="Reset the Library SUT database.")
    parser.add_argument("--host", default="localhost")
    parser.add_argument("--port", type=int, default=23242)
    parser.add_argument("--payload", help="Optional JSON file to seed the reset endpoint.")
    parser.add_argument("--timeout", type=float, default=5.0)
    parser.add_argument("--retries", type=int, default=3)
    parser.add_argument("--delay", type=float, default=1.0)
    args = parser.parse_args()

    if args.retries < 1:
        print("--retries must be at least 1", file=sys.stderr)
        return 1

    payload = load_payload(args.payload)
    url = f"http://{args.host}:{args.port}/reset"
    return reset_sut(url, payload, args.timeout, args.retries, args.delay)


if __name__ == "__main__":
    raise SystemExit(main())
