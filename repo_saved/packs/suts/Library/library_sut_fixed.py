
from flask import Flask, request, jsonify
from typing import List, Dict, Any
app = Flask(__name__)

# In-memory stores
users: List[Dict[str, Any]] = []
books: List[Dict[str, Any]] = []
loans: List[Dict[str, Any]] = []
holds: List[Dict[str, Any]] = []

def ok(x, c=200): return jsonify(x), c
def err(msg, c=400): return jsonify({"error": msg}), c

def reset():
    users.clear(); books.clear(); loans.clear(); holds.clear()
    if request.is_json:
        data = request.get_json() or {}
        users.extend(data.get("users", []))
        books.extend(data.get("books", []))
        loans.extend(data.get("loans", []))
        holds.extend(data.get("holds", []))
    return ok({"status": "reset"})

# ---------- Users ----------
@app.get("/users")
def list_users(): return ok(users)

@app.post("/users")
def add_user():
    b = request.get_json(silent=True) or {}
    if "id" not in b: return err("Missing required field: id", 400)
    if any(u.get("id") == b["id"] for u in users): return err("User already exists", 409)
    users.append({"id": b["id"], **{k:v for k,v in b.items() if k!="id"}})
    return ok(users[-1], 201)

@app.put("/users/<uid>")
def update_user(uid: str):
    u = next((x for x in users if str(x.get("id")) == uid), None)
    if not u: return err("User not found", 404)
    payload = request.get_json(silent=True) or {}
    u.update(payload); u["id"] = uid
    return ok(u, 200)

@app.delete("/users/<uid>")
def delete_user(uid: str):
    idx = next((i for i,x in enumerate(users) if str(x.get("id")) == uid), None)
    if idx is None: return ok({"deleted": False, "id": uid}, 200)
    users.pop(idx)
    return ok({"deleted": True, "id": uid}, 200)

# ---------- Books ----------
@app.get("/books")
def list_books(): return ok(books)

@app.post("/books")
def add_book():
    b = request.get_json(silent=True) or {}
    if "id" not in b: return err("Missing required field: id", 400)
    if any(x.get("id") == b["id"] for x in books): return err("Book already exists", 409)
    books.append({"id": b["id"], **{k:v for k,v in b.items() if k!="id"}})
    return ok(books[-1], 201)

@app.put("/books/<bid>")
def update_book(bid: str):
    b = next((x for x in books if str(x.get("id")) == bid), None)
    if not b: return err("Book not found", 404)
    payload = request.get_json(silent=True) or {}
    b.update(payload); b["id"] = bid
    return ok(b, 200)

@app.delete("/books/<bid>")
def delete_book(bid: str):
    idx = next((i for i,x in enumerate(books) if str(x.get("id")) == bid), None)
    if idx is None: return ok({"deleted": False, "id": bid}, 200)
    books.pop(idx)
    return ok({"deleted": True, "id": bid}, 200)

# ---------- Loans ----------
@app.get("/loans")
def list_loans(): return ok(loans)

@app.post("/loans")
def add_loan():
    b = request.get_json(silent=True) or {}
    missing = [k for k in ("userId","bookId") if k not in b]
    if missing: return err(f"Missing required field: {missing[0]}", 400)
    loans.append({"userId": str(b["userId"]), "bookId": str(b["bookId"])})
    return ok(loans[-1], 201)

@app.delete("/loans/<user_id>/<book_id>")
def delete_loan(user_id: str, book_id: str):
    before = len(loans)
    loans[:] = [x for x in loans if not (str(x["userId"]) == str(user_id) and str(x["bookId"]) == str(book_id))]
    deleted = before != len(loans)
    return ok({"deleted": deleted, "userId": user_id, "bookId": book_id}, 200)

# ---------- Holds ----------
@app.get("/holds")
def list_holds(): return ok(holds)

@app.post("/holds")
def add_hold():
    b = request.get_json(silent=True) or {}
    if "id" not in b: return err("Missing required field: id", 400)
    holds.append({"id": b["id"], **{k:v for k,v in b.items() if k!="id"}})
    return ok(holds[-1], 201)

@app.delete("/holds/<hid>")
def delete_hold(hid: str):
    before = len(holds)
    holds[:] = [x for x in holds if str(x.get("id")) != hid]
    deleted = before != len(holds)
    return ok({"deleted": deleted, "id": hid}, 200)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=23242, debug=False)
