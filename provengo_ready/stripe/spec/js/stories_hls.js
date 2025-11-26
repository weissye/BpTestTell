// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:account:nondet:1:1
bthread("crud:account:nondet:1:1", function () {
  let accountId = 200;
  addAccount(200);
  tryToAddExistingaccount(200);
  verifyaccountExists(accountId);
  updateAccount(accountId, 200);
  deleteAccount(accountId);
  tryToDeleteANonExistingaccount(accountId);
  verifyaccountDoesNotExist(accountId);
});

// Story: crud:account:nondet:1:2
bthread("crud:account:nondet:1:2", function () {
  let accountId = 201;
  addAccount(201);
  tryToAddExistingaccount(201);
  updateAccount(accountId, 201);
  verifyaccountExists(accountId);
  deleteAccount(accountId);
  tryToDeleteANonExistingaccount(accountId);
  verifyaccountDoesNotExist(accountId);
});

// Story: crud:account:nondet:negative:dup-add
bthread("crud:account:nondet:negative:dup-add", function () {
  let accountId = 206;
  addAccount(206);
  verifyaccountExists(accountId);
  tryToAddExistingaccount(206);
  verifyaccountExists(accountId);
});

// Story: crud:account:nondet:existing:update
bthread("crud:account:nondet:existing:update", function () {
  let ev = waitForAnyaccountAdded();
  let args = Object.values(ev);
  block(matchDeletedaccount.apply(null, args), function () {
    // verifyaccountExists.apply(null, args);
    // updateAccount.apply(null, args);
  });
});

// Story: monitor:account:add
bthread("monitor:account:add", function () {
  while (true) {
    let ev = waitForAnyaccountAdded();
    let args = Object.values(ev);
    block(matchDeletedaccount.apply(null, args), function () {
      // verifyaccountExists.apply(null, args);
    });
  }
});

// Story: crud:account_link:read_only
bthread("crud:account_link:read_only", function () {
  let accountLinkId = 210;
  // Read-only check for account_link
  verifyaccount_linkExists(accountLinkId);
});

// Story: crud:account_session:read_only
bthread("crud:account_session:read_only", function () {
  let accountSessionId = 220;
  // Read-only check for account_session
  verifyaccount_sessionExists(accountSessionId);
});

// Story: crud:apple_pay_domain:nondet:1:1
bthread("crud:apple_pay_domain:nondet:1:1", function () {
  let applePayDomainId = 230;
  addApplePayDomain(230);
  tryToAddExistingapple_pay_domain(230);
  verifyapple_pay_domainExists(applePayDomainId);
  updateApplePayDomain(applePayDomainId, 230);
  deleteApplePayDomain(applePayDomainId);
  tryToDeleteANonExistingapple_pay_domain(applePayDomainId);
  verifyapple_pay_domainDoesNotExist(applePayDomainId);
});

// Story: crud:apple_pay_domain:nondet:1:2
bthread("crud:apple_pay_domain:nondet:1:2", function () {
  let applePayDomainId = 231;
  addApplePayDomain(231);
  tryToAddExistingapple_pay_domain(231);
  updateApplePayDomain(applePayDomainId, 231);
  verifyapple_pay_domainExists(applePayDomainId);
  deleteApplePayDomain(applePayDomainId);
  tryToDeleteANonExistingapple_pay_domain(applePayDomainId);
  verifyapple_pay_domainDoesNotExist(applePayDomainId);
});

// Story: crud:apple_pay_domain:nondet:negative:dup-add
bthread("crud:apple_pay_domain:nondet:negative:dup-add", function () {
  let applePayDomainId = 236;
  addApplePayDomain(236);
  verifyapple_pay_domainExists(applePayDomainId);
  tryToAddExistingapple_pay_domain(236);
  verifyapple_pay_domainExists(applePayDomainId);
});

// Story: crud:apple_pay_domain:nondet:existing:update
bthread("crud:apple_pay_domain:nondet:existing:update", function () {
  let ev = waitForAnyapple_pay_domainAdded();
  let args = Object.values(ev);
  block(matchDeletedapple_pay_domain.apply(null, args), function () {
    // verifyapple_pay_domainExists.apply(null, args);
    // updateApplePayDomain.apply(null, args);
  });
});

// Story: monitor:apple_pay_domain:add
bthread("monitor:apple_pay_domain:add", function () {
  while (true) {
    let ev = waitForAnyapple_pay_domainAdded();
    let args = Object.values(ev);
    block(matchDeletedapple_pay_domain.apply(null, args), function () {
      // verifyapple_pay_domainExists.apply(null, args);
    });
  }
});

// Story: crud:application_fee:read_only
bthread("crud:application_fee:read_only", function () {
  let applicationFeeId = 240;
  // Read-only check for application_fee
  verifyapplication_feeExists(applicationFeeId);
});

// Story: crud:bank_account:nondet:1:1
bthread("crud:bank_account:nondet:1:1", function () {
  let customerId = 250;
  addBankAccount(250);
  tryToAddExistingbank_account(250);
  verifybank_accountExists(customerId);
  updateBankAccount(customerId, 250);
  deleteBankAccount(customerId);
  tryToDeleteANonExistingbank_account(customerId);
  verifybank_accountDoesNotExist(customerId);
});

// Story: crud:bank_account:nondet:1:2
bthread("crud:bank_account:nondet:1:2", function () {
  let customerId = 251;
  addBankAccount(251);
  tryToAddExistingbank_account(251);
  updateBankAccount(customerId, 251);
  verifybank_accountExists(customerId);
  deleteBankAccount(customerId);
  tryToDeleteANonExistingbank_account(customerId);
  verifybank_accountDoesNotExist(customerId);
});

// Story: crud:bank_account:nondet:negative:dup-add
bthread("crud:bank_account:nondet:negative:dup-add", function () {
  let customerId = 256;
  addBankAccount(256);
  verifybank_accountExists(customerId);
  tryToAddExistingbank_account(256);
  verifybank_accountExists(customerId);
});

// Story: crud:bank_account:nondet:existing:update
bthread("crud:bank_account:nondet:existing:update", function () {
  let ev = waitForAnybank_accountAdded();
  let args = Object.values(ev);
  block(matchDeletedbank_account.apply(null, args), function () {
    // verifybank_accountExists.apply(null, args);
    // updateBankAccount.apply(null, args);
  });
});

// Story: monitor:bank_account:add
bthread("monitor:bank_account:add", function () {
  while (true) {
    let ev = waitForAnybank_accountAdded();
    let args = Object.values(ev);
    block(matchDeletedbank_account.apply(null, args), function () {
      // verifybank_accountExists.apply(null, args);
    });
  }
});
