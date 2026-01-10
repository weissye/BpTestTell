import json
import re
from pathlib import Path
from typing import Dict, Any

def generate_mock(spec: Dict[str, Any], output_path: Path):
    """
    Generates a Flask-based mock that strictly follows the OpenAPI response codes.
    """
    response_map = {}
    paths = spec.get("paths", {})
    
    for path, methods in paths.items():
        norm_path = path.lstrip('/')
        response_map[norm_path] = {}
        
        for method, data in methods.items():
            responses = data.get("responses", {})
            # Find all 2xx success codes
            success_codes = [int(code) for code in responses.keys() if code.startswith('2')]
            response_map[norm_path][method.upper()] = success_codes

    mock_code = [
        "from flask import Flask, request, jsonify",
        "import json",
        "import re",
        "",
        "app = Flask(__name__)",
        "",
        f"RESPONSE_MAP = {json.dumps(response_map, indent=4)}",
        "",
        "def find_best_match(request_path, method):",
        "    path = request_path.strip('/')",
        "    method = method.upper()",
        "    ",
        "    for spec_path, methods in RESPONSE_MAP.items():",
        "        # Convert OpenAPI placeholders {var} to regex [^/]+",
        "        regex_pattern = '^' + re.sub(r'\\{[^}]+\\}', '[^/]+', spec_path) + '$'",
        "        if re.match(regex_pattern, path):",
        "            if method in methods:",
        "                return methods[method]",
        "    return []",
        "",
        "@app.route('/api/v1/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])",
        "def catch_all(path):",
        "    method = request.method",
        "    print(f'\\n' + '='*50)",
        "    print(f'[MOCK] {method} -> /api/v1/{path}')",
        "    ",
        "    if request.headers.get('X-Provengo-Rejection-Probe') == 'true':",
        "        print('[MOCK] Rejection Probe detected: Returning 400')",
        "        return jsonify({'status': 'error', 'details': ['Signaled rejection']}), 400",
        "",
        "    allowed_codes = find_best_match(path, method)",
        "    if not allowed_codes:",
        "        print(f'[MOCK WARNING] No OpenAPI match for {path} [{method}]')",
        "        return jsonify({'status': 'success'}), 200",
        "",
        "    status_code = allowed_codes[0]",
        "    print(f'[MOCK] Found Spec match! Returning: {status_code}')",
        "    print('='*50)",
        "    return jsonify({'status': 'success', 'spec_match': True}), status_code",
        "",
        "if __name__ == '__main__':",
        "    app.run(port=8000, debug=True)"
    ]

    output_path.write_text("\n".join(mock_code), encoding="utf-8")
    print(f"Successfully generated OpenAPI-Strict mock at: {output_path}")

if __name__ == "__main__":
    # FIX: Use absolute path relative to this script's location
    SCRIPT_DIR = Path(__file__).parent
    spec_path = SCRIPT_DIR / "openapi.json"
    target_mock = SCRIPT_DIR / "gitea_mock.py"

    if not spec_path.exists():
        print(f"ERROR: Could not find {spec_path}")
        print(f"Please ensure 'openapi.json' is in: {SCRIPT_DIR}")
    else:
        with open(spec_path, "r", encoding="utf-8") as f:
            spec = json.load(f)
        generate_mock(spec, target_mock)