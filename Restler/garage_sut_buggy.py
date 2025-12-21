from typing import Dict, Any, List, Tuple, Optional
from flask import Flask, request, jsonify, Response
from datetime import datetime
import logging
import json

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
log = logging.getLogger("garage-chain-sut")

# Stores
chains = {}
garages = {}
customers = {}
cars = {}
pms = {}
ros = {}

def now_iso() -> str:
    return datetime.utcnow().replace(microsecond=0).isoformat() + "Z"

def ok(payload: Any, code: int = 200) -> Tuple[Response, int]:
    return jsonify(payload), code

def err(msg: str, code: int = 400) -> Tuple[Response, int]:
    print(f"--- [SERVER ERROR {code}] {msg}")
    return jsonify({"error": msg}), code

def require_fields(body: Dict[str, Any], fields: List[str]) -> Optional[str]:
    for f in fields:
        if f not in body:
            msg = f"Missing required field: {f}"
            print(f"--- [VALIDATION FAIL] {msg}. Received Body keys: {list(body.keys())}")
            return msg
    return None

def as_bool(x: Any, default=False) -> bool:
    if isinstance(x, bool): return x
    return default

def seed():
    chains.clear(); garages.clear(); customers.clear(); cars.clear(); pms.clear(); ros.clear()
    
    # Chains
    chains["CHAIN-001"] = {
        "chainId": "CHAIN-001", "name": "Prime Auto Care",
        "hqAddress": {"street":"100 HQ Ave"}, "active": True,
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    # Garages
    garages["GAR-001"] = {
        "garageId": "GAR-001", "chainId": "CHAIN-001", "name": "Prime Downtown",
        "address": "10 Main St", "phone": "+15551234567", "bayCount": 6,
        "active": True, "createdAt": now_iso(), "updatedAt": now_iso()
    }
    garages["GAR-002"] = {
        "garageId": "GAR-002", "chainId": "CHAIN-001", "name": "Prime Airport",
        "address": "1 Terminal Rd", "phone": "+15559990000", "bayCount": 8,
        "active": True, "createdAt": now_iso(), "updatedAt": now_iso()
    }
    # Customers
    customers["CUST-100"] = {
        "customerId": "CUST-100", "type":"individual", "fullName":"Ava Chen",
        "email":"ava@example.com", "phone":"+15557654321", "preferredGarageId": "GAR-001",
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    # Cars
    cars["1HGCM82633A004352"] = {
        "vin":"1HGCM82633A004352", "make":"Honda","model":"Civic","year":2021, "mileage":42000,
        "ownerCustomerId":"CUST-100", "homeGarageId":"GAR-001",
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    # PMs
    pms["PM-10010"] = {
        "pmId":"PM-10010", "carVin":"1HGCM82633A004352", "garageId":"GAR-001",
        "planType":"distance_or_time", "tasks":["oil-change"],
        "status":"active", "createdAt": now_iso(), "updatedAt": now_iso()
    }
    # ROs
    ros["RO-55512"] = {
        "roId":"RO-55512","carVin":"1HGCM82633A004352","customerId":"CUST-100",
        "garageId":"GAR-001", "status":"awaiting-approval", "complaint":"Grinding",
        "createdAt": now_iso(), "updatedAt": now_iso()
    }

@app.route("/reset", methods=["POST"])
def reset():
    seed()
    return ok({"status":"reset"}, 200)

# --- CHAINS ---
@app.route("/chains", methods=["POST"])
def create_chain():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["chainId","name","hqAddress"])
    if missing: return err(missing, 400)
    cid = body["chainId"]
    if cid in chains: return err("duplicate-id", 400)
    chains[cid] = body
    return ok(chains[cid], 201)

@app.route("/chains/<chainId>", methods=["GET"])
def read_chain(chainId):
    if chainId not in chains: return err("not-found", 404)
    return ok(chains[chainId], 200)

@app.route("/chains/<chainId>", methods=["PUT"])
def update_chain(chainId):
    if chainId not in chains: return err("not-found", 404)
    chains[chainId].update(request.get_json(force=True, silent=True) or {})
    return ok(chains[chainId], 200)

@app.route("/chains/<chainId>", methods=["DELETE"])
def delete_chain(chainId):
    if chainId not in chains: return err("not-found", 404)
    if any(g.get("chainId")==chainId for g in garages.values()): return err("chain-has-garages", 400)
    del chains[chainId]
    return Response(status=204)

# --- GARAGES ---
@app.route("/garages", methods=["POST"])
def create_garage():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["garageId","chainId","name","address","phone"])
    if missing: return err(missing, 400)
    if body["chainId"] not in chains: return err("invalid-chain", 400)
    garages[body["garageId"]] = body
    return ok(garages[body["garageId"]], 201)

@app.route("/garages/<garageId>", methods=["GET"])
def read_garage(garageId):
    if garageId not in garages: return err("not-found", 404)
    return ok(garages[garageId], 200)

@app.route("/garages/<garageId>", methods=["PUT"])
def update_garage(garageId):
    if garageId not in garages: return err("not-found", 404)
    garages[garageId].update(request.get_json(force=True, silent=True) or {})
    return ok(garages[garageId], 200)

@app.route("/garages/<garageId>", methods=["DELETE"])
def delete_garage(garageId):
    if garageId not in garages: return err("not-found", 404)
    if any(ro for ro in ros.values() if ro.get("garageId")==garageId and ro.get("status")!="closed"): return err("garage-has-open-orders", 400)
    del garages[garageId]
    return Response(status=204)

# --- CUSTOMERS ---
@app.route("/customers", methods=["POST"])
def create_customer():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["customerId","type","fullName","email","phone"])
    if missing: return err(missing, 400)
    customers[body["customerId"]] = body
    return ok(customers[body["customerId"]], 201)

