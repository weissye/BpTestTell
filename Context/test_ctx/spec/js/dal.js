//////////////////////////////////////////////////////////////////////////
// Data access layer for the Context model.
//
// This file owns the in-memory entities and queries used by ctx.bthread.
// It should not know REST paths, request bodies, status-code conventions, or
// how interface events are encoded. The interface layer classifies concrete
// events with EventSets such as AnyBookAdded and converts them to semantic
// event data with extractEventData(). The DAL only consumes those abstractions.
//////////////////////////////////////////////////////////////////////////

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

function createLoanEntity(data) {
	if (entityExists('Loan.All', loanId(data.userId, data.bookId))) return;
	// bp.log.info("DAL create loan {0}/{1}", data.userId, data.bookId);
	ctx.insertEntity(ctx.Entity(loanId(data.userId, data.bookId), 'loan', {
		loanid: data.loanNumber,
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

// COBP registers effects by concrete event name, so this is the only place in
// the DAL that mentions transport event names. The body of each effect
// immediately delegates to the interface abstractions: an EventSet determines
// what happened, and eventData provides the transport-independent fields.
ctx.registerEffect("POST", function (data) {
	var event = bp.Event("POST", data);
	handleInterfaceEffect(event, extractEventData(event));
});

ctx.registerEffect("DELETE", function (data) {
	var event = bp.Event("DELETE", data);
	handleInterfaceEffect(event, extractEventData(event));
});

// Update the Context model according to semantic interface events. The
// Any*Added/Any*Deleted objects are EventSets defined by the interface layer;
// they hide REST routes and expected response codes from this file.
function handleInterfaceEffect(event, eventData) {
	if (AnyBookAdded.contains(event)) createBookEntity(eventData);
	if (AnyUserAdded.contains(event)) createUserEntity(eventData);
	if (AnyLoanAdded.contains(event)) createLoanEntity(eventData);
	if (AnyHoldAdded.contains(event)) createHoldEntity(eventData);

	if (AnyBookDeleted.contains(event)) deleteBookEntity(eventData);
	if (AnyUserDeleted.contains(event)) deleteUserEntity(eventData);
	if (AnyHoldDeleted.contains(event)) deleteHoldEntity(eventData);
	if (AnyLoanDeleted.contains(event)) deleteLoanEntity(eventData);
}

//////////////////////////////////////////////////////////////////////////
// Query API exposed to stories.
//
// Stories should ask these queries what domain states are currently valid.
// They should not inspect entities directly or recreate the domain rules.
//////////////////////////////////////////////////////////////////////////

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
