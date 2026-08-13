const NUMBER_OF_USERS = 3;
const NUMBER_OF_BOOKS = 3;

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

function generateMissingId(existingId) {
  return Number.parseInt(existingId, 10) + 1000000000;
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
  block(matchDeleteUser(user.id), function () {
    verifyUserExists(user.id);
  });
});

ctx.bthread("verifyCannotCreateDuplicateUser", "User.All", function (user) {
  tryToCreateUserWithSameIdAndExpectError(user.id);
});

ctx.bthread("checkThatCannotDeleteLoanedUser", "User.HasLoan", function (user) {
  tryToDeleteUserAndExpectError(user.id);
});

ctx.bthread("checkThatCannotDeleteHeldUser", "Hold.All", function (hold) {
  tryToDeleteUserAndExpectError(hold.userid);
});

ctx.bthread("verifyUserDeletion", function () {
  on(matchAnyUserDeleted(), function (e) {
    let id = extractEventData(e).id;

    block(matchAddUser(id), function () {
      verifyUserAbsentFromAllLists(id);
      tryToDeleteDeletedUserAndExpectError(id);
    });
  });
});

ctx.bthread("verifyBookExistsAfterCreation", "Book.All", function (book) {
  block(matchDeleteBook(book.id), function () {
    verifyBookExists(book.id);
    verifyBookDetailExists(book.id);
  });
});

bthread("verifyBookDeletion", function () {
  on(matchAnyBookDeleted(), function (e) {
    let id = extractEventData(e).id;

    block(matchAddBook(id), function () {
      verifyBookAbsentFromAllLists(id);
      verifyMissingEntityReadIsRejected("Book", id, "/books/" + id);
      tryToDeleteDeletedBookAndExpectError(id);
    });
  });
});

ctx.bthread("verifyLoanExistsAfterCreation", "Loan.All", function (loan) {
  block(matchDeleteLoan(loan.userid), function () {
    verifyLoanExists(loan.bookid, loan.userid);
  });
});

bthread("verifyLoanDeletion", function () {
  on(matchAnyLoanDeleted(), function (e) {
    let loanData = extractEventData(e);

    block(matchAddLoan(loanData.userId), function () {
      verifyLoanAbsentFromAllLists(null, loanData.userId);
      if (loanData.bookId !== undefined && loanData.bookId !== null)
        tryToDeleteDeletedLoanAndExpectError(loanData.userId, loanData.bookId);
    });
  });
});

ctx.bthread("verifyHoldExistsAfterCreation", "Hold.All", function (hold) {
  block(matchDeleteHold(hold.holdid), function () {
    verifyHoldExists(hold.holdid);
  });
});

