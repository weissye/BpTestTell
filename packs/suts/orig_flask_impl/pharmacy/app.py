from flask import Flask, request, jsonify
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    # In-memory stores
    stores = {
        'drugs': {},           # id -> {id, ...}
        'patients': {},        # id -> {id, ...}
        'orders': {},          # id -> {id, ...}
        'prescriptions': {},   # id -> {id, ...}
        'inventory': {},       # ndc -> {ndc, ...}
        'reset': {},           # id -> {id}
    }

    def _as_list(name):
        return list(stores[name].values())

    def _ensure_id(payload, key):
        if not isinstance(payload, dict):
            return None
        v = payload.get(key)
        if v is None:
            return None
        return str(v)

    # ---- DRUGS ----
    @app.get('/drugs')
    def list_drugs():
        return jsonify(_as_list('drugs')), 200

    @app.post('/drugs')
    def add_drug():
        payload = request.get_json(force=True, silent=True) or {}
        did = _ensure_id(payload, 'id') or _ensure_id(payload, 'ndc') or f"D{len(stores['drugs'])+1}"
        stores['drugs'][did] = {'id': did, **{k: v for k, v in payload.items() if k != 'id'}}
        return jsonify(stores['drugs'][did]), 201

    @app.put('/drugs/<id>')
    def put_drug(id):
        payload = request.get_json(force=True, silent=True) or {}
        did = str(id)
        data = {'id': did, **{k: v for k, v in payload.items() if k != 'id'}}
        stores['drugs'][did] = data
        return jsonify(data), 200

    @app.delete('/drugs/<id>')
    def delete_drug(id):
        stores['drugs'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    # ---- PATIENTS ----
    @app.get('/patients')
    def list_patients():
        return jsonify(_as_list('patients')), 200

    @app.post('/patients')
    def add_patient():
        payload = request.get_json(force=True, silent=True) or {}
        pid = _ensure_id(payload, 'id') or f"P{len(stores['patients'])+1}"
        stores['patients'][pid] = {'id': pid, **{k: v for k, v in payload.items() if k != 'id'}}
        return jsonify(stores['patients'][pid]), 201

    @app.put('/patients/<id>')
    def put_patient(id):
        payload = request.get_json(force=True, silent=True) or {}
        pid = str(id)
        data = {'id': pid, **{k: v for k, v in payload.items() if k != 'id'}}
        stores['patients'][pid] = data
        return jsonify(data), 200

    @app.delete('/patients/<id>')
    def delete_patient(id):
        stores['patients'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    # ---- ORDERS ----
    @app.get('/orders')
    def list_orders():
        return jsonify(_as_list('orders')), 200

    @app.post('/orders')
    def add_order():
        payload = request.get_json(force=True, silent=True) or {}
        oid = _ensure_id(payload, 'id') or f"O{len(stores['orders'])+1}"
        stores['orders'][oid] = {'id': oid, **{k: v for k, v in payload.items() if k != 'id'}}
        return jsonify(stores['orders'][oid]), 201

    @app.put('/orders/<id>')
    def put_order(id):
        payload = request.get_json(force=True, silent=True) or {}
        oid = str(id)
        data = {'id': oid, **{k: v for k, v in payload.items() if k != 'id'}}
        stores['orders'][oid] = data
        return jsonify(data), 200

    @app.delete('/orders/<id>')
    def delete_order(id):
        stores['orders'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    # ---- PRESCRIPTIONS ----
    @app.get('/prescriptions')
    def list_prescriptions():
        return jsonify(_as_list('prescriptions')), 200

    @app.post('/prescriptions')
    def add_prescription():
        payload = request.get_json(force=True, silent=True) or {}
        rxid = _ensure_id(payload, 'id') or f"RX{len(stores['prescriptions'])+1}"
        stores['prescriptions'][rxid] = {'id': rxid, **{k: v for k, v in payload.items() if k != 'id'}}
        return jsonify(stores['prescriptions'][rxid]), 201

    @app.put('/prescriptions/<id>')
    def put_prescription(id):
        payload = request.get_json(force=True, silent=True) or {}
        rxid = str(id)
        data = {'id': rxid, **{k: v for k, v in payload.items() if k != 'id'}}
        stores['prescriptions'][rxid] = data
        return jsonify(data), 200

    @app.delete('/prescriptions/<id>')
    def delete_prescription(id):
        stores['prescriptions'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    # ---- INVENTORY (key: ndc) ----
    @app.get('/inventory')
    def list_inventory():
        return jsonify(_as_list('inventory')), 200

    @app.post('/inventory')
    def add_inventory():
        payload = request.get_json(force=True, silent=True) or {}
        ndc = _ensure_id(payload, 'ndc') or _ensure_id(payload, 'id') or f"I{len(stores['inventory'])+1}"
        stores['inventory'][ndc] = {'ndc': ndc, **{k: v for k, v in payload.items() if k != 'ndc'}}
        return jsonify(stores['inventory'][ndc]), 201

    @app.put('/inventory/<ndc>')
    def put_inventory(ndc):
        payload = request.get_json(force=True, silent=True) or {}
        key = str(ndc)
        data = {'ndc': key, **{k: v for k, v in payload.items() if k != 'ndc'}}
        stores['inventory'][key] = data
        return jsonify(data), 200

    @app.delete('/inventory/<ndc>')
    def delete_inventory(ndc):
        stores['inventory'].pop(str(ndc), None)
        return jsonify({'deleted': str(ndc)}), 200

    # ---- RESET (treated like a regular collection for these stories) ----
    @app.get('/reset')
    def list_resets():
        return jsonify(_as_list('reset')), 200

    @app.post('/reset')
    def add_reset():
        payload = request.get_json(force=True, silent=True) or {}
        rid = _ensure_id(payload, 'id') or f"R{len(stores['reset'])+1}"
        stores['reset'][rid] = {'id': rid, **{k: v for k, v in payload.items() if k != 'id'}}
        return jsonify(stores['reset'][rid]), 200

    @app.put('/reset/<id>')
    def put_reset(id):
        payload = request.get_json(force=True, silent=True) or {}
        rid = str(id)
        data = {'id': rid, **{k: v for k, v in payload.items() if k != 'id'}}
        stores['reset'][rid] = data
        return jsonify(data), 200

    @app.delete('/reset/<id>')
    def delete_reset(id):
        stores['reset'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    # Optional: clear all stores
    @app.post('/reset-all')
    def reset_all():
        for k in stores:
            stores[k].clear()
        return jsonify({'ok': True}), 200

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5014)
