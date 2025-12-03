// Auto-generated HLS stories
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

// Story: crud:Account:read_only
bthread("crud:Account:read_only", function () {
  let accountId = 210;
  verifyAccountExists(accountId);
});

// Story: crud:Transaction:read_only
bthread("crud:Transaction:read_only", function () {
  let accountId;
  verifyTransactionExists(accountId);
});

// Story: crud:Loan:read_only
bthread("crud:Loan:read_only", function () {

  verifyLoanExists();
});
