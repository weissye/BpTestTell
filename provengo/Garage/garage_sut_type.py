"""
Garage Chain SUT API (Strict Schema Enforcement + Broadened)
"""

from typing import Dict, Any, Tuple, Optional
from flask import Flask, request, jsonify, Response
from datetime import datetime
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
log = logging.getLogger("garage-chain-sut")

chains = {}
garages = {}
customers = {}
cars = {}
pms = {}
ros = {}

def now_iso() -> str:
    return datetime.utcnow().isoformat() + "Z"

def ok(payload: Any, code: int = 200) -> Tuple[Response, int]:
    return jsonify(payload), code

def err(msg: str, code: int = 400) -> Tuple[Response, int]:
    log.warning(f"Returning Error {code}: {msg}")
    return jsonify({"error": msg}), code

def validate_schema(data: Dict, schema: Dict[str, type], required: list) -> Tuple[Optional[str], Optional[int]]:
    allowed_keys = set(schema.keys())
    actual_keys = set(data.keys())
    unknown = actual_keys - allowed_keys
    if unknown:
        return f"Unknown fields not allowed: {', '.join(unknown)}", 400

    for req in required:
        if req not in data:
            return f"Missing required field: {req}", 400
        if data[req] is None:
            return f"Field '{req}' cannot be null", 400

    for key, value in data.items():
        if value is None: continue 
        expected_type = schema[key]
        
        if expected_type == int:
            if not isinstance(value, int) or isinstance(value, bool):
                return f"Field '{key}' must be an integer, got {type(value).__name__}", 400
        elif expected_type == str:
            if not isinstance(value, str):
                return f"Field '{key}' must be a string, got {type(value).__name__}", 400
        elif expected_type == bool:
            if not isinstance(value, bool):
                return f"Field '{key}' must be a boolean, got {type(value).__name__}", 400
        elif expected_type == list:
            if not isinstance(value, list):
                return f"Field '{key}' must be a list, got {type(value).__name__}", 400
        elif expected_type == dict:
            if not isinstance(value, dict):
                return f"Field '{key}' must be an object, got {type(value).__name__}", 400

    return None, None

def seed():
    chains.clear(); garages.clear(); customers.clear(); cars.clear(); pms.clear(); ros.clear()
    chains["CHAIN-001"] = {
        "chainId": "CHAIN-001", "name": "Prime Auto Care", "hqAddress": {"city":"Metropolis"}, "active": True
    }
    garages["GAR-001"] = {
        "garageId": "GAR-001", "chainId": "CHAIN-001", "name": "Prime Downtown", 
        "address": {"street":"Main"}, "phone":"555", "bayCount":2, "active":True, "servicesOffered":[]
    }
    customers["CUST-100"] = {
        "customerId":"CUST-100", "fullName":"Ava", "email":"a@b.com", "phone":"555", "type":"vip"
    }

@app.route("/reset", methods=["POST"])
def reset():
    seed()
    return ok({"status":"reset"}, 200)

# --- DEFINITIONS ---
# Schemas updated to match Generator output exactly
CHAIN_SCHEMA = {
    "chainId": str, "name": str, "hqAddress": dict, "supportEmail": str, "active": bool, "description": str
}
GARAGE_SCHEMA = {
    "garageId": str, "chainId": str, "name": str, "address": dict, "phone": str, 
    "bayCount": int, "servicesOffered": list, "active": bool, "description": str,
    "capacity": int, "location": dict 
}
CUST_SCHEMA = {
    "customerId": str, "type": str, "fullName": str, "email": str, "phone": str, 
    "preferredGarageId": str, "description": str,
    "name": str 
}
CAR_SCHEMA = {
    "vin": str, "make": str, "model": str, "year": int, "mileage": int, 
    "ownerCustomerId": str, "homeGarageId": str, "description": str,
    "color": str, "licensePlate": str # <--- ADDED THESE
}
PM_SCHEMA = {
    "pmId": str, "carVin": str, "garageId": str, "planType": str, "tasks": list,
    "intervalKm": int, "intervalMonths": int, "status": str, "description": str,
    "schedule": dict 
}
RO_SCHEMA = {
    "roId": str, "carVin": str, "customerId": str, "garageId": str, "complaint": str, 
    "status": str, "description": str
}

@app.route("/chains", methods=["POST"])
def create_chain():
    body = request.get_json(force=True, silent=True) or {}
    err_msg, code = validate_schema(body, CHAIN_SCHEMA, ["chainId", "name", "hqAddress"])
    if err_msg: return err(err_msg, code)
    if body["chainId"] in chains: return err("duplicate-id", 400)
    chains[body["chainId"]] = body
    return ok(body, 201)

