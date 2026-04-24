"""
Library Management System REST API

This Flask application provides a RESTful API for managing a library system.
It handles books, users, loans, and holds with in-memory storage.

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


def is_str(value: Any) -> bool:
    return isinstance(value, str)


# --- Database Management ---
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
        400: Invalid request (missing id or duplicate user)
    """
    user = request.get_json()

    # Validate request
    if not user or "id" not in user:
        logger.error("Attempt to add user without id")
        return jsonify({"error": "user id is required"}), 400
    if not is_int(user.get("id")):
        return jsonify({"error": "user id must be an integer"}), 400
    if "name" not in user or not is_str(user.get("name")):
        return jsonify({"error": "user name must be a string"}), 400

    # Check for duplicates
    if user.get("id") in [u.get("id") for u in users]:
        logger.error(f"Attempt to add duplicate user: {user}")
        return jsonify({"error": "User already exists"}), 400

    # Add user
    users.append(user)
    logger.info(f"Added new user: {user}")
    return jsonify(user), 201


@app.route("/users/<int:id>", methods=["DELETE"])
def delete_user(id: int) -> tuple[Response, int]:
    """
    Delete a user by ID.

    Args:
        user_id: ID of the user to delete

    Returns:
        200: User deleted successfully
        404: User not found
        400: Cannot delete user with active loans
    """
    global users
    try:
        user_id = int(id)
        logger.info(f"Attempting to delete user with ID: {user_id}")
    except ValueError:
        return jsonify({"error": "Invalid user ID format"}), 400

    if any(loan.get("userId") == user_id for loan in loans):
        return jsonify({"error": "Cannot delete user with active loans"}), 400

    user = next((u for u in users if u.get("id") == user_id), None)
    if user:
        users.remove(user)
        logger.info(f"Deleted user: {user}")
        return jsonify({"message": "User deleted"}), 200
    return jsonify({"error": "User not found"}), 404


@app.route("/users", methods=["GET"])
def search_users() -> Response:
    """
    Search for users.

    Query parameters:
        q: Search term (applied to all user fields)

    Returns:
        200: List of matching users
    """
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
        400: Invalid request (missing id or duplicate book)
    """
    book = request.get_json()
    if "id" not in book:
        logger.error("Attempt to add book without id")
        return jsonify({"error": "book id is required"}), 400
    if not is_int(book.get("id")):
        return jsonify({"error": "book id must be an integer"}), 400
    if "title" not in book or not is_str(book.get("title")):
        return jsonify({"error": "book title must be a string"}), 400
    if book.get("id") in [b.get("id") for b in books]:
        logger.error("Attempt to add duplicate book")
        return jsonify({"error": "Book already exists"}), 400
    else:
        books.append(book)
        logger.info(f"Added new book: {book}")
        return jsonify(book), 201


@app.route("/books/<int:id>", methods=["DELETE"])
def delete_book(id: int) -> tuple[Response, int]:
    """
    Delete a book by ID.

    Args:
        book_id: ID of the book to delete

    Returns:
        200: Book deleted successfully
        404: Book not found
        400: Cannot delete book with active loans
    """
    global books
    try:
        book_id = int(id)
    except ValueError:
        return jsonify({"error": "Invalid book ID format"}), 400

    # Check if book exists
    if not any(b.get("id") == book_id for b in books):
        logger.warning(f"Attempt to delete non-existent book {book_id}")
        return jsonify({"error": "Book not found"}), 404

    # Check if book has active loans
    if any(loan.get("bookId") == book_id for loan in loans):
        logger.warning(f"Cannot delete book {book_id} - has active loans")
        return jsonify({"error": "Cannot delete book with active loans"}), 400

    books = [book for book in books if book.get("id") != book_id]

    logger.info(f"Book {book_id} deleted successfully. Books remaining: {len(books)}")
    return jsonify({"message": "Book deleted", "booksRemaining": len(books)}), 200


@app.route("/books", methods=["GET"])
def search_books() -> Response:
    """
    Search for books.

    Query parameters:
        q: Search term (applied to all book fields)

    Returns:
        200: List of matching books
    """
    query = request.args.get("q", "").lower()
    results = [book for book in books if query in str(book).lower()] if query else books
    return jsonify(results)


@app.route("/books/<int:id>", methods=["GET"])
def get_book(id: int) -> Response:
    """
    Get detailed information about a specific book.

    Args:
        book_id: ID of the book to retrieve

    Returns:
        200: Book found
        404: Book not found
    """
    book = next((b for b in books if b.get("id") == id), None)
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
        400: Invalid request (missing userId, bookId, or duplicate loan)
    """
    loan = request.get_json()
    user_id = loan.get("userId")
    book_id = loan.get("bookId")

    # Check that user exists
    if user_id is None:
        return jsonify({"error": "userId is required"}), 400
    if not is_int(user_id):
        return jsonify({"error": "userId must be an integer"}), 400
    if not any(u.get("id") == user_id for u in users):
        return jsonify({"error": f"User {user_id} does not exist"}), 400

    # Check that book exists
    if book_id is None:
        return jsonify({"error": "bookId is required"}), 400
    if not is_int(book_id):
        return jsonify({"error": "bookId must be an integer"}), 400

    logger.info(f"Checking if book {book_id} exists in books: {books}")

    if not any(b.get("id") == book_id for b in books):
        return jsonify({"error": f"Book {book_id} does not exist"}), 400

    # Check for duplicate loan (same userId and bookId)
    if any(l.get("userId") == user_id and l.get("bookId") == book_id for l in loans):
        return jsonify({"error": "Loan already exists"}), 400

    loan_record = {"userId": user_id, "bookId": book_id}
    loans.append(loan_record)
    logger.info(f"Added new loan: userId={user_id}, bookId={book_id}")
    return jsonify(loan_record), 201


