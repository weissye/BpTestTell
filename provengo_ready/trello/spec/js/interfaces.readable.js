//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://localhost:8080", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: board ----

function addBoards(idBoard) {
  var url = "/boards";
  var description = "Create board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBoardsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard;
  var description = "Get board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard;
  var description = "Update board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBoard(idBoard) {
  return addBoards(idBoard);
}

function verifyBoardExists(idBoard) {
  return getBoardsByIdBoard(idBoard);
}

function verifyBoardDoesNotExist(idBoard) {
  return getBoardsByIdBoard(idBoard);
}

// ---- Entity: board checklist ----

function addBoardsChecklistsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/checklists";
  var description = "Add checklist to board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBoardsChecklistsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/checklists";
  var description = "Get checklists of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBoardChecklist(idBoard) {
  return addBoardsChecklistsByIdBoard(idBoard);
}

function verifyBoardChecklistExists(idBoard) {
  return getBoardsChecklistsByIdBoard(idBoard);
}

function verifyBoardChecklistDoesNotExist(idBoard) {
  return getBoardsChecklistsByIdBoard(idBoard);
}

// ---- Entity: board card ----

function getBoardsCardsByIdBoardByIdCard(idBoard, idCard) {
  var url = "/boards/" + idBoard + "/cards/" + idCard;
  var description = "Get card " + idCard + " from board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyBoardCardExists(idBoard, idCard) {
  return getBoardsCardsByIdBoardByIdCard(idBoard, idCard);
}

function verifyBoardCardDoesNotExist(idBoard, idCard) {
  return getBoardsCardsByIdBoardByIdCard(idBoard, idCard);
}

// ---- Entity: board label ----

function addBoardsLabelsByIdBoard(idBoard, idLabel) {
  var url = "/boards/" + idBoard + "/labels";
  var description = "Add label to board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBoardsLabelsByIdBoardByIdLabel(idBoard, idLabel) {
  var url = "/boards/" + idBoard + "/labels/" + idLabel;
  var description = "Get label " + idLabel + " from board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBoardLabel(idBoard, idLabel) {
  return addBoardsLabelsByIdBoard(idBoard, idLabel);
}

function verifyBoardLabelExists(idBoard, idLabel) {
  return getBoardsLabelsByIdBoardByIdLabel(idBoard, idLabel);
}

function verifyBoardLabelDoesNotExist(idBoard, idLabel) {
  return getBoardsLabelsByIdBoardByIdLabel(idBoard, idLabel);
}

// ---- Entity: board list ----

function addBoardsListsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "Add list to board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBoardsListsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "Get lists of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBoardList(idBoard) {
  return addBoardsListsByIdBoard(idBoard);
}

function verifyBoardListExists(idBoard) {
  return getBoardsListsByIdBoard(idBoard);
}

function verifyBoardListDoesNotExist(idBoard) {
  return getBoardsListsByIdBoard(idBoard);
}

// ---- Entity: board member ----

function deleteBoardsMembersByIdBoardByIdMember(idBoard, idMember) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "Delete member " + idMember + " from board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMembersByIdBoardByIdMember(idBoard, idMember) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "Update member " + idMember + " on board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingBoardMember(idBoard, idMember) {
  return deleteBoardsMembersByIdBoardByIdMember(idBoard, idMember);
}

// ---- Entity: board membership ----

function getBoardsMembershipsByIdBoardByIdMembership(idBoard, idMembership) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Get membership " + idMembership + " of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMembershipsByIdBoardByIdMembership(idBoard, idMembership) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Update membership " + idMembership + " of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyBoardMembershipExists(idBoard, idMembership) {
  return getBoardsMembershipsByIdBoardByIdMembership(idBoard, idMembership);
}

function verifyBoardMembershipDoesNotExist(idBoard, idMembership) {
  return getBoardsMembershipsByIdBoardByIdMembership(idBoard, idMembership);
}

// ---- Entity: board powerUp ----

function addBoardsPowerUpsByIdBoard(idBoard, powerUp) {
  var url = "/boards/" + idBoard + "/powerUps";
  var description = "Add powerUp to board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBoardsPowerUpsByIdBoardByPowerUp(idBoard, powerUp) {
  var url = "/boards/" + idBoard + "/powerUps/" + powerUp;
  var description = "Delete powerUp " + powerUp + " from board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBoardPowerUp(idBoard, powerUp) {
  return addBoardsPowerUpsByIdBoard(idBoard, powerUp);
}

function tryToDeleteANonExistingBoardPowerUp(idBoard, powerUp) {
  return deleteBoardsPowerUpsByIdBoardByPowerUp(idBoard, powerUp);
}

// ---- Entity: board prefs ----

function updateBoardsPrefsBackgroundByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/background";
  var description = "Update prefs background of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsPrefsCalendarFeedEnabledByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/calendarFeedEnabled";
  var description = "Update prefs calendarFeedEnabled of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsPrefsCardAgingByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/cardAging";
  var description = "Update prefs cardAging of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsPrefsCardCoversByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/cardCovers";
  var description = "Update prefs cardCovers of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsPrefsCommentsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/comments";
  var description = "Update prefs comments of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsPrefsInvitationsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/invitations";
  var description = "Update prefs invitations of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsPrefsPermissionLevelByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/permissionLevel";
  var description = "Update prefs permissionLevel of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsPrefsSelfJoinByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/selfJoin";
  var description = "Update prefs selfJoin of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsPrefsVotingByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/voting";
  var description = "Update prefs voting of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: board subscribed ----

function updateBoardsSubscribedByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/subscribed";
  var description = "Update subscribed status of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: board myPrefs ----

function getBoardsMyPrefsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs";
  var description = "Get myPrefs of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMyPrefsEmailPositionByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/emailPosition";
  var description = "Update myPrefs emailPosition of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMyPrefsIdEmailListByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/idEmailList";
  var description = "Update myPrefs idEmailList of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMyPrefsShowListGuideByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showListGuide";
  var description = "Update myPrefs showListGuide of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMyPrefsShowSidebarByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showSidebar";
  var description = "Update myPrefs showSidebar of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMyPrefsShowSidebarActivityByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showSidebarActivity";
  var description = "Update myPrefs showSidebarActivity of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showSidebarBoardActions";
  var description = "Update myPrefs showSidebarBoardActions of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMyPrefsShowSidebarMembersByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showSidebarMembers";
  var description = "Update myPrefs showSidebarMembers of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyBoardMyPrefsExists(idBoard) {
  return getBoardsMyPrefsByIdBoard(idBoard);
}

function verifyBoardMyPrefsDoesNotExist(idBoard) {
  return getBoardsMyPrefsByIdBoard(idBoard);
}

// ---- Entity: board labelName ----

function updateBoardsLabelNamesBlueByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/labelNames/blue";
  var description = "Update label name blue of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsLabelNamesGreenByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/labelNames/green";
  var description = "Update label name green of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsLabelNamesOrangeByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/labelNames/orange";
  var description = "Update label name orange of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsLabelNamesPurpleByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/labelNames/purple";
  var description = "Update label name purple of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsLabelNamesRedByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/labelNames/red";
  var description = "Update label name red of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsLabelNamesYellowByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/labelNames/yellow";
  var description = "Update label name yellow of board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member ----

