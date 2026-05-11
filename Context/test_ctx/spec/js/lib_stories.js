const NUMBER_OF_USERS = 3
const NUMBER_OF_BOOKS = 3


bthread("create random users", function () {
	// -> Creating Users
	for (let i = 0; i < NUMBER_OF_USERS; i++) {
		let id_Users_160 = 160 + i * 1000 + Math.floor(Math.random() * 999);
		let name_Users_160 = "name_Users_160_" + Math.floor(Math.random() * 1000);
		let q_Users_160 = "q_Users_160_" + Math.floor(Math.random() * 1000);
		createUser(id_Users_160, name_Users_160, q_Users_160);
	}
});

bthread("create random books", function () {
	// -> Creating Books
	for (let i = 0; i < NUMBER_OF_BOOKS; i++) {
		let id_Books_160 = 160 + i * 1000 + Math.floor(Math.random() * 999);
		let title_Books_160 = "title_Books_160_" + Math.floor(Math.random() * 1000);
		let q_Books_160 = "q_Books_160_" + Math.floor(Math.random() * 1000);
		createBook(id_Books_160, q_Books_160, title_Books_160);
	}
});

ctx.bthread("deleteUser", "User.NoLoan", function (user) {
	deleteUser(user.id);
})

ctx.bthread("checkThatCannotDeleteLoanedUser", "User.HasLoan", function (user) {
	while (true) {
		verifyUserCantBeDeleted(user.id);
	}
})

bthread("verifyUserCreation", function () {
	let e = waitFor(matchAnyUsersAdded());
	let body = JSON.parse(e.data.body);
	block(matchDeletedUsers(body.id), function () {
		verifyUsersExists(body.id);
	});
});


bthread("verifyUserDeletion", function () {
	let e = waitFor(matchAnyUsersDeleted());
	let id = parseInt(e.data.parameters.description.split(' ').pop());
	block(matchAnyUsersAdded(), function () {
		verifyUsersDoesNotExist(id);
	});
});

bthread("verifyBookCreation", function () {
	let e = waitFor(matchAnyBooksAdded());
	let body = JSON.parse(e.data.body);
	block(matchDeletedBooks(body.id), function () {
		verifyBooksExists(body.id);
	});
});

bthread("verifyBookDeletion", function () {
	let e = waitFor(matchAnyBooksDeleted());
	let id = parseInt(e.data.parameters.description.split(' ').pop());
	block(matchAnyBooksAdded(), function () {
		verifyBooksDoesNotExist(id);
	});
});

bthread("verifyLoanCreation", function () {
	let e = waitFor(matchAnyLoansAdded());
	let body = JSON.parse(e.data.body);
	block(matchDeletedLoans(body.userId), function () {
		verifyLoansExists(body.bookId, body.userId);
	});
});

bthread("verifyLoanDeletion", function () {
	let e = waitFor(matchAnyLoansDeleted());
	let id = parseInt(e.data.parameters.description.split(' ').pop());
	block(matchAnyLoansAdded(), function () {
		verifyLoansDoesNotExist(null, id);
	});
});

bthread("verifyHoldCreation", function () {
	let e = waitFor(matchAnyHoldsAdded());
	let body = JSON.parse(e.data.body);
	block(matchDeletedHolds(body.id), function () {
		verifyHoldsExists(body.bookId, body.id, body.userId);
	});
});

bthread("verifyHoldDeletion", function () {
	let e = waitFor(matchAnyHoldsDeleted());
	let id = parseInt(e.data.parameters.description.split(' ').pop());
	block(matchAnyHoldsAdded(), function () {
		verifyHoldsDoesNotExist(null, id, null);
	});
});


ctx.bthread("crud:Holds:linear:2", 'UserBook.BookIsNotLoaned', function (userbook) {
	let user = ctx.getEntity(userbook.userid)
	let book = ctx.getEntity(userbook.bookid)
	let id_Holds_170 = 170 + Math.floor(Math.random() * 999999);
	try {
		createHold(book.id, id_Holds_170, user.id);
	} catch (e) {
		deleteHold(id_Holds_170);
	}
});
