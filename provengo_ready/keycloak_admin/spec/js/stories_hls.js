// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Realm:nondet:1:1
bthread("crud:Realm:nondet:1:1", function () {
  let realm = "realm_200";
  addRealm("realm_200");
  tryToAddExistingRealm("realm_200");
  verifyRealmExists(realm);
  updateRealm(realm, "realm_200");
  deleteRealm(realm);
  tryToDeleteANonExistingRealm(realm);
  verifyRealmDoesNotExist(realm);
});

// Story: crud:Realm:nondet:1:2
bthread("crud:Realm:nondet:1:2", function () {
  let realm = "realm_201";
  addRealm("realm_201");
  tryToAddExistingRealm("realm_201");
  updateRealm(realm, "realm_201");
  verifyRealmExists(realm);
  deleteRealm(realm);
  tryToDeleteANonExistingRealm(realm);
  verifyRealmDoesNotExist(realm);
});

// Story: crud:Realm:nondet:negative:dup-add
bthread("crud:Realm:nondet:negative:dup-add", function () {
  let realm = "realm_206";
  addRealm("realm_206");
  verifyRealmExists(realm);
  tryToAddExistingRealm("realm_206");
  verifyRealmExists(realm);
});

// Story: crud:Realm:nondet:existing:update
bthread("crud:Realm:nondet:existing:update", function () {
  let ev = waitForAnyRealmAdded();
  let args = Object.values(ev);
  block(matchDeletedRealm.apply(null, args), function () {
    // verifyRealmExists.apply(null, args);
    // updateRealm.apply(null, args);
  });
});

// Story: monitor:Realm:add
bthread("monitor:Realm:add", function () {
  while (true) {
    let ev = waitForAnyRealmAdded();
    let args = Object.values(ev);
    block(matchDeletedRealm.apply(null, args), function () {
      // verifyRealmExists.apply(null, args);
    });
  }
});

// Story: crud:AdminEvent:read_only
bthread("crud:AdminEvent:read_only", function () {
  let realm = "realm_210";
  let authClient = "authClient_210";
  let authIpAddress = "authIpAddress_210";
  let authRealm = "authRealm_210";
  let authUser = "authUser_210";
  let dateFrom = "dateFrom_210";
  let dateTo = "dateTo_210";
  let first = "first_210";
  let max = "max_210";
  let operationTypes = "operationTypes_210";
  let resourcePath = "resourcePath_210";
  let resourceTypes = "resourceTypes_210";
  // Read-only check for AdminEvent
  verifyAdminEventExists(realm);
});

// Story: crud:BruteForceUser:read_only
bthread("crud:BruteForceUser:read_only", function () {
  let realm = "realm_220";
  let userId = 220;
  // Read-only check for BruteForceUser
  verifyBruteForceUserExists(realm);
});

// Story: crud:AuthenticatorConfig:nondet:1:1
bthread("crud:AuthenticatorConfig:nondet:1:1", function () {
  let realm = "realm_240";
  addAuthenticatorConfig("realm_240");
  tryToAddExistingAuthenticatorConfig("realm_240");
  verifyAuthenticatorConfigExists(realm);
  updateAuthenticatorConfig(realm, "realm_240");
  deleteAuthenticatorConfig(realm);
  tryToDeleteANonExistingAuthenticatorConfig(realm);
  verifyAuthenticatorConfigDoesNotExist(realm);
});

// Story: crud:AuthenticatorConfig:nondet:1:2
bthread("crud:AuthenticatorConfig:nondet:1:2", function () {
  let realm = "realm_241";
  addAuthenticatorConfig("realm_241");
  tryToAddExistingAuthenticatorConfig("realm_241");
  updateAuthenticatorConfig(realm, "realm_241");
  verifyAuthenticatorConfigExists(realm);
  deleteAuthenticatorConfig(realm);
  tryToDeleteANonExistingAuthenticatorConfig(realm);
  verifyAuthenticatorConfigDoesNotExist(realm);
});

// Story: crud:AuthenticatorConfig:nondet:negative:dup-add
bthread("crud:AuthenticatorConfig:nondet:negative:dup-add", function () {
  let realm = "realm_246";
  addAuthenticatorConfig("realm_246");
  verifyAuthenticatorConfigExists(realm);
  tryToAddExistingAuthenticatorConfig("realm_246");
  verifyAuthenticatorConfigExists(realm);
});

// Story: crud:AuthenticatorConfig:nondet:existing:update
bthread("crud:AuthenticatorConfig:nondet:existing:update", function () {
  let ev = waitForAnyAuthenticatorConfigAdded();
  let args = Object.values(ev);
  block(matchDeletedAuthenticatorConfig.apply(null, args), function () {
    // verifyAuthenticatorConfigExists.apply(null, args);
    // updateAuthenticatorConfig.apply(null, args);
  });
});

