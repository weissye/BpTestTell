// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: trello
// Source: artifacts\hls_nondet\real_world_llm_provider\trello\hls_nondet_gold.json


bthread(`HLS PASSIVE: delete ActionsByIdAction`, function () {
  const ev = waitFor({op: 'delete', entity: 'ActionsByIdAction'});
  block({op: 'addActionsByIdAction'});
  verifyActionsByIdActionNotExists(ev.id);
});

bthread(`HLS PASSIVE: update ActionsTextByIdAction`, function () {
  const ev = waitFor({op: 'update', entity: 'ActionsTextByIdAction'});
  block({op: 'updateActionsTextByIdAction'});
  verifyActionsTextByIdActionExists(ev.id);
  verifyActionsTextByIdActionUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Boards`, function () {
  const ev = waitFor({op: 'add', entity: 'Boards'});
  block({op: 'deleteBoards'});
  verifyBoardsExists(ev.id);
});

bthread(`HLS PASSIVE: update BoardsByIdBoard`, function () {
  const ev = waitFor({op: 'update', entity: 'BoardsByIdBoard'});
  block({op: 'updateBoardsByIdBoard'});
  verifyBoardsByIdBoardExists(ev.id);
  verifyBoardsByIdBoardUpdated(ev.id);
});

bthread(`HLS PASSIVE: add BoardsChecklistsByIdBoard`, function () {
  const ev = waitFor({op: 'add', entity: 'BoardsChecklistsByIdBoard'});
  block({op: 'deleteBoardsChecklistsByIdBoard'});
  verifyBoardsChecklistsByIdBoardExists(ev.id);
});

bthread(`HLS PASSIVE: add BoardsListsByIdBoard`, function () {
  const ev = waitFor({op: 'add', entity: 'BoardsListsByIdBoard'});
  block({op: 'deleteBoardsListsByIdBoard'});
  verifyBoardsListsByIdBoardExists(ev.id);
});

bthread(`HLS PASSIVE: update BoardsMembersByIdBoard`, function () {
  const ev = waitFor({op: 'update', entity: 'BoardsMembersByIdBoard'});
  block({op: 'updateBoardsMembersByIdBoard'});
  verifyBoardsMembersByIdBoardExists(ev.id);
  verifyBoardsMembersByIdBoardUpdated(ev.id);
});

bthread(`HLS PASSIVE: update BoardsPrefsBackgroundByIdBoard`, function () {
  const ev = waitFor({op: 'update', entity: 'BoardsPrefsBackgroundByIdBoard'});
  block({op: 'updateBoardsPrefsBackgroundByIdBoard'});
  verifyBoardsPrefsBackgroundByIdBoardExists(ev.id);
  verifyBoardsPrefsBackgroundByIdBoardUpdated(ev.id);
});

bthread(`HLS PASSIVE: add CardsAttachmentsByIdCard`, function () {
  const ev = waitFor({op: 'add', entity: 'CardsAttachmentsByIdCard'});
  block({op: 'deleteCardsAttachmentsByIdCard'});
  verifyCardsAttachmentsByIdCardExists(ev.id);
});

bthread(`HLS PASSIVE: update CardsByIdCard`, function () {
  const ev = waitFor({op: 'update', entity: 'CardsByIdCard'});
  block({op: 'updateCardsByIdCard'});
  verifyCardsByIdCardExists(ev.id);
  verifyCardsByIdCardUpdated(ev.id);
});

bthread(`HLS PASSIVE: update CardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem`, function () {
  const ev = waitFor({op: 'update', entity: 'CardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem'});
  block({op: 'updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem'});
  verifyCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItemExists(ev.id);
  verifyCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItemUpdated(ev.id);
});

bthread(`HLS PASSIVE: add CardsChecklistsByIdCard`, function () {
  const ev = waitFor({op: 'add', entity: 'CardsChecklistsByIdCard'});
  block({op: 'deleteCardsChecklistsByIdCard'});
  verifyCardsChecklistsByIdCardExists(ev.id);
});

bthread(`HLS PASSIVE: delete CardsLabelsByIdCardByColor`, function () {
  const ev = waitFor({op: 'delete', entity: 'CardsLabelsByIdCardByColor'});
  block({op: 'addCardsLabelsByIdCardByColor'});
  verifyCardsLabelsByIdCardByColorNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete CardsMembersVotedByIdCardByIdMember`, function () {
  const ev = waitFor({op: 'delete', entity: 'CardsMembersVotedByIdCardByIdMember'});
  block({op: 'addCardsMembersVotedByIdCardByIdMember'});
  verifyCardsMembersVotedByIdCardByIdMemberNotExists(ev.id);
});

bthread(`HLS PASSIVE: add CardsStickersByIdCard`, function () {
  const ev = waitFor({op: 'add', entity: 'CardsStickersByIdCard'});
  block({op: 'deleteCardsStickersByIdCard'});
  verifyCardsStickersByIdCardExists(ev.id);
});

bthread(`HLS PASSIVE: add Checklists`, function () {
  const ev = waitFor({op: 'add', entity: 'Checklists'});
  block({op: 'deleteChecklists'});
  verifyChecklistsExists(ev.id);
});

bthread(`HLS PASSIVE: delete ChecklistsByIdChecklist`, function () {
  const ev = waitFor({op: 'delete', entity: 'ChecklistsByIdChecklist'});
  block({op: 'addChecklistsByIdChecklist'});
  verifyChecklistsByIdChecklistNotExists(ev.id);
});

bthread(`HLS PASSIVE: update ChecklistsByIdChecklist`, function () {
  const ev = waitFor({op: 'update', entity: 'ChecklistsByIdChecklist'});
  block({op: 'updateChecklistsByIdChecklist'});
  verifyChecklistsByIdChecklistExists(ev.id);
  verifyChecklistsByIdChecklistUpdated(ev.id);
});

bthread(`HLS PASSIVE: add ChecklistsCheckItemsByIdChecklist`, function () {
  const ev = waitFor({op: 'add', entity: 'ChecklistsCheckItemsByIdChecklist'});
  block({op: 'deleteChecklistsCheckItemsByIdChecklist'});
  verifyChecklistsCheckItemsByIdChecklistExists(ev.id);
});

bthread(`HLS PASSIVE: delete ChecklistsCheckItemsByIdChecklistByIdCheckItem`, function () {
  const ev = waitFor({op: 'delete', entity: 'ChecklistsCheckItemsByIdChecklistByIdCheckItem'});
  block({op: 'addChecklistsCheckItemsByIdChecklistByIdCheckItem'});
  verifyChecklistsCheckItemsByIdChecklistByIdCheckItemNotExists(ev.id);
});

bthread(`HLS PASSIVE: update ChecklistsIdCardByIdChecklist`, function () {
  const ev = waitFor({op: 'update', entity: 'ChecklistsIdCardByIdChecklist'});
  block({op: 'updateChecklistsIdCardByIdChecklist'});
  verifyChecklistsIdCardByIdChecklistExists(ev.id);
  verifyChecklistsIdCardByIdChecklistUpdated(ev.id);
});

bthread(`HLS PASSIVE: update ChecklistsNameByIdChecklist`, function () {
  const ev = waitFor({op: 'update', entity: 'ChecklistsNameByIdChecklist'});
  block({op: 'updateChecklistsNameByIdChecklist'});
  verifyChecklistsNameByIdChecklistExists(ev.id);
  verifyChecklistsNameByIdChecklistUpdated(ev.id);
});

bthread(`HLS PASSIVE: update ChecklistsPosByIdChecklist`, function () {
  const ev = waitFor({op: 'update', entity: 'ChecklistsPosByIdChecklist'});
  block({op: 'updateChecklistsPosByIdChecklist'});
  verifyChecklistsPosByIdChecklistExists(ev.id);
  verifyChecklistsPosByIdChecklistUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Labels`, function () {
  const ev = waitFor({op: 'add', entity: 'Labels'});
  block({op: 'deleteLabels'});
  verifyLabelsExists(ev.id);
});

bthread(`HLS PASSIVE: update LabelsByIdLabel`, function () {
  const ev = waitFor({op: 'update', entity: 'LabelsByIdLabel'});
  block({op: 'updateLabelsByIdLabel'});
  verifyLabelsByIdLabelExists(ev.id);
  verifyLabelsByIdLabelUpdated(ev.id);
});

bthread(`HLS PASSIVE: update LabelsColorByIdLabel`, function () {
  const ev = waitFor({op: 'update', entity: 'LabelsColorByIdLabel'});
  block({op: 'updateLabelsColorByIdLabel'});
  verifyLabelsColorByIdLabelExists(ev.id);
  verifyLabelsColorByIdLabelUpdated(ev.id);
});

bthread(`HLS PASSIVE: update LabelsNameByIdLabel`, function () {
  const ev = waitFor({op: 'update', entity: 'LabelsNameByIdLabel'});
  block({op: 'updateLabelsNameByIdLabel'});
  verifyLabelsNameByIdLabelExists(ev.id);
  verifyLabelsNameByIdLabelUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Lists`, function () {
  const ev = waitFor({op: 'add', entity: 'Lists'});
  block({op: 'deleteLists'});
  verifyListsExists(ev.id);
});

bthread(`HLS PASSIVE: add ListsArchiveAllCardsByIdList`, function () {
  const ev = waitFor({op: 'add', entity: 'ListsArchiveAllCardsByIdList'});
  block({op: 'deleteListsArchiveAllCardsByIdList'});
  verifyListsArchiveAllCardsByIdListExists(ev.id);
});

bthread(`HLS PASSIVE: update ListsByIdList`, function () {
  const ev = waitFor({op: 'update', entity: 'ListsByIdList'});
  block({op: 'updateListsByIdList'});
  verifyListsByIdListExists(ev.id);
  verifyListsByIdListUpdated(ev.id);
});

bthread(`HLS PASSIVE: add ListsCardsByIdList`, function () {
  const ev = waitFor({op: 'add', entity: 'ListsCardsByIdList'});
  block({op: 'deleteListsCardsByIdList'});
  verifyListsCardsByIdListExists(ev.id);
});

bthread(`HLS PASSIVE: update ListsClosedByIdList`, function () {
  const ev = waitFor({op: 'update', entity: 'ListsClosedByIdList'});
  block({op: 'updateListsClosedByIdList'});
  verifyListsClosedByIdListExists(ev.id);
  verifyListsClosedByIdListUpdated(ev.id);
});

bthread(`HLS PASSIVE: update ListsIdBoardByIdList`, function () {
  const ev = waitFor({op: 'update', entity: 'ListsIdBoardByIdList'});
  block({op: 'updateListsIdBoardByIdList'});
  verifyListsIdBoardByIdListExists(ev.id);
  verifyListsIdBoardByIdListUpdated(ev.id);
});

bthread(`HLS PASSIVE: add ListsMoveAllCardsByIdList`, function () {
  const ev = waitFor({op: 'add', entity: 'ListsMoveAllCardsByIdList'});
  block({op: 'deleteListsMoveAllCardsByIdList'});
  verifyListsMoveAllCardsByIdListExists(ev.id);
});

bthread(`HLS PASSIVE: update ListsNameByIdList`, function () {
  const ev = waitFor({op: 'update', entity: 'ListsNameByIdList'});
  block({op: 'updateListsNameByIdList'});
  verifyListsNameByIdListExists(ev.id);
  verifyListsNameByIdListUpdated(ev.id);
});

bthread(`HLS PASSIVE: update ListsPosByIdList`, function () {
  const ev = waitFor({op: 'update', entity: 'ListsPosByIdList'});
  block({op: 'updateListsPosByIdList'});
  verifyListsPosByIdListExists(ev.id);
  verifyListsPosByIdListUpdated(ev.id);
});

bthread(`HLS PASSIVE: update ListsSubscribedByIdList`, function () {
  const ev = waitFor({op: 'update', entity: 'ListsSubscribedByIdList'});
  block({op: 'updateListsSubscribedByIdList'});
  verifyListsSubscribedByIdListExists(ev.id);
  verifyListsSubscribedByIdListUpdated(ev.id);
});

bthread(`HLS PASSIVE: add MembersAvatarByIdMember`, function () {
  const ev = waitFor({op: 'add', entity: 'MembersAvatarByIdMember'});
  block({op: 'deleteMembersAvatarByIdMember'});
  verifyMembersAvatarByIdMemberExists(ev.id);
});

bthread(`HLS PASSIVE: update MembersBioByIdMember`, function () {
  const ev = waitFor({op: 'update', entity: 'MembersBioByIdMember'});
  block({op: 'updateMembersBioByIdMember'});
  verifyMembersBioByIdMemberExists(ev.id);
  verifyMembersBioByIdMemberUpdated(ev.id);
});

bthread(`HLS PASSIVE: add MembersBoardBackgroundsByIdMember`, function () {
  const ev = waitFor({op: 'add', entity: 'MembersBoardBackgroundsByIdMember'});
  block({op: 'deleteMembersBoardBackgroundsByIdMember'});
  verifyMembersBoardBackgroundsByIdMemberExists(ev.id);
});

bthread(`HLS PASSIVE: update MembersByIdMember`, function () {
  const ev = waitFor({op: 'update', entity: 'MembersByIdMember'});
  block({op: 'updateMembersByIdMember'});
  verifyMembersByIdMemberExists(ev.id);
  verifyMembersByIdMemberUpdated(ev.id);
});

bthread(`HLS PASSIVE: add NotificationsAllRead`, function () {
  const ev = waitFor({op: 'add', entity: 'NotificationsAllRead'});
  block({op: 'deleteNotificationsAllRead'});
  verifyNotificationsAllReadExists(ev.id);
});

bthread(`HLS PASSIVE: update NotificationsByIdNotification`, function () {
  const ev = waitFor({op: 'update', entity: 'NotificationsByIdNotification'});
  block({op: 'updateNotificationsByIdNotification'});
  verifyNotificationsByIdNotificationExists(ev.id);
  verifyNotificationsByIdNotificationUpdated(ev.id);
});

bthread(`HLS PASSIVE: update NotificationsUnreadByIdNotification`, function () {
  const ev = waitFor({op: 'update', entity: 'NotificationsUnreadByIdNotification'});
  block({op: 'updateNotificationsUnreadByIdNotification'});
  verifyNotificationsUnreadByIdNotificationExists(ev.id);
  verifyNotificationsUnreadByIdNotificationUpdated(ev.id);
});

bthread(`HLS PASSIVE: update OrganizationsDescByIdOrg`, function () {
  const ev = waitFor({op: 'update', entity: 'OrganizationsDescByIdOrg'});
  block({op: 'updateOrganizationsDescByIdOrg'});
  verifyOrganizationsDescByIdOrgExists(ev.id);
  verifyOrganizationsDescByIdOrgUpdated(ev.id);
});

bthread(`HLS PASSIVE: add OrganizationsLogoByIdOrg`, function () {
  const ev = waitFor({op: 'add', entity: 'OrganizationsLogoByIdOrg'});
  block({op: 'deleteOrganizationsLogoByIdOrg'});
  verifyOrganizationsLogoByIdOrgExists(ev.id);
});

bthread(`HLS PASSIVE: delete OrganizationsMembersByIdOrgByIdMember`, function () {
  const ev = waitFor({op: 'delete', entity: 'OrganizationsMembersByIdOrgByIdMember'});
  block({op: 'addOrganizationsMembersByIdOrgByIdMember'});
  verifyOrganizationsMembersByIdOrgByIdMemberNotExists(ev.id);
});

bthread(`HLS PASSIVE: update OrganizationsNameByIdOrg`, function () {
  const ev = waitFor({op: 'update', entity: 'OrganizationsNameByIdOrg'});
  block({op: 'updateOrganizationsNameByIdOrg'});
  verifyOrganizationsNameByIdOrgExists(ev.id);
  verifyOrganizationsNameByIdOrgUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete OrganizationsPrefsAssociatedDomainByIdOrg`, function () {
  const ev = waitFor({op: 'delete', entity: 'OrganizationsPrefsAssociatedDomainByIdOrg'});
  block({op: 'addOrganizationsPrefsAssociatedDomainByIdOrg'});
  verifyOrganizationsPrefsAssociatedDomainByIdOrgNotExists(ev.id);
});

bthread(`HLS PASSIVE: add Sessions`, function () {
  const ev = waitFor({op: 'add', entity: 'Sessions'});
  block({op: 'deleteSessions'});
  verifySessionsExists(ev.id);
});

bthread(`HLS PASSIVE: update SessionsByIdSession`, function () {
  const ev = waitFor({op: 'update', entity: 'SessionsByIdSession'});
  block({op: 'updateSessionsByIdSession'});
  verifySessionsByIdSessionExists(ev.id);
  verifySessionsByIdSessionUpdated(ev.id);
});

bthread(`HLS PASSIVE: update SessionsStatusByIdSession`, function () {
  const ev = waitFor({op: 'update', entity: 'SessionsStatusByIdSession'});
  block({op: 'updateSessionsStatusByIdSession'});
  verifySessionsStatusByIdSessionExists(ev.id);
  verifySessionsStatusByIdSessionUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete TokensByToken`, function () {
  const ev = waitFor({op: 'delete', entity: 'TokensByToken'});
  block({op: 'addTokensByToken'});
  verifyTokensByTokenNotExists(ev.id);
});

bthread(`HLS PASSIVE: add TokensWebhooksByToken`, function () {
  const ev = waitFor({op: 'add', entity: 'TokensWebhooksByToken'});
  block({op: 'deleteTokensWebhooksByToken'});
  verifyTokensWebhooksByTokenExists(ev.id);
});

bthread(`HLS PASSIVE: update TokensWebhooksByToken`, function () {
  const ev = waitFor({op: 'update', entity: 'TokensWebhooksByToken'});
  block({op: 'updateTokensWebhooksByToken'});
  verifyTokensWebhooksByTokenExists(ev.id);
  verifyTokensWebhooksByTokenUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete TokensWebhooksByTokenByIdWebhook`, function () {
  const ev = waitFor({op: 'delete', entity: 'TokensWebhooksByTokenByIdWebhook'});
  block({op: 'addTokensWebhooksByTokenByIdWebhook'});
  verifyTokensWebhooksByTokenByIdWebhookNotExists(ev.id);
});

bthread(`HLS PASSIVE: add Webhooks`, function () {
  const ev = waitFor({op: 'add', entity: 'Webhooks'});
  block({op: 'deleteWebhooks'});
  verifyWebhooksExists(ev.id);
});

bthread(`HLS PASSIVE: update Webhooks`, function () {
  const ev = waitFor({op: 'update', entity: 'Webhooks'});
  block({op: 'updateWebhooks'});
  verifyWebhooksExists(ev.id);
  verifyWebhooksUpdated(ev.id);
});

bthread(`HLS PASSIVE: update WebhooksActiveByIdWebhook`, function () {
  const ev = waitFor({op: 'update', entity: 'WebhooksActiveByIdWebhook'});
  block({op: 'updateWebhooksActiveByIdWebhook'});
  verifyWebhooksActiveByIdWebhookExists(ev.id);
  verifyWebhooksActiveByIdWebhookUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete WebhooksByIdWebhook`, function () {
  const ev = waitFor({op: 'delete', entity: 'WebhooksByIdWebhook'});
  block({op: 'addWebhooksByIdWebhook'});
  verifyWebhooksByIdWebhookNotExists(ev.id);
});

