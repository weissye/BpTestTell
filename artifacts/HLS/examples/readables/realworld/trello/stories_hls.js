// HLS (active + passive) – trello
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("trello: Seed Boards", function () {
    addBoard("BO-001");
    addBoard("BO-002");
    addBoard("BO-003");
    updateBoard("BO-003", { "note": "seeded" });
  });
  
    bthread("trello: List lifecycle", function () {
    addList("LI-100");
    updateList("LI-100", { "status": "ready" });
    deleteList("LI-100");
    verifyListDoesNotExist("LI-100");
  });
  
    bthread("trello: Contention on Card", function () {
    addCard("CA-200");
    tryAddCard("CA-200"); // duplicate should be blocked
    updateCard("CA-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("Board add verification", function () {
    const ev = waitForAnyBoardAdded();
    block(matchDeleteBoard(ev.boardId || ev.id || ev.key), function () {
      verifyBoardExists(ev.boardId || ev.id || ev.key);
    });
  });
  
    bthread("Board update verification", function () {
    const ev = waitForAnyBoardUpdated();
    block(matchDeleteBoard(ev.boardId || ev.id || ev.key), function () {
      verifyBoardUpdated(ev.boardId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Board deletion verification", function () {
    const ev = waitForAnyBoardDeleted();
    block(matchAddBoard(ev.boardId || ev.id || ev.key, ANY), function () {
      verifyBoardDoesNotExist(ev.boardId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Board)", function () {
    const ev = waitForAnyBoardDeleted();
    block(matchUpdateBoard(ev.boardId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("List add verification", function () {
    const ev = waitForAnyListAdded();
    block(matchDeleteList(ev.listId || ev.id || ev.key), function () {
      verifyListExists(ev.listId || ev.id || ev.key);
    });
  });
  
    bthread("List update verification", function () {
    const ev = waitForAnyListUpdated();
    block(matchDeleteList(ev.listId || ev.id || ev.key), function () {
      verifyListUpdated(ev.listId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("List deletion verification", function () {
    const ev = waitForAnyListDeleted();
    block(matchAddList(ev.listId || ev.id || ev.key, ANY), function () {
      verifyListDoesNotExist(ev.listId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (List)", function () {
    const ev = waitForAnyListDeleted();
    block(matchUpdateList(ev.listId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Card add verification", function () {
    const ev = waitForAnyCardAdded();
    block(matchDeleteCard(ev.cardId || ev.id || ev.key), function () {
      verifyCardExists(ev.cardId || ev.id || ev.key);
    });
  });
  
    bthread("Card update verification", function () {
    const ev = waitForAnyCardUpdated();
    block(matchDeleteCard(ev.cardId || ev.id || ev.key), function () {
      verifyCardUpdated(ev.cardId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Card deletion verification", function () {
    const ev = waitForAnyCardDeleted();
    block(matchAddCard(ev.cardId || ev.id || ev.key, ANY), function () {
      verifyCardDoesNotExist(ev.cardId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Card)", function () {
    const ev = waitForAnyCardDeleted();
    block(matchUpdateCard(ev.cardId || ev.id || ev.key, ANY), function () {
    });
  });

} // end if MODE
