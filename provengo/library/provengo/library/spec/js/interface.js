//@provengo summon rest

/**
 * Library Management System API Interface
 * Instrumented for Debugging
 */
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 23242;

const svc = new RESTSession("http://" + host + ":" + port, "provengo basedclient", {
    headers: { "Content-Type": "application/json" },
});

function addBook(id, title) {
    var bodyObj = { id: id, title: title };
    var bodyStr = JSON.stringify(bodyObj);
    
    bp.log.info("[LIB_DEBUG] addBook called");
    bp.log.info("[LIB_DEBUG] URL: /books");
    bp.log.info("[LIB_DEBUG] Body Type: " + typeof bodyStr);
    bp.log.info("[LIB_DEBUG] Body Value: " + bodyStr);
    
    svc.post("/books", {
        body: bodyStr,
        parameters: {
            description: "Add a book with id " + id + " and title " + title
        }
    });
}

function deleteBook(id, title) {
    svc.delete("/books/" + id, {
        parameters: {
            description: "Delete a book with id " + id + " and title " + title
        }
    });
}

function tryToDeleteANonExistingBook(id, title) {
    svc.delete("/books/" + id, {
        expectedResponseCodes: [404],
        parameters: {
            description: "Verify that we cannot delete a book with id " + id + " and title " + title + " that does not exist"
        }
    });
}

function tryToDeleteABookInLoan(id, title) {
    svc.delete("/books/" + id, {
        expectedResponseCodes: [400],
        parameters: {
            description: "Verify that we cannot delete a book with id " + id + " and title " + title + " that is in loan"
        }
    });
}

function tryToAddExistingBook(id, title) {
    svc.post("/books", {
        body: JSON.stringify({ id: id, title: title }),
        expectedResponseCodes: [400],
        parameters: {
            description: "Verify that we cannot add another book with id " + id + " and title " + title
        }
    });
}

function addUser(id, name) {
    var bodyStr = JSON.stringify({ id: id, name: name });
    bp.log.info("[LIB_DEBUG] addUser called");
    bp.log.info("[LIB_DEBUG] Body: " + bodyStr);
    
    svc.post("/users", {
        body: bodyStr,
        parameters: {
            description: "Add a user with id " + id + " and name " + name
        }
    });
}

function deleteUser(id, name) {
    svc.delete("/users/" + id, {
        parameters: {
            description: "Delete user with id " + id + " and name " + name
        }
    });
}

function tryToAddExistingUser(id, name) {
    svc.post("/users", {
        body: JSON.stringify({ id: id, name: name }),
        expectedResponseCodes: [400],
        parameters: {
            description: "Verify that we cannot add another user with id " + id + " and name " + name
        },
    });
}

function tryToDeleteANonExistingUser(id, name) {
    svc.delete("/users/" + id, {
        expectedResponseCodes: [404],
        parameters: {
            description: "Verify that we cannot delete a user with id " + id + " and name " + name + " that does not exist"
        }
    });
}

function tryToDeleteAUserInLoan(id, name) {
    svc.delete("/users/" + id, {
        expectedResponseCodes: [400],
        parameters: {
            description: "Verify that we cannot delete a user with id " + id + " and name " + name + " that is in loan"
        }
    });
}

function addLoan(userId, bookId) {
    svc.post("/loans", {
        body: JSON.stringify({ bookId: bookId, userId: userId }),
        parameters: {
            description: "Add a loan with bookId " + bookId + " and userId " + userId
        }
    });
}

function deleteLoan(userId, bookId) {
    svc.delete("/loans/" + userId + "/" + bookId, {
        parameters: {
            description: "Delete a loan with bookId " + bookId + " and userId " + userId
        }
    });
}

function verifyLoanExists(userId, bookId) {
    svc.get("/loans", {
        callback: function (response) {
            const loans = JSON.parse(response.body);
            for (let i = 0; i < loans.length; i++) {
                if (loans[i].userId === userId && loans[i].bookId === bookId) {
                    return pvg.success("Loan exists");
                }
            }
            return pvg.fail("Expected a loan to exists but it does not");
        },
        parameters: {
            description: "Verify loan with userId " + userId + " and bookId " + bookId + " exists"
        },
    });
}

function verifyLoanDoesNotExist(userId, bookId) {
    svc.get("/loans", {
        callback: function (response) {
            const loans = JSON.parse(response.body);
            for (let i = 0; i < loans.length; i++) {
                if (loans[i].userId === userId && loans[i].bookId === bookId) {
                    return pvg.fail("Expected a loan to not exist but it does");
                }
            }
            return pvg.success("Loan does not exist");
        },
        parameters: {
            description: "Verify loan with userId " + userId + " and bookId " + bookId + " does not exist"
        },
    });
}

