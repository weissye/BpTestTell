// Auto-generated NEGATIVE (Fuzzing) stories for library
//@provengo summon rest

// Negative Test: Injecting invalid type into author
bthread("fuzz:Books:author_InvalidType", function () {
  let author_valid = "author_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 900000 + Math.floor(Math.random()*10000);
  let publishedDate_valid = "publishedDate_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_author = 123456789;
  verifyBooksRejects(bad_author, id_valid, publishedDate_valid, q_valid, title_valid);
});

// Negative Test: Injecting invalid type into id
bthread("fuzz:Books:id_InvalidType", function () {
  let author_valid = "author_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 900000 + Math.floor(Math.random()*10000);
  let publishedDate_valid = "publishedDate_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID_STRING_INSTEAD_OF_INT";
  verifyBooksRejects(author_valid, bad_id, publishedDate_valid, q_valid, title_valid);
});

// Negative Test: Injecting invalid type into publishedDate
bthread("fuzz:Books:publishedDate_InvalidType", function () {
  let author_valid = "author_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 900000 + Math.floor(Math.random()*10000);
  let publishedDate_valid = "publishedDate_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_publishedDate = 123456789;
  verifyBooksRejects(author_valid, id_valid, bad_publishedDate, q_valid, title_valid);
});

// Negative Test: Injecting invalid type into q
bthread("fuzz:Books:q_InvalidType", function () {
  let author_valid = "author_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 900000 + Math.floor(Math.random()*10000);
  let publishedDate_valid = "publishedDate_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_q = 123456789;
  verifyBooksRejects(author_valid, id_valid, publishedDate_valid, bad_q, title_valid);
});

// Negative Test: Injecting invalid type into title
bthread("fuzz:Books:title_InvalidType", function () {
  let author_valid = "author_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 900000 + Math.floor(Math.random()*10000);
  let publishedDate_valid = "publishedDate_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_title = 123456789;
  verifyBooksRejects(author_valid, id_valid, publishedDate_valid, q_valid, bad_title);
});

// Negative Test: Injecting invalid type into bookId
bthread("fuzz:Loans:bookId_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let id_valid = Math.floor(Math.random()*100);
  let loanDate_valid = "loanDate_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = 950000 + Math.floor(Math.random()*10000);
  let bad_bookId = "INVALID_STRING_INSTEAD_OF_INT";
  verifyLoansRejects(bad_bookId, id_valid, loanDate_valid, userId_valid);
});

// Negative Test: Injecting invalid type into id
bthread("fuzz:Loans:id_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let id_valid = Math.floor(Math.random()*100);
  let loanDate_valid = "loanDate_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = 950000 + Math.floor(Math.random()*10000);
  let bad_id = 123456789;
  verifyLoansRejects(bookId_valid, bad_id, loanDate_valid, userId_valid);
});

// Negative Test: Injecting invalid type into loanDate
bthread("fuzz:Loans:loanDate_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let id_valid = Math.floor(Math.random()*100);
  let loanDate_valid = "loanDate_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = 950000 + Math.floor(Math.random()*10000);
  let bad_loanDate = 123456789;
  verifyLoansRejects(bookId_valid, id_valid, bad_loanDate, userId_valid);
});

// Negative Test: Injecting invalid type into userId
bthread("fuzz:Loans:userId_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let id_valid = Math.floor(Math.random()*100);
  let loanDate_valid = "loanDate_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = 950000 + Math.floor(Math.random()*10000);
  let bad_userId = "INVALID_STRING_INSTEAD_OF_INT";
  verifyLoansRejects(bookId_valid, id_valid, loanDate_valid, bad_userId);
});

// Negative Test: Injecting invalid type into email
bthread("fuzz:Users:email_InvalidType", function () {
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_valid = 1000000 + Math.floor(Math.random()*10000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_email = 123456789;
  verifyUsersRejects(bad_email, id_valid, name_valid, password_valid, q_valid);
});

// Negative Test: Injecting invalid type into id
bthread("fuzz:Users:id_InvalidType", function () {
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_valid = 1000000 + Math.floor(Math.random()*10000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID_STRING_INSTEAD_OF_INT";
  verifyUsersRejects(email_valid, bad_id, name_valid, password_valid, q_valid);
});

// Negative Test: Injecting invalid type into name
bthread("fuzz:Users:name_InvalidType", function () {
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_valid = 1000000 + Math.floor(Math.random()*10000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 123456789;
  verifyUsersRejects(email_valid, id_valid, bad_name, password_valid, q_valid);
});

// Negative Test: Injecting invalid type into password
bthread("fuzz:Users:password_InvalidType", function () {
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_valid = 1000000 + Math.floor(Math.random()*10000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_password = 123456789;
  verifyUsersRejects(email_valid, id_valid, name_valid, bad_password, q_valid);
});

// Negative Test: Injecting invalid type into q
bthread("fuzz:Users:q_InvalidType", function () {
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let id_valid = 1000000 + Math.floor(Math.random()*10000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_q = 123456789;
  verifyUsersRejects(email_valid, id_valid, name_valid, password_valid, bad_q);
});

// Negative Test: Injecting invalid type into bookId
bthread("fuzz:Holds:bookId_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let book_id_valid = Math.floor(Math.random()*100);
  let end_date_valid = "end_date_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 1050000 + Math.floor(Math.random()*10000);
  let start_date_valid = "start_date_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = Math.floor(Math.random()*100);
  let user_id_valid = Math.floor(Math.random()*100);
  let bad_bookId = "INVALID_STRING_INSTEAD_OF_INT";
  verifyHoldsRejects(bad_bookId, book_id_valid, end_date_valid, id_valid, start_date_valid, userId_valid, user_id_valid);
});

// Negative Test: Injecting invalid type into book_id
bthread("fuzz:Holds:book_id_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let book_id_valid = Math.floor(Math.random()*100);
  let end_date_valid = "end_date_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 1050000 + Math.floor(Math.random()*10000);
  let start_date_valid = "start_date_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = Math.floor(Math.random()*100);
  let user_id_valid = Math.floor(Math.random()*100);
  let bad_book_id = "INVALID_STRING_INSTEAD_OF_INT";
  verifyHoldsRejects(bookId_valid, bad_book_id, end_date_valid, id_valid, start_date_valid, userId_valid, user_id_valid);
});

// Negative Test: Injecting invalid type into end_date
bthread("fuzz:Holds:end_date_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let book_id_valid = Math.floor(Math.random()*100);
  let end_date_valid = "end_date_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 1050000 + Math.floor(Math.random()*10000);
  let start_date_valid = "start_date_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = Math.floor(Math.random()*100);
  let user_id_valid = Math.floor(Math.random()*100);
  let bad_end_date = 123456789;
  verifyHoldsRejects(bookId_valid, book_id_valid, bad_end_date, id_valid, start_date_valid, userId_valid, user_id_valid);
});

// Negative Test: Injecting invalid type into id
bthread("fuzz:Holds:id_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let book_id_valid = Math.floor(Math.random()*100);
  let end_date_valid = "end_date_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 1050000 + Math.floor(Math.random()*10000);
  let start_date_valid = "start_date_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = Math.floor(Math.random()*100);
  let user_id_valid = Math.floor(Math.random()*100);
  let bad_id = "INVALID_STRING_INSTEAD_OF_INT";
  verifyHoldsRejects(bookId_valid, book_id_valid, end_date_valid, bad_id, start_date_valid, userId_valid, user_id_valid);
});

// Negative Test: Injecting invalid type into start_date
bthread("fuzz:Holds:start_date_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let book_id_valid = Math.floor(Math.random()*100);
  let end_date_valid = "end_date_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 1050000 + Math.floor(Math.random()*10000);
  let start_date_valid = "start_date_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = Math.floor(Math.random()*100);
  let user_id_valid = Math.floor(Math.random()*100);
  let bad_start_date = 123456789;
  verifyHoldsRejects(bookId_valid, book_id_valid, end_date_valid, id_valid, bad_start_date, userId_valid, user_id_valid);
});

// Negative Test: Injecting invalid type into userId
bthread("fuzz:Holds:userId_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let book_id_valid = Math.floor(Math.random()*100);
  let end_date_valid = "end_date_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 1050000 + Math.floor(Math.random()*10000);
  let start_date_valid = "start_date_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = Math.floor(Math.random()*100);
  let user_id_valid = Math.floor(Math.random()*100);
  let bad_userId = "INVALID_STRING_INSTEAD_OF_INT";
  verifyHoldsRejects(bookId_valid, book_id_valid, end_date_valid, id_valid, start_date_valid, bad_userId, user_id_valid);
});

// Negative Test: Injecting invalid type into user_id
bthread("fuzz:Holds:user_id_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random()*100);
  let book_id_valid = Math.floor(Math.random()*100);
  let end_date_valid = "end_date_valid_" + Math.floor(Math.random()*1000);
  let id_valid = 1050000 + Math.floor(Math.random()*10000);
  let start_date_valid = "start_date_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = Math.floor(Math.random()*100);
  let user_id_valid = Math.floor(Math.random()*100);
  let bad_user_id = "INVALID_STRING_INSTEAD_OF_INT";
  verifyHoldsRejects(bookId_valid, book_id_valid, end_date_valid, id_valid, start_date_valid, userId_valid, bad_user_id);
});
