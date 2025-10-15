// HLS (active + passive) – realworld
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("realworld: Seed ReadStreams", function () {
    addReadStream("RE-001");
    addReadStream("RE-002");
    addReadStream("RE-003");
    updateReadStream("RE-003", { note: "seeded" });
  });
  bthread("realworld: ActionsByIdAction lifecycle", function () {
    addActionsByIdAction("AC-100");
    updateActionsByIdAction("AC-100", { status: "ready" });
    deleteActionsByIdAction("AC-100");
    verifyActionsByIdActionDoesNotExist("AC-100");
  });
  bthread("realworld: Contention on ActionsTextByIdAction", function () {
    addActionsTextByIdAction("AC-200");
    tryAddActionsTextByIdAction("AC-200"); // duplicate should be blocked
    updateActionsTextByIdAction("AC-200", { quality: "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  // PASSIVE: ActionsByIdAction update verification
  bthread("ActionsByIdAction update verification", function () {
    const ev = waitForAnyActionsByIdActionUpdated();
    block(matchDeleteActionsByIdAction(ev.actionsByIdActionId || ev.id || ev.key), function () {
      verifyActionsByIdActionUpdated(ev.actionsByIdActionId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: ActionsByIdAction deletion verification
  bthread("ActionsByIdAction deletion verification", function () {
    const ev = waitForAnyActionsByIdActionDeleted();
    block(matchAddActionsByIdAction(ev.actionsByIdActionId || ev.id || ev.key, ANY), function () {
      verifyActionsByIdActionDoesNotExist(ev.actionsByIdActionId || ev.id || ev.key);
    });
  });
  // PASSIVE: ActionsTextByIdAction update verification
  bthread("ActionsTextByIdAction update verification", function () {
    const ev = waitForAnyActionsTextByIdActionUpdated();
    block(matchDeleteActionsTextByIdAction(ev.actionsTextByIdActionId || ev.id || ev.key), function () {
      verifyActionsTextByIdActionUpdated(ev.actionsTextByIdActionId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: Boards add verification
  bthread("Boards add verification", function () {
    const ev = waitForAnyBoardsAdded();
    block(matchDeleteBoards(ev.boardsId || ev.id || ev.key), function () {
      verifyBoardsExists(ev.boardsId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsByIdBoard update verification
  bthread("BoardsByIdBoard update verification", function () {
    const ev = waitForAnyBoardsByIdBoardUpdated();
    block(matchDeleteBoardsByIdBoard(ev.boardsByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsByIdBoardUpdated(ev.boardsByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsCalendarKeyGenerateByIdBoard add verification
  bthread("BoardsCalendarKeyGenerateByIdBoard add verification", function () {
    const ev = waitForAnyBoardsCalendarKeyGenerateByIdBoardAdded();
    block(matchDeleteBoardsCalendarKeyGenerateByIdBoard(ev.boardsCalendarKeyGenerateByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsCalendarKeyGenerateByIdBoardExists(ev.boardsCalendarKeyGenerateByIdBoardId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsChecklistsByIdBoard add verification
  bthread("BoardsChecklistsByIdBoard add verification", function () {
    const ev = waitForAnyBoardsChecklistsByIdBoardAdded();
    block(matchDeleteBoardsChecklistsByIdBoard(ev.boardsChecklistsByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsChecklistsByIdBoardExists(ev.boardsChecklistsByIdBoardId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsClosedByIdBoard update verification
  bthread("BoardsClosedByIdBoard update verification", function () {
    const ev = waitForAnyBoardsClosedByIdBoardUpdated();
    block(matchDeleteBoardsClosedByIdBoard(ev.boardsClosedByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsClosedByIdBoardUpdated(ev.boardsClosedByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsDescByIdBoard update verification
  bthread("BoardsDescByIdBoard update verification", function () {
    const ev = waitForAnyBoardsDescByIdBoardUpdated();
    block(matchDeleteBoardsDescByIdBoard(ev.boardsDescByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsDescByIdBoardUpdated(ev.boardsDescByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsEmailKeyGenerateByIdBoard add verification
  bthread("BoardsEmailKeyGenerateByIdBoard add verification", function () {
    const ev = waitForAnyBoardsEmailKeyGenerateByIdBoardAdded();
    block(matchDeleteBoardsEmailKeyGenerateByIdBoard(ev.boardsEmailKeyGenerateByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsEmailKeyGenerateByIdBoardExists(ev.boardsEmailKeyGenerateByIdBoardId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsIdOrganizationByIdBoard update verification
  bthread("BoardsIdOrganizationByIdBoard update verification", function () {
    const ev = waitForAnyBoardsIdOrganizationByIdBoardUpdated();
    block(matchDeleteBoardsIdOrganizationByIdBoard(ev.boardsIdOrganizationByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsIdOrganizationByIdBoardUpdated(ev.boardsIdOrganizationByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsLabelNamesBlueByIdBoard update verification
  bthread("BoardsLabelNamesBlueByIdBoard update verification", function () {
    const ev = waitForAnyBoardsLabelNamesBlueByIdBoardUpdated();
    block(matchDeleteBoardsLabelNamesBlueByIdBoard(ev.boardsLabelNamesBlueByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsLabelNamesBlueByIdBoardUpdated(ev.boardsLabelNamesBlueByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsLabelNamesGreenByIdBoard update verification
  bthread("BoardsLabelNamesGreenByIdBoard update verification", function () {
    const ev = waitForAnyBoardsLabelNamesGreenByIdBoardUpdated();
    block(matchDeleteBoardsLabelNamesGreenByIdBoard(ev.boardsLabelNamesGreenByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsLabelNamesGreenByIdBoardUpdated(ev.boardsLabelNamesGreenByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsLabelNamesOrangeByIdBoard update verification
  bthread("BoardsLabelNamesOrangeByIdBoard update verification", function () {
    const ev = waitForAnyBoardsLabelNamesOrangeByIdBoardUpdated();
    block(matchDeleteBoardsLabelNamesOrangeByIdBoard(ev.boardsLabelNamesOrangeByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsLabelNamesOrangeByIdBoardUpdated(ev.boardsLabelNamesOrangeByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsLabelNamesPurpleByIdBoard update verification
  bthread("BoardsLabelNamesPurpleByIdBoard update verification", function () {
    const ev = waitForAnyBoardsLabelNamesPurpleByIdBoardUpdated();
    block(matchDeleteBoardsLabelNamesPurpleByIdBoard(ev.boardsLabelNamesPurpleByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsLabelNamesPurpleByIdBoardUpdated(ev.boardsLabelNamesPurpleByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsLabelNamesRedByIdBoard update verification
  bthread("BoardsLabelNamesRedByIdBoard update verification", function () {
    const ev = waitForAnyBoardsLabelNamesRedByIdBoardUpdated();
    block(matchDeleteBoardsLabelNamesRedByIdBoard(ev.boardsLabelNamesRedByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsLabelNamesRedByIdBoardUpdated(ev.boardsLabelNamesRedByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsLabelNamesYellowByIdBoard update verification
  bthread("BoardsLabelNamesYellowByIdBoard update verification", function () {
    const ev = waitForAnyBoardsLabelNamesYellowByIdBoardUpdated();
    block(matchDeleteBoardsLabelNamesYellowByIdBoard(ev.boardsLabelNamesYellowByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsLabelNamesYellowByIdBoardUpdated(ev.boardsLabelNamesYellowByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsLabelsByIdBoard add verification
  bthread("BoardsLabelsByIdBoard add verification", function () {
    const ev = waitForAnyBoardsLabelsByIdBoardAdded();
    block(matchDeleteBoardsLabelsByIdBoard(ev.boardsLabelsByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsLabelsByIdBoardExists(ev.boardsLabelsByIdBoardId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsListsByIdBoard add verification
  bthread("BoardsListsByIdBoard add verification", function () {
    const ev = waitForAnyBoardsListsByIdBoardAdded();
    block(matchDeleteBoardsListsByIdBoard(ev.boardsListsByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsListsByIdBoardExists(ev.boardsListsByIdBoardId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsMarkAsViewedByIdBoard add verification
  bthread("BoardsMarkAsViewedByIdBoard add verification", function () {
    const ev = waitForAnyBoardsMarkAsViewedByIdBoardAdded();
    block(matchDeleteBoardsMarkAsViewedByIdBoard(ev.boardsMarkAsViewedByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsMarkAsViewedByIdBoardExists(ev.boardsMarkAsViewedByIdBoardId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsMembersByIdBoard update verification
  bthread("BoardsMembersByIdBoard update verification", function () {
    const ev = waitForAnyBoardsMembersByIdBoardUpdated();
    block(matchDeleteBoardsMembersByIdBoard(ev.boardsMembersByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsMembersByIdBoardUpdated(ev.boardsMembersByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsMembersByIdBoardByIdMember update verification
  bthread("BoardsMembersByIdBoardByIdMember update verification", function () {
    const ev = waitForAnyBoardsMembersByIdBoardByIdMemberUpdated();
    block(matchDeleteBoardsMembersByIdBoardByIdMember(ev.boardsMembersByIdBoardByIdMemberId || ev.id || ev.key), function () {
      verifyBoardsMembersByIdBoardByIdMemberUpdated(ev.boardsMembersByIdBoardByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsMembersByIdBoardByIdMember deletion verification
  bthread("BoardsMembersByIdBoardByIdMember deletion verification", function () {
    const ev = waitForAnyBoardsMembersByIdBoardByIdMemberDeleted();
    block(matchAddBoardsMembersByIdBoardByIdMember(ev.boardsMembersByIdBoardByIdMemberId || ev.id || ev.key, ANY), function () {
      verifyBoardsMembersByIdBoardByIdMemberDoesNotExist(ev.boardsMembersByIdBoardByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsMembershipsByIdBoardByIdMembership update verification
  bthread("BoardsMembershipsByIdBoardByIdMembership update verification", function () {
    const ev = waitForAnyBoardsMembershipsByIdBoardByIdMembershipUpdated();
    block(matchDeleteBoardsMembershipsByIdBoardByIdMembership(ev.boardsMembershipsByIdBoardByIdMembershipId || ev.id || ev.key), function () {
      verifyBoardsMembershipsByIdBoardByIdMembershipUpdated(ev.boardsMembershipsByIdBoardByIdMembershipId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsMyPrefsEmailPositionByIdBoard update verification
  bthread("BoardsMyPrefsEmailPositionByIdBoard update verification", function () {
    const ev = waitForAnyBoardsMyPrefsEmailPositionByIdBoardUpdated();
    block(matchDeleteBoardsMyPrefsEmailPositionByIdBoard(ev.boardsMyPrefsEmailPositionByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsMyPrefsEmailPositionByIdBoardUpdated(ev.boardsMyPrefsEmailPositionByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsMyPrefsIdEmailListByIdBoard update verification
  bthread("BoardsMyPrefsIdEmailListByIdBoard update verification", function () {
    const ev = waitForAnyBoardsMyPrefsIdEmailListByIdBoardUpdated();
    block(matchDeleteBoardsMyPrefsIdEmailListByIdBoard(ev.boardsMyPrefsIdEmailListByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsMyPrefsIdEmailListByIdBoardUpdated(ev.boardsMyPrefsIdEmailListByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsMyPrefsShowListGuideByIdBoard update verification
  bthread("BoardsMyPrefsShowListGuideByIdBoard update verification", function () {
    const ev = waitForAnyBoardsMyPrefsShowListGuideByIdBoardUpdated();
    block(matchDeleteBoardsMyPrefsShowListGuideByIdBoard(ev.boardsMyPrefsShowListGuideByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsMyPrefsShowListGuideByIdBoardUpdated(ev.boardsMyPrefsShowListGuideByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsMyPrefsShowSidebarByIdBoard update verification
  bthread("BoardsMyPrefsShowSidebarByIdBoard update verification", function () {
    const ev = waitForAnyBoardsMyPrefsShowSidebarByIdBoardUpdated();
    block(matchDeleteBoardsMyPrefsShowSidebarByIdBoard(ev.boardsMyPrefsShowSidebarByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsMyPrefsShowSidebarByIdBoardUpdated(ev.boardsMyPrefsShowSidebarByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsMyPrefsShowSidebarActivityByIdBoard update verification
  bthread("BoardsMyPrefsShowSidebarActivityByIdBoard update verification", function () {
    const ev = waitForAnyBoardsMyPrefsShowSidebarActivityByIdBoardUpdated();
    block(matchDeleteBoardsMyPrefsShowSidebarActivityByIdBoard(ev.boardsMyPrefsShowSidebarActivityByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsMyPrefsShowSidebarActivityByIdBoardUpdated(ev.boardsMyPrefsShowSidebarActivityByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsMyPrefsShowSidebarBoardActionsByIdBoard update verification
  bthread("BoardsMyPrefsShowSidebarBoardActionsByIdBoard update verification", function () {
    const ev = waitForAnyBoardsMyPrefsShowSidebarBoardActionsByIdBoardUpdated();
    block(matchDeleteBoardsMyPrefsShowSidebarBoardActionsByIdBoard(ev.boardsMyPrefsShowSidebarBoardActionsByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsMyPrefsShowSidebarBoardActionsByIdBoardUpdated(ev.boardsMyPrefsShowSidebarBoardActionsByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsMyPrefsShowSidebarMembersByIdBoard update verification
  bthread("BoardsMyPrefsShowSidebarMembersByIdBoard update verification", function () {
    const ev = waitForAnyBoardsMyPrefsShowSidebarMembersByIdBoardUpdated();
    block(matchDeleteBoardsMyPrefsShowSidebarMembersByIdBoard(ev.boardsMyPrefsShowSidebarMembersByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsMyPrefsShowSidebarMembersByIdBoardUpdated(ev.boardsMyPrefsShowSidebarMembersByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsNameByIdBoard update verification
  bthread("BoardsNameByIdBoard update verification", function () {
    const ev = waitForAnyBoardsNameByIdBoardUpdated();
    block(matchDeleteBoardsNameByIdBoard(ev.boardsNameByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsNameByIdBoardUpdated(ev.boardsNameByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsPowerUpsByIdBoard add verification
  bthread("BoardsPowerUpsByIdBoard add verification", function () {
    const ev = waitForAnyBoardsPowerUpsByIdBoardAdded();
    block(matchDeleteBoardsPowerUpsByIdBoard(ev.boardsPowerUpsByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPowerUpsByIdBoardExists(ev.boardsPowerUpsByIdBoardId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsPowerUpsByIdBoardByPowerUp deletion verification
  bthread("BoardsPowerUpsByIdBoardByPowerUp deletion verification", function () {
    const ev = waitForAnyBoardsPowerUpsByIdBoardByPowerUpDeleted();
    block(matchAddBoardsPowerUpsByIdBoardByPowerUp(ev.boardsPowerUpsByIdBoardByPowerUpId || ev.id || ev.key, ANY), function () {
      verifyBoardsPowerUpsByIdBoardByPowerUpDoesNotExist(ev.boardsPowerUpsByIdBoardByPowerUpId || ev.id || ev.key);
    });
  });
  // PASSIVE: BoardsPrefsBackgroundByIdBoard update verification
  bthread("BoardsPrefsBackgroundByIdBoard update verification", function () {
    const ev = waitForAnyBoardsPrefsBackgroundByIdBoardUpdated();
    block(matchDeleteBoardsPrefsBackgroundByIdBoard(ev.boardsPrefsBackgroundByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPrefsBackgroundByIdBoardUpdated(ev.boardsPrefsBackgroundByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsPrefsCalendarFeedEnabledByIdBoard update verification
  bthread("BoardsPrefsCalendarFeedEnabledByIdBoard update verification", function () {
    const ev = waitForAnyBoardsPrefsCalendarFeedEnabledByIdBoardUpdated();
    block(matchDeleteBoardsPrefsCalendarFeedEnabledByIdBoard(ev.boardsPrefsCalendarFeedEnabledByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPrefsCalendarFeedEnabledByIdBoardUpdated(ev.boardsPrefsCalendarFeedEnabledByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsPrefsCardAgingByIdBoard update verification
  bthread("BoardsPrefsCardAgingByIdBoard update verification", function () {
    const ev = waitForAnyBoardsPrefsCardAgingByIdBoardUpdated();
    block(matchDeleteBoardsPrefsCardAgingByIdBoard(ev.boardsPrefsCardAgingByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPrefsCardAgingByIdBoardUpdated(ev.boardsPrefsCardAgingByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsPrefsCardCoversByIdBoard update verification
  bthread("BoardsPrefsCardCoversByIdBoard update verification", function () {
    const ev = waitForAnyBoardsPrefsCardCoversByIdBoardUpdated();
    block(matchDeleteBoardsPrefsCardCoversByIdBoard(ev.boardsPrefsCardCoversByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPrefsCardCoversByIdBoardUpdated(ev.boardsPrefsCardCoversByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsPrefsCommentsByIdBoard update verification
  bthread("BoardsPrefsCommentsByIdBoard update verification", function () {
    const ev = waitForAnyBoardsPrefsCommentsByIdBoardUpdated();
    block(matchDeleteBoardsPrefsCommentsByIdBoard(ev.boardsPrefsCommentsByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPrefsCommentsByIdBoardUpdated(ev.boardsPrefsCommentsByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsPrefsInvitationsByIdBoard update verification
  bthread("BoardsPrefsInvitationsByIdBoard update verification", function () {
    const ev = waitForAnyBoardsPrefsInvitationsByIdBoardUpdated();
    block(matchDeleteBoardsPrefsInvitationsByIdBoard(ev.boardsPrefsInvitationsByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPrefsInvitationsByIdBoardUpdated(ev.boardsPrefsInvitationsByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsPrefsPermissionLevelByIdBoard update verification
  bthread("BoardsPrefsPermissionLevelByIdBoard update verification", function () {
    const ev = waitForAnyBoardsPrefsPermissionLevelByIdBoardUpdated();
    block(matchDeleteBoardsPrefsPermissionLevelByIdBoard(ev.boardsPrefsPermissionLevelByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPrefsPermissionLevelByIdBoardUpdated(ev.boardsPrefsPermissionLevelByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsPrefsSelfJoinByIdBoard update verification
  bthread("BoardsPrefsSelfJoinByIdBoard update verification", function () {
    const ev = waitForAnyBoardsPrefsSelfJoinByIdBoardUpdated();
    block(matchDeleteBoardsPrefsSelfJoinByIdBoard(ev.boardsPrefsSelfJoinByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPrefsSelfJoinByIdBoardUpdated(ev.boardsPrefsSelfJoinByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsPrefsVotingByIdBoard update verification
  bthread("BoardsPrefsVotingByIdBoard update verification", function () {
    const ev = waitForAnyBoardsPrefsVotingByIdBoardUpdated();
    block(matchDeleteBoardsPrefsVotingByIdBoard(ev.boardsPrefsVotingByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsPrefsVotingByIdBoardUpdated(ev.boardsPrefsVotingByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: BoardsSubscribedByIdBoard update verification
  bthread("BoardsSubscribedByIdBoard update verification", function () {
    const ev = waitForAnyBoardsSubscribedByIdBoardUpdated();
    block(matchDeleteBoardsSubscribedByIdBoard(ev.boardsSubscribedByIdBoardId || ev.id || ev.key), function () {
      verifyBoardsSubscribedByIdBoardUpdated(ev.boardsSubscribedByIdBoardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: Cards add verification
  bthread("Cards add verification", function () {
    const ev = waitForAnyCardsAdded();
    block(matchDeleteCards(ev.cardsId || ev.id || ev.key), function () {
      verifyCardsExists(ev.cardsId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsByIdCard update verification
  bthread("CardsByIdCard update verification", function () {
    const ev = waitForAnyCardsByIdCardUpdated();
    block(matchDeleteCardsByIdCard(ev.cardsByIdCardId || ev.id || ev.key), function () {
      verifyCardsByIdCardUpdated(ev.cardsByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsByIdCard deletion verification
  bthread("CardsByIdCard deletion verification", function () {
    const ev = waitForAnyCardsByIdCardDeleted();
    block(matchAddCardsByIdCard(ev.cardsByIdCardId || ev.id || ev.key, ANY), function () {
      verifyCardsByIdCardDoesNotExist(ev.cardsByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsActionsCommentsByIdCard add verification
  bthread("CardsActionsCommentsByIdCard add verification", function () {
    const ev = waitForAnyCardsActionsCommentsByIdCardAdded();
    block(matchDeleteCardsActionsCommentsByIdCard(ev.cardsActionsCommentsByIdCardId || ev.id || ev.key), function () {
      verifyCardsActionsCommentsByIdCardExists(ev.cardsActionsCommentsByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsActionsCommentsByIdCardByIdAction update verification
  bthread("CardsActionsCommentsByIdCardByIdAction update verification", function () {
    const ev = waitForAnyCardsActionsCommentsByIdCardByIdActionUpdated();
    block(matchDeleteCardsActionsCommentsByIdCardByIdAction(ev.cardsActionsCommentsByIdCardByIdActionId || ev.id || ev.key), function () {
      verifyCardsActionsCommentsByIdCardByIdActionUpdated(ev.cardsActionsCommentsByIdCardByIdActionId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsActionsCommentsByIdCardByIdAction deletion verification
  bthread("CardsActionsCommentsByIdCardByIdAction deletion verification", function () {
    const ev = waitForAnyCardsActionsCommentsByIdCardByIdActionDeleted();
    block(matchAddCardsActionsCommentsByIdCardByIdAction(ev.cardsActionsCommentsByIdCardByIdActionId || ev.id || ev.key, ANY), function () {
      verifyCardsActionsCommentsByIdCardByIdActionDoesNotExist(ev.cardsActionsCommentsByIdCardByIdActionId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsAttachmentsByIdCard add verification
  bthread("CardsAttachmentsByIdCard add verification", function () {
    const ev = waitForAnyCardsAttachmentsByIdCardAdded();
    block(matchDeleteCardsAttachmentsByIdCard(ev.cardsAttachmentsByIdCardId || ev.id || ev.key), function () {
      verifyCardsAttachmentsByIdCardExists(ev.cardsAttachmentsByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsAttachmentsByIdCardByIdAttachment deletion verification
  bthread("CardsAttachmentsByIdCardByIdAttachment deletion verification", function () {
    const ev = waitForAnyCardsAttachmentsByIdCardByIdAttachmentDeleted();
    block(matchAddCardsAttachmentsByIdCardByIdAttachment(ev.cardsAttachmentsByIdCardByIdAttachmentId || ev.id || ev.key, ANY), function () {
      verifyCardsAttachmentsByIdCardByIdAttachmentDoesNotExist(ev.cardsAttachmentsByIdCardByIdAttachmentId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem update verification
  bthread("CardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem update verification", function () {
    const ev = waitForAnyCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItemUpdated();
    block(matchDeleteCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(ev.cardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItemId || ev.id || ev.key), function () {
      verifyCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItemUpdated(ev.cardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItemId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsChecklistCheckItemByIdCardByIdChecklist add verification
  bthread("CardsChecklistCheckItemByIdCardByIdChecklist add verification", function () {
    const ev = waitForAnyCardsChecklistCheckItemByIdCardByIdChecklistAdded();
    block(matchDeleteCardsChecklistCheckItemByIdCardByIdChecklist(ev.cardsChecklistCheckItemByIdCardByIdChecklistId || ev.id || ev.key), function () {
      verifyCardsChecklistCheckItemByIdCardByIdChecklistExists(ev.cardsChecklistCheckItemByIdCardByIdChecklistId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem deletion verification
  bthread("CardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem deletion verification", function () {
    const ev = waitForAnyCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItemDeleted();
    block(matchAddCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(ev.cardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key, ANY), function () {
      verifyCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItemDoesNotExist(ev.cardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem add verification
  bthread("CardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem add verification", function () {
    const ev = waitForAnyCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItemAdded();
    block(matchDeleteCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(ev.cardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key), function () {
      verifyCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItemExists(ev.cardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem update verification
  bthread("CardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem update verification", function () {
    const ev = waitForAnyCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItemUpdated();
    block(matchDeleteCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem(ev.cardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key), function () {
      verifyCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItemUpdated(ev.cardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem update verification
  bthread("CardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem update verification", function () {
    const ev = waitForAnyCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItemUpdated();
    block(matchDeleteCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem(ev.cardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key), function () {
      verifyCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItemUpdated(ev.cardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem update verification
  bthread("CardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem update verification", function () {
    const ev = waitForAnyCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItemUpdated();
    block(matchDeleteCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem(ev.cardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key), function () {
      verifyCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItemUpdated(ev.cardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItemId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsChecklistsByIdCard add verification
  bthread("CardsChecklistsByIdCard add verification", function () {
    const ev = waitForAnyCardsChecklistsByIdCardAdded();
    block(matchDeleteCardsChecklistsByIdCard(ev.cardsChecklistsByIdCardId || ev.id || ev.key), function () {
      verifyCardsChecklistsByIdCardExists(ev.cardsChecklistsByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsChecklistsByIdCardByIdChecklist deletion verification
  bthread("CardsChecklistsByIdCardByIdChecklist deletion verification", function () {
    const ev = waitForAnyCardsChecklistsByIdCardByIdChecklistDeleted();
    block(matchAddCardsChecklistsByIdCardByIdChecklist(ev.cardsChecklistsByIdCardByIdChecklistId || ev.id || ev.key, ANY), function () {
      verifyCardsChecklistsByIdCardByIdChecklistDoesNotExist(ev.cardsChecklistsByIdCardByIdChecklistId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsClosedByIdCard update verification
  bthread("CardsClosedByIdCard update verification", function () {
    const ev = waitForAnyCardsClosedByIdCardUpdated();
    block(matchDeleteCardsClosedByIdCard(ev.cardsClosedByIdCardId || ev.id || ev.key), function () {
      verifyCardsClosedByIdCardUpdated(ev.cardsClosedByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsDescByIdCard update verification
  bthread("CardsDescByIdCard update verification", function () {
    const ev = waitForAnyCardsDescByIdCardUpdated();
    block(matchDeleteCardsDescByIdCard(ev.cardsDescByIdCardId || ev.id || ev.key), function () {
      verifyCardsDescByIdCardUpdated(ev.cardsDescByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsDueByIdCard update verification
  bthread("CardsDueByIdCard update verification", function () {
    const ev = waitForAnyCardsDueByIdCardUpdated();
    block(matchDeleteCardsDueByIdCard(ev.cardsDueByIdCardId || ev.id || ev.key), function () {
      verifyCardsDueByIdCardUpdated(ev.cardsDueByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsIdAttachmentCoverByIdCard update verification
  bthread("CardsIdAttachmentCoverByIdCard update verification", function () {
    const ev = waitForAnyCardsIdAttachmentCoverByIdCardUpdated();
    block(matchDeleteCardsIdAttachmentCoverByIdCard(ev.cardsIdAttachmentCoverByIdCardId || ev.id || ev.key), function () {
      verifyCardsIdAttachmentCoverByIdCardUpdated(ev.cardsIdAttachmentCoverByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsIdBoardByIdCard update verification
  bthread("CardsIdBoardByIdCard update verification", function () {
    const ev = waitForAnyCardsIdBoardByIdCardUpdated();
    block(matchDeleteCardsIdBoardByIdCard(ev.cardsIdBoardByIdCardId || ev.id || ev.key), function () {
      verifyCardsIdBoardByIdCardUpdated(ev.cardsIdBoardByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsIdLabelsByIdCard add verification
  bthread("CardsIdLabelsByIdCard add verification", function () {
    const ev = waitForAnyCardsIdLabelsByIdCardAdded();
    block(matchDeleteCardsIdLabelsByIdCard(ev.cardsIdLabelsByIdCardId || ev.id || ev.key), function () {
      verifyCardsIdLabelsByIdCardExists(ev.cardsIdLabelsByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsIdLabelsByIdCardByIdLabel deletion verification
  bthread("CardsIdLabelsByIdCardByIdLabel deletion verification", function () {
    const ev = waitForAnyCardsIdLabelsByIdCardByIdLabelDeleted();
    block(matchAddCardsIdLabelsByIdCardByIdLabel(ev.cardsIdLabelsByIdCardByIdLabelId || ev.id || ev.key, ANY), function () {
      verifyCardsIdLabelsByIdCardByIdLabelDoesNotExist(ev.cardsIdLabelsByIdCardByIdLabelId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsIdListByIdCard update verification
  bthread("CardsIdListByIdCard update verification", function () {
    const ev = waitForAnyCardsIdListByIdCardUpdated();
    block(matchDeleteCardsIdListByIdCard(ev.cardsIdListByIdCardId || ev.id || ev.key), function () {
      verifyCardsIdListByIdCardUpdated(ev.cardsIdListByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsIdMembersByIdCard add verification
  bthread("CardsIdMembersByIdCard add verification", function () {
    const ev = waitForAnyCardsIdMembersByIdCardAdded();
    block(matchDeleteCardsIdMembersByIdCard(ev.cardsIdMembersByIdCardId || ev.id || ev.key), function () {
      verifyCardsIdMembersByIdCardExists(ev.cardsIdMembersByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsIdMembersByIdCard update verification
  bthread("CardsIdMembersByIdCard update verification", function () {
    const ev = waitForAnyCardsIdMembersByIdCardUpdated();
    block(matchDeleteCardsIdMembersByIdCard(ev.cardsIdMembersByIdCardId || ev.id || ev.key), function () {
      verifyCardsIdMembersByIdCardUpdated(ev.cardsIdMembersByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsIdMembersByIdCardByIdMember deletion verification
  bthread("CardsIdMembersByIdCardByIdMember deletion verification", function () {
    const ev = waitForAnyCardsIdMembersByIdCardByIdMemberDeleted();
    block(matchAddCardsIdMembersByIdCardByIdMember(ev.cardsIdMembersByIdCardByIdMemberId || ev.id || ev.key, ANY), function () {
      verifyCardsIdMembersByIdCardByIdMemberDoesNotExist(ev.cardsIdMembersByIdCardByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsLabelsByIdCard add verification
  bthread("CardsLabelsByIdCard add verification", function () {
    const ev = waitForAnyCardsLabelsByIdCardAdded();
    block(matchDeleteCardsLabelsByIdCard(ev.cardsLabelsByIdCardId || ev.id || ev.key), function () {
      verifyCardsLabelsByIdCardExists(ev.cardsLabelsByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsLabelsByIdCard update verification
  bthread("CardsLabelsByIdCard update verification", function () {
    const ev = waitForAnyCardsLabelsByIdCardUpdated();
    block(matchDeleteCardsLabelsByIdCard(ev.cardsLabelsByIdCardId || ev.id || ev.key), function () {
      verifyCardsLabelsByIdCardUpdated(ev.cardsLabelsByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsLabelsByIdCardByColor deletion verification
  bthread("CardsLabelsByIdCardByColor deletion verification", function () {
    const ev = waitForAnyCardsLabelsByIdCardByColorDeleted();
    block(matchAddCardsLabelsByIdCardByColor(ev.cardsLabelsByIdCardByColorId || ev.id || ev.key, ANY), function () {
      verifyCardsLabelsByIdCardByColorDoesNotExist(ev.cardsLabelsByIdCardByColorId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsMarkAssociatedNotificationsReadByIdCard add verification
  bthread("CardsMarkAssociatedNotificationsReadByIdCard add verification", function () {
    const ev = waitForAnyCardsMarkAssociatedNotificationsReadByIdCardAdded();
    block(matchDeleteCardsMarkAssociatedNotificationsReadByIdCard(ev.cardsMarkAssociatedNotificationsReadByIdCardId || ev.id || ev.key), function () {
      verifyCardsMarkAssociatedNotificationsReadByIdCardExists(ev.cardsMarkAssociatedNotificationsReadByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsMembersVotedByIdCard add verification
  bthread("CardsMembersVotedByIdCard add verification", function () {
    const ev = waitForAnyCardsMembersVotedByIdCardAdded();
    block(matchDeleteCardsMembersVotedByIdCard(ev.cardsMembersVotedByIdCardId || ev.id || ev.key), function () {
      verifyCardsMembersVotedByIdCardExists(ev.cardsMembersVotedByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsMembersVotedByIdCardByIdMember deletion verification
  bthread("CardsMembersVotedByIdCardByIdMember deletion verification", function () {
    const ev = waitForAnyCardsMembersVotedByIdCardByIdMemberDeleted();
    block(matchAddCardsMembersVotedByIdCardByIdMember(ev.cardsMembersVotedByIdCardByIdMemberId || ev.id || ev.key, ANY), function () {
      verifyCardsMembersVotedByIdCardByIdMemberDoesNotExist(ev.cardsMembersVotedByIdCardByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsNameByIdCard update verification
  bthread("CardsNameByIdCard update verification", function () {
    const ev = waitForAnyCardsNameByIdCardUpdated();
    block(matchDeleteCardsNameByIdCard(ev.cardsNameByIdCardId || ev.id || ev.key), function () {
      verifyCardsNameByIdCardUpdated(ev.cardsNameByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsPosByIdCard update verification
  bthread("CardsPosByIdCard update verification", function () {
    const ev = waitForAnyCardsPosByIdCardUpdated();
    block(matchDeleteCardsPosByIdCard(ev.cardsPosByIdCardId || ev.id || ev.key), function () {
      verifyCardsPosByIdCardUpdated(ev.cardsPosByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsStickersByIdCard add verification
  bthread("CardsStickersByIdCard add verification", function () {
    const ev = waitForAnyCardsStickersByIdCardAdded();
    block(matchDeleteCardsStickersByIdCard(ev.cardsStickersByIdCardId || ev.id || ev.key), function () {
      verifyCardsStickersByIdCardExists(ev.cardsStickersByIdCardId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsStickersByIdCardByIdSticker update verification
  bthread("CardsStickersByIdCardByIdSticker update verification", function () {
    const ev = waitForAnyCardsStickersByIdCardByIdStickerUpdated();
    block(matchDeleteCardsStickersByIdCardByIdSticker(ev.cardsStickersByIdCardByIdStickerId || ev.id || ev.key), function () {
      verifyCardsStickersByIdCardByIdStickerUpdated(ev.cardsStickersByIdCardByIdStickerId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: CardsStickersByIdCardByIdSticker deletion verification
  bthread("CardsStickersByIdCardByIdSticker deletion verification", function () {
    const ev = waitForAnyCardsStickersByIdCardByIdStickerDeleted();
    block(matchAddCardsStickersByIdCardByIdSticker(ev.cardsStickersByIdCardByIdStickerId || ev.id || ev.key, ANY), function () {
      verifyCardsStickersByIdCardByIdStickerDoesNotExist(ev.cardsStickersByIdCardByIdStickerId || ev.id || ev.key);
    });
  });
  // PASSIVE: CardsSubscribedByIdCard update verification
  bthread("CardsSubscribedByIdCard update verification", function () {
    const ev = waitForAnyCardsSubscribedByIdCardUpdated();
    block(matchDeleteCardsSubscribedByIdCard(ev.cardsSubscribedByIdCardId || ev.id || ev.key), function () {
      verifyCardsSubscribedByIdCardUpdated(ev.cardsSubscribedByIdCardId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: Checklists add verification
  bthread("Checklists add verification", function () {
    const ev = waitForAnyChecklistsAdded();
    block(matchDeleteChecklists(ev.checklistsId || ev.id || ev.key), function () {
      verifyChecklistsExists(ev.checklistsId || ev.id || ev.key);
    });
  });
  // PASSIVE: ChecklistsByIdChecklist update verification
  bthread("ChecklistsByIdChecklist update verification", function () {
    const ev = waitForAnyChecklistsByIdChecklistUpdated();
    block(matchDeleteChecklistsByIdChecklist(ev.checklistsByIdChecklistId || ev.id || ev.key), function () {
      verifyChecklistsByIdChecklistUpdated(ev.checklistsByIdChecklistId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: ChecklistsByIdChecklist deletion verification
  bthread("ChecklistsByIdChecklist deletion verification", function () {
    const ev = waitForAnyChecklistsByIdChecklistDeleted();
    block(matchAddChecklistsByIdChecklist(ev.checklistsByIdChecklistId || ev.id || ev.key, ANY), function () {
      verifyChecklistsByIdChecklistDoesNotExist(ev.checklistsByIdChecklistId || ev.id || ev.key);
    });
  });
  // PASSIVE: ChecklistsCheckItemsByIdChecklist add verification
  bthread("ChecklistsCheckItemsByIdChecklist add verification", function () {
    const ev = waitForAnyChecklistsCheckItemsByIdChecklistAdded();
    block(matchDeleteChecklistsCheckItemsByIdChecklist(ev.checklistsCheckItemsByIdChecklistId || ev.id || ev.key), function () {
      verifyChecklistsCheckItemsByIdChecklistExists(ev.checklistsCheckItemsByIdChecklistId || ev.id || ev.key);
    });
  });
  // PASSIVE: ChecklistsCheckItemsByIdChecklistByIdCheckItem deletion verification
  bthread("ChecklistsCheckItemsByIdChecklistByIdCheckItem deletion verification", function () {
    const ev = waitForAnyChecklistsCheckItemsByIdChecklistByIdCheckItemDeleted();
    block(matchAddChecklistsCheckItemsByIdChecklistByIdCheckItem(ev.checklistsCheckItemsByIdChecklistByIdCheckItemId || ev.id || ev.key, ANY), function () {
      verifyChecklistsCheckItemsByIdChecklistByIdCheckItemDoesNotExist(ev.checklistsCheckItemsByIdChecklistByIdCheckItemId || ev.id || ev.key);
    });
  });
  // PASSIVE: ChecklistsIdCardByIdChecklist update verification
  bthread("ChecklistsIdCardByIdChecklist update verification", function () {
    const ev = waitForAnyChecklistsIdCardByIdChecklistUpdated();
    block(matchDeleteChecklistsIdCardByIdChecklist(ev.checklistsIdCardByIdChecklistId || ev.id || ev.key), function () {
      verifyChecklistsIdCardByIdChecklistUpdated(ev.checklistsIdCardByIdChecklistId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: ChecklistsNameByIdChecklist update verification
  bthread("ChecklistsNameByIdChecklist update verification", function () {
    const ev = waitForAnyChecklistsNameByIdChecklistUpdated();
    block(matchDeleteChecklistsNameByIdChecklist(ev.checklistsNameByIdChecklistId || ev.id || ev.key), function () {
      verifyChecklistsNameByIdChecklistUpdated(ev.checklistsNameByIdChecklistId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: ChecklistsPosByIdChecklist update verification
  bthread("ChecklistsPosByIdChecklist update verification", function () {
    const ev = waitForAnyChecklistsPosByIdChecklistUpdated();
    block(matchDeleteChecklistsPosByIdChecklist(ev.checklistsPosByIdChecklistId || ev.id || ev.key), function () {
      verifyChecklistsPosByIdChecklistUpdated(ev.checklistsPosByIdChecklistId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: Labels add verification
  bthread("Labels add verification", function () {
    const ev = waitForAnyLabelsAdded();
    block(matchDeleteLabels(ev.labelsId || ev.id || ev.key), function () {
      verifyLabelsExists(ev.labelsId || ev.id || ev.key);
    });
  });
  // PASSIVE: LabelsByIdLabel update verification
  bthread("LabelsByIdLabel update verification", function () {
    const ev = waitForAnyLabelsByIdLabelUpdated();
    block(matchDeleteLabelsByIdLabel(ev.labelsByIdLabelId || ev.id || ev.key), function () {
      verifyLabelsByIdLabelUpdated(ev.labelsByIdLabelId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: LabelsByIdLabel deletion verification
  bthread("LabelsByIdLabel deletion verification", function () {
    const ev = waitForAnyLabelsByIdLabelDeleted();
    block(matchAddLabelsByIdLabel(ev.labelsByIdLabelId || ev.id || ev.key, ANY), function () {
      verifyLabelsByIdLabelDoesNotExist(ev.labelsByIdLabelId || ev.id || ev.key);
    });
  });
  // PASSIVE: LabelsColorByIdLabel update verification
  bthread("LabelsColorByIdLabel update verification", function () {
    const ev = waitForAnyLabelsColorByIdLabelUpdated();
    block(matchDeleteLabelsColorByIdLabel(ev.labelsColorByIdLabelId || ev.id || ev.key), function () {
      verifyLabelsColorByIdLabelUpdated(ev.labelsColorByIdLabelId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: LabelsNameByIdLabel update verification
  bthread("LabelsNameByIdLabel update verification", function () {
    const ev = waitForAnyLabelsNameByIdLabelUpdated();
    block(matchDeleteLabelsNameByIdLabel(ev.labelsNameByIdLabelId || ev.id || ev.key), function () {
      verifyLabelsNameByIdLabelUpdated(ev.labelsNameByIdLabelId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: Lists add verification
  bthread("Lists add verification", function () {
    const ev = waitForAnyListsAdded();
    block(matchDeleteLists(ev.listsId || ev.id || ev.key), function () {
      verifyListsExists(ev.listsId || ev.id || ev.key);
    });
  });
  // PASSIVE: ListsByIdList update verification
  bthread("ListsByIdList update verification", function () {
    const ev = waitForAnyListsByIdListUpdated();
    block(matchDeleteListsByIdList(ev.listsByIdListId || ev.id || ev.key), function () {
      verifyListsByIdListUpdated(ev.listsByIdListId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: ListsArchiveAllCardsByIdList add verification
  bthread("ListsArchiveAllCardsByIdList add verification", function () {
    const ev = waitForAnyListsArchiveAllCardsByIdListAdded();
    block(matchDeleteListsArchiveAllCardsByIdList(ev.listsArchiveAllCardsByIdListId || ev.id || ev.key), function () {
      verifyListsArchiveAllCardsByIdListExists(ev.listsArchiveAllCardsByIdListId || ev.id || ev.key);
    });
  });
  // PASSIVE: ListsCardsByIdList add verification
  bthread("ListsCardsByIdList add verification", function () {
    const ev = waitForAnyListsCardsByIdListAdded();
    block(matchDeleteListsCardsByIdList(ev.listsCardsByIdListId || ev.id || ev.key), function () {
      verifyListsCardsByIdListExists(ev.listsCardsByIdListId || ev.id || ev.key);
    });
  });
  // PASSIVE: ListsClosedByIdList update verification
  bthread("ListsClosedByIdList update verification", function () {
    const ev = waitForAnyListsClosedByIdListUpdated();
    block(matchDeleteListsClosedByIdList(ev.listsClosedByIdListId || ev.id || ev.key), function () {
      verifyListsClosedByIdListUpdated(ev.listsClosedByIdListId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: ListsIdBoardByIdList update verification
  bthread("ListsIdBoardByIdList update verification", function () {
    const ev = waitForAnyListsIdBoardByIdListUpdated();
    block(matchDeleteListsIdBoardByIdList(ev.listsIdBoardByIdListId || ev.id || ev.key), function () {
      verifyListsIdBoardByIdListUpdated(ev.listsIdBoardByIdListId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: ListsMoveAllCardsByIdList add verification
  bthread("ListsMoveAllCardsByIdList add verification", function () {
    const ev = waitForAnyListsMoveAllCardsByIdListAdded();
    block(matchDeleteListsMoveAllCardsByIdList(ev.listsMoveAllCardsByIdListId || ev.id || ev.key), function () {
      verifyListsMoveAllCardsByIdListExists(ev.listsMoveAllCardsByIdListId || ev.id || ev.key);
    });
  });
  // PASSIVE: ListsNameByIdList update verification
  bthread("ListsNameByIdList update verification", function () {
    const ev = waitForAnyListsNameByIdListUpdated();
    block(matchDeleteListsNameByIdList(ev.listsNameByIdListId || ev.id || ev.key), function () {
      verifyListsNameByIdListUpdated(ev.listsNameByIdListId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: ListsPosByIdList update verification
  bthread("ListsPosByIdList update verification", function () {
    const ev = waitForAnyListsPosByIdListUpdated();
    block(matchDeleteListsPosByIdList(ev.listsPosByIdListId || ev.id || ev.key), function () {
      verifyListsPosByIdListUpdated(ev.listsPosByIdListId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: ListsSubscribedByIdList update verification
  bthread("ListsSubscribedByIdList update verification", function () {
    const ev = waitForAnyListsSubscribedByIdListUpdated();
    block(matchDeleteListsSubscribedByIdList(ev.listsSubscribedByIdListId || ev.id || ev.key), function () {
      verifyListsSubscribedByIdListUpdated(ev.listsSubscribedByIdListId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersByIdMember update verification
  bthread("MembersByIdMember update verification", function () {
    const ev = waitForAnyMembersByIdMemberUpdated();
    block(matchDeleteMembersByIdMember(ev.membersByIdMemberId || ev.id || ev.key), function () {
      verifyMembersByIdMemberUpdated(ev.membersByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersAvatarByIdMember add verification
  bthread("MembersAvatarByIdMember add verification", function () {
    const ev = waitForAnyMembersAvatarByIdMemberAdded();
    block(matchDeleteMembersAvatarByIdMember(ev.membersAvatarByIdMemberId || ev.id || ev.key), function () {
      verifyMembersAvatarByIdMemberExists(ev.membersAvatarByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersAvatarSourceByIdMember update verification
  bthread("MembersAvatarSourceByIdMember update verification", function () {
    const ev = waitForAnyMembersAvatarSourceByIdMemberUpdated();
    block(matchDeleteMembersAvatarSourceByIdMember(ev.membersAvatarSourceByIdMemberId || ev.id || ev.key), function () {
      verifyMembersAvatarSourceByIdMemberUpdated(ev.membersAvatarSourceByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersBioByIdMember update verification
  bthread("MembersBioByIdMember update verification", function () {
    const ev = waitForAnyMembersBioByIdMemberUpdated();
    block(matchDeleteMembersBioByIdMember(ev.membersBioByIdMemberId || ev.id || ev.key), function () {
      verifyMembersBioByIdMemberUpdated(ev.membersBioByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersBoardBackgroundsByIdMember add verification
  bthread("MembersBoardBackgroundsByIdMember add verification", function () {
    const ev = waitForAnyMembersBoardBackgroundsByIdMemberAdded();
    block(matchDeleteMembersBoardBackgroundsByIdMember(ev.membersBoardBackgroundsByIdMemberId || ev.id || ev.key), function () {
      verifyMembersBoardBackgroundsByIdMemberExists(ev.membersBoardBackgroundsByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersBoardBackgroundsByIdMemberByIdBoardBackground update verification
  bthread("MembersBoardBackgroundsByIdMemberByIdBoardBackground update verification", function () {
    const ev = waitForAnyMembersBoardBackgroundsByIdMemberByIdBoardBackgroundUpdated();
    block(matchDeleteMembersBoardBackgroundsByIdMemberByIdBoardBackground(ev.membersBoardBackgroundsByIdMemberByIdBoardBackgroundId || ev.id || ev.key), function () {
      verifyMembersBoardBackgroundsByIdMemberByIdBoardBackgroundUpdated(ev.membersBoardBackgroundsByIdMemberByIdBoardBackgroundId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersBoardBackgroundsByIdMemberByIdBoardBackground deletion verification
  bthread("MembersBoardBackgroundsByIdMemberByIdBoardBackground deletion verification", function () {
    const ev = waitForAnyMembersBoardBackgroundsByIdMemberByIdBoardBackgroundDeleted();
    block(matchAddMembersBoardBackgroundsByIdMemberByIdBoardBackground(ev.membersBoardBackgroundsByIdMemberByIdBoardBackgroundId || ev.id || ev.key, ANY), function () {
      verifyMembersBoardBackgroundsByIdMemberByIdBoardBackgroundDoesNotExist(ev.membersBoardBackgroundsByIdMemberByIdBoardBackgroundId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersBoardStarsByIdMember add verification
  bthread("MembersBoardStarsByIdMember add verification", function () {
    const ev = waitForAnyMembersBoardStarsByIdMemberAdded();
    block(matchDeleteMembersBoardStarsByIdMember(ev.membersBoardStarsByIdMemberId || ev.id || ev.key), function () {
      verifyMembersBoardStarsByIdMemberExists(ev.membersBoardStarsByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersBoardStarsByIdMemberByIdBoardStar update verification
  bthread("MembersBoardStarsByIdMemberByIdBoardStar update verification", function () {
    const ev = waitForAnyMembersBoardStarsByIdMemberByIdBoardStarUpdated();
    block(matchDeleteMembersBoardStarsByIdMemberByIdBoardStar(ev.membersBoardStarsByIdMemberByIdBoardStarId || ev.id || ev.key), function () {
      verifyMembersBoardStarsByIdMemberByIdBoardStarUpdated(ev.membersBoardStarsByIdMemberByIdBoardStarId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersBoardStarsByIdMemberByIdBoardStar deletion verification
  bthread("MembersBoardStarsByIdMemberByIdBoardStar deletion verification", function () {
    const ev = waitForAnyMembersBoardStarsByIdMemberByIdBoardStarDeleted();
    block(matchAddMembersBoardStarsByIdMemberByIdBoardStar(ev.membersBoardStarsByIdMemberByIdBoardStarId || ev.id || ev.key, ANY), function () {
      verifyMembersBoardStarsByIdMemberByIdBoardStarDoesNotExist(ev.membersBoardStarsByIdMemberByIdBoardStarId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersBoardStarsIdBoardByIdMemberByIdBoardStar update verification
  bthread("MembersBoardStarsIdBoardByIdMemberByIdBoardStar update verification", function () {
    const ev = waitForAnyMembersBoardStarsIdBoardByIdMemberByIdBoardStarUpdated();
    block(matchDeleteMembersBoardStarsIdBoardByIdMemberByIdBoardStar(ev.membersBoardStarsIdBoardByIdMemberByIdBoardStarId || ev.id || ev.key), function () {
      verifyMembersBoardStarsIdBoardByIdMemberByIdBoardStarUpdated(ev.membersBoardStarsIdBoardByIdMemberByIdBoardStarId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersBoardStarsPosByIdMemberByIdBoardStar update verification
  bthread("MembersBoardStarsPosByIdMemberByIdBoardStar update verification", function () {
    const ev = waitForAnyMembersBoardStarsPosByIdMemberByIdBoardStarUpdated();
    block(matchDeleteMembersBoardStarsPosByIdMemberByIdBoardStar(ev.membersBoardStarsPosByIdMemberByIdBoardStarId || ev.id || ev.key), function () {
      verifyMembersBoardStarsPosByIdMemberByIdBoardStarUpdated(ev.membersBoardStarsPosByIdMemberByIdBoardStarId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersCustomBoardBackgroundsByIdMember add verification
  bthread("MembersCustomBoardBackgroundsByIdMember add verification", function () {
    const ev = waitForAnyMembersCustomBoardBackgroundsByIdMemberAdded();
    block(matchDeleteMembersCustomBoardBackgroundsByIdMember(ev.membersCustomBoardBackgroundsByIdMemberId || ev.id || ev.key), function () {
      verifyMembersCustomBoardBackgroundsByIdMemberExists(ev.membersCustomBoardBackgroundsByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersCustomBoardBackgroundsByIdMemberByIdBoardBackground update verification
  bthread("MembersCustomBoardBackgroundsByIdMemberByIdBoardBackground update verification", function () {
    const ev = waitForAnyMembersCustomBoardBackgroundsByIdMemberByIdBoardBackgroundUpdated();
    block(matchDeleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(ev.membersCustomBoardBackgroundsByIdMemberByIdBoardBackgroundId || ev.id || ev.key), function () {
      verifyMembersCustomBoardBackgroundsByIdMemberByIdBoardBackgroundUpdated(ev.membersCustomBoardBackgroundsByIdMemberByIdBoardBackgroundId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersCustomBoardBackgroundsByIdMemberByIdBoardBackground deletion verification
  bthread("MembersCustomBoardBackgroundsByIdMemberByIdBoardBackground deletion verification", function () {
    const ev = waitForAnyMembersCustomBoardBackgroundsByIdMemberByIdBoardBackgroundDeleted();
    block(matchAddMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(ev.membersCustomBoardBackgroundsByIdMemberByIdBoardBackgroundId || ev.id || ev.key, ANY), function () {
      verifyMembersCustomBoardBackgroundsByIdMemberByIdBoardBackgroundDoesNotExist(ev.membersCustomBoardBackgroundsByIdMemberByIdBoardBackgroundId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersCustomEmojiByIdMember add verification
  bthread("MembersCustomEmojiByIdMember add verification", function () {
    const ev = waitForAnyMembersCustomEmojiByIdMemberAdded();
    block(matchDeleteMembersCustomEmojiByIdMember(ev.membersCustomEmojiByIdMemberId || ev.id || ev.key), function () {
      verifyMembersCustomEmojiByIdMemberExists(ev.membersCustomEmojiByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersCustomStickersByIdMember add verification
  bthread("MembersCustomStickersByIdMember add verification", function () {
    const ev = waitForAnyMembersCustomStickersByIdMemberAdded();
    block(matchDeleteMembersCustomStickersByIdMember(ev.membersCustomStickersByIdMemberId || ev.id || ev.key), function () {
      verifyMembersCustomStickersByIdMemberExists(ev.membersCustomStickersByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersCustomStickersByIdMemberByIdCustomSticker deletion verification
  bthread("MembersCustomStickersByIdMemberByIdCustomSticker deletion verification", function () {
    const ev = waitForAnyMembersCustomStickersByIdMemberByIdCustomStickerDeleted();
    block(matchAddMembersCustomStickersByIdMemberByIdCustomSticker(ev.membersCustomStickersByIdMemberByIdCustomStickerId || ev.id || ev.key, ANY), function () {
      verifyMembersCustomStickersByIdMemberByIdCustomStickerDoesNotExist(ev.membersCustomStickersByIdMemberByIdCustomStickerId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersFullNameByIdMember update verification
  bthread("MembersFullNameByIdMember update verification", function () {
    const ev = waitForAnyMembersFullNameByIdMemberUpdated();
    block(matchDeleteMembersFullNameByIdMember(ev.membersFullNameByIdMemberId || ev.id || ev.key), function () {
      verifyMembersFullNameByIdMemberUpdated(ev.membersFullNameByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersInitialsByIdMember update verification
  bthread("MembersInitialsByIdMember update verification", function () {
    const ev = waitForAnyMembersInitialsByIdMemberUpdated();
    block(matchDeleteMembersInitialsByIdMember(ev.membersInitialsByIdMemberId || ev.id || ev.key), function () {
      verifyMembersInitialsByIdMemberUpdated(ev.membersInitialsByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersOneTimeMessagesDismissedByIdMember add verification
  bthread("MembersOneTimeMessagesDismissedByIdMember add verification", function () {
    const ev = waitForAnyMembersOneTimeMessagesDismissedByIdMemberAdded();
    block(matchDeleteMembersOneTimeMessagesDismissedByIdMember(ev.membersOneTimeMessagesDismissedByIdMemberId || ev.id || ev.key), function () {
      verifyMembersOneTimeMessagesDismissedByIdMemberExists(ev.membersOneTimeMessagesDismissedByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersPrefsColorBlindByIdMember update verification
  bthread("MembersPrefsColorBlindByIdMember update verification", function () {
    const ev = waitForAnyMembersPrefsColorBlindByIdMemberUpdated();
    block(matchDeleteMembersPrefsColorBlindByIdMember(ev.membersPrefsColorBlindByIdMemberId || ev.id || ev.key), function () {
      verifyMembersPrefsColorBlindByIdMemberUpdated(ev.membersPrefsColorBlindByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersPrefsLocaleByIdMember update verification
  bthread("MembersPrefsLocaleByIdMember update verification", function () {
    const ev = waitForAnyMembersPrefsLocaleByIdMemberUpdated();
    block(matchDeleteMembersPrefsLocaleByIdMember(ev.membersPrefsLocaleByIdMemberId || ev.id || ev.key), function () {
      verifyMembersPrefsLocaleByIdMemberUpdated(ev.membersPrefsLocaleByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersPrefsMinutesBetweenSummariesByIdMember update verification
  bthread("MembersPrefsMinutesBetweenSummariesByIdMember update verification", function () {
    const ev = waitForAnyMembersPrefsMinutesBetweenSummariesByIdMemberUpdated();
    block(matchDeleteMembersPrefsMinutesBetweenSummariesByIdMember(ev.membersPrefsMinutesBetweenSummariesByIdMemberId || ev.id || ev.key), function () {
      verifyMembersPrefsMinutesBetweenSummariesByIdMemberUpdated(ev.membersPrefsMinutesBetweenSummariesByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersSavedSearchesByIdMember add verification
  bthread("MembersSavedSearchesByIdMember add verification", function () {
    const ev = waitForAnyMembersSavedSearchesByIdMemberAdded();
    block(matchDeleteMembersSavedSearchesByIdMember(ev.membersSavedSearchesByIdMemberId || ev.id || ev.key), function () {
      verifyMembersSavedSearchesByIdMemberExists(ev.membersSavedSearchesByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersSavedSearchesByIdMemberByIdSavedSearch update verification
  bthread("MembersSavedSearchesByIdMemberByIdSavedSearch update verification", function () {
    const ev = waitForAnyMembersSavedSearchesByIdMemberByIdSavedSearchUpdated();
    block(matchDeleteMembersSavedSearchesByIdMemberByIdSavedSearch(ev.membersSavedSearchesByIdMemberByIdSavedSearchId || ev.id || ev.key), function () {
      verifyMembersSavedSearchesByIdMemberByIdSavedSearchUpdated(ev.membersSavedSearchesByIdMemberByIdSavedSearchId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersSavedSearchesByIdMemberByIdSavedSearch deletion verification
  bthread("MembersSavedSearchesByIdMemberByIdSavedSearch deletion verification", function () {
    const ev = waitForAnyMembersSavedSearchesByIdMemberByIdSavedSearchDeleted();
    block(matchAddMembersSavedSearchesByIdMemberByIdSavedSearch(ev.membersSavedSearchesByIdMemberByIdSavedSearchId || ev.id || ev.key, ANY), function () {
      verifyMembersSavedSearchesByIdMemberByIdSavedSearchDoesNotExist(ev.membersSavedSearchesByIdMemberByIdSavedSearchId || ev.id || ev.key);
    });
  });
  // PASSIVE: MembersSavedSearchesNameByIdMemberByIdSavedSearch update verification
  bthread("MembersSavedSearchesNameByIdMemberByIdSavedSearch update verification", function () {
    const ev = waitForAnyMembersSavedSearchesNameByIdMemberByIdSavedSearchUpdated();
    block(matchDeleteMembersSavedSearchesNameByIdMemberByIdSavedSearch(ev.membersSavedSearchesNameByIdMemberByIdSavedSearchId || ev.id || ev.key), function () {
      verifyMembersSavedSearchesNameByIdMemberByIdSavedSearchUpdated(ev.membersSavedSearchesNameByIdMemberByIdSavedSearchId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersSavedSearchesPosByIdMemberByIdSavedSearch update verification
  bthread("MembersSavedSearchesPosByIdMemberByIdSavedSearch update verification", function () {
    const ev = waitForAnyMembersSavedSearchesPosByIdMemberByIdSavedSearchUpdated();
    block(matchDeleteMembersSavedSearchesPosByIdMemberByIdSavedSearch(ev.membersSavedSearchesPosByIdMemberByIdSavedSearchId || ev.id || ev.key), function () {
      verifyMembersSavedSearchesPosByIdMemberByIdSavedSearchUpdated(ev.membersSavedSearchesPosByIdMemberByIdSavedSearchId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersSavedSearchesQueryByIdMemberByIdSavedSearch update verification
  bthread("MembersSavedSearchesQueryByIdMemberByIdSavedSearch update verification", function () {
    const ev = waitForAnyMembersSavedSearchesQueryByIdMemberByIdSavedSearchUpdated();
    block(matchDeleteMembersSavedSearchesQueryByIdMemberByIdSavedSearch(ev.membersSavedSearchesQueryByIdMemberByIdSavedSearchId || ev.id || ev.key), function () {
      verifyMembersSavedSearchesQueryByIdMemberByIdSavedSearchUpdated(ev.membersSavedSearchesQueryByIdMemberByIdSavedSearchId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: MembersUsernameByIdMember update verification
  bthread("MembersUsernameByIdMember update verification", function () {
    const ev = waitForAnyMembersUsernameByIdMemberUpdated();
    block(matchDeleteMembersUsernameByIdMember(ev.membersUsernameByIdMemberId || ev.id || ev.key), function () {
      verifyMembersUsernameByIdMemberUpdated(ev.membersUsernameByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: NotificationsAllRead add verification
  bthread("NotificationsAllRead add verification", function () {
    const ev = waitForAnyNotificationsAllReadAdded();
    block(matchDeleteNotificationsAllRead(ev.notificationsAllReadId || ev.id || ev.key), function () {
      verifyNotificationsAllReadExists(ev.notificationsAllReadId || ev.id || ev.key);
    });
  });
  // PASSIVE: NotificationsByIdNotification update verification
  bthread("NotificationsByIdNotification update verification", function () {
    const ev = waitForAnyNotificationsByIdNotificationUpdated();
    block(matchDeleteNotificationsByIdNotification(ev.notificationsByIdNotificationId || ev.id || ev.key), function () {
      verifyNotificationsByIdNotificationUpdated(ev.notificationsByIdNotificationId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: NotificationsUnreadByIdNotification update verification
  bthread("NotificationsUnreadByIdNotification update verification", function () {
    const ev = waitForAnyNotificationsUnreadByIdNotificationUpdated();
    block(matchDeleteNotificationsUnreadByIdNotification(ev.notificationsUnreadByIdNotificationId || ev.id || ev.key), function () {
      verifyNotificationsUnreadByIdNotificationUpdated(ev.notificationsUnreadByIdNotificationId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: Organizations add verification
  bthread("Organizations add verification", function () {
    const ev = waitForAnyOrganizationsAdded();
    block(matchDeleteOrganizations(ev.organizationsId || ev.id || ev.key), function () {
      verifyOrganizationsExists(ev.organizationsId || ev.id || ev.key);
    });
  });
  // PASSIVE: OrganizationsByIdOrg update verification
  bthread("OrganizationsByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsByIdOrgUpdated();
    block(matchDeleteOrganizationsByIdOrg(ev.organizationsByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsByIdOrgUpdated(ev.organizationsByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsByIdOrg deletion verification
  bthread("OrganizationsByIdOrg deletion verification", function () {
    const ev = waitForAnyOrganizationsByIdOrgDeleted();
    block(matchAddOrganizationsByIdOrg(ev.organizationsByIdOrgId || ev.id || ev.key, ANY), function () {
      verifyOrganizationsByIdOrgDoesNotExist(ev.organizationsByIdOrgId || ev.id || ev.key);
    });
  });
  // PASSIVE: OrganizationsDescByIdOrg update verification
  bthread("OrganizationsDescByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsDescByIdOrgUpdated();
    block(matchDeleteOrganizationsDescByIdOrg(ev.organizationsDescByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsDescByIdOrgUpdated(ev.organizationsDescByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsDisplayNameByIdOrg update verification
  bthread("OrganizationsDisplayNameByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsDisplayNameByIdOrgUpdated();
    block(matchDeleteOrganizationsDisplayNameByIdOrg(ev.organizationsDisplayNameByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsDisplayNameByIdOrgUpdated(ev.organizationsDisplayNameByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsLogoByIdOrg add verification
  bthread("OrganizationsLogoByIdOrg add verification", function () {
    const ev = waitForAnyOrganizationsLogoByIdOrgAdded();
    block(matchDeleteOrganizationsLogoByIdOrg(ev.organizationsLogoByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsLogoByIdOrgExists(ev.organizationsLogoByIdOrgId || ev.id || ev.key);
    });
  });
  // PASSIVE: OrganizationsLogoByIdOrg deletion verification
  bthread("OrganizationsLogoByIdOrg deletion verification", function () {
    const ev = waitForAnyOrganizationsLogoByIdOrgDeleted();
    block(matchAddOrganizationsLogoByIdOrg(ev.organizationsLogoByIdOrgId || ev.id || ev.key, ANY), function () {
      verifyOrganizationsLogoByIdOrgDoesNotExist(ev.organizationsLogoByIdOrgId || ev.id || ev.key);
    });
  });
  // GUARD: No update-after-delete for OrganizationsLogoByIdOrg
  bthread("Guard: No update-after-delete (OrganizationsLogoByIdOrg)", function () {
    const ev = waitForAnyOrganizationsLogoByIdOrgDeleted();
    block(matchUpdateOrganizationsLogoByIdOrg(ev.organizationsLogoByIdOrgId || ev.id || ev.key, ANY), function () {});
  });
  // PASSIVE: OrganizationsMembersByIdOrg update verification
  bthread("OrganizationsMembersByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsMembersByIdOrgUpdated();
    block(matchDeleteOrganizationsMembersByIdOrg(ev.organizationsMembersByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsMembersByIdOrgUpdated(ev.organizationsMembersByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsMembersByIdOrgByIdMember update verification
  bthread("OrganizationsMembersByIdOrgByIdMember update verification", function () {
    const ev = waitForAnyOrganizationsMembersByIdOrgByIdMemberUpdated();
    block(matchDeleteOrganizationsMembersByIdOrgByIdMember(ev.organizationsMembersByIdOrgByIdMemberId || ev.id || ev.key), function () {
      verifyOrganizationsMembersByIdOrgByIdMemberUpdated(ev.organizationsMembersByIdOrgByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsMembersByIdOrgByIdMember deletion verification
  bthread("OrganizationsMembersByIdOrgByIdMember deletion verification", function () {
    const ev = waitForAnyOrganizationsMembersByIdOrgByIdMemberDeleted();
    block(matchAddOrganizationsMembersByIdOrgByIdMember(ev.organizationsMembersByIdOrgByIdMemberId || ev.id || ev.key, ANY), function () {
      verifyOrganizationsMembersByIdOrgByIdMemberDoesNotExist(ev.organizationsMembersByIdOrgByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: OrganizationsMembersAllByIdOrgByIdMember deletion verification
  bthread("OrganizationsMembersAllByIdOrgByIdMember deletion verification", function () {
    const ev = waitForAnyOrganizationsMembersAllByIdOrgByIdMemberDeleted();
    block(matchAddOrganizationsMembersAllByIdOrgByIdMember(ev.organizationsMembersAllByIdOrgByIdMemberId || ev.id || ev.key, ANY), function () {
      verifyOrganizationsMembersAllByIdOrgByIdMemberDoesNotExist(ev.organizationsMembersAllByIdOrgByIdMemberId || ev.id || ev.key);
    });
  });
  // PASSIVE: OrganizationsMembersDeactivatedByIdOrgByIdMember update verification
  bthread("OrganizationsMembersDeactivatedByIdOrgByIdMember update verification", function () {
    const ev = waitForAnyOrganizationsMembersDeactivatedByIdOrgByIdMemberUpdated();
    block(matchDeleteOrganizationsMembersDeactivatedByIdOrgByIdMember(ev.organizationsMembersDeactivatedByIdOrgByIdMemberId || ev.id || ev.key), function () {
      verifyOrganizationsMembersDeactivatedByIdOrgByIdMemberUpdated(ev.organizationsMembersDeactivatedByIdOrgByIdMemberId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsMembershipsByIdOrgByIdMembership update verification
  bthread("OrganizationsMembershipsByIdOrgByIdMembership update verification", function () {
    const ev = waitForAnyOrganizationsMembershipsByIdOrgByIdMembershipUpdated();
    block(matchDeleteOrganizationsMembershipsByIdOrgByIdMembership(ev.organizationsMembershipsByIdOrgByIdMembershipId || ev.id || ev.key), function () {
      verifyOrganizationsMembershipsByIdOrgByIdMembershipUpdated(ev.organizationsMembershipsByIdOrgByIdMembershipId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsNameByIdOrg update verification
  bthread("OrganizationsNameByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsNameByIdOrgUpdated();
    block(matchDeleteOrganizationsNameByIdOrg(ev.organizationsNameByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsNameByIdOrgUpdated(ev.organizationsNameByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsPrefsAssociatedDomainByIdOrg update verification
  bthread("OrganizationsPrefsAssociatedDomainByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsPrefsAssociatedDomainByIdOrgUpdated();
    block(matchDeleteOrganizationsPrefsAssociatedDomainByIdOrg(ev.organizationsPrefsAssociatedDomainByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsPrefsAssociatedDomainByIdOrgUpdated(ev.organizationsPrefsAssociatedDomainByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsPrefsAssociatedDomainByIdOrg deletion verification
  bthread("OrganizationsPrefsAssociatedDomainByIdOrg deletion verification", function () {
    const ev = waitForAnyOrganizationsPrefsAssociatedDomainByIdOrgDeleted();
    block(matchAddOrganizationsPrefsAssociatedDomainByIdOrg(ev.organizationsPrefsAssociatedDomainByIdOrgId || ev.id || ev.key, ANY), function () {
      verifyOrganizationsPrefsAssociatedDomainByIdOrgDoesNotExist(ev.organizationsPrefsAssociatedDomainByIdOrgId || ev.id || ev.key);
    });
  });
  // PASSIVE: OrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg update verification
  bthread("OrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrgUpdated();
    block(matchDeleteOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg(ev.organizationsPrefsBoardVisibilityRestrictOrgByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrgUpdated(ev.organizationsPrefsBoardVisibilityRestrictOrgByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg update verification
  bthread("OrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrgUpdated();
    block(matchDeleteOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg(ev.organizationsPrefsBoardVisibilityRestrictPrivateByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrgUpdated(ev.organizationsPrefsBoardVisibilityRestrictPrivateByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg update verification
  bthread("OrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrgUpdated();
    block(matchDeleteOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg(ev.organizationsPrefsBoardVisibilityRestrictPublicByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrgUpdated(ev.organizationsPrefsBoardVisibilityRestrictPublicByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsPrefsExternalMembersDisabledByIdOrg update verification
  bthread("OrganizationsPrefsExternalMembersDisabledByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsPrefsExternalMembersDisabledByIdOrgUpdated();
    block(matchDeleteOrganizationsPrefsExternalMembersDisabledByIdOrg(ev.organizationsPrefsExternalMembersDisabledByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsPrefsExternalMembersDisabledByIdOrgUpdated(ev.organizationsPrefsExternalMembersDisabledByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsPrefsGoogleAppsVersionByIdOrg update verification
  bthread("OrganizationsPrefsGoogleAppsVersionByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsPrefsGoogleAppsVersionByIdOrgUpdated();
    block(matchDeleteOrganizationsPrefsGoogleAppsVersionByIdOrg(ev.organizationsPrefsGoogleAppsVersionByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsPrefsGoogleAppsVersionByIdOrgUpdated(ev.organizationsPrefsGoogleAppsVersionByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsPrefsOrgInviteRestrictByIdOrg update verification
  bthread("OrganizationsPrefsOrgInviteRestrictByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsPrefsOrgInviteRestrictByIdOrgUpdated();
    block(matchDeleteOrganizationsPrefsOrgInviteRestrictByIdOrg(ev.organizationsPrefsOrgInviteRestrictByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsPrefsOrgInviteRestrictByIdOrgUpdated(ev.organizationsPrefsOrgInviteRestrictByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsPrefsOrgInviteRestrictByIdOrg deletion verification
  bthread("OrganizationsPrefsOrgInviteRestrictByIdOrg deletion verification", function () {
    const ev = waitForAnyOrganizationsPrefsOrgInviteRestrictByIdOrgDeleted();
    block(matchAddOrganizationsPrefsOrgInviteRestrictByIdOrg(ev.organizationsPrefsOrgInviteRestrictByIdOrgId || ev.id || ev.key, ANY), function () {
      verifyOrganizationsPrefsOrgInviteRestrictByIdOrgDoesNotExist(ev.organizationsPrefsOrgInviteRestrictByIdOrgId || ev.id || ev.key);
    });
  });
  // PASSIVE: OrganizationsPrefsPermissionLevelByIdOrg update verification
  bthread("OrganizationsPrefsPermissionLevelByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsPrefsPermissionLevelByIdOrgUpdated();
    block(matchDeleteOrganizationsPrefsPermissionLevelByIdOrg(ev.organizationsPrefsPermissionLevelByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsPrefsPermissionLevelByIdOrgUpdated(ev.organizationsPrefsPermissionLevelByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: OrganizationsWebsiteByIdOrg update verification
  bthread("OrganizationsWebsiteByIdOrg update verification", function () {
    const ev = waitForAnyOrganizationsWebsiteByIdOrgUpdated();
    block(matchDeleteOrganizationsWebsiteByIdOrg(ev.organizationsWebsiteByIdOrgId || ev.id || ev.key), function () {
      verifyOrganizationsWebsiteByIdOrgUpdated(ev.organizationsWebsiteByIdOrgId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: Sessions add verification
  bthread("Sessions add verification", function () {
    const ev = waitForAnySessionsAdded();
    block(matchDeleteSessions(ev.sessionsId || ev.id || ev.key), function () {
      verifySessionsExists(ev.sessionsId || ev.id || ev.key);
    });
  });
  // PASSIVE: SessionsByIdSession update verification
  bthread("SessionsByIdSession update verification", function () {
    const ev = waitForAnySessionsByIdSessionUpdated();
    block(matchDeleteSessionsByIdSession(ev.sessionsByIdSessionId || ev.id || ev.key), function () {
      verifySessionsByIdSessionUpdated(ev.sessionsByIdSessionId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: SessionsStatusByIdSession update verification
  bthread("SessionsStatusByIdSession update verification", function () {
    const ev = waitForAnySessionsStatusByIdSessionUpdated();
    block(matchDeleteSessionsStatusByIdSession(ev.sessionsStatusByIdSessionId || ev.id || ev.key), function () {
      verifySessionsStatusByIdSessionUpdated(ev.sessionsStatusByIdSessionId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: TokensByToken deletion verification
  bthread("TokensByToken deletion verification", function () {
    const ev = waitForAnyTokensByTokenDeleted();
    block(matchAddTokensByToken(ev.tokensByTokenId || ev.id || ev.key, ANY), function () {
      verifyTokensByTokenDoesNotExist(ev.tokensByTokenId || ev.id || ev.key);
    });
  });
  // PASSIVE: TokensWebhooksByToken add verification
  bthread("TokensWebhooksByToken add verification", function () {
    const ev = waitForAnyTokensWebhooksByTokenAdded();
    block(matchDeleteTokensWebhooksByToken(ev.tokensWebhooksByTokenId || ev.id || ev.key), function () {
      verifyTokensWebhooksByTokenExists(ev.tokensWebhooksByTokenId || ev.id || ev.key);
    });
  });
  // PASSIVE: TokensWebhooksByToken update verification
  bthread("TokensWebhooksByToken update verification", function () {
    const ev = waitForAnyTokensWebhooksByTokenUpdated();
    block(matchDeleteTokensWebhooksByToken(ev.tokensWebhooksByTokenId || ev.id || ev.key), function () {
      verifyTokensWebhooksByTokenUpdated(ev.tokensWebhooksByTokenId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: TokensWebhooksByTokenByIdWebhook deletion verification
  bthread("TokensWebhooksByTokenByIdWebhook deletion verification", function () {
    const ev = waitForAnyTokensWebhooksByTokenByIdWebhookDeleted();
    block(matchAddTokensWebhooksByTokenByIdWebhook(ev.tokensWebhooksByTokenByIdWebhookId || ev.id || ev.key, ANY), function () {
      verifyTokensWebhooksByTokenByIdWebhookDoesNotExist(ev.tokensWebhooksByTokenByIdWebhookId || ev.id || ev.key);
    });
  });
  // PASSIVE: Webhooks add verification
  bthread("Webhooks add verification", function () {
    const ev = waitForAnyWebhooksAdded();
    block(matchDeleteWebhooks(ev.webhooksId || ev.id || ev.key), function () {
      verifyWebhooksExists(ev.webhooksId || ev.id || ev.key);
    });
  });
  // PASSIVE: Webhooks update verification
  bthread("Webhooks update verification", function () {
    const ev = waitForAnyWebhooksUpdated();
    block(matchDeleteWebhooks(ev.webhooksId || ev.id || ev.key), function () {
      verifyWebhooksUpdated(ev.webhooksId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: WebhooksByIdWebhook update verification
  bthread("WebhooksByIdWebhook update verification", function () {
    const ev = waitForAnyWebhooksByIdWebhookUpdated();
    block(matchDeleteWebhooksByIdWebhook(ev.webhooksByIdWebhookId || ev.id || ev.key), function () {
      verifyWebhooksByIdWebhookUpdated(ev.webhooksByIdWebhookId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: WebhooksByIdWebhook deletion verification
  bthread("WebhooksByIdWebhook deletion verification", function () {
    const ev = waitForAnyWebhooksByIdWebhookDeleted();
    block(matchAddWebhooksByIdWebhook(ev.webhooksByIdWebhookId || ev.id || ev.key, ANY), function () {
      verifyWebhooksByIdWebhookDoesNotExist(ev.webhooksByIdWebhookId || ev.id || ev.key);
    });
  });
  // PASSIVE: WebhooksActiveByIdWebhook update verification
  bthread("WebhooksActiveByIdWebhook update verification", function () {
    const ev = waitForAnyWebhooksActiveByIdWebhookUpdated();
    block(matchDeleteWebhooksActiveByIdWebhook(ev.webhooksActiveByIdWebhookId || ev.id || ev.key), function () {
      verifyWebhooksActiveByIdWebhookUpdated(ev.webhooksActiveByIdWebhookId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: WebhooksCallbackURLByIdWebhook update verification
  bthread("WebhooksCallbackURLByIdWebhook update verification", function () {
    const ev = waitForAnyWebhooksCallbackURLByIdWebhookUpdated();
    block(matchDeleteWebhooksCallbackURLByIdWebhook(ev.webhooksCallbackURLByIdWebhookId || ev.id || ev.key), function () {
      verifyWebhooksCallbackURLByIdWebhookUpdated(ev.webhooksCallbackURLByIdWebhookId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: WebhooksDescriptionByIdWebhook update verification
  bthread("WebhooksDescriptionByIdWebhook update verification", function () {
    const ev = waitForAnyWebhooksDescriptionByIdWebhookUpdated();
    block(matchDeleteWebhooksDescriptionByIdWebhook(ev.webhooksDescriptionByIdWebhookId || ev.id || ev.key), function () {
      verifyWebhooksDescriptionByIdWebhookUpdated(ev.webhooksDescriptionByIdWebhookId || ev.id || ev.key, ev.diff || {});
    });
  });
  // PASSIVE: WebhooksIdModelByIdWebhook update verification
  bthread("WebhooksIdModelByIdWebhook update verification", function () {
    const ev = waitForAnyWebhooksIdModelByIdWebhookUpdated();
    block(matchDeleteWebhooksIdModelByIdWebhook(ev.webhooksIdModelByIdWebhookId || ev.id || ev.key), function () {
      verifyWebhooksIdModelByIdWebhookUpdated(ev.webhooksIdModelByIdWebhookId || ev.id || ev.key, ev.diff || {});
    });
  });

} // end if MODE