function tryToAddExistingLoan(userId, bookId) {
    svc.post("/loans", {
        body: JSON.stringify({ userId: userId, bookId: bookId }),
        expectedResponseCodes: [400],
        parameters: {
            description: "Verify that we cannot add another loan with userId " + userId + " and bookId " + bookId
        }
    });
}

function verifyBookExists(id, title) {
    return svc.get("/books", {
        callback: function (response) {
            const books = JSON.parse(response.body);
            return books.some(book => book.id === id && book.title === title)
                ? pvg.success("Book exists")
                : pvg.fail("Book not found");
        },
        parameters: { description: `Verify book exists with id ${id} and title ${title}` }
    });
}

function verifyBookDoesNotExist(id, title) {
    svc.get("/books", {
        callback: function (response) {
            book = JSON.parse(response.body);
            for (let i = 0; i < book.length; i++) {
                if (book[i].id === id && book[i].title === title) {
                    return pvg.fail("Expected a book to not exist but it does");
                }
            }
            return pvg.success("Book does not exist");
        },
        parameters: { description: "Verify book with id " + id + " and title " + title + " does not exist" }
    });
}

function verifyUserExists(id, name) {
    svc.get("/users", {
        callback: function (response) {
            user = JSON.parse(response.body);
            for (let i = 0; i < user.length; i++) {
                if (user[i].id === id && user[i].name === name) {
                    return pvg.success("User exists");
                }
            }
            return pvg.fail("Expected a user to exists but it does not");
        },
        parameters: { description: "Verify user with id " + id + " and name " + name + " exists" },
    });
}

function verifyUserDoesNotExist(id, name) {
    svc.get("/users", {
        callback: function (response) {
            user = JSON.parse(response.body);
            for (let i = 0; i < user.length; i++) {
                if (user[i].id === id && user[i].name === name) {
                    return pvg.fail("Expected a user to not exist but it does");
                }
            }
            return pvg.success("User does not exist");
        },
        parameters: { description: "Verify user with id " + id + " and name " + name + " does not exist" },
    });
}

function matchesDescription(description) {
    return bp.EventSet("test", function (e) {
        if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
        return e.data.parameters.description === description;
    });
}

function matchAnyAddBook() {
    return bp.EventSet("test", function (e) {
        if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
        return e.data.parameters.description.startsWith("Add a book with id");
    });
}

function matchAnyAddUser() {
    return bp.EventSet("test", function (e) {
        if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
        return e.data.parameters.description.startsWith("Add a user with id");
    });
}

function matchAnyAddLoan() {
    return bp.EventSet("test", function (e) {
        if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
        return e.data.parameters.description.startsWith("Add a loan with userId");
    });
}

function matchAnyDeleteBook() {
    return bp.EventSet("test", function (e) {
        if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
        return e.data.parameters.description.startsWith("Delete a book with id");
    });
}

function matchAnyDeleteUser() {
    return bp.EventSet("test", function (e) {
        if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
        return e.data.parameters.description.startsWith("Delete a user with id");
    });
}

function matchAnyDeleteLoan() {
    return bp.EventSet("test", function (e) {
        if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
        return e.data.parameters.description.startsWith("Delete a loan with userId");
    });
}

function matchDeleteUser(id, name) {
    return bp.EventSet("test", function (e) {
        if (!e.data) return false;
        if (!e.data.parameters) return false;
        if (!e.data.parameters.description) return false;
        return e.data.parameters.description === "Delete user with id " + id + " and name " + name;
    });
}

function matchDeleteBook(id, title) {
    return bp.EventSet("test", function (e) {
        if (!e.data) return false;
        if (!e.data.parameters) return false;
        if (!e.data.parameters.description) return false;
        return e.data.parameters.description === "Delete a book with id " + id + " and title " + title;
    });
}

function matchDeleteLoan(userId, bookId) {
    return bp.EventSet("test", function (e) {
        if (!e.data) return false;
        if (!e.data.parameters) return false;
        if (!e.data.parameters.description) return false;
        return e.data.parameters.description === "Delete loan with userId " + userId + " and bookId " + bookId;
    });
}

function matchAddUser(id, name) {
    return bp.EventSet("test", function (e) {
        if (!e.data) return false;
        if (!e.data.parameters) return false;
        if (!e.data.parameters.description) return false;
        return e.data.parameters.description === "Add a user with id " + id + " and name " + name;
    });
}

function matchAddBook(id, title) {
    return bp.EventSet("test", function (e) {
        if (!e.data) return false;
        if (!e.data.parameters) return false;
        if (!e.data.parameters.description) return false;
        return e.data.parameters.description === "Add a book with id " + id + " and title " + title;
    });
}

function matchAddLoan(userId, bookId) {
    return bp.EventSet("test", function (e) {
        if (!e.data) return false;
        if (!e.data.parameters) return false;
        if (!e.data.parameters.description) return false;
        return e.data.parameters.description === "Add a loan with userId " + userId + " and bookId " + bookId;
    });
}

function waitForAnyBookAdded() {
    let e = waitFor(matchAnyAddBook());
    let id = e.data.parameters.description.match(/id (\d+)/)[1];
    let title = e.data.parameters.description.match(/title (.+)$/)[1];
    return { id: +id, title: title };
};

function waitForBookDeleted(id, title) {
    waitFor(matchesDescription("Delete a book with id " + id + " and title " + title));
}

function waitForAnyUserAdded() {
    let e = waitFor(matchAnyAddUser());
    let id = e.data.parameters.description.match(/id (\d+)/)[1];
    let name = e.data.parameters.description.match(/name (.+)$/)[1];
    return { id: +id, name: name };
}

function waitForUserAdded(id, name) {
    waitFor(matchesDescription("Add a user with id " + id + " and name " + name));
}

function waitForUserDeleted(id, name) {
    waitFor(matchesDescription("Delete a user with id " + id + " and name " + name));
}

function waitForAnyLoanAdded() {
    let e = waitFor(matchAnyAddLoan());
    let userId = e.data.parameters.description.match(/userId (\d+)/)[1];
    let bookId = e.data.parameters.description.match(/bookId (\d+)/)[1];
    return { userId: +userId, bookId: +bookId };
}

function waitForLoanAdded(userId, bookId) {
    waitFor(matchesDescription("Add a loan with userId " + userId + " and bookId " + bookId));
}

function waitForLoanDeleted(userId, bookId) {
    waitFor(matchesDescription("Delete a loan with userId " + userId + " and bookId " + bookId));
}

function waitForAnyBookDeleted() {
    let e = waitFor(matchAnyDeleteBook());
    let id = e.data.parameters.description.match(/id (\d+)/)[1];
    let title = e.data.parameters.description.match(/title (.+)$/)[1];
    return { id: +id, title: title };
}

function waitForAnyUserDeleted() {
    let e = waitFor(matchAnyDeleteUser());
    let id = e.data.parameters.description.match(/id (\d+)/)[1];
    let name = e.data.parameters.description.match(/name (.+)$/)[1];
    return { id: +id, name: name };
}

function waitForAnyLoanDeleted() {
    let e = waitFor(matchAnyDeleteLoan());
    let userId = e.data.parameters.description.match(/userId (\d+)/)[1];
    let bookId = e.data.parameters.description.match(/bookId (\d+)/)[1];
    return { userId: +userId, bookId: +bookId };
}

module.exports = {
  addBook,
  deleteBook,
  tryToDeleteANonExistingBook,
  tryToDeleteABookInLoan,
  tryToAddExistingBook,
  addUser,
  deleteUser,
  tryToAddExistingUser,
  tryToDeleteANonExistingUser,
  tryToDeleteAUserInLoan,
  addLoan,
  deleteLoan,
  verifyLoanExists,
  verifyLoanDoesNotExist,
  tryToAddExistingLoan,
  verifyBookExists,
  verifyBookDoesNotExist,
  verifyUserExists,
  verifyUserDoesNotExist,
  matchesDescription,
  matchAnyAddBook,
  matchAnyAddUser,
  matchAnyAddLoan,
  matchAnyDeleteBook,
  matchAnyDeleteUser,
  matchAnyDeleteLoan,
  matchDeleteUser,
  matchDeleteBook,
  matchDeleteLoan,
  matchAddUser,
  matchAddBook,
  matchAddLoan,
  waitForAnyBookAdded,
  waitForBookDeleted,
  waitForAnyUserAdded,
  waitForUserAdded,
  waitForUserDeleted,
  waitForAnyLoanAdded,
  waitForLoanAdded,
  waitForLoanDeleted,
  waitForAnyBookDeleted,
  waitForAnyUserDeleted,
  waitForAnyLoanDeleted
};
