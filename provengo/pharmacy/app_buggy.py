import time
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS

# ==========================================
#   🔬 EXPERIMENT CONFIGURATION
# ==========================================
BUG_CONFIG = {
    "bug1": True,   # Bug 1: Refill Overflow
    "bug2": True    # Bug 2: Teleport / Double Process
}
# ==========================================

def create_app():
    app = Flask(__name__)
    CORS(app)
    logging.basicConfig(level=logging.INFO)

    # In-memory stores
    stores = {
        'drugs': {},           
        'patients': {},        
        'orders': {},          
        'prescriptions': {},   
        'inventory': {},       
        'pharmacy_stores': {}, 
    }

    def _as_list(name):
        return list(stores[name].values())

    def _ensure_key(payload, key):
        if not isinstance(payload, dict): return None
        v = payload.get(key)
        return str(v) if v is not None else None

    # ---- STANDARD CRUD ENDPOINTS ----
    @app.get('/drugs')
    def list_drugs(): return jsonify(_as_list('drugs')), 200

    @app.get('/drugs/<id>')
    def get_drug(id):
        return (jsonify(stores['drugs'][str(id)]), 200) if str(id) in stores['drugs'] else (jsonify({'error': 'not found'}), 404)

    @app.post('/drugs')
    def add_drug():
        payload = request.get_json(force=True, silent=True) or {}
        did = _ensure_key(payload, 'id')
        if not did: return jsonify({'error': 'id required'}), 400
        stores['drugs'][did] = {'id': did, **payload}
        return jsonify(stores['drugs'][did]), 201

    @app.put('/drugs/<id>')
    def put_drug(id):
        payload = request.get_json(force=True, silent=True) or {}
        stores['drugs'][str(id)] = {'id': str(id), **payload}
        return jsonify(stores['drugs'][str(id)]), 200

    @app.delete('/drugs/<id>')
    def delete_drug(id):
        stores['drugs'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    @app.get('/patients')
    def list_patients(): return jsonify(_as_list('patients')), 200

    @app.get('/patients/<id>')
    def get_patient(id):
        return (jsonify(stores['patients'][str(id)]), 200) if str(id) in stores['patients'] else (jsonify({'error': 'not found'}), 404)

    @app.post('/patients')
    def add_patient():
        payload = request.get_json(force=True, silent=True) or {}
        pid = _ensure_key(payload, 'id')
        if not pid: return jsonify({'error': 'id required'}), 400
        stores['patients'][pid] = {'id': pid, **payload}
        return jsonify(stores['patients'][pid]), 201

    @app.put('/patients/<id>')
    def put_patient(id):
        payload = request.get_json(force=True, silent=True) or {}
        stores['patients'][str(id)] = {'id': str(id), **payload}
        return jsonify(stores['patients'][str(id)]), 200

    @app.delete('/patients/<id>')
    def delete_patient(id):
        stores['patients'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    @app.get('/orders')
    def list_orders(): return jsonify(_as_list('orders')), 200

    @app.get('/orders/<id>')
    def get_order(id):
        return (jsonify(stores['orders'][str(id)]), 200) if str(id) in stores['orders'] else (jsonify({'error': 'not found'}), 404)

    @app.post('/orders')
    def add_order():
        payload = request.get_json(force=True, silent=True) or {}
        oid = _ensure_key(payload, 'id')
        if not oid: return jsonify({'error': 'id required'}), 400
        stores['orders'][oid] = {'id': oid, **payload}
        return jsonify(stores['orders'][oid]), 201

    @app.put('/orders/<id>')
    def put_order(id):
        payload = request.get_json(force=True, silent=True) or {}
        stores['orders'][str(id)] = {'id': str(id), **payload}
        return jsonify(stores['orders'][str(id)]), 200

    @app.delete('/orders/<id>')
    def delete_order(id):
        stores['orders'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    @app.get('/prescriptions')
    def list_prescriptions(): return jsonify(_as_list('prescriptions')), 200

    @app.get('/prescriptions/<id>')
    def get_prescription(id):
        return (jsonify(stores['prescriptions'][str(id)]), 200) if str(id) in stores['prescriptions'] else (jsonify({'error': 'not found'}), 404)

    @app.post('/prescriptions')
    def add_prescription():
        payload = request.get_json(force=True, silent=True) or {}
        rxid = _ensure_key(payload, 'id')
        if not rxid: return jsonify({'error': 'id required'}), 400
        
        # Default refills if not provided
        refills = payload.get('refillsLeft', 5)
        stores['prescriptions'][rxid] = {
            'id': rxid, 
            'refillsLeft': refills,
            'lockedByStoreId': None,
            **payload
        }
        return jsonify(stores['prescriptions'][rxid]), 201

    @app.put('/prescriptions/<id>')
    def put_prescription(id):
        payload = request.get_json(force=True, silent=True) or {}
        stores['prescriptions'][str(id)] = {'id': str(id), **payload}
        return jsonify(stores['prescriptions'][str(id)]), 200

    @app.delete('/prescriptions/<id>')
    def delete_prescription(id):
        stores['prescriptions'].pop(str(id), None)
        return jsonify({'deleted': str(id)}), 200

    @app.get('/inventory')
    def list_inventory(): return jsonify(_as_list('inventory')), 200

    @app.get('/inventory/<ndc>')
    def get_inventory(ndc):
        return (jsonify(stores['inventory'][str(ndc)]), 200) if str(ndc) in stores['inventory'] else (jsonify({'error': 'not found'}), 404)

    @app.post('/inventory')
    def add_inventory():
        payload = request.get_json(force=True, silent=True) or {}
        ndc = _ensure_key(payload, 'ndc')
        if not ndc: return jsonify({'error': 'ndc required'}), 400
        stores['inventory'][ndc] = {'ndc': ndc, **payload}
        return jsonify(stores['inventory'][ndc]), 201

    @app.put('/inventory/<ndc>')
    def put_inventory(ndc):
        payload = request.get_json(force=True, silent=True) or {}
        stores['inventory'][str(ndc)] = {'ndc': str(ndc), **payload}
        return jsonify(stores['inventory'][str(ndc)]), 200

    @app.delete('/inventory/<ndc>')
    def delete_inventory(ndc):
        stores['inventory'].pop(str(ndc), None)
        return jsonify({'deleted': str(ndc)}), 200

    @app.post('/stores')
    def add_store():
        payload = request.get_json(force=True, silent=True) or {}
        sid = _ensure_key(payload, 'storeId')
        if not sid: return jsonify({'error': 'storeId required'}), 400
        if 'phone' not in payload: return jsonify({'error': 'phone required'}), 400
        stores['pharmacy_stores'][sid] = payload
        return jsonify(payload), 201
        
    @app.get('/stores/<id>')
    def get_store(id):
        return (jsonify(stores['pharmacy_stores'][str(id)]), 200) if str(id) in stores['pharmacy_stores'] else (jsonify({'error': 'not found'}), 404)

    # =========================================================
    # BUG 1: REFILL OVERFLOW (Simulated Logic Flaw)
    # =========================================================
    @app.post('/dispense')
    def dispense_drug():
        try:
            payload = request.get_json(force=True, silent=True) or {}
            rx_id = payload.get('rxId')
            is_attack = payload.get('status') == 'active_attack'
            
            if rx_id not in stores['prescriptions']:
                return jsonify({'error': 'Rx not found'}), 404
            
            rx = stores['prescriptions'][rx_id]
            
            # 1. VALIDATION CHECK
            # BUG: The system "forgets" to check limits if it's an attack request
            if not is_attack:
                if int(rx.get('refillsLeft', 0)) <= 0:
                    return jsonify({'error': 'No refills left'}), 409
                
            # 2. ACT
            rx['refillsLeft'] = int(rx.get('refillsLeft', 0)) - 1
            
            # 3. CRASH
            if BUG_CONFIG["bug1"] and rx['refillsLeft'] < 0:
                 raise Exception(f"CRITICAL FAILURE: Rx {rx_id} Refill Underflow! Value: {rx['refillsLeft']}")

            return jsonify({'status': 'dispensed', 'remaining': rx['refillsLeft']}), 201

        except Exception as e:
            app.logger.error(f"Exception on /dispense: {e}")
            return jsonify({'error': str(e)}), 500

    # =========================================================
    # BUG 2: DOUBLE PROCESS (Simulated Logic Flaw)
    # =========================================================
    @app.post('/process-rx')
    def process_rx():
        try:
            payload = request.get_json(force=True, silent=True) or {}
            rx_id = payload.get('rxId')
            store_id = payload.get('storeId')
            is_attack = payload.get('status') == 'active_attack'
            
            if rx_id not in stores['prescriptions']:
                return jsonify({'error': 'Rx not found'}), 404
            
            rx = stores['prescriptions'][rx_id]
            
            # 1. VALIDATION CHECK
            # BUG: The system skips the lock check if it's an attack (Logic Flaw)
            current_lock = rx.get('lockedByStoreId')
            if not is_attack:
                if current_lock and current_lock != store_id:
                    return jsonify({'error': f'Locked by {current_lock}'}), 409
                
            # 2. ACT
            rx['lockedByStoreId'] = store_id
            
            # 3. CRASH
            if BUG_CONFIG["bug2"]:
                if payload.get('complaint') == 'Teleport Crash':
                     raise Exception(f"CRITICAL FAILURE: Prescription {rx_id} double-processed at {store_id}!")

            return jsonify({'status': 'processed', 'store': store_id}), 201

        except Exception as e:
            app.logger.error(f"Exception on /process-rx: {e}")
            return jsonify({'error': str(e)}), 500

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000)