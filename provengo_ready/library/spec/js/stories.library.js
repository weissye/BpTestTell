// Auto-generated stories for library
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: Chain Users_Loans
bthread("chain:Users_Loans", function () {
  // --- Level 0: Users ---
  let email_0_0 = "u0_0_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_0_0 = 200000 + Math.floor(Math.random()*10000);
  let name_0_0 = "name_0_0_" + Math.floor(Math.random()*1000);
  let password_0_0 = "password_0_0_" + Math.floor(Math.random()*1000);
  let q_0_0 = "q_0_0_" + Math.floor(Math.random()*1000);
  createUser(email_0_0, id_0_0, name_0_0, password_0_0, q_0_0);
  verifyUsersExists(email_0_0, id_0_0, name_0_0, password_0_0, q_0_0);
  // --- Level 1: Loans ---
  let bookId_0_1 = Math.floor(Math.random()*100);
  let id_0_1 = Math.floor(Math.random()*100);
  let loanDate_0_1 = "loanDate_0_1_" + Math.floor(Math.random()*1000);
  let userId_0_1 = 200000 + Math.floor(Math.random()*10000);
  createLoan(bookId_0_1, id_0_1, loanDate_0_1, userId_0_1);
  verifyLoansExists(bookId_0_1, id_0_1, loanDate_0_1, userId_0_1);
  // --- Teardown Phase (Reverse Order) ---
  deleteLoan(bookId_0_1, id_0_1, loanDate_0_1, userId_0_1);
  verifyLoansDeleted(bookId_0_1, id_0_1, loanDate_0_1, userId_0_1);
  deleteUser(email_0_0, id_0_0, name_0_0, password_0_0, q_0_0);
  verifyUsersDeleted(email_0_0, id_0_0, name_0_0, password_0_0, q_0_0);
});

// Story: Chain Users_Holds
bthread("chain:Users_Holds", function () {
  // --- Level 0: Users ---
  let email_1_0 = "u1_0_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_1_0 = 700000 + Math.floor(Math.random()*10000);
  let name_1_0 = "name_1_0_" + Math.floor(Math.random()*1000);
  let password_1_0 = "password_1_0_" + Math.floor(Math.random()*1000);
  let q_1_0 = "q_1_0_" + Math.floor(Math.random()*1000);
  createUser(email_1_0, id_1_0, name_1_0, password_1_0, q_1_0);
  verifyUsersExists(email_1_0, id_1_0, name_1_0, password_1_0, q_1_0);
  // --- Level 1: Holds ---
  let bookId_1_1 = Math.floor(Math.random()*100);
  let book_id_1_1 = Math.floor(Math.random()*100);
  let end_date_1_1 = "end_date_1_1_" + Math.floor(Math.random()*1000);
  let id_1_1 = 700000 + Math.floor(Math.random()*10000);
  let start_date_1_1 = "start_date_1_1_" + Math.floor(Math.random()*1000);
  let userId_1_1 = Math.floor(Math.random()*100);
  let user_id_1_1 = Math.floor(Math.random()*100);
  createHold(bookId_1_1, book_id_1_1, end_date_1_1, id_1_1, start_date_1_1, userId_1_1, user_id_1_1);
  verifyHoldsExists(bookId_1_1, book_id_1_1, end_date_1_1, id_1_1, start_date_1_1, userId_1_1, user_id_1_1);
  // --- Teardown Phase (Reverse Order) ---
  deleteHold(bookId_1_1, book_id_1_1, end_date_1_1, id_1_1, start_date_1_1, userId_1_1, user_id_1_1);
  verifyHoldsDeleted(bookId_1_1, book_id_1_1, end_date_1_1, id_1_1, start_date_1_1, userId_1_1, user_id_1_1);
  deleteUser(email_1_0, id_1_0, name_1_0, password_1_0, q_1_0);
  verifyUsersDeleted(email_1_0, id_1_0, name_1_0, password_1_0, q_1_0);
});

