// Auto-generated stories for banking
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("DEBUG: [resolveDependencies] Caught event: " + e.name);
    if (e.data) bp.log.info("DEBUG: [resolveDependencies] Data: " + JSON.stringify(e.data));
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (val) {
            captured[k] = val;
            bp.log.info("DEBUG: [resolveDependencies] Resolved " + k + " -> " + val);
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// --- Monitors ---
// Monitor: Accounts Verification (Existence)
bthread("monitor:Accounts:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAccountsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyAccountsExists(id);
  }
});

// Monitor: Cards Verification (Existence)
bthread("monitor:Cards:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCardsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyCardsExists(id);
  }
});

// Monitor: Customers Verification (Existence)
bthread("monitor:Customers:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCustomersAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyCustomersExists(id);
  }
});

// Monitor: Transfers Verification (Existence)
bthread("monitor:Transfers:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyTransfersAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyTransfersExists(id);
  }
});

// Monitor: Loans Verification (Existence)
bthread("monitor:Loans:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLoansAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyLoansExists(id);
  }
});

// Story: crud:Accounts:linear:1
bthread("crud:Accounts:linear:1", function () {
  // -> Creating Accounts
  let id_Accounts_100 = "id_Accounts_100_" + Math.floor(Math.random()*1000);
  addAccount(id_Accounts_100);

});

// Story: crud:Cards:linear:1
bthread("crud:Cards:linear:1", function () {
  // -> Creating Cards
  let id_Cards_110 = "id_Cards_110_" + Math.floor(Math.random()*1000);
  addCard(id_Cards_110);

});

// Story: crud:Customers:linear:1
bthread("crud:Customers:linear:1", function () {
  // -> Creating Customers
  let id_Customers_120 = "id_Customers_120_" + Math.floor(Math.random()*1000);
  addCustomer(id_Customers_120);

});

// Story: crud:Transfers:linear:1
bthread("crud:Transfers:linear:1", function () {
  // -> Creating Transfers
  let id_Transfers_130 = "id_Transfers_130_" + Math.floor(Math.random()*1000);
  addTransfer(id_Transfers_130);

});

// Story: crud:Loans:linear:1
bthread("crud:Loans:linear:1", function () {
  // -> Creating Loans
  let id_Loans_140 = "id_Loans_140_" + Math.floor(Math.random()*1000);
  addLoan(id_Loans_140);

});

// Story: crud:Accounts:linear:2
bthread("crud:Accounts:linear:2", function () {
  // -> Creating Accounts
  let id_Accounts_150 = "id_Accounts_150_" + Math.floor(Math.random()*1000);
  addAccount(id_Accounts_150);

});

// Story: crud:Cards:linear:2
bthread("crud:Cards:linear:2", function () {
  // -> Creating Cards
  let id_Cards_160 = "id_Cards_160_" + Math.floor(Math.random()*1000);
  addCard(id_Cards_160);

});

// Story: crud:Customers:linear:2
bthread("crud:Customers:linear:2", function () {
  // -> Creating Customers
  let id_Customers_170 = "id_Customers_170_" + Math.floor(Math.random()*1000);
  addCustomer(id_Customers_170);

});

// Story: crud:Transfers:linear:2
bthread("crud:Transfers:linear:2", function () {
  // -> Creating Transfers
  let id_Transfers_180 = "id_Transfers_180_" + Math.floor(Math.random()*1000);
  addTransfer(id_Transfers_180);

});

// Story: crud:Loans:linear:2
bthread("crud:Loans:linear:2", function () {
  // -> Creating Loans
  let id_Loans_190 = "id_Loans_190_" + Math.floor(Math.random()*1000);
  addLoan(id_Loans_190);

});

// Story: crud:Accounts:linear:3
bthread("crud:Accounts:linear:3", function () {
  // -> Creating Accounts
  let id_Accounts_200 = "id_Accounts_200_" + Math.floor(Math.random()*1000);
  addAccount(id_Accounts_200);

});

// Story: crud:Cards:linear:3
bthread("crud:Cards:linear:3", function () {
  // -> Creating Cards
  let id_Cards_210 = "id_Cards_210_" + Math.floor(Math.random()*1000);
  addCard(id_Cards_210);

});

// Story: crud:Customers:linear:3
bthread("crud:Customers:linear:3", function () {
  // -> Creating Customers
  let id_Customers_220 = "id_Customers_220_" + Math.floor(Math.random()*1000);
  addCustomer(id_Customers_220);

});

// Story: crud:Transfers:linear:3
bthread("crud:Transfers:linear:3", function () {
  // -> Creating Transfers
  let id_Transfers_230 = "id_Transfers_230_" + Math.floor(Math.random()*1000);
  addTransfer(id_Transfers_230);

});

// Story: crud:Loans:linear:3
bthread("crud:Loans:linear:3", function () {
  // -> Creating Loans
  let id_Loans_240 = "id_Loans_240_" + Math.floor(Math.random()*1000);
  addLoan(id_Loans_240);

});
