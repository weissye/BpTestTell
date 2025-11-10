
from flask import Flask, request, jsonify
from typing import Dict, Any
app = Flask(__name__)

def ok(x, c=200): return jsonify(x), c
def err(m, c=400): return jsonify({"error": m}), c

# In-memory stores
chains: Dict[str, Any] = {}
garages: Dict[str, Any] = {}
customers: Dict[str, Any] = {}
cars: Dict[str, Any] = {}
pms: Dict[str, Any] = {}
ros: Dict[str, Any] = {}

@app.post("/reset")
def reset():
    chains.clear(); garages.clear(); customers.clear(); cars.clear(); pms.clear(); ros.clear()
    return ok({"status":"reset"})

# ------ Create helpers (409 on duplicate) ------
def create(store: Dict[str, Any], key: str, body_key="id", extra=None):
    b = request.get_json(silent=True) or {}
    if body_key not in b: return err(f"Missing required field: {body_key}", 400)
    k = str(b[body_key])
    if k in store: return err("duplicate-id", 409)
    obj = dict(b); obj[body_key] = k
    if extra: obj.update(extra)
    store[k] = obj
    return ok(obj, 201)

# ------ Chains ------
@app.get("/chains")
def list_chains(): return ok(list(chains.values()))

@app.post("/chains")
def add_chain(): return create(chains, "chainId", body_key="chainId")

@app.delete("/chains/<chainId>")
def delete_chain(chainId: str):
    # business rules: keep as 400 if garages exist
    if any(g.get("chainId")==chainId for g in garages.values()):
        return err("chain-has-garages", 400)
    deleted = chains.pop(chainId, None) is not None
    return ok({"deleted": deleted, "chainId": chainId}, 200)

# ------ Garages ------
@app.get("/garages")
def list_garages(): return ok(list(garages.values()))

@app.post("/garages")
def add_garage():
    b = request.get_json(silent=True) or {}
    if "garageId" not in b: return err("Missing required field: garageId", 400)
    if "chainId" not in b: return err("Missing required field: chainId", 400)
    if b["garageId"] in garages: return err("duplicate-id", 409)
    if b["chainId"] not in chains: chains[b["chainId"]]={"chainId":str(b["chainId"])}
    garages[b["garageId"]] = {"garageId": str(b["garageId"]), "chainId": str(b["chainId"]), **{k:v for k,v in b.items() if k not in ("garageId","chainId")}}
    return ok(garages[b["garageId"]], 201)

@app.delete("/garages/<garageId>")
def delete_garage(garageId: str):
    if any(car for car in cars.values() if car.get("homeGarageId")==garageId):
        return err("garage-has-cars", 400)
    if any(ro for ro in ros.values() if ro.get("garageId")==garageId and ro.get("status")!="closed"):
        return err("garage-has-open-orders", 400)
    deleted = garages.pop(garageId, None) is not None
    return ok({"deleted": deleted, "garageId": garageId}, 200)

# ------ Customers ------
@app.get("/customers")
def list_customers(): return ok(list(customers.values()))

@app.post("/customers")
def add_customer(): return create(customers, "customerId", body_key="customerId")

@app.delete("/customers/<customerId>")
def delete_customer(customerId: str):
    if any(car for car in cars.values() if car.get("ownerCustomerId")==customerId):
        return err("customer-has-active-cars", 400)
    if any(ro for ro in ros.values() if ro.get("customerId")==customerId and ro.get("status")!="closed"):
        return err("customer-has-open-orders", 400)
    deleted = customers.pop(customerId, None) is not None
    return ok({"deleted": deleted, "customerId": customerId}, 200)

# ------ Cars ------
@app.get("/cars")
def list_cars(): return ok(list(cars.values()))

@app.post("/cars")
def add_car():
    b = request.get_json(silent=True) or {}
    if "vin" not in b: return err("Missing required field: vin", 400)
    if "ownerCustomerId" not in b: return err("Missing required field: ownerCustomerId", 400)
    if "homeGarageId" not in b: return err("Missing required field: homeGarageId", 400)
    if b["vin"] in cars: return err("duplicate-vin", 409)
    if b["ownerCustomerId"] not in customers: customers[b["ownerCustomerId"]]={"customerId":str(b["ownerCustomerId"])}
    if b["homeGarageId"] not in garages: garages[b["homeGarageId"]]={"garageId":str(b["homeGarageId"]), "chainId":"AUTO"}
    cars[b["vin"]] = {"vin": str(b["vin"]), **{k:v for k,v in b.items() if k!="vin"}}
    return ok(cars[b["vin"]], 201)

@app.delete("/cars/<vin>")
def delete_car(vin: str):
    if any(ro for ro in ros.values() if ro.get("vin")==vin and ro.get("status")!="closed"):
        return err("car-has-open-orders", 400)
    deleted = cars.pop(vin, None) is not None
    return ok({"deleted": deleted, "vin": vin}, 200)

# ------ Preventive Maintenance (PM) ------
@app.get("/pms")
def list_pms(): return ok(list(pms.values()))

@app.post("/pms")
def add_pm(): return create(pms, "pmId", body_key="pmId")

@app.delete("/pms/<pmId>")
def delete_pm(pmId: str):
    deleted = pms.pop(pmId, None) is not None
    return ok({"deleted": deleted, "pmId": pmId}, 200)

# ------ Repair Orders (RO) ------
@app.get("/ros")
def list_ros(): return ok(list(ros.values()))

@app.post("/ros")
def add_ro():
    b = request.get_json(silent=True) or {}
    if "roId" not in b: return err("Missing required field: roId", 400)
    if b["roId"] in ros: return err("duplicate-id", 409)
    ro = {"roId": str(b["roId"]), "status": b.get("status","open")}
    ro.update({k:v for k,v in b.items() if k not in ("roId","status")})
    ros[ro["roId"]] = ro
    return ok(ro, 201)

@app.put("/ros/<roId>")
def update_ro(roId: str):
    ro = ros.get(roId)
    if not ro: return err("not-found", 404)
    payload = request.get_json(silent=True) or {}
    ro.update(payload); ro["roId"] = roId
    return ok(ro, 200)

@app.delete("/ros/<roId>")
def delete_ro(roId: str):
    deleted = ros.pop(roId, None) is not None
    return ok({"deleted": deleted, "roId": roId}, 200)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
