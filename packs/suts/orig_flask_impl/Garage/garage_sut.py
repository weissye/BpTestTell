
from typing import Dict, Any, List, Tuple, Optional
from flask import Flask, request, jsonify, Response
from datetime import datetime
import logging

# ---------------------------------
# App setup
# ---------------------------------
app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
log = logging.getLogger("garage-chain-sut")

# ---------------------------------
# In-memory stores
# ---------------------------------
chains: Dict[str, Dict[str, Any]] = {}
garages: Dict[str, Dict[str, Any]] = {}
customers: Dict[str, Dict[str, Any]] = {}
cars: Dict[str, Dict[str, Any]] = {}
pms: Dict[str, Dict[str, Any]] = {}
ros: Dict[str, Dict[str, Any]] = {}

# ---------------------------------
# Helpers
# ---------------------------------
def now_iso() -> str:
    return datetime.utcnow().replace(microsecond=0).isoformat() + "Z"

def ok(payload: Any, code: int = 200) -> Tuple[Response, int]:
    return jsonify(payload), code

def err(msg: str, code: int = 400) -> Tuple[Response, int]:
    return jsonify({"error": msg}), code

def require_fields(body: Dict[str, Any], fields: List[str]) -> Optional[str]:
    for f in fields:
        if f not in body:
            return f"Missing required field: {f}"
    return None

def as_bool(x: Any, default=False) -> bool:
    if isinstance(x, bool): return x
    return default

# ---------------------------------
# Seed data
# ---------------------------------
def seed():
    chains.clear(); garages.clear(); customers.clear(); cars.clear(); pms.clear(); ros.clear()

    # Chains
    chains["CHAIN-001"] = {
        "chainId": "CHAIN-001",
        "name": "Prime Auto Care",
        "hqAddress": {"street":"100 HQ Ave","city":"Metropolis","postalCode":"10000","country":"US"},
        "supportEmail": "support@primeautocare.example",
        "active": True,
        "createdAt": now_iso(), "updatedAt": now_iso()
    }

    # Garages
    garages["GAR-001"] = {
        "garageId": "GAR-001",
        "chainId": "CHAIN-001",
        "name": "Prime Downtown",
        "address": {"street":"10 Main St","city":"Metro","postalCode":"12345","country":"US"},
        "phone": "+15551234567",
        "bayCount": 6,
        "servicesOffered": ["oil-change","brakes","tires"],
        "active": True,
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    garages["GAR-002"] = {
        "garageId": "GAR-002",
        "chainId": "CHAIN-001",
        "name": "Prime Airport",
        "address": {"street":"1 Terminal Rd","city":"Metro","postalCode":"10001","country":"US"},
        "phone": "+15559990000",
        "bayCount": 8,
        "servicesOffered": ["inspection","ac","battery"],
        "active": True,
        "createdAt": now_iso(), "updatedAt": now_iso()
    }

    # Customers
    customers["CUST-100"] = {
        "customerId": "CUST-100", "type":"individual", "fullName":"Ava Chen",
        "email":"ava@example.com", "phone":"+15557654321",
        "preferredGarageId": "GAR-001",
        "createdAt": now_iso(), "updatedAt": now_iso()
    }

    # Cars
    cars["1HGCM82633A004352"] = {
        "vin":"1HGCM82633A004352", "make":"Honda","model":"Civic","year":2021,
        "mileage":42000, "ownerCustomerId":"CUST-100", "homeGarageId":"GAR-001",
        "createdAt": now_iso(), "updatedAt": now_iso()
    }

    # Periodic Maintenance
    pms["PM-10010"] = {
        "pmId":"PM-10010", "carVin":"1HGCM82633A004352", "garageId":"GAR-001",
        "planType":"distance_or_time", "intervalKm":10000, "intervalMonths":12,
        "tasks":["oil-change","filter","inspection"],
        "status":"active", "createdAt": now_iso(), "updatedAt": now_iso()
    }

    # Repair Order
    ros["RO-55512"] = {
        "roId":"RO-55512","carVin":"1HGCM82633A004352","customerId":"CUST-100","garageId":"GAR-001",
        "openedAt": now_iso(), "status":"awaiting-approval",
        "complaint":"Grinding noise when braking",
        "createdAt": now_iso(), "updatedAt": now_iso()
    }

# ---------------------------------
# Reset endpoint
# ---------------------------------
@app.route("/reset", methods=["POST"])
def reset():
    seed()
    return ok({"status":"reset","chains":len(chains),"garages":len(garages),"customers":len(customers),"cars":len(cars),"pms":len(pms),"ros":len(ros)}, 200)

# ---------------------------------
# Chains
# ---------------------------------
@app.route("/chains", methods=["POST"])
def create_chain():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["chainId","name","hqAddress"])
    if missing: return err(missing, 400)
    cid = body["chainId"]
    if cid in chains: return err("duplicate-id", 400)
    chains[cid] = {
        "chainId": cid,
        "name": body["name"],
        "hqAddress": body["hqAddress"],
        "supportEmail": body.get("supportEmail"),
        "active": as_bool(body.get("active", True)),
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    return ok(chains[cid], 201)

@app.route("/chains", methods=["GET"])
def list_chains():
    return ok(list(chains.values()), 200)

@app.route("/chains/<chainId>", methods=["GET"])
def read_chain(chainId):
    c = chains.get(chainId)
    if not c: return err("not-found", 404)
    return ok(c, 200)

@app.route("/chains/<chainId>", methods=["PUT"])
def update_chain(chainId):
    c = chains.get(chainId)
    if not c: return err("not-found", 404)
    body = request.get_json(force=True, silent=True) or {}
    for k in ["name","hqAddress","supportEmail","active"]:
        if k in body: c[k] = body[k]
    c["updatedAt"] = now_iso()
    return ok(c, 200)

@app.route("/chains/<chainId>", methods=["DELETE"])
def delete_chain(chainId):
    c = chains.get(chainId)
    if not c: return err("not-found", 404)
    # Business rule: cannot delete a chain that still has garages
    if any(g.get("chainId")==chainId for g in garages.values()):
        return err("chain-has-garages", 400)
    del chains[chainId]
    return Response(status=204)

# ---------------------------------
# Garages
# ---------------------------------
@app.route("/garages", methods=["POST"])
def create_garage():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["garageId","chainId","name","address","phone"])
    if missing: return err(missing, 400)
    gid = body["garageId"]
    if gid in garages: return err("duplicate-id", 400)
    if body["chainId"] not in chains: return err("invalid-chain", 400)
    garages[gid] = {
        "garageId": gid,
        "chainId": body["chainId"],
        "name": body["name"],
        "address": body["address"],
        "phone": body["phone"],
        "bayCount": body.get("bayCount", 0),
        "servicesOffered": body.get("servicesOffered", []),
        "active": as_bool(body.get("active", True)),
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    return ok(garages[gid], 201)

@app.route("/garages", methods=["GET"])
def list_garages():
    return ok(list(garages.values()), 200)

@app.route("/garages/<garageId>", methods=["GET"])
def read_garage(garageId):
    g = garages.get(garageId)
    if not g: return err("not-found", 404)
    return ok(g, 200)

@app.route("/garages/<garageId>", methods=["PUT"])
def update_garage(garageId):
    g = garages.get(garageId)
    if not g: return err("not-found", 404)
    body = request.get_json(force=True, silent=True) or {}
    if "chainId" in body and body["chainId"] not in chains:
        return err("invalid-chain", 400)
    for k in ["chainId","name","address","phone","bayCount","servicesOffered","active"]:
        if k in body: g[k] = body[k]
    g["updatedAt"] = now_iso()
    return ok(g, 200)

@app.route("/garages/<garageId>", methods=["DELETE"])
def delete_garage(garageId):
    g = garages.get(garageId)
    if not g: return err("not-found", 404)
    # Cannot delete if open repair orders
    if any(ro for ro in ros.values() if ro.get("garageId")==garageId and ro.get("status")!="closed"):
        return err("garage-has-open-orders", 400)
    # Cannot delete if any cars have this homeGarageId
    if any(car for car in cars.values() if car.get("homeGarageId")==garageId):
        return err("garage-has-cars", 400)
    del garages[garageId]
    return Response(status=204)

# ---------------------------------
# Customers
# ---------------------------------
@app.route("/customers", methods=["POST"])
def create_customer():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["customerId","type","fullName","email","phone"])
    if missing: return err(missing, 400)
    cid = body["customerId"]
    if cid in customers: return err("duplicate-id", 400)
    if body.get("preferredGarageId") and body["preferredGarageId"] not in garages:
        return err("invalid-garage", 400)
    customers[cid] = {
        "customerId": cid, "type": body["type"], "fullName": body["fullName"],
        "email": body["email"], "phone": body["phone"],
        "preferredGarageId": body.get("preferredGarageId"),
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    return ok(customers[cid], 201)

@app.route("/customers", methods=["GET"])
def list_customers():
    return ok(list(customers.values()), 200)

@app.route("/customers/<customerId>", methods=["GET"])
def read_customer(customerId):
    c = customers.get(customerId)
    if not c: return err("not-found", 404)
    return ok(c, 200)

@app.route("/customers/<customerId>", methods=["PUT"])
def update_customer(customerId):
    c = customers.get(customerId)
    if not c: return err("not-found", 404)
    body = request.get_json(force=True, silent=True) or {}
    if "preferredGarageId" in body and body["preferredGarageId"] not in garages:
        return err("invalid-garage", 400)
    for k in ["type","fullName","email","phone","preferredGarageId"]:
        if k in body: c[k] = body[k]
    c["updatedAt"] = now_iso()
    return ok(c, 200)

@app.route("/customers/<customerId>", methods=["DELETE"])
def delete_customer(customerId):
    c = customers.get(customerId)
    if not c: return err("not-found", 404)
    # Cannot delete if they own cars
    if any(car for car in cars.values() if car.get("ownerCustomerId")==customerId):
        return err("customer-has-active-cars", 400)
    # Cannot delete if they have open repair orders
    if any(ro for ro in ros.values() if ro.get("customerId")==customerId and ro.get("status")!="closed"):
        return err("customer-has-open-orders", 400)
    del customers[customerId]
    return Response(status=204)

# ---------------------------------
# Cars
# ---------------------------------
@app.route("/cars", methods=["POST"])
def create_car():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["vin","make","model","year","mileage","ownerCustomerId"])
    if missing: return err(missing, 400)
    vin = body["vin"]
    if vin in cars: return err("duplicate-vin", 400)
    if body["ownerCustomerId"] not in customers: return err("invalid-owner", 400)
    if body.get("homeGarageId") and body["homeGarageId"] not in garages:
        return err("invalid-garage", 400)
    cars[vin] = {
        "vin": vin, "make":body["make"], "model":body["model"],
        "year": int(body["year"]), "mileage": int(body["mileage"]),
        "ownerCustomerId": body["ownerCustomerId"],
        "homeGarageId": body.get("homeGarageId"),
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    return ok(cars[vin], 201)

@app.route("/cars", methods=["GET"])
def list_cars():
    return ok(list(cars.values()), 200)

@app.route("/cars/<vin>", methods=["GET"])
def read_car(vin):
    car = cars.get(vin)
    if not car: return err("not-found", 404)
    return ok(car, 200)

@app.route("/cars/<vin>", methods=["PUT"])
def update_car(vin):
    car = cars.get(vin)
    if not car: return err("not-found", 404)
    body = request.get_json(force=True, silent=True) or {}
    if "ownerCustomerId" in body and body["ownerCustomerId"] not in customers:
        return err("invalid-owner", 400)
    if "homeGarageId" in body and body["homeGarageId"] not in garages:
        return err("invalid-garage", 400)
    for k in ["make","model","year","mileage","ownerCustomerId","homeGarageId"]:
        if k in body: car[k] = body[k]
    car["updatedAt"] = now_iso()
    return ok(car, 200)

@app.route("/cars/<vin>", methods=["DELETE"])
def delete_car(vin):
    car = cars.get(vin)
    if not car: return err("not-found", 404)
    # Cannot delete if there are open repair orders for this car
    if any(ro for ro in ros.values() if ro.get("carVin")==vin and ro.get("status")!="closed"):
        return err("car-has-open-orders", 400)
    # Remove related PM plans as convenience (or enforce if needed)
    for pmid in [pm["pmId"] for pm in pms.values() if pm.get("carVin")==vin]:
        del pms[pmid]
    del cars[vin]
    return Response(status=204)

# ---------------------------------
# Periodic Maintenance
# ---------------------------------
@app.route("/periodic-maintenance", methods=["POST"])
def create_pm():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["pmId","carVin","garageId","planType","tasks"])
    if missing: return err(missing, 400)
    pmId = body["pmId"]
    if pmId in pms: return err("duplicate-id", 400)
    if body["carVin"] not in cars: return err("invalid-car", 400)
    if body["garageId"] not in garages: return err("invalid-garage", 400)
    pms[pmId] = {
        "pmId": pmId, "carVin": body["carVin"], "garageId": body["garageId"],
        "planType": body["planType"],
        "intervalKm": body.get("intervalKm"), "intervalMonths": body.get("intervalMonths"),
        "tasks": body["tasks"],
        "status": body.get("status","active"),
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    return ok(pms[pmId], 201)

@app.route("/periodic-maintenance", methods=["GET"])
def list_pm():
    return ok(list(pms.values()), 200)

@app.route("/periodic-maintenance/<pmId>", methods=["GET"])
def read_pm(pmId):
    pm = pms.get(pmId)
    if not pm: return err("not-found", 404)
    return ok(pm, 200)

@app.route("/periodic-maintenance/<pmId>", methods=["PUT"])
def update_pm(pmId):
    pm = pms.get(pmId)
    if not pm: return err("not-found", 404)
    body = request.get_json(force=True, silent=True) or {}
    if "carVin" in body and body["carVin"] not in cars:
        return err("invalid-car", 400)
    if "garageId" in body and body["garageId"] not in garages:
        return err("invalid-garage", 400)
    for k in ["carVin","garageId","planType","intervalKm","intervalMonths","tasks","status"]:
        if k in body: pm[k] = body[k]
    pm["updatedAt"] = now_iso()
    return ok(pm, 200)

@app.route("/periodic-maintenance/<pmId>", methods=["DELETE"])
def delete_pm(pmId):
    pm = pms.get(pmId)
    if not pm: return err("not-found", 404)
    del pms[pmId]
    return Response(status=204)

# ---------------------------------
# Repair Orders & workflow
# ---------------------------------
VALID_RO_STATUS = ["open","awaiting-approval","in-progress","ready-for-pickup","closed","canceled"]

@app.route("/repair-orders", methods=["POST"])
def create_ro():
    body = request.get_json(force=True, silent=True) or {}
    missing = require_fields(body, ["roId","carVin","customerId","garageId","complaint"])
    if missing: return err(missing, 400)
    roId = body["roId"]
    if roId in ros: return err("duplicate-id", 400)
    if body["carVin"] not in cars: return err("invalid-car", 400)
    if body["customerId"] not in customers: return err("invalid-customer", 400)
    if body["garageId"] not in garages: return err("invalid-garage", 400)
    ros[roId] = {
        "roId": roId, "carVin": body["carVin"], "customerId": body["customerId"],
        "garageId": body["garageId"], "complaint": body["complaint"],
        "openedAt": now_iso(), "status": body.get("status","awaiting-approval"),
        "createdAt": now_iso(), "updatedAt": now_iso()
    }
    return ok(ros[roId], 201)

@app.route("/repair-orders", methods=["GET"])
def list_ro():
    return ok(list(ros.values()), 200)

@app.route("/repair-orders/<roId>", methods=["GET"])
def read_ro(roId):
    ro = ros.get(roId)
    if not ro: return err("not-found", 404)
    return ok(ro, 200)

@app.route("/repair-orders/<roId>", methods=["PUT"])
def update_ro(roId):
    ro = ros.get(roId)
    if not ro: return err("not-found", 404)
    body = request.get_json(force=True, silent=True) or {}
    if "carVin" in body and body["carVin"] not in cars:
        return err("invalid-car", 400)
    if "customerId" in body and body["customerId"] not in customers:
        return err("invalid-customer", 400)
    if "garageId" in body and body["garageId"] not in garages:
        return err("invalid-garage", 400)
    if "status" in body and body["status"] not in VALID_RO_STATUS:
        return err("invalid-status", 400)
    for k in ["carVin","customerId","garageId","complaint","status"]:
        if k in body: ro[k] = body[k]
    ro["updatedAt"] = now_iso()
    return ok(ro, 200)

@app.route("/repair-orders/<roId>", methods=["DELETE"])
def delete_ro(roId):
    ro = ros.get(roId)
    if not ro: return err("not-found", 404)
    del ros[roId]
    return Response(status=204)

# Workflow actions
@app.route("/repair-orders/<roId>/approve", methods=["POST"])
def approve_ro(roId):
    ro = ros.get(roId)
    if not ro: return err("not-found", 404)
    if ro["status"] not in ["open","awaiting-approval"]:
        return err("invalid-state", 400)
    ro["status"] = "in-progress"
    ro["updatedAt"] = now_iso()
    return ok(ro, 200)

@app.route("/repair-orders/<roId>/close", methods=["POST"])
def close_ro(roId):
    ro = ros.get(roId)
    if not ro: return err("not-found", 404)
    if ro["status"] not in ["ready-for-pickup","in-progress","open"]:
        return err("invalid-state", 400)
    ro["status"] = "closed"
    ro["closedAt"] = now_iso()
    ro["updatedAt"] = now_iso()
    return ok(ro, 200)

# ---------------------------------
# Main
# ---------------------------------
if __name__ == "__main__":
    seed()
    app.run(host="0.0.0.0", port=5000, debug=False)
