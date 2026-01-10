from flask import Flask, request, jsonify
import json
import logging

app = Flask(__name__)

# Set up logging to console
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route('/api/v1/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
def catch_all(path):
    # --- DEBUG PRINTS ---
    # Learned from previous failures: Construct a clean log of the incoming request
    method = request.method
    headers = dict(request.headers)
    
    print(f'\n' + '='*50)
    print(f'[MOCK DEBUG] Incoming {method} request')
    print(f'[MOCK DEBUG] Path: /api/v1/{path}')
    print(f'[MOCK DEBUG] Headers: {json.dumps(headers, indent=2)}')

    # Check for Provengo Rejection Probe
    if headers.get('X-Provengo-Rejection-Probe') == 'true':
        print('[MOCK DEBUG] Rejection Probe detected: Returning 400')
        return jsonify({
            'details': ['Signaled rejection'],
            'status': 'error'
        }), 400

    try:
        if request.data:
            body = request.get_json(silent=True)
            print(f'[MOCK DEBUG] Body: {json.dumps(body, indent=2) if body else request.data.decode("utf-8")}')
    except Exception as e:
        print(f'[MOCK DEBUG] Could not parse body: {e}')

    # Handle specific path logic based on entities if needed
    # For now, return a generic success to satisfy the actuator
    print(f'[MOCK DEBUG] Returning 200 Success')
    print('='*50 + '\n')
    return jsonify({
        'status': 'success',
        'message': f'Mock handled {method} on {path}',
        'received_path': path
    }), 200

if __name__ == '__main__':
    print('--- Gitea Mock Server Starting ---')
    print('Listening on http://localhost:8000/api/v1/')
    app.run(port=8000, debug=True, host='0.0.0.0')