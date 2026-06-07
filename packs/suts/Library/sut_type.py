"""
Library Management System REST API (Type Safe Version)

This Flask application provides a RESTful API for managing a library system.
It handles books, users, loans, and holds with in-memory storage.
It includes STRICT TYPE CHECKING to satisfy negative testing requirements.

Routes:
- /users - User management
- /books - Book management
- /loans - Loan management
- /holds - Hold management
"""

from typing import List, Dict, Optional, Any
from flask import Flask, request, jsonify, Response
from dataclasses import dataclass
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)

# In-memory storage
users: List[Dict[str, Any]] = []
books: List[Dict[str, Any]] = []
loans: List[Dict[str, Any]] = []
holds: List[Dict[str, Any]] = []


def is_int(value: Any) -> bool:
    return isinstance(value, int) and not isinstance(value, bool)


def is_positive_int(value: Any) -> bool:
    return is_int(value) and value > 0


def is_str(value: Any) -> bool:
    return isinstance(value, str)


def is_non_empty_str(value: Any) -> bool:
    return is_str(value) and value.strip() != ""


def parse_positive_int(value: Any, field_name: str) -> tuple[Optional[int], Optional[tuple[Response, int]]]:
    try:
        parsed = int(value)
    except (TypeError, ValueError):
        return None, (jsonify({"error": f"{field_name} must be an integer"}), 400)

    if parsed <= 0:
        return None, (jsonify({"error": f"{field_name} must be a positive integer"}), 400)

    return parsed, None


def user_exists(user_id: int) -> bool:
    return any(u.get("id") == user_id for u in users)


def book_exists(book_id: int) -> bool:
    return any(b.get("id") == book_id for b in books)


# --- Database Management ---
@app.route("/reset", methods=["POST"])
def reset_database() -> tuple[Response, int]:
    """Reset all data stores and optionally initialize with provided data."""
    global users, books, loans, holds

    # Clear all data
    users = []
    loans = []
    holds = []
    books = []

    # If initial data is provided, load it
    if request.is_json:
        data = request.get_json()
        if "users" in data:
            users.extend(data["users"])
        if "loans" in data:
            loans.extend(data["loans"])
        if "holds" in data:
            holds.extend(data["holds"])
        if "books" in data:
            books.extend(data["books"])

    return (
        jsonify(
            {
                "message": "Database reset",
                "status": {
                    "users": len(users),
                    "loans": len(loans),
                    "holds": len(holds),
                    "books": len(books),
                },
            }
        ),
        200,
    )


# --- User Management ---
@app.route("/users", methods=["POST"])
def add_user() -> tuple[Response, int]:
    """
    Add a new user to the system.

    Expected JSON body: {"id": int, "name": str}
    Returns:
        201: User created successfully
        400: Invalid request (missing id, wrong types, or duplicate user)
    """
    user = request.get_json()

    # 1. Validate existence
    if not user or "id" not in user:
        logger.error("Attempt to add user without id")
        return jsonify({"error": "user id is required"}), 400

    # 2. Validate Types (Strict)
    if not is_positive_int(user.get("id")):
        return jsonify({"error": "id must be a positive integer"}), 400

    if "name" not in user:
        return jsonify({"error": "name is required"}), 400
    if not is_non_empty_str(user.get("name")):
        return jsonify({"error": "name must be a non-empty string"}), 400

    # 3. Check for duplicates
    if user.get("id") in [u.get("id") for u in users]:
        logger.error(f"Attempt to add duplicate user: {user}")
        return jsonify({"error": "User already exists"}), 400

    # Add user
    users.append(user)
    logger.info(f"Added new user: {user}")
    return jsonify(user), 201


@app.route("/users/<id>", methods=["DELETE"])
def delete_user(id: str) -> tuple[Response, int]:
    """Delete a user by ID."""
    global users
    user_id, error = parse_positive_int(id, "id")
    if error:
        return error

    logger.info(f"Attempting to delete user with ID: {user_id}")

    if any(loan.get("userId") == user_id for loan in loans):
        return jsonify({"error": "Cannot delete user with active loans"}), 400

    if any(hold.get("userId") == user_id for hold in holds):
        return jsonify({"error": "Cannot delete user with active holds"}), 400

    user = next((u for u in users if u.get("id") == user_id), None)
    if user:
        users.remove(user)
        logger.info(f"Deleted user: {user}")
        return jsonify({"message": "User deleted"}), 200
    return jsonify({"error": "User not found"}), 404


@app.route("/users", methods=["GET"])
def search_users() -> Response:
    """Search for users."""
    query = request.args.get("q", "").lower()
    results = [user for user in users if query in str(user).lower()] if query else users
    return jsonify(results)


