
from flask import Flask, request, jsonify
from datetime import datetime
from typing import Dict, Any, List
app = Flask(__name__)

def now(): return datetime.utcnow().replace(microsecond=0).isoformat()+'Z'
def ok(x, c=200): return jsonify(x), c
def err(m, c=400): return jsonify({"error": m}), c

machines: Dict[str, Any] = {}
workorders: Dict[str, Any] = {}
tickets: Dict[str, Any] = {}
readings: List[Dict[str, Any]] = []

@app.post("/reset")
def reset():
    machines.clear(); workorders.clear(); tickets.clear(); readings.clear()
    # seed one machine to match prior behavior
    machines["M-1"] = {"machineId":"M-1","plantId":"PL-1","status":"idle","createdAt": now()}
    return ok({"status":"reset"})

# ---------- Machines ----------
@app.get("/machines")
def list_machines(): return ok(list(machines.values()))

@app.post("/machines")
def add_machine():
    b = request.get_json(silent=True) or {}
    if "machineId" not in b or "plantId" not in b: return err("Missing required field", 400)
    mid = str(b["machineId"])
    if mid in machines: return err("duplicate-id", 409)
    obj = {"machineId": mid, "plantId": str(b["plantId"]), "status": b.get("status","idle"), "createdAt": now()}
    obj.update({k:v for k,v in b.items() if k not in ("machineId","plantId","status")})
    machines[mid] = obj
    return ok(obj, 201)

@app.put("/machines/<mid>")
def update_machine(mid: str):
    m = machines.get(mid)
    if not m: return err("not-found", 404)
    payload = request.get_json(silent=True) or {}
    m.update(payload); m["machineId"] = mid
    return ok(m, 200)

@app.delete("/machines/<mid>")
def delete_machine(mid: str):
    deleted = machines.pop(mid, None) is not None
    return ok({"deleted": deleted, "machineId": mid}, 200)

# ---------- Work Orders ----------
@app.get("/workorders")
def list_workorders(): return ok(list(workorders.values()))

@app.post("/workorders")
def add_workorder():
    b = request.get_json(silent=True) or {}
    if "woId" not in b or "machineId" not in b: return err("Missing required field", 400)
    if b["machineId"] not in machines: return err("invalid-machine", 400)
    wid = str(b["woId"])
    if wid in workorders: return err("duplicate-id", 409)
    obj = {"woId": wid, "machineId": str(b["machineId"]), "status": b.get("status","open"), "createdAt": now()}
    obj.update({k:v for k,v in b.items() if k not in ("woId","machineId","status")})
    workorders[wid] = obj
    return ok(obj, 201)

@app.put("/workorders/<wid>")
def update_workorder(wid: str):
    wo = workorders.get(wid)
    if not wo: return err("not-found", 404)
    payload = request.get_json(silent=True) or {}
    wo.update(payload); wo["woId"] = wid
    return ok(wo, 200)

@app.delete("/workorders/<wid>")
def delete_workorder(wid: str):
    deleted = workorders.pop(wid, None) is not None
    return ok({"deleted": deleted, "woId": wid}, 200)

# ---------- Maintenance Tickets ----------
@app.get("/maintenance-tickets")
def list_tickets(): return ok(list(tickets.values()))

@app.post("/maintenance-tickets")
def add_ticket():
    b = request.get_json(silent=True) or {}
    if "ticketId" not in b or "machineId" not in b: return err("Missing required field", 400)
    if b["machineId"] not in machines: return err("invalid-machine", 400)
    tid = str(b["ticketId"])
    if tid in tickets: return err("duplicate-id", 409)
    obj = {"ticketId": tid, "machineId": str(b["machineId"]), "priority": b.get("priority","normal"), "status":"open", "createdAt": now()}
    obj.update({k:v for k,v in b.items() if k not in ("ticketId","machineId","priority")})
    tickets[tid] = obj
    return ok(obj, 201)

@app.put("/maintenance-tickets/<tid>")
def update_ticket(tid: str):
    t = tickets.get(tid)
    if not t: return err("not-found", 404)
    payload = request.get_json(silent=True) or {}
    t.update(payload); t["ticketId"] = tid
    return ok(t, 200)

@app.delete("/maintenance-tickets/<tid>")
def delete_ticket(tid: str):
    deleted = tickets.pop(tid, None) is not None
    return ok({"deleted": deleted, "ticketId": tid}, 200)

# ---------- Sensor Readings ----------
@app.get("/sensor-readings")
def list_readings(): return ok(readings)

@app.post("/sensor-readings")
def add_reading():
    b = request.get_json(silent=True) or {}
    for reqf in ("readingId","machineId","timestamp"):
        if reqf not in b: return err(f"Missing required field: {reqf}", 400)
    if b["machineId"] not in machines: return err("invalid-machine", 400)
    readings.append(dict(b))
    # Auto-open a high-priority ticket if thresholds exceeded
    t = b.get("temperatureC"); v = b.get("vibration")
    if (isinstance(t,(int,float)) and t>80) or (isinstance(v,(int,float)) and v>10):
        tid = f"T-{len(tickets)+1}"
        tickets[tid] = {"ticketId": tid, "machineId": str(b["machineId"]), "priority":"high", "status":"open", "createdAt": now()}
    return ok(b, 201)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5015, debug=False)