// Story: monitor:AuthenticatorConfig:add
bthread("monitor:AuthenticatorConfig:add", function () {
  while (true) {
    let ev = waitForAnyAuthenticatorConfigAdded();
    let args = Object.values(ev);
    block(matchDeletedAuthenticatorConfig.apply(null, args), function () {
      // verifyAuthenticatorConfigExists.apply(null, args);
    });
  }
});

// Story: crud:AuthenticationExecution:nondet:1:1
bthread("crud:AuthenticationExecution:nondet:1:1", function () {
  let realm = "realm_250";
  addAuthenticationExecution("realm_250");
  tryToAddExistingAuthenticationExecution("realm_250");
  verifyAuthenticationExecutionExists(realm);
  deleteAuthenticationExecution(realm);
  tryToDeleteANonExistingAuthenticationExecution(realm);
  verifyAuthenticationExecutionDoesNotExist(realm);
});

// Story: crud:AuthenticationExecution:nondet:1:2
bthread("crud:AuthenticationExecution:nondet:1:2", function () {
  let realm = "realm_251";
  addAuthenticationExecution("realm_251");
  tryToAddExistingAuthenticationExecution("realm_251");
  verifyAuthenticationExecutionExists(realm);
  deleteAuthenticationExecution(realm);
  tryToDeleteANonExistingAuthenticationExecution(realm);
  verifyAuthenticationExecutionDoesNotExist(realm);
});

// Story: crud:AuthenticationExecution:nondet:negative:dup-add
bthread("crud:AuthenticationExecution:nondet:negative:dup-add", function () {
  let realm = "realm_256";
  addAuthenticationExecution("realm_256");
  verifyAuthenticationExecutionExists(realm);
  tryToAddExistingAuthenticationExecution("realm_256");
  verifyAuthenticationExecutionExists(realm);
});

// Story: monitor:AuthenticationExecution:add
bthread("monitor:AuthenticationExecution:add", function () {
  while (true) {
    let ev = waitForAnyAuthenticationExecutionAdded();
    let args = Object.values(ev);
    block(matchDeletedAuthenticationExecution.apply(null, args), function () {
      // verifyAuthenticationExecutionExists.apply(null, args);
    });
  }
});

// Story: crud:AuthenticationFlow:nondet:1:1
bthread("crud:AuthenticationFlow:nondet:1:1", function () {
  let realm = "realm_260";
  addAuthenticationFlow("realm_260");
  tryToAddExistingAuthenticationFlow("realm_260");
  verifyAuthenticationFlowExists(realm);
  updateAuthenticationFlow(realm, "realm_260");
  deleteAuthenticationFlow(realm);
  tryToDeleteANonExistingAuthenticationFlow(realm);
  verifyAuthenticationFlowDoesNotExist(realm);
});

// Story: crud:AuthenticationFlow:nondet:1:2
bthread("crud:AuthenticationFlow:nondet:1:2", function () {
  let realm = "realm_261";
  addAuthenticationFlow("realm_261");
  tryToAddExistingAuthenticationFlow("realm_261");
  updateAuthenticationFlow(realm, "realm_261");
  verifyAuthenticationFlowExists(realm);
  deleteAuthenticationFlow(realm);
  tryToDeleteANonExistingAuthenticationFlow(realm);
  verifyAuthenticationFlowDoesNotExist(realm);
});

// Story: crud:AuthenticationFlow:nondet:negative:dup-add
bthread("crud:AuthenticationFlow:nondet:negative:dup-add", function () {
  let realm = "realm_266";
  addAuthenticationFlow("realm_266");
  verifyAuthenticationFlowExists(realm);
  tryToAddExistingAuthenticationFlow("realm_266");
  verifyAuthenticationFlowExists(realm);
});

// Story: crud:AuthenticationFlow:nondet:existing:update
bthread("crud:AuthenticationFlow:nondet:existing:update", function () {
  let ev = waitForAnyAuthenticationFlowAdded();
  let args = Object.values(ev);
  block(matchDeletedAuthenticationFlow.apply(null, args), function () {
    // verifyAuthenticationFlowExists.apply(null, args);
    // updateAuthenticationFlow.apply(null, args);
  });
});

// Story: monitor:AuthenticationFlow:add
bthread("monitor:AuthenticationFlow:add", function () {
  while (true) {
    let ev = waitForAnyAuthenticationFlowAdded();
    let args = Object.values(ev);
    block(matchDeletedAuthenticationFlow.apply(null, args), function () {
      // verifyAuthenticationFlowExists.apply(null, args);
    });
  }
});

// Story: crud:RequiredAction:nondet:1:1
bthread("crud:RequiredAction:nondet:1:1", function () {
  let realm = "realm_270";
  addRequiredAction("realm_270");
  tryToAddExistingRequiredAction("realm_270");
  verifyRequiredActionExists(realm);
  updateRequiredAction(realm, "realm_270");
  deleteRequiredAction(realm);
  tryToDeleteANonExistingRequiredAction(realm);
  verifyRequiredActionDoesNotExist(realm);
});

// Story: crud:RequiredAction:nondet:1:2
bthread("crud:RequiredAction:nondet:1:2", function () {
  let realm = "realm_271";
  addRequiredAction("realm_271");
  tryToAddExistingRequiredAction("realm_271");
  updateRequiredAction(realm, "realm_271");
  verifyRequiredActionExists(realm);
  deleteRequiredAction(realm);
  tryToDeleteANonExistingRequiredAction(realm);
  verifyRequiredActionDoesNotExist(realm);
});

// Story: crud:RequiredAction:nondet:negative:dup-add
bthread("crud:RequiredAction:nondet:negative:dup-add", function () {
  let realm = "realm_276";
  addRequiredAction("realm_276");
  verifyRequiredActionExists(realm);
  tryToAddExistingRequiredAction("realm_276");
  verifyRequiredActionExists(realm);
});

// Story: crud:RequiredAction:nondet:existing:update
bthread("crud:RequiredAction:nondet:existing:update", function () {
  let ev = waitForAnyRequiredActionAdded();
  let args = Object.values(ev);
  block(matchDeletedRequiredAction.apply(null, args), function () {
    // verifyRequiredActionExists.apply(null, args);
    // updateRequiredAction.apply(null, args);
  });
});

// Story: monitor:RequiredAction:add
bthread("monitor:RequiredAction:add", function () {
  while (true) {
    let ev = waitForAnyRequiredActionAdded();
    let args = Object.values(ev);
    block(matchDeletedRequiredAction.apply(null, args), function () {
      // verifyRequiredActionExists.apply(null, args);
    });
  }
});

// Story: crud:Client:nondet:1:1
bthread("crud:Client:nondet:1:1", function () {
  let realm = "realm_280";
  addClient("realm_280");
  tryToAddExistingClient("realm_280");
  verifyClientExists(realm);
  updateClient(realm, "realm_280");
  deleteClient(realm);
  tryToDeleteANonExistingClient(realm);
  verifyClientDoesNotExist(realm);
});

// Story: crud:Client:nondet:1:2
bthread("crud:Client:nondet:1:2", function () {
  let realm = "realm_281";
  addClient("realm_281");
  tryToAddExistingClient("realm_281");
  updateClient(realm, "realm_281");
  verifyClientExists(realm);
  deleteClient(realm);
  tryToDeleteANonExistingClient(realm);
  verifyClientDoesNotExist(realm);
});

// Story: crud:Client:nondet:negative:dup-add
bthread("crud:Client:nondet:negative:dup-add", function () {
  let realm = "realm_286";
  addClient("realm_286");
  verifyClientExists(realm);
  tryToAddExistingClient("realm_286");
  verifyClientExists(realm);
});

// Story: crud:Client:nondet:existing:update
bthread("crud:Client:nondet:existing:update", function () {
  let ev = waitForAnyClientAdded();
  let args = Object.values(ev);
  block(matchDeletedClient.apply(null, args), function () {
    // verifyClientExists.apply(null, args);
    // updateClient.apply(null, args);
  });
});

// Story: monitor:Client:add
bthread("monitor:Client:add", function () {
  while (true) {
    let ev = waitForAnyClientAdded();
    let args = Object.values(ev);
    block(matchDeletedClient.apply(null, args), function () {
      // verifyClientExists.apply(null, args);
    });
  }
});

// Story: crud:User:read_only
bthread("crud:User:read_only", function () {
  let realm = "realm_290";
  let userId = 290;
  // Read-only check for User
  verifyUserExists(realm);
});

// Story: crud:Webhook:read_only
bthread("crud:Webhook:read_only", function () {
  let realm = "realm_300";
  let authClient = "authClient_300";
  let authIpAddress = "authIpAddress_300";
  let authRealm = "authRealm_300";
  let authUser = "authUser_300";
  let dateFrom = "dateFrom_300";
  let dateTo = "dateTo_300";
  let first = "first_300";
  let max = "max_300";
  let operationTypes = "operationTypes_300";
  let resourcePath = "resourcePath_300";
  let resourceTypes = "resourceTypes_300";
  // Read-only check for Webhook
  verifyWebhookExists(realm);
});