# --- Book Management ---
@app.route("/books", methods=["POST"])
def add_book() -> tuple[Response, int]:
    """
    Add a new book to the system.

    Expected JSON body: {"id": int, "title": str}
    Returns:
        201: Book created successfully
        400: Invalid request (missing id, wrong types, or duplicate book)
    """
    book = request.get_json()
    
    # 1. Validate existence
    if not book or "id" not in book:
        logger.error("Attempt to add book without id")
        return jsonify({"error": "book id is required"}), 400
    
    # 2. Validate Types (Strict)
    if not is_positive_int(book.get("id")):
        return jsonify({"error": "id must be a positive integer"}), 400

    if "title" not in book:
        return jsonify({"error": "title is required"}), 400
    if not is_non_empty_str(book.get("title")):
        return jsonify({"error": "title must be a non-empty string"}), 400

    # 3. Check duplicates
    if book.get("id") in [b.get("id") for b in books]:
        logger.error("Attempt to add duplicate book")
        return jsonify({"error": "Book already exists"}), 400
    else:
        books.append(book)
        logger.info(f"Added new book: {book}")
        return jsonify(book), 201


@app.route("/books/<id>", methods=["DELETE"])
def delete_book(id: str) -> tuple[Response, int]:
    """Delete a book by ID."""
    global books
    book_id, error = parse_positive_int(id, "id")
    if error:
        return error

    # Check if book exists
    if not any(b.get("id") == book_id for b in books):
        logger.warning(f"Attempt to delete non-existent book {book_id}")
        return jsonify({"error": "Book not found"}), 404

    # Check if book has active loans
    if any(loan.get("bookId") == book_id for loan in loans):
        logger.warning(f"Cannot delete book {book_id} - has active loans")
        return jsonify({"error": "Cannot delete book with active loans"}), 400

    if any(hold.get("bookId") == book_id for hold in holds):
        logger.warning(f"Cannot delete book {book_id} - has active holds")
        return jsonify({"error": "Cannot delete book with active holds"}), 400

    books = [book for book in books if book.get("id") != book_id]

    logger.info(f"Book {book_id} deleted successfully. Books remaining: {len(books)}")
    return jsonify({"message": "Book deleted", "booksRemaining": len(books)}), 200


@app.route("/books", methods=["GET"])
def search_books() -> Response:
    """Search for books."""
    query = request.args.get("q", "").lower()
    results = [book for book in books if query in str(book).lower()] if query else books
    return jsonify(results)


@app.route("/books/<id>", methods=["GET"])
def get_book(id: str):
    """Get detailed information about a specific book."""
    book_id, error = parse_positive_int(id, "id")
    if error:
        return error

    book = next((b for b in books if b.get("id") == book_id), None)
    
    if book:
        return jsonify(book), 200
    return jsonify({"error": "Book not found"}), 404


# --- Loan Management ---
@app.route("/loans", methods=["POST"])
def add_loan() -> tuple[Response, int]:
    """
    Create a new loan record.

    Expected JSON body: {"userId": int, "bookId": int}
    Returns:
        201: Loan created successfully
        400: Invalid request (missing userId, bookId, wrong types, or duplicate loan)
    """
    loan = request.get_json()
    if not loan:
        return jsonify({"error": "loan body is required"}), 400
    user_id = loan.get("userId")
    book_id = loan.get("bookId")

    # 1. Validate Types (Strict)
    # We check type BEFORE checking existence/logic, so negative tests pass correctly.
    if user_id is not None and not is_positive_int(user_id):
        return jsonify({"error": "userId must be a positive integer"}), 400
    
    if book_id is not None and not is_positive_int(book_id):
        return jsonify({"error": "bookId must be a positive integer"}), 400

    # 2. Validate User Logic
    if user_id is None:
        return jsonify({"error": "userId is required"}), 400
    if not user_exists(user_id):
        return jsonify({"error": f"User {user_id} does not exist"}), 400

    # 3. Validate Book Logic
    if book_id is None:
        return jsonify({"error": "bookId is required"}), 400

    if not book_exists(book_id):
        return jsonify({"error": f"Book {book_id} does not exist"}), 400

    # 4. Enforce active loan invariants
    if any(l.get("userId") == user_id and l.get("bookId") == book_id for l in loans):
        return jsonify({"error": "Loan already exists"}), 400
    if any(l.get("userId") == user_id for l in loans):
        return jsonify({"error": "User already has an active loan"}), 400
    if any(l.get("bookId") == book_id for l in loans):
        return jsonify({"error": "Book is already loaned"}), 400

    loan_record = {"userId": user_id, "bookId": book_id}
    loans.append(loan_record)
    logger.info(f"Added new loan: userId={user_id}, bookId={book_id}")
    return jsonify(loan_record), 201


@app.route("/loans/<user_id>/<book_id>", methods=["DELETE"])
def delete_loan(user_id: str, book_id: str) -> tuple[Response, int]:
    """Delete a loan by user ID and book ID."""
    parsed_user_id, error = parse_positive_int(user_id, "userId")
    if error:
        return error
    parsed_book_id, error = parse_positive_int(book_id, "bookId")
    if error:
        return error

    user_id = parsed_user_id
    book_id = parsed_book_id
    logger.info(f"URL-based loan deletion request: userId={user_id}, bookId={book_id}")

    global loans
    before_count = len(loans)
    loans = [
        loan
        for loan in loans
        if not (loan.get("userId") == user_id and loan.get("bookId") == book_id)
    ]
    after_count = len(loans)

    if before_count == after_count:
        return jsonify({"error": "Loan not found"}), 404
    logger.info(f"Deleted loan: userId={user_id}, bookId={book_id}")
    return jsonify({"message": "Loan deleted"}), 200


@app.route("/loans", methods=["GET"])
def search_loans() -> Response:
    """Search for loans."""
    user_id = request.args.get("userId")
    book_id = request.args.get("bookId")
    results = loans
    if user_id is not None and user_id != "":
        parsed_user_id, error = parse_positive_int(user_id, "userId")
        if error:
            return error
        results = [loan for loan in results if loan.get("userId") == parsed_user_id]
    if book_id is not None and book_id != "":
        parsed_book_id, error = parse_positive_int(book_id, "bookId")
        if error:
            return error
        results = [loan for loan in results if loan.get("bookId") == parsed_book_id]
    return jsonify(results)


# --- Hold Management ---
@app.route("/holds", methods=["POST"])
def add_hold() -> tuple[Response, int]:
    """
    Create a new hold record.

    Expected JSON body: {"id": int, "userId": int, "bookId": int}
    Returns:
        201: Hold created successfully
        400: Invalid request (wrong types)
    """
    hold = request.get_json()
    if not hold:
        return jsonify({"error": "hold body is required"}), 400
    
    # 1. Validate Types (Strict)
    # Note: 'id' is required by schema, check it too
    if "id" not in hold:
        return jsonify({"error": "id is required"}), 400
    if not is_positive_int(hold.get("id")):
        return jsonify({"error": "id must be a positive integer"}), 400
        
    if "userId" not in hold:
        return jsonify({"error": "userId is required"}), 400
    if not is_positive_int(hold.get("userId")):
        return jsonify({"error": "userId must be a positive integer"}), 400
        
    if "bookId" not in hold:
        return jsonify({"error": "bookId is required"}), 400
    if not is_positive_int(hold.get("bookId")):
        return jsonify({"error": "bookId must be a positive integer"}), 400

    if not user_exists(hold.get("userId")):
        return jsonify({"error": f"User {hold.get('userId')} does not exist"}), 400
    if not book_exists(hold.get("bookId")):
        return jsonify({"error": f"Book {hold.get('bookId')} does not exist"}), 400
    if any(h.get("id") == hold.get("id") for h in holds):
        return jsonify({"error": "Hold already exists"}), 400

    holds.append(hold)
    logger.info(f"Added new hold: {hold}")
    return jsonify(hold), 201


@app.route("/holds/<id>", methods=["DELETE"])
def delete_hold(id: str) -> tuple[Response, int]:
    """Delete a hold by ID."""
    global holds
    hold_id, error = parse_positive_int(id, "id")
    if error:
        return error

    before_count = len(holds)
    holds = [hold for hold in holds if hold.get("id") != hold_id]
    if before_count == len(holds):
        return jsonify({"error": "Hold not found"}), 404

    logger.info(f"Deleted hold with ID: {hold_id}")
    return jsonify({"message": "Hold deleted"}), 200


@app.route("/holds", methods=["GET"])
def search_holds() -> Response:
    """Search for holds."""
    query = request.args.get("q", "").lower()
    results = [hold for hold in holds if query in str(hold).lower()] if query else holds
    return jsonify(results)


# --- Application Entry Point ---
if __name__ == "__main__":
    # Configuration
    HOST = "localhost"
    PORT = 23242
    DEBUG = True

    logger.info(f"Starting server on {HOST}:{PORT}")
    app.run(host=HOST, port=PORT, debug=DEBUG)
