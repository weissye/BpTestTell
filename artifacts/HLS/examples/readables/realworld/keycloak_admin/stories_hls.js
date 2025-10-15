// HLS (active + passive) – keycloak_admin
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("keycloak_admin: Seed Realms", function () {
    addRealm("RE-001");
    addRealm("RE-002");
    addRealm("RE-003");
    updateRealm("RE-003", { "note": "seeded" });
  });
  
    bthread("keycloak_admin: Client lifecycle", function () {
    addClient("CL-100");
    updateClient("CL-100", { "status": "ready" });
    deleteClient("CL-100");
    verifyClientDoesNotExist("CL-100");
  });
  
    bthread("keycloak_admin: Contention on User", function () {
    addUser("US-200");
    tryAddUser("US-200"); // duplicate should be blocked
    updateUser("US-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("Realm add verification", function () {
    const ev = waitForAnyRealmAdded();
    block(matchDeleteRealm(ev.realmId || ev.id || ev.key), function () {
      verifyRealmExists(ev.realmId || ev.id || ev.key);
    });
  });
  
    bthread("Realm update verification", function () {
    const ev = waitForAnyRealmUpdated();
    block(matchDeleteRealm(ev.realmId || ev.id || ev.key), function () {
      verifyRealmUpdated(ev.realmId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Realm deletion verification", function () {
    const ev = waitForAnyRealmDeleted();
    block(matchAddRealm(ev.realmId || ev.id || ev.key, ANY), function () {
      verifyRealmDoesNotExist(ev.realmId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Realm)", function () {
    const ev = waitForAnyRealmDeleted();
    block(matchUpdateRealm(ev.realmId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Client add verification", function () {
    const ev = waitForAnyClientAdded();
    block(matchDeleteClient(ev.clientId || ev.id || ev.key), function () {
      verifyClientExists(ev.clientId || ev.id || ev.key);
    });
  });
  
    bthread("Client update verification", function () {
    const ev = waitForAnyClientUpdated();
    block(matchDeleteClient(ev.clientId || ev.id || ev.key), function () {
      verifyClientUpdated(ev.clientId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Client deletion verification", function () {
    const ev = waitForAnyClientDeleted();
    block(matchAddClient(ev.clientId || ev.id || ev.key, ANY), function () {
      verifyClientDoesNotExist(ev.clientId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Client)", function () {
    const ev = waitForAnyClientDeleted();
    block(matchUpdateClient(ev.clientId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("User add verification", function () {
    const ev = waitForAnyUserAdded();
    block(matchDeleteUser(ev.userId || ev.id || ev.key), function () {
      verifyUserExists(ev.userId || ev.id || ev.key);
    });
  });
  
    bthread("User update verification", function () {
    const ev = waitForAnyUserUpdated();
    block(matchDeleteUser(ev.userId || ev.id || ev.key), function () {
      verifyUserUpdated(ev.userId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("User deletion verification", function () {
    const ev = waitForAnyUserDeleted();
    block(matchAddUser(ev.userId || ev.id || ev.key, ANY), function () {
      verifyUserDoesNotExist(ev.userId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (User)", function () {
    const ev = waitForAnyUserDeleted();
    block(matchUpdateUser(ev.userId || ev.id || ev.key, ANY), function () {
    });
  });

} // end if MODE
