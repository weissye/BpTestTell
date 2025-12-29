"""
Library Management System REST API (Buggy)
"""

from typing import List, Dict, Optional, Any
from flask import Flask, request, jsonify, Response
import logging
import time

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# ==========================================
#   🔬 EXPERIMENT CONFIGURATION
# ==========================================
BUG_CONFIG = {
    "bug1": True,   # Bug 1: Loan Overflow (Borrow > 2 books)
    "bug2": True    # Bug 2: Hold Theft (Borrow book held by others)
}
# ==========================================

# In-memory storage
users: List[Dict[str, Any]] = []
books: List[Dict[str, Any]] = []
loans: List[Dict[str, Any]] = []
holds: List[Dict[str, Any]] = []

def reset_database():
    global users, books, loans, holds
    users = []; loans = []; holds = []; books = []

@app.route("/users", methods=["POST"])
def add_user():
    user = request.get_json()
    users.append(user)
    return jsonify(user), 201

@app.route("/users", methods=["GET"])
def get_users(): return jsonify(users), 200

@app.route("/books", methods=["POST"])
def add_book():
    book = request.get_json()
    books.append(book)
    return jsonify(book), 201

@app.route("/books", methods=["GET"])
def get_books(): return jsonify(books), 200

@app.route("/holds", methods=["POST"])
def add_hold():
    hold = request.get_json()
    holds.append(hold)
    return jsonify(hold), 201

@app.route("/holds", methods=["GET"])
def get_holds(): return jsonify(holds), 200

# ==========================================
#  BUGGY ENDPOINT: LOANS
# ==========================================
@app.route("/loans", methods=["POST"])
def add_loan():
    """
    Create a new loan.
    Body: {"userId": int, "bookId": int, "status": "active_attack"(opt)}
    """
    global holds  # <--- FIX: Must be declared at the top
    
    try:
        payload = request.get_json(force=True, silent=True) or {}
        # Support both 'id' (from Provengo) and 'userId' formats
        user_id = payload.get("userId") or payload.get("id") 
        book_id = payload.get("bookId")
        is_attack = payload.get("status") == "active_attack"

        # 1. LOGIC CHECK: Loan Limit (Max 2 books per user)
        user_loans = [l for l in loans if l.get("userId") == user_id]
        
        # BUG 1: If attack, SKIP the limit check
        if not is_attack:
            if len(user_loans) >= 2:
                return jsonify({"error": "Loan limit reached (2)"}), 409

        # 2. LOGIC CHECK: Holds (Cannot borrow if someone else holds it)
        # Check if book is on hold for a DIFFERENT user
        active_holds = [h for h in holds if h.get("bookId") == book_id and h.get("userId") != user_id]
        
        # BUG 2: If attack, SKIP the hold check
        if not is_attack:
            if active_holds:
                return jsonify({"error": "Book is on hold for another user"}), 409

        # --- ACTION ---
        new_loan = {"userId": user_id, "bookId": book_id}
        loans.append(new_loan)
        
        # Remove any hold for this user on this book (standard logic)
        # (This modifies the global 'holds' variable declared at the top)
        holds = [h for h in holds if not (h.get("bookId") == book_id and h.get("userId") == user_id)]

        # --- CRASH TRIGGERS (Simulating System Invariants Breaking) ---
        
        # Trigger 1: Loan Overflow
        current_user_loans = [l for l in loans if l.get("userId") == user_id]
        if BUG_CONFIG["bug1"] and len(current_user_loans) > 2:
            raise Exception(f"CRITICAL FAILURE: User {user_id} has {len(current_user_loans)} loans! Limit is 2.")

        # Trigger 2: Hold Theft (Did we borrow a book that was held by someone else?)
        # Re-check active holds. If they still exist, we just stole the book.
        remaining_holds = [h for h in holds if h.get("bookId") == book_id and h.get("userId") != user_id]
        if BUG_CONFIG["bug2"] and remaining_holds:
             raise Exception(f"CRITICAL FAILURE: User {user_id} stole Book {book_id} from Hold Owner {remaining_holds[0]['userId']}!")

        return jsonify(new_loan), 201

    except Exception as e:
        logger.error(f"Exception on /loans: {e}")
        return jsonify({"error": str(e)}), 500

@app.route("/loans", methods=["GET"])
def get_loans(): return jsonify(loans), 200

if __name__ == "__main__":
    app.run(host="localhost", port=5000) 