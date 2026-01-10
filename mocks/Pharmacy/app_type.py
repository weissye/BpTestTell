from flask import Flask, request, jsonify
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    # In-memory stores
    stores = {
        'drugs': {},           # id -> {id, name, ...}
        'patients': {},        # id -> {id, name, ...}
        'orders': {},          # id -> {id, ...}
        'prescriptions': {},   # id -> {id, ...}
        'inventory': {},       # ndc -> {ndc, ...}
    }

    def _as_list(name):
        return list(stores[name].values())

    def validate_payload(payload, required_fields, field_specs):
        """
        Strictly validates the payload against requirements.
        :param payload: Dict JSON body
        :param required_fields: List of strings (keys must exist)
        :param field_specs: Dict of {key: type} (values must match type)
        :return: (ErrorString, StatusCode) or (None, None)
        """
        if not isinstance(payload, dict):
            return "Payload must be a JSON object", 400

        # 1. Check Required Fields
        for field in required_fields:
            if field not in payload:
                return f"Missing required field: '{field}'", 400

        # 2. Check Types
        for key, value in payload.items():
            if key in field_specs:
                expected_type = field_specs[key]
                if not isinstance(value, expected_type):
                    return f"Invalid type for '{key}'. Expected {expected_type.__name__}, got {type(value).__name__}", 400
        
        return None, None

    # ---- DRUGS ----
    @app.get('/drugs')
    def list_drugs():
        return jsonify(_as_list('drugs')), 200

    @app.get('/drugs/<id>')
    def get_drug(id):
        did = str(id)
        if did not in stores['drugs']:
            return jsonify({'error': 'not found'}), 404
        return jsonify(stores['drugs'][did]), 200

    @app.post('/drugs')
    def add_drug():
        payload = request.get_json(force=True, silent=True) or {}
        
        # Validation Config (from OpenAPI: Drug)
        err, status = validate_payload(
            payload, 
            required_fields=['id'], 
            field_specs={'id': str, 'name': str}
        )
        if err: return jsonify({'error': err}), status

        did = payload['id']
        if did in stores['drugs']:
            return jsonify({'error': f'drug {did} already exists'}), 409
            
        stores['drugs'][did] = payload
        return jsonify(stores['drugs'][did]), 201

    @app.put('/drugs/<id>')
    def put_drug(id):
        payload = request.get_json(force=True, silent=True) or {}
        did = str(id)
        
        # PUT updates usually don't strictly require ID in body if in path, 
        # but let's allow payload to define data.
        stores['drugs'][did] = {**stores['drugs'].get(did, {'id': did}), **payload}
        stores['drugs'][did]['id'] = did # Ensure ID consistency
        
        return jsonify(stores['drugs'][did]), 200

    @app.delete('/drugs/<id>')
    def delete_drug(id):
        stores['drugs'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    # ---- PATIENTS ----
    @app.get('/patients')
    def list_patients():
        return jsonify(_as_list('patients')), 200

    @app.get('/patients/<id>')
    def get_patient(id):
        pid = str(id)
        if pid not in stores['patients']:
            return jsonify({'error': 'not found'}), 404
        return jsonify(stores['patients'][pid]), 200

    @app.post('/patients')
    def add_patient():
        payload = request.get_json(force=True, silent=True) or {}
        
        # Validation Config (from OpenAPI: Patient)
        err, status = validate_payload(
            payload, 
            required_fields=['id'], 
            field_specs={'id': str, 'name': str}
        )
        if err: return jsonify({'error': err}), status

        pid = payload['id']
        if pid in stores['patients']:
            return jsonify({'error': f'patient {pid} already exists'}), 409
            
        stores['patients'][pid] = payload
        return jsonify(stores['patients'][pid]), 201

    @app.put('/patients/<id>')
    def put_patient(id):
        payload = request.get_json(force=True, silent=True) or {}
        pid = str(id)
        stores['patients'][pid] = {**stores['patients'].get(pid, {'id': pid}), **payload}
        stores['patients'][pid]['id'] = pid
        return jsonify(stores['patients'][pid]), 200

    @app.delete('/patients/<id>')
    def delete_patient(id):
        stores['patients'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    # ---- ORDERS ----
    @app.get('/orders')
    def list_orders():
        return jsonify(_as_list('orders')), 200

    @app.get('/orders/<id>')
    def get_order(id):
        oid = str(id)
        if oid not in stores['orders']:
            return jsonify({'error': 'not found'}), 404
        return jsonify(stores['orders'][oid]), 200

    @app.post('/orders')
    def add_order():
        payload = request.get_json(force=True, silent=True) or {}
        
        # Validation Config (from OpenAPI: Order)
        err, status = validate_payload(
            payload, 
            required_fields=['id'], 
            field_specs={'id': str}
        )
        if err: return jsonify({'error': err}), status

        oid = payload['id']
        if oid in stores['orders']:
            return jsonify({'error': f'order {oid} already exists'}), 409
            
        stores['orders'][oid] = payload
        return jsonify(stores['orders'][oid]), 201

    @app.put('/orders/<id>')
    def put_order(id):
        payload = request.get_json(force=True, silent=True) or {}
        oid = str(id)
        stores['orders'][oid] = {**stores['orders'].get(oid, {'id': oid}), **payload}
        stores['orders'][oid]['id'] = oid
        return jsonify(stores['orders'][oid]), 200

    @app.delete('/orders/<id>')
    def delete_order(id):
        stores['orders'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    # ---- PRESCRIPTIONS ----
    @app.get('/prescriptions')
    def list_prescriptions():
        return jsonify(_as_list('prescriptions')), 200

    @app.get('/prescriptions/<id>')
    def get_prescription(id):
        rxid = str(id)
        if rxid not in stores['prescriptions']:
            return jsonify({'error': 'not found'}), 404
        return jsonify(stores['prescriptions'][rxid]), 200

    @app.post('/prescriptions')
    def add_prescription():
        payload = request.get_json(force=True, silent=True) or {}
        
        # Validation Config (from OpenAPI: Prescription)
        err, status = validate_payload(
            payload, 
            required_fields=['id'], 
            field_specs={'id': str}
        )
        if err: return jsonify({'error': err}), status

        rxid = payload['id']
        if rxid in stores['prescriptions']:
            return jsonify({'error': f'prescription {rxid} already exists'}), 409
            
        stores['prescriptions'][rxid] = payload
        return jsonify(stores['prescriptions'][rxid]), 201

    @app.put('/prescriptions/<id>')
    def put_prescription(id):
        payload = request.get_json(force=True, silent=True) or {}
        rxid = str(id)
        stores['prescriptions'][rxid] = {**stores['prescriptions'].get(rxid, {'id': rxid}), **payload}
        stores['prescriptions'][rxid]['id'] = rxid
        return jsonify(stores['prescriptions'][rxid]), 200

    @app.delete('/prescriptions/<id>')
    def delete_prescription(id):
        stores['prescriptions'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    # ---- INVENTORY (key: ndc) ----
    @app.get('/inventory')
    def list_inventory():
        return jsonify(_as_list('inventory')), 200

    @app.get('/inventory/<ndc>')
    def get_inventory(ndc):
        key = str(ndc)
        if key not in stores['inventory']:
            return jsonify({'error': 'not found'}), 404
        return jsonify(stores['inventory'][key]), 200

    @app.post('/inventory')
    def add_inventory():
        payload = request.get_json(force=True, silent=True) or {}
        
        # Validation Config (from OpenAPI: Inventory)
        err, status = validate_payload(
            payload, 
            required_fields=['ndc'], 
            field_specs={'ndc': str}
        )
        if err: return jsonify({'error': err}), status

        ndc = payload['ndc']
        if ndc in stores['inventory']:
            return jsonify({'error': f'inventory {ndc} already exists'}), 409
            
        stores['inventory'][ndc] = payload
        return jsonify(stores['inventory'][ndc]), 201

    @app.put('/inventory/<ndc>')
    def put_inventory(ndc):
        payload = request.get_json(force=True, silent=True) or {}
        key = str(ndc)
        stores['inventory'][key] = {**stores['inventory'].get(key, {'ndc': key}), **payload}
        stores['inventory'][key]['ndc'] = key
        return jsonify(stores['inventory'][key]), 200

    @app.delete('/inventory/<ndc>')
    def delete_inventory(ndc):
        stores['inventory'].pop(str(ndc), None)
        return jsonify({'deleted': str(ndc)}), 200

    return app

if __name__ == '__main__':
#     app = create_app()
#     app.run(host='localhost', port=5000)if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000) # Changed from 5014 to 5000 to match your client