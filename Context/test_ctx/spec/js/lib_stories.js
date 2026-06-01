const NUMBER_OF_USERS = 1;
const NUMBER_OF_BOOKS = 1;

const RANDOM = new java.util.Random();

function randomInt() {
  return RANDOM.nextInt(999999);
}

function generateUserId() {
  return randomInt();
}

function generateUserName() {
  return "User name " + randomInt();
}

function generateBookId() {
  return randomInt();
}

function generateBookTitle() {
  return "Book title " + randomInt();
}

function generateLoanId() {
  return randomInt();
}

function generateHoldId() {
  return randomInt();
}

//////////////////////////////////////////////////////////////////////////
// Story layer.
//
// This file describes test behavior: which operations should be attempted,
// blocked, verified, or repeated under different domain states. It should use
// the public APIs exposed by the interface layer and the query API exposed by
// the DAL. It should not update Context entities directly and should avoid
// duplicating the DAL's domain rules.
//
// Separation of concerns in this model:
// - interfaces.library.js owns REST calls, EventSets, and event-data extraction.
// - dal.js owns Context entities, effects, and queries over the model.
// - lib_stories.js owns behavioral scenarios and verification timing.
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// Verification bthreads that check system behavior depending on whether
// objects exist in the system.
// These bthreads are triggered by object creation and deletion, and verify
// that the system behaves correctly based on that state.
/////////////////////////////////////////////////////////////////////////

ctx.bthread("verifyUserExistsAfterCreation", "User.All", function (user) {
  // When a user is created, delay that user's deletion until we verify
  // that the user exists in the system.
  // Note that Users.All is what we believe should exist based on events we
  // triggered, and this bthread verifies that it actually exists.
  block(matchDeleteUser(user.id), function () {
    verifyUserExists(user.id);
  });
});

ctx.bthread("verifyCannotCreateDuplicateUser", "User.All", function (user) {
  block(matchDeleteUser(user.id), function () {
    tryToCreateUserWithSameIdAndExpectError(user.id);
  });
});

ctx.bthread("verifyCannotCreateUserWithBadParameters", "User.All", function (user) {
  block(matchDeleteUser(user.id), function () {
    tryToCreateUserWithBadParametersAndExpectError(user.id, 400);
  });
});



ctx.bthread("checkThatCannotDeleteLoanedUser", "User.HasLoan", function (user) {
  // When a user has a loan, delay deletion until we verify that the user
  // does not have any active loans.
  block(matchDeleteUser(user.id), function () {
    verifyUserCannotBeDeleted(user.id, 400);
  });
});

bthread("verifyUserDeletion", function () {
  // When a user is deleted, delay recreation until we verify that the
  // user no longer exists in the system.
  on(matchAnyUserDeleted(), function (e) {
    let id = extractEventData(e).id;

    block(matchAddUser(id), function () {
      verifyUserAbsentFromAllLists(id);
      verifyDeletedUserCannotBeDeleted(id);
    });
  });
});

ctx.bthread("verifyBookExistsAfterCreation", "Book.All", function (book) {
  // When a book is created, delay deletion until we verify that the book
  // exists in the system.
  block(matchDeleteBook(book.id), function () {
    verifyBookExists(book.id);
  });
});

bthread("verifyBookDeletion", function () {
  // When a book is deleted, delay recreation until we verify that the
  // book no longer exists in the system.
  on(matchAnyBookDeleted(), function (e) {
    let id = extractEventData(e).id;

    block(matchAddBook(id), function () {
      verifyBookAbsentFromAllLists(id);
      verifyDeletedBookCannotBeDeleted(id);
    });
  });
});

ctx.bthread("verifyLoanExistsAfterCreation", "Loan.All", function (loan) {
  // When a loan is created, delay deletion until we verify that the loan
  // exists in the system.
  block(matchDeleteLoan(loan.userid), function () {
    verifyLoanExists(loan.bookid, loan.userid);
  });
});

