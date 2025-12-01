// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
      }
    }
  }
  return captured;
}

// Story: crud:Account:read_only
bthread("crud:Account:read_only", function () {
  let accountId = 210;
  verifyAccountExists(accountId);
});

// Story: crud:Transaction:read_only
bthread("crud:Transaction:read_only", function () {

  verifyTransactionExists(accountId);
});

// Story: crud:Loan:read_only
bthread("crud:Loan:read_only", function () {

  verifyLoanExists();
});
