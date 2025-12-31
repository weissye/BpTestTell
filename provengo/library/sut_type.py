"""
Library Management System REST API (Strict Schema & Type Safe Version)

This Flask application provides a RESTful API for managing a library system.
It includes:
1. STRICT TYPE CHECKING (Integers vs Strings)
2. STRICT SCHEMA VALIDATION (Rejects unknown JSON fields like 'q')
"""

from typing import List, Dict, Any, Set
from flask import Flask, request, jsonify, Response
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# In-memory storage
users: List[Dict[str, Any]] = []
books: List[Dict[str, Any]] = []
loans: List[Dict[str, Any]] = []
holds: List[Dict[str, Any]] = []

# --- Helpers ---

def validate_field(data, field_name, expected_type, required=False):
    """Checks type correctness."""
    if required and field_name not in data:
        return f"{field_name} is required", 400
    
    if field_name in data:
        value = data[field_name]
        if value is not None and not isinstance(value, expected_type):
            return f"{field_name} must be of type {expected_type.__name__}", 400
    return None, None

def validate_unknown_fields(data: Dict, allowed_fields: Set[str]):
    """Rejects the request if it contains fields not in the allowed list."""
    unknown = set(data.keys()) - allowed_fields
    if unknown:
        return f"Unknown fields detected: {', '.join(unknown)}", 400
    return None, None

# --- Database Management ---
@app.route("/reset", methods=["POST"])
def reset_database():
    global users, books, loans, holds
    users, loans, holds, books = [], [], [], []
    if request.is_json:
        data = request.get_json()
        if "users" in data: users.extend(data["users"])
        if "loans" in data: loans.extend(data["loans"])
        if "holds" in data: holds.extend(data["holds"])
        if "books" in data: books.extend(data["books"])
    return jsonify({"message": "Database reset"}), 200

# --- User Management ---
@app.route("/users", methods=["POST"])
def add_user():
    user = request.get_json() or {}
    
    # 1. Strict Schema Check (No 'q' allowed!)
    allowed = {"id", "name", "email", "password"}
    err, status = validate_unknown_fields(user, allowed)
    if err: return jsonify({"error": err}), status

    # 2. Type Validation
    checks = [
        validate_field(user, "id", int, required=True),
        validate_field(user, "name", str, required=True),
        validate_field(user, "email", str),
        validate_field(user, "password", str)
    ]
    for err, status in checks:
        if err: return jsonify({"error": err}), status

    if any(u.get("id") == user["id"] for u in users):
        return jsonify({"error": "User already exists"}), 400

    users.append(user)
    logger.info(f"Added new user: {user}")
    return jsonify({"message": "User Added", "user": user}), 201

@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    global users
    if any(l.get("userId") == user_id for l in loans):
        return jsonify({"error": "Cannot delete user with active loans"}), 400
    user = next((u for u in users if u.get("id") == user_id), None)
    if user:
        users.remove(user)
        return jsonify({"message": "User deleted"}), 200
    return jsonify({"error": "User not found"}), 404

@app.route("/users", methods=["GET"])
def search_users():
    query = request.args.get("q", "").lower()
    return jsonify([u for u in users if query in str(u).lower()] if query else users)

# --- Book Management ---
@app.route("/books", methods=["POST"])
def add_book():
    book = request.get_json() or {}

    # 1. Strict Schema Check (Blocks 'q')
    allowed = {"id", "title", "author", "publishedDate"}
    err, status = validate_unknown_fields(book, allowed)
    if err: return jsonify({"error": err}), status

    # 2. Type Validation
    checks = [
        validate_field(book, "id", int, required=True),
        validate_field(book, "title", str, required=True),
        validate_field(book, "author", str),
        validate_field(book, "publishedDate", str)
    ]
    for err, status in checks:
        if err: return jsonify({"error": err}), status

    if any(b.get("id") == book["id"] for b in books):
        return jsonify({"error": "Book already exists"}), 400

    books.append(book)
    logger.info(f"Added new book: {book}")
    return jsonify({"message": "Book Added", "book": book}), 201

