// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("ActionLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAction(x.id);
  updateAction(x.id);
  updateAction(x.id);
  verifyActionExists(x.id);
  verifyActionUpdated(x.id);
  deleteAction(x.id);
});

bthread("ActiveLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addActive(x.id);
  updateActive(x.id);
  updateActive(x.id);
  verifyActiveExists(x.id);
  verifyActiveUpdated(x.id);
  deleteActive(x.id);
});

bthread("AllLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAll(x.id);
  updateAll(x.id);
  updateAll(x.id);
  verifyAllExists(x.id);
  verifyAllUpdated(x.id);
  deleteAll(x.id);
});

bthread("ArchiveallcardLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addArchiveallcard(x.id);
  updateArchiveallcard(x.id);
  updateArchiveallcard(x.id);
  verifyArchiveallcardExists(x.id);
  verifyArchiveallcardUpdated(x.id);
  deleteArchiveallcard(x.id);
});

bthread("AssociateddomainLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAssociateddomain(x.id);
  updateAssociateddomain(x.id);
  updateAssociateddomain(x.id);
  verifyAssociateddomainExists(x.id);
  verifyAssociateddomainUpdated(x.id);
  deleteAssociateddomain(x.id);
});

bthread("AttachmentLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttachment(x.id);
  updateAttachment(x.id);
  updateAttachment(x.id);
  verifyAttachmentExists(x.id);
  verifyAttachmentUpdated(x.id);
  deleteAttachment(x.id);
});

bthread("AvatarLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvatar(x.id);
  updateAvatar(x.id);
  updateAvatar(x.id);
  verifyAvatarExists(x.id);
  verifyAvatarUpdated(x.id);
  deleteAvatar(x.id);
});

bthread("AvatarsourceLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvatarsource(x.id);
  updateAvatarsource(x.id);
  updateAvatarsource(x.id);
  verifyAvatarsourceExists(x.id);
  verifyAvatarsourceUpdated(x.id);
  deleteAvatarsource(x.id);
});

bthread("BackgroundLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBackground(x.id);
  updateBackground(x.id);
  updateBackground(x.id);
  verifyBackgroundExists(x.id);
  verifyBackgroundUpdated(x.id);
  deleteBackground(x.id);
});

bthread("BatchLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBatch(x.id);
  updateBatch(x.id);
  updateBatch(x.id);
  verifyBatchExists(x.id);
  verifyBatchUpdated(x.id);
  deleteBatch(x.id);
});

bthread("BioLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBio(x.id);
  updateBio(x.id);
  updateBio(x.id);
  verifyBioExists(x.id);
  verifyBioUpdated(x.id);
  deleteBio(x.id);
});

bthread("BlueLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBlue(x.id);
  updateBlue(x.id);
  updateBlue(x.id);
  verifyBlueExists(x.id);
  verifyBlueUpdated(x.id);
  deleteBlue(x.id);
});

bthread("BoardLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBoard(x.id);
  updateBoard(x.id);
  updateBoard(x.id);
  verifyBoardExists(x.id);
  verifyBoardUpdated(x.id);
  deleteBoard(x.id);
});

bthread("BoardbackgroundLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBoardbackground(x.id);
  updateBoardbackground(x.id);
  updateBoardbackground(x.id);
  verifyBoardbackgroundExists(x.id);
  verifyBoardbackgroundUpdated(x.id);
  deleteBoardbackground(x.id);
});

bthread("BoardsinvitedLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBoardsinvited(x.id);
  updateBoardsinvited(x.id);
  updateBoardsinvited(x.id);
  verifyBoardsinvitedExists(x.id);
  verifyBoardsinvitedUpdated(x.id);
  deleteBoardsinvited(x.id);
});

bthread("BoardstarLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBoardstar(x.id);
  updateBoardstar(x.id);
  updateBoardstar(x.id);
  verifyBoardstarExists(x.id);
  verifyBoardstarUpdated(x.id);
  deleteBoardstar(x.id);
});

bthread("BoardvisibilityrestrictLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBoardvisibilityrestrict(x.id);
  updateBoardvisibilityrestrict(x.id);
  updateBoardvisibilityrestrict(x.id);
  verifyBoardvisibilityrestrictExists(x.id);
  verifyBoardvisibilityrestrictUpdated(x.id);
  deleteBoardvisibilityrestrict(x.id);
});

bthread("CalendarfeedenabledLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCalendarfeedenabled(x.id);
  updateCalendarfeedenabled(x.id);
  updateCalendarfeedenabled(x.id);
  verifyCalendarfeedenabledExists(x.id);
  verifyCalendarfeedenabledUpdated(x.id);
  deleteCalendarfeedenabled(x.id);
});

bthread("CalendarkeyLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCalendarkey(x.id);
  updateCalendarkey(x.id);
  updateCalendarkey(x.id);
  verifyCalendarkeyExists(x.id);
  verifyCalendarkeyUpdated(x.id);
  deleteCalendarkey(x.id);
});

bthread("CallbackurlLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCallbackurl(x.id);
  updateCallbackurl(x.id);
  updateCallbackurl(x.id);
  verifyCallbackurlExists(x.id);
  verifyCallbackurlUpdated(x.id);
  deleteCallbackurl(x.id);
});

bthread("CardLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCard(x.id);
  updateCard(x.id);
  updateCard(x.id);
  verifyCardExists(x.id);
  verifyCardUpdated(x.id);
  deleteCard(x.id);
});

bthread("CardagingLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCardaging(x.id);
  updateCardaging(x.id);
  updateCardaging(x.id);
  verifyCardagingExists(x.id);
  verifyCardagingUpdated(x.id);
  deleteCardaging(x.id);
});

bthread("CardcoverLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCardcover(x.id);
  updateCardcover(x.id);
  updateCardcover(x.id);
  verifyCardcoverExists(x.id);
  verifyCardcoverUpdated(x.id);
  deleteCardcover(x.id);
});

bthread("CheckitemLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCheckitem(x.id);
  updateCheckitem(x.id);
  updateCheckitem(x.id);
  verifyCheckitemExists(x.id);
  verifyCheckitemUpdated(x.id);
  deleteCheckitem(x.id);
});

bthread("CheckitemstateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCheckitemstate(x.id);
  updateCheckitemstate(x.id);
  updateCheckitemstate(x.id);
  verifyCheckitemstateExists(x.id);
  verifyCheckitemstateUpdated(x.id);
  deleteCheckitemstate(x.id);
});

bthread("ChecklistLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChecklist(x.id);
  updateChecklist(x.id);
  updateChecklist(x.id);
  verifyChecklistExists(x.id);
  verifyChecklistUpdated(x.id);
  deleteChecklist(x.id);
});

bthread("ClosedLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClosed(x.id);
  updateClosed(x.id);
  updateClosed(x.id);
  verifyClosedExists(x.id);
  verifyClosedUpdated(x.id);
  deleteClosed(x.id);
});

bthread("ColorLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addColor(x.id);
  updateColor(x.id);
  updateColor(x.id);
  verifyColorExists(x.id);
  verifyColorUpdated(x.id);
  deleteColor(x.id);
});

bthread("ColorblindLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addColorblind(x.id);
  updateColorblind(x.id);
  updateColorblind(x.id);
  verifyColorblindExists(x.id);
  verifyColorblindUpdated(x.id);
  deleteColorblind(x.id);
});

bthread("CommentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addComment(x.id);
  updateComment(x.id);
  updateComment(x.id);
  verifyCommentExists(x.id);
  verifyCommentUpdated(x.id);
  deleteComment(x.id);
});

bthread("ConverttocardLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConverttocard(x.id);
  updateConverttocard(x.id);
  updateConverttocard(x.id);
  verifyConverttocardExists(x.id);
  verifyConverttocardUpdated(x.id);
  deleteConverttocard(x.id);
});

bthread("CustomboardbackgroundLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomboardbackground(x.id);
  updateCustomboardbackground(x.id);
  updateCustomboardbackground(x.id);
  verifyCustomboardbackgroundExists(x.id);
  verifyCustomboardbackgroundUpdated(x.id);
  deleteCustomboardbackground(x.id);
});

bthread("CustomemojiLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomemoji(x.id);
  updateCustomemoji(x.id);
  updateCustomemoji(x.id);
  verifyCustomemojiExists(x.id);
  verifyCustomemojiUpdated(x.id);
  deleteCustomemoji(x.id);
});

bthread("CustomstickerLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomsticker(x.id);
  updateCustomsticker(x.id);
  updateCustomsticker(x.id);
  verifyCustomstickerExists(x.id);
  verifyCustomstickerUpdated(x.id);
  deleteCustomsticker(x.id);
});

bthread("DeactivatedLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeactivated(x.id);
  updateDeactivated(x.id);
  updateDeactivated(x.id);
  verifyDeactivatedExists(x.id);
  verifyDeactivatedUpdated(x.id);
  deleteDeactivated(x.id);
});

bthread("DeltaLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDelta(x.id);
  updateDelta(x.id);
  updateDelta(x.id);
  verifyDeltaExists(x.id);
  verifyDeltaUpdated(x.id);
  deleteDelta(x.id);
});

bthread("DescLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDesc(x.id);
  updateDesc(x.id);
  updateDesc(x.id);
  verifyDescExists(x.id);
  verifyDescUpdated(x.id);
  deleteDesc(x.id);
});

bthread("DescriptionLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDescription(x.id);
  updateDescription(x.id);
  updateDescription(x.id);
  verifyDescriptionExists(x.id);
  verifyDescriptionUpdated(x.id);
  deleteDescription(x.id);
});

bthread("DisplayLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDisplay(x.id);
  updateDisplay(x.id);
  updateDisplay(x.id);
  verifyDisplayExists(x.id);
  verifyDisplayUpdated(x.id);
  deleteDisplay(x.id);
});

bthread("DisplaynameLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDisplayname(x.id);
  updateDisplayname(x.id);
  updateDisplayname(x.id);
  verifyDisplaynameExists(x.id);
  verifyDisplaynameUpdated(x.id);
  deleteDisplayname(x.id);
});

bthread("DueLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDue(x.id);
  updateDue(x.id);
  updateDue(x.id);
  verifyDueExists(x.id);
  verifyDueUpdated(x.id);
  deleteDue(x.id);
});

bthread("EmailkeyLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEmailkey(x.id);
  updateEmailkey(x.id);
  updateEmailkey(x.id);
  verifyEmailkeyExists(x.id);
  verifyEmailkeyUpdated(x.id);
  deleteEmailkey(x.id);
});

bthread("EmailpositionLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEmailposition(x.id);
  updateEmailposition(x.id);
  updateEmailposition(x.id);
  verifyEmailpositionExists(x.id);
  verifyEmailpositionUpdated(x.id);
  deleteEmailposition(x.id);
});

bthread("EntityLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEntity(x.id);
  updateEntity(x.id);
  updateEntity(x.id);
  verifyEntityExists(x.id);
  verifyEntityUpdated(x.id);
  deleteEntity(x.id);
});

bthread("ExternalmembersdisabledLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExternalmembersdisabled(x.id);
  updateExternalmembersdisabled(x.id);
  updateExternalmembersdisabled(x.id);
  verifyExternalmembersdisabledExists(x.id);
  verifyExternalmembersdisabledUpdated(x.id);
  deleteExternalmembersdisabled(x.id);
});

bthread("FullnameLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFullname(x.id);
  updateFullname(x.id);
  updateFullname(x.id);
  verifyFullnameExists(x.id);
  verifyFullnameUpdated(x.id);
  deleteFullname(x.id);
});

bthread("GenerateLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerate(x.id);
  updateGenerate(x.id);
  updateGenerate(x.id);
  verifyGenerateExists(x.id);
  verifyGenerateUpdated(x.id);
  deleteGenerate(x.id);
});

bthread("GoogleappsversionLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGoogleappsversion(x.id);
  updateGoogleappsversion(x.id);
  updateGoogleappsversion(x.id);
  verifyGoogleappsversionExists(x.id);
  verifyGoogleappsversionUpdated(x.id);
  deleteGoogleappsversion(x.id);
});

bthread("GreenLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGreen(x.id);
  updateGreen(x.id);
  updateGreen(x.id);
  verifyGreenExists(x.id);
  verifyGreenUpdated(x.id);
  deleteGreen(x.id);
});

bthread("IdattachmentcoverLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdattachmentcover(x.id);
  updateIdattachmentcover(x.id);
  updateIdattachmentcover(x.id);
  verifyIdattachmentcoverExists(x.id);
  verifyIdattachmentcoverUpdated(x.id);
  deleteIdattachmentcover(x.id);
});

bthread("IdboardLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdboard(x.id);
  updateIdboard(x.id);
  updateIdboard(x.id);
  verifyIdboardExists(x.id);
  verifyIdboardUpdated(x.id);
  deleteIdboard(x.id);
});

bthread("IdcardLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdcard(x.id);
  updateIdcard(x.id);
  updateIdcard(x.id);
  verifyIdcardExists(x.id);
  verifyIdcardUpdated(x.id);
  deleteIdcard(x.id);
});

bthread("IdemaillistLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdemaillist(x.id);
  updateIdemaillist(x.id);
  updateIdemaillist(x.id);
  verifyIdemaillistExists(x.id);
  verifyIdemaillistUpdated(x.id);
  deleteIdemaillist(x.id);
});

bthread("IdlabelLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdlabel(x.id);
  updateIdlabel(x.id);
  updateIdlabel(x.id);
  verifyIdlabelExists(x.id);
  verifyIdlabelUpdated(x.id);
  deleteIdlabel(x.id);
});

bthread("IdlistLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdlist(x.id);
  updateIdlist(x.id);
  updateIdlist(x.id);
  verifyIdlistExists(x.id);
  verifyIdlistUpdated(x.id);
  deleteIdlist(x.id);
});

bthread("IdmemberLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdmember(x.id);
  updateIdmember(x.id);
  updateIdmember(x.id);
  verifyIdmemberExists(x.id);
  verifyIdmemberUpdated(x.id);
  deleteIdmember(x.id);
});

bthread("IdmodelLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdmodel(x.id);
  updateIdmodel(x.id);
  updateIdmodel(x.id);
  verifyIdmodelExists(x.id);
  verifyIdmodelUpdated(x.id);
  deleteIdmodel(x.id);
});

bthread("IdorganizationLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdorganization(x.id);
  updateIdorganization(x.id);
  updateIdorganization(x.id);
  verifyIdorganizationExists(x.id);
  verifyIdorganizationUpdated(x.id);
  deleteIdorganization(x.id);
});

bthread("InitialLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInitial(x.id);
  updateInitial(x.id);
  updateInitial(x.id);
  verifyInitialExists(x.id);
  verifyInitialUpdated(x.id);
  deleteInitial(x.id);
});

bthread("InvitationLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInvitation(x.id);
  updateInvitation(x.id);
  updateInvitation(x.id);
  verifyInvitationExists(x.id);
  verifyInvitationUpdated(x.id);
  deleteInvitation(x.id);
});

bthread("LabelLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLabel(x.id);
  updateLabel(x.id);
  updateLabel(x.id);
  verifyLabelExists(x.id);
  verifyLabelUpdated(x.id);
  deleteLabel(x.id);
});

bthread("LabelnameLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLabelname(x.id);
  updateLabelname(x.id);
  updateLabelname(x.id);
  verifyLabelnameExists(x.id);
  verifyLabelnameUpdated(x.id);
  deleteLabelname(x.id);
});

bthread("ListLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addList(x.id);
  updateList(x.id);
  updateList(x.id);
  verifyListExists(x.id);
  verifyListUpdated(x.id);
  deleteList(x.id);
});

bthread("LocaleLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLocale(x.id);
  updateLocale(x.id);
  updateLocale(x.id);
  verifyLocaleExists(x.id);
  verifyLocaleUpdated(x.id);
  deleteLocale(x.id);
});

bthread("LogoLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLogo(x.id);
  updateLogo(x.id);
  updateLogo(x.id);
  verifyLogoExists(x.id);
  verifyLogoUpdated(x.id);
  deleteLogo(x.id);
});

bthread("MarkassociatednotificationsreadLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarkassociatednotificationsread(x.id);
  updateMarkassociatednotificationsread(x.id);
  updateMarkassociatednotificationsread(x.id);
  verifyMarkassociatednotificationsreadExists(x.id);
  verifyMarkassociatednotificationsreadUpdated(x.id);
  deleteMarkassociatednotificationsread(x.id);
});

bthread("MarkasviewedLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarkasviewed(x.id);
  updateMarkasviewed(x.id);
  updateMarkasviewed(x.id);
  verifyMarkasviewedExists(x.id);
  verifyMarkasviewedUpdated(x.id);
  deleteMarkasviewed(x.id);
});

bthread("MemberLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMember(x.id);
  updateMember(x.id);
  updateMember(x.id);
  verifyMemberExists(x.id);
  verifyMemberUpdated(x.id);
  deleteMember(x.id);
});

bthread("MembercreatorLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMembercreator(x.id);
  updateMembercreator(x.id);
  updateMembercreator(x.id);
  verifyMembercreatorExists(x.id);
  verifyMembercreatorUpdated(x.id);
  deleteMembercreator(x.id);
});

bthread("MembershipLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMembership(x.id);
  updateMembership(x.id);
  updateMembership(x.id);
  verifyMembershipExists(x.id);
  verifyMembershipUpdated(x.id);
  deleteMembership(x.id);
});

bthread("MembersinvitedLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMembersinvited(x.id);
  updateMembersinvited(x.id);
  updateMembersinvited(x.id);
  verifyMembersinvitedExists(x.id);
  verifyMembersinvitedUpdated(x.id);
  deleteMembersinvited(x.id);
});

bthread("MembersvotedLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMembersvoted(x.id);
  updateMembersvoted(x.id);
  updateMembersvoted(x.id);
  verifyMembersvotedExists(x.id);
  verifyMembersvotedUpdated(x.id);
  deleteMembersvoted(x.id);
});

bthread("MinutesbetweensummaryLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMinutesbetweensummary(x.id);
  updateMinutesbetweensummary(x.id);
  updateMinutesbetweensummary(x.id);
  verifyMinutesbetweensummaryExists(x.id);
  verifyMinutesbetweensummaryUpdated(x.id);
  deleteMinutesbetweensummary(x.id);
});

bthread("MoveallcardLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMoveallcard(x.id);
  updateMoveallcard(x.id);
  updateMoveallcard(x.id);
  verifyMoveallcardExists(x.id);
  verifyMoveallcardUpdated(x.id);
  deleteMoveallcard(x.id);
});

bthread("MyprefLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMypref(x.id);
  updateMypref(x.id);
  updateMypref(x.id);
  verifyMyprefExists(x.id);
  verifyMyprefUpdated(x.id);
  deleteMypref(x.id);
});

bthread("NameLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addName(x.id);
  updateName(x.id);
  updateName(x.id);
  verifyNameExists(x.id);
  verifyNameUpdated(x.id);
  deleteName(x.id);
});

bthread("NotificationLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotification(x.id);
  updateNotification(x.id);
  updateNotification(x.id);
  verifyNotificationExists(x.id);
  verifyNotificationUpdated(x.id);
  deleteNotification(x.id);
});

bthread("OnetimemessagesdismissedLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOnetimemessagesdismissed(x.id);
  updateOnetimemessagesdismissed(x.id);
  updateOnetimemessagesdismissed(x.id);
  verifyOnetimemessagesdismissedExists(x.id);
  verifyOnetimemessagesdismissedUpdated(x.id);
  deleteOnetimemessagesdismissed(x.id);
});

bthread("OrangeLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrange(x.id);
  updateOrange(x.id);
  updateOrange(x.id);
  verifyOrangeExists(x.id);
  verifyOrangeUpdated(x.id);
  deleteOrange(x.id);
});

bthread("OrgLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrg(x.id);
  updateOrg(x.id);
  updateOrg(x.id);
  verifyOrgExists(x.id);
  verifyOrgUpdated(x.id);
  deleteOrg(x.id);
});

bthread("OrganizationLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganization(x.id);
  updateOrganization(x.id);
  updateOrganization(x.id);
  verifyOrganizationExists(x.id);
  verifyOrganizationUpdated(x.id);
  deleteOrganization(x.id);
});

bthread("OrganizationsinvitedLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganizationsinvited(x.id);
  updateOrganizationsinvited(x.id);
  updateOrganizationsinvited(x.id);
  verifyOrganizationsinvitedExists(x.id);
  verifyOrganizationsinvitedUpdated(x.id);
  deleteOrganizationsinvited(x.id);
});

bthread("OrginviterestrictLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrginviterestrict(x.id);
  updateOrginviterestrict(x.id);
  updateOrginviterestrict(x.id);
  verifyOrginviterestrictExists(x.id);
  verifyOrginviterestrictUpdated(x.id);
  deleteOrginviterestrict(x.id);
});

bthread("PermissionlevelLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPermissionlevel(x.id);
  updatePermissionlevel(x.id);
  updatePermissionlevel(x.id);
  verifyPermissionlevelExists(x.id);
  verifyPermissionlevelUpdated(x.id);
  deletePermissionlevel(x.id);
});

bthread("PoLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPo(x.id);
  updatePo(x.id);
  updatePo(x.id);
  verifyPoExists(x.id);
  verifyPoUpdated(x.id);
  deletePo(x.id);
});

bthread("PowerupLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPowerup(x.id);
  updatePowerup(x.id);
  updatePowerup(x.id);
  verifyPowerupExists(x.id);
  verifyPowerupUpdated(x.id);
  deletePowerup(x.id);
});

bthread("PrefLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPref(x.id);
  updatePref(x.id);
  updatePref(x.id);
  verifyPrefExists(x.id);
  verifyPrefUpdated(x.id);
  deletePref(x.id);
});

bthread("PrivateLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPrivate(x.id);
  updatePrivate(x.id);
  updatePrivate(x.id);
  verifyPrivateExists(x.id);
  verifyPrivateUpdated(x.id);
  deletePrivate(x.id);
});

bthread("PublicLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublic(x.id);
  updatePublic(x.id);
  updatePublic(x.id);
  verifyPublicExists(x.id);
  verifyPublicUpdated(x.id);
  deletePublic(x.id);
});

bthread("PurpleLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPurple(x.id);
  updatePurple(x.id);
  updatePurple(x.id);
  verifyPurpleExists(x.id);
  verifyPurpleUpdated(x.id);
  deletePurple(x.id);
});

bthread("QueryLifecycle", function () {
  const x = pick([{id: "Q001"}, {id: "Q002"}]);
  addQuery(x.id);
  updateQuery(x.id);
  updateQuery(x.id);
  verifyQueryExists(x.id);
  verifyQueryUpdated(x.id);
  deleteQuery(x.id);
});

bthread("ReadLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRead(x.id);
  updateRead(x.id);
  updateRead(x.id);
  verifyReadExists(x.id);
  verifyReadUpdated(x.id);
  deleteRead(x.id);
});

bthread("RedLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRed(x.id);
  updateRed(x.id);
  updateRed(x.id);
  verifyRedExists(x.id);
  verifyRedUpdated(x.id);
  deleteRed(x.id);
});

bthread("SavedsearcheLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSavedsearche(x.id);
  updateSavedsearche(x.id);
  updateSavedsearche(x.id);
  verifySavedsearcheExists(x.id);
  verifySavedsearcheUpdated(x.id);
  deleteSavedsearche(x.id);
});

bthread("SearchLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSearch(x.id);
  updateSearch(x.id);
  updateSearch(x.id);
  verifySearchExists(x.id);
  verifySearchUpdated(x.id);
  deleteSearch(x.id);
});

bthread("SelfjoinLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSelfjoin(x.id);
  updateSelfjoin(x.id);
  updateSelfjoin(x.id);
  verifySelfjoinExists(x.id);
  verifySelfjoinUpdated(x.id);
  deleteSelfjoin(x.id);
});

bthread("SessionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSession(x.id);
  updateSession(x.id);
  updateSession(x.id);
  verifySessionExists(x.id);
  verifySessionUpdated(x.id);
  deleteSession(x.id);
});

bthread("ShowlistguideLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addShowlistguide(x.id);
  updateShowlistguide(x.id);
  updateShowlistguide(x.id);
  verifyShowlistguideExists(x.id);
  verifyShowlistguideUpdated(x.id);
  deleteShowlistguide(x.id);
});

bthread("ShowsidebarLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addShowsidebar(x.id);
  updateShowsidebar(x.id);
  updateShowsidebar(x.id);
  verifyShowsidebarExists(x.id);
  verifyShowsidebarUpdated(x.id);
  deleteShowsidebar(x.id);
});

bthread("ShowsidebaractivityLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addShowsidebaractivity(x.id);
  updateShowsidebaractivity(x.id);
  updateShowsidebaractivity(x.id);
  verifyShowsidebaractivityExists(x.id);
  verifyShowsidebaractivityUpdated(x.id);
  deleteShowsidebaractivity(x.id);
});

bthread("ShowsidebarboardactionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addShowsidebarboardaction(x.id);
  updateShowsidebarboardaction(x.id);
  updateShowsidebarboardaction(x.id);
  verifyShowsidebarboardactionExists(x.id);
  verifyShowsidebarboardactionUpdated(x.id);
  deleteShowsidebarboardaction(x.id);
});

bthread("ShowsidebarmemberLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addShowsidebarmember(x.id);
  updateShowsidebarmember(x.id);
  updateShowsidebarmember(x.id);
  verifyShowsidebarmemberExists(x.id);
  verifyShowsidebarmemberUpdated(x.id);
  deleteShowsidebarmember(x.id);
});

bthread("SocketLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSocket(x.id);
  updateSocket(x.id);
  updateSocket(x.id);
  verifySocketExists(x.id);
  verifySocketUpdated(x.id);
  deleteSocket(x.id);
});

bthread("StateLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addState(x.id);
  updateState(x.id);
  updateState(x.id);
  verifyStateExists(x.id);
  verifyStateUpdated(x.id);
  deleteState(x.id);
});

bthread("StatuLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStatu(x.id);
  updateStatu(x.id);
  updateStatu(x.id);
  verifyStatuExists(x.id);
  verifyStatuUpdated(x.id);
  deleteStatu(x.id);
});

bthread("StickerLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSticker(x.id);
  updateSticker(x.id);
  updateSticker(x.id);
  verifyStickerExists(x.id);
  verifyStickerUpdated(x.id);
  deleteSticker(x.id);
});

bthread("SubscribedLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubscribed(x.id);
  updateSubscribed(x.id);
  updateSubscribed(x.id);
  verifySubscribedExists(x.id);
  verifySubscribedUpdated(x.id);
  deleteSubscribed(x.id);
});

bthread("TextLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addText(x.id);
  updateText(x.id);
  updateText(x.id);
  verifyTextExists(x.id);
  verifyTextUpdated(x.id);
  deleteText(x.id);
});

bthread("TokenLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addToken(x.id);
  updateToken(x.id);
  updateToken(x.id);
  verifyTokenExists(x.id);
  verifyTokenUpdated(x.id);
  deleteToken(x.id);
});

bthread("TypeLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addType(x.id);
  updateType(x.id);
  updateType(x.id);
  verifyTypeExists(x.id);
  verifyTypeUpdated(x.id);
  deleteType(x.id);
});

bthread("UnreadLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUnread(x.id);
  updateUnread(x.id);
  updateUnread(x.id);
  verifyUnreadExists(x.id);
  verifyUnreadUpdated(x.id);
  deleteUnread(x.id);
});

bthread("UsernameLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsername(x.id);
  updateUsername(x.id);
  updateUsername(x.id);
  verifyUsernameExists(x.id);
  verifyUsernameUpdated(x.id);
  deleteUsername(x.id);
});

bthread("VotingLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVoting(x.id);
  updateVoting(x.id);
  updateVoting(x.id);
  verifyVotingExists(x.id);
  verifyVotingUpdated(x.id);
  deleteVoting(x.id);
});

bthread("WebhookLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWebhook(x.id);
  updateWebhook(x.id);
  updateWebhook(x.id);
  verifyWebhookExists(x.id);
  verifyWebhookUpdated(x.id);
  deleteWebhook(x.id);
});

bthread("WebsiteLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWebsite(x.id);
  updateWebsite(x.id);
  updateWebsite(x.id);
  verifyWebsiteExists(x.id);
  verifyWebsiteUpdated(x.id);
  deleteWebsite(x.id);
});

bthread("YellowLifecycle", function () {
  const x = pick([{id: "Y001"}, {id: "Y002"}]);
  addYellow(x.id);
  updateYellow(x.id);
  updateYellow(x.id);
  verifyYellowExists(x.id);
  verifyYellowUpdated(x.id);
  deleteYellow(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Action create verification", function () {
  const e = waitForAnyActionAdded();
  block(matchDeleteAction(e.id, ANY), function () {
    verifyActionExists(e.id);
  });
});

bthread("Action update verification", function () {
  const e = waitForAnyActionUpdated();
  block(matchDeleteAction(e.id, ANY), function () {
    verifyActionUpdated(e.id);
  });
});

bthread("Action delete verification", function () {
  const e = waitForAnyActionDeleted();
  block(matchAddAction(e.id, ANY), function () {
    verifyActionDoesNotExist(e.id);
  });
});

bthread("Active create verification", function () {
  const e = waitForAnyActiveAdded();
  block(matchDeleteActive(e.id, ANY), function () {
    verifyActiveExists(e.id);
  });
});

bthread("Active update verification", function () {
  const e = waitForAnyActiveUpdated();
  block(matchDeleteActive(e.id, ANY), function () {
    verifyActiveUpdated(e.id);
  });
});

bthread("Active delete verification", function () {
  const e = waitForAnyActiveDeleted();
  block(matchAddActive(e.id, ANY), function () {
    verifyActiveDoesNotExist(e.id);
  });
});

bthread("All create verification", function () {
  const e = waitForAnyAllAdded();
  block(matchDeleteAll(e.id, ANY), function () {
    verifyAllExists(e.id);
  });
});

bthread("All update verification", function () {
  const e = waitForAnyAllUpdated();
  block(matchDeleteAll(e.id, ANY), function () {
    verifyAllUpdated(e.id);
  });
});

bthread("All delete verification", function () {
  const e = waitForAnyAllDeleted();
  block(matchAddAll(e.id, ANY), function () {
    verifyAllDoesNotExist(e.id);
  });
});

bthread("Archiveallcard create verification", function () {
  const e = waitForAnyArchiveallcardAdded();
  block(matchDeleteArchiveallcard(e.id, ANY), function () {
    verifyArchiveallcardExists(e.id);
  });
});

bthread("Archiveallcard update verification", function () {
  const e = waitForAnyArchiveallcardUpdated();
  block(matchDeleteArchiveallcard(e.id, ANY), function () {
    verifyArchiveallcardUpdated(e.id);
  });
});

bthread("Archiveallcard delete verification", function () {
  const e = waitForAnyArchiveallcardDeleted();
  block(matchAddArchiveallcard(e.id, ANY), function () {
    verifyArchiveallcardDoesNotExist(e.id);
  });
});

bthread("Associateddomain create verification", function () {
  const e = waitForAnyAssociateddomainAdded();
  block(matchDeleteAssociateddomain(e.id, ANY), function () {
    verifyAssociateddomainExists(e.id);
  });
});

bthread("Associateddomain update verification", function () {
  const e = waitForAnyAssociateddomainUpdated();
  block(matchDeleteAssociateddomain(e.id, ANY), function () {
    verifyAssociateddomainUpdated(e.id);
  });
});

bthread("Associateddomain delete verification", function () {
  const e = waitForAnyAssociateddomainDeleted();
  block(matchAddAssociateddomain(e.id, ANY), function () {
    verifyAssociateddomainDoesNotExist(e.id);
  });
});

bthread("Attachment create verification", function () {
  const e = waitForAnyAttachmentAdded();
  block(matchDeleteAttachment(e.id, ANY), function () {
    verifyAttachmentExists(e.id);
  });
});

bthread("Attachment update verification", function () {
  const e = waitForAnyAttachmentUpdated();
  block(matchDeleteAttachment(e.id, ANY), function () {
    verifyAttachmentUpdated(e.id);
  });
});

bthread("Attachment delete verification", function () {
  const e = waitForAnyAttachmentDeleted();
  block(matchAddAttachment(e.id, ANY), function () {
    verifyAttachmentDoesNotExist(e.id);
  });
});

bthread("Avatar create verification", function () {
  const e = waitForAnyAvatarAdded();
  block(matchDeleteAvatar(e.id, ANY), function () {
    verifyAvatarExists(e.id);
  });
});

bthread("Avatar update verification", function () {
  const e = waitForAnyAvatarUpdated();
  block(matchDeleteAvatar(e.id, ANY), function () {
    verifyAvatarUpdated(e.id);
  });
});

bthread("Avatar delete verification", function () {
  const e = waitForAnyAvatarDeleted();
  block(matchAddAvatar(e.id, ANY), function () {
    verifyAvatarDoesNotExist(e.id);
  });
});

bthread("Avatarsource create verification", function () {
  const e = waitForAnyAvatarsourceAdded();
  block(matchDeleteAvatarsource(e.id, ANY), function () {
    verifyAvatarsourceExists(e.id);
  });
});

bthread("Avatarsource update verification", function () {
  const e = waitForAnyAvatarsourceUpdated();
  block(matchDeleteAvatarsource(e.id, ANY), function () {
    verifyAvatarsourceUpdated(e.id);
  });
});

bthread("Avatarsource delete verification", function () {
  const e = waitForAnyAvatarsourceDeleted();
  block(matchAddAvatarsource(e.id, ANY), function () {
    verifyAvatarsourceDoesNotExist(e.id);
  });
});

bthread("Background create verification", function () {
  const e = waitForAnyBackgroundAdded();
  block(matchDeleteBackground(e.id, ANY), function () {
    verifyBackgroundExists(e.id);
  });
});

bthread("Background update verification", function () {
  const e = waitForAnyBackgroundUpdated();
  block(matchDeleteBackground(e.id, ANY), function () {
    verifyBackgroundUpdated(e.id);
  });
});

bthread("Background delete verification", function () {
  const e = waitForAnyBackgroundDeleted();
  block(matchAddBackground(e.id, ANY), function () {
    verifyBackgroundDoesNotExist(e.id);
  });
});

bthread("Batch create verification", function () {
  const e = waitForAnyBatchAdded();
  block(matchDeleteBatch(e.id, ANY), function () {
    verifyBatchExists(e.id);
  });
});

bthread("Batch update verification", function () {
  const e = waitForAnyBatchUpdated();
  block(matchDeleteBatch(e.id, ANY), function () {
    verifyBatchUpdated(e.id);
  });
});

bthread("Batch delete verification", function () {
  const e = waitForAnyBatchDeleted();
  block(matchAddBatch(e.id, ANY), function () {
    verifyBatchDoesNotExist(e.id);
  });
});

bthread("Bio create verification", function () {
  const e = waitForAnyBioAdded();
  block(matchDeleteBio(e.id, ANY), function () {
    verifyBioExists(e.id);
  });
});

bthread("Bio update verification", function () {
  const e = waitForAnyBioUpdated();
  block(matchDeleteBio(e.id, ANY), function () {
    verifyBioUpdated(e.id);
  });
});

bthread("Bio delete verification", function () {
  const e = waitForAnyBioDeleted();
  block(matchAddBio(e.id, ANY), function () {
    verifyBioDoesNotExist(e.id);
  });
});

bthread("Blue create verification", function () {
  const e = waitForAnyBlueAdded();
  block(matchDeleteBlue(e.id, ANY), function () {
    verifyBlueExists(e.id);
  });
});

bthread("Blue update verification", function () {
  const e = waitForAnyBlueUpdated();
  block(matchDeleteBlue(e.id, ANY), function () {
    verifyBlueUpdated(e.id);
  });
});

bthread("Blue delete verification", function () {
  const e = waitForAnyBlueDeleted();
  block(matchAddBlue(e.id, ANY), function () {
    verifyBlueDoesNotExist(e.id);
  });
});

bthread("Board create verification", function () {
  const e = waitForAnyBoardAdded();
  block(matchDeleteBoard(e.id, ANY), function () {
    verifyBoardExists(e.id);
  });
});

bthread("Board update verification", function () {
  const e = waitForAnyBoardUpdated();
  block(matchDeleteBoard(e.id, ANY), function () {
    verifyBoardUpdated(e.id);
  });
});

bthread("Board delete verification", function () {
  const e = waitForAnyBoardDeleted();
  block(matchAddBoard(e.id, ANY), function () {
    verifyBoardDoesNotExist(e.id);
  });
});

bthread("Boardbackground create verification", function () {
  const e = waitForAnyBoardbackgroundAdded();
  block(matchDeleteBoardbackground(e.id, ANY), function () {
    verifyBoardbackgroundExists(e.id);
  });
});

bthread("Boardbackground update verification", function () {
  const e = waitForAnyBoardbackgroundUpdated();
  block(matchDeleteBoardbackground(e.id, ANY), function () {
    verifyBoardbackgroundUpdated(e.id);
  });
});

bthread("Boardbackground delete verification", function () {
  const e = waitForAnyBoardbackgroundDeleted();
  block(matchAddBoardbackground(e.id, ANY), function () {
    verifyBoardbackgroundDoesNotExist(e.id);
  });
});

bthread("Boardsinvited create verification", function () {
  const e = waitForAnyBoardsinvitedAdded();
  block(matchDeleteBoardsinvited(e.id, ANY), function () {
    verifyBoardsinvitedExists(e.id);
  });
});

bthread("Boardsinvited update verification", function () {
  const e = waitForAnyBoardsinvitedUpdated();
  block(matchDeleteBoardsinvited(e.id, ANY), function () {
    verifyBoardsinvitedUpdated(e.id);
  });
});

bthread("Boardsinvited delete verification", function () {
  const e = waitForAnyBoardsinvitedDeleted();
  block(matchAddBoardsinvited(e.id, ANY), function () {
    verifyBoardsinvitedDoesNotExist(e.id);
  });
});

bthread("Boardstar create verification", function () {
  const e = waitForAnyBoardstarAdded();
  block(matchDeleteBoardstar(e.id, ANY), function () {
    verifyBoardstarExists(e.id);
  });
});

bthread("Boardstar update verification", function () {
  const e = waitForAnyBoardstarUpdated();
  block(matchDeleteBoardstar(e.id, ANY), function () {
    verifyBoardstarUpdated(e.id);
  });
});

bthread("Boardstar delete verification", function () {
  const e = waitForAnyBoardstarDeleted();
  block(matchAddBoardstar(e.id, ANY), function () {
    verifyBoardstarDoesNotExist(e.id);
  });
});

bthread("Boardvisibilityrestrict create verification", function () {
  const e = waitForAnyBoardvisibilityrestrictAdded();
  block(matchDeleteBoardvisibilityrestrict(e.id, ANY), function () {
    verifyBoardvisibilityrestrictExists(e.id);
  });
});

bthread("Boardvisibilityrestrict update verification", function () {
  const e = waitForAnyBoardvisibilityrestrictUpdated();
  block(matchDeleteBoardvisibilityrestrict(e.id, ANY), function () {
    verifyBoardvisibilityrestrictUpdated(e.id);
  });
});

bthread("Boardvisibilityrestrict delete verification", function () {
  const e = waitForAnyBoardvisibilityrestrictDeleted();
  block(matchAddBoardvisibilityrestrict(e.id, ANY), function () {
    verifyBoardvisibilityrestrictDoesNotExist(e.id);
  });
});

bthread("Calendarfeedenabled create verification", function () {
  const e = waitForAnyCalendarfeedenabledAdded();
  block(matchDeleteCalendarfeedenabled(e.id, ANY), function () {
    verifyCalendarfeedenabledExists(e.id);
  });
});

bthread("Calendarfeedenabled update verification", function () {
  const e = waitForAnyCalendarfeedenabledUpdated();
  block(matchDeleteCalendarfeedenabled(e.id, ANY), function () {
    verifyCalendarfeedenabledUpdated(e.id);
  });
});

bthread("Calendarfeedenabled delete verification", function () {
  const e = waitForAnyCalendarfeedenabledDeleted();
  block(matchAddCalendarfeedenabled(e.id, ANY), function () {
    verifyCalendarfeedenabledDoesNotExist(e.id);
  });
});

bthread("Calendarkey create verification", function () {
  const e = waitForAnyCalendarkeyAdded();
  block(matchDeleteCalendarkey(e.id, ANY), function () {
    verifyCalendarkeyExists(e.id);
  });
});

bthread("Calendarkey update verification", function () {
  const e = waitForAnyCalendarkeyUpdated();
  block(matchDeleteCalendarkey(e.id, ANY), function () {
    verifyCalendarkeyUpdated(e.id);
  });
});

bthread("Calendarkey delete verification", function () {
  const e = waitForAnyCalendarkeyDeleted();
  block(matchAddCalendarkey(e.id, ANY), function () {
    verifyCalendarkeyDoesNotExist(e.id);
  });
});

bthread("Callbackurl create verification", function () {
  const e = waitForAnyCallbackurlAdded();
  block(matchDeleteCallbackurl(e.id, ANY), function () {
    verifyCallbackurlExists(e.id);
  });
});

bthread("Callbackurl update verification", function () {
  const e = waitForAnyCallbackurlUpdated();
  block(matchDeleteCallbackurl(e.id, ANY), function () {
    verifyCallbackurlUpdated(e.id);
  });
});

bthread("Callbackurl delete verification", function () {
  const e = waitForAnyCallbackurlDeleted();
  block(matchAddCallbackurl(e.id, ANY), function () {
    verifyCallbackurlDoesNotExist(e.id);
  });
});

bthread("Card create verification", function () {
  const e = waitForAnyCardAdded();
  block(matchDeleteCard(e.id, ANY), function () {
    verifyCardExists(e.id);
  });
});

bthread("Card update verification", function () {
  const e = waitForAnyCardUpdated();
  block(matchDeleteCard(e.id, ANY), function () {
    verifyCardUpdated(e.id);
  });
});

bthread("Card delete verification", function () {
  const e = waitForAnyCardDeleted();
  block(matchAddCard(e.id, ANY), function () {
    verifyCardDoesNotExist(e.id);
  });
});

bthread("Cardaging create verification", function () {
  const e = waitForAnyCardagingAdded();
  block(matchDeleteCardaging(e.id, ANY), function () {
    verifyCardagingExists(e.id);
  });
});

bthread("Cardaging update verification", function () {
  const e = waitForAnyCardagingUpdated();
  block(matchDeleteCardaging(e.id, ANY), function () {
    verifyCardagingUpdated(e.id);
  });
});

bthread("Cardaging delete verification", function () {
  const e = waitForAnyCardagingDeleted();
  block(matchAddCardaging(e.id, ANY), function () {
    verifyCardagingDoesNotExist(e.id);
  });
});

bthread("Cardcover create verification", function () {
  const e = waitForAnyCardcoverAdded();
  block(matchDeleteCardcover(e.id, ANY), function () {
    verifyCardcoverExists(e.id);
  });
});

bthread("Cardcover update verification", function () {
  const e = waitForAnyCardcoverUpdated();
  block(matchDeleteCardcover(e.id, ANY), function () {
    verifyCardcoverUpdated(e.id);
  });
});

bthread("Cardcover delete verification", function () {
  const e = waitForAnyCardcoverDeleted();
  block(matchAddCardcover(e.id, ANY), function () {
    verifyCardcoverDoesNotExist(e.id);
  });
});

bthread("Checkitem create verification", function () {
  const e = waitForAnyCheckitemAdded();
  block(matchDeleteCheckitem(e.id, ANY), function () {
    verifyCheckitemExists(e.id);
  });
});

bthread("Checkitem update verification", function () {
  const e = waitForAnyCheckitemUpdated();
  block(matchDeleteCheckitem(e.id, ANY), function () {
    verifyCheckitemUpdated(e.id);
  });
});

bthread("Checkitem delete verification", function () {
  const e = waitForAnyCheckitemDeleted();
  block(matchAddCheckitem(e.id, ANY), function () {
    verifyCheckitemDoesNotExist(e.id);
  });
});

bthread("Checkitemstate create verification", function () {
  const e = waitForAnyCheckitemstateAdded();
  block(matchDeleteCheckitemstate(e.id, ANY), function () {
    verifyCheckitemstateExists(e.id);
  });
});

bthread("Checkitemstate update verification", function () {
  const e = waitForAnyCheckitemstateUpdated();
  block(matchDeleteCheckitemstate(e.id, ANY), function () {
    verifyCheckitemstateUpdated(e.id);
  });
});

bthread("Checkitemstate delete verification", function () {
  const e = waitForAnyCheckitemstateDeleted();
  block(matchAddCheckitemstate(e.id, ANY), function () {
    verifyCheckitemstateDoesNotExist(e.id);
  });
});

bthread("Checklist create verification", function () {
  const e = waitForAnyChecklistAdded();
  block(matchDeleteChecklist(e.id, ANY), function () {
    verifyChecklistExists(e.id);
  });
});

bthread("Checklist update verification", function () {
  const e = waitForAnyChecklistUpdated();
  block(matchDeleteChecklist(e.id, ANY), function () {
    verifyChecklistUpdated(e.id);
  });
});

bthread("Checklist delete verification", function () {
  const e = waitForAnyChecklistDeleted();
  block(matchAddChecklist(e.id, ANY), function () {
    verifyChecklistDoesNotExist(e.id);
  });
});

bthread("Closed create verification", function () {
  const e = waitForAnyClosedAdded();
  block(matchDeleteClosed(e.id, ANY), function () {
    verifyClosedExists(e.id);
  });
});

bthread("Closed update verification", function () {
  const e = waitForAnyClosedUpdated();
  block(matchDeleteClosed(e.id, ANY), function () {
    verifyClosedUpdated(e.id);
  });
});

bthread("Closed delete verification", function () {
  const e = waitForAnyClosedDeleted();
  block(matchAddClosed(e.id, ANY), function () {
    verifyClosedDoesNotExist(e.id);
  });
});

bthread("Color create verification", function () {
  const e = waitForAnyColorAdded();
  block(matchDeleteColor(e.id, ANY), function () {
    verifyColorExists(e.id);
  });
});

bthread("Color update verification", function () {
  const e = waitForAnyColorUpdated();
  block(matchDeleteColor(e.id, ANY), function () {
    verifyColorUpdated(e.id);
  });
});

bthread("Color delete verification", function () {
  const e = waitForAnyColorDeleted();
  block(matchAddColor(e.id, ANY), function () {
    verifyColorDoesNotExist(e.id);
  });
});

bthread("Colorblind create verification", function () {
  const e = waitForAnyColorblindAdded();
  block(matchDeleteColorblind(e.id, ANY), function () {
    verifyColorblindExists(e.id);
  });
});

bthread("Colorblind update verification", function () {
  const e = waitForAnyColorblindUpdated();
  block(matchDeleteColorblind(e.id, ANY), function () {
    verifyColorblindUpdated(e.id);
  });
});

bthread("Colorblind delete verification", function () {
  const e = waitForAnyColorblindDeleted();
  block(matchAddColorblind(e.id, ANY), function () {
    verifyColorblindDoesNotExist(e.id);
  });
});

bthread("Comment create verification", function () {
  const e = waitForAnyCommentAdded();
  block(matchDeleteComment(e.id, ANY), function () {
    verifyCommentExists(e.id);
  });
});

bthread("Comment update verification", function () {
  const e = waitForAnyCommentUpdated();
  block(matchDeleteComment(e.id, ANY), function () {
    verifyCommentUpdated(e.id);
  });
});

bthread("Comment delete verification", function () {
  const e = waitForAnyCommentDeleted();
  block(matchAddComment(e.id, ANY), function () {
    verifyCommentDoesNotExist(e.id);
  });
});

bthread("Converttocard create verification", function () {
  const e = waitForAnyConverttocardAdded();
  block(matchDeleteConverttocard(e.id, ANY), function () {
    verifyConverttocardExists(e.id);
  });
});

bthread("Converttocard update verification", function () {
  const e = waitForAnyConverttocardUpdated();
  block(matchDeleteConverttocard(e.id, ANY), function () {
    verifyConverttocardUpdated(e.id);
  });
});

bthread("Converttocard delete verification", function () {
  const e = waitForAnyConverttocardDeleted();
  block(matchAddConverttocard(e.id, ANY), function () {
    verifyConverttocardDoesNotExist(e.id);
  });
});

bthread("Customboardbackground create verification", function () {
  const e = waitForAnyCustomboardbackgroundAdded();
  block(matchDeleteCustomboardbackground(e.id, ANY), function () {
    verifyCustomboardbackgroundExists(e.id);
  });
});

bthread("Customboardbackground update verification", function () {
  const e = waitForAnyCustomboardbackgroundUpdated();
  block(matchDeleteCustomboardbackground(e.id, ANY), function () {
    verifyCustomboardbackgroundUpdated(e.id);
  });
});

bthread("Customboardbackground delete verification", function () {
  const e = waitForAnyCustomboardbackgroundDeleted();
  block(matchAddCustomboardbackground(e.id, ANY), function () {
    verifyCustomboardbackgroundDoesNotExist(e.id);
  });
});

bthread("Customemoji create verification", function () {
  const e = waitForAnyCustomemojiAdded();
  block(matchDeleteCustomemoji(e.id, ANY), function () {
    verifyCustomemojiExists(e.id);
  });
});

bthread("Customemoji update verification", function () {
  const e = waitForAnyCustomemojiUpdated();
  block(matchDeleteCustomemoji(e.id, ANY), function () {
    verifyCustomemojiUpdated(e.id);
  });
});

bthread("Customemoji delete verification", function () {
  const e = waitForAnyCustomemojiDeleted();
  block(matchAddCustomemoji(e.id, ANY), function () {
    verifyCustomemojiDoesNotExist(e.id);
  });
});

bthread("Customsticker create verification", function () {
  const e = waitForAnyCustomstickerAdded();
  block(matchDeleteCustomsticker(e.id, ANY), function () {
    verifyCustomstickerExists(e.id);
  });
});

bthread("Customsticker update verification", function () {
  const e = waitForAnyCustomstickerUpdated();
  block(matchDeleteCustomsticker(e.id, ANY), function () {
    verifyCustomstickerUpdated(e.id);
  });
});

bthread("Customsticker delete verification", function () {
  const e = waitForAnyCustomstickerDeleted();
  block(matchAddCustomsticker(e.id, ANY), function () {
    verifyCustomstickerDoesNotExist(e.id);
  });
});

bthread("Deactivated create verification", function () {
  const e = waitForAnyDeactivatedAdded();
  block(matchDeleteDeactivated(e.id, ANY), function () {
    verifyDeactivatedExists(e.id);
  });
});

bthread("Deactivated update verification", function () {
  const e = waitForAnyDeactivatedUpdated();
  block(matchDeleteDeactivated(e.id, ANY), function () {
    verifyDeactivatedUpdated(e.id);
  });
});

bthread("Deactivated delete verification", function () {
  const e = waitForAnyDeactivatedDeleted();
  block(matchAddDeactivated(e.id, ANY), function () {
    verifyDeactivatedDoesNotExist(e.id);
  });
});

bthread("Delta create verification", function () {
  const e = waitForAnyDeltaAdded();
  block(matchDeleteDelta(e.id, ANY), function () {
    verifyDeltaExists(e.id);
  });
});

bthread("Delta update verification", function () {
  const e = waitForAnyDeltaUpdated();
  block(matchDeleteDelta(e.id, ANY), function () {
    verifyDeltaUpdated(e.id);
  });
});

bthread("Delta delete verification", function () {
  const e = waitForAnyDeltaDeleted();
  block(matchAddDelta(e.id, ANY), function () {
    verifyDeltaDoesNotExist(e.id);
  });
});

bthread("Desc create verification", function () {
  const e = waitForAnyDescAdded();
  block(matchDeleteDesc(e.id, ANY), function () {
    verifyDescExists(e.id);
  });
});

bthread("Desc update verification", function () {
  const e = waitForAnyDescUpdated();
  block(matchDeleteDesc(e.id, ANY), function () {
    verifyDescUpdated(e.id);
  });
});

bthread("Desc delete verification", function () {
  const e = waitForAnyDescDeleted();
  block(matchAddDesc(e.id, ANY), function () {
    verifyDescDoesNotExist(e.id);
  });
});

bthread("Description create verification", function () {
  const e = waitForAnyDescriptionAdded();
  block(matchDeleteDescription(e.id, ANY), function () {
    verifyDescriptionExists(e.id);
  });
});

bthread("Description update verification", function () {
  const e = waitForAnyDescriptionUpdated();
  block(matchDeleteDescription(e.id, ANY), function () {
    verifyDescriptionUpdated(e.id);
  });
});

bthread("Description delete verification", function () {
  const e = waitForAnyDescriptionDeleted();
  block(matchAddDescription(e.id, ANY), function () {
    verifyDescriptionDoesNotExist(e.id);
  });
});

bthread("Display create verification", function () {
  const e = waitForAnyDisplayAdded();
  block(matchDeleteDisplay(e.id, ANY), function () {
    verifyDisplayExists(e.id);
  });
});

bthread("Display update verification", function () {
  const e = waitForAnyDisplayUpdated();
  block(matchDeleteDisplay(e.id, ANY), function () {
    verifyDisplayUpdated(e.id);
  });
});

bthread("Display delete verification", function () {
  const e = waitForAnyDisplayDeleted();
  block(matchAddDisplay(e.id, ANY), function () {
    verifyDisplayDoesNotExist(e.id);
  });
});

bthread("Displayname create verification", function () {
  const e = waitForAnyDisplaynameAdded();
  block(matchDeleteDisplayname(e.id, ANY), function () {
    verifyDisplaynameExists(e.id);
  });
});

bthread("Displayname update verification", function () {
  const e = waitForAnyDisplaynameUpdated();
  block(matchDeleteDisplayname(e.id, ANY), function () {
    verifyDisplaynameUpdated(e.id);
  });
});

bthread("Displayname delete verification", function () {
  const e = waitForAnyDisplaynameDeleted();
  block(matchAddDisplayname(e.id, ANY), function () {
    verifyDisplaynameDoesNotExist(e.id);
  });
});

bthread("Due create verification", function () {
  const e = waitForAnyDueAdded();
  block(matchDeleteDue(e.id, ANY), function () {
    verifyDueExists(e.id);
  });
});

bthread("Due update verification", function () {
  const e = waitForAnyDueUpdated();
  block(matchDeleteDue(e.id, ANY), function () {
    verifyDueUpdated(e.id);
  });
});

bthread("Due delete verification", function () {
  const e = waitForAnyDueDeleted();
  block(matchAddDue(e.id, ANY), function () {
    verifyDueDoesNotExist(e.id);
  });
});

bthread("Emailkey create verification", function () {
  const e = waitForAnyEmailkeyAdded();
  block(matchDeleteEmailkey(e.id, ANY), function () {
    verifyEmailkeyExists(e.id);
  });
});

bthread("Emailkey update verification", function () {
  const e = waitForAnyEmailkeyUpdated();
  block(matchDeleteEmailkey(e.id, ANY), function () {
    verifyEmailkeyUpdated(e.id);
  });
});

bthread("Emailkey delete verification", function () {
  const e = waitForAnyEmailkeyDeleted();
  block(matchAddEmailkey(e.id, ANY), function () {
    verifyEmailkeyDoesNotExist(e.id);
  });
});

bthread("Emailposition create verification", function () {
  const e = waitForAnyEmailpositionAdded();
  block(matchDeleteEmailposition(e.id, ANY), function () {
    verifyEmailpositionExists(e.id);
  });
});

bthread("Emailposition update verification", function () {
  const e = waitForAnyEmailpositionUpdated();
  block(matchDeleteEmailposition(e.id, ANY), function () {
    verifyEmailpositionUpdated(e.id);
  });
});

bthread("Emailposition delete verification", function () {
  const e = waitForAnyEmailpositionDeleted();
  block(matchAddEmailposition(e.id, ANY), function () {
    verifyEmailpositionDoesNotExist(e.id);
  });
});

bthread("Entity create verification", function () {
  const e = waitForAnyEntityAdded();
  block(matchDeleteEntity(e.id, ANY), function () {
    verifyEntityExists(e.id);
  });
});

bthread("Entity update verification", function () {
  const e = waitForAnyEntityUpdated();
  block(matchDeleteEntity(e.id, ANY), function () {
    verifyEntityUpdated(e.id);
  });
});

bthread("Entity delete verification", function () {
  const e = waitForAnyEntityDeleted();
  block(matchAddEntity(e.id, ANY), function () {
    verifyEntityDoesNotExist(e.id);
  });
});

bthread("Externalmembersdisabled create verification", function () {
  const e = waitForAnyExternalmembersdisabledAdded();
  block(matchDeleteExternalmembersdisabled(e.id, ANY), function () {
    verifyExternalmembersdisabledExists(e.id);
  });
});

bthread("Externalmembersdisabled update verification", function () {
  const e = waitForAnyExternalmembersdisabledUpdated();
  block(matchDeleteExternalmembersdisabled(e.id, ANY), function () {
    verifyExternalmembersdisabledUpdated(e.id);
  });
});

bthread("Externalmembersdisabled delete verification", function () {
  const e = waitForAnyExternalmembersdisabledDeleted();
  block(matchAddExternalmembersdisabled(e.id, ANY), function () {
    verifyExternalmembersdisabledDoesNotExist(e.id);
  });
});

bthread("Fullname create verification", function () {
  const e = waitForAnyFullnameAdded();
  block(matchDeleteFullname(e.id, ANY), function () {
    verifyFullnameExists(e.id);
  });
});

bthread("Fullname update verification", function () {
  const e = waitForAnyFullnameUpdated();
  block(matchDeleteFullname(e.id, ANY), function () {
    verifyFullnameUpdated(e.id);
  });
});

bthread("Fullname delete verification", function () {
  const e = waitForAnyFullnameDeleted();
  block(matchAddFullname(e.id, ANY), function () {
    verifyFullnameDoesNotExist(e.id);
  });
});

bthread("Generate create verification", function () {
  const e = waitForAnyGenerateAdded();
  block(matchDeleteGenerate(e.id, ANY), function () {
    verifyGenerateExists(e.id);
  });
});

bthread("Generate update verification", function () {
  const e = waitForAnyGenerateUpdated();
  block(matchDeleteGenerate(e.id, ANY), function () {
    verifyGenerateUpdated(e.id);
  });
});

bthread("Generate delete verification", function () {
  const e = waitForAnyGenerateDeleted();
  block(matchAddGenerate(e.id, ANY), function () {
    verifyGenerateDoesNotExist(e.id);
  });
});

bthread("Googleappsversion create verification", function () {
  const e = waitForAnyGoogleappsversionAdded();
  block(matchDeleteGoogleappsversion(e.id, ANY), function () {
    verifyGoogleappsversionExists(e.id);
  });
});

bthread("Googleappsversion update verification", function () {
  const e = waitForAnyGoogleappsversionUpdated();
  block(matchDeleteGoogleappsversion(e.id, ANY), function () {
    verifyGoogleappsversionUpdated(e.id);
  });
});

bthread("Googleappsversion delete verification", function () {
  const e = waitForAnyGoogleappsversionDeleted();
  block(matchAddGoogleappsversion(e.id, ANY), function () {
    verifyGoogleappsversionDoesNotExist(e.id);
  });
});

bthread("Green create verification", function () {
  const e = waitForAnyGreenAdded();
  block(matchDeleteGreen(e.id, ANY), function () {
    verifyGreenExists(e.id);
  });
});

bthread("Green update verification", function () {
  const e = waitForAnyGreenUpdated();
  block(matchDeleteGreen(e.id, ANY), function () {
    verifyGreenUpdated(e.id);
  });
});

bthread("Green delete verification", function () {
  const e = waitForAnyGreenDeleted();
  block(matchAddGreen(e.id, ANY), function () {
    verifyGreenDoesNotExist(e.id);
  });
});

bthread("Idattachmentcover create verification", function () {
  const e = waitForAnyIdattachmentcoverAdded();
  block(matchDeleteIdattachmentcover(e.id, ANY), function () {
    verifyIdattachmentcoverExists(e.id);
  });
});

bthread("Idattachmentcover update verification", function () {
  const e = waitForAnyIdattachmentcoverUpdated();
  block(matchDeleteIdattachmentcover(e.id, ANY), function () {
    verifyIdattachmentcoverUpdated(e.id);
  });
});

bthread("Idattachmentcover delete verification", function () {
  const e = waitForAnyIdattachmentcoverDeleted();
  block(matchAddIdattachmentcover(e.id, ANY), function () {
    verifyIdattachmentcoverDoesNotExist(e.id);
  });
});

bthread("Idboard create verification", function () {
  const e = waitForAnyIdboardAdded();
  block(matchDeleteIdboard(e.id, ANY), function () {
    verifyIdboardExists(e.id);
  });
});

bthread("Idboard update verification", function () {
  const e = waitForAnyIdboardUpdated();
  block(matchDeleteIdboard(e.id, ANY), function () {
    verifyIdboardUpdated(e.id);
  });
});

bthread("Idboard delete verification", function () {
  const e = waitForAnyIdboardDeleted();
  block(matchAddIdboard(e.id, ANY), function () {
    verifyIdboardDoesNotExist(e.id);
  });
});

bthread("Idcard create verification", function () {
  const e = waitForAnyIdcardAdded();
  block(matchDeleteIdcard(e.id, ANY), function () {
    verifyIdcardExists(e.id);
  });
});

bthread("Idcard update verification", function () {
  const e = waitForAnyIdcardUpdated();
  block(matchDeleteIdcard(e.id, ANY), function () {
    verifyIdcardUpdated(e.id);
  });
});

bthread("Idcard delete verification", function () {
  const e = waitForAnyIdcardDeleted();
  block(matchAddIdcard(e.id, ANY), function () {
    verifyIdcardDoesNotExist(e.id);
  });
});

bthread("Idemaillist create verification", function () {
  const e = waitForAnyIdemaillistAdded();
  block(matchDeleteIdemaillist(e.id, ANY), function () {
    verifyIdemaillistExists(e.id);
  });
});

bthread("Idemaillist update verification", function () {
  const e = waitForAnyIdemaillistUpdated();
  block(matchDeleteIdemaillist(e.id, ANY), function () {
    verifyIdemaillistUpdated(e.id);
  });
});

bthread("Idemaillist delete verification", function () {
  const e = waitForAnyIdemaillistDeleted();
  block(matchAddIdemaillist(e.id, ANY), function () {
    verifyIdemaillistDoesNotExist(e.id);
  });
});

bthread("Idlabel create verification", function () {
  const e = waitForAnyIdlabelAdded();
  block(matchDeleteIdlabel(e.id, ANY), function () {
    verifyIdlabelExists(e.id);
  });
});

bthread("Idlabel update verification", function () {
  const e = waitForAnyIdlabelUpdated();
  block(matchDeleteIdlabel(e.id, ANY), function () {
    verifyIdlabelUpdated(e.id);
  });
});

bthread("Idlabel delete verification", function () {
  const e = waitForAnyIdlabelDeleted();
  block(matchAddIdlabel(e.id, ANY), function () {
    verifyIdlabelDoesNotExist(e.id);
  });
});

bthread("Idlist create verification", function () {
  const e = waitForAnyIdlistAdded();
  block(matchDeleteIdlist(e.id, ANY), function () {
    verifyIdlistExists(e.id);
  });
});

bthread("Idlist update verification", function () {
  const e = waitForAnyIdlistUpdated();
  block(matchDeleteIdlist(e.id, ANY), function () {
    verifyIdlistUpdated(e.id);
  });
});

bthread("Idlist delete verification", function () {
  const e = waitForAnyIdlistDeleted();
  block(matchAddIdlist(e.id, ANY), function () {
    verifyIdlistDoesNotExist(e.id);
  });
});

bthread("Idmember create verification", function () {
  const e = waitForAnyIdmemberAdded();
  block(matchDeleteIdmember(e.id, ANY), function () {
    verifyIdmemberExists(e.id);
  });
});

bthread("Idmember update verification", function () {
  const e = waitForAnyIdmemberUpdated();
  block(matchDeleteIdmember(e.id, ANY), function () {
    verifyIdmemberUpdated(e.id);
  });
});

bthread("Idmember delete verification", function () {
  const e = waitForAnyIdmemberDeleted();
  block(matchAddIdmember(e.id, ANY), function () {
    verifyIdmemberDoesNotExist(e.id);
  });
});

bthread("Idmodel create verification", function () {
  const e = waitForAnyIdmodelAdded();
  block(matchDeleteIdmodel(e.id, ANY), function () {
    verifyIdmodelExists(e.id);
  });
});

bthread("Idmodel update verification", function () {
  const e = waitForAnyIdmodelUpdated();
  block(matchDeleteIdmodel(e.id, ANY), function () {
    verifyIdmodelUpdated(e.id);
  });
});

bthread("Idmodel delete verification", function () {
  const e = waitForAnyIdmodelDeleted();
  block(matchAddIdmodel(e.id, ANY), function () {
    verifyIdmodelDoesNotExist(e.id);
  });
});

bthread("Idorganization create verification", function () {
  const e = waitForAnyIdorganizationAdded();
  block(matchDeleteIdorganization(e.id, ANY), function () {
    verifyIdorganizationExists(e.id);
  });
});

bthread("Idorganization update verification", function () {
  const e = waitForAnyIdorganizationUpdated();
  block(matchDeleteIdorganization(e.id, ANY), function () {
    verifyIdorganizationUpdated(e.id);
  });
});

bthread("Idorganization delete verification", function () {
  const e = waitForAnyIdorganizationDeleted();
  block(matchAddIdorganization(e.id, ANY), function () {
    verifyIdorganizationDoesNotExist(e.id);
  });
});

bthread("Initial create verification", function () {
  const e = waitForAnyInitialAdded();
  block(matchDeleteInitial(e.id, ANY), function () {
    verifyInitialExists(e.id);
  });
});

bthread("Initial update verification", function () {
  const e = waitForAnyInitialUpdated();
  block(matchDeleteInitial(e.id, ANY), function () {
    verifyInitialUpdated(e.id);
  });
});

bthread("Initial delete verification", function () {
  const e = waitForAnyInitialDeleted();
  block(matchAddInitial(e.id, ANY), function () {
    verifyInitialDoesNotExist(e.id);
  });
});

bthread("Invitation create verification", function () {
  const e = waitForAnyInvitationAdded();
  block(matchDeleteInvitation(e.id, ANY), function () {
    verifyInvitationExists(e.id);
  });
});

bthread("Invitation update verification", function () {
  const e = waitForAnyInvitationUpdated();
  block(matchDeleteInvitation(e.id, ANY), function () {
    verifyInvitationUpdated(e.id);
  });
});

bthread("Invitation delete verification", function () {
  const e = waitForAnyInvitationDeleted();
  block(matchAddInvitation(e.id, ANY), function () {
    verifyInvitationDoesNotExist(e.id);
  });
});

bthread("Label create verification", function () {
  const e = waitForAnyLabelAdded();
  block(matchDeleteLabel(e.id, ANY), function () {
    verifyLabelExists(e.id);
  });
});

bthread("Label update verification", function () {
  const e = waitForAnyLabelUpdated();
  block(matchDeleteLabel(e.id, ANY), function () {
    verifyLabelUpdated(e.id);
  });
});

bthread("Label delete verification", function () {
  const e = waitForAnyLabelDeleted();
  block(matchAddLabel(e.id, ANY), function () {
    verifyLabelDoesNotExist(e.id);
  });
});

bthread("Labelname create verification", function () {
  const e = waitForAnyLabelnameAdded();
  block(matchDeleteLabelname(e.id, ANY), function () {
    verifyLabelnameExists(e.id);
  });
});

bthread("Labelname update verification", function () {
  const e = waitForAnyLabelnameUpdated();
  block(matchDeleteLabelname(e.id, ANY), function () {
    verifyLabelnameUpdated(e.id);
  });
});

bthread("Labelname delete verification", function () {
  const e = waitForAnyLabelnameDeleted();
  block(matchAddLabelname(e.id, ANY), function () {
    verifyLabelnameDoesNotExist(e.id);
  });
});

bthread("List create verification", function () {
  const e = waitForAnyListAdded();
  block(matchDeleteList(e.id, ANY), function () {
    verifyListExists(e.id);
  });
});

bthread("List update verification", function () {
  const e = waitForAnyListUpdated();
  block(matchDeleteList(e.id, ANY), function () {
    verifyListUpdated(e.id);
  });
});

bthread("List delete verification", function () {
  const e = waitForAnyListDeleted();
  block(matchAddList(e.id, ANY), function () {
    verifyListDoesNotExist(e.id);
  });
});

bthread("Locale create verification", function () {
  const e = waitForAnyLocaleAdded();
  block(matchDeleteLocale(e.id, ANY), function () {
    verifyLocaleExists(e.id);
  });
});

bthread("Locale update verification", function () {
  const e = waitForAnyLocaleUpdated();
  block(matchDeleteLocale(e.id, ANY), function () {
    verifyLocaleUpdated(e.id);
  });
});

bthread("Locale delete verification", function () {
  const e = waitForAnyLocaleDeleted();
  block(matchAddLocale(e.id, ANY), function () {
    verifyLocaleDoesNotExist(e.id);
  });
});

bthread("Logo create verification", function () {
  const e = waitForAnyLogoAdded();
  block(matchDeleteLogo(e.id, ANY), function () {
    verifyLogoExists(e.id);
  });
});

bthread("Logo update verification", function () {
  const e = waitForAnyLogoUpdated();
  block(matchDeleteLogo(e.id, ANY), function () {
    verifyLogoUpdated(e.id);
  });
});

bthread("Logo delete verification", function () {
  const e = waitForAnyLogoDeleted();
  block(matchAddLogo(e.id, ANY), function () {
    verifyLogoDoesNotExist(e.id);
  });
});

bthread("Markassociatednotificationsread create verification", function () {
  const e = waitForAnyMarkassociatednotificationsreadAdded();
  block(matchDeleteMarkassociatednotificationsread(e.id, ANY), function () {
    verifyMarkassociatednotificationsreadExists(e.id);
  });
});

bthread("Markassociatednotificationsread update verification", function () {
  const e = waitForAnyMarkassociatednotificationsreadUpdated();
  block(matchDeleteMarkassociatednotificationsread(e.id, ANY), function () {
    verifyMarkassociatednotificationsreadUpdated(e.id);
  });
});

bthread("Markassociatednotificationsread delete verification", function () {
  const e = waitForAnyMarkassociatednotificationsreadDeleted();
  block(matchAddMarkassociatednotificationsread(e.id, ANY), function () {
    verifyMarkassociatednotificationsreadDoesNotExist(e.id);
  });
});

bthread("Markasviewed create verification", function () {
  const e = waitForAnyMarkasviewedAdded();
  block(matchDeleteMarkasviewed(e.id, ANY), function () {
    verifyMarkasviewedExists(e.id);
  });
});

bthread("Markasviewed update verification", function () {
  const e = waitForAnyMarkasviewedUpdated();
  block(matchDeleteMarkasviewed(e.id, ANY), function () {
    verifyMarkasviewedUpdated(e.id);
  });
});

bthread("Markasviewed delete verification", function () {
  const e = waitForAnyMarkasviewedDeleted();
  block(matchAddMarkasviewed(e.id, ANY), function () {
    verifyMarkasviewedDoesNotExist(e.id);
  });
});

bthread("Member create verification", function () {
  const e = waitForAnyMemberAdded();
  block(matchDeleteMember(e.id, ANY), function () {
    verifyMemberExists(e.id);
  });
});

bthread("Member update verification", function () {
  const e = waitForAnyMemberUpdated();
  block(matchDeleteMember(e.id, ANY), function () {
    verifyMemberUpdated(e.id);
  });
});

bthread("Member delete verification", function () {
  const e = waitForAnyMemberDeleted();
  block(matchAddMember(e.id, ANY), function () {
    verifyMemberDoesNotExist(e.id);
  });
});

bthread("Membercreator create verification", function () {
  const e = waitForAnyMembercreatorAdded();
  block(matchDeleteMembercreator(e.id, ANY), function () {
    verifyMembercreatorExists(e.id);
  });
});

bthread("Membercreator update verification", function () {
  const e = waitForAnyMembercreatorUpdated();
  block(matchDeleteMembercreator(e.id, ANY), function () {
    verifyMembercreatorUpdated(e.id);
  });
});

bthread("Membercreator delete verification", function () {
  const e = waitForAnyMembercreatorDeleted();
  block(matchAddMembercreator(e.id, ANY), function () {
    verifyMembercreatorDoesNotExist(e.id);
  });
});

bthread("Membership create verification", function () {
  const e = waitForAnyMembershipAdded();
  block(matchDeleteMembership(e.id, ANY), function () {
    verifyMembershipExists(e.id);
  });
});

bthread("Membership update verification", function () {
  const e = waitForAnyMembershipUpdated();
  block(matchDeleteMembership(e.id, ANY), function () {
    verifyMembershipUpdated(e.id);
  });
});

bthread("Membership delete verification", function () {
  const e = waitForAnyMembershipDeleted();
  block(matchAddMembership(e.id, ANY), function () {
    verifyMembershipDoesNotExist(e.id);
  });
});

bthread("Membersinvited create verification", function () {
  const e = waitForAnyMembersinvitedAdded();
  block(matchDeleteMembersinvited(e.id, ANY), function () {
    verifyMembersinvitedExists(e.id);
  });
});

bthread("Membersinvited update verification", function () {
  const e = waitForAnyMembersinvitedUpdated();
  block(matchDeleteMembersinvited(e.id, ANY), function () {
    verifyMembersinvitedUpdated(e.id);
  });
});

bthread("Membersinvited delete verification", function () {
  const e = waitForAnyMembersinvitedDeleted();
  block(matchAddMembersinvited(e.id, ANY), function () {
    verifyMembersinvitedDoesNotExist(e.id);
  });
});

bthread("Membersvoted create verification", function () {
  const e = waitForAnyMembersvotedAdded();
  block(matchDeleteMembersvoted(e.id, ANY), function () {
    verifyMembersvotedExists(e.id);
  });
});

bthread("Membersvoted update verification", function () {
  const e = waitForAnyMembersvotedUpdated();
  block(matchDeleteMembersvoted(e.id, ANY), function () {
    verifyMembersvotedUpdated(e.id);
  });
});

bthread("Membersvoted delete verification", function () {
  const e = waitForAnyMembersvotedDeleted();
  block(matchAddMembersvoted(e.id, ANY), function () {
    verifyMembersvotedDoesNotExist(e.id);
  });
});

bthread("Minutesbetweensummary create verification", function () {
  const e = waitForAnyMinutesbetweensummaryAdded();
  block(matchDeleteMinutesbetweensummary(e.id, ANY), function () {
    verifyMinutesbetweensummaryExists(e.id);
  });
});

bthread("Minutesbetweensummary update verification", function () {
  const e = waitForAnyMinutesbetweensummaryUpdated();
  block(matchDeleteMinutesbetweensummary(e.id, ANY), function () {
    verifyMinutesbetweensummaryUpdated(e.id);
  });
});

bthread("Minutesbetweensummary delete verification", function () {
  const e = waitForAnyMinutesbetweensummaryDeleted();
  block(matchAddMinutesbetweensummary(e.id, ANY), function () {
    verifyMinutesbetweensummaryDoesNotExist(e.id);
  });
});

bthread("Moveallcard create verification", function () {
  const e = waitForAnyMoveallcardAdded();
  block(matchDeleteMoveallcard(e.id, ANY), function () {
    verifyMoveallcardExists(e.id);
  });
});

bthread("Moveallcard update verification", function () {
  const e = waitForAnyMoveallcardUpdated();
  block(matchDeleteMoveallcard(e.id, ANY), function () {
    verifyMoveallcardUpdated(e.id);
  });
});

bthread("Moveallcard delete verification", function () {
  const e = waitForAnyMoveallcardDeleted();
  block(matchAddMoveallcard(e.id, ANY), function () {
    verifyMoveallcardDoesNotExist(e.id);
  });
});

bthread("Mypref create verification", function () {
  const e = waitForAnyMyprefAdded();
  block(matchDeleteMypref(e.id, ANY), function () {
    verifyMyprefExists(e.id);
  });
});

bthread("Mypref update verification", function () {
  const e = waitForAnyMyprefUpdated();
  block(matchDeleteMypref(e.id, ANY), function () {
    verifyMyprefUpdated(e.id);
  });
});

bthread("Mypref delete verification", function () {
  const e = waitForAnyMyprefDeleted();
  block(matchAddMypref(e.id, ANY), function () {
    verifyMyprefDoesNotExist(e.id);
  });
});

bthread("Name create verification", function () {
  const e = waitForAnyNameAdded();
  block(matchDeleteName(e.id, ANY), function () {
    verifyNameExists(e.id);
  });
});

bthread("Name update verification", function () {
  const e = waitForAnyNameUpdated();
  block(matchDeleteName(e.id, ANY), function () {
    verifyNameUpdated(e.id);
  });
});

bthread("Name delete verification", function () {
  const e = waitForAnyNameDeleted();
  block(matchAddName(e.id, ANY), function () {
    verifyNameDoesNotExist(e.id);
  });
});

bthread("Notification create verification", function () {
  const e = waitForAnyNotificationAdded();
  block(matchDeleteNotification(e.id, ANY), function () {
    verifyNotificationExists(e.id);
  });
});

bthread("Notification update verification", function () {
  const e = waitForAnyNotificationUpdated();
  block(matchDeleteNotification(e.id, ANY), function () {
    verifyNotificationUpdated(e.id);
  });
});

bthread("Notification delete verification", function () {
  const e = waitForAnyNotificationDeleted();
  block(matchAddNotification(e.id, ANY), function () {
    verifyNotificationDoesNotExist(e.id);
  });
});

bthread("Onetimemessagesdismissed create verification", function () {
  const e = waitForAnyOnetimemessagesdismissedAdded();
  block(matchDeleteOnetimemessagesdismissed(e.id, ANY), function () {
    verifyOnetimemessagesdismissedExists(e.id);
  });
});

bthread("Onetimemessagesdismissed update verification", function () {
  const e = waitForAnyOnetimemessagesdismissedUpdated();
  block(matchDeleteOnetimemessagesdismissed(e.id, ANY), function () {
    verifyOnetimemessagesdismissedUpdated(e.id);
  });
});

bthread("Onetimemessagesdismissed delete verification", function () {
  const e = waitForAnyOnetimemessagesdismissedDeleted();
  block(matchAddOnetimemessagesdismissed(e.id, ANY), function () {
    verifyOnetimemessagesdismissedDoesNotExist(e.id);
  });
});

bthread("Orange create verification", function () {
  const e = waitForAnyOrangeAdded();
  block(matchDeleteOrange(e.id, ANY), function () {
    verifyOrangeExists(e.id);
  });
});

bthread("Orange update verification", function () {
  const e = waitForAnyOrangeUpdated();
  block(matchDeleteOrange(e.id, ANY), function () {
    verifyOrangeUpdated(e.id);
  });
});

bthread("Orange delete verification", function () {
  const e = waitForAnyOrangeDeleted();
  block(matchAddOrange(e.id, ANY), function () {
    verifyOrangeDoesNotExist(e.id);
  });
});

bthread("Org create verification", function () {
  const e = waitForAnyOrgAdded();
  block(matchDeleteOrg(e.id, ANY), function () {
    verifyOrgExists(e.id);
  });
});

bthread("Org update verification", function () {
  const e = waitForAnyOrgUpdated();
  block(matchDeleteOrg(e.id, ANY), function () {
    verifyOrgUpdated(e.id);
  });
});

bthread("Org delete verification", function () {
  const e = waitForAnyOrgDeleted();
  block(matchAddOrg(e.id, ANY), function () {
    verifyOrgDoesNotExist(e.id);
  });
});

bthread("Organization create verification", function () {
  const e = waitForAnyOrganizationAdded();
  block(matchDeleteOrganization(e.id, ANY), function () {
    verifyOrganizationExists(e.id);
  });
});

bthread("Organization update verification", function () {
  const e = waitForAnyOrganizationUpdated();
  block(matchDeleteOrganization(e.id, ANY), function () {
    verifyOrganizationUpdated(e.id);
  });
});

bthread("Organization delete verification", function () {
  const e = waitForAnyOrganizationDeleted();
  block(matchAddOrganization(e.id, ANY), function () {
    verifyOrganizationDoesNotExist(e.id);
  });
});

bthread("Organizationsinvited create verification", function () {
  const e = waitForAnyOrganizationsinvitedAdded();
  block(matchDeleteOrganizationsinvited(e.id, ANY), function () {
    verifyOrganizationsinvitedExists(e.id);
  });
});

bthread("Organizationsinvited update verification", function () {
  const e = waitForAnyOrganizationsinvitedUpdated();
  block(matchDeleteOrganizationsinvited(e.id, ANY), function () {
    verifyOrganizationsinvitedUpdated(e.id);
  });
});

bthread("Organizationsinvited delete verification", function () {
  const e = waitForAnyOrganizationsinvitedDeleted();
  block(matchAddOrganizationsinvited(e.id, ANY), function () {
    verifyOrganizationsinvitedDoesNotExist(e.id);
  });
});

bthread("Orginviterestrict create verification", function () {
  const e = waitForAnyOrginviterestrictAdded();
  block(matchDeleteOrginviterestrict(e.id, ANY), function () {
    verifyOrginviterestrictExists(e.id);
  });
});

bthread("Orginviterestrict update verification", function () {
  const e = waitForAnyOrginviterestrictUpdated();
  block(matchDeleteOrginviterestrict(e.id, ANY), function () {
    verifyOrginviterestrictUpdated(e.id);
  });
});

bthread("Orginviterestrict delete verification", function () {
  const e = waitForAnyOrginviterestrictDeleted();
  block(matchAddOrginviterestrict(e.id, ANY), function () {
    verifyOrginviterestrictDoesNotExist(e.id);
  });
});

bthread("Permissionlevel create verification", function () {
  const e = waitForAnyPermissionlevelAdded();
  block(matchDeletePermissionlevel(e.id, ANY), function () {
    verifyPermissionlevelExists(e.id);
  });
});

bthread("Permissionlevel update verification", function () {
  const e = waitForAnyPermissionlevelUpdated();
  block(matchDeletePermissionlevel(e.id, ANY), function () {
    verifyPermissionlevelUpdated(e.id);
  });
});

bthread("Permissionlevel delete verification", function () {
  const e = waitForAnyPermissionlevelDeleted();
  block(matchAddPermissionlevel(e.id, ANY), function () {
    verifyPermissionlevelDoesNotExist(e.id);
  });
});

bthread("Po create verification", function () {
  const e = waitForAnyPoAdded();
  block(matchDeletePo(e.id, ANY), function () {
    verifyPoExists(e.id);
  });
});

bthread("Po update verification", function () {
  const e = waitForAnyPoUpdated();
  block(matchDeletePo(e.id, ANY), function () {
    verifyPoUpdated(e.id);
  });
});

bthread("Po delete verification", function () {
  const e = waitForAnyPoDeleted();
  block(matchAddPo(e.id, ANY), function () {
    verifyPoDoesNotExist(e.id);
  });
});

bthread("Powerup create verification", function () {
  const e = waitForAnyPowerupAdded();
  block(matchDeletePowerup(e.id, ANY), function () {
    verifyPowerupExists(e.id);
  });
});

bthread("Powerup update verification", function () {
  const e = waitForAnyPowerupUpdated();
  block(matchDeletePowerup(e.id, ANY), function () {
    verifyPowerupUpdated(e.id);
  });
});

bthread("Powerup delete verification", function () {
  const e = waitForAnyPowerupDeleted();
  block(matchAddPowerup(e.id, ANY), function () {
    verifyPowerupDoesNotExist(e.id);
  });
});

bthread("Pref create verification", function () {
  const e = waitForAnyPrefAdded();
  block(matchDeletePref(e.id, ANY), function () {
    verifyPrefExists(e.id);
  });
});

bthread("Pref update verification", function () {
  const e = waitForAnyPrefUpdated();
  block(matchDeletePref(e.id, ANY), function () {
    verifyPrefUpdated(e.id);
  });
});

bthread("Pref delete verification", function () {
  const e = waitForAnyPrefDeleted();
  block(matchAddPref(e.id, ANY), function () {
    verifyPrefDoesNotExist(e.id);
  });
});

bthread("Private create verification", function () {
  const e = waitForAnyPrivateAdded();
  block(matchDeletePrivate(e.id, ANY), function () {
    verifyPrivateExists(e.id);
  });
});

bthread("Private update verification", function () {
  const e = waitForAnyPrivateUpdated();
  block(matchDeletePrivate(e.id, ANY), function () {
    verifyPrivateUpdated(e.id);
  });
});

bthread("Private delete verification", function () {
  const e = waitForAnyPrivateDeleted();
  block(matchAddPrivate(e.id, ANY), function () {
    verifyPrivateDoesNotExist(e.id);
  });
});

bthread("Public create verification", function () {
  const e = waitForAnyPublicAdded();
  block(matchDeletePublic(e.id, ANY), function () {
    verifyPublicExists(e.id);
  });
});

bthread("Public update verification", function () {
  const e = waitForAnyPublicUpdated();
  block(matchDeletePublic(e.id, ANY), function () {
    verifyPublicUpdated(e.id);
  });
});

bthread("Public delete verification", function () {
  const e = waitForAnyPublicDeleted();
  block(matchAddPublic(e.id, ANY), function () {
    verifyPublicDoesNotExist(e.id);
  });
});

bthread("Purple create verification", function () {
  const e = waitForAnyPurpleAdded();
  block(matchDeletePurple(e.id, ANY), function () {
    verifyPurpleExists(e.id);
  });
});

bthread("Purple update verification", function () {
  const e = waitForAnyPurpleUpdated();
  block(matchDeletePurple(e.id, ANY), function () {
    verifyPurpleUpdated(e.id);
  });
});

bthread("Purple delete verification", function () {
  const e = waitForAnyPurpleDeleted();
  block(matchAddPurple(e.id, ANY), function () {
    verifyPurpleDoesNotExist(e.id);
  });
});

bthread("Query create verification", function () {
  const e = waitForAnyQueryAdded();
  block(matchDeleteQuery(e.id, ANY), function () {
    verifyQueryExists(e.id);
  });
});

bthread("Query update verification", function () {
  const e = waitForAnyQueryUpdated();
  block(matchDeleteQuery(e.id, ANY), function () {
    verifyQueryUpdated(e.id);
  });
});

bthread("Query delete verification", function () {
  const e = waitForAnyQueryDeleted();
  block(matchAddQuery(e.id, ANY), function () {
    verifyQueryDoesNotExist(e.id);
  });
});

bthread("Read create verification", function () {
  const e = waitForAnyReadAdded();
  block(matchDeleteRead(e.id, ANY), function () {
    verifyReadExists(e.id);
  });
});

bthread("Read update verification", function () {
  const e = waitForAnyReadUpdated();
  block(matchDeleteRead(e.id, ANY), function () {
    verifyReadUpdated(e.id);
  });
});

bthread("Read delete verification", function () {
  const e = waitForAnyReadDeleted();
  block(matchAddRead(e.id, ANY), function () {
    verifyReadDoesNotExist(e.id);
  });
});

bthread("Red create verification", function () {
  const e = waitForAnyRedAdded();
  block(matchDeleteRed(e.id, ANY), function () {
    verifyRedExists(e.id);
  });
});

bthread("Red update verification", function () {
  const e = waitForAnyRedUpdated();
  block(matchDeleteRed(e.id, ANY), function () {
    verifyRedUpdated(e.id);
  });
});

bthread("Red delete verification", function () {
  const e = waitForAnyRedDeleted();
  block(matchAddRed(e.id, ANY), function () {
    verifyRedDoesNotExist(e.id);
  });
});

bthread("Savedsearche create verification", function () {
  const e = waitForAnySavedsearcheAdded();
  block(matchDeleteSavedsearche(e.id, ANY), function () {
    verifySavedsearcheExists(e.id);
  });
});

bthread("Savedsearche update verification", function () {
  const e = waitForAnySavedsearcheUpdated();
  block(matchDeleteSavedsearche(e.id, ANY), function () {
    verifySavedsearcheUpdated(e.id);
  });
});

bthread("Savedsearche delete verification", function () {
  const e = waitForAnySavedsearcheDeleted();
  block(matchAddSavedsearche(e.id, ANY), function () {
    verifySavedsearcheDoesNotExist(e.id);
  });
});

bthread("Search create verification", function () {
  const e = waitForAnySearchAdded();
  block(matchDeleteSearch(e.id, ANY), function () {
    verifySearchExists(e.id);
  });
});

bthread("Search update verification", function () {
  const e = waitForAnySearchUpdated();
  block(matchDeleteSearch(e.id, ANY), function () {
    verifySearchUpdated(e.id);
  });
});

bthread("Search delete verification", function () {
  const e = waitForAnySearchDeleted();
  block(matchAddSearch(e.id, ANY), function () {
    verifySearchDoesNotExist(e.id);
  });
});

bthread("Selfjoin create verification", function () {
  const e = waitForAnySelfjoinAdded();
  block(matchDeleteSelfjoin(e.id, ANY), function () {
    verifySelfjoinExists(e.id);
  });
});

bthread("Selfjoin update verification", function () {
  const e = waitForAnySelfjoinUpdated();
  block(matchDeleteSelfjoin(e.id, ANY), function () {
    verifySelfjoinUpdated(e.id);
  });
});

bthread("Selfjoin delete verification", function () {
  const e = waitForAnySelfjoinDeleted();
  block(matchAddSelfjoin(e.id, ANY), function () {
    verifySelfjoinDoesNotExist(e.id);
  });
});

bthread("Session create verification", function () {
  const e = waitForAnySessionAdded();
  block(matchDeleteSession(e.id, ANY), function () {
    verifySessionExists(e.id);
  });
});

bthread("Session update verification", function () {
  const e = waitForAnySessionUpdated();
  block(matchDeleteSession(e.id, ANY), function () {
    verifySessionUpdated(e.id);
  });
});

bthread("Session delete verification", function () {
  const e = waitForAnySessionDeleted();
  block(matchAddSession(e.id, ANY), function () {
    verifySessionDoesNotExist(e.id);
  });
});

bthread("Showlistguide create verification", function () {
  const e = waitForAnyShowlistguideAdded();
  block(matchDeleteShowlistguide(e.id, ANY), function () {
    verifyShowlistguideExists(e.id);
  });
});

bthread("Showlistguide update verification", function () {
  const e = waitForAnyShowlistguideUpdated();
  block(matchDeleteShowlistguide(e.id, ANY), function () {
    verifyShowlistguideUpdated(e.id);
  });
});

bthread("Showlistguide delete verification", function () {
  const e = waitForAnyShowlistguideDeleted();
  block(matchAddShowlistguide(e.id, ANY), function () {
    verifyShowlistguideDoesNotExist(e.id);
  });
});

bthread("Showsidebar create verification", function () {
  const e = waitForAnyShowsidebarAdded();
  block(matchDeleteShowsidebar(e.id, ANY), function () {
    verifyShowsidebarExists(e.id);
  });
});

bthread("Showsidebar update verification", function () {
  const e = waitForAnyShowsidebarUpdated();
  block(matchDeleteShowsidebar(e.id, ANY), function () {
    verifyShowsidebarUpdated(e.id);
  });
});

bthread("Showsidebar delete verification", function () {
  const e = waitForAnyShowsidebarDeleted();
  block(matchAddShowsidebar(e.id, ANY), function () {
    verifyShowsidebarDoesNotExist(e.id);
  });
});

bthread("Showsidebaractivity create verification", function () {
  const e = waitForAnyShowsidebaractivityAdded();
  block(matchDeleteShowsidebaractivity(e.id, ANY), function () {
    verifyShowsidebaractivityExists(e.id);
  });
});

bthread("Showsidebaractivity update verification", function () {
  const e = waitForAnyShowsidebaractivityUpdated();
  block(matchDeleteShowsidebaractivity(e.id, ANY), function () {
    verifyShowsidebaractivityUpdated(e.id);
  });
});

bthread("Showsidebaractivity delete verification", function () {
  const e = waitForAnyShowsidebaractivityDeleted();
  block(matchAddShowsidebaractivity(e.id, ANY), function () {
    verifyShowsidebaractivityDoesNotExist(e.id);
  });
});

bthread("Showsidebarboardaction create verification", function () {
  const e = waitForAnyShowsidebarboardactionAdded();
  block(matchDeleteShowsidebarboardaction(e.id, ANY), function () {
    verifyShowsidebarboardactionExists(e.id);
  });
});

bthread("Showsidebarboardaction update verification", function () {
  const e = waitForAnyShowsidebarboardactionUpdated();
  block(matchDeleteShowsidebarboardaction(e.id, ANY), function () {
    verifyShowsidebarboardactionUpdated(e.id);
  });
});

bthread("Showsidebarboardaction delete verification", function () {
  const e = waitForAnyShowsidebarboardactionDeleted();
  block(matchAddShowsidebarboardaction(e.id, ANY), function () {
    verifyShowsidebarboardactionDoesNotExist(e.id);
  });
});

bthread("Showsidebarmember create verification", function () {
  const e = waitForAnyShowsidebarmemberAdded();
  block(matchDeleteShowsidebarmember(e.id, ANY), function () {
    verifyShowsidebarmemberExists(e.id);
  });
});

bthread("Showsidebarmember update verification", function () {
  const e = waitForAnyShowsidebarmemberUpdated();
  block(matchDeleteShowsidebarmember(e.id, ANY), function () {
    verifyShowsidebarmemberUpdated(e.id);
  });
});

bthread("Showsidebarmember delete verification", function () {
  const e = waitForAnyShowsidebarmemberDeleted();
  block(matchAddShowsidebarmember(e.id, ANY), function () {
    verifyShowsidebarmemberDoesNotExist(e.id);
  });
});

bthread("Socket create verification", function () {
  const e = waitForAnySocketAdded();
  block(matchDeleteSocket(e.id, ANY), function () {
    verifySocketExists(e.id);
  });
});

bthread("Socket update verification", function () {
  const e = waitForAnySocketUpdated();
  block(matchDeleteSocket(e.id, ANY), function () {
    verifySocketUpdated(e.id);
  });
});

bthread("Socket delete verification", function () {
  const e = waitForAnySocketDeleted();
  block(matchAddSocket(e.id, ANY), function () {
    verifySocketDoesNotExist(e.id);
  });
});

bthread("State create verification", function () {
  const e = waitForAnyStateAdded();
  block(matchDeleteState(e.id, ANY), function () {
    verifyStateExists(e.id);
  });
});

bthread("State update verification", function () {
  const e = waitForAnyStateUpdated();
  block(matchDeleteState(e.id, ANY), function () {
    verifyStateUpdated(e.id);
  });
});

bthread("State delete verification", function () {
  const e = waitForAnyStateDeleted();
  block(matchAddState(e.id, ANY), function () {
    verifyStateDoesNotExist(e.id);
  });
});

bthread("Statu create verification", function () {
  const e = waitForAnyStatuAdded();
  block(matchDeleteStatu(e.id, ANY), function () {
    verifyStatuExists(e.id);
  });
});

bthread("Statu update verification", function () {
  const e = waitForAnyStatuUpdated();
  block(matchDeleteStatu(e.id, ANY), function () {
    verifyStatuUpdated(e.id);
  });
});

bthread("Statu delete verification", function () {
  const e = waitForAnyStatuDeleted();
  block(matchAddStatu(e.id, ANY), function () {
    verifyStatuDoesNotExist(e.id);
  });
});

bthread("Sticker create verification", function () {
  const e = waitForAnyStickerAdded();
  block(matchDeleteSticker(e.id, ANY), function () {
    verifyStickerExists(e.id);
  });
});

bthread("Sticker update verification", function () {
  const e = waitForAnyStickerUpdated();
  block(matchDeleteSticker(e.id, ANY), function () {
    verifyStickerUpdated(e.id);
  });
});

bthread("Sticker delete verification", function () {
  const e = waitForAnyStickerDeleted();
  block(matchAddSticker(e.id, ANY), function () {
    verifyStickerDoesNotExist(e.id);
  });
});

bthread("Subscribed create verification", function () {
  const e = waitForAnySubscribedAdded();
  block(matchDeleteSubscribed(e.id, ANY), function () {
    verifySubscribedExists(e.id);
  });
});

bthread("Subscribed update verification", function () {
  const e = waitForAnySubscribedUpdated();
  block(matchDeleteSubscribed(e.id, ANY), function () {
    verifySubscribedUpdated(e.id);
  });
});

bthread("Subscribed delete verification", function () {
  const e = waitForAnySubscribedDeleted();
  block(matchAddSubscribed(e.id, ANY), function () {
    verifySubscribedDoesNotExist(e.id);
  });
});

bthread("Text create verification", function () {
  const e = waitForAnyTextAdded();
  block(matchDeleteText(e.id, ANY), function () {
    verifyTextExists(e.id);
  });
});

bthread("Text update verification", function () {
  const e = waitForAnyTextUpdated();
  block(matchDeleteText(e.id, ANY), function () {
    verifyTextUpdated(e.id);
  });
});

bthread("Text delete verification", function () {
  const e = waitForAnyTextDeleted();
  block(matchAddText(e.id, ANY), function () {
    verifyTextDoesNotExist(e.id);
  });
});

bthread("Token create verification", function () {
  const e = waitForAnyTokenAdded();
  block(matchDeleteToken(e.id, ANY), function () {
    verifyTokenExists(e.id);
  });
});

bthread("Token update verification", function () {
  const e = waitForAnyTokenUpdated();
  block(matchDeleteToken(e.id, ANY), function () {
    verifyTokenUpdated(e.id);
  });
});

bthread("Token delete verification", function () {
  const e = waitForAnyTokenDeleted();
  block(matchAddToken(e.id, ANY), function () {
    verifyTokenDoesNotExist(e.id);
  });
});

bthread("Type create verification", function () {
  const e = waitForAnyTypeAdded();
  block(matchDeleteType(e.id, ANY), function () {
    verifyTypeExists(e.id);
  });
});

bthread("Type update verification", function () {
  const e = waitForAnyTypeUpdated();
  block(matchDeleteType(e.id, ANY), function () {
    verifyTypeUpdated(e.id);
  });
});

bthread("Type delete verification", function () {
  const e = waitForAnyTypeDeleted();
  block(matchAddType(e.id, ANY), function () {
    verifyTypeDoesNotExist(e.id);
  });
});

bthread("Unread create verification", function () {
  const e = waitForAnyUnreadAdded();
  block(matchDeleteUnread(e.id, ANY), function () {
    verifyUnreadExists(e.id);
  });
});

bthread("Unread update verification", function () {
  const e = waitForAnyUnreadUpdated();
  block(matchDeleteUnread(e.id, ANY), function () {
    verifyUnreadUpdated(e.id);
  });
});

bthread("Unread delete verification", function () {
  const e = waitForAnyUnreadDeleted();
  block(matchAddUnread(e.id, ANY), function () {
    verifyUnreadDoesNotExist(e.id);
  });
});

bthread("Username create verification", function () {
  const e = waitForAnyUsernameAdded();
  block(matchDeleteUsername(e.id, ANY), function () {
    verifyUsernameExists(e.id);
  });
});

bthread("Username update verification", function () {
  const e = waitForAnyUsernameUpdated();
  block(matchDeleteUsername(e.id, ANY), function () {
    verifyUsernameUpdated(e.id);
  });
});

bthread("Username delete verification", function () {
  const e = waitForAnyUsernameDeleted();
  block(matchAddUsername(e.id, ANY), function () {
    verifyUsernameDoesNotExist(e.id);
  });
});

bthread("Voting create verification", function () {
  const e = waitForAnyVotingAdded();
  block(matchDeleteVoting(e.id, ANY), function () {
    verifyVotingExists(e.id);
  });
});

bthread("Voting update verification", function () {
  const e = waitForAnyVotingUpdated();
  block(matchDeleteVoting(e.id, ANY), function () {
    verifyVotingUpdated(e.id);
  });
});

bthread("Voting delete verification", function () {
  const e = waitForAnyVotingDeleted();
  block(matchAddVoting(e.id, ANY), function () {
    verifyVotingDoesNotExist(e.id);
  });
});

bthread("Webhook create verification", function () {
  const e = waitForAnyWebhookAdded();
  block(matchDeleteWebhook(e.id, ANY), function () {
    verifyWebhookExists(e.id);
  });
});

bthread("Webhook update verification", function () {
  const e = waitForAnyWebhookUpdated();
  block(matchDeleteWebhook(e.id, ANY), function () {
    verifyWebhookUpdated(e.id);
  });
});

bthread("Webhook delete verification", function () {
  const e = waitForAnyWebhookDeleted();
  block(matchAddWebhook(e.id, ANY), function () {
    verifyWebhookDoesNotExist(e.id);
  });
});

bthread("Website create verification", function () {
  const e = waitForAnyWebsiteAdded();
  block(matchDeleteWebsite(e.id, ANY), function () {
    verifyWebsiteExists(e.id);
  });
});

bthread("Website update verification", function () {
  const e = waitForAnyWebsiteUpdated();
  block(matchDeleteWebsite(e.id, ANY), function () {
    verifyWebsiteUpdated(e.id);
  });
});

bthread("Website delete verification", function () {
  const e = waitForAnyWebsiteDeleted();
  block(matchAddWebsite(e.id, ANY), function () {
    verifyWebsiteDoesNotExist(e.id);
  });
});

bthread("Yellow create verification", function () {
  const e = waitForAnyYellowAdded();
  block(matchDeleteYellow(e.id, ANY), function () {
    verifyYellowExists(e.id);
  });
});

bthread("Yellow update verification", function () {
  const e = waitForAnyYellowUpdated();
  block(matchDeleteYellow(e.id, ANY), function () {
    verifyYellowUpdated(e.id);
  });
});

bthread("Yellow delete verification", function () {
  const e = waitForAnyYellowDeleted();
  block(matchAddYellow(e.id, ANY), function () {
    verifyYellowDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Action", function () {
  const x = waitForAnyActionAdded();
  block(matchAddAction(x.id, ANY), function () {});
});

bthread("Guard: Unique Active", function () {
  const x = waitForAnyActiveAdded();
  block(matchAddActive(x.id, ANY), function () {});
});

bthread("Guard: Unique All", function () {
  const x = waitForAnyAllAdded();
  block(matchAddAll(x.id, ANY), function () {});
});

bthread("Guard: Unique Archiveallcard", function () {
  const x = waitForAnyArchiveallcardAdded();
  block(matchAddArchiveallcard(x.id, ANY), function () {});
});

bthread("Guard: Unique Associateddomain", function () {
  const x = waitForAnyAssociateddomainAdded();
  block(matchAddAssociateddomain(x.id, ANY), function () {});
});

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  block(matchAddAttachment(x.id, ANY), function () {});
});

bthread("Guard: Unique Avatar", function () {
  const x = waitForAnyAvatarAdded();
  block(matchAddAvatar(x.id, ANY), function () {});
});

bthread("Guard: Unique Avatarsource", function () {
  const x = waitForAnyAvatarsourceAdded();
  block(matchAddAvatarsource(x.id, ANY), function () {});
});

bthread("Guard: Unique Background", function () {
  const x = waitForAnyBackgroundAdded();
  block(matchAddBackground(x.id, ANY), function () {});
});

bthread("Guard: Unique Batch", function () {
  const x = waitForAnyBatchAdded();
  block(matchAddBatch(x.id, ANY), function () {});
});

bthread("Guard: Unique Bio", function () {
  const x = waitForAnyBioAdded();
  block(matchAddBio(x.id, ANY), function () {});
});

bthread("Guard: Unique Blue", function () {
  const x = waitForAnyBlueAdded();
  block(matchAddBlue(x.id, ANY), function () {});
});

bthread("Guard: Unique Board", function () {
  const x = waitForAnyBoardAdded();
  block(matchAddBoard(x.id, ANY), function () {});
});

bthread("Guard: Unique Boardbackground", function () {
  const x = waitForAnyBoardbackgroundAdded();
  block(matchAddBoardbackground(x.id, ANY), function () {});
});

bthread("Guard: Unique Boardsinvited", function () {
  const x = waitForAnyBoardsinvitedAdded();
  block(matchAddBoardsinvited(x.id, ANY), function () {});
});

bthread("Guard: Unique Boardstar", function () {
  const x = waitForAnyBoardstarAdded();
  block(matchAddBoardstar(x.id, ANY), function () {});
});

bthread("Guard: Unique Boardvisibilityrestrict", function () {
  const x = waitForAnyBoardvisibilityrestrictAdded();
  block(matchAddBoardvisibilityrestrict(x.id, ANY), function () {});
});

bthread("Guard: Unique Calendarfeedenabled", function () {
  const x = waitForAnyCalendarfeedenabledAdded();
  block(matchAddCalendarfeedenabled(x.id, ANY), function () {});
});

bthread("Guard: Unique Calendarkey", function () {
  const x = waitForAnyCalendarkeyAdded();
  block(matchAddCalendarkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Callbackurl", function () {
  const x = waitForAnyCallbackurlAdded();
  block(matchAddCallbackurl(x.id, ANY), function () {});
});

bthread("Guard: Unique Card", function () {
  const x = waitForAnyCardAdded();
  block(matchAddCard(x.id, ANY), function () {});
});

bthread("Guard: Unique Cardaging", function () {
  const x = waitForAnyCardagingAdded();
  block(matchAddCardaging(x.id, ANY), function () {});
});

bthread("Guard: Unique Cardcover", function () {
  const x = waitForAnyCardcoverAdded();
  block(matchAddCardcover(x.id, ANY), function () {});
});

bthread("Guard: Unique Checkitem", function () {
  const x = waitForAnyCheckitemAdded();
  block(matchAddCheckitem(x.id, ANY), function () {});
});

bthread("Guard: Unique Checkitemstate", function () {
  const x = waitForAnyCheckitemstateAdded();
  block(matchAddCheckitemstate(x.id, ANY), function () {});
});

bthread("Guard: Unique Checklist", function () {
  const x = waitForAnyChecklistAdded();
  block(matchAddChecklist(x.id, ANY), function () {});
});

bthread("Guard: Unique Closed", function () {
  const x = waitForAnyClosedAdded();
  block(matchAddClosed(x.id, ANY), function () {});
});

bthread("Guard: Unique Color", function () {
  const x = waitForAnyColorAdded();
  block(matchAddColor(x.id, ANY), function () {});
});

bthread("Guard: Unique Colorblind", function () {
  const x = waitForAnyColorblindAdded();
  block(matchAddColorblind(x.id, ANY), function () {});
});

bthread("Guard: Unique Comment", function () {
  const x = waitForAnyCommentAdded();
  block(matchAddComment(x.id, ANY), function () {});
});

bthread("Guard: Unique Converttocard", function () {
  const x = waitForAnyConverttocardAdded();
  block(matchAddConverttocard(x.id, ANY), function () {});
});

bthread("Guard: Unique Customboardbackground", function () {
  const x = waitForAnyCustomboardbackgroundAdded();
  block(matchAddCustomboardbackground(x.id, ANY), function () {});
});

bthread("Guard: Unique Customemoji", function () {
  const x = waitForAnyCustomemojiAdded();
  block(matchAddCustomemoji(x.id, ANY), function () {});
});

bthread("Guard: Unique Customsticker", function () {
  const x = waitForAnyCustomstickerAdded();
  block(matchAddCustomsticker(x.id, ANY), function () {});
});

bthread("Guard: Unique Deactivated", function () {
  const x = waitForAnyDeactivatedAdded();
  block(matchAddDeactivated(x.id, ANY), function () {});
});

bthread("Guard: Unique Delta", function () {
  const x = waitForAnyDeltaAdded();
  block(matchAddDelta(x.id, ANY), function () {});
});

bthread("Guard: Unique Desc", function () {
  const x = waitForAnyDescAdded();
  block(matchAddDesc(x.id, ANY), function () {});
});

bthread("Guard: Unique Description", function () {
  const x = waitForAnyDescriptionAdded();
  block(matchAddDescription(x.id, ANY), function () {});
});

bthread("Guard: Unique Display", function () {
  const x = waitForAnyDisplayAdded();
  block(matchAddDisplay(x.id, ANY), function () {});
});

bthread("Guard: Unique Displayname", function () {
  const x = waitForAnyDisplaynameAdded();
  block(matchAddDisplayname(x.id, ANY), function () {});
});

bthread("Guard: Unique Due", function () {
  const x = waitForAnyDueAdded();
  block(matchAddDue(x.id, ANY), function () {});
});

bthread("Guard: Unique Emailkey", function () {
  const x = waitForAnyEmailkeyAdded();
  block(matchAddEmailkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Emailposition", function () {
  const x = waitForAnyEmailpositionAdded();
  block(matchAddEmailposition(x.id, ANY), function () {});
});

bthread("Guard: Unique Entity", function () {
  const x = waitForAnyEntityAdded();
  block(matchAddEntity(x.id, ANY), function () {});
});

bthread("Guard: Unique Externalmembersdisabled", function () {
  const x = waitForAnyExternalmembersdisabledAdded();
  block(matchAddExternalmembersdisabled(x.id, ANY), function () {});
});

bthread("Guard: Unique Fullname", function () {
  const x = waitForAnyFullnameAdded();
  block(matchAddFullname(x.id, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  block(matchAddGenerate(x.id, ANY), function () {});
});

bthread("Guard: Unique Googleappsversion", function () {
  const x = waitForAnyGoogleappsversionAdded();
  block(matchAddGoogleappsversion(x.id, ANY), function () {});
});

bthread("Guard: Unique Green", function () {
  const x = waitForAnyGreenAdded();
  block(matchAddGreen(x.id, ANY), function () {});
});

bthread("Guard: Unique Idattachmentcover", function () {
  const x = waitForAnyIdattachmentcoverAdded();
  block(matchAddIdattachmentcover(x.id, ANY), function () {});
});

bthread("Guard: Unique Idboard", function () {
  const x = waitForAnyIdboardAdded();
  block(matchAddIdboard(x.id, ANY), function () {});
});

bthread("Guard: Unique Idcard", function () {
  const x = waitForAnyIdcardAdded();
  block(matchAddIdcard(x.id, ANY), function () {});
});

bthread("Guard: Unique Idemaillist", function () {
  const x = waitForAnyIdemaillistAdded();
  block(matchAddIdemaillist(x.id, ANY), function () {});
});

bthread("Guard: Unique Idlabel", function () {
  const x = waitForAnyIdlabelAdded();
  block(matchAddIdlabel(x.id, ANY), function () {});
});

bthread("Guard: Unique Idlist", function () {
  const x = waitForAnyIdlistAdded();
  block(matchAddIdlist(x.id, ANY), function () {});
});

bthread("Guard: Unique Idmember", function () {
  const x = waitForAnyIdmemberAdded();
  block(matchAddIdmember(x.id, ANY), function () {});
});

bthread("Guard: Unique Idmodel", function () {
  const x = waitForAnyIdmodelAdded();
  block(matchAddIdmodel(x.id, ANY), function () {});
});

bthread("Guard: Unique Idorganization", function () {
  const x = waitForAnyIdorganizationAdded();
  block(matchAddIdorganization(x.id, ANY), function () {});
});

bthread("Guard: Unique Initial", function () {
  const x = waitForAnyInitialAdded();
  block(matchAddInitial(x.id, ANY), function () {});
});

bthread("Guard: Unique Invitation", function () {
  const x = waitForAnyInvitationAdded();
  block(matchAddInvitation(x.id, ANY), function () {});
});

bthread("Guard: Unique Label", function () {
  const x = waitForAnyLabelAdded();
  block(matchAddLabel(x.id, ANY), function () {});
});

bthread("Guard: Unique Labelname", function () {
  const x = waitForAnyLabelnameAdded();
  block(matchAddLabelname(x.id, ANY), function () {});
});

bthread("Guard: Unique List", function () {
  const x = waitForAnyListAdded();
  block(matchAddList(x.id, ANY), function () {});
});

bthread("Guard: Unique Locale", function () {
  const x = waitForAnyLocaleAdded();
  block(matchAddLocale(x.id, ANY), function () {});
});

bthread("Guard: Unique Logo", function () {
  const x = waitForAnyLogoAdded();
  block(matchAddLogo(x.id, ANY), function () {});
});

bthread("Guard: Unique Markassociatednotificationsread", function () {
  const x = waitForAnyMarkassociatednotificationsreadAdded();
  block(matchAddMarkassociatednotificationsread(x.id, ANY), function () {});
});

bthread("Guard: Unique Markasviewed", function () {
  const x = waitForAnyMarkasviewedAdded();
  block(matchAddMarkasviewed(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Membercreator", function () {
  const x = waitForAnyMembercreatorAdded();
  block(matchAddMembercreator(x.id, ANY), function () {});
});

bthread("Guard: Unique Membership", function () {
  const x = waitForAnyMembershipAdded();
  block(matchAddMembership(x.id, ANY), function () {});
});

bthread("Guard: Unique Membersinvited", function () {
  const x = waitForAnyMembersinvitedAdded();
  block(matchAddMembersinvited(x.id, ANY), function () {});
});

bthread("Guard: Unique Membersvoted", function () {
  const x = waitForAnyMembersvotedAdded();
  block(matchAddMembersvoted(x.id, ANY), function () {});
});

bthread("Guard: Unique Minutesbetweensummary", function () {
  const x = waitForAnyMinutesbetweensummaryAdded();
  block(matchAddMinutesbetweensummary(x.id, ANY), function () {});
});

bthread("Guard: Unique Moveallcard", function () {
  const x = waitForAnyMoveallcardAdded();
  block(matchAddMoveallcard(x.id, ANY), function () {});
});

bthread("Guard: Unique Mypref", function () {
  const x = waitForAnyMyprefAdded();
  block(matchAddMypref(x.id, ANY), function () {});
});

bthread("Guard: Unique Name", function () {
  const x = waitForAnyNameAdded();
  block(matchAddName(x.id, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  block(matchAddNotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Onetimemessagesdismissed", function () {
  const x = waitForAnyOnetimemessagesdismissedAdded();
  block(matchAddOnetimemessagesdismissed(x.id, ANY), function () {});
});

bthread("Guard: Unique Orange", function () {
  const x = waitForAnyOrangeAdded();
  block(matchAddOrange(x.id, ANY), function () {});
});

bthread("Guard: Unique Org", function () {
  const x = waitForAnyOrgAdded();
  block(matchAddOrg(x.id, ANY), function () {});
});

bthread("Guard: Unique Organization", function () {
  const x = waitForAnyOrganizationAdded();
  block(matchAddOrganization(x.id, ANY), function () {});
});

bthread("Guard: Unique Organizationsinvited", function () {
  const x = waitForAnyOrganizationsinvitedAdded();
  block(matchAddOrganizationsinvited(x.id, ANY), function () {});
});

bthread("Guard: Unique Orginviterestrict", function () {
  const x = waitForAnyOrginviterestrictAdded();
  block(matchAddOrginviterestrict(x.id, ANY), function () {});
});

bthread("Guard: Unique Permissionlevel", function () {
  const x = waitForAnyPermissionlevelAdded();
  block(matchAddPermissionlevel(x.id, ANY), function () {});
});

bthread("Guard: Unique Po", function () {
  const x = waitForAnyPoAdded();
  block(matchAddPo(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerup", function () {
  const x = waitForAnyPowerupAdded();
  block(matchAddPowerup(x.id, ANY), function () {});
});

bthread("Guard: Unique Pref", function () {
  const x = waitForAnyPrefAdded();
  block(matchAddPref(x.id, ANY), function () {});
});

bthread("Guard: Unique Private", function () {
  const x = waitForAnyPrivateAdded();
  block(matchAddPrivate(x.id, ANY), function () {});
});

bthread("Guard: Unique Public", function () {
  const x = waitForAnyPublicAdded();
  block(matchAddPublic(x.id, ANY), function () {});
});

bthread("Guard: Unique Purple", function () {
  const x = waitForAnyPurpleAdded();
  block(matchAddPurple(x.id, ANY), function () {});
});

bthread("Guard: Unique Query", function () {
  const x = waitForAnyQueryAdded();
  block(matchAddQuery(x.id, ANY), function () {});
});

bthread("Guard: Unique Read", function () {
  const x = waitForAnyReadAdded();
  block(matchAddRead(x.id, ANY), function () {});
});

bthread("Guard: Unique Red", function () {
  const x = waitForAnyRedAdded();
  block(matchAddRed(x.id, ANY), function () {});
});

bthread("Guard: Unique Savedsearche", function () {
  const x = waitForAnySavedsearcheAdded();
  block(matchAddSavedsearche(x.id, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  block(matchAddSearch(x.id, ANY), function () {});
});

bthread("Guard: Unique Selfjoin", function () {
  const x = waitForAnySelfjoinAdded();
  block(matchAddSelfjoin(x.id, ANY), function () {});
});

bthread("Guard: Unique Session", function () {
  const x = waitForAnySessionAdded();
  block(matchAddSession(x.id, ANY), function () {});
});

bthread("Guard: Unique Showlistguide", function () {
  const x = waitForAnyShowlistguideAdded();
  block(matchAddShowlistguide(x.id, ANY), function () {});
});

bthread("Guard: Unique Showsidebar", function () {
  const x = waitForAnyShowsidebarAdded();
  block(matchAddShowsidebar(x.id, ANY), function () {});
});

bthread("Guard: Unique Showsidebaractivity", function () {
  const x = waitForAnyShowsidebaractivityAdded();
  block(matchAddShowsidebaractivity(x.id, ANY), function () {});
});

bthread("Guard: Unique Showsidebarboardaction", function () {
  const x = waitForAnyShowsidebarboardactionAdded();
  block(matchAddShowsidebarboardaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Showsidebarmember", function () {
  const x = waitForAnyShowsidebarmemberAdded();
  block(matchAddShowsidebarmember(x.id, ANY), function () {});
});

bthread("Guard: Unique Socket", function () {
  const x = waitForAnySocketAdded();
  block(matchAddSocket(x.id, ANY), function () {});
});

bthread("Guard: Unique State", function () {
  const x = waitForAnyStateAdded();
  block(matchAddState(x.id, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  block(matchAddStatu(x.id, ANY), function () {});
});

bthread("Guard: Unique Sticker", function () {
  const x = waitForAnyStickerAdded();
  block(matchAddSticker(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscribed", function () {
  const x = waitForAnySubscribedAdded();
  block(matchAddSubscribed(x.id, ANY), function () {});
});

bthread("Guard: Unique Text", function () {
  const x = waitForAnyTextAdded();
  block(matchAddText(x.id, ANY), function () {});
});

bthread("Guard: Unique Token", function () {
  const x = waitForAnyTokenAdded();
  block(matchAddToken(x.id, ANY), function () {});
});

bthread("Guard: Unique Type", function () {
  const x = waitForAnyTypeAdded();
  block(matchAddType(x.id, ANY), function () {});
});

bthread("Guard: Unique Unread", function () {
  const x = waitForAnyUnreadAdded();
  block(matchAddUnread(x.id, ANY), function () {});
});

bthread("Guard: Unique Username", function () {
  const x = waitForAnyUsernameAdded();
  block(matchAddUsername(x.id, ANY), function () {});
});

bthread("Guard: Unique Voting", function () {
  const x = waitForAnyVotingAdded();
  block(matchAddVoting(x.id, ANY), function () {});
});

bthread("Guard: Unique Webhook", function () {
  const x = waitForAnyWebhookAdded();
  block(matchAddWebhook(x.id, ANY), function () {});
});

bthread("Guard: Unique Website", function () {
  const x = waitForAnyWebsiteAdded();
  block(matchAddWebsite(x.id, ANY), function () {});
});

bthread("Guard: Unique Yellow", function () {
  const x = waitForAnyYellowAdded();
  block(matchAddYellow(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["Action", "Active", "All", "Archiveallcard", "Associateddomain", "Attachment", "Avatar", "Avatarsource", "Background", "Batch", "Bio", "Blue", "Board", "Boardbackground", "Boardsinvited", "Boardstar", "Boardvisibilityrestrict", "Calendarfeedenabled", "Calendarkey", "Callbackurl", "Card", "Cardaging", "Cardcover", "Checkitem", "Checkitemstate", "Checklist", "Closed", "Color", "Colorblind", "Comment", "Converttocard", "Customboardbackground", "Customemoji", "Customsticker", "Deactivated", "Delta", "Desc", "Description", "Display", "Displayname", "Due", "Emailkey", "Emailposition", "Entity", "Externalmembersdisabled", "Fullname", "Generate", "Googleappsversion", "Green", "Idattachmentcover", "Idboard", "Idcard", "Idemaillist", "Idlabel", "Idlist", "Idmember", "Idmodel", "Idorganization", "Initial", "Invitation", "Label", "Labelname", "List", "Locale", "Logo", "Markassociatednotificationsread", "Markasviewed", "Member", "Membercreator", "Membership", "Membersinvited", "Membersvoted", "Minutesbetweensummary", "Moveallcard", "Mypref", "Name", "Notification", "Onetimemessagesdismissed", "Orange", "Org", "Organization", "Organizationsinvited", "Orginviterestrict", "Permissionlevel", "Po", "Powerup", "Pref", "Private", "Public", "Purple", "Query", "Read", "Red", "Savedsearche", "Search", "Selfjoin", "Session", "Showlistguide", "Showsidebar", "Showsidebaractivity", "Showsidebarboardaction", "Showsidebarmember", "Socket", "State", "Statu", "Sticker", "Subscribed", "Text", "Token", "Type", "Unread", "Username", "Voting", "Webhook", "Website", "Yellow"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"Action": {"add": "addAction", "update": "updateAction", "delete": "deleteAction"}, "Active": {"add": "addActive", "update": "updateActive", "delete": "deleteActive"}, "All": {"add": "addAll", "update": "updateAll", "delete": "deleteAll"}, "Archiveallcard": {"add": "addArchiveallcard", "update": "updateArchiveallcard", "delete": "deleteArchiveallcard"}, "Associateddomain": {"add": "addAssociateddomain", "update": "updateAssociateddomain", "delete": "deleteAssociateddomain"}, "Attachment": {"add": "addAttachment", "update": "updateAttachment", "delete": "deleteAttachment"}, "Avatar": {"add": "addAvatar", "update": "updateAvatar", "delete": "deleteAvatar"}, "Avatarsource": {"add": "addAvatarsource", "update": "updateAvatarsource", "delete": "deleteAvatarsource"}, "Background": {"add": "addBackground", "update": "updateBackground", "delete": "deleteBackground"}, "Batch": {"add": "addBatch", "update": "updateBatch", "delete": "deleteBatch"}, "Bio": {"add": "addBio", "update": "updateBio", "delete": "deleteBio"}, "Blue": {"add": "addBlue", "update": "updateBlue", "delete": "deleteBlue"}, "Board": {"add": "addBoard", "update": "updateBoard", "delete": "deleteBoard"}, "Boardbackground": {"add": "addBoardbackground", "update": "updateBoardbackground", "delete": "deleteBoardbackground"}, "Boardsinvited": {"add": "addBoardsinvited", "update": "updateBoardsinvited", "delete": "deleteBoardsinvited"}, "Boardstar": {"add": "addBoardstar", "update": "updateBoardstar", "delete": "deleteBoardstar"}, "Boardvisibilityrestrict": {"add": "addBoardvisibilityrestrict", "update": "updateBoardvisibilityrestrict", "delete": "deleteBoardvisibilityrestrict"}, "Calendarfeedenabled": {"add": "addCalendarfeedenabled", "update": "updateCalendarfeedenabled", "delete": "deleteCalendarfeedenabled"}, "Calendarkey": {"add": "addCalendarkey", "update": "updateCalendarkey", "delete": "deleteCalendarkey"}, "Callbackurl": {"add": "addCallbackurl", "update": "updateCallbackurl", "delete": "deleteCallbackurl"}, "Card": {"add": "addCard", "update": "updateCard", "delete": "deleteCard"}, "Cardaging": {"add": "addCardaging", "update": "updateCardaging", "delete": "deleteCardaging"}, "Cardcover": {"add": "addCardcover", "update": "updateCardcover", "delete": "deleteCardcover"}, "Checkitem": {"add": "addCheckitem", "update": "updateCheckitem", "delete": "deleteCheckitem"}, "Checkitemstate": {"add": "addCheckitemstate", "update": "updateCheckitemstate", "delete": "deleteCheckitemstate"}, "Checklist": {"add": "addChecklist", "update": "updateChecklist", "delete": "deleteChecklist"}, "Closed": {"add": "addClosed", "update": "updateClosed", "delete": "deleteClosed"}, "Color": {"add": "addColor", "update": "updateColor", "delete": "deleteColor"}, "Colorblind": {"add": "addColorblind", "update": "updateColorblind", "delete": "deleteColorblind"}, "Comment": {"add": "addComment", "update": "updateComment", "delete": "deleteComment"}, "Converttocard": {"add": "addConverttocard", "update": "updateConverttocard", "delete": "deleteConverttocard"}, "Customboardbackground": {"add": "addCustomboardbackground", "update": "updateCustomboardbackground", "delete": "deleteCustomboardbackground"}, "Customemoji": {"add": "addCustomemoji", "update": "updateCustomemoji", "delete": "deleteCustomemoji"}, "Customsticker": {"add": "addCustomsticker", "update": "updateCustomsticker", "delete": "deleteCustomsticker"}, "Deactivated": {"add": "addDeactivated", "update": "updateDeactivated", "delete": "deleteDeactivated"}, "Delta": {"add": "addDelta", "update": "updateDelta", "delete": "deleteDelta"}, "Desc": {"add": "addDesc", "update": "updateDesc", "delete": "deleteDesc"}, "Description": {"add": "addDescription", "update": "updateDescription", "delete": "deleteDescription"}, "Display": {"add": "addDisplay", "update": "updateDisplay", "delete": "deleteDisplay"}, "Displayname": {"add": "addDisplayname", "update": "updateDisplayname", "delete": "deleteDisplayname"}, "Due": {"add": "addDue", "update": "updateDue", "delete": "deleteDue"}, "Emailkey": {"add": "addEmailkey", "update": "updateEmailkey", "delete": "deleteEmailkey"}, "Emailposition": {"add": "addEmailposition", "update": "updateEmailposition", "delete": "deleteEmailposition"}, "Entity": {"add": "addEntity", "update": "updateEntity", "delete": "deleteEntity"}, "Externalmembersdisabled": {"add": "addExternalmembersdisabled", "update": "updateExternalmembersdisabled", "delete": "deleteExternalmembersdisabled"}, "Fullname": {"add": "addFullname", "update": "updateFullname", "delete": "deleteFullname"}, "Generate": {"add": "addGenerate", "update": "updateGenerate", "delete": "deleteGenerate"}, "Googleappsversion": {"add": "addGoogleappsversion", "update": "updateGoogleappsversion", "delete": "deleteGoogleappsversion"}, "Green": {"add": "addGreen", "update": "updateGreen", "delete": "deleteGreen"}, "Idattachmentcover": {"add": "addIdattachmentcover", "update": "updateIdattachmentcover", "delete": "deleteIdattachmentcover"}, "Idboard": {"add": "addIdboard", "update": "updateIdboard", "delete": "deleteIdboard"}, "Idcard": {"add": "addIdcard", "update": "updateIdcard", "delete": "deleteIdcard"}, "Idemaillist": {"add": "addIdemaillist", "update": "updateIdemaillist", "delete": "deleteIdemaillist"}, "Idlabel": {"add": "addIdlabel", "update": "updateIdlabel", "delete": "deleteIdlabel"}, "Idlist": {"add": "addIdlist", "update": "updateIdlist", "delete": "deleteIdlist"}, "Idmember": {"add": "addIdmember", "update": "updateIdmember", "delete": "deleteIdmember"}, "Idmodel": {"add": "addIdmodel", "update": "updateIdmodel", "delete": "deleteIdmodel"}, "Idorganization": {"add": "addIdorganization", "update": "updateIdorganization", "delete": "deleteIdorganization"}, "Initial": {"add": "addInitial", "update": "updateInitial", "delete": "deleteInitial"}, "Invitation": {"add": "addInvitation", "update": "updateInvitation", "delete": "deleteInvitation"}, "Label": {"add": "addLabel", "update": "updateLabel", "delete": "deleteLabel"}, "Labelname": {"add": "addLabelname", "update": "updateLabelname", "delete": "deleteLabelname"}, "List": {"add": "addList", "update": "updateList", "delete": "deleteList"}, "Locale": {"add": "addLocale", "update": "updateLocale", "delete": "deleteLocale"}, "Logo": {"add": "addLogo", "update": "updateLogo", "delete": "deleteLogo"}, "Markassociatednotificationsread": {"add": "addMarkassociatednotificationsread", "update": "updateMarkassociatednotificationsread", "delete": "deleteMarkassociatednotificationsread"}, "Markasviewed": {"add": "addMarkasviewed", "update": "updateMarkasviewed", "delete": "deleteMarkasviewed"}, "Member": {"add": "addMember", "update": "updateMember", "delete": "deleteMember"}, "Membercreator": {"add": "addMembercreator", "update": "updateMembercreator", "delete": "deleteMembercreator"}, "Membership": {"add": "addMembership", "update": "updateMembership", "delete": "deleteMembership"}, "Membersinvited": {"add": "addMembersinvited", "update": "updateMembersinvited", "delete": "deleteMembersinvited"}, "Membersvoted": {"add": "addMembersvoted", "update": "updateMembersvoted", "delete": "deleteMembersvoted"}, "Minutesbetweensummary": {"add": "addMinutesbetweensummary", "update": "updateMinutesbetweensummary", "delete": "deleteMinutesbetweensummary"}, "Moveallcard": {"add": "addMoveallcard", "update": "updateMoveallcard", "delete": "deleteMoveallcard"}, "Mypref": {"add": "addMypref", "update": "updateMypref", "delete": "deleteMypref"}, "Name": {"add": "addName", "update": "updateName", "delete": "deleteName"}, "Notification": {"add": "addNotification", "update": "updateNotification", "delete": "deleteNotification"}, "Onetimemessagesdismissed": {"add": "addOnetimemessagesdismissed", "update": "updateOnetimemessagesdismissed", "delete": "deleteOnetimemessagesdismissed"}, "Orange": {"add": "addOrange", "update": "updateOrange", "delete": "deleteOrange"}, "Org": {"add": "addOrg", "update": "updateOrg", "delete": "deleteOrg"}, "Organization": {"add": "addOrganization", "update": "updateOrganization", "delete": "deleteOrganization"}, "Organizationsinvited": {"add": "addOrganizationsinvited", "update": "updateOrganizationsinvited", "delete": "deleteOrganizationsinvited"}, "Orginviterestrict": {"add": "addOrginviterestrict", "update": "updateOrginviterestrict", "delete": "deleteOrginviterestrict"}, "Permissionlevel": {"add": "addPermissionlevel", "update": "updatePermissionlevel", "delete": "deletePermissionlevel"}, "Po": {"add": "addPo", "update": "updatePo", "delete": "deletePo"}, "Powerup": {"add": "addPowerup", "update": "updatePowerup", "delete": "deletePowerup"}, "Pref": {"add": "addPref", "update": "updatePref", "delete": "deletePref"}, "Private": {"add": "addPrivate", "update": "updatePrivate", "delete": "deletePrivate"}, "Public": {"add": "addPublic", "update": "updatePublic", "delete": "deletePublic"}, "Purple": {"add": "addPurple", "update": "updatePurple", "delete": "deletePurple"}, "Query": {"add": "addQuery", "update": "updateQuery", "delete": "deleteQuery"}, "Read": {"add": "addRead", "update": "updateRead", "delete": "deleteRead"}, "Red": {"add": "addRed", "update": "updateRed", "delete": "deleteRed"}, "Savedsearche": {"add": "addSavedsearche", "update": "updateSavedsearche", "delete": "deleteSavedsearche"}, "Search": {"add": "addSearch", "update": "updateSearch", "delete": "deleteSearch"}, "Selfjoin": {"add": "addSelfjoin", "update": "updateSelfjoin", "delete": "deleteSelfjoin"}, "Session": {"add": "addSession", "update": "updateSession", "delete": "deleteSession"}, "Showlistguide": {"add": "addShowlistguide", "update": "updateShowlistguide", "delete": "deleteShowlistguide"}, "Showsidebar": {"add": "addShowsidebar", "update": "updateShowsidebar", "delete": "deleteShowsidebar"}, "Showsidebaractivity": {"add": "addShowsidebaractivity", "update": "updateShowsidebaractivity", "delete": "deleteShowsidebaractivity"}, "Showsidebarboardaction": {"add": "addShowsidebarboardaction", "update": "updateShowsidebarboardaction", "delete": "deleteShowsidebarboardaction"}, "Showsidebarmember": {"add": "addShowsidebarmember", "update": "updateShowsidebarmember", "delete": "deleteShowsidebarmember"}, "Socket": {"add": "addSocket", "update": "updateSocket", "delete": "deleteSocket"}, "State": {"add": "addState", "update": "updateState", "delete": "deleteState"}, "Statu": {"add": "addStatu", "update": "updateStatu", "delete": "deleteStatu"}, "Sticker": {"add": "addSticker", "update": "updateSticker", "delete": "deleteSticker"}, "Subscribed": {"add": "addSubscribed", "update": "updateSubscribed", "delete": "deleteSubscribed"}, "Text": {"add": "addText", "update": "updateText", "delete": "deleteText"}, "Token": {"add": "addToken", "update": "updateToken", "delete": "deleteToken"}, "Type": {"add": "addType", "update": "updateType", "delete": "deleteType"}, "Unread": {"add": "addUnread", "update": "updateUnread", "delete": "deleteUnread"}, "Username": {"add": "addUsername", "update": "updateUsername", "delete": "deleteUsername"}, "Voting": {"add": "addVoting", "update": "updateVoting", "delete": "deleteVoting"}, "Webhook": {"add": "addWebhook", "update": "updateWebhook", "delete": "deleteWebhook"}, "Website": {"add": "addWebsite", "update": "updateWebsite", "delete": "deleteWebsite"}, "Yellow": {"add": "addYellow", "update": "updateYellow", "delete": "deleteYellow"}};
globalThis.__DSL_ARG0__ = {"Action": "id", "Active": "id", "All": "id", "Archiveallcard": "id", "Associateddomain": "id", "Attachment": "id", "Avatar": "id", "Avatarsource": "id", "Background": "id", "Batch": "id", "Bio": "id", "Blue": "id", "Board": "id", "Boardbackground": "id", "Boardsinvited": "id", "Boardstar": "id", "Boardvisibilityrestrict": "id", "Calendarfeedenabled": "id", "Calendarkey": "id", "Callbackurl": "id", "Card": "id", "Cardaging": "id", "Cardcover": "id", "Checkitem": "id", "Checkitemstate": "id", "Checklist": "id", "Closed": "id", "Color": "id", "Colorblind": "id", "Comment": "id", "Converttocard": "id", "Customboardbackground": "id", "Customemoji": "id", "Customsticker": "id", "Deactivated": "id", "Delta": "id", "Desc": "id", "Description": "id", "Display": "id", "Displayname": "id", "Due": "id", "Emailkey": "id", "Emailposition": "id", "Entity": "id", "Externalmembersdisabled": "id", "Fullname": "id", "Generate": "id", "Googleappsversion": "id", "Green": "id", "Idattachmentcover": "id", "Idboard": "id", "Idcard": "id", "Idemaillist": "id", "Idlabel": "id", "Idlist": "id", "Idmember": "id", "Idmodel": "id", "Idorganization": "id", "Initial": "id", "Invitation": "id", "Label": "id", "Labelname": "id", "List": "id", "Locale": "id", "Logo": "id", "Markassociatednotificationsread": "id", "Markasviewed": "id", "Member": "id", "Membercreator": "id", "Membership": "id", "Membersinvited": "id", "Membersvoted": "id", "Minutesbetweensummary": "id", "Moveallcard": "id", "Mypref": "id", "Name": "id", "Notification": "id", "Onetimemessagesdismissed": "id", "Orange": "id", "Org": "id", "Organization": "id", "Organizationsinvited": "id", "Orginviterestrict": "id", "Permissionlevel": "id", "Po": "id", "Powerup": "id", "Pref": "id", "Private": "id", "Public": "id", "Purple": "id", "Query": "id", "Read": "id", "Red": "id", "Savedsearche": "id", "Search": "id", "Selfjoin": "id", "Session": "id", "Showlistguide": "id", "Showsidebar": "id", "Showsidebaractivity": "id", "Showsidebarboardaction": "id", "Showsidebarmember": "id", "Socket": "id", "State": "id", "Statu": "id", "Sticker": "id", "Subscribed": "id", "Text": "id", "Token": "id", "Type": "id", "Unread": "id", "Username": "id", "Voting": "id", "Webhook": "id", "Website": "id", "Yellow": "id"};


// @auto-hazard-begin
(function AutoHazardPack(){
  if (typeof bp === 'undefined') return;
  if (String((bp.env && bp.env.HLS_HAZARD_PACK) || 'auto') === 'off') return;

  const R = (globalThis.read || globalThis || {});
  const on = (name, def=1) => Number((bp.env && bp.env[name]) ?? def) !== 0;
  const det = String((bp.env && bp.env.DET_MODE) || '1') === '1';
  const log = (...a)=>{ if (bp && bp.log && bp.log.info) try{ bp.log.info(a.join(' ')); }catch(_){ } };
  const FN = (k)=> typeof R[k] === 'function';
  const looksLikeIdField = (k, ent)=> /(^id$|Id$|ID$|_id$)/.test(k) || k.toLowerCase()=== (ent.toLowerCase()+'id');
  const looksLikeLimit   = (k)=> /(limit|capacity|quota|max|budget|credit)/i.test(k);
  const looksLikeAmount  = (k)=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k);
  const looksLikeStock   = (k)=> /(stock|inventory|balance|available|remaining|free)/i.test(k);

  const ENTS = globalThis.__DSL_ENTITIES__ || [];
  const RELS = globalThis.__GRAPH_RELATIONSHIPS__ || [];
  const DOFN = globalThis.__DSL_DO__ || {};
  const ARG0 = globalThis.__DSL_ARG0__ || {};

  globalThis.__hlsFocus = globalThis.__hlsFocus || {};

  function discoverReadersForEntity(ent){
    const plural = ent.endsWith('s') ? ent : ent + 's';
    const guesses = ['list'+plural, 'list'+ent, 'get'+ent, 'get'+ent+'ById', 'get'+plural, 'fetch'+ent, 'fetch'+plural];
    const readers = {};
    for (const g of guesses){
      if (FN(g)) readers[g] = R[g];
    }
    return readers;
  }

  async function sampleEntities(ent){
    const readers = discoverReadersForEntity(ent);
    const listFn = readers['list'+ent+'s'] || readers['list'+ent] || readers['get'+ent+'s'] || null;
    let items = [];
    if (listFn) { try { items = await listFn(); } catch(_) {} }
    if (!Array.isArray(items)) items = [];
    const sample = items[0] || {};
    const keys = Object.keys(sample||{});
    const idKey = keys.find(k=> looksLikeIdField(k, ent)) || 'id';
    const numericKeys = keys.filter(k=> typeof sample[k] === 'number');
    const counters = numericKeys.filter(k=> looksLikeStock(k));
    const amounts  = numericKeys.filter(k=> looksLikeAmount(k));
    const limits   = numericKeys.filter(k=> looksLikeLimit(k));
    return { items, idKey, counters, amounts, limits };
  }

  async function chooseFocusFor(ent){
    try {
      const s = await sampleEntities(ent);
      let id = s.items.length ? (det ? s.items[0][s.idKey] : s.items[Math.floor(Math.random()*s.items.length)][s.idKey]) : null;
      if (!id) {
        const waitName = 'waitForAny'+ent+'Added';
        if (typeof globalThis[waitName] === 'function') {
          const e = await globalThis[waitName]();
          if (e && e[s.idKey]) id = e[s.idKey];
          else if (e && e.id)  id = e.id;
        }
      }
      if (id !== undefined && id !== null) {
        globalThis.__hlsFocus[ent] = id;
      }
    } catch(_){}
  }

  (function wrapDo(){
    Object.keys(DOFN).forEach(ent => {
      const opmap = DOFN[ent] || {};
      ['add','update','delete'].forEach(op => {
        const fnName = opmap[op];
        if (!fnName) return;
        const orig = globalThis[fnName];
        if (typeof orig !== 'function') return;
        if (orig.__wrappedByHazard) return;
        const arg0Name = ARG0[ent] || 'id';
        globalThis[fnName] = async function(...args){
          const f = globalThis.__hlsFocus ? globalThis.__hlsFocus[ent] : undefined;
          if (f !== undefined && f !== null) {
            if (args.length === 0) args = [f];
            else args[0] = f;
          }
          return await orig.apply(this, args);
        };
        globalThis[fnName].__wrappedByHazard = true;
      });
    });
  })();

  try {
    ENTS.forEach(ent=>{
      bp.registerBThread('CB:'+ent+'Focus', function(){
        return bp.async(()=> chooseFocusFor(ent));
      });
    });
  } catch(_){}

  if (on('HLS_HAZARD_OVR',1)) {
    bp.registerBThread('HO:NonNegativeCounters', function(){
      return bp.async(async function(){
        const ents = ENTS;
        for (const ent of ents){
          const s = await sampleEntities(ent);
          const id = (globalThis.__hlsFocus && globalThis.__hlsFocus[ent]) || null;
          if (!id) continue;
          let obj=null;
          const r = discoverReadersForEntity(ent);
          for (const g of ['get'+ent,'get'+ent+'ById']) {
            if (r[g]) { try{ obj = await r[g](id); }catch(_){ } }
            if (obj) break;
          }
          if (!obj) obj = s.items.find(x=> x[s.idKey]===id) || null;
          if (!obj) continue;
          for (const k of s.counters){
            const v = Number(obj[k]);
            if (isFinite(v) && v < 0) throw new Error(`[HazardOracle] NonNegative: ${ent}.${k} became negative for ${id}`);
          }
        }
      });
    });
  }

  if (on('HLS_HAZARD_CAS',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:RefIntegrity ${parent}->${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const deps = children.filter(x=> String(x[fk]) === String(focusId));
            if (deps.length>0){
              let parentObj = null;
              const pr = discoverReadersForEntity(parent);
              for (const g of ['get'+parent,'get'+parent+'ById']) {
                if (pr[g]) { try{ parentObj = await pr[g](focusId); }catch(_){ } }
                if (parentObj) break;
              }
              if (!parentObj) throw new Error(`[HazardOracle] ReferentialIntegrity: ${parent} ${focusId} missing while ${child} dependents exist`);
            }
          });
        });
      });
    })();
  }

  if (on('HLS_HAZARD_WSK',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:AggregateLimit ${parent}<-${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let pObj=null;
            const pr = discoverReadersForEntity(parent);
            for (const g of ['get'+parent,'get'+parent+'ById']) {
              if (pr[g]) { try{ pObj = await pr[g](focusId); }catch(_){ } }
              if (pObj) break;
            }
            if (!pObj && pS.items.length) pObj = pS.items.find(x=> x[pS.idKey]===focusId) || pS.items[0];
            if (!pObj) return;
            const limitKey = pS.limits[0] || Object.keys(pObj).find(k=> /(limit|capacity|quota|max|budget|credit)/i.test(k));
            const limitVal = Number(limitKey ? pObj[limitKey] : NaN);
            if (!isFinite(limitVal)) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const contribKey = cS.amounts[0] || Object.keys(children[0]||{}).find(k=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k));
            if (!contribKey) return;
            const total = children.filter(x=> String(x[fk])===String(focusId))
                                  .reduce((s,x)=> s + (Number(x[contribKey])||0), 0);
            if (total > limitVal) throw new Error(`[HazardOracle] AggregateLimit: Σ ${child}.${contribKey} (${total}) > ${parent}.${limitKey} (${limitVal}) for ${focusId}`);
          });
        });
      });
    })();
  }
})(); // AutoHazardPack
// @auto-hazard-end