@app.route("/loans/<int:user_id>/<int:book_id>", methods=["DELETE"])
def delete_loan(user_id: int, book_id: int) -> tuple[Response, int]:
    """
    Delete a loan by user ID and book ID.

    Args:
        user_id: ID of the user who borrowed the book
        book_id: ID of the borrowed book

    Returns:
        200: Loan deleted successfully
        404: Loan not found
    """
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
    """
    Search for loans.

    Query parameters:
        userId: Filter by user ID
        bookId: Filter by book ID

    Returns:
        200: List of matching loans
    """
    user_id = request.args.get("userId")
    book_id = request.args.get("bookId")
    results = loans
    if user_id:
        results = [loan for loan in results if str(loan.get("userId")) == str(user_id)]
    if book_id:
        results = [loan for loan in results if str(loan.get("bookId")) == str(book_id)]
    return jsonify(results)


# --- Hold Management ---
@app.route("/holds", methods=["POST"])
def add_hold() -> tuple[Response, int]:
    """
    Create a new hold record.

    Expected JSON body: {"userId": int, "bookId": int}
    Returns:
        201: Hold created successfully
    """
    hold = request.get_json()
    if not hold:
        return jsonify({"error": "hold body is required"}), 400
    if not is_int(hold.get("id")):
        return jsonify({"error": "hold id must be an integer"}), 400
    if not is_int(hold.get("userId")):
        return jsonify({"error": "hold userId must be an integer"}), 400
    if not is_int(hold.get("bookId")):
        return jsonify({"error": "hold bookId must be an integer"}), 400
    holds.append(hold)
    logger.info(f"Added new hold: {hold}")
    return jsonify(hold), 201


@app.route("/holds/<int:id>", methods=["DELETE"])
def delete_hold(id: int) -> tuple[Response, int]:
    """
    Delete a hold by ID.

    Args:
        hold_id: ID of the hold to delete

    Returns:
        200: Hold deleted successfully
    """
    global holds
    holds = [hold for hold in holds if hold.get("id") != id]
    logger.info(f"Deleted hold with ID: {id}")
    return jsonify({"message": "Hold deleted"}), 200


@app.route("/holds", methods=["GET"])
def search_holds() -> Response:
    """
    Search for holds.

    Query parameters:
        q: Search term (applied to all hold fields)

    Returns:
        200: List of matching holds
    """
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
