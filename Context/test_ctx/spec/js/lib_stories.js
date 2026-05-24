const NUMBER_OF_USERS = 4
const NUMBER_OF_BOOKS = 4


//////////////////////////////////////////////////////////////////////////
// Verification bthreads that check system behavior depending on whether
// objects exist in the system.
// These bthreads are triggered by object creation and deletion, and verify
// that the system behaves correctly based on that state.
/////////////////////////////////////////////////////////////////////////

ctx.bthread("verifyUserCreation", "User.All", function (user) {
	// When a user is created, delay that user's deletion until we verify
	// that the user exists in the system.
	// Note that Users.All is what we believe should exist based on events we
	// triggered, and this bthread verifies that it actually exists.
	block(matchDeleteUser(user.id), function () {
		verifyUsersExists(user.id);
	});
});

ctx.bthread("checkThatCannotDeleteLoanedUser", "User.HasLoan", function (user) {
	// When a user has a loan, delay deletion until we verify that the user
	// does not have any active loans.
	block(matchDeleteUser(user.id), function () {
		verifyUserCannotBeDeleted(user.id, 400);
	});
})

bthread("verifyUserDeletion", function () {
	// When a user is deleted, delay recreation until we verify that the
	// user no longer exists in the system.
	on(matchAnyUserDeleted(), function (e) {
		let id = extractId(e);

		block(matchAddUser(id), function () {
			verifyUserDoesNotAppearInAnyList(id);
			verifyUserCannotBeDeleted(id, 404);
		});
	});
});


ctx.bthread("verifyBookCreation", "Book.All", function (book) {
	// When a book is created, delay deletion until we verify that the book
	// exists in the system.
	block(matchDeleteBook(book.id), function () {
		verifyBooksExists(book.id);
	});
});

bthread("verifyBookDeletion", function () {
	// When a book is deleted, delay recreation until we verify that the
	// book no longer exists in the system.
	on(matchAnyBookDeleted(), function (e) {
		let id = extractId(e);

		block(matchAddBook(id), function () {
			verifyBookDoesNotAppearInAnyList(id);
			verifyBookCannotBeDeleted(id, 404);
		});
	});
});

ctx.bthread("verifyLoanCreation", "Loan.All", function (loan) {
	// When a loan is created, delay deletion until we verify that the loan
	// exists in the system.
	block(matchDeleteLoan(loan.userid), function () {
		verifyLoanExists(loan.bookid, loan.userid);
	});
});

ctx.bthread("blockDuplicateSuccessfulLoanCreation", "Loan.All", function (loan) {
	bp.sync({
		block: matchSuccessfulDuplicateLoan(loan.userid, loan.bookid),
		waitFor: matchDeleteLoanOrBookOrUser(loan.userid, loan.bookid)
	});
});

bthread("verifyLoanDeletion", function () {
	// When a loan is deleted, delay recreation until we verify that the
	// loan no longer exists in the system.
	on(matchAnyLoanDeleted(), function (e) {
		let id = extractId(e);
		let path = getRequestPath(e);
		let segments = path.split("/").filter(function (segment) { return segment.length > 0; });
		let bookId = segments.length >= 3 ? asInteger(segments[2]) : null;

		block(matchAddLoan(id), function () {
			verifyLoanDoesNotAppearInAnyList(null, id);
			if (bookId !== null) verifyLoanCannotBeDeleted(id, bookId, 404);
		});
	});
});

ctx.bthread("verifyHoldCreation", "Hold.All", function (hold) {
	// When a hold is created, delay deletion until we verify that the hold
	// exists in the system.
	block(matchDeleteHold(hold.holdid), function () {
		verifyHoldsExists(hold.holdid);
	});
});

ctx.bthread("blockDuplicateSuccessfulHoldCreation", "Hold.All", function (hold) {
	bp.sync({
		block: matchSuccessfulDuplicateHold(hold.holdid, hold.bookid, hold.userid),
		waitFor: matchDeleteHoldOrBookOrUser(hold.holdid, hold.bookid, hold.userid)
	});
});

bthread("verifyHoldDeletion", function () {
	// When a hold is deleted, delay recreation until we verify that the
	// hold no longer exists in the system.
	on(matchAnyHoldDeleted(), function (e) {
		let id = extractId(e);

		block(matchAddHold(id), function () {
			verifyHoldDoesNotAppearInAnyList(id);
			verifyHoldCannotBeDeleted(id, 404);
		});
	});
});


/////////////////////////////////////////////////////////////////////////
// Bthreads that create random stand-alone objects: users and books.
// These objects can be created without preconditions and are then used by
// other bthreads to create more complex objects such as loans and holds.
/////////////////////////////////////////////////////////////////////////

bthread("create random users", function () {
	for (let i = 0; i < NUMBER_OF_USERS; i++) {
		let id_Users_160 = 160 + i * 1000 + Math.floor(Math.random() * 999);
		let name_Users_160 = "name_Users_160_" + Math.floor(Math.random() * 1000);
		createUser(id_Users_160, name_Users_160);
	}
});

bthread("create random books", function () {
	for (let i = 0; i < NUMBER_OF_BOOKS; i++) {
		let id_Books_160 = 160 + i * 1000 + Math.floor(Math.random() * 999);
		let title_Books_160 = "title_Books_160_" + Math.floor(Math.random() * 1000);
		createBook(id_Books_160, title_Books_160);
	}
});



//////////////////////////////////////////////////////////////////////////
// Bthreads that create more complex objects, such as loans and holds,
// based on the existence of simpler objects like users and books.
// These bthreads are triggered by user and book creation and then create
// loans and holds from those existing objects.
//////////////////////////////////////////////////////////////////////////

ctx.bthread("crud:Loans:create", 'UserBook.CanCreateLoan', function (userbook) {
	let id_Loans_170 = 170 + Math.floor(Math.random() * 999999);
	block(matchDeleteBookOrUser(userbook.bookid, userbook.userid), function () {
		createLoan(userbook.userid, userbook.bookid, id_Loans_170);
	});
});

ctx.bthread("verifyCannotCreateLoanForBusyUserOrBook", 'UserBook.CannotCreateLoan', function (userbook) {
	let id_Loans_170 = 170 + Math.floor(Math.random() * 999999);
	createLoan(userbook.userid, userbook.bookid, id_Loans_170, 400);
});

ctx.bthread("crud:Holds:linear:2", 'UserBook.CanCreateHold', function (userbook) {
	let id_Holds_170 = 170 + Math.floor(Math.random() * 999999);
	block(matchDeleteBookOrUser(userbook.bookid, userbook.userid), function () {
		createHold(userbook.bookid, id_Holds_170, userbook.userid);
	});
});

ctx.bthread("verifyCannotCreateHoldForLoanedBook", 'UserBook.BookHasLoan', function (userbook) {
	let id_Holds_170 = 170 + Math.floor(Math.random() * 999999);
	createHold(userbook.bookid, id_Holds_170, userbook.userid, 400);
});

ctx.bthread("verifyCannotCreateDuplicateHold", 'UserBook.BookUserHasHold', function (userbook) {
	let id_Holds_170 = 170 + Math.floor(Math.random() * 999999);
	createHold(userbook.bookid, id_Holds_170, userbook.userid, 400);
});


/////////////////////////////////////////////////////////////////////////
// Bthreads that delete objects from the system, based on their existence.
// These bthreads are triggered by the existence of objects and then delete
// those objects, which in turn triggers the verification bthreads to check
// that the system behaves correctly after deletion.
/////////////////////////////////////////////////////////////////////////


ctx.bthread("deleteUser", "User.CanDelete", function (user) {
	deleteUser(user.id);
})

ctx.bthread("deleteBook", "Book.CanDelete", function (book) {
	deleteBook(book.id);
})

ctx.bthread("deleteLoan", "Loan.All", function (loan) {
	deleteLoan(loan.userid, loan.bookid, loan.loanid);
})

ctx.bthread("deleteHold", "Hold.All", function (hold) {
	deleteHold(hold.holdid, 200, hold.userid, hold.bookid);
})