function getMemberByIdMember(idMember) {
  var url = "/members/" + idMember;
  var description = "Get member with idMember " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateMemberByIdMember(idMember) {
  var url = "/members/" + idMember;
  var description = "Update member with idMember " + idMember;
  var body = {
    "members": members,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberExists(idMember) {
  return getMemberByIdMember(idMember);
}

function verifyMemberDoesNotExist(idMember) {
  return getMemberByIdMember(idMember);
}

// ---- Entity: member avatar ----

function addMemberAvatarByIdMember(idMember) {
  var url = "/members/" + idMember + "/avatar";
  var description = "Add avatar for member " + idMember;
  var body = {
    "members_avatar": members_avatar,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMemberAvatar(idMember) {
  return addMemberAvatarByIdMember(idMember);
}

// ---- Entity: member avatar source ----

function updateMemberAvatarSourceByIdMember(idMember) {
  var url = "/members/" + idMember + "/avatarSource";
  var description = "Update avatar source for member " + idMember;
  var body = {
    "members_avatarSource": members_avatarSource,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member bio ----

function updateMemberBioByIdMember(idMember) {
  var url = "/members/" + idMember + "/bio";
  var description = "Update bio for member " + idMember;
  var body = {
    "members_bio": members_bio,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member board background ----

function getMemberBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Get board background " + idBoardBackground + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addMemberBoardBackgroundByIdMember(idMember, idBoardBackground) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "Add board background for member " + idMember;
  var body = {
    "members_boardBackgrounds": members_boardBackgrounds,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateMemberBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Update board background " + idBoardBackground + " for member " + idMember;
  var body = {
    "members_boardBackgrounds": members_boardBackgrounds,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteMemberBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Delete board background " + idBoardBackground + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMemberBoardBackground(idMember, idBoardBackground) {
  return addMemberBoardBackgroundByIdMember(idMember, idBoardBackground);
}

function verifyMemberBoardBackgroundExists(idMember, idBoardBackground) {
  return getMemberBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground);
}

function verifyMemberBoardBackgroundDoesNotExist(idMember, idBoardBackground) {
  return getMemberBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground);
}

function tryToDeleteANonExistingMemberBoardBackground(idMember, idBoardBackground) {
  return deleteMemberBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground);
}

// ---- Entity: member board star ----

function getMemberBoardStarByIdMemberByIdBoardStar(idMember, idBoardStar) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Get board star " + idBoardStar + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addMemberBoardStarByIdMember(idMember, idBoardStar) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "Add board star for member " + idMember;
  var body = {
    "members_boardStars": members_boardStars,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateMemberBoardStarByIdMemberByIdBoardStar(idMember, idBoardStar) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Update board star " + idBoardStar + " for member " + idMember;
  var body = {
    "members_boardStars": members_boardStars,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteMemberBoardStarByIdMemberByIdBoardStar(idMember, idBoardStar) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Delete board star " + idBoardStar + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMemberBoardStar(idMember, idBoardStar) {
  return addMemberBoardStarByIdMember(idMember, idBoardStar);
}

function verifyMemberBoardStarExists(idMember, idBoardStar) {
  return getMemberBoardStarByIdMemberByIdBoardStar(idMember, idBoardStar);
}

function verifyMemberBoardStarDoesNotExist(idMember, idBoardStar) {
  return getMemberBoardStarByIdMemberByIdBoardStar(idMember, idBoardStar);
}

function tryToDeleteANonExistingMemberBoardStar(idMember, idBoardStar) {
  return deleteMemberBoardStarByIdMemberByIdBoardStar(idMember, idBoardStar);
}

// ---- Entity: member board star idBoard ----

function updateMemberBoardStarIdBoardByIdMemberByIdBoardStar(idMember, idBoardStar) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar + "/idBoard";
  var description = "Update board star idBoard for board star " + idBoardStar + " and member " + idMember;
  var body = {
    "members_boardStars_idBoard": members_boardStars_idBoard,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member board star pos ----

function updateMemberBoardStarPosByIdMemberByIdBoardStar(idMember, idBoardStar) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar + "/pos";
  var description = "Update board star pos for board star " + idBoardStar + " and member " + idMember;
  var body = {
    "members_boardStars_pos": members_boardStars_pos,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member board ----

function getMemberBoardsByIdMember(idMember) {
  var url = "/members/" + idMember + "/boards";
  var description = "Get boards for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberBoardExists(idMember) {
  return getMemberBoardsByIdMember(idMember);
}

function verifyMemberBoardDoesNotExist(idMember) {
  return getMemberBoardsByIdMember(idMember);
}

// ---- Entity: member board by filter ----

function getMemberBoardsByIdMemberByFilter(idMember, filter) {
  var url = "/members/" + idMember + "/boards/" + filter;
  var description = "Get boards with filter " + filter + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberBoardByFilterExists(idMember, filter) {
  return getMemberBoardsByIdMemberByFilter(idMember, filter);
}

function verifyMemberBoardByFilterDoesNotExist(idMember, filter) {
  return getMemberBoardsByIdMemberByFilter(idMember, filter);
}

// ---- Entity: member boards invited ----

function getMemberBoardsInvitedByIdMember(idMember) {
  var url = "/members/" + idMember + "/boardsInvited";
  var description = "Get invited boards for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberBoardsInvitedExists(idMember) {
  return getMemberBoardsInvitedByIdMember(idMember);
}

function verifyMemberBoardsInvitedDoesNotExist(idMember) {
  return getMemberBoardsInvitedByIdMember(idMember);
}

// ---- Entity: member boards invited by field ----

function getMemberBoardsInvitedByIdMemberByField(idMember, field) {
  var url = "/members/" + idMember + "/boardsInvited/" + field;
  var description = "Get invited boards field " + field + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberBoardsInvitedByFieldExists(idMember, field) {
  return getMemberBoardsInvitedByIdMemberByField(idMember, field);
}

function verifyMemberBoardsInvitedByFieldDoesNotExist(idMember, field) {
  return getMemberBoardsInvitedByIdMemberByField(idMember, field);
}

// ---- Entity: member card ----

function getMemberCardsByIdMember(idMember) {
  var url = "/members/" + idMember + "/cards";
  var description = "Get cards for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberCardExists(idMember) {
  return getMemberCardsByIdMember(idMember);
}

function verifyMemberCardDoesNotExist(idMember) {
  return getMemberCardsByIdMember(idMember);
}

// ---- Entity: member card by filter ----

function getMemberCardsByIdMemberByFilter(idMember, filter) {
  var url = "/members/" + idMember + "/cards/" + filter;
  var description = "Get cards with filter " + filter + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberCardByFilterExists(idMember, filter) {
  return getMemberCardsByIdMemberByFilter(idMember, filter);
}

function verifyMemberCardByFilterDoesNotExist(idMember, filter) {
  return getMemberCardsByIdMemberByFilter(idMember, filter);
}

// ---- Entity: member custom board background ----

function getMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Get custom board background " + idBoardBackground + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addMemberCustomBoardBackgroundByIdMember(idMember, idBoardBackground) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "Add custom board background for member " + idMember;
  var body = {
    "members_customBoardBackgrounds": members_customBoardBackgrounds,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Update custom board background " + idBoardBackground + " for member " + idMember;
  var body = {
    "members_customBoardBackgrounds": members_customBoardBackgrounds,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Delete custom board background " + idBoardBackground + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMemberCustomBoardBackground(idMember, idBoardBackground) {
  return addMemberCustomBoardBackgroundByIdMember(idMember, idBoardBackground);
}

function verifyMemberCustomBoardBackgroundExists(idMember, idBoardBackground) {
  return getMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground);
}

function verifyMemberCustomBoardBackgroundDoesNotExist(idMember, idBoardBackground) {
  return getMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground);
}

function tryToDeleteANonExistingMemberCustomBoardBackground(idMember, idBoardBackground) {
  return deleteMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(idMember, idBoardBackground);
}

// ---- Entity: member custom emoji ----

function getMemberCustomEmojiByIdMemberByIdCustomEmoji(idMember, idCustomEmoji) {
  var url = "/members/" + idMember + "/customEmoji/" + idCustomEmoji;
  var description = "Get custom emoji " + idCustomEmoji + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addMemberCustomEmojiByIdMember(idMember, idCustomEmoji) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "Add custom emoji for member " + idMember;
  var body = {
    "members_customEmoji": members_customEmoji,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMemberCustomEmoji(idMember, idCustomEmoji) {
  return addMemberCustomEmojiByIdMember(idMember, idCustomEmoji);
}

function verifyMemberCustomEmojiExists(idMember, idCustomEmoji) {
  return getMemberCustomEmojiByIdMemberByIdCustomEmoji(idMember, idCustomEmoji);
}

function verifyMemberCustomEmojiDoesNotExist(idMember, idCustomEmoji) {
  return getMemberCustomEmojiByIdMemberByIdCustomEmoji(idMember, idCustomEmoji);
}

// ---- Entity: member custom sticker ----

function getMemberCustomStickerByIdMemberByIdCustomSticker(idMember, idCustomSticker) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Get custom sticker " + idCustomSticker + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addMemberCustomStickerByIdMember(idMember, idCustomSticker) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Add custom sticker for member " + idMember;
  var body = {
    "members_customStickers": members_customStickers,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteMemberCustomStickerByIdMemberByIdCustomSticker(idMember, idCustomSticker) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Delete custom sticker " + idCustomSticker + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMemberCustomSticker(idMember, idCustomSticker) {
  return addMemberCustomStickerByIdMember(idMember, idCustomSticker);
}

function verifyMemberCustomStickerExists(idMember, idCustomSticker) {
  return getMemberCustomStickerByIdMemberByIdCustomSticker(idMember, idCustomSticker);
}

function verifyMemberCustomStickerDoesNotExist(idMember, idCustomSticker) {
  return getMemberCustomStickerByIdMemberByIdCustomSticker(idMember, idCustomSticker);
}

function tryToDeleteANonExistingMemberCustomSticker(idMember, idCustomSticker) {
  return deleteMemberCustomStickerByIdMemberByIdCustomSticker(idMember, idCustomSticker);
}

// ---- Entity: member delta ----

function getMemberDeltasByIdMember(idMember, tags, ixLastUpdate) {
  var url = "/members/" + idMember + "/deltas";
  var description = "Get deltas for member " + idMember + " with tags " + tags + " and last update index " + ixLastUpdate;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberDeltaExists(idMember, tags, ixLastUpdate) {
  return getMemberDeltasByIdMember(idMember, tags, ixLastUpdate);
}

function verifyMemberDeltaDoesNotExist(idMember, tags, ixLastUpdate) {
  return getMemberDeltasByIdMember(idMember, tags, ixLastUpdate);
}

// ---- Entity: member full name ----

function updateMemberFullNameByIdMember(idMember) {
  var url = "/members/" + idMember + "/fullName";
  var description = "Update full name for member " + idMember;
  var body = {
    "members_fullName": members_fullName,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member initials ----

function updateMemberInitialsByIdMember(idMember) {
  var url = "/members/" + idMember + "/initials";
  var description = "Update initials for member " + idMember;
  var body = {
    "members_initials": members_initials,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member notification ----

function getMemberNotificationsByIdMember(idMember) {
  var url = "/members/" + idMember + "/notifications";
  var description = "Get notifications for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberNotificationExists(idMember) {
  return getMemberNotificationsByIdMember(idMember);
}

function verifyMemberNotificationDoesNotExist(idMember) {
  return getMemberNotificationsByIdMember(idMember);
}

// ---- Entity: member notification by filter ----

function getMemberNotificationsByIdMemberByFilter(idMember, filter) {
  var url = "/members/" + idMember + "/notifications/" + filter;
  var description = "Get notifications with filter " + filter + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberNotificationByFilterExists(idMember, filter) {
  return getMemberNotificationsByIdMemberByFilter(idMember, filter);
}

function verifyMemberNotificationByFilterDoesNotExist(idMember, filter) {
  return getMemberNotificationsByIdMemberByFilter(idMember, filter);
}

// ---- Entity: member one time messages dismissed ----

function addMemberOneTimeMessagesDismissedByIdMember(idMember) {
  var url = "/members/" + idMember + "/oneTimeMessagesDismissed";
  var description = "Add one time messages dismissed for member " + idMember;
  var body = {
    "members_oneTimeMessagesDismissed": members_oneTimeMessagesDismissed,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMemberOneTimeMessagesDismissed(idMember) {
  return addMemberOneTimeMessagesDismissedByIdMember(idMember);
}

// ---- Entity: member organization ----

function getMemberOrganizationsByIdMember(idMember) {
  var url = "/members/" + idMember + "/organizations";
  var description = "Get organizations for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberOrganizationExists(idMember) {
  return getMemberOrganizationsByIdMember(idMember);
}

function verifyMemberOrganizationDoesNotExist(idMember) {
  return getMemberOrganizationsByIdMember(idMember);
}

// ---- Entity: member organization by filter ----

function getMemberOrganizationsByIdMemberByFilter(idMember, filter) {
  var url = "/members/" + idMember + "/organizations/" + filter;
  var description = "Get organizations with filter " + filter + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberOrganizationByFilterExists(idMember, filter) {
  return getMemberOrganizationsByIdMemberByFilter(idMember, filter);
}

function verifyMemberOrganizationByFilterDoesNotExist(idMember, filter) {
  return getMemberOrganizationsByIdMemberByFilter(idMember, filter);
}

// ---- Entity: member organizations invited ----

function getMemberOrganizationsInvitedByIdMember(idMember) {
  var url = "/members/" + idMember + "/organizationsInvited";
  var description = "Get invited organizations for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberOrganizationsInvitedExists(idMember) {
  return getMemberOrganizationsInvitedByIdMember(idMember);
}

function verifyMemberOrganizationsInvitedDoesNotExist(idMember) {
  return getMemberOrganizationsInvitedByIdMember(idMember);
}

// ---- Entity: member organizations invited by field ----

function getMemberOrganizationsInvitedByIdMemberByField(idMember, field) {
  var url = "/members/" + idMember + "/organizationsInvited/" + field;
  var description = "Get invited organizations field " + field + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberOrganizationsInvitedByFieldExists(idMember, field) {
  return getMemberOrganizationsInvitedByIdMemberByField(idMember, field);
}

function verifyMemberOrganizationsInvitedByFieldDoesNotExist(idMember, field) {
  return getMemberOrganizationsInvitedByIdMemberByField(idMember, field);
}

// ---- Entity: member prefs color blind ----

function updateMemberPrefsColorBlindByIdMember(idMember) {
  var url = "/members/" + idMember + "/prefs/colorBlind";
  var description = "Update prefs color blind for member " + idMember;
  var body = {
    "prefs_colorBlind": prefs_colorBlind,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member prefs locale ----

function updateMemberPrefsLocaleByIdMember(idMember) {
  var url = "/members/" + idMember + "/prefs/locale";
  var description = "Update prefs locale for member " + idMember;
  var body = {
    "prefs_locale": prefs_locale,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member prefs minutes between summaries ----

function updateMemberPrefsMinutesBetweenSummariesByIdMember(idMember) {
  var url = "/members/" + idMember + "/prefs/minutesBetweenSummaries";
  var description = "Update prefs minutes between summaries for member " + idMember;
  var body = {
    "prefs_minutesBetweenSummaries": prefs_minutesBetweenSummaries,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member saved search ----

function getMemberSavedSearchByIdMemberByIdSavedSearch(idMember, idSavedSearch) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "Get saved search " + idSavedSearch + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addMemberSavedSearchByIdMember(idMember, idSavedSearch) {
  var url = "/members/" + idMember + "/savedSearches";
  var description = "Add saved search for member " + idMember;
  var body = {
    "members_savedSearches": members_savedSearches,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateMemberSavedSearchByIdMemberByIdSavedSearch(idMember, idSavedSearch) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "Update saved search " + idSavedSearch + " for member " + idMember;
  var body = {
    "members_savedSearches": members_savedSearches,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteMemberSavedSearchByIdMemberByIdSavedSearch(idMember, idSavedSearch) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "Delete saved search " + idSavedSearch + " for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMemberSavedSearch(idMember, idSavedSearch) {
  return addMemberSavedSearchByIdMember(idMember, idSavedSearch);
}

function verifyMemberSavedSearchExists(idMember, idSavedSearch) {
  return getMemberSavedSearchByIdMemberByIdSavedSearch(idMember, idSavedSearch);
}

function verifyMemberSavedSearchDoesNotExist(idMember, idSavedSearch) {
  return getMemberSavedSearchByIdMemberByIdSavedSearch(idMember, idSavedSearch);
}

function tryToDeleteANonExistingMemberSavedSearch(idMember, idSavedSearch) {
  return deleteMemberSavedSearchByIdMemberByIdSavedSearch(idMember, idSavedSearch);
}

// ---- Entity: member saved search name ----

function updateMemberSavedSearchNameByIdMemberByIdSavedSearch(idMember, idSavedSearch) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch + "/name";
  var description = "Update name of saved search " + idSavedSearch + " for member " + idMember;
  var body = {
    "members_savedSearches_name": members_savedSearches_name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member saved search pos ----

function updateMemberSavedSearchPosByIdMemberByIdSavedSearch(idMember, idSavedSearch) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch + "/pos";
  var description = "Update position of saved search " + idSavedSearch + " for member " + idMember;
  var body = {
    "members_savedSearches_pos": members_savedSearches_pos,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member saved search query ----

function updateMemberSavedSearchQueryByIdMemberByIdSavedSearch(idMember, idSavedSearch) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch + "/query";
  var description = "Update query of saved search " + idSavedSearch + " for member " + idMember;
  var body = {
    "members_savedSearches_query": members_savedSearches_query,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: member token ----

function getMemberTokensByIdMember(idMember) {
  var url = "/members/" + idMember + "/tokens";
  var description = "Get tokens for member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMemberTokenExists(idMember) {
  return getMemberTokensByIdMember(idMember);
}

function verifyMemberTokenDoesNotExist(idMember) {
  return getMemberTokensByIdMember(idMember);
}

// ---- Entity: member username ----

function updateMemberUsernameByIdMember(idMember) {
  var url = "/members/" + idMember + "/username";
  var description = "Update username for member " + idMember;
  var body = {
    "members_username": members_username,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: card ----

function addCards(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields) {
  var url = "/cards";
  var description = "Create card with id " + idCard;
  var body = {
    "/* card attributes per schema cards */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsByIdCard(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields) {
  var url = "/cards/" + idCard;
  var description = "Delete card with id " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsByIdCard(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields) {
  var url = "/cards/" + idCard;
  var description = "Update card with id " + idCard;
  var body = {
    "/* card attributes per schema cards */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCardsByIdCard(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields) {
  var url = "/cards/" + idCard;
  var description = "Get card with id " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCard(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields) {
  return addCards(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields);
}

function verifyCardExists(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields) {
  return getCardsByIdCard(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields);
}

function verifyCardDoesNotExist(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields) {
  return getCardsByIdCard(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields);
}

function tryToDeleteANonExistingCard(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields) {
  return deleteCardsByIdCard(key, token, idCard, actions, actions_entities, actions_display, actions_limit, action_fields, action_memberCreator_fields, attachments, attachment_fields, members, member_fields, membersVoted, memberVoted_fields, checkItemStates, checkItemState_fields, checklists, checklist_fields, board, board_fields, list, list_fields, stickers, sticker_fields, fields);
}

// ---- Entity: card action comment ----

function addCardsActionsCommentsByIdCard(idCard, key, token, idAction) {
  var url = "/cards/" + idCard + "/actions/comments";
  var description = "Add comment action to card " + idCard;
  var body = {
    "/* attributes per schema actions_comments */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsActionsCommentsByIdCardByIdAction(idCard, key, token, idAction) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "Delete comment action " + idAction + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsActionsCommentsByIdCardByIdAction(idCard, key, token, idAction) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "Update comment action " + idAction + " on card " + idCard;
  var body = {
    "/* attributes per schema cards_actions_comments */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardActionComment(idCard, key, token, idAction) {
  return addCardsActionsCommentsByIdCard(idCard, key, token, idAction);
}

function tryToDeleteANonExistingCardActionComment(idCard, key, token, idAction) {
  return deleteCardsActionsCommentsByIdCardByIdAction(idCard, key, token, idAction);
}

// ---- Entity: card attachment ----

function addCardsAttachmentsByIdCard(idCard, key, token, idAttachment, fields, filter) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Add attachment to card " + idCard;
  var body = {
    "/* attributes per schema cards_attachments */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsAttachmentsByIdCardByIdAttachment(idCard, key, token, idAttachment, fields, filter) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Delete attachment " + idAttachment + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCardsAttachmentsByIdCardByIdAttachment(idCard, key, token, idAttachment, fields, filter) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Get attachment " + idAttachment + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCardsAttachmentsByIdCard(idCard, key, token, idAttachment, fields, filter) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Get attachments for card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardAttachment(idCard, key, token, idAttachment, fields, filter) {
  return addCardsAttachmentsByIdCard(idCard, key, token, idAttachment, fields, filter);
}

function verifyCardAttachmentExists(idCard, key, token, idAttachment, fields, filter) {
  return getCardsAttachmentsByIdCardByIdAttachment(idCard, key, token, idAttachment, fields, filter);
}

function verifyCardAttachmentDoesNotExist(idCard, key, token, idAttachment, fields, filter) {
  return getCardsAttachmentsByIdCardByIdAttachment(idCard, key, token, idAttachment, fields, filter);
}

function tryToDeleteANonExistingCardAttachment(idCard, key, token, idAttachment, fields, filter) {
  return deleteCardsAttachmentsByIdCardByIdAttachment(idCard, key, token, idAttachment, fields, filter);
}

// ---- Entity: card board ----

function getCardsBoardByIdCard(idCard, fields, key, token, field) {
  var url = "/cards/" + idCard + "/board";
  var description = "Get board for card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCardsBoardByIdCardByField(idCard, fields, key, token, field) {
  var url = "/cards/" + idCard + "/board/" + field;
  var description = "Get board field " + field + " for card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCardBoardExists(idCard, fields, key, token, field) {
  return getCardsBoardByIdCard(idCard, fields, key, token, field);
}

function verifyCardBoardDoesNotExist(idCard, fields, key, token, field) {
  return getCardsBoardByIdCard(idCard, fields, key, token, field);
}

// ---- Entity: card check item state ----

function getCardsCheckItemStatesByIdCard(idCard, fields, key, token) {
  var url = "/cards/" + idCard + "/checkItemStates";
  var description = "Get check item states for card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCardCheckItemStateExists(idCard, fields, key, token) {
  return getCardsCheckItemStatesByIdCard(idCard, fields, key, token);
}

function verifyCardCheckItemStateDoesNotExist(idCard, fields, key, token) {
  return getCardsCheckItemStatesByIdCard(idCard, fields, key, token);
}

// ---- Entity: card checklist check item ----

function addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem";
  var description = "Add check item to checklist " + idChecklist + " on card " + idCard;
  var body = {
    "/* attributes per schema cards_checklist_checkItem */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem;
  var description = "Delete check item " + idCheckItem + " from checklist " + idChecklist + " on card " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklistCurrent + "/checkItem/" + idCheckItem;
  var description = "Update check item " + idCheckItem + " in checklist " + idChecklistCurrent + " on card " + idCard;
  var body = {
    "/* attributes per schema cards_checklist_idChecklistCurrent_checkItem */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/name";
  var description = "Update name of check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard;
  var body = {
    "/* attributes per schema cards_checklist_checkItem_name */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/pos";
  var description = "Update position of check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard;
  var body = {
    "/* attributes per schema cards_checklist_checkItem_pos */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/state";
  var description = "Update state of check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard;
  var body = {
    "/* attributes per schema cards_checklist_checkItem_state */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/convertToCard";
  var description = "Convert check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard + " to card";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardChecklistCheckItem(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent) {
  return addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent);
}

function tryToDeleteANonExistingCardChecklistCheckItem(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent) {
  return deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idChecklist, key, token, idCheckItem, idChecklistCurrent);
}

// ---- Entity: card checklist ----

function addCardsChecklistsByIdCard(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Add checklist to card " + idCard;
  var body = {
    "/* attributes per schema cards_checklists */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsChecklistsByIdCardByIdChecklist(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields) {
  var url = "/cards/" + idCard + "/checklists/" + idChecklist;
  var description = "Delete checklist " + idChecklist + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCardsChecklistsByIdCard(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Get checklists for card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardChecklist(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields) {
  return addCardsChecklistsByIdCard(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields);
}

function verifyCardChecklistExists(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields) {
  return getCardsChecklistsByIdCard(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields);
}

function verifyCardChecklistDoesNotExist(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields) {
  return getCardsChecklistsByIdCard(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields);
}

function tryToDeleteANonExistingCardChecklist(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields) {
  return deleteCardsChecklistsByIdCardByIdChecklist(idCard, key, token, idChecklist, cards, card_fields, checkItems, checkItem_fields, filter, fields);
}

// ---- Entity: card closed ----

function updateCardsClosedByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/closed";
  var description = "Update closed status of card " + idCard;
  var body = {
    "/* attributes per schema cards_closed */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: card description ----

function updateCardsDescByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/desc";
  var description = "Update description of card " + idCard;
  var body = {
    "/* attributes per schema cards_desc */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: card due ----

function updateCardsDueByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/due";
  var description = "Update due date of card " + idCard;
  var body = {
    "/* attributes per schema cards_due */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: card attachment cover ----

function updateCardsIdAttachmentCoverByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/idAttachmentCover";
  var description = "Update attachment cover of card " + idCard;
  var body = {
    "/* attributes per schema cards_idAttachmentCover */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: card board id ----

function updateCardsIdBoardByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/idBoard";
  var description = "Update board id of card " + idCard;
  var body = {
    "/* attributes per schema cards_idBoard */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: card label ----

function addCardsIdLabelsByIdCard(idCard, key, token, idLabel, color) {
  var url = "/cards/" + idCard + "/idLabels";
  var description = "Add label to card " + idCard;
  var body = {
    "/* attributes per schema cards_idLabels */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsIdLabelsByIdCardByIdLabel(idCard, key, token, idLabel, color) {
  var url = "/cards/" + idCard + "/idLabels/" + idLabel;
  var description = "Delete label " + idLabel + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsLabelsByIdCardByColor(idCard, key, token, idLabel, color) {
  var url = "/cards/" + idCard + "/labels/" + color;
  var description = "Delete label with color " + color + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsLabelsByIdCard(idCard, key, token, idLabel, color) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Update labels of card " + idCard;
  var body = {
    "/* attributes per schema cards_labels */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardIdLabels(idCard, key, token, idLabel, color) {
  return addCardsIdLabelsByIdCard(idCard, key, token, idLabel, color);
}

function tryToDeleteANonExistingCardIdLabels(idCard, key, token, idLabel, color) {
  return deleteCardsIdLabelsByIdCardByIdLabel(idCard, key, token, idLabel, color);
}

// ---- Entity: card list id ----

function updateCardsIdListByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/idList";
  var description = "Update list id of card " + idCard;
  var body = {
    "/* attributes per schema cards_idList */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: card member ----

function addCardsIdMembersByIdCard(idCard, key, token, idMember) {
  var url = "/cards/" + idCard + "/idMembers";
  var description = "Add member to card " + idCard;
  var body = {
    "/* attributes per schema cards_idMembers */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsIdMembersByIdCard(idCard, key, token, idMember) {
  var url = "/cards/" + idCard + "/idMembers";
  var description = "Update members of card " + idCard;
  var body = {
    "/* attributes per schema cards_idMembers */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsIdMembersByIdCardByIdMember(idCard, key, token, idMember) {
  var url = "/cards/" + idCard + "/idMembers/" + idMember;
  var description = "Delete member " + idMember + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardIdMembers(idCard, key, token, idMember) {
  return addCardsIdMembersByIdCard(idCard, key, token, idMember);
}

function tryToDeleteANonExistingCardIdMembers(idCard, key, token, idMember) {
  return deleteCardsIdMembersByIdCardByIdMember(idCard, key, token, idMember);
}

// ---- Entity: card label ----

function addCardsLabelsByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Add label to card " + idCard;
  var body = {
    "/* attributes per schema cards_labels */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsLabelsByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Update labels of card " + idCard;
  var body = {
    "/* attributes per schema cards_labels */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardLabel(idCard, key, token) {
  return addCardsLabelsByIdCard(idCard, key, token);
}

// ---- Entity: card list ----

function getCardsListByIdCard(idCard, fields, key, token, field) {
  var url = "/cards/" + idCard + "/list";
  var description = "Get list for card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCardsListByIdCardByField(idCard, fields, key, token, field) {
  var url = "/cards/" + idCard + "/list/" + field;
  var description = "Get list field " + field + " for card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCardListExists(idCard, fields, key, token, field) {
  return getCardsListByIdCard(idCard, fields, key, token, field);
}

function verifyCardListDoesNotExist(idCard, fields, key, token, field) {
  return getCardsListByIdCard(idCard, fields, key, token, field);
}

// ---- Entity: card mark associated notifications read ----

function addCardsMarkAssociatedNotificationsReadByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/markAssociatedNotificationsRead";
  var description = "Mark associated notifications read for card " + idCard;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardMarkAssociatedNotificationsRead(idCard, key, token) {
  return addCardsMarkAssociatedNotificationsReadByIdCard(idCard, key, token);
}

// ---- Entity: card member ----

function getCardsMembersByIdCard(idCard, fields, key, token) {
  var url = "/cards/" + idCard + "/members";
  var description = "Get members of card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCardMemberExists(idCard, fields, key, token) {
  return getCardsMembersByIdCard(idCard, fields, key, token);
}

function verifyCardMemberDoesNotExist(idCard, fields, key, token) {
  return getCardsMembersByIdCard(idCard, fields, key, token);
}

// ---- Entity: card member voted ----

function getCardsMembersVotedByIdCard(idCard, fields, key, token, idMember) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Get members voted on card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addCardsMembersVotedByIdCard(idCard, fields, key, token, idMember) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Add member voted on card " + idCard;
  var body = {
    "/* attributes per schema cards_membersVoted */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsMembersVotedByIdCardByIdMember(idCard, fields, key, token, idMember) {
  var url = "/cards/" + idCard + "/membersVoted/" + idMember;
  var description = "Delete member voted " + idMember + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardMemberVoted(idCard, fields, key, token, idMember) {
  return addCardsMembersVotedByIdCard(idCard, fields, key, token, idMember);
}

function verifyCardMemberVotedExists(idCard, fields, key, token, idMember) {
  return getCardsMembersVotedByIdCard(idCard, fields, key, token, idMember);
}

function verifyCardMemberVotedDoesNotExist(idCard, fields, key, token, idMember) {
  return getCardsMembersVotedByIdCard(idCard, fields, key, token, idMember);
}

function tryToDeleteANonExistingCardMemberVoted(idCard, fields, key, token, idMember) {
  return deleteCardsMembersVotedByIdCardByIdMember(idCard, fields, key, token, idMember);
}

// ---- Entity: card name ----

function updateCardsNameByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/name";
  var description = "Update name of card " + idCard;
  var body = {
    "/* attributes per schema cards_name */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: card position ----

function updateCardsPosByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/pos";
  var description = "Update position of card " + idCard;
  var body = {
    "/* attributes per schema cards_pos */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: card sticker ----

function addCardsStickersByIdCard(idCard, key, token, idSticker, fields) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Add sticker to card " + idCard;
  var body = {
    "/* attributes per schema cards_stickers */": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCardsStickersByIdCardByIdSticker(idCard, key, token, idSticker, fields) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Delete sticker " + idSticker + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCardsStickersByIdCardByIdSticker(idCard, key, token, idSticker, fields) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Get sticker " + idSticker + " from card " + idCard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCardsStickersByIdCardByIdSticker(idCard, key, token, idSticker, fields) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Update sticker " + idSticker + " on card " + idCard;
  var body = {
    "/* attributes per schema cards_stickers */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCardSticker(idCard, key, token, idSticker, fields) {
  return addCardsStickersByIdCard(idCard, key, token, idSticker, fields);
}

function verifyCardStickerExists(idCard, key, token, idSticker, fields) {
  return getCardsStickersByIdCardByIdSticker(idCard, key, token, idSticker, fields);
}

function verifyCardStickerDoesNotExist(idCard, key, token, idSticker, fields) {
  return getCardsStickersByIdCardByIdSticker(idCard, key, token, idSticker, fields);
}

function tryToDeleteANonExistingCardSticker(idCard, key, token, idSticker, fields) {
  return deleteCardsStickersByIdCardByIdSticker(idCard, key, token, idSticker, fields);
}

// ---- Entity: card subscribed ----

function updateCardsSubscribedByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/subscribed";
  var description = "Update subscribed status of card " + idCard;
  var body = {
    "/* attributes per schema cards_subscribed */": ...,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization ----

function addOrganizations(idOrg) {
  var url = "/organizations";
  var description = "Create organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrganizationsByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg;
  var description = "Delete organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrganizationsByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg;
  var description = "Update organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrganizationsByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg;
  var description = "Get organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrganization(idOrg) {
  return addOrganizations(idOrg);
}

function verifyOrganizationExists(idOrg) {
  return getOrganizationsByIdOrg(idOrg);
}

function verifyOrganizationDoesNotExist(idOrg) {
  return getOrganizationsByIdOrg(idOrg);
}

function tryToDeleteANonExistingOrganization(idOrg) {
  return deleteOrganizationsByIdOrg(idOrg);
}

// ---- Entity: organization logo ----

function addOrganizationsLogoByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "Add logo to organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrganizationsLogoByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "Delete logo of organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrganizationLogo(idOrg) {
  return addOrganizationsLogoByIdOrg(idOrg);
}

function tryToDeleteANonExistingOrganizationLogo(idOrg) {
  return deleteOrganizationsLogoByIdOrg(idOrg);
}

// ---- Entity: organization members ----

function getOrganizationsMembersByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/members";
  var description = "Get members of organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrganizationsMembersByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/members";
  var description = "Update members of organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationMembersExists(idOrg) {
  return getOrganizationsMembersByIdOrg(idOrg);
}

function verifyOrganizationMembersDoesNotExist(idOrg) {
  return getOrganizationsMembersByIdOrg(idOrg);
}

// ---- Entity: organization member ----

function deleteOrganizationsMembersByIdOrgByIdMember(idOrg, idMember) {
  var url = "/organizations/" + idOrg + "/members/" + idMember;
  var description = "Delete member " + idMember + " from organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrganizationsMembersByIdOrgByIdMember(idOrg, idMember) {
  var url = "/organizations/" + idOrg + "/members/" + idMember;
  var description = "Update member " + idMember + " of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingOrganizationMember(idOrg, idMember) {
  return deleteOrganizationsMembersByIdOrgByIdMember(idOrg, idMember);
}

// ---- Entity: organization member deactivated ----

function updateOrganizationsMembersDeactivatedByIdOrgByIdMember(idOrg, idMember) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/deactivated";
  var description = "Update deactivated status of member " + idMember + " in organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization members invited ----

function getOrganizationsMembersInvitedByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/membersInvited";
  var description = "Get invited members of organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationMembersInvitedExists(idOrg) {
  return getOrganizationsMembersInvitedByIdOrg(idOrg);
}

function verifyOrganizationMembersInvitedDoesNotExist(idOrg) {
  return getOrganizationsMembersInvitedByIdOrg(idOrg);
}

// ---- Entity: organization memberships ----

function getOrganizationsMembershipsByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/memberships";
  var description = "Get memberships of organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationMembershipsExists(idOrg) {
  return getOrganizationsMembershipsByIdOrg(idOrg);
}

function verifyOrganizationMembershipsDoesNotExist(idOrg) {
  return getOrganizationsMembershipsByIdOrg(idOrg);
}

// ---- Entity: organization membership ----

function getOrganizationsMembershipsByIdOrgByIdMembership(idOrg, idMembership) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "Get membership " + idMembership + " of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrganizationsMembershipsByIdOrgByIdMembership(idOrg, idMembership) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "Update membership " + idMembership + " of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationMembershipExists(idOrg, idMembership) {
  return getOrganizationsMembershipsByIdOrgByIdMembership(idOrg, idMembership);
}

function verifyOrganizationMembershipDoesNotExist(idOrg, idMembership) {
  return getOrganizationsMembershipsByIdOrgByIdMembership(idOrg, idMembership);
}

// ---- Entity: organization boards ----

function getOrganizationsBoardsByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/boards";
  var description = "Get boards of organization with idOrg " + idOrg;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationBoardsExists(idOrg) {
  return getOrganizationsBoardsByIdOrg(idOrg);
}

function verifyOrganizationBoardsDoesNotExist(idOrg) {
  return getOrganizationsBoardsByIdOrg(idOrg);
}

// ---- Entity: organization board filter ----

function getOrganizationsBoardsByIdOrgByFilter(idOrg, filter) {
  var url = "/organizations/" + idOrg + "/boards/" + filter;
  var description = "Get boards of organization " + idOrg + " filtered by " + filter;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationBoardFilterExists(idOrg, filter) {
  return getOrganizationsBoardsByIdOrgByFilter(idOrg, filter);
}

function verifyOrganizationBoardFilterDoesNotExist(idOrg, filter) {
  return getOrganizationsBoardsByIdOrgByFilter(idOrg, filter);
}

// ---- Entity: organization deltas ----

function getOrganizationsDeltasByIdOrg(idOrg, tags, ixLastUpdate) {
  var url = "/organizations/" + idOrg + "/deltas";
  var description = "Get deltas of organization " + idOrg + " with tags " + tags + " and last update index " + ixLastUpdate;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationDeltasExists(idOrg, tags, ixLastUpdate) {
  return getOrganizationsDeltasByIdOrg(idOrg, tags, ixLastUpdate);
}

function verifyOrganizationDeltasDoesNotExist(idOrg, tags, ixLastUpdate) {
  return getOrganizationsDeltasByIdOrg(idOrg, tags, ixLastUpdate);
}

// ---- Entity: organization description ----

function updateOrganizationsDescByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/desc";
  var description = "Update description of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization display name ----

function updateOrganizationsDisplayNameByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/displayName";
  var description = "Update display name of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization name ----

function updateOrganizationsNameByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/name";
  var description = "Update name of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization website ----

function updateOrganizationsWebsiteByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/website";
  var description = "Update website of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization prefs associated domain ----

function updateOrganizationsPrefsAssociatedDomainByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "Update associated domain prefs of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrganizationsPrefsAssociatedDomainByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "Delete associated domain prefs of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingOrganizationPrefsAssociatedDomain(idOrg) {
  return deleteOrganizationsPrefsAssociatedDomainByIdOrg(idOrg);
}

// ---- Entity: organization prefs board visibility restrict org ----

function updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/boardVisibilityRestrict/org";
  var description = "Update board visibility restrict org prefs of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization prefs board visibility restrict private ----

function updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/boardVisibilityRestrict/private";
  var description = "Update board visibility restrict private prefs of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization prefs board visibility restrict public ----

function updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/boardVisibilityRestrict/public";
  var description = "Update board visibility restrict public prefs of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization prefs external members disabled ----

function updateOrganizationsPrefsExternalMembersDisabledByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/externalMembersDisabled";
  var description = "Update external members disabled prefs of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization prefs org invite restrict ----

function updateOrganizationsPrefsOrgInviteRestrictByIdOrg(idOrg, value) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "Update org invite restrict prefs of organization " + idOrg + " with value " + value;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrganizationsPrefsOrgInviteRestrictByIdOrg(idOrg, value) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "Delete org invite restrict prefs of organization " + idOrg + " with value " + value;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingOrganizationPrefsOrgInviteRestrict(idOrg, value) {
  return deleteOrganizationsPrefsOrgInviteRestrictByIdOrg(idOrg, value);
}

// ---- Entity: organization prefs permission level ----

function updateOrganizationsPrefsPermissionLevelByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/permissionLevel";
  var description = "Update permission level prefs of organization " + idOrg;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: notification ----

function getNotificationByIdNotification(idNotification) {
  var url = "/notifications/" + idNotification;
  var description = "Get notification with id " + idNotification;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateNotificationByIdNotification(idNotification) {
  var url = "/notifications/" + idNotification;
  var description = "Update notification with id " + idNotification;
  var body = notifications;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyNotificationExists(idNotification) {
  return getNotificationByIdNotification(idNotification);
}

function verifyNotificationDoesNotExist(idNotification) {
  return getNotificationByIdNotification(idNotification);
}

// ---- Entity: notification unread ----

function updateNotificationUnreadByIdNotification(idNotification) {
  var url = "/notifications/" + idNotification + "/unread";
  var description = "Update unread status of notification with id " + idNotification;
  var body = notifications_unread;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: notifications all read ----

function addNotificationsAllRead(key, token) {
  var url = "/notifications/all/read";
  var description = "Mark all notifications as read";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingNotificationsAllRead(key, token) {
  return addNotificationsAllRead(key, token);
}

// ---- Entity: action ----

function deleteAction(idAction) {
  var url = "/actions/" + idAction;
  var description = "Delete action with id " + idAction;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAction(idAction) {
  var url = "/actions/" + idAction;
  var description = "Get action with id " + idAction;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAction(idAction) {
  var url = "/actions/" + idAction;
  var description = "Update action with id " + idAction;
  var body = {
    "actions": actions,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyActionExists(idAction) {
  return getAction(idAction);
}

function verifyActionDoesNotExist(idAction) {
  return getAction(idAction);
}

function tryToDeleteANonExistingAction(idAction) {
  return deleteAction(idAction);
}

// ---- Entity: action text ----

function updateActionText(idAction) {
  var url = "/actions/" + idAction + "/text";
  var description = "Update action text for action id " + idAction;
  var body = {
    "actions_text": actions_text,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: list ----

function addLists(key, token, idList, cards, card_fields, board, board_fields, fields) {
  var url = "/lists";
  var description = "Create list with id " + idList + " and name {name}";
  var body = {
    "name": name,
    "idBoard": idBoard,
    "pos": pos,
    "closed": closed,
    "subscribed": subscribed,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getListsByIdList(key, token, idList, cards, card_fields, board, board_fields, fields) {
  var url = "/lists/" + idList;
  var description = "Get list with id " + idList;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateListsByIdList(key, token, idList, cards, card_fields, board, board_fields, fields) {
  var url = "/lists/" + idList;
  var description = "Update list with id " + idList + " and name {name}";
  var body = {
    "name": name,
    "idBoard": idBoard,
    "pos": pos,
    "closed": closed,
    "subscribed": subscribed,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingList(key, token, idList, cards, card_fields, board, board_fields, fields) {
  return addLists(key, token, idList, cards, card_fields, board, board_fields, fields);
}

function verifyListExists(key, token, idList, cards, card_fields, board, board_fields, fields) {
  return getListsByIdList(key, token, idList, cards, card_fields, board, board_fields, fields);
}

function verifyListDoesNotExist(key, token, idList, cards, card_fields, board, board_fields, fields) {
  return getListsByIdList(key, token, idList, cards, card_fields, board, board_fields, fields);
}

// ---- Entity: list card ----

function addListsCardsByIdList(idList, key, token, actions, attachments, attachment_fields, stickers, members, member_fields, checkItemStates, checklists, limit, since, before, filter, fields) {
  var url = "/lists/" + idList + "/cards";
  var description = "Add card to list " + idList + " with name {name}";
  var body = {
    "name": name,
    "desc": desc,
    "pos": pos,
    "due": due,
    "idMembers": idMembers,
    "idLabels": idLabels,
    "urlSource": urlSource,
    "idList": idList,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getListsCardsByIdList(idList, key, token, actions, attachments, attachment_fields, stickers, members, member_fields, checkItemStates, checklists, limit, since, before, filter, fields) {
  var url = "/lists/" + idList + "/cards";
  var description = "Get cards of list " + idList;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingListCard(idList, key, token, actions, attachments, attachment_fields, stickers, members, member_fields, checkItemStates, checklists, limit, since, before, filter, fields) {
  return addListsCardsByIdList(idList, key, token, actions, attachments, attachment_fields, stickers, members, member_fields, checkItemStates, checklists, limit, since, before, filter, fields);
}

function verifyListCardExists(idList, key, token, actions, attachments, attachment_fields, stickers, members, member_fields, checkItemStates, checklists, limit, since, before, filter, fields) {
  return getListsCardsByIdList(idList, key, token, actions, attachments, attachment_fields, stickers, members, member_fields, checkItemStates, checklists, limit, since, before, filter, fields);
}

function verifyListCardDoesNotExist(idList, key, token, actions, attachments, attachment_fields, stickers, members, member_fields, checkItemStates, checklists, limit, since, before, filter, fields) {
  return getListsCardsByIdList(idList, key, token, actions, attachments, attachment_fields, stickers, members, member_fields, checkItemStates, checklists, limit, since, before, filter, fields);
}

// ---- Entity: list closed ----

function updateListsClosedByIdList(idList, key, token) {
  var url = "/lists/" + idList + "/closed";
  var description = "Update closed status of list " + idList + " to {closed}";
  var body = {
    "closed": closed,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: list idBoard ----

function updateListsIdBoardByIdList(idList, key, token) {
  var url = "/lists/" + idList + "/idBoard";
  var description = "Update board id of list " + idList + " to {idBoard}";
  var body = {
    "idBoard": idBoard,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: list move all cards ----

function addListsMoveAllCardsByIdList(idList, key, token) {
  var url = "/lists/" + idList + "/moveAllCards";
  var description = "Move all cards from list " + idList + " to list {idListTo}";
  var body = {
    "idList": idListTo,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingListMoveAllCards(idList, key, token) {
  return addListsMoveAllCardsByIdList(idList, key, token);
}

// ---- Entity: list name ----

function updateListsNameByIdList(idList, key, token) {
  var url = "/lists/" + idList + "/name";
  var description = "Update name of list " + idList + " to {name}";
  var body = {
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: list pos ----

function updateListsPosByIdList(idList, key, token) {
  var url = "/lists/" + idList + "/pos";
  var description = "Update position of list " + idList + " to {pos}";
  var body = {
    "pos": pos,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: list subscribed ----

function updateListsSubscribedByIdList(idList, key, token) {
  var url = "/lists/" + idList + "/subscribed";
  var description = "Update subscribed status of list " + idList + " to {subscribed}";
  var body = {
    "subscribed": subscribed,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: checklist ----

function addChecklists(key, token, idChecklist) {
  var url = "/checklists";
  var description = "Create checklist with id " + idChecklist;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteChecklistsByIdChecklist(key, token, idChecklist) {
  var url = "/checklists/" + idChecklist;
  var description = "Delete checklist with id " + idChecklist;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateChecklistsByIdChecklist(key, token, idChecklist) {
  var url = "/checklists/" + idChecklist;
  var description = "Update checklist with id " + idChecklist;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getChecklistsByIdChecklist(key, token, idChecklist) {
  var url = "/checklists/" + idChecklist;
  var description = "Get checklist with id " + idChecklist;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingChecklist(key, token, idChecklist) {
  return addChecklists(key, token, idChecklist);
}

function verifyChecklistExists(key, token, idChecklist) {
  return getChecklistsByIdChecklist(key, token, idChecklist);
}

function verifyChecklistDoesNotExist(key, token, idChecklist) {
  return getChecklistsByIdChecklist(key, token, idChecklist);
}

function tryToDeleteANonExistingChecklist(key, token, idChecklist) {
  return deleteChecklistsByIdChecklist(key, token, idChecklist);
}

// ---- Entity: checklist check item ----

function addChecklistsCheckItemsByIdChecklist(idChecklist, key, token, idCheckItem) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "Add check item to checklist " + idChecklist + " with id " + idCheckItem;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(idChecklist, key, token, idCheckItem) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "Delete check item " + idCheckItem + " from checklist " + idChecklist;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getChecklistsCheckItemsByIdChecklistByIdCheckItem(idChecklist, key, token, idCheckItem) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "Get check item " + idCheckItem + " from checklist " + idChecklist;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingChecklistCheckItem(idChecklist, key, token, idCheckItem) {
  return addChecklistsCheckItemsByIdChecklist(idChecklist, key, token, idCheckItem);
}

function verifyChecklistCheckItemExists(idChecklist, key, token, idCheckItem) {
  return getChecklistsCheckItemsByIdChecklistByIdCheckItem(idChecklist, key, token, idCheckItem);
}

function verifyChecklistCheckItemDoesNotExist(idChecklist, key, token, idCheckItem) {
  return getChecklistsCheckItemsByIdChecklistByIdCheckItem(idChecklist, key, token, idCheckItem);
}

function tryToDeleteANonExistingChecklistCheckItem(idChecklist, key, token, idCheckItem) {
  return deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(idChecklist, key, token, idCheckItem);
}

// ---- Entity: webhook ----

function addWebhooks(key, token, idWebhook, field) {
  var url = "/webhooks";
  var description = "Create webhook with id " + idWebhook;
  var body = {
    "idWebhook": idWebhook,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhooksByIdWebhook(key, token, idWebhook, field) {
  var url = "/webhooks/" + idWebhook;
  var description = "Delete webhook with id " + idWebhook;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhooksByIdWebhook(key, token, idWebhook, field) {
  var url = "/webhooks/" + idWebhook;
  var description = "Update webhook with id " + idWebhook;
  var body = {
    "idWebhook": idWebhook,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhooksByIdWebhook(key, token, idWebhook, field) {
  var url = "/webhooks/" + idWebhook;
  var description = "Get webhook with id " + idWebhook;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhooksActiveByIdWebhook(key, token, idWebhook, field) {
  var url = "/webhooks/" + idWebhook + "/active";
  var description = "Update webhook active status with id " + idWebhook;
  var body = {
    "idWebhook": idWebhook,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhooksCallbackURLByIdWebhook(key, token, idWebhook, field) {
  var url = "/webhooks/" + idWebhook + "/callbackURL";
  var description = "Update webhook callback URL with id " + idWebhook;
  var body = {
    "idWebhook": idWebhook,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhooksDescriptionByIdWebhook(key, token, idWebhook, field) {
  var url = "/webhooks/" + idWebhook + "/description";
  var description = "Update webhook description with id " + idWebhook;
  var body = {
    "idWebhook": idWebhook,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhooksIdModelByIdWebhook(key, token, idWebhook, field) {
  var url = "/webhooks/" + idWebhook + "/idModel";
  var description = "Update webhook idModel with id " + idWebhook;
  var body = {
    "idWebhook": idWebhook,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhooksByIdWebhookByField(key, token, idWebhook, field) {
  var url = "/webhooks/" + idWebhook + "/" + field;
  var description = "Get webhook field " + field + " with id " + idWebhook;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhook(key, token, idWebhook, field) {
  return addWebhooks(key, token, idWebhook, field);
}

function verifyWebhookExists(key, token, idWebhook, field) {
  return getWebhooksByIdWebhook(key, token, idWebhook, field);
}

function verifyWebhookDoesNotExist(key, token, idWebhook, field) {
  return getWebhooksByIdWebhook(key, token, idWebhook, field);
}

function tryToDeleteANonExistingWebhook(key, token, idWebhook, field) {
  return deleteWebhooksByIdWebhook(key, token, idWebhook, field);
}

// ---- Entity: label ----

function addLabels(key, token, idLabel, fields) {
  var url = "/labels";
  var description = "Create label with id " + idLabel;
  var body = {
    "idLabel": idLabel,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteLabelsByIdLabel(key, token, idLabel, fields) {
  var url = "/labels/" + idLabel;
  var description = "Delete label with id " + idLabel;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getLabelsByIdLabel(key, token, idLabel, fields) {
  var url = "/labels/" + idLabel;
  var description = "Get label with id " + idLabel;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateLabelsByIdLabel(key, token, idLabel, fields) {
  var url = "/labels/" + idLabel;
  var description = "Update label with id " + idLabel;
  var body = {
    "idLabel": idLabel,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingLabel(key, token, idLabel, fields) {
  return addLabels(key, token, idLabel, fields);
}

function verifyLabelExists(key, token, idLabel, fields) {
  return getLabelsByIdLabel(key, token, idLabel, fields);
}

function verifyLabelDoesNotExist(key, token, idLabel, fields) {
  return getLabelsByIdLabel(key, token, idLabel, fields);
}

function tryToDeleteANonExistingLabel(key, token, idLabel, fields) {
  return deleteLabelsByIdLabel(key, token, idLabel, fields);
}

// ---- Entity: label color ----

function updateLabelsColorByIdLabel(idLabel, key, token) {
  var url = "/labels/" + idLabel + "/color";
  var description = "Update label color for label id " + idLabel;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: label name ----

function updateLabelsNameByIdLabel(idLabel, key, token) {
  var url = "/labels/" + idLabel + "/name";
  var description = "Update label name for label id " + idLabel;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: token ----

function getTokensByToken(token, key) {
  var url = "/tokens/" + token;
  var description = "Get token " + token;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTokensByToken(token, key) {
  var url = "/tokens/" + token;
  var description = "Delete token " + token;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTokenExists(token, key) {
  return getTokensByToken(token, key);
}

function verifyTokenDoesNotExist(token, key) {
  return getTokensByToken(token, key);
}

function tryToDeleteANonExistingToken(token, key) {
  return deleteTokensByToken(token, key);
}

// ---- Entity: token member ----

function getTokensMemberByToken(token, key) {
  var url = "/tokens/" + token + "/member";
  var description = "Get member of token " + token;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTokenMemberExists(token, key) {
  return getTokensMemberByToken(token, key);
}

function verifyTokenMemberDoesNotExist(token, key) {
  return getTokensMemberByToken(token, key);
}

// ---- Entity: token member field ----

function getTokensMemberByTokenByField(token, field, key) {
  var url = "/tokens/" + token + "/member/" + field;
  var description = "Get member field " + field + " of token " + token;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTokenMemberFieldExists(token, field, key) {
  return getTokensMemberByTokenByField(token, field, key);
}

function verifyTokenMemberFieldDoesNotExist(token, field, key) {
  return getTokensMemberByTokenByField(token, field, key);
}

// ---- Entity: token webhook ----

function getTokensWebhooksByToken(token, key) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Get webhooks of token " + token;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addTokensWebhooksByToken(token, key) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Add webhook to token " + token;
  var body = {
    "idModel": idModel,
    "callbackURL": callbackURL,
    "description": description,
    "active": active,
    "modelType": modelType,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTokensWebhooksByToken(token, key) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Update webhook of token " + token;
  var body = {
    "idModel": idModel,
    "callbackURL": callbackURL,
    "description": description,
    "active": active,
    "modelType": modelType,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTokenWebhook(token, key) {
  return addTokensWebhooksByToken(token, key);
}

function verifyTokenWebhookExists(token, key) {
  return getTokensWebhooksByToken(token, key);
}

function verifyTokenWebhookDoesNotExist(token, key) {
  return getTokensWebhooksByToken(token, key);
}

// ---- Entity: token webhook by id ----

function getTokensWebhooksByTokenByIdWebhook(token, idWebhook, key) {
  var url = "/tokens/" + token + "/webhooks/" + idWebhook;
  var description = "Get webhook " + idWebhook + " of token " + token;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTokensWebhooksByTokenByIdWebhook(token, idWebhook, key) {
  var url = "/tokens/" + token + "/webhooks/" + idWebhook;
  var description = "Delete webhook " + idWebhook + " of token " + token;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTokenWebhookByIdExists(token, idWebhook, key) {
  return getTokensWebhooksByTokenByIdWebhook(token, idWebhook, key);
}

function verifyTokenWebhookByIdDoesNotExist(token, idWebhook, key) {
  return getTokensWebhooksByTokenByIdWebhook(token, idWebhook, key);
}

function tryToDeleteANonExistingTokenWebhookById(token, idWebhook, key) {
  return deleteTokensWebhooksByTokenByIdWebhook(token, idWebhook, key);
}

// ---- Entity: token field ----

function getTokensByTokenByField(token, field, key) {
  var url = "/tokens/" + token + "/" + field;
  var description = "Get field " + field + " of token " + token;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTokenFieldExists(token, field, key) {
  return getTokensByTokenByField(token, field, key);
}

function verifyTokenFieldDoesNotExist(token, field, key) {
  return getTokensByTokenByField(token, field, key);
}

// ---- Entity: session ----

function addSessions(key, token, idSession) {
  var url = "/sessions";
  var description = "Create session with id " + idSession;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSessionsByIdSession(key, token, idSession) {
  var url = "/sessions/" + idSession;
  var description = "Update session " + idSession;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSession(key, token, idSession) {
  return addSessions(key, token, idSession);
}

// ---- Entity: session status ----

function updateSessionsStatusByIdSession(idSession, key, token) {
  var url = "/sessions/" + idSession + "/status";
  var description = "Update session status for session " + idSession;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: search ----

function getSearch(query, idOrganizations, key, token) {
  var url = "/search";
  var description = "Get search results for query " + query + " in organizations " + idOrganizations;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySearchExists(query, idOrganizations, key, token) {
  return getSearch(query, idOrganizations, key, token);
}

function verifySearchDoesNotExist(query, idOrganizations, key, token) {
  return getSearch(query, idOrganizations, key, token);
}

// ---- Entity: searchMember ----

function getSearchMembers(query, key, token) {
  var url = "/search/members";
  var description = "Get search members results for query " + query;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySearchMemberExists(query, key, token) {
  return getSearchMembers(query, key, token);
}

function verifySearchMemberDoesNotExist(query, key, token) {
  return getSearchMembers(query, key, token);
}

// ---- Entity: type ----

function getTypeById(id) {
  var url = "/types/" + id;
  var description = "Get type with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTypeExists(id) {
  return getTypeById(id);
}

function verifyTypeDoesNotExist(id) {
  return getTypeById(id);
}
