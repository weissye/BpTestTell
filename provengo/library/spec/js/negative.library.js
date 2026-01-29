// Auto-generated EVIL BACKGROUND AGENTS for library
//@provengo summon rest

bthread("guard:Books:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyBooksAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createBook:Success:" + id), waitFor: matchAnyBooksDeleted() });
  } });
bthread("fuzz:fields:Books", function() {
  while(true) {
    let e = waitFor(matchAnyBooksAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Books";
      let id_neg_Books = "id_malformed_neg_Books";
      let q_neg_Books = "q_malformed_neg_Books";
      let title_neg_Books = "title_malformed_neg_Books";
    verifyBooksRejects(id_neg_Books, q_neg_Books, title_neg_Books, { description: neg_desc });
  } });

bthread("evil:collision:Books", function() {
  while (true) {
    let e = waitFor(matchAnyBooksAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingBooks(liveId, "q_collision", "title_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Loans:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyLoansAdded()); let id = e.data.userId || e.data.id;
    bp.sync({ block: bp.Event("Req:createLoan:Success:" + id), waitFor: matchAnyLoansDeleted() });
  } });
bthread("fuzz:fields:Loans", function() {
  while(true) {
    let e = waitFor(matchAnyLoansAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Loans";
      let bookId_neg_Loans = "bookId_malformed_neg_Loans";
      let userId_neg_Loans = "userId_malformed_neg_Loans";
    verifyLoansRejects(bookId_neg_Loans, userId_neg_Loans, { description: neg_desc });
  } });

bthread("evil:collision:Loans", function() {
  while (true) {
    let e = waitFor(matchAnyLoansAdded());
    let liveId = e.data.userId || e.data.id;
    tryToAddExistingLoans("bookId_collision", liveId, { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Users:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyUsersAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createUser:Success:" + id), waitFor: matchAnyUsersDeleted() });
  } });
bthread("fuzz:fields:Users", function() {
  while(true) {
    let e = waitFor(matchAnyUsersAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Users";
      let id_neg_Users = "id_malformed_neg_Users";
      let name_neg_Users = "name_malformed_neg_Users";
      let q_neg_Users = "q_malformed_neg_Users";
    verifyUsersRejects(id_neg_Users, name_neg_Users, q_neg_Users, { description: neg_desc });
  } });

bthread("evil:collision:Users", function() {
  while (true) {
    let e = waitFor(matchAnyUsersAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingUsers(liveId, "name_collision", "q_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Holds:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyHoldsAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createHold:Success:" + id), waitFor: matchAnyHoldsDeleted() });
  } });
bthread("fuzz:fields:Holds", function() {
  while(true) {
    let e = waitFor(matchAnyHoldsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Holds";
      let bookId_neg_Holds = "bookId_malformed_neg_Holds";
      let id_neg_Holds = "id_malformed_neg_Holds";
      let userId_neg_Holds = "userId_malformed_neg_Holds";
    verifyHoldsRejects(bookId_neg_Holds, id_neg_Holds, userId_neg_Holds, { description: neg_desc });
  } });

bthread("evil:collision:Holds", function() {
  while (true) {
    let e = waitFor(matchAnyHoldsAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingHolds("bookId_collision", liveId, "userId_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

// --- PHASE 4: COORDINATED VANDALISM (Hyper-Negative) ---
// --- EVIL COORDINATED AGENTS for library (Copy 1) ---
bthread("hyper:evil:copy1:OrphanMaker_Loans_Users", function() {
  while(true) {
    let e = waitFor(matchAnyLoansAdded());
    let pId = e.data.id || e.data.id;
    deleteUser(pId);
    let childId = e.data.userId || e.data.id;
    listLoans(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Loans_Books", function() {
  while(true) {
    let e = waitFor(matchAnyLoansAdded());
    let pId = e.data.id || e.data.id;
    deleteBook(pId);
    let childId = e.data.userId || e.data.id;
    listLoans(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Holds_Users", function() {
  while(true) {
    let e = waitFor(matchAnyHoldsAdded());
    let pId = e.data.id || e.data.id;
    deleteUser(pId);
    let childId = e.data.id || e.data.id;
    listHolds(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Holds_Books", function() {
  while(true) {
    let e = waitFor(matchAnyHoldsAdded());
    let pId = e.data.id || e.data.id;
    deleteBook(pId);
    let childId = e.data.id || e.data.id;
    listHolds(childId);
  }
});
// --- EVIL COORDINATED AGENTS for library (Copy 2) ---
bthread("hyper:evil:copy2:OrphanMaker_Loans_Users", function() {
  while(true) {
    let e = waitFor(matchAnyLoansAdded());
    let pId = e.data.id || e.data.id;
    deleteUser(pId);
    let childId = e.data.userId || e.data.id;
    listLoans(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Loans_Books", function() {
  while(true) {
    let e = waitFor(matchAnyLoansAdded());
    let pId = e.data.id || e.data.id;
    deleteBook(pId);
    let childId = e.data.userId || e.data.id;
    listLoans(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Holds_Users", function() {
  while(true) {
    let e = waitFor(matchAnyHoldsAdded());
    let pId = e.data.id || e.data.id;
    deleteUser(pId);
    let childId = e.data.id || e.data.id;
    listHolds(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Holds_Books", function() {
  while(true) {
    let e = waitFor(matchAnyHoldsAdded());
    let pId = e.data.id || e.data.id;
    deleteBook(pId);
    let childId = e.data.id || e.data.id;
    listHolds(childId);
  }
});
// --- EVIL COORDINATED AGENTS for library (Copy 3) ---
bthread("hyper:evil:copy3:OrphanMaker_Loans_Users", function() {
  while(true) {
    let e = waitFor(matchAnyLoansAdded());
    let pId = e.data.id || e.data.id;
    deleteUser(pId);
    let childId = e.data.userId || e.data.id;
    listLoans(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Loans_Books", function() {
  while(true) {
    let e = waitFor(matchAnyLoansAdded());
    let pId = e.data.id || e.data.id;
    deleteBook(pId);
    let childId = e.data.userId || e.data.id;
    listLoans(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Holds_Users", function() {
  while(true) {
    let e = waitFor(matchAnyHoldsAdded());
    let pId = e.data.id || e.data.id;
    deleteUser(pId);
    let childId = e.data.id || e.data.id;
    listHolds(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Holds_Books", function() {
  while(true) {
    let e = waitFor(matchAnyHoldsAdded());
    let pId = e.data.id || e.data.id;
    deleteBook(pId);
    let childId = e.data.id || e.data.id;
    listHolds(childId);
  }
});