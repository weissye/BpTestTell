// Auto-generated NEGATIVE (Fuzzing) stories for banking
//@provengo summon rest

bthread("fuzz:Accounts:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345;
  verifyAccountsRejects(bad_id);
});
bthread("fuzz:Accounts:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyAccountsRejects(missing_id);
});
bthread("fuzz:Cards:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345;
  verifyCardsRejects(bad_id);
});
bthread("fuzz:Cards:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyCardsRejects(missing_id);
});
bthread("fuzz:Customers:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345;
  verifyCustomersRejects(bad_id);
});
bthread("fuzz:Customers:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyCustomersRejects(missing_id);
});
bthread("fuzz:Transfers:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345;
  verifyTransfersRejects(bad_id);
});
bthread("fuzz:Transfers:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyTransfersRejects(missing_id);
});
bthread("fuzz:Loans:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345;
  verifyLoansRejects(bad_id);
});
bthread("fuzz:Loans:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyLoansRejects(missing_id);
});