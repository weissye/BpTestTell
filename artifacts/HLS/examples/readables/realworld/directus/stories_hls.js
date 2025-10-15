// HLS (active + passive) – directus
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("directus: Seed Collections", function () {
    addCollection("CO-001");
    addCollection("CO-002");
    addCollection("CO-003");
    updateCollection("CO-003", { "note": "seeded" });
  });
  
    bthread("directus: Item lifecycle", function () {
    addItem("IT-100");
    updateItem("IT-100", { "status": "ready" });
    deleteItem("IT-100");
    verifyItemDoesNotExist("IT-100");
  });
  
    bthread("directus: Contention on User", function () {
    addUser("US-200");
    tryAddUser("US-200"); // duplicate should be blocked
    updateUser("US-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("Collection add verification", function () {
    const ev = waitForAnyCollectionAdded();
    block(matchDeleteCollection(ev.collectionId || ev.id || ev.key), function () {
      verifyCollectionExists(ev.collectionId || ev.id || ev.key);
    });
  });
  
    bthread("Collection update verification", function () {
    const ev = waitForAnyCollectionUpdated();
    block(matchDeleteCollection(ev.collectionId || ev.id || ev.key), function () {
      verifyCollectionUpdated(ev.collectionId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Collection deletion verification", function () {
    const ev = waitForAnyCollectionDeleted();
    block(matchAddCollection(ev.collectionId || ev.id || ev.key, ANY), function () {
      verifyCollectionDoesNotExist(ev.collectionId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Collection)", function () {
    const ev = waitForAnyCollectionDeleted();
    block(matchUpdateCollection(ev.collectionId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Item add verification", function () {
    const ev = waitForAnyItemAdded();
    block(matchDeleteItem(ev.itemId || ev.id || ev.key), function () {
      verifyItemExists(ev.itemId || ev.id || ev.key);
    });
  });
  
    bthread("Item update verification", function () {
    const ev = waitForAnyItemUpdated();
    block(matchDeleteItem(ev.itemId || ev.id || ev.key), function () {
      verifyItemUpdated(ev.itemId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Item deletion verification", function () {
    const ev = waitForAnyItemDeleted();
    block(matchAddItem(ev.itemId || ev.id || ev.key, ANY), function () {
      verifyItemDoesNotExist(ev.itemId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Item)", function () {
    const ev = waitForAnyItemDeleted();
    block(matchUpdateItem(ev.itemId || ev.id || ev.key, ANY), function () {
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
