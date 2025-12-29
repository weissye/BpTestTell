// Auto-generated stories for library
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
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

// ==============================================================================
// 🧠 GLOBAL STATE TRACKER
// ==============================================================================
const STATE = {
    users: [],
    books: [],
    holds: []
};

bthread("monitor:StateTracker", function() {
    while (true) {
        let e = bp.sync({ waitFor: [matchAnyUsersAdded(), matchAnyBooksAdded(), matchAnyHoldsAdded()] });
        
        if (e.name.startsWith("Done: Create a user")) {
            STATE.users.push(e.data.id);
            bp.sync({ request: bp.Event("StateUpdate_User") });
        }
        else if (e.name.startsWith("Done: Create a book")) {
            STATE.books.push(e.data.id);
            bp.sync({ request: bp.Event("StateUpdate_Book") });
        }
        else if (e.name.startsWith("Done: Create a hold")) {
            STATE.holds.push({ userId: e.data.userId, bookId: e.data.bookId });
            bp.sync({ request: bp.Event("StateUpdate_Hold") });
        }
    }
});

// ==============================================================================
// 🧪 META-STORIES (Strict Failure on Crash)
// ==============================================================================

function requestLoanAttack(bookId, id, loanDate, userId, type) {
    let port = 5001; 
    let url = "http://localhost:" + port + "/loans";
    let desc = "ATTACK: " + type + " Loan " + id;
    
    return bp.Event("Create_Loan_Attack", {
        lib: "REST", 
        method: "POST", 
        url: url,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            bookId: bookId,
            id: id,
            loanDate: loanDate,
            userId: userId,
            status: "active_attack"
        }),
        parameters: { description: desc },
        // STRICT MODE: We expect 201. If server crashes (500), TEST FAILS.
        expectedResponseCodes: [201] 
    });
}

// ------------------------------------------------------------------------------
// BUG 2: Hold Theft
// ------------------------------------------------------------------------------
bthread("meta:Inject_HoldTheft", function() {
    let victimId = null;
    let bookId = null;
    let attackerId = null;

    // Wait loop
    while (true) {
        if (STATE.holds.length > 0 && !victimId) {
            let h = STATE.holds[0];
            victimId = h.userId;
            bookId = h.bookId;
        }
        if (victimId && !attackerId) {
            for (let i = 0; i < STATE.users.length; i++) {
                if (STATE.users[i] !== victimId) {
                    attackerId = STATE.users[i];
                    break;
                }
            }
        }
        if (victimId && attackerId) break; 
        bp.sync({ waitFor: [bp.Event("StateUpdate_User"), bp.Event("StateUpdate_Hold")] });
    }

    let attackEvent = requestLoanAttack(bookId, "loan_THEFT", "2025-01-01", attackerId, "THEFT");
    bp.log.info("💣 BUG 2: Launching Theft Attack (Expect Test Failure)...");
    bp.sync({ request: attackEvent });
});


// ------------------------------------------------------------------------------
// BUG 1: Loan Overflow
// ------------------------------------------------------------------------------
bthread("meta:Inject_LoanOverflow", function() {
    
    // Needs 1 User and 3 Books
    while (STATE.users.length < 1 || STATE.books.length < 3) {
         bp.sync({ waitFor: [bp.Event("StateUpdate_User"), bp.Event("StateUpdate_Book")] });
    }

    let user = STATE.users[0];
    let books = [STATE.books[0], STATE.books[1], STATE.books[2]];

    // Fill Limit (2 loans)
    createLoan(books[0], "loan_fill_1", "2025-01-01", user);
    createLoan(books[1], "loan_fill_2", "2025-01-01", user);

    // Overflow (3rd loan)
    let attackEvent = requestLoanAttack(books[2], "loan_OVERFLOW", "2025-01-01", user, "OVERFLOW");
    bp.log.info("💣 BUG 1: Launching Overflow Attack (Expect Test Failure)...");
    bp.sync({ request: attackEvent });
});

// --------------------------------------------------------
// DATA GENERATION (Increased Volume)
// --------------------------------------------------------

// Helper for generating users
function runUserStory(i) {
    let email = "email_" + i + "_" + Math.floor(Math.random() * 10000);
    let id = (30000000 + i * 10000) + Math.floor(Math.random() * 10000);
    let name = "name_" + i + "_" + Math.floor(Math.random() * 10000);
    let password = "pass_" + Math.floor(Math.random() * 10000);
    let q = "q_" + Math.floor(Math.random() * 10000);
    createUser(email, id, name, password, q);
}

// Helper for generating books
function runBookStory(i) {
    let author = "author_" + i + "_" + Math.floor(Math.random() * 10000);
    let id = (20000000 + i * 10000) + Math.floor(Math.random() * 10000);
    let publishedDate = "date_" + Math.floor(Math.random() * 10000);
    let q = "q_" + Math.floor(Math.random() * 10000);
    let title = "title_" + i + "_" + Math.floor(Math.random() * 10000);
    createBook(author, id, publishedDate, q, title);
}

// --- Create 5 Books (Ensures Bug 1 has plenty) ---
bthread("crud:Books:1", function(){ runBookStory(1); });
bthread("crud:Books:2", function(){ runBookStory(2); });
bthread("crud:Books:3", function(){ runBookStory(3); });
bthread("crud:Books:4", function(){ runBookStory(4); }); // Extra
bthread("crud:Books:5", function(){ runBookStory(5); }); // Extra

// --- Create 5 Users (Ensures Bug 2 has Victim + Attacker) ---
bthread("crud:Users:1", function(){ runUserStory(1); });
bthread("crud:Users:2", function(){ runUserStory(2); });
bthread("crud:Users:3", function(){ runUserStory(3); });
bthread("crud:Users:4", function(){ runUserStory(4); }); // Extra
bthread("crud:Users:5", function(){ runUserStory(5); }); // Extra

// --- Create Holds (Trigger for Bug 2) ---
bthread("crud:Holds:linear:1", function () {
  let bookId; let hidden = true; let userId;
  let id = 36000000 + Math.floor(Math.random() * 100000);
  
  let deps = {};
  deps["userId"] = matchAnyUsersAdded();
  deps["bookId"] = matchAnyBooksAdded();
  let pkMap = {"userId": "id", "bookId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  userId = captured["userId"];
  bookId = captured["bookId"];
  
  createHold(bookId, hidden, id, userId);
});

// Event Matchers
function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) { return e.name.startsWith("Done: Create a user"); });
}
function matchAnyBooksAdded() {
  return bp.EventSet("Any Books Added", function(e) { return e.name.startsWith("Done: Create a book"); });
}
function matchAnyHoldsAdded() {
  return bp.EventSet("Any Holds Added", function(e) { return e.name.startsWith("Done: Create a hold"); });
}