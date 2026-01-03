// Auto-generated NEGATIVE (Fuzzing) stories for library
//@provengo summon rest

bthread("fuzz:Books:id_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID_STRING";
  verifyBooksRejects(bad_id, q_valid, title_valid);
});
bthread("fuzz:Books:q_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_q = 12345;
  verifyBooksRejects(id_valid, bad_q, title_valid);
});
bthread("fuzz:Books:title_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let title_valid = "title_valid_" + Math.floor(Math.random()*1000);
  let bad_title = 12345;
  verifyBooksRejects(id_valid, q_valid, bad_title);
});
bthread("fuzz:Loans:bookId_InvalidType", function () {
  let bookId_valid = "bookId_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = "userId_valid_" + Math.floor(Math.random()*1000);
  let bad_bookId = 12345;
  verifyLoansRejects(bad_bookId, userId_valid);
});
bthread("fuzz:Loans:userId_InvalidType", function () {
  let bookId_valid = "bookId_valid_" + Math.floor(Math.random()*1000);
  let userId_valid = "userId_valid_" + Math.floor(Math.random()*1000);
  let bad_userId = 12345;
  verifyLoansRejects(bookId_valid, bad_userId);
});
bthread("fuzz:Users:id_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID_STRING";
  verifyUsersRejects(bad_id, name_valid, q_valid);
});
bthread("fuzz:Users:name_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 12345;
  verifyUsersRejects(id_valid, bad_name, q_valid);
});
bthread("fuzz:Users:q_InvalidType", function () {
  let id_valid = Math.floor(Math.random() * 1000000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let q_valid = "q_valid_" + Math.floor(Math.random()*1000);
  let bad_q = 12345;
  verifyUsersRejects(id_valid, name_valid, bad_q);
});
bthread("fuzz:Holds:bookId_InvalidType", function () {
  let bookId_valid = "bookId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000000);
  let userId_valid = "userId_valid_" + Math.floor(Math.random()*1000);
  let bad_bookId = 12345;
  verifyHoldsRejects(bad_bookId, id_valid, userId_valid);
});
bthread("fuzz:Holds:id_InvalidType", function () {
  let bookId_valid = "bookId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000000);
  let userId_valid = "userId_valid_" + Math.floor(Math.random()*1000);
  let bad_id = "INVALID_STRING";
  verifyHoldsRejects(bookId_valid, bad_id, userId_valid);
});
bthread("fuzz:Holds:userId_InvalidType", function () {
  let bookId_valid = "bookId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = Math.floor(Math.random() * 1000000);
  let userId_valid = "userId_valid_" + Math.floor(Math.random()*1000);
  let bad_userId = 12345;
  verifyHoldsRejects(bookId_valid, id_valid, bad_userId);
});