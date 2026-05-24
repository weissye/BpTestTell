function bookId(id) {
	return id;
}

function userId(id) {
	return id;
}

function loanId(userIdValue, bookIdValue) {
	return "loan:" + userIdValue + ":" + bookIdValue;
}

function holdId(id) {
	return "hold:" + id;
}

function userBookId(userIdValue, bookIdValue) {
	return "user-book:" + userIdValue + ":" + bookIdValue;
}

function sameId(left, right) {
	return String(left) === String(right);
}

function removeWhere(queryName, predicate) {
	let entities = ctx.runQuery(queryName);
	for (let e of entities) {
		if (!predicate || predicate(e)) {
			ctx.removeEntity(e.id);
		}
	}
}

function entityExists(queryName, id) {
	let entities = ctx.runQuery(queryName);
	for (let e of entities) {
		if (sameId(e.id, id)) {
			return true;
		}
	}
	return false;
}

function createUserBook(userIdValue, bookIdValue) {
	if (entityExists('UserBook.All', userBookId(userIdValue, bookIdValue))) return;
	ctx.insertEntity(ctx.Entity(userBookId(userIdValue, bookIdValue), 'user-book', {
		bookid: bookIdValue,
		userid: userIdValue
	}));
}

function requestPath(data) {
	if (!data) return "";
	let pathValue = data.path || data.url || data.endpoint || "";
	pathValue = String(pathValue).replace(/^https?:\/\/[^\/]+/, "");
	let queryIndex = pathValue.indexOf("?");
	return queryIndex === -1 ? pathValue : pathValue.substring(0, queryIndex);
}

function requestPathSegments(data) {
	return requestPath(data).split("/").filter(function (segment) {
		return segment.length > 0;
	});
}

function requestBody(data) {
	if (!data || data.body === undefined || data.body === null) return null;
	if (typeof data.body === "object") return data.body;
	try {
		return JSON.parse(data.body);
	} catch (e) {
		return null;
	}
}

function expectedCodes(data) {
	if (!data) return [];
	if (Array.isArray(data.expectedResponseCodes)) return data.expectedResponseCodes;
	if (data.parameters && Array.isArray(data.parameters.expectedResponseCodes)) return data.parameters.expectedResponseCodes;
	return [];
}

function expectsCode(data, code) {
	return expectedCodes(data).some(function (expectedCode) {
		return Number(expectedCode) === Number(code);
	});
}

function requestParameter(data, name) {
	if (!data || !data.parameters) return null;
	return data.parameters[name] === undefined || data.parameters[name] === null ? null : data.parameters[name];
}

function hasLoanForBook(bookIdValue) {
	return ctx.runQuery('Loan.All').some(function (loan) {
		return sameId(loan.bookid, bookIdValue);
	});
}

function hasLoanForUser(userIdValue) {
	return ctx.runQuery('Loan.All').some(function (loan) {
		return sameId(loan.userid, userIdValue);
	});
}

function hasHoldForUserBook(userIdValue, bookIdValue) {
	return ctx.runQuery('Hold.All').some(function (hold) {
		return sameId(hold.userid, userIdValue) && sameId(hold.bookid, bookIdValue);
	});
}

function hasHoldForBook(bookIdValue) {
	return ctx.runQuery('Hold.All').some(function (hold) {
		return sameId(hold.bookid, bookIdValue);
	});
}

function hasHoldForUser(userIdValue) {
	return ctx.runQuery('Hold.All').some(function (hold) {
		return sameId(hold.userid, userIdValue);
	});
}

function createBookEntity(data) {
	if (entityExists('Book.All', bookId(data.id))) return;
	// bp.log.info("DAL create book {0}", data.id);
	ctx.insertEntity(ctx.Entity(bookId(data.id), 'book', {
		bookid: data.id,
		title: data.title || data.name
	}));

	let allusers = ctx.runQuery('User.All');
	for (let u of allusers) {
		createUserBook(u.id, data.id);
	}
}

function deleteBookEntity(data) {
	if (!entityExists('Book.All', bookId(data.id))) return;
	// bp.log.info("DAL delete book {0}", data.id);
	ctx.removeEntity(bookId(data.id));
	removeWhere('UserBook.All', function (e) { return sameId(e.bookid, data.id); });
	removeWhere('Loan.All', function (e) { return sameId(e.bookid, data.id); });
	removeWhere('Hold.All', function (e) { return sameId(e.bookid, data.id); });
}

function createUserEntity(data) {
	if (entityExists('User.All', userId(data.id))) return;
	// bp.log.info("DAL create user {0}", data.id);
	ctx.insertEntity(ctx.Entity(userId(data.id), 'user', {
		userid: data.id,
		name: data.name
	}));

	let allbooks = ctx.runQuery('Book.All');
	for (let b of allbooks) {
		createUserBook(data.id, b.id);
	}
}

function deleteUserEntity(data) {
	if (!entityExists('User.All', userId(data.id))) return;
	// bp.log.info("DAL delete user {0}", data.id);
	ctx.removeEntity(userId(data.id));
	removeWhere('UserBook.All', function (e) { return sameId(e.userid, data.id); });
	removeWhere('Loan.All', function (e) { return sameId(e.userid, data.id); });
	removeWhere('Hold.All', function (e) { return sameId(e.userid, data.id); });
}

function createLoanEntity(data, eventData) {
	if (entityExists('Loan.All', loanId(data.userId, data.bookId))) return;
	// bp.log.info("DAL create loan {0}/{1}", data.userId, data.bookId);
	ctx.insertEntity(ctx.Entity(loanId(data.userId, data.bookId), 'loan', {
		loanid: requestParameter(eventData, "loanNumber"),
		userid: data.userId,
		bookid: data.bookId
	}));
}

function deleteLoanEntity(data) {
	if (!entityExists('Loan.All', loanId(data.userId, data.bookId))) return;
	// bp.log.info("DAL delete loan {0}/{1}", data.userId, data.bookId);
	ctx.removeEntity(loanId(data.userId, data.bookId));
}

function createHoldEntity(data) {
	if (entityExists('Hold.All', holdId(data.id))) return;
	// bp.log.info("DAL create hold {0} {1} {2}", data.id, data.userId, data.bookId);
	ctx.insertEntity(ctx.Entity(holdId(data.id), 'hold', {
		holdid: data.id,
		userid: data.userId,
		bookid: data.bookId
	}));
}

function deleteHoldEntity(data) {
	if (!entityExists('Hold.All', holdId(data.id))) return;
	// bp.log.info("DAL delete hold {0}", data.id);
	ctx.removeEntity(holdId(data.id));
}

ctx.registerEffect("POST", function (data) {
	// Only successful create requests should change the context model.
	// Requests that expect 400/404 are negative tests, so they must not add entities.
	if (!expectsCode(data, 201)) return;

	let body = requestBody(data);
	if (!body) return;

	let segments = requestPathSegments(data);
	if (segments.length !== 1) return;
	if (segments[0] === "books") createBookEntity(body);
	if (segments[0] === "users") createUserEntity(body);
	if (segments[0] === "loans") createLoanEntity(body, data);
	if (segments[0] === "holds") createHoldEntity(body);
});

ctx.registerEffect("DELETE", function (data) {
	// Only successful delete requests should remove data from the context model.
	// Failed delete attempts are assertions about SUT behavior, not state changes.
	if (!expectsCode(data, 200)) return;

	let segments = requestPathSegments(data);
	if (segments.length < 2) return;

	if (segments[0] === "books") deleteBookEntity({ id: segments[1] });
	if (segments[0] === "users") deleteUserEntity({ id: segments[1] });
	if (segments[0] === "holds") deleteHoldEntity({ id: segments[1] });
	if (segments[0] === "loans" && segments.length >= 3) {
		deleteLoanEntity({ userId: segments[1], bookId: segments[2] });
	}
});

ctx.registerQuery('Book.All', function (e) {
	return e.type === 'book';
});

ctx.registerQuery('Book.CanDelete', function (e) {
	return e.type === 'book' && !hasLoanForBook(e.id) && !hasHoldForBook(e.id);
});

ctx.registerQuery('User.All', function (e) {
	return e.type === 'user';
});

ctx.registerQuery('Loan.All', function (e) {
	return e.type === 'loan';
});

ctx.registerQuery('Hold.All', function (e) {
	return e.type === 'hold';
});

ctx.registerQuery('UserBook.All', function (e) {
	return e.type === 'user-book';
});

ctx.registerQuery('User.CanDelete', function (e) {
	return e.type === 'user' && !hasLoanForUser(e.id) && !hasHoldForUser(e.id);
});

ctx.registerQuery('User.HasLoan', function (e) {
	return e.type === 'user' && hasLoanForUser(e.id);
});

ctx.registerQuery('UserBook.CanCreateHold', function (e) {
	return e.type === 'user-book' && !hasLoanForBook(e.bookid) && !hasHoldForUserBook(e.userid, e.bookid);
});

ctx.registerQuery('UserBook.CanCreateLoan', function (e) {
	return e.type === 'user-book' && !hasLoanForUser(e.userid) && !hasLoanForBook(e.bookid);
});

ctx.registerQuery('UserBook.CannotCreateLoan', function (e) {
	return e.type === 'user-book' && (hasLoanForUser(e.userid) || hasLoanForBook(e.bookid));
});

ctx.registerQuery('UserBook.BookHasLoan', function (e) {
	return e.type === 'user-book' && hasLoanForBook(e.bookid);
});

ctx.registerQuery('UserBook.BookUserHasHold', function (e) {
	return e.type === 'user-book' && hasHoldForUserBook(e.userid, e.bookid);
});