@app.route("/customers/<customerId>", methods=["GET"])
def read_customer(customerId):
    if customerId not in customers: return err("not-found", 404)
    return ok(customers[customerId], 200)

@app.route("/customers/<customerId>", methods=["PUT"])
def update_customer(customerId):
    if customerId not in customers: return err("not-found", 404)
    customers[customerId].update(request.get_json(force=True, silent=True) or {})
    return ok(customers[customerId], 200)

@app.route("/customers/<customerId>", methods=["DELETE"])
def delete_customer(customerId):
    if customerId not in customers: return err("not-found", 404)
    del customers[customerId]
    return Response(status=204)

# --- CARS ---
@app.route("/cars", methods=["POST"])
def create_car():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["vin","ownerCustomerId"])
    if missing: return err(missing, 400)
    if body["ownerCustomerId"] not in customers: return err("invalid-owner", 400)
    cars[body["vin"]] = body
    return ok(cars[body["vin"]], 201)

@app.route("/cars/<vin>", methods=["GET"])
def read_car(vin):
    if vin not in cars: return err("not-found", 404)
    return ok(cars[vin], 200)

@app.route("/cars/<vin>", methods=["PUT"])
def update_car(vin):
    if vin not in cars: return err("not-found", 404)
    cars[vin].update(request.get_json(force=True, silent=True) or {})
    return ok(cars[vin], 200)

@app.route("/cars/<vin>", methods=["DELETE"])
def delete_car(vin):
    if vin not in cars: return err("not-found", 404)
    del cars[vin]
    return Response(status=204)

# --- PMS ---
@app.route("/periodic-maintenance", methods=["POST"])
def create_pm():
    body = request.get_json(force=True, silent=True) or {}
    pms[body["pmId"]] = body
    return ok(pms[body["pmId"]], 201)

# --- REPAIR ORDERS (WITH BUGS) ---
VALID_RO_STATUS = ["open","awaiting-approval","in-progress","ready-for-pickup","closed","canceled"]

@app.route("/repair-orders", methods=["POST"])
def create_ro():
    body = request.get_json(force=True, silent=True) or {}
    print(f"--- [POST /repair-orders] Body: {json.dumps(body)}")
    missing = require_fields(body, ["roId","carVin","customerId","garageId","complaint"])
    if missing: return err(missing, 400)
    
    roId = body["roId"]
    if roId in ros: return err("duplicate-id", 400)
    if body["carVin"] not in cars: return err(f"invalid-car ({body['carVin']})", 400)
    if body["garageId"] not in garages: return err(f"invalid-garage ({body['garageId']})", 400)

    # === BUG 1: Overwhelmed Garage ===
    garage_orders = [r for r in ros.values() if r.get('garageId') == body["garageId"] and r.get('status') == "open"]
    current_load = len(garage_orders)
    
    # DEBUG PRINT FOR TRACEABILITY
    print(f"DEBUG BUG1: Garage {body['garageId']} has {current_load} open orders.")
    
    if current_load >= 2:
        print(f"DEBUG BUG1: CRASHING NOW!")
        raise Exception(f"CRITICAL FAILURE: Garage {body['garageId']} overflow!")
    # === BUG 1 END ===

    # === BUG 2: Teleporting Car ===
    for r in ros.values():
        if r.get('carVin') == body["carVin"] and r.get('status') in ["open", "in-progress"] and r.get('garageId') != body["garageId"]:
             print(f"DEBUG BUG2: CRASHING NOW! Car {body['carVin']} is in {r['garageId']}")
             raise Exception(f"CRITICAL LOGIC ERROR: Car {body['carVin']} is already active in Garage {r['garageId']}!")
    # === BUG 2 END ===

    ros[roId] = {
        "roId": roId, "carVin": body["carVin"], "customerId": body["customerId"],
        "garageId": body["garageId"], "complaint": body["complaint"],
        "openedAt": now_iso(), "status": body.get("status","awaiting-approval"),
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    return ok(ros[roId], 201)

@app.route("/repair-orders/<roId>", methods=["GET"])
def read_ro(roId):
    if roId not in ros: return err("not-found", 404)
    return ok(ros[roId], 200)

@app.route("/repair-orders/<roId>", methods=["PUT"])
def update_ro(roId):
    if roId not in ros: return err("not-found", 404)
    ros[roId].update(request.get_json(force=True, silent=True) or {})
    return ok(ros[roId], 200)

@app.route("/repair-orders/<roId>", methods=["DELETE"])
def delete_ro(roId):
    if roId not in ros: return err("not-found", 404)
    del ros[roId]
    return Response(status=204)

if __name__ == "__main__":
    seed()
    app.run(host="localhost", port=5000, debug=False)