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

function createUserBook(userIdValue, bookIdValue) {
	ctx.insertEntity(ctx.Entity(userBookId(userIdValue, bookIdValue), 'user-book', {
		bookid: bookIdValue,
		userid: userIdValue
	}));
}


ctx.registerEffect("GET", function (data) {
	effect(data);
});


ctx.registerEffect("POST", function (data) {
	effect(data);
});

ctx.registerEffect("DELETE", function (data) {
	effect(data);
});

ctx.registerEffect("PUT", function (data) {
	effect(data);
});

ctx.registerEffect("PATCH", function (data) {
	effect(data);
});


function effect(data) {
	if (matchAnyUserAdded().contains(data)) {
		let body = getJsonBody(data);



		bp.log.info("Adding user {0}", data.parameters);
		ctx.insertEntity(ctx.Entity(userId(body.id), 'user', {
			id: body.id,
			name: body.name
		}));

		// let allbooks = ctx.runQuery('Book.All');
		// for (let b of allbooks) {
		// 	createUserBook(data.parameters.body.id, b.id);
		// }
	}
}





ctx.registerEffect("createBook", function (data) {
	ctx.insertEntity(ctx.Entity(bookId(data.id), 'book', {
		id: data.id,
		title: data.title || data.name
	}));

	let allusers = ctx.runQuery('User.All');
	for (let u of allusers) {
		createUserBook(u.id, data.id);
	}
});

ctx.registerEffect("deleteBook", function (data) {
	ctx.removeEntity(bookId(data.id));
	removeWhere('UserBook.All', function (e) { return sameId(e.bookid, data.id); });
	removeWhere('Loan.All', function (e) { return sameId(e.bookid, data.id); });
	removeWhere('Hold.All', function (e) { return sameId(e.bookid, data.id); });
});

ctx.registerEffect("createUser", function (data) {
	ctx.insertEntity(ctx.Entity(userId(data.id), 'user', {
		id: data.id,
		name: data.name
	}));

	let allbooks = ctx.runQuery('Book.All');
	for (let b of allbooks) {
		createUserBook(data.id, b.id);
	}
});

ctx.registerEffect("deleteUser", function (data) {
	ctx.removeEntity(userId(data.id));
	removeWhere('UserBook.All', function (e) { return sameId(e.userid, data.id); });
	removeWhere('Loan.All', function (e) { return sameId(e.userid, data.id); });
	removeWhere('Hold.All', function (e) { return sameId(e.userid, data.id); });
});

ctx.registerEffect("createLoan", function (data) {
	ctx.insertEntity(ctx.Entity(loanId(data.userId, data.bookId), 'loan', {
		userid: data.userId,
		bookid: data.bookId
	}));
});

ctx.registerEffect("deleteLoan", function (data) {
	ctx.removeEntity(loanId(data.userId, data.bookId));
});

ctx.registerEffect("createHold", function (data) {
	ctx.insertEntity(ctx.Entity(holdId(data.id), 'hold', {
		id: data.id,
		userid: data.userId,
		bookid: data.bookId
	}));
});

ctx.registerEffect("deleteHold", function (data) {
	ctx.removeEntity(holdId(data.id));
});

ctx.registerQuery('Book.All', function (e) {
	return e.type === 'book';
});

ctx.registerQuery('Book.NoLoan', function (e) {
	return e.type === 'book' && !ctx.runQuery('Loan.All').some(function (l) {
		return sameId(l.bookid, e.id);
	});
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

ctx.registerQuery('User.NoLoan', function (e) {
	return e.type === 'user' && !ctx.runQuery('Loan.All').some(function (l) {
		return sameId(l.userid, e.id);
	});
});

ctx.registerQuery('User.HasLoan', function (e) {
	return e.type === 'user' && ctx.runQuery('Loan.All').some(function (l) {
		return sameId(l.userid, e.id);
	});
});

ctx.registerQuery('Book.NotLoaned', function (e) {
	return e.type === 'book' && !ctx.runQuery('Loan.All').some(function (l) {
		return sameId(l.bookid, e.id);
	});
});

ctx.registerQuery('Book.IsLoaned', function (e) {
	return e.type === 'book' && ctx.runQuery('Loan.All').some(function (l) {
		return sameId(l.bookid, e.id);
	});
});

ctx.registerQuery('UserBook.BookIsNotLoaned', function (e) {
	return e.type === 'user-book' && !ctx.runQuery('Loan.All').some(function (l) {
		return sameId(l.bookid, e.bookid);
	});
});