@app.route("/books/<book_id>", methods=["DELETE"])
def delete_book(book_id):
    global books
    try: book_id = int(book_id)
    except: return jsonify({"error": "Invalid ID"}), 400

    if not any(b.get("id") == book_id for b in books):
        return jsonify({"error": "Book not found"}), 404
    if any(l.get("bookId") == book_id for l in loans):
        return jsonify({"error": "Cannot delete book with active loans"}), 400

    books = [b for b in books if b.get("id") != book_id]
    return jsonify({"message": "Book deleted"}), 200

@app.route("/books", methods=["GET"])
def search_books():
    query = request.args.get("q", "").lower()
    return jsonify([b for b in books if query in str(b).lower()] if query else books)

@app.route("/books/<book_id>", methods=["GET"])
def get_book(book_id):
    try: query_id = int(book_id)
    except: query_id = book_id
    book = next((b for b in books if b.get("id") == query_id), None)
    return (jsonify(book), 200) if book else (jsonify({"error": "Not Found"}), 404)

# --- Loan Management ---
@app.route("/loans", methods=["POST"])
def add_loan():
    loan = request.get_json() or {}

    # 1. Strict Schema Check (Allows snake_case if fuzzer uses it, but blocks random stuff)
    allowed = {"userId", "bookId", "loanDate", "user_id", "book_id"}
    err, status = validate_unknown_fields(loan, allowed)
    if err: return jsonify({"error": err}), status

    # 2. Type Validation
    checks = [
        validate_field(loan, "userId", int, required=True),
        validate_field(loan, "bookId", int, required=True),
        validate_field(loan, "loanDate", str),
        validate_field(loan, "user_id", int),
        validate_field(loan, "book_id", int)
    ]
    for err, status in checks:
        if err: return jsonify({"error": err}), status

    uid = loan["userId"]
    bid = loan["bookId"]

    if not any(u.get("id") == uid for u in users):
        return jsonify({"error": f"User {uid} not found"}), 400
    if not any(b.get("id") == bid for b in books):
        return jsonify({"error": f"Book {bid} not found"}), 400
    if any(l.get("userId") == uid and l.get("bookId") == bid for l in loans):
        return jsonify({"error": "Loan exists"}), 400

    loans.append(loan)
    return jsonify({"message": "Loan added", "loan": loan}), 201

@app.route("/loans/<int:user_id>/<int:book_id>", methods=["DELETE"])
def delete_loan(user_id, book_id):
    global loans
    before = len(loans)
    loans = [l for l in loans if not (l.get("userId") == user_id and l.get("bookId") == book_id)]
    return (jsonify({"message": "Loan deleted"}), 200) if len(loans) < before else (jsonify({"error": "Not Found"}), 404)

@app.route("/loans", methods=["GET"])
def search_loans():
    uid = request.args.get("userId")
    bid = request.args.get("bookId")
    res = loans
    if uid: res = [l for l in res if str(l.get("userId")) == str(uid)]
    if bid: res = [l for l in res if str(l.get("bookId")) == str(bid)]
    return jsonify(res)

# --- Hold Management ---
@app.route("/holds", methods=["POST"])
def add_hold():
    hold = request.get_json() or {}

    # 1. Strict Schema Check
    allowed = {"id", "userId", "bookId", "start_date", "end_date", "user_id", "book_id"}
    err, status = validate_unknown_fields(hold, allowed)
    if err: return jsonify({"error": err}), status

    # 2. Type Validation
    checks = [
        validate_field(hold, "id", int, required=True),
        validate_field(hold, "userId", int, required=True),
        validate_field(hold, "bookId", int, required=True),
        validate_field(hold, "start_date", str),
        validate_field(hold, "end_date", str),
        validate_field(hold, "user_id", int),
        validate_field(hold, "book_id", int)
    ]
    for err, status in checks:
        if err: return jsonify({"error": err}), status

    holds.append(hold)
    return jsonify({"message": "Hold added", "hold": hold}), 201

@app.route("/holds/<int:hold_id>", methods=["DELETE"])
def delete_hold(hold_id):
    global holds
    holds = [h for h in holds if h.get("id") != hold_id]
    return jsonify({"message": "Hold deleted"}), 200

@app.route("/holds", methods=["GET"])
def search_holds():
    query = request.args.get("q", "").lower()
    return jsonify([h for h in holds if query in str(h).lower()] if query else holds)

if __name__ == "__main__":
    logger.info("Starting server on localhost:8000")
    app.run(host="localhost", port=8000, debug=True)