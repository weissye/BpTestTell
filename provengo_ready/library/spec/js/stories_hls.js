// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let user_id = "user_id_200";
  createUser("user_id_200");
  tryToAddExistingUser("user_id_200");
  verifyUserExists("user_id_200");
  deleteUser("user_id_200");
  tryToDeleteANonExistingUser("user_id_200");
  verifyUserDoesNotExist("user_id_200");
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let user_id = "user_id_201";
  createUser("user_id_201");
  tryToAddExistingUser("user_id_201");
  verifyUserExists("user_id_201");
  deleteUser("user_id_201");
  tryToDeleteANonExistingUser("user_id_201");
  verifyUserDoesNotExist("user_id_201");
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let user_id = "user_id_206";
  createUser("user_id_206");
  verifyUserExists("user_id_206");
  tryToAddExistingUser("user_id_206");
  verifyUserExists("user_id_206");
});

// Story: monitor:User:add
bthread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    let args = Object.values(ev);
    block(matchDeletedUser.apply(null, args), function () {
      verifyUserExists.apply(null, args);
    });
  }
});

// Story: crud:Book:nondet:1:1
bthread("crud:Book:nondet:1:1", function () {
  let book_id = 210;
  createBook(210);
  tryToAddExistingBook(210);
  verifyBookExists(210);
  deleteBook(210);
  tryToDeleteANonExistingBook(210);
  verifyBookDoesNotExist(210);
});

// Story: crud:Book:nondet:1:2
bthread("crud:Book:nondet:1:2", function () {
  let book_id = 211;
  createBook(211);
  tryToAddExistingBook(211);
  verifyBookExists(211);
  deleteBook(211);
  tryToDeleteANonExistingBook(211);
  verifyBookDoesNotExist(211);
});

// Story: crud:Book:nondet:negative:dup-add
bthread("crud:Book:nondet:negative:dup-add", function () {
  let book_id = 216;
  createBook(216);
  verifyBookExists(216);
  tryToAddExistingBook(216);
  verifyBookExists(216);
});

// Story: monitor:Book:add
bthread("monitor:Book:add", function () {
  while (true) {
    let ev = waitForAnyBookAdded();
    let args = Object.values(ev);
    block(matchDeletedBook.apply(null, args), function () {
      verifyBookExists.apply(null, args);
    });
  }
});

// Story: crud:Loan:nondet:1:1
bthread("crud:Loan:nondet:1:1", function () {
  let user_id = "user_id_220";
  let book_id = 220;
  createLoan("user_id_220", 220);
  tryToAddExistingLoan("user_id_220", 220);
  verifyLoanExists("user_id_220", 220);
  deleteLoan("user_id_220", 220);
  tryToDeleteANonExistingLoan("user_id_220", 220);
  verifyLoanDoesNotExist("user_id_220", 220);
});

// Story: crud:Loan:nondet:1:2
bthread("crud:Loan:nondet:1:2", function () {
  let user_id = "user_id_221";
  let book_id = 221;
  createLoan("user_id_221", 221);
  tryToAddExistingLoan("user_id_221", 221);
  verifyLoanExists("user_id_221", 221);
  deleteLoan("user_id_221", 221);
  tryToDeleteANonExistingLoan("user_id_221", 221);
  verifyLoanDoesNotExist("user_id_221", 221);
});

// Story: crud:Loan:nondet:negative:dup-add
bthread("crud:Loan:nondet:negative:dup-add", function () {
  let user_id = "user_id_226";
  let book_id = 226;
  createLoan("user_id_226", 226);
  verifyLoanExists("user_id_226", 226);
  tryToAddExistingLoan("user_id_226", 226);
  verifyLoanExists("user_id_226", 226);
});

// Story: monitor:Loan:add
bthread("monitor:Loan:add", function () {
  while (true) {
    let ev = waitForAnyLoanAdded();
    let args = Object.values(ev);
    block(matchDeletedLoan.apply(null, args), function () {
      verifyLoanExists.apply(null, args);
    });
  }
});

// Story: crud:Hold:nondet:1:1
bthread("crud:Hold:nondet:1:1", function () {
  let hold_id = 230;
  createHold(230);
  tryToAddExistingHold(230);
  verifyHoldExists(230);
  deleteHold(230);
  tryToDeleteANonExistingHold(230);
  verifyHoldDoesNotExist(230);
});

// Story: crud:Hold:nondet:1:2
bthread("crud:Hold:nondet:1:2", function () {
  let hold_id = 231;
  createHold(231);
  tryToAddExistingHold(231);
  verifyHoldExists(231);
  deleteHold(231);
  tryToDeleteANonExistingHold(231);
  verifyHoldDoesNotExist(231);
});

// Story: crud:Hold:nondet:negative:dup-add
bthread("crud:Hold:nondet:negative:dup-add", function () {
  let hold_id = 236;
  createHold(236);
  verifyHoldExists(236);
  tryToAddExistingHold(236);
  verifyHoldExists(236);
});

// Story: monitor:Hold:add
bthread("monitor:Hold:add", function () {
  while (true) {
    let ev = waitForAnyHoldAdded();
    let args = Object.values(ev);
    block(matchDeletedHold.apply(null, args), function () {
      verifyHoldExists.apply(null, args);
    });
  }
});
