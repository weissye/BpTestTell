const NUMBER_OF_USERS = 3
const NUMBER_OF_BOOKS = 3


bthread("create random users", function () {
	// -> Creating Users
	for (let i = 0; i < NUMBER_OF_USERS; i++) {
		let id_Users_160 = 160 + i * 1000 + Math.floor(Math.random() * 999);
		let name_Users_160 = "name_Users_160_" + Math.floor(Math.random() * 1000);
		let q_Users_160 = "q_Users_160_" + Math.floor(Math.random() * 1000);
		createUser(id_Users_160, name_Users_160);
	}
});

bthread("create random books", function () {
	// -> Creating Books
	for (let i = 0; i < NUMBER_OF_BOOKS; i++) {
		let id_Books_160 = 160 + i * 1000 + Math.floor(Math.random() * 999);
		let title_Books_160 = "title_Books_160_" + Math.floor(Math.random() * 1000);
		let q_Books_160 = "q_Books_160_" + Math.floor(Math.random() * 1000);
		createBook(id_Books_160, title_Books_160);
	}
});

ctx.bthread("deleteUser", "User.NoLoan", function (user) {
	deleteUser(user.id);
})

ctx.bthread("checkThatCannotDeleteLoanedUser", "User.HasLoan", function (user) {
	while (true) {
		verifyUserCannotBeDeleted(user.id);
	}
})

ctx.bthread("verifyUserCreation", "User.All", function (user) {
	block(matchDeletedUsers(user.id), function () {
		verifyUsersExists(user.id);
	});
});

bthread("verifyUserDeletion", function () {
	while (true) {
		let e = waitFor(matchAnyUsersDeleted());
		let id = parseInt(e.data.parameters.description.split(' ').pop());
		// Note: While this bthread is busy requesting verifyUsersDoesNotExist, 
		// it is not waiting for matchAnyUsersDeleted. Consequently, if another User 
		// is deleted concurrently during this verification window, that deletion event may be missed.
		block(matchAddUser(id), function () {
			verifyUsersDoesNotExist(id);
		});
	}
});

ctx.bthread("verifyBookCreation", "Book.All", function (book) {
	block(matchDeletedBooks(book.id), function () {
		verifyBooksExists(book.id);
	});
});

bthread("verifyBookDeletion", function () {
	while (true) {
		let e = waitFor(matchAnyBooksDeleted());
		let id = parseInt(e.data.parameters.description.split(' ').pop());
		// Note: While this bthread is busy requesting verifyBooksDoesNotExist, 
		// it is not waiting for matchAnyBooksDeleted. Consequently, if another Book 
		// is deleted concurrently during this verification window, that deletion event may be missed.
		block(matchAddBook(id), function () {
			verifyBooksDoesNotExist(id);
		});
	}
});

ctx.bthread("verifyLoanCreation", "Loan.All", function (loan) {
	block(matchDeletedLoans(loan.userid), function () {
		verifyLoansExists(loan.bookid, loan.userid);
	});
});

bthread("verifyLoanDeletion", function () {
	while (true) {
		let e = waitFor(matchAnyLoansDeleted());
		let id = parseInt(e.data.parameters.description.split(' ').pop());
		// Note: While this bthread is busy requesting verifyLoansDoesNotExist, 
		// it is not waiting for matchAnyLoansDeleted. Consequently, if another Loan 
		// is deleted concurrently during this verification window, that deletion event may be missed.
		block(matchAddLoan(id), function () {
			verifyLoansDoesNotExist(null, id);
		});
	}
});

ctx.bthread("verifyHoldCreation", "Hold.All", function (hold) {
	block(matchDeletedHolds(hold.id), function () {
		verifyHoldsExists(hold.id);
	});
});

bthread("verifyHoldDeletion", function () {
	while (true) {
		let e = waitFor(matchAnyHoldsDeleted());
		let id = parseInt(e.data.parameters.description.split(' ').pop());
		// Note: While this bthread is busy requesting verifyHoldsDoesNotExist, 
		// it is not waiting for matchAnyHoldsDeleted. Consequently, if another Hold 
		// is deleted concurrently during this verification window, that deletion event may be missed.
		block(matchAddHold(id), function () {
			verifyHoldsDoesNotExist(id);
		});
	}
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
