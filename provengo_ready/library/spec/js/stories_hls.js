// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let id = 200;
  let name = "name_200";
  addUser(200, "name_200");
  tryToAddExistingUser(200, "name_200");
  verifyUserExists(id);
  deleteUser(id);
  tryToDeleteANonExistingUser(id);
  verifyUserDoesNotExist(id);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let id = 201;
  let name = "name_201";
  addUser(201, "name_201");
  tryToAddExistingUser(201, "name_201");
  verifyUserExists(id);
  deleteUser(id);
  tryToDeleteANonExistingUser(id);
  verifyUserDoesNotExist(id);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let id = 206;
  let name = "name_206";
  addUser(206, "name_206");
  verifyUserExists(id);
  tryToAddExistingUser(206, "name_206");
  verifyUserExists(id);
});

// Story: monitor:User:add
bthread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    let args = Object.values(ev);
    block(matchDeletedUser.apply(null, args), function () {
      // verifyUserExists.apply(null, args);
    });
  }
});

// Story: crud:Book:nondet:1:1
bthread("crud:Book:nondet:1:1", function () {
  let id = 210;
  let title = "title_210";
  addBook(210, "title_210");
  tryToAddExistingBook(210, "title_210");
  verifyBookExists(id);
  deleteBook(id);
  tryToDeleteANonExistingBook(id);
  verifyBookDoesNotExist(id);
});

// Story: crud:Book:nondet:1:2
bthread("crud:Book:nondet:1:2", function () {
  let id = 211;
  let title = "title_211";
  addBook(211, "title_211");
  tryToAddExistingBook(211, "title_211");
  verifyBookExists(id);
  deleteBook(id);
  tryToDeleteANonExistingBook(id);
  verifyBookDoesNotExist(id);
});

// Story: crud:Book:nondet:negative:dup-add
bthread("crud:Book:nondet:negative:dup-add", function () {
  let id = 216;
  let title = "title_216";
  addBook(216, "title_216");
  verifyBookExists(id);
  tryToAddExistingBook(216, "title_216");
  verifyBookExists(id);
});

// Story: monitor:Book:add
bthread("monitor:Book:add", function () {
  while (true) {
    let ev = waitForAnyBookAdded();
    let args = Object.values(ev);
    block(matchDeletedBook.apply(null, args), function () {
      // verifyBookExists.apply(null, args);
    });
  }
});

// Story: crud:Loan:nondet:1:1
bthread("crud:Loan:nondet:1:1", function () {
  let userId = 220;
  let bookId = 220;
  addLoan(220, 220);
  tryToAddExistingLoan(220, 220);
  verifyLoanExists(userId);
  deleteLoan(userId);
  tryToDeleteANonExistingLoan(userId);
  verifyLoanDoesNotExist(userId);
});

// Story: crud:Loan:nondet:1:2
bthread("crud:Loan:nondet:1:2", function () {
  let userId = 221;
  let bookId = 221;
  addLoan(221, 221);
  tryToAddExistingLoan(221, 221);
  verifyLoanExists(userId);
  deleteLoan(userId);
  tryToDeleteANonExistingLoan(userId);
  verifyLoanDoesNotExist(userId);
});

// Story: crud:Loan:nondet:negative:dup-add
bthread("crud:Loan:nondet:negative:dup-add", function () {
  let userId = 226;
  let bookId = 226;
  addLoan(226, 226);
  verifyLoanExists(userId);
  tryToAddExistingLoan(226, 226);
  verifyLoanExists(userId);
});

// Story: monitor:Loan:add
bthread("monitor:Loan:add", function () {
  while (true) {
    let ev = waitForAnyLoanAdded();
    let args = Object.values(ev);
    block(matchDeletedLoan.apply(null, args), function () {
      // verifyLoanExists.apply(null, args);
    });
  }
});

// Story: crud:Hold:nondet:1:1
bthread("crud:Hold:nondet:1:1", function () {
  let hold_id = 230;
  let userId = 230;
  let bookId = 230;
  addHold(230, 230, 230);
  tryToAddExistingHold(230, 230, 230);
  verifyHoldExists(hold_id);
  deleteHold(hold_id);
  tryToDeleteANonExistingHold(hold_id);
  verifyHoldDoesNotExist(hold_id);
});

// Story: crud:Hold:nondet:1:2
bthread("crud:Hold:nondet:1:2", function () {
  let hold_id = 231;
  let userId = 231;
  let bookId = 231;
  addHold(231, 231, 231);
  tryToAddExistingHold(231, 231, 231);
  verifyHoldExists(hold_id);
  deleteHold(hold_id);
  tryToDeleteANonExistingHold(hold_id);
  verifyHoldDoesNotExist(hold_id);
});

// Story: crud:Hold:nondet:negative:dup-add
bthread("crud:Hold:nondet:negative:dup-add", function () {
  let hold_id = 236;
  let userId = 236;
  let bookId = 236;
  addHold(236, 236, 236);
  verifyHoldExists(hold_id);
  tryToAddExistingHold(236, 236, 236);
  verifyHoldExists(hold_id);
});

// Story: monitor:Hold:add
bthread("monitor:Hold:add", function () {
  while (true) {
    let ev = waitForAnyHoldAdded();
    let args = Object.values(ev);
    block(matchDeletedHold.apply(null, args), function () {
      // verifyHoldExists.apply(null, args);
    });
  }
});