@app.route("/garages", methods=["POST"])
def create_garage():
    body = request.get_json(force=True, silent=True) or {}
    err_msg, code = validate_schema(body, GARAGE_SCHEMA, ["garageId", "chainId", "name", "address", "phone"])
    if err_msg: return err(err_msg, code)
    if body["chainId"] not in chains: return err("invalid-chain", 400)
    if body["garageId"] in garages: return err("duplicate-id", 400)
    garages[body["garageId"]] = body
    return ok(body, 201)

@app.route("/customers", methods=["POST"])
def create_customer():
    body = request.get_json(force=True, silent=True) or {}
    err_msg, code = validate_schema(body, CUST_SCHEMA, ["customerId", "fullName", "email", "phone"])
    if err_msg: return err(err_msg, code)
    if body.get("preferredGarageId") and body["preferredGarageId"] not in garages: return err("invalid-garage", 400)
    if body["customerId"] in customers: return err("duplicate-id", 400)
    customers[body["customerId"]] = body
    return ok(body, 201)

@app.route("/cars", methods=["POST"])
def create_car():
    body = request.get_json(force=True, silent=True) or {}
    err_msg, code = validate_schema(body, CAR_SCHEMA, ["vin", "make", "model", "year", "mileage", "ownerCustomerId"])
    if err_msg: return err(err_msg, code)
    if body["ownerCustomerId"] not in customers: return err("invalid-owner", 400)
    if body.get("homeGarageId") and body["homeGarageId"] not in garages: return err("invalid-garage", 400)
    if body["vin"] in cars: return err("duplicate-vin", 400)
    cars[body["vin"]] = body
    return ok(body, 201)

@app.route("/periodic-maintenance", methods=["POST"])
def create_pm():
    body = request.get_json(force=True, silent=True) or {}
    err_msg, code = validate_schema(body, PM_SCHEMA, ["pmId", "carVin", "garageId", "planType", "tasks"])
    if err_msg: return err(err_msg, code)
    if body["carVin"] not in cars: return err("invalid-car", 400)
    if body["garageId"] not in garages: return err("invalid-garage", 400)
    if body["pmId"] in pms: return err("duplicate-id", 400)
    pms[body["pmId"]] = body
    return ok(body, 201)

@app.route("/repair-orders", methods=["POST"])
def create_ro():
    body = request.get_json(force=True, silent=True) or {}
    err_msg, code = validate_schema(body, RO_SCHEMA, ["roId", "carVin", "customerId", "garageId", "complaint"])
    if err_msg: return err(err_msg, code)
    if body["carVin"] not in cars: return err("invalid-car", 400)
    if body["customerId"] not in customers: return err("invalid-customer", 400)
    if body["garageId"] not in garages: return err("invalid-garage", 400)
    if body["roId"] in ros: return err("duplicate-id", 400)
    ros[body["roId"]] = body
    return ok(body, 201)

@app.route("/chains/<id>", methods=["GET"])
def get_chain(id): return ok(chains[id]) if id in chains else err("not-found", 404)
@app.route("/garages/<id>", methods=["GET"])
def get_garage(id): return ok(garages[id]) if id in garages else err("not-found", 404)
@app.route("/customers/<id>", methods=["GET"])
def get_customer(id): return ok(customers[id]) if id in customers else err("not-found", 404)
@app.route("/cars/<id>", methods=["GET"])
def get_car(id): return ok(cars[id]) if id in cars else err("not-found", 404)
@app.route("/repair-orders/<id>", methods=["GET"])
def get_ro(id): return ok(ros[id]) if id in ros else err("not-found", 404)
@app.route("/periodic-maintenance/<id>", methods=["GET"])
def get_pm(id): return ok(pms[id]) if id in pms else err("not-found", 404)
@app.route("/chains", methods=["GET"])
def list_chains(): return ok(list(chains.values()))
@app.route("/garages", methods=["GET"])
def list_garages(): return ok(list(garages.values()))
@app.route("/customers", methods=["GET"])
def list_customers(): return ok(list(customers.values()))
@app.route("/cars", methods=["GET"])
def list_cars(): return ok(list(cars.values()))
@app.route("/repair-orders", methods=["GET"])
def list_ros(): return ok(list(ros.values()))

if __name__ == "__main__":
    seed()    
    app.run(host="localhost", port=8000, debug=False)