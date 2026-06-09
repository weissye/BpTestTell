import sys

if len(sys.argv) < 3:
    print("Usage: python plant_bug.py <bug_name> <file_path>")
    sys.exit(1)

bug_name = sys.argv[1]
file_path = sys.argv[2]

with open(file_path, 'r') as f:
    code = f.read()

bugs = {
    "bug1": (
        '    # 3. Check for duplicates\n    if user.get("id") in [u.get("id") for u in users]:\n        logger.error(f"Attempt to add duplicate user: {user}")\n        return jsonify({"error": "User already exists"}), 400',
        '    # Bug 1 planted: allow duplicate user ID\n    pass'
    ),
    "bug2": (
        '    # 3. Check duplicates\n    if book.get("id") in [b.get("id") for b in books]:\n        logger.error("Attempt to add duplicate book")\n        return jsonify({"error": "Book already exists"}), 400',
        '    # Bug 2 planted: allow duplicate book ID\n    pass'
    ),
    "bug3": (
        '    # 4. Enforce active loan invariants\n    if any(l.get("userId") == user_id and l.get("bookId") == book_id for l in loans):\n        return jsonify({"error": "Loan already exists"}), 400\n    if any(l.get("userId") == user_id for l in loans):\n        return jsonify({"error": "User already has an active loan"}), 400\n    if any(l.get("bookId") == book_id for l in loans):\n        return jsonify({"error": "Book is already loaned"}), 400',
        '    # Bug 3 planted: allow duplicate loans (and disable masking loan checks)\n    pass'
    ),
    "bug4": (
        '    if any(l.get("userId") == user_id for l in loans):\n        return jsonify({"error": "User already has an active loan"}), 400',
        '    # Bug 4 planted: allow multiple loans for user\n    pass'
    ),
    "bug5": (
        '    # 4. Enforce active loan invariants\n    if any(l.get("userId") == user_id and l.get("bookId") == book_id for l in loans):\n        return jsonify({"error": "Loan already exists"}), 400\n    if any(l.get("userId") == user_id for l in loans):\n        return jsonify({"error": "User already has an active loan"}), 400\n    if any(l.get("bookId") == book_id for l in loans):\n        return jsonify({"error": "Book is already loaned"}), 400',
        '    # Bug 5 planted: allow duplicate loan for book (and disable masking loan checks)\n    pass'
    ),
    "bug6": (
        '    if not user_exists(user_id):\n        return jsonify({"error": f"User {user_id} does not exist"}), 400',
        '    # Bug 6 planted: allow loan for nonexistent user\n    pass'
    ),
    "bug7": (
        '    if not book_exists(book_id):\n        return jsonify({"error": f"Book {book_id} does not exist"}), 400\n\n    # 4. Enforce active loan invariants\n    if any(l.get("userId") == user_id and l.get("bookId") == book_id for l in loans):\n        return jsonify({"error": "Loan already exists"}), 400\n    if any(l.get("userId") == user_id for l in loans):\n        return jsonify({"error": "User already has an active loan"}), 400\n    if any(l.get("bookId") == book_id for l in loans):\n        return jsonify({"error": "Book is already loaned"}), 400',
        '    # Bug 7 planted: allow loan for nonexistent book (and disable masking checks)\n    pass'
    ),
    "bug8": (
        '    # Check if user has active loans\n    if any(loan.get("userId") == user_id for loan in loans):\n        return jsonify({"error": "Cannot delete user with active loans"}), 400\n\n    # Check if user has active holds\n    if any(hold.get("userId") == user_id for hold in holds):\n        return jsonify({"error": "Cannot delete user with active holds"}), 400',
        '    # Bug 8 planted: allow delete user with active loans/holds\n    pass'
    ),
    "bug9": (
        '    # Check if user has active loans\n    if any(loan.get("userId") == user_id for loan in loans):\n        return jsonify({"error": "Cannot delete user with active loans"}), 400\n\n    # Check if user has active holds\n    if any(hold.get("userId") == user_id for hold in holds):\n        return jsonify({"error": "Cannot delete user with active holds"}), 400',
        '    # Bug 9 planted: allow delete user with active loans/holds\n    pass'
    ),
    "bug10": (
        '    # Check if book has active loans\n    if any(loan.get("bookId") == book_id for loan in loans):\n        logger.warning(f"Cannot delete book {book_id} - has active loans")\n        return jsonify({"error": "Cannot delete book with active loans"}), 400\n\n    # Check if book has active holds\n    if any(hold.get("bookId") == book_id for hold in holds):\n        logger.warning(f"Cannot delete book {book_id} - has active holds")\n        return jsonify({"error": "Cannot delete book with active holds"}), 400',
        '    # Bug 10 planted: allow delete book with active loans/holds\n    pass'
    )
}

if bug_name not in bugs:
    print(f"Unknown bug name: {bug_name}")
    sys.exit(1)

target, replacement = bugs[bug_name]

if target in code:
    code = code.replace(target, replacement)
    print(f"SUCCESS: {bug_name} successfully planted!")
else:
    print(f"WARNING: Target for {bug_name} not found in {file_path}!")
    sys.exit(1)

with open(file_path, 'w') as f:
    f.write(code)