bthread("verifyLoanDeletion", function () {
  // When a loan is deleted, delay recreation until we verify that the
  // loan no longer exists in the system.
  on(matchAnyLoanDeleted(), function (e) {
    let loanData = extractEventData(e);

    block(matchAddLoan(loanData.userId), function () {
      verifyLoanAbsentFromAllLists(null, loanData.userId);
      if (loanData.bookId !== undefined && loanData.bookId !== null)
        verifyDeletedLoanCannotBeDeleted(loanData.userId, loanData.bookId);
    });
  });
});

ctx.bthread("verifyHoldExistsAfterCreation", "Hold.All", function (hold) {
  // When a hold is created, delay deletion until we verify that the hold
  // exists in the system.
  block(matchDeleteHold(hold.holdid), function () {
    verifyHoldExists(hold.holdid);
  });
});

bthread("verifyHoldDeletion", function () {
  // When a hold is deleted, delay recreation until we verify that the
  // hold no longer exists in the system.
  on(matchAnyHoldDeleted(), function (e) {
    let id = extractEventData(e).id;

    block(matchAddHold(id), function () {
      verifyHoldAbsentFromAllLists(id);
      verifyDeletedHoldCannotBeDeleted(id);
    });
  });
});


ctx.bthread("verifyCannotCreateLoanForBusyUserOrBook", "UserBook.CannotCreateLoan", function (userbook) {
  tryToCreateLoanAndExpectError(userbook.userid, userbook.bookid, generateLoanId());
});


/////////////////////////////////////////////////////////////////////////
// Bthreads that create random stand-alone objects: users and books.
// These objects can be created without preconditions and are then used by
// other bthreads to create more complex objects such as loans and holds.
/////////////////////////////////////////////////////////////////////////

bthread("createRandomUsers", function () {
  for (let i = 0; i < NUMBER_OF_USERS; i++) {
    createUser(generateUserId(), generateUserName());
  }
});

bthread("createRandomBooks", function () {
  for (let i = 0; i < NUMBER_OF_BOOKS; i++) {
    createBook(generateBookId(), generateBookTitle());
  }
});

//////////////////////////////////////////////////////////////////////////
// Bthreads that create more complex objects, such as loans and holds,
// based on the existence of simpler objects like users and books.
// These bthreads are triggered by user and book creation and then create
// loans and holds from those existing objects.
//////////////////////////////////////////////////////////////////////////

ctx.bthread("createLoan", "UserBook.CanCreateLoan", function (userbook) {
  createLoan(userbook.userid, userbook.bookid, generateLoanId());
});


ctx.bthread("verifyCannotCreateLoanWithSwappedUserAndBook", "UserBook.CannotCreateLoan", function (userbook) {
  tryToCreateLoanAndExpectError(userbook.bookid, userbook.userid, generateLoanId());
});



ctx.bthread("createHold", "UserBook.CanCreateHold", function (userbook) {
  createHold(userbook.bookid, generateHoldId(), userbook.userid);
});

ctx.bthread("verifyCannotCreateHoldForLoanedBook", "UserBook.CannotCreateHold", function (userbook) {
  tryToCreateHoldAndExpectError(userbook.bookid, generateHoldId(), userbook.userid);
});


/////////////////////////////////////////////////////////////////////////
// Bthreads that delete objects from the system, based on their existence.
// These bthreads are triggered by the existence of objects and then delete
// those objects, which in turn triggers the verification bthreads to check
// that the system behaves correctly after deletion.
//
// There is an issue with the sampling mechanism here because it is eager 
// to delete objects, which can lead to a situation where all objects are deleted 
// before complex scenarios can be fully explored. A more sophisticated sampling.
// A poor-man remedy for this is to decrease the probability of deletion, which can 
// be done by adding a random chance to the deletion bthreads.
/////////////////////////////////////////////////////////////////////////

ctx.bthread("deleteUser", "User.CanDelete", function (user) {
  deleteUser(user.id);
});

ctx.bthread("deleteBook", "Book.CanDelete", function (book) {
  deleteBook(book.id);
});

ctx.bthread("deleteLoan", "Loan.All", function (loan) {
  deleteLoan(loan.userid, loan.bookid, loan.loanid);
});

ctx.bthread("deleteHold", "Hold.All", function (hold) {
  deleteHold(hold.holdid, hold.userid, hold.bookid);
});