// Story: Chain Books_Loans
bthread("chain:Books_Loans", function () {
  // --- Level 0: Books ---
  let author_2_0 = "author_2_0_" + Math.floor(Math.random()*1000);
  let id_2_0 = 1200000 + Math.floor(Math.random()*10000);
  let publishedDate_2_0 = "publishedDate_2_0_" + Math.floor(Math.random()*1000);
  let q_2_0 = "q_2_0_" + Math.floor(Math.random()*1000);
  let title_2_0 = "title_2_0_" + Math.floor(Math.random()*1000);
  createBook(author_2_0, id_2_0, publishedDate_2_0, q_2_0, title_2_0);
  verifyBooksExists(author_2_0, id_2_0, publishedDate_2_0, q_2_0, title_2_0);
  // --- Level 1: Loans ---
  let bookId_2_1 = Math.floor(Math.random()*100);
  let id_2_1 = Math.floor(Math.random()*100);
  let loanDate_2_1 = "loanDate_2_1_" + Math.floor(Math.random()*1000);
  let userId_2_1 = 1200000 + Math.floor(Math.random()*10000);
  createLoan(bookId_2_1, id_2_1, loanDate_2_1, userId_2_1);
  verifyLoansExists(bookId_2_1, id_2_1, loanDate_2_1, userId_2_1);
  // --- Teardown Phase (Reverse Order) ---
  deleteLoan(bookId_2_1, id_2_1, loanDate_2_1, userId_2_1);
  verifyLoansDeleted(bookId_2_1, id_2_1, loanDate_2_1, userId_2_1);
  deleteBook(author_2_0, id_2_0, publishedDate_2_0, q_2_0, title_2_0);
  verifyBooksDeleted(author_2_0, id_2_0, publishedDate_2_0, q_2_0, title_2_0);
});

// Story: Chain Books_Holds
bthread("chain:Books_Holds", function () {
  // --- Level 0: Books ---
  let author_3_0 = "author_3_0_" + Math.floor(Math.random()*1000);
  let id_3_0 = 1700000 + Math.floor(Math.random()*10000);
  let publishedDate_3_0 = "publishedDate_3_0_" + Math.floor(Math.random()*1000);
  let q_3_0 = "q_3_0_" + Math.floor(Math.random()*1000);
  let title_3_0 = "title_3_0_" + Math.floor(Math.random()*1000);
  createBook(author_3_0, id_3_0, publishedDate_3_0, q_3_0, title_3_0);
  verifyBooksExists(author_3_0, id_3_0, publishedDate_3_0, q_3_0, title_3_0);
  // --- Level 1: Holds ---
  let bookId_3_1 = Math.floor(Math.random()*100);
  let book_id_3_1 = Math.floor(Math.random()*100);
  let end_date_3_1 = "end_date_3_1_" + Math.floor(Math.random()*1000);
  let id_3_1 = 1700000 + Math.floor(Math.random()*10000);
  let start_date_3_1 = "start_date_3_1_" + Math.floor(Math.random()*1000);
  let userId_3_1 = Math.floor(Math.random()*100);
  let user_id_3_1 = Math.floor(Math.random()*100);
  createHold(bookId_3_1, book_id_3_1, end_date_3_1, id_3_1, start_date_3_1, userId_3_1, user_id_3_1);
  verifyHoldsExists(bookId_3_1, book_id_3_1, end_date_3_1, id_3_1, start_date_3_1, userId_3_1, user_id_3_1);
  // --- Teardown Phase (Reverse Order) ---
  deleteHold(bookId_3_1, book_id_3_1, end_date_3_1, id_3_1, start_date_3_1, userId_3_1, user_id_3_1);
  verifyHoldsDeleted(bookId_3_1, book_id_3_1, end_date_3_1, id_3_1, start_date_3_1, userId_3_1, user_id_3_1);
  deleteBook(author_3_0, id_3_0, publishedDate_3_0, q_3_0, title_3_0);
  verifyBooksDeleted(author_3_0, id_3_0, publishedDate_3_0, q_3_0, title_3_0);
});

// Story: crud:Books:linear:1
bthread("crud:Books:linear:1", function () {
  let author_lin_1 = "author_lin_1_" + Math.floor(Math.random()*1000);
  let id_lin_1 = 2200000 + Math.floor(Math.random()*10000);
  let publishedDate_lin_1 = "publishedDate_lin_1_" + Math.floor(Math.random()*1000);
  let q_lin_1 = "q_lin_1_" + Math.floor(Math.random()*1000);
  let title_lin_1 = "title_lin_1_" + Math.floor(Math.random()*1000);
  createBook(author_lin_1, id_lin_1, publishedDate_lin_1, q_lin_1, title_lin_1);
  verifyBooksExists(author_lin_1, id_lin_1, publishedDate_lin_1, q_lin_1, title_lin_1);
  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Books:linear:2
bthread("crud:Books:linear:2", function () {
  let author_lin_2 = "author_lin_2_" + Math.floor(Math.random()*1000);
  let id_lin_2 = 2200000 + Math.floor(Math.random()*10000);
  let publishedDate_lin_2 = "publishedDate_lin_2_" + Math.floor(Math.random()*1000);
  let q_lin_2 = "q_lin_2_" + Math.floor(Math.random()*1000);
  let title_lin_2 = "title_lin_2_" + Math.floor(Math.random()*1000);
  createBook(author_lin_2, id_lin_2, publishedDate_lin_2, q_lin_2, title_lin_2);
  verifyBooksExists(author_lin_2, id_lin_2, publishedDate_lin_2, q_lin_2, title_lin_2);
  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Books:linear:3
bthread("crud:Books:linear:3", function () {
  let author_lin_3 = "author_lin_3_" + Math.floor(Math.random()*1000);
  let id_lin_3 = 2200000 + Math.floor(Math.random()*10000);
  let publishedDate_lin_3 = "publishedDate_lin_3_" + Math.floor(Math.random()*1000);
  let q_lin_3 = "q_lin_3_" + Math.floor(Math.random()*1000);
  let title_lin_3 = "title_lin_3_" + Math.floor(Math.random()*1000);
  createBook(author_lin_3, id_lin_3, publishedDate_lin_3, q_lin_3, title_lin_3);
  verifyBooksExists(author_lin_3, id_lin_3, publishedDate_lin_3, q_lin_3, title_lin_3);
  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Loans:linear:1
bthread("crud:Loans:linear:1", function () {
  let bookId_lin_1 = Math.floor(Math.random()*100);
  let id_lin_1 = Math.floor(Math.random()*100);
  let loanDate_lin_1 = "loanDate_lin_1_" + Math.floor(Math.random()*1000);
  let userId_lin_1 = 2300000 + Math.floor(Math.random()*10000);
  createLoan(bookId_lin_1, id_lin_1, loanDate_lin_1, userId_lin_1);
  verifyLoansExists(bookId_lin_1, id_lin_1, loanDate_lin_1, userId_lin_1);
  deleteLoan(bookId_lin_1, id_lin_1, loanDate_lin_1, userId_lin_1);
  verifyLoansDeleted(bookId_lin_1, id_lin_1, loanDate_lin_1, userId_lin_1);
});

// Story: crud:Loans:linear:2
bthread("crud:Loans:linear:2", function () {
  let bookId_lin_2 = Math.floor(Math.random()*100);
  let id_lin_2 = Math.floor(Math.random()*100);
  let loanDate_lin_2 = "loanDate_lin_2_" + Math.floor(Math.random()*1000);
  let userId_lin_2 = 2300000 + Math.floor(Math.random()*10000);
  createLoan(bookId_lin_2, id_lin_2, loanDate_lin_2, userId_lin_2);
  verifyLoansExists(bookId_lin_2, id_lin_2, loanDate_lin_2, userId_lin_2);
  deleteLoan(bookId_lin_2, id_lin_2, loanDate_lin_2, userId_lin_2);
  verifyLoansDeleted(bookId_lin_2, id_lin_2, loanDate_lin_2, userId_lin_2);
});

// Story: crud:Loans:linear:3
bthread("crud:Loans:linear:3", function () {
  let bookId_lin_3 = Math.floor(Math.random()*100);
  let id_lin_3 = Math.floor(Math.random()*100);
  let loanDate_lin_3 = "loanDate_lin_3_" + Math.floor(Math.random()*1000);
  let userId_lin_3 = 2300000 + Math.floor(Math.random()*10000);
  createLoan(bookId_lin_3, id_lin_3, loanDate_lin_3, userId_lin_3);
  verifyLoansExists(bookId_lin_3, id_lin_3, loanDate_lin_3, userId_lin_3);
  deleteLoan(bookId_lin_3, id_lin_3, loanDate_lin_3, userId_lin_3);
  verifyLoansDeleted(bookId_lin_3, id_lin_3, loanDate_lin_3, userId_lin_3);
});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  let email_lin_1 = "ulin_1_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_lin_1 = 2400000 + Math.floor(Math.random()*10000);
  let name_lin_1 = "name_lin_1_" + Math.floor(Math.random()*1000);
  let password_lin_1 = "password_lin_1_" + Math.floor(Math.random()*1000);
  let q_lin_1 = "q_lin_1_" + Math.floor(Math.random()*1000);
  createUser(email_lin_1, id_lin_1, name_lin_1, password_lin_1, q_lin_1);
  verifyUsersExists(email_lin_1, id_lin_1, name_lin_1, password_lin_1, q_lin_1);
  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  let email_lin_2 = "ulin_2_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_lin_2 = 2400000 + Math.floor(Math.random()*10000);
  let name_lin_2 = "name_lin_2_" + Math.floor(Math.random()*1000);
  let password_lin_2 = "password_lin_2_" + Math.floor(Math.random()*1000);
  let q_lin_2 = "q_lin_2_" + Math.floor(Math.random()*1000);
  createUser(email_lin_2, id_lin_2, name_lin_2, password_lin_2, q_lin_2);
  verifyUsersExists(email_lin_2, id_lin_2, name_lin_2, password_lin_2, q_lin_2);
  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  let email_lin_3 = "ulin_3_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_lin_3 = 2400000 + Math.floor(Math.random()*10000);
  let name_lin_3 = "name_lin_3_" + Math.floor(Math.random()*1000);
  let password_lin_3 = "password_lin_3_" + Math.floor(Math.random()*1000);
  let q_lin_3 = "q_lin_3_" + Math.floor(Math.random()*1000);
  createUser(email_lin_3, id_lin_3, name_lin_3, password_lin_3, q_lin_3);
  verifyUsersExists(email_lin_3, id_lin_3, name_lin_3, password_lin_3, q_lin_3);
  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Holds:linear:1
bthread("crud:Holds:linear:1", function () {
  let bookId_lin_1 = Math.floor(Math.random()*100);
  let book_id_lin_1 = Math.floor(Math.random()*100);
  let end_date_lin_1 = "end_date_lin_1_" + Math.floor(Math.random()*1000);
  let id_lin_1 = 2500000 + Math.floor(Math.random()*10000);
  let start_date_lin_1 = "start_date_lin_1_" + Math.floor(Math.random()*1000);
  let userId_lin_1 = Math.floor(Math.random()*100);
  let user_id_lin_1 = Math.floor(Math.random()*100);
  createHold(bookId_lin_1, book_id_lin_1, end_date_lin_1, id_lin_1, start_date_lin_1, userId_lin_1, user_id_lin_1);
  verifyHoldsExists(bookId_lin_1, book_id_lin_1, end_date_lin_1, id_lin_1, start_date_lin_1, userId_lin_1, user_id_lin_1);
  deleteHold(bookId_lin_1, book_id_lin_1, end_date_lin_1, id_lin_1, start_date_lin_1, userId_lin_1, user_id_lin_1);
  verifyHoldsDeleted(bookId_lin_1, book_id_lin_1, end_date_lin_1, id_lin_1, start_date_lin_1, userId_lin_1, user_id_lin_1);
});

// Story: crud:Holds:linear:2
bthread("crud:Holds:linear:2", function () {
  let bookId_lin_2 = Math.floor(Math.random()*100);
  let book_id_lin_2 = Math.floor(Math.random()*100);
  let end_date_lin_2 = "end_date_lin_2_" + Math.floor(Math.random()*1000);
  let id_lin_2 = 2500000 + Math.floor(Math.random()*10000);
  let start_date_lin_2 = "start_date_lin_2_" + Math.floor(Math.random()*1000);
  let userId_lin_2 = Math.floor(Math.random()*100);
  let user_id_lin_2 = Math.floor(Math.random()*100);
  createHold(bookId_lin_2, book_id_lin_2, end_date_lin_2, id_lin_2, start_date_lin_2, userId_lin_2, user_id_lin_2);
  verifyHoldsExists(bookId_lin_2, book_id_lin_2, end_date_lin_2, id_lin_2, start_date_lin_2, userId_lin_2, user_id_lin_2);
  deleteHold(bookId_lin_2, book_id_lin_2, end_date_lin_2, id_lin_2, start_date_lin_2, userId_lin_2, user_id_lin_2);
  verifyHoldsDeleted(bookId_lin_2, book_id_lin_2, end_date_lin_2, id_lin_2, start_date_lin_2, userId_lin_2, user_id_lin_2);
});

// Story: crud:Holds:linear:3
bthread("crud:Holds:linear:3", function () {
  let bookId_lin_3 = Math.floor(Math.random()*100);
  let book_id_lin_3 = Math.floor(Math.random()*100);
  let end_date_lin_3 = "end_date_lin_3_" + Math.floor(Math.random()*1000);
  let id_lin_3 = 2500000 + Math.floor(Math.random()*10000);
  let start_date_lin_3 = "start_date_lin_3_" + Math.floor(Math.random()*1000);
  let userId_lin_3 = Math.floor(Math.random()*100);
  let user_id_lin_3 = Math.floor(Math.random()*100);
  createHold(bookId_lin_3, book_id_lin_3, end_date_lin_3, id_lin_3, start_date_lin_3, userId_lin_3, user_id_lin_3);
  verifyHoldsExists(bookId_lin_3, book_id_lin_3, end_date_lin_3, id_lin_3, start_date_lin_3, userId_lin_3, user_id_lin_3);
  deleteHold(bookId_lin_3, book_id_lin_3, end_date_lin_3, id_lin_3, start_date_lin_3, userId_lin_3, user_id_lin_3);
  verifyHoldsDeleted(bookId_lin_3, book_id_lin_3, end_date_lin_3, id_lin_3, start_date_lin_3, userId_lin_3, user_id_lin_3);
});