bthread("verifyHoldDeletion", function () {
  on(matchAnyHoldDeleted(), function (e) {
    let id = extractEventData(e).id;

    block(matchAddHold(id), function () {
      verifyHoldAbsentFromAllLists(id);
      tryToDeleteDeletedHoldAndExpectError(id);
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

ctx.bthread("verifyCannotCreateLoan", "UserBook.CannotCreateLoan", function (userbook) {
  tryToCreateLoanAndExpectError(userbook.bookid, userbook.userid, generateLoanId());
});

ctx.bthread("createHold", "UserBook.CanCreateHold", function (userbook) {
  createHold(userbook.bookid, generateHoldId(), userbook.userid);
});

ctx.bthread("verifyCannotCreateHold", "UserBook.CannotCreateHold", function (userbook) {
  tryToCreateHoldWithSameIdAndExpectError(userbook.bookid, generateHoldId(), userbook.userid);
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

//////////////////////////////////////////////////////////////////////////
// Additional negative verifiers.
//
// These bthreads cover entity-specific rejection cases that are supported by
// the interface layer and SUT but are not part of the basic CRUD flow above.
//////////////////////////////////////////////////////////////////////////

ctx.bthread("verifyCannotCreateDuplicateBook", "Book.All", function (book) {
  block(matchDeleteBook(book.id), function () {
    tryToCreateBookWithSameIdAndExpectError(book.id);
  });
});

ctx.bthread("verifyCannotCreateBookWithBadParameters", "Book.All", function (book) {
  block(matchDeleteBook(book.id), function () {
    tryToCreateBookWithBadParametersAndExpectError(book.id);
  });
});

// Gera: This is not consistent with the above because it is specific while above we use a generic query.
// For example, "UserBook.CannotCreateHold" does not explain why while "UserBook.BookHasLoan" does explain why.
// I think we should use the more generic query for all of them.
ctx.bthread("verifyCannotDeleteLoanedBook", "UserBook.BookHasLoan", function (userbook) {
  // Gera: This means that we must try this for every loan. I am not sure that this is wise.
  block(matchDeleteLoanOrBookOrUser(userbook.userid, userbook.bookid), function () {
    tryToDeleteBookAndExpectError(userbook.bookid);
  });
});

ctx.bthread("verifyCannotDeleteHeldBook", "Hold.All", function (hold) {
  block(matchAddLoanForHeldResourceOrDeleteHoldOrBookOrUser(hold.holdid, hold.bookid, hold.userid), function () {
    tryToDeleteBookAndExpectError(hold.bookid);
  });
});

ctx.bthread("verifyHoldOnlyBlocksUserAndBookDeletion", "Hold.All", function (hold) {
  block(matchAddLoanForHeldResourceOrDeleteHoldOrBookOrUser(hold.holdid, hold.bookid, hold.userid), function () {
    tryToDeleteUserAndExpectError(hold.userid);
    tryToDeleteBookAndExpectError(hold.bookid);
  });
  deleteHold(hold.holdid, hold.userid, hold.bookid);
});

ctx.bthread("verifyCannotCreateLoanWithBadParameters", "UserBook.All", function (userbook) {
  tryToCreateLoanWithBadParametersAndExpectError(userbook.userid);
});

ctx.bthread("verifyCannotCreateLoanWithNonexistentForeignKeys", "UserBook.All", function (userbook) {
  let missingUserId = generateMissingId(userbook.userid);
  let missingBookId = generateMissingId(userbook.bookid);


  // Gera: I think trying all three is too much, enough to try one of the three nondeterministically?
  tryToCreateLoanAndExpectError(missingUserId, userbook.bookid, generateLoanId());
  tryToCreateLoanAndExpectError(userbook.userid, missingBookId, generateLoanId());
  tryToCreateLoanAndExpectError(missingUserId, missingBookId, generateLoanId());
});

ctx.bthread("verifyCannotCreateDuplicateHoldId", "Hold.All", function (hold) {
  tryToCreateHoldWithSameIdAndExpectError(hold.bookid, hold.holdid, hold.userid);
});

ctx.bthread("verifyCannotCreateHoldWithBadParameters", "Hold.All", function (hold) {
  tryToCreateHoldWithBadParametersAndExpectError(hold.holdid, hold.userid);
});

ctx.bthread("verifyCannotCreateHoldWithNonexistentForeignKeys", "UserBook.All", function (userbook) {
  let missingUserId = generateMissingId(userbook.userid);
  let missingBookId = generateMissingId(userbook.bookid);

  // Gera: I think trying all three is too much, enough to try one of the three nondeterministically?
  tryToCreateHoldAndExpectError(userbook.bookid, generateHoldId(), missingUserId);
  tryToCreateHoldAndExpectError(missingBookId, generateHoldId(), userbook.userid);
  tryToCreateHoldAndExpectError(missingBookId, generateHoldId(), missingUserId);
});

//////////////////////////////////////////////////////////////////////////
// Read, malformed-delete, and unsupported-update API verifiers.
//
// The Library SUT exposes list reads for every entity and a detail read only
// for books. It does not expose update routes, so update coverage verifies
// that PUT attempts are rejected with 405.
//////////////////////////////////////////////////////////////////////////


// Gera: I think that trying nonexisting interfaces may be too much?
ctx.bthread("verifyCannotUpdateUser", "User.All", function (user) {
  tryToUpdateUserAndExpectError(user.id, { id: user.id, name: "Updated user " + user.id }, 405);
});

ctx.bthread("verifyCannotUpdateBook", "Book.All", function (book) {
  tryToUpdateBookAndExpectError(book.id, { id: book.id, title: "Updated book " + book.id }, 405);
});

ctx.bthread("verifyCannotUpdateLoan", "Loan.All", function (loan) {
  tryToUpdateLoanAndExpectError(loan.userid, loan.bookid, { userId: loan.userid, bookId: loan.bookid }, 405);
});

ctx.bthread("verifyCannotUpdateHold", "Hold.All", function (hold) {
  tryToUpdateHoldAndExpectError(hold.holdid, hold.userid, hold.bookid, { id: hold.holdid, userId: hold.userid, bookId: hold.bookid }, 405);
});

// Gera: Why only users? Why not also books, loans and holds?
bthread("tryToDeleteNonexistingUser", function () {
  tryToDeleteNonexistingUserAndExpectError(generateMissingId(generateUserId()));
});

// =========================================================================
// The Fuzzing Interface Layer Contract
// =========================================================================
// Whenever a story requests an action (create, delete, or retrieve an object),
// the interface layer executes a pre-flight fuzzing and verification sequence
// IF the SUT actually defines rejection semantics for that action. Some reads
// (see point 4) have no invalid variant to fuzz and skip straight to the request.
//
// 1. Event Generation & Fuzzing:
//    The interface defines and requests a set of fuzzed request events:
//    - Valid Variants: Requests with parameters passed in different orders, types
//      (e.g., stringified integers), or padded values, which the SUT should accept.
//    - Invalid Variants: Requests with missing fields, incorrect types, nulls,
//      negatives, or empty values, designed to verify the SUT's rejection logic.
//
// 2. Fuzzing Loop execution:
//    The system enters a synchronization block requesting the union of all valid
//    and invalid events:
//    - If an invalid event is selected: The interface immediately executes a REST
//      request asserting that the SUT rejects it (expected code 400). It then loops
//      to request the event set again.
//    - If a valid event is selected: The interface executes the successful REST
//      request (expecting 200 or 201) and exits the loop.
//
// 3. Synchronization & Match Compliance:
//    Because b-threads may block or wait-for events during this process, the
//    corresponding EventSets (e.g., matchAddBook, matchDeleteUser) MUST capture:
//    - The actual successful SUT REST completion event (e.g. POST/DELETE with 200/201).
//    - Any valid client-side fuzzing request event (where `type === "valid"` and the
//      target entity IDs match), ensuring stories stay synchronized with fuzzed paths.
//
// 4. Retrieve actions and the fuzzing loop:
//    A read only gets the fuzzing loop (points 1-2) when the SUT itself validates
//    the read's parameters and can reject it with 400:
//    - Book detail reads (GET /books/{id}) validate the id path segment, so
//      verifyBookDetailExists fuzzes it exactly like a delete action.
//    - Loan list reads (GET /loans) validate userId/bookId query parameters, so
//      verifyLoanExists fuzzes them the same way.
//    - Book/user/hold list reads (GET /books|/users|/holds) accept any `q` value
//      and always answer 200 - there is no invalid variant, so verifyBookExists,
//      verifyUserExists, and verifyHoldExists read the SUT list directly instead
//      of running the fuzzing loop. Point 3's synchronization rule does not apply
//      to these EventSets either, since nothing blocks or waits on a plain read.
//
