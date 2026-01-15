// Auto-generated NEGATIVE (Fuzzing) stories for library
//@provengo summon rest

bthread("fuzz:Books:id_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID_STRING";
  verifyBooksRejects(bad_id, q_valid, title_valid);
});
bthread("fuzz:Books:q_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_q = ["NOT_A_STRING"];
  verifyBooksRejects(id_valid, bad_q, title_valid);
});
bthread("fuzz:Books:title_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_title = ["NOT_A_STRING"];
  verifyBooksRejects(id_valid, q_valid, bad_title);
});
bthread("fuzz:Books:id_Missing", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyBooksRejects(missing_id, q_valid, title_valid);
});
bthread("fuzz:Loans:bookId_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random() * 1000);
  let userId_valid = Math.floor(Math.random() * 1000);
  let bad_bookId = "INVALID_STRING";
  verifyLoansRejects(bad_bookId, userId_valid);
});
bthread("fuzz:Loans:userId_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random() * 1000);
  let userId_valid = Math.floor(Math.random() * 1000);
  let bad_userId = "INVALID_STRING";
  verifyLoansRejects(bookId_valid, bad_userId);
});
bthread("fuzz:Loans:userId_Missing", function () {
  let bookId_valid = Math.floor(Math.random() * 1000);
  let userId_valid = Math.floor(Math.random() * 1000);
  let missing_userId = undefined;
  verifyLoansRejects(bookId_valid, missing_userId);
});
bthread("fuzz:Users:id_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID_STRING";
  verifyUsersRejects(bad_id, name_valid, q_valid);
});
bthread("fuzz:Users:name_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_name = ["NOT_A_STRING"];
  verifyUsersRejects(id_valid, bad_name, q_valid);
});
bthread("fuzz:Users:q_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_q = ["NOT_A_STRING"];
  verifyUsersRejects(id_valid, name_valid, bad_q);
});
bthread("fuzz:Users:id_Missing", function () {
  let id_valid = Math.floor(Math.random() * 1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyUsersRejects(missing_id, name_valid, q_valid);
});
bthread("fuzz:Holds:bookId_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random() * 1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let userId_valid = Math.floor(Math.random() * 1000);
  let bad_bookId = "INVALID_STRING";
  verifyHoldsRejects(bad_bookId, id_valid, userId_valid);
});
bthread("fuzz:Holds:id_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random() * 1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let userId_valid = Math.floor(Math.random() * 1000);
  let bad_id = "INVALID_STRING";
  verifyHoldsRejects(bookId_valid, bad_id, userId_valid);
});
bthread("fuzz:Holds:userId_InvalidType", function () {
  let bookId_valid = Math.floor(Math.random() * 1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let userId_valid = Math.floor(Math.random() * 1000);
  let bad_userId = "INVALID_STRING";
  verifyHoldsRejects(bookId_valid, id_valid, bad_userId);
});
bthread("fuzz:Holds:id_Missing", function () {
  let bookId_valid = Math.floor(Math.random() * 1000);
  let id_valid = Math.floor(Math.random() * 1000);
  let userId_valid = Math.floor(Math.random() * 1000);
  let missing_id = undefined;
  verifyHoldsRejects(bookId_valid, missing_id, userId_valid);
});