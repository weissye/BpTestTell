// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Bookmark:nondet:1:1
bthread("crud:Bookmark:nondet:1:1", function () {
  let id = 200;
  createBookmark(200);
  tryToAddExistingBookmark(200);
  verifyBookmarkExists(200);
  updateBookmark(200);
  deleteBookmark(200);
  tryToDeleteANonExistingBookmark(200);
  verifyBookmarkDoesNotExist(200);
});

// Story: crud:Bookmark:nondet:1:2
bthread("crud:Bookmark:nondet:1:2", function () {
  let id = 201;
  createBookmark(201);
  tryToAddExistingBookmark(201);
  updateBookmark(201);
  verifyBookmarkExists(201);
  deleteBookmark(201);
  tryToDeleteANonExistingBookmark(201);
  verifyBookmarkDoesNotExist(201);
});

// Story: crud:Bookmark:nondet:negative:dup-add
bthread("crud:Bookmark:nondet:negative:dup-add", function () {
  let id = 206;
  createBookmark(206);
  verifyBookmarkExists(206);
  tryToAddExistingBookmark(206);
  verifyBookmarkExists(206);
});

// Story: crud:Bookmark:nondet:existing:update
bthread("crud:Bookmark:nondet:existing:update", function () {
  let ev = waitForAnyBookmarkAdded();
  let args = Object.values(ev);
  block(matchDeletedBookmark.apply(null, args), function () {
    verifyBookmarkExists.apply(null, args);
    updateBookmark.apply(null, args);
    verifyBookmarkExists.apply(null, args);
  });
});

// Story: monitor:Bookmark:add
bthread("monitor:Bookmark:add", function () {
  while (true) {
    let ev = waitForAnyBookmarkAdded();
    let args = Object.values(ev);
    block(matchDeletedBookmark.apply(null, args), function () {
      verifyBookmarkExists.apply(null, args);
    });
  }
});

// Story: crud:ConfigContextProfile:nondet:1:1
bthread("crud:ConfigContextProfile:nondet:1:1", function () {
  let id = 210;
  createConfigContextProfile(210);
  tryToAddExistingConfigContextProfile(210);
  verifyConfigContextProfileExists(210);
  updateConfigContextProfile(210);
  deleteConfigContextProfile(210);
  tryToDeleteANonExistingConfigContextProfile(210);
  verifyConfigContextProfileDoesNotExist(210);
});

// Story: crud:ConfigContextProfile:nondet:1:2
bthread("crud:ConfigContextProfile:nondet:1:2", function () {
  let id = 211;
  createConfigContextProfile(211);
  tryToAddExistingConfigContextProfile(211);
  updateConfigContextProfile(211);
  verifyConfigContextProfileExists(211);
  deleteConfigContextProfile(211);
  tryToDeleteANonExistingConfigContextProfile(211);
  verifyConfigContextProfileDoesNotExist(211);
});

// Story: crud:ConfigContextProfile:nondet:negative:dup-add
bthread("crud:ConfigContextProfile:nondet:negative:dup-add", function () {
  let id = 216;
  createConfigContextProfile(216);
  verifyConfigContextProfileExists(216);
  tryToAddExistingConfigContextProfile(216);
  verifyConfigContextProfileExists(216);
});

// Story: crud:ConfigContextProfile:nondet:existing:update
bthread("crud:ConfigContextProfile:nondet:existing:update", function () {
  let ev = waitForAnyConfigContextProfileAdded();
  let args = Object.values(ev);
  block(matchDeletedConfigContextProfile.apply(null, args), function () {
    verifyConfigContextProfileExists.apply(null, args);
    updateConfigContextProfile.apply(null, args);
    verifyConfigContextProfileExists.apply(null, args);
  });
});

// Story: monitor:ConfigContextProfile:add
bthread("monitor:ConfigContextProfile:add", function () {
  while (true) {
    let ev = waitForAnyConfigContextProfileAdded();
    let args = Object.values(ev);
    block(matchDeletedConfigContextProfile.apply(null, args), function () {
      verifyConfigContextProfileExists.apply(null, args);
    });
  }
});

// Story: crud:ConfigContext:nondet:1:1
bthread("crud:ConfigContext:nondet:1:1", function () {
  let id = 220;
  createConfigContext(220);
  tryToAddExistingConfigContext(220);
  verifyConfigContextExists(220);
  updateConfigContext(220);
  deleteConfigContext(220);
  tryToDeleteANonExistingConfigContext(220);
  verifyConfigContextDoesNotExist(220);
});

// Story: crud:ConfigContext:nondet:1:2
bthread("crud:ConfigContext:nondet:1:2", function () {
  let id = 221;
  createConfigContext(221);
  tryToAddExistingConfigContext(221);
  updateConfigContext(221);
  verifyConfigContextExists(221);
  deleteConfigContext(221);
  tryToDeleteANonExistingConfigContext(221);
  verifyConfigContextDoesNotExist(221);
});

// Story: crud:ConfigContext:nondet:negative:dup-add
bthread("crud:ConfigContext:nondet:negative:dup-add", function () {
  let id = 226;
  createConfigContext(226);
  verifyConfigContextExists(226);
  tryToAddExistingConfigContext(226);
  verifyConfigContextExists(226);
});

// Story: crud:ConfigContext:nondet:existing:update
bthread("crud:ConfigContext:nondet:existing:update", function () {
  let ev = waitForAnyConfigContextAdded();
  let args = Object.values(ev);
  block(matchDeletedConfigContext.apply(null, args), function () {
    verifyConfigContextExists.apply(null, args);
    updateConfigContext.apply(null, args);
    verifyConfigContextExists.apply(null, args);
  });
});

// Story: monitor:ConfigContext:add
bthread("monitor:ConfigContext:add", function () {
  while (true) {
    let ev = waitForAnyConfigContextAdded();
    let args = Object.values(ev);
    block(matchDeletedConfigContext.apply(null, args), function () {
      verifyConfigContextExists.apply(null, args);
    });
  }
});

// Story: crud:ConfigTemplate:nondet:1:1
bthread("crud:ConfigTemplate:nondet:1:1", function () {
  let id = 230;
  createConfigTemplate(230);
  tryToAddExistingConfigTemplate(230);
  verifyConfigTemplateExists(230);
  updateConfigTemplate(230);
  deleteConfigTemplate(230);
  tryToDeleteANonExistingConfigTemplate(230);
  verifyConfigTemplateDoesNotExist(230);
});

// Story: crud:ConfigTemplate:nondet:1:2
bthread("crud:ConfigTemplate:nondet:1:2", function () {
  let id = 231;
  createConfigTemplate(231);
  tryToAddExistingConfigTemplate(231);
  updateConfigTemplate(231);
  verifyConfigTemplateExists(231);
  deleteConfigTemplate(231);
  tryToDeleteANonExistingConfigTemplate(231);
  verifyConfigTemplateDoesNotExist(231);
});

// Story: crud:ConfigTemplate:nondet:negative:dup-add
bthread("crud:ConfigTemplate:nondet:negative:dup-add", function () {
  let id = 236;
  createConfigTemplate(236);
  verifyConfigTemplateExists(236);
  tryToAddExistingConfigTemplate(236);
  verifyConfigTemplateExists(236);
});

// Story: crud:ConfigTemplate:nondet:existing:update
bthread("crud:ConfigTemplate:nondet:existing:update", function () {
  let ev = waitForAnyConfigTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedConfigTemplate.apply(null, args), function () {
    verifyConfigTemplateExists.apply(null, args);
    updateConfigTemplate.apply(null, args);
    verifyConfigTemplateExists.apply(null, args);
  });
});

// Story: monitor:ConfigTemplate:add
bthread("monitor:ConfigTemplate:add", function () {
  while (true) {
    let ev = waitForAnyConfigTemplateAdded();
    let args = Object.values(ev);
    block(matchDeletedConfigTemplate.apply(null, args), function () {
      verifyConfigTemplateExists.apply(null, args);
    });
  }
});

// Story: crud:CustomFieldChoiceSet:nondet:1:1
bthread("crud:CustomFieldChoiceSet:nondet:1:1", function () {
  let id = 240;
  createCustomFieldChoiceSet(240);
  tryToAddExistingCustomFieldChoiceSet(240);
  verifyCustomFieldChoiceSetExists(240);
  updateCustomFieldChoiceSet(240);
  deleteCustomFieldChoiceSet(240);
  tryToDeleteANonExistingCustomFieldChoiceSet(240);
  verifyCustomFieldChoiceSetDoesNotExist(240);
});

// Story: crud:CustomFieldChoiceSet:nondet:1:2
bthread("crud:CustomFieldChoiceSet:nondet:1:2", function () {
  let id = 241;
  createCustomFieldChoiceSet(241);
  tryToAddExistingCustomFieldChoiceSet(241);
  updateCustomFieldChoiceSet(241);
  verifyCustomFieldChoiceSetExists(241);
  deleteCustomFieldChoiceSet(241);
  tryToDeleteANonExistingCustomFieldChoiceSet(241);
  verifyCustomFieldChoiceSetDoesNotExist(241);
});

// Story: crud:CustomFieldChoiceSet:nondet:negative:dup-add
bthread("crud:CustomFieldChoiceSet:nondet:negative:dup-add", function () {
  let id = 246;
  createCustomFieldChoiceSet(246);
  verifyCustomFieldChoiceSetExists(246);
  tryToAddExistingCustomFieldChoiceSet(246);
  verifyCustomFieldChoiceSetExists(246);
});

// Story: crud:CustomFieldChoiceSet:nondet:existing:update
bthread("crud:CustomFieldChoiceSet:nondet:existing:update", function () {
  let ev = waitForAnyCustomFieldChoiceSetAdded();
  let args = Object.values(ev);
  block(matchDeletedCustomFieldChoiceSet.apply(null, args), function () {
    verifyCustomFieldChoiceSetExists.apply(null, args);
    updateCustomFieldChoiceSet.apply(null, args);
    verifyCustomFieldChoiceSetExists.apply(null, args);
  });
});

// Story: monitor:CustomFieldChoiceSet:add
bthread("monitor:CustomFieldChoiceSet:add", function () {
  while (true) {
    let ev = waitForAnyCustomFieldChoiceSetAdded();
    let args = Object.values(ev);
    block(matchDeletedCustomFieldChoiceSet.apply(null, args), function () {
      verifyCustomFieldChoiceSetExists.apply(null, args);
    });
  }
});

// Story: crud:CustomField:nondet:1:1
bthread("crud:CustomField:nondet:1:1", function () {
  let id = 250;
  createCustomField(250);
  tryToAddExistingCustomField(250);
  verifyCustomFieldExists(250);
  updateCustomField(250);
  deleteCustomField(250);
  tryToDeleteANonExistingCustomField(250);
  verifyCustomFieldDoesNotExist(250);
});

// Story: crud:CustomField:nondet:1:2
bthread("crud:CustomField:nondet:1:2", function () {
  let id = 251;
  createCustomField(251);
  tryToAddExistingCustomField(251);
  updateCustomField(251);
  verifyCustomFieldExists(251);
  deleteCustomField(251);
  tryToDeleteANonExistingCustomField(251);
  verifyCustomFieldDoesNotExist(251);
});

// Story: crud:CustomField:nondet:negative:dup-add
bthread("crud:CustomField:nondet:negative:dup-add", function () {
  let id = 256;
  createCustomField(256);
  verifyCustomFieldExists(256);
  tryToAddExistingCustomField(256);
  verifyCustomFieldExists(256);
});

// Story: crud:CustomField:nondet:existing:update
bthread("crud:CustomField:nondet:existing:update", function () {
  let ev = waitForAnyCustomFieldAdded();
  let args = Object.values(ev);
  block(matchDeletedCustomField.apply(null, args), function () {
    verifyCustomFieldExists.apply(null, args);
    updateCustomField.apply(null, args);
    verifyCustomFieldExists.apply(null, args);
  });
});

// Story: monitor:CustomField:add
bthread("monitor:CustomField:add", function () {
  while (true) {
    let ev = waitForAnyCustomFieldAdded();
    let args = Object.values(ev);
    block(matchDeletedCustomField.apply(null, args), function () {
      verifyCustomFieldExists.apply(null, args);
    });
  }
});

// Story: crud:CustomLink:nondet:1:1
bthread("crud:CustomLink:nondet:1:1", function () {
  let id = 260;
  createCustomLink(260);
  tryToAddExistingCustomLink(260);
  verifyCustomLinkExists(260);
  updateCustomLink(260);
  deleteCustomLink(260);
  tryToDeleteANonExistingCustomLink(260);
  verifyCustomLinkDoesNotExist(260);
});

// Story: crud:CustomLink:nondet:1:2
bthread("crud:CustomLink:nondet:1:2", function () {
  let id = 261;
  createCustomLink(261);
  tryToAddExistingCustomLink(261);
  updateCustomLink(261);
  verifyCustomLinkExists(261);
  deleteCustomLink(261);
  tryToDeleteANonExistingCustomLink(261);
  verifyCustomLinkDoesNotExist(261);
});

// Story: crud:CustomLink:nondet:negative:dup-add
bthread("crud:CustomLink:nondet:negative:dup-add", function () {
  let id = 266;
  createCustomLink(266);
  verifyCustomLinkExists(266);
  tryToAddExistingCustomLink(266);
  verifyCustomLinkExists(266);
});

// Story: crud:CustomLink:nondet:existing:update
bthread("crud:CustomLink:nondet:existing:update", function () {
  let ev = waitForAnyCustomLinkAdded();
  let args = Object.values(ev);
  block(matchDeletedCustomLink.apply(null, args), function () {
    verifyCustomLinkExists.apply(null, args);
    updateCustomLink.apply(null, args);
    verifyCustomLinkExists.apply(null, args);
  });
});

// Story: monitor:CustomLink:add
bthread("monitor:CustomLink:add", function () {
  while (true) {
    let ev = waitForAnyCustomLinkAdded();
    let args = Object.values(ev);
    block(matchDeletedCustomLink.apply(null, args), function () {
      verifyCustomLinkExists.apply(null, args);
    });
  }
});

// Story: crud:Dashboard:read_only
bthread("crud:Dashboard:read_only", function () {

  verifyDashboardExists();
});

// Story: crud:EventRule:nondet:1:1
bthread("crud:EventRule:nondet:1:1", function () {
  let id = 280;
  createEventRule(280);
  tryToAddExistingEventRule(280);
  verifyEventRuleExists(280);
  updateEventRule(280);
  deleteEventRule(280);
  tryToDeleteANonExistingEventRule(280);
  verifyEventRuleDoesNotExist(280);
});

// Story: crud:EventRule:nondet:1:2
bthread("crud:EventRule:nondet:1:2", function () {
  let id = 281;
  createEventRule(281);
  tryToAddExistingEventRule(281);
  updateEventRule(281);
  verifyEventRuleExists(281);
  deleteEventRule(281);
  tryToDeleteANonExistingEventRule(281);
  verifyEventRuleDoesNotExist(281);
});

// Story: crud:EventRule:nondet:negative:dup-add
bthread("crud:EventRule:nondet:negative:dup-add", function () {
  let id = 286;
  createEventRule(286);
  verifyEventRuleExists(286);
  tryToAddExistingEventRule(286);
  verifyEventRuleExists(286);
});

// Story: crud:EventRule:nondet:existing:update
bthread("crud:EventRule:nondet:existing:update", function () {
  let ev = waitForAnyEventRuleAdded();
  let args = Object.values(ev);
  block(matchDeletedEventRule.apply(null, args), function () {
    verifyEventRuleExists.apply(null, args);
    updateEventRule.apply(null, args);
    verifyEventRuleExists.apply(null, args);
  });
});

// Story: monitor:EventRule:add
bthread("monitor:EventRule:add", function () {
  while (true) {
    let ev = waitForAnyEventRuleAdded();
    let args = Object.values(ev);
    block(matchDeletedEventRule.apply(null, args), function () {
      verifyEventRuleExists.apply(null, args);
    });
  }
});

// Story: crud:ExportTemplate:nondet:1:1
bthread("crud:ExportTemplate:nondet:1:1", function () {
  let id = 290;
  createExportTemplate(290);
  tryToAddExistingExportTemplate(290);
  verifyExportTemplateExists(290);
  updateExportTemplate(290);
  deleteExportTemplate(290);
  tryToDeleteANonExistingExportTemplate(290);
  verifyExportTemplateDoesNotExist(290);
});

// Story: crud:ExportTemplate:nondet:1:2
bthread("crud:ExportTemplate:nondet:1:2", function () {
  let id = 291;
  createExportTemplate(291);
  tryToAddExistingExportTemplate(291);
  updateExportTemplate(291);
  verifyExportTemplateExists(291);
  deleteExportTemplate(291);
  tryToDeleteANonExistingExportTemplate(291);
  verifyExportTemplateDoesNotExist(291);
});

// Story: crud:ExportTemplate:nondet:negative:dup-add
bthread("crud:ExportTemplate:nondet:negative:dup-add", function () {
  let id = 296;
  createExportTemplate(296);
  verifyExportTemplateExists(296);
  tryToAddExistingExportTemplate(296);
  verifyExportTemplateExists(296);
});

// Story: crud:ExportTemplate:nondet:existing:update
bthread("crud:ExportTemplate:nondet:existing:update", function () {
  let ev = waitForAnyExportTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedExportTemplate.apply(null, args), function () {
    verifyExportTemplateExists.apply(null, args);
    updateExportTemplate.apply(null, args);
    verifyExportTemplateExists.apply(null, args);
  });
});

// Story: monitor:ExportTemplate:add
bthread("monitor:ExportTemplate:add", function () {
  while (true) {
    let ev = waitForAnyExportTemplateAdded();
    let args = Object.values(ev);
    block(matchDeletedExportTemplate.apply(null, args), function () {
      verifyExportTemplateExists.apply(null, args);
    });
  }
});

// Story: crud:ImageAttachment:nondet:1:1
bthread("crud:ImageAttachment:nondet:1:1", function () {
  let id = 300;
  createImageAttachment(300);
  tryToAddExistingImageAttachment(300);
  verifyImageAttachmentExists(300);
  updateImageAttachment(300);
  deleteImageAttachment(300);
  tryToDeleteANonExistingImageAttachment(300);
  verifyImageAttachmentDoesNotExist(300);
});

// Story: crud:ImageAttachment:nondet:1:2
bthread("crud:ImageAttachment:nondet:1:2", function () {
  let id = 301;
  createImageAttachment(301);
  tryToAddExistingImageAttachment(301);
  updateImageAttachment(301);
  verifyImageAttachmentExists(301);
  deleteImageAttachment(301);
  tryToDeleteANonExistingImageAttachment(301);
  verifyImageAttachmentDoesNotExist(301);
});

// Story: crud:ImageAttachment:nondet:negative:dup-add
bthread("crud:ImageAttachment:nondet:negative:dup-add", function () {
  let id = 306;
  createImageAttachment(306);
  verifyImageAttachmentExists(306);
  tryToAddExistingImageAttachment(306);
  verifyImageAttachmentExists(306);
});

// Story: crud:ImageAttachment:nondet:existing:update
bthread("crud:ImageAttachment:nondet:existing:update", function () {
  let ev = waitForAnyImageAttachmentAdded();
  let args = Object.values(ev);
  block(matchDeletedImageAttachment.apply(null, args), function () {
    verifyImageAttachmentExists.apply(null, args);
    updateImageAttachment.apply(null, args);
    verifyImageAttachmentExists.apply(null, args);
  });
});

// Story: monitor:ImageAttachment:add
bthread("monitor:ImageAttachment:add", function () {
  while (true) {
    let ev = waitForAnyImageAttachmentAdded();
    let args = Object.values(ev);
    block(matchDeletedImageAttachment.apply(null, args), function () {
      verifyImageAttachmentExists.apply(null, args);
    });
  }
});

// Story: crud:JournalEntry:nondet:1:1
bthread("crud:JournalEntry:nondet:1:1", function () {
  let id = 310;
  createJournalEntry(310);
  tryToAddExistingJournalEntry(310);
  verifyJournalEntryExists(310);
  updateJournalEntry(310);
  deleteJournalEntry(310);
  tryToDeleteANonExistingJournalEntry(310);
  verifyJournalEntryDoesNotExist(310);
});

// Story: crud:JournalEntry:nondet:1:2
bthread("crud:JournalEntry:nondet:1:2", function () {
  let id = 311;
  createJournalEntry(311);
  tryToAddExistingJournalEntry(311);
  updateJournalEntry(311);
  verifyJournalEntryExists(311);
  deleteJournalEntry(311);
  tryToDeleteANonExistingJournalEntry(311);
  verifyJournalEntryDoesNotExist(311);
});

// Story: crud:JournalEntry:nondet:negative:dup-add
bthread("crud:JournalEntry:nondet:negative:dup-add", function () {
  let id = 316;
  createJournalEntry(316);
  verifyJournalEntryExists(316);
  tryToAddExistingJournalEntry(316);
  verifyJournalEntryExists(316);
});

// Story: crud:JournalEntry:nondet:existing:update
bthread("crud:JournalEntry:nondet:existing:update", function () {
  let ev = waitForAnyJournalEntryAdded();
  let args = Object.values(ev);
  block(matchDeletedJournalEntry.apply(null, args), function () {
    verifyJournalEntryExists.apply(null, args);
    updateJournalEntry.apply(null, args);
    verifyJournalEntryExists.apply(null, args);
  });
});

// Story: monitor:JournalEntry:add
bthread("monitor:JournalEntry:add", function () {
  while (true) {
    let ev = waitForAnyJournalEntryAdded();
    let args = Object.values(ev);
    block(matchDeletedJournalEntry.apply(null, args), function () {
      verifyJournalEntryExists.apply(null, args);
    });
  }
});

// Story: crud:NotificationGroup:nondet:1:1
bthread("crud:NotificationGroup:nondet:1:1", function () {
  let id = 320;
  createNotificationGroup(320);
  tryToAddExistingNotificationGroup(320);
  verifyNotificationGroupExists(320);
  updateNotificationGroup(320);
  deleteNotificationGroup(320);
  tryToDeleteANonExistingNotificationGroup(320);
  verifyNotificationGroupDoesNotExist(320);
});

// Story: crud:NotificationGroup:nondet:1:2
bthread("crud:NotificationGroup:nondet:1:2", function () {
  let id = 321;
  createNotificationGroup(321);
  tryToAddExistingNotificationGroup(321);
  updateNotificationGroup(321);
  verifyNotificationGroupExists(321);
  deleteNotificationGroup(321);
  tryToDeleteANonExistingNotificationGroup(321);
  verifyNotificationGroupDoesNotExist(321);
});

// Story: crud:NotificationGroup:nondet:negative:dup-add
bthread("crud:NotificationGroup:nondet:negative:dup-add", function () {
  let id = 326;
  createNotificationGroup(326);
  verifyNotificationGroupExists(326);
  tryToAddExistingNotificationGroup(326);
  verifyNotificationGroupExists(326);
});

// Story: crud:NotificationGroup:nondet:existing:update
bthread("crud:NotificationGroup:nondet:existing:update", function () {
  let ev = waitForAnyNotificationGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedNotificationGroup.apply(null, args), function () {
    verifyNotificationGroupExists.apply(null, args);
    updateNotificationGroup.apply(null, args);
    verifyNotificationGroupExists.apply(null, args);
  });
});

// Story: monitor:NotificationGroup:add
bthread("monitor:NotificationGroup:add", function () {
  while (true) {
    let ev = waitForAnyNotificationGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedNotificationGroup.apply(null, args), function () {
      verifyNotificationGroupExists.apply(null, args);
    });
  }
});

// Story: crud:Notification:nondet:1:1
bthread("crud:Notification:nondet:1:1", function () {
  let id = 330;
  createNotification(330);
  tryToAddExistingNotification(330);
  verifyNotificationExists(330);
  updateNotification(330);
  deleteNotification(330);
  tryToDeleteANonExistingNotification(330);
  verifyNotificationDoesNotExist(330);
});

// Story: crud:Notification:nondet:1:2
bthread("crud:Notification:nondet:1:2", function () {
  let id = 331;
  createNotification(331);
  tryToAddExistingNotification(331);
  updateNotification(331);
  verifyNotificationExists(331);
  deleteNotification(331);
  tryToDeleteANonExistingNotification(331);
  verifyNotificationDoesNotExist(331);
});

// Story: crud:Notification:nondet:negative:dup-add
bthread("crud:Notification:nondet:negative:dup-add", function () {
  let id = 336;
  createNotification(336);
  verifyNotificationExists(336);
  tryToAddExistingNotification(336);
  verifyNotificationExists(336);
});

// Story: crud:Notification:nondet:existing:update
bthread("crud:Notification:nondet:existing:update", function () {
  let ev = waitForAnyNotificationAdded();
  let args = Object.values(ev);
  block(matchDeletedNotification.apply(null, args), function () {
    verifyNotificationExists.apply(null, args);
    updateNotification.apply(null, args);
    verifyNotificationExists.apply(null, args);
  });
});

// Story: monitor:Notification:add
bthread("monitor:Notification:add", function () {
  while (true) {
    let ev = waitForAnyNotificationAdded();
    let args = Object.values(ev);
    block(matchDeletedNotification.apply(null, args), function () {
      verifyNotificationExists.apply(null, args);
    });
  }
});

// Story: crud:TaggedObject:read_only
bthread("crud:TaggedObject:read_only", function () {
  let id = 340;
  verifyTaggedObjectExists(340);
});

// Story: crud:Tag:nondet:1:1
bthread("crud:Tag:nondet:1:1", function () {
  let id = 350;
  createTag(350);
  tryToAddExistingTag(350);
  verifyTagExists(350);
  updateTag(350);
  deleteTag(350);
  tryToDeleteANonExistingTag(350);
  verifyTagDoesNotExist(350);
});

// Story: crud:Tag:nondet:1:2
bthread("crud:Tag:nondet:1:2", function () {
  let id = 351;
  createTag(351);
  tryToAddExistingTag(351);
  updateTag(351);
  verifyTagExists(351);
  deleteTag(351);
  tryToDeleteANonExistingTag(351);
  verifyTagDoesNotExist(351);
});

// Story: crud:Tag:nondet:negative:dup-add
bthread("crud:Tag:nondet:negative:dup-add", function () {
  let id = 356;
  createTag(356);
  verifyTagExists(356);
  tryToAddExistingTag(356);
  verifyTagExists(356);
});

// Story: crud:Tag:nondet:existing:update
bthread("crud:Tag:nondet:existing:update", function () {
  let ev = waitForAnyTagAdded();
  let args = Object.values(ev);
  block(matchDeletedTag.apply(null, args), function () {
    verifyTagExists.apply(null, args);
    updateTag.apply(null, args);
    verifyTagExists.apply(null, args);
  });
});

// Story: monitor:Tag:add
bthread("monitor:Tag:add", function () {
  while (true) {
    let ev = waitForAnyTagAdded();
    let args = Object.values(ev);
    block(matchDeletedTag.apply(null, args), function () {
      verifyTagExists.apply(null, args);
    });
  }
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let id = 360;
  createWebhook(360);
  tryToAddExistingWebhook(360);
  verifyWebhookExists(360);
  updateWebhook(360);
  deleteWebhook(360);
  tryToDeleteANonExistingWebhook(360);
  verifyWebhookDoesNotExist(360);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let id = 361;
  createWebhook(361);
  tryToAddExistingWebhook(361);
  updateWebhook(361);
  verifyWebhookExists(361);
  deleteWebhook(361);
  tryToDeleteANonExistingWebhook(361);
  verifyWebhookDoesNotExist(361);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let id = 366;
  createWebhook(366);
  verifyWebhookExists(366);
  tryToAddExistingWebhook(366);
  verifyWebhookExists(366);
});

// Story: crud:Webhook:nondet:existing:update
bthread("crud:Webhook:nondet:existing:update", function () {
  let ev = waitForAnyWebhookAdded();
  let args = Object.values(ev);
  block(matchDeletedWebhook.apply(null, args), function () {
    verifyWebhookExists.apply(null, args);
    updateWebhook.apply(null, args);
    verifyWebhookExists.apply(null, args);
  });
});

// Story: monitor:Webhook:add
bthread("monitor:Webhook:add", function () {
  while (true) {
    let ev = waitForAnyWebhookAdded();
    let args = Object.values(ev);
    block(matchDeletedWebhook.apply(null, args), function () {
      verifyWebhookExists.apply(null, args);
    });
  }
});

// Story: crud:Script:nondet:1:1
bthread("crud:Script:nondet:1:1", function () {
  let id = 370;
  createScript(370);
  tryToAddExistingScript(370);
  verifyScriptExists(370);
  updateScript(370);
  deleteScript(370);
  tryToDeleteANonExistingScript(370);
  verifyScriptDoesNotExist(370);
});

// Story: crud:Script:nondet:1:2
bthread("crud:Script:nondet:1:2", function () {
  let id = 371;
  createScript(371);
  tryToAddExistingScript(371);
  updateScript(371);
  verifyScriptExists(371);
  deleteScript(371);
  tryToDeleteANonExistingScript(371);
  verifyScriptDoesNotExist(371);
});

// Story: crud:Script:nondet:negative:dup-add
bthread("crud:Script:nondet:negative:dup-add", function () {
  let id = 376;
  createScript(376);
  verifyScriptExists(376);
  tryToAddExistingScript(376);
  verifyScriptExists(376);
});

// Story: crud:Script:nondet:existing:update
bthread("crud:Script:nondet:existing:update", function () {
  let ev = waitForAnyScriptAdded();
  let args = Object.values(ev);
  block(matchDeletedScript.apply(null, args), function () {
    verifyScriptExists.apply(null, args);
    updateScript.apply(null, args);
    verifyScriptExists.apply(null, args);
  });
});

// Story: monitor:Script:add
bthread("monitor:Script:add", function () {
  while (true) {
    let ev = waitForAnyScriptAdded();
    let args = Object.values(ev);
    block(matchDeletedScript.apply(null, args), function () {
      verifyScriptExists.apply(null, args);
    });
  }
});

// Story: crud:Subscription:nondet:1:1
bthread("crud:Subscription:nondet:1:1", function () {
  let id = 380;
  createSubscription(380);
  tryToAddExistingSubscription(380);
  verifySubscriptionExists(380);
  updateSubscription(380);
  deleteSubscription(380);
  tryToDeleteANonExistingSubscription(380);
  verifySubscriptionDoesNotExist(380);
});

// Story: crud:Subscription:nondet:1:2
bthread("crud:Subscription:nondet:1:2", function () {
  let id = 381;
  createSubscription(381);
  tryToAddExistingSubscription(381);
  updateSubscription(381);
  verifySubscriptionExists(381);
  deleteSubscription(381);
  tryToDeleteANonExistingSubscription(381);
  verifySubscriptionDoesNotExist(381);
});

// Story: crud:Subscription:nondet:negative:dup-add
bthread("crud:Subscription:nondet:negative:dup-add", function () {
  let id = 386;
  createSubscription(386);
  verifySubscriptionExists(386);
  tryToAddExistingSubscription(386);
  verifySubscriptionExists(386);
});

// Story: crud:Subscription:nondet:existing:update
bthread("crud:Subscription:nondet:existing:update", function () {
  let ev = waitForAnySubscriptionAdded();
  let args = Object.values(ev);
  block(matchDeletedSubscription.apply(null, args), function () {
    verifySubscriptionExists.apply(null, args);
    updateSubscription.apply(null, args);
    verifySubscriptionExists.apply(null, args);
  });
});

// Story: monitor:Subscription:add
bthread("monitor:Subscription:add", function () {
  while (true) {
    let ev = waitForAnySubscriptionAdded();
    let args = Object.values(ev);
    block(matchDeletedSubscription.apply(null, args), function () {
      verifySubscriptionExists.apply(null, args);
    });
  }
});

// Story: crud:TableConfig:nondet:1:1
bthread("crud:TableConfig:nondet:1:1", function () {
  let id = 390;
  createTableConfig(390);
  tryToAddExistingTableConfig(390);
  verifyTableConfigExists(390);
  updateTableConfig(390);
  deleteTableConfig(390);
  tryToDeleteANonExistingTableConfig(390);
  verifyTableConfigDoesNotExist(390);
});

// Story: crud:TableConfig:nondet:1:2
bthread("crud:TableConfig:nondet:1:2", function () {
  let id = 391;
  createTableConfig(391);
  tryToAddExistingTableConfig(391);
  updateTableConfig(391);
  verifyTableConfigExists(391);
  deleteTableConfig(391);
  tryToDeleteANonExistingTableConfig(391);
  verifyTableConfigDoesNotExist(391);
});

// Story: crud:TableConfig:nondet:negative:dup-add
bthread("crud:TableConfig:nondet:negative:dup-add", function () {
  let id = 396;
  createTableConfig(396);
  verifyTableConfigExists(396);
  tryToAddExistingTableConfig(396);
  verifyTableConfigExists(396);
});

// Story: crud:TableConfig:nondet:existing:update
bthread("crud:TableConfig:nondet:existing:update", function () {
  let ev = waitForAnyTableConfigAdded();
  let args = Object.values(ev);
  block(matchDeletedTableConfig.apply(null, args), function () {
    verifyTableConfigExists.apply(null, args);
    updateTableConfig.apply(null, args);
    verifyTableConfigExists.apply(null, args);
  });
});

// Story: monitor:TableConfig:add
bthread("monitor:TableConfig:add", function () {
  while (true) {
    let ev = waitForAnyTableConfigAdded();
    let args = Object.values(ev);
    block(matchDeletedTableConfig.apply(null, args), function () {
      verifyTableConfigExists.apply(null, args);
    });
  }
});

// Story: crud:SavedFilter:nondet:1:1
bthread("crud:SavedFilter:nondet:1:1", function () {
  let id = 400;
  createSavedFilter(400);
  tryToAddExistingSavedFilter(400);
  verifySavedFilterExists(400);
  updateSavedFilter(400);
  deleteSavedFilter(400);
  tryToDeleteANonExistingSavedFilter(400);
  verifySavedFilterDoesNotExist(400);
});

// Story: crud:SavedFilter:nondet:1:2
bthread("crud:SavedFilter:nondet:1:2", function () {
  let id = 401;
  createSavedFilter(401);
  tryToAddExistingSavedFilter(401);
  updateSavedFilter(401);
  verifySavedFilterExists(401);
  deleteSavedFilter(401);
  tryToDeleteANonExistingSavedFilter(401);
  verifySavedFilterDoesNotExist(401);
});

// Story: crud:SavedFilter:nondet:negative:dup-add
bthread("crud:SavedFilter:nondet:negative:dup-add", function () {
  let id = 406;
  createSavedFilter(406);
  verifySavedFilterExists(406);
  tryToAddExistingSavedFilter(406);
  verifySavedFilterExists(406);
});

// Story: crud:SavedFilter:nondet:existing:update
bthread("crud:SavedFilter:nondet:existing:update", function () {
  let ev = waitForAnySavedFilterAdded();
  let args = Object.values(ev);
  block(matchDeletedSavedFilter.apply(null, args), function () {
    verifySavedFilterExists.apply(null, args);
    updateSavedFilter.apply(null, args);
    verifySavedFilterExists.apply(null, args);
  });
});

// Story: monitor:SavedFilter:add
bthread("monitor:SavedFilter:add", function () {
  while (true) {
    let ev = waitForAnySavedFilterAdded();
    let args = Object.values(ev);
    block(matchDeletedSavedFilter.apply(null, args), function () {
      verifySavedFilterExists.apply(null, args);
    });
  }
});

// Story: crud:ObjectType:read_only
bthread("crud:ObjectType:read_only", function () {
  let id = 410;
  verifyObjectTypeExists(410);
});

// Story: crud:Aggregate:nondet:1:1
bthread("crud:Aggregate:nondet:1:1", function () {
  let id = 420;
  createAggregate(420);
  tryToAddExistingAggregate(420);
  verifyAggregateExists(420);
  updateAggregate(420);
  deleteAggregate(420);
  tryToDeleteANonExistingAggregate(420);
  verifyAggregateDoesNotExist(420);
});

// Story: crud:Aggregate:nondet:1:2
bthread("crud:Aggregate:nondet:1:2", function () {
  let id = 421;
  createAggregate(421);
  tryToAddExistingAggregate(421);
  updateAggregate(421);
  verifyAggregateExists(421);
  deleteAggregate(421);
  tryToDeleteANonExistingAggregate(421);
  verifyAggregateDoesNotExist(421);
});

// Story: crud:Aggregate:nondet:negative:dup-add
bthread("crud:Aggregate:nondet:negative:dup-add", function () {
  let id = 426;
  createAggregate(426);
  verifyAggregateExists(426);
  tryToAddExistingAggregate(426);
  verifyAggregateExists(426);
});

// Story: crud:Aggregate:nondet:existing:update
bthread("crud:Aggregate:nondet:existing:update", function () {
  let ev = waitForAnyAggregateAdded();
  let args = Object.values(ev);
  block(matchDeletedAggregate.apply(null, args), function () {
    verifyAggregateExists.apply(null, args);
    updateAggregate.apply(null, args);
    verifyAggregateExists.apply(null, args);
  });
});

// Story: monitor:Aggregate:add
bthread("monitor:Aggregate:add", function () {
  while (true) {
    let ev = waitForAnyAggregateAdded();
    let args = Object.values(ev);
    block(matchDeletedAggregate.apply(null, args), function () {
      verifyAggregateExists.apply(null, args);
    });
  }
});

// Story: crud:ASNRange:nondet:1:1
bthread("crud:ASNRange:nondet:1:1", function () {
  let id = 430;
  createASNRange(430);
  tryToAddExistingASNRange(430);
  verifyASNRangeExists(430);
  updateASNRange(430);
  deleteASNRange(430);
  tryToDeleteANonExistingASNRange(430);
  verifyASNRangeDoesNotExist(430);
});

// Story: crud:ASNRange:nondet:1:2
bthread("crud:ASNRange:nondet:1:2", function () {
  let id = 431;
  createASNRange(431);
  tryToAddExistingASNRange(431);
  updateASNRange(431);
  verifyASNRangeExists(431);
  deleteASNRange(431);
  tryToDeleteANonExistingASNRange(431);
  verifyASNRangeDoesNotExist(431);
});

// Story: crud:ASNRange:nondet:negative:dup-add
bthread("crud:ASNRange:nondet:negative:dup-add", function () {
  let id = 436;
  createASNRange(436);
  verifyASNRangeExists(436);
  tryToAddExistingASNRange(436);
  verifyASNRangeExists(436);
});

// Story: crud:ASNRange:nondet:existing:update
bthread("crud:ASNRange:nondet:existing:update", function () {
  let ev = waitForAnyASNRangeAdded();
  let args = Object.values(ev);
  block(matchDeletedASNRange.apply(null, args), function () {
    verifyASNRangeExists.apply(null, args);
    updateASNRange.apply(null, args);
    verifyASNRangeExists.apply(null, args);
  });
});

// Story: monitor:ASNRange:add
bthread("monitor:ASNRange:add", function () {
  while (true) {
    let ev = waitForAnyASNRangeAdded();
    let args = Object.values(ev);
    block(matchDeletedASNRange.apply(null, args), function () {
      verifyASNRangeExists.apply(null, args);
    });
  }
});

// Story: crud:ASN:nondet:1:1
bthread("crud:ASN:nondet:1:1", function () {
  let id = 440;
  createASN(440);
  tryToAddExistingASN(440);
  verifyASNExists(440);
  updateASN(440);
  deleteASN(440);
  tryToDeleteANonExistingASN(440);
  verifyASNDoesNotExist(440);
});

// Story: crud:ASN:nondet:1:2
bthread("crud:ASN:nondet:1:2", function () {
  let id = 441;
  createASN(441);
  tryToAddExistingASN(441);
  updateASN(441);
  verifyASNExists(441);
  deleteASN(441);
  tryToDeleteANonExistingASN(441);
  verifyASNDoesNotExist(441);
});

// Story: crud:ASN:nondet:negative:dup-add
bthread("crud:ASN:nondet:negative:dup-add", function () {
  let id = 446;
  createASN(446);
  verifyASNExists(446);
  tryToAddExistingASN(446);
  verifyASNExists(446);
});

// Story: crud:ASN:nondet:existing:update
bthread("crud:ASN:nondet:existing:update", function () {
  let ev = waitForAnyASNAdded();
  let args = Object.values(ev);
  block(matchDeletedASN.apply(null, args), function () {
    verifyASNExists.apply(null, args);
    updateASN.apply(null, args);
    verifyASNExists.apply(null, args);
  });
});

// Story: monitor:ASN:add
bthread("monitor:ASN:add", function () {
  while (true) {
    let ev = waitForAnyASNAdded();
    let args = Object.values(ev);
    block(matchDeletedASN.apply(null, args), function () {
      verifyASNExists.apply(null, args);
    });
  }
});

// Story: crud:FHRPGroupAssignment:nondet:1:1
bthread("crud:FHRPGroupAssignment:nondet:1:1", function () {
  let id = 450;
  createFHRPGroupAssignment(450);
  tryToAddExistingFHRPGroupAssignment(450);
  verifyFHRPGroupAssignmentExists(450);
  updateFHRPGroupAssignment(450);
  deleteFHRPGroupAssignment(450);
  tryToDeleteANonExistingFHRPGroupAssignment(450);
  verifyFHRPGroupAssignmentDoesNotExist(450);
});

// Story: crud:FHRPGroupAssignment:nondet:1:2
bthread("crud:FHRPGroupAssignment:nondet:1:2", function () {
  let id = 451;
  createFHRPGroupAssignment(451);
  tryToAddExistingFHRPGroupAssignment(451);
  updateFHRPGroupAssignment(451);
  verifyFHRPGroupAssignmentExists(451);
  deleteFHRPGroupAssignment(451);
  tryToDeleteANonExistingFHRPGroupAssignment(451);
  verifyFHRPGroupAssignmentDoesNotExist(451);
});

// Story: crud:FHRPGroupAssignment:nondet:negative:dup-add
bthread("crud:FHRPGroupAssignment:nondet:negative:dup-add", function () {
  let id = 456;
  createFHRPGroupAssignment(456);
  verifyFHRPGroupAssignmentExists(456);
  tryToAddExistingFHRPGroupAssignment(456);
  verifyFHRPGroupAssignmentExists(456);
});

// Story: crud:FHRPGroupAssignment:nondet:existing:update
bthread("crud:FHRPGroupAssignment:nondet:existing:update", function () {
  let ev = waitForAnyFHRPGroupAssignmentAdded();
  let args = Object.values(ev);
  block(matchDeletedFHRPGroupAssignment.apply(null, args), function () {
    verifyFHRPGroupAssignmentExists.apply(null, args);
    updateFHRPGroupAssignment.apply(null, args);
    verifyFHRPGroupAssignmentExists.apply(null, args);
  });
});

// Story: monitor:FHRPGroupAssignment:add
bthread("monitor:FHRPGroupAssignment:add", function () {
  while (true) {
    let ev = waitForAnyFHRPGroupAssignmentAdded();
    let args = Object.values(ev);
    block(matchDeletedFHRPGroupAssignment.apply(null, args), function () {
      verifyFHRPGroupAssignmentExists.apply(null, args);
    });
  }
});

// Story: crud:FHRPGroup:nondet:1:1
bthread("crud:FHRPGroup:nondet:1:1", function () {
  let id = 460;
  createFHRPGroup(460);
  tryToAddExistingFHRPGroup(460);
  verifyFHRPGroupExists(460);
  updateFHRPGroup(460);
  deleteFHRPGroup(460);
  tryToDeleteANonExistingFHRPGroup(460);
  verifyFHRPGroupDoesNotExist(460);
});

// Story: crud:FHRPGroup:nondet:1:2
bthread("crud:FHRPGroup:nondet:1:2", function () {
  let id = 461;
  createFHRPGroup(461);
  tryToAddExistingFHRPGroup(461);
  updateFHRPGroup(461);
  verifyFHRPGroupExists(461);
  deleteFHRPGroup(461);
  tryToDeleteANonExistingFHRPGroup(461);
  verifyFHRPGroupDoesNotExist(461);
});

// Story: crud:FHRPGroup:nondet:negative:dup-add
bthread("crud:FHRPGroup:nondet:negative:dup-add", function () {
  let id = 466;
  createFHRPGroup(466);
  verifyFHRPGroupExists(466);
  tryToAddExistingFHRPGroup(466);
  verifyFHRPGroupExists(466);
});

// Story: crud:FHRPGroup:nondet:existing:update
bthread("crud:FHRPGroup:nondet:existing:update", function () {
  let ev = waitForAnyFHRPGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedFHRPGroup.apply(null, args), function () {
    verifyFHRPGroupExists.apply(null, args);
    updateFHRPGroup.apply(null, args);
    verifyFHRPGroupExists.apply(null, args);
  });
});

// Story: monitor:FHRPGroup:add
bthread("monitor:FHRPGroup:add", function () {
  while (true) {
    let ev = waitForAnyFHRPGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedFHRPGroup.apply(null, args), function () {
      verifyFHRPGroupExists.apply(null, args);
    });
  }
});

// Story: crud:IPAddress:nondet:1:1
bthread("crud:IPAddress:nondet:1:1", function () {
  let id = 470;
  createIPAddress(470);
  tryToAddExistingIPAddress(470);
  verifyIPAddressExists(470);
  updateIPAddress(470);
  deleteIPAddress(470);
  tryToDeleteANonExistingIPAddress(470);
  verifyIPAddressDoesNotExist(470);
});

// Story: crud:IPAddress:nondet:1:2
bthread("crud:IPAddress:nondet:1:2", function () {
  let id = 471;
  createIPAddress(471);
  tryToAddExistingIPAddress(471);
  updateIPAddress(471);
  verifyIPAddressExists(471);
  deleteIPAddress(471);
  tryToDeleteANonExistingIPAddress(471);
  verifyIPAddressDoesNotExist(471);
});

// Story: crud:IPAddress:nondet:negative:dup-add
bthread("crud:IPAddress:nondet:negative:dup-add", function () {
  let id = 476;
  createIPAddress(476);
  verifyIPAddressExists(476);
  tryToAddExistingIPAddress(476);
  verifyIPAddressExists(476);
});

// Story: crud:IPAddress:nondet:existing:update
bthread("crud:IPAddress:nondet:existing:update", function () {
  let ev = waitForAnyIPAddressAdded();
  let args = Object.values(ev);
  block(matchDeletedIPAddress.apply(null, args), function () {
    verifyIPAddressExists.apply(null, args);
    updateIPAddress.apply(null, args);
    verifyIPAddressExists.apply(null, args);
  });
});

// Story: monitor:IPAddress:add
bthread("monitor:IPAddress:add", function () {
  while (true) {
    let ev = waitForAnyIPAddressAdded();
    let args = Object.values(ev);
    block(matchDeletedIPAddress.apply(null, args), function () {
      verifyIPAddressExists.apply(null, args);
    });
  }
});

// Story: crud:IPRange:nondet:1:1
bthread("crud:IPRange:nondet:1:1", function () {
  let id = 480;
  createIPRange(480);
  tryToAddExistingIPRange(480);
  verifyIPRangeExists(480);
  updateIPRange(480);
  deleteIPRange(480);
  tryToDeleteANonExistingIPRange(480);
  verifyIPRangeDoesNotExist(480);
});

// Story: crud:IPRange:nondet:1:2
bthread("crud:IPRange:nondet:1:2", function () {
  let id = 481;
  createIPRange(481);
  tryToAddExistingIPRange(481);
  updateIPRange(481);
  verifyIPRangeExists(481);
  deleteIPRange(481);
  tryToDeleteANonExistingIPRange(481);
  verifyIPRangeDoesNotExist(481);
});

// Story: crud:IPRange:nondet:negative:dup-add
bthread("crud:IPRange:nondet:negative:dup-add", function () {
  let id = 486;
  createIPRange(486);
  verifyIPRangeExists(486);
  tryToAddExistingIPRange(486);
  verifyIPRangeExists(486);
});

// Story: crud:IPRange:nondet:existing:update
bthread("crud:IPRange:nondet:existing:update", function () {
  let ev = waitForAnyIPRangeAdded();
  let args = Object.values(ev);
  block(matchDeletedIPRange.apply(null, args), function () {
    verifyIPRangeExists.apply(null, args);
    updateIPRange.apply(null, args);
    verifyIPRangeExists.apply(null, args);
  });
});

// Story: monitor:IPRange:add
bthread("monitor:IPRange:add", function () {
  while (true) {
    let ev = waitForAnyIPRangeAdded();
    let args = Object.values(ev);
    block(matchDeletedIPRange.apply(null, args), function () {
      verifyIPRangeExists.apply(null, args);
    });
  }
});

// Story: crud:Prefix:nondet:1:1
bthread("crud:Prefix:nondet:1:1", function () {
  let id = 490;
  createPrefix(490);
  tryToAddExistingPrefix(490);
  verifyPrefixExists(490);
  updatePrefix(490);
  deletePrefix(490);
  tryToDeleteANonExistingPrefix(490);
  verifyPrefixDoesNotExist(490);
});

// Story: crud:Prefix:nondet:1:2
bthread("crud:Prefix:nondet:1:2", function () {
  let id = 491;
  createPrefix(491);
  tryToAddExistingPrefix(491);
  updatePrefix(491);
  verifyPrefixExists(491);
  deletePrefix(491);
  tryToDeleteANonExistingPrefix(491);
  verifyPrefixDoesNotExist(491);
});

// Story: crud:Prefix:nondet:negative:dup-add
bthread("crud:Prefix:nondet:negative:dup-add", function () {
  let id = 496;
  createPrefix(496);
  verifyPrefixExists(496);
  tryToAddExistingPrefix(496);
  verifyPrefixExists(496);
});

// Story: crud:Prefix:nondet:existing:update
bthread("crud:Prefix:nondet:existing:update", function () {
  let ev = waitForAnyPrefixAdded();
  let args = Object.values(ev);
  block(matchDeletedPrefix.apply(null, args), function () {
    verifyPrefixExists.apply(null, args);
    updatePrefix.apply(null, args);
    verifyPrefixExists.apply(null, args);
  });
});

// Story: monitor:Prefix:add
bthread("monitor:Prefix:add", function () {
  while (true) {
    let ev = waitForAnyPrefixAdded();
    let args = Object.values(ev);
    block(matchDeletedPrefix.apply(null, args), function () {
      verifyPrefixExists.apply(null, args);
    });
  }
});

// Story: crud:RIR:nondet:1:1
bthread("crud:RIR:nondet:1:1", function () {
  let id = 500;
  createRIR(500);
  tryToAddExistingRIR(500);
  verifyRIRExists(500);
  updateRIR(500);
  deleteRIR(500);
  tryToDeleteANonExistingRIR(500);
  verifyRIRDoesNotExist(500);
});

// Story: crud:RIR:nondet:1:2
bthread("crud:RIR:nondet:1:2", function () {
  let id = 501;
  createRIR(501);
  tryToAddExistingRIR(501);
  updateRIR(501);
  verifyRIRExists(501);
  deleteRIR(501);
  tryToDeleteANonExistingRIR(501);
  verifyRIRDoesNotExist(501);
});

// Story: crud:RIR:nondet:negative:dup-add
bthread("crud:RIR:nondet:negative:dup-add", function () {
  let id = 506;
  createRIR(506);
  verifyRIRExists(506);
  tryToAddExistingRIR(506);
  verifyRIRExists(506);
});

// Story: crud:RIR:nondet:existing:update
bthread("crud:RIR:nondet:existing:update", function () {
  let ev = waitForAnyRIRAdded();
  let args = Object.values(ev);
  block(matchDeletedRIR.apply(null, args), function () {
    verifyRIRExists.apply(null, args);
    updateRIR.apply(null, args);
    verifyRIRExists.apply(null, args);
  });
});

// Story: monitor:RIR:add
bthread("monitor:RIR:add", function () {
  while (true) {
    let ev = waitForAnyRIRAdded();
    let args = Object.values(ev);
    block(matchDeletedRIR.apply(null, args), function () {
      verifyRIRExists.apply(null, args);
    });
  }
});

// Story: crud:Role:nondet:1:1
bthread("crud:Role:nondet:1:1", function () {
  let id = 510;
  createRole(510);
  tryToAddExistingRole(510);
  verifyRoleExists(510);
  updateRole(510);
  deleteRole(510);
  tryToDeleteANonExistingRole(510);
  verifyRoleDoesNotExist(510);
});

// Story: crud:Role:nondet:1:2
bthread("crud:Role:nondet:1:2", function () {
  let id = 511;
  createRole(511);
  tryToAddExistingRole(511);
  updateRole(511);
  verifyRoleExists(511);
  deleteRole(511);
  tryToDeleteANonExistingRole(511);
  verifyRoleDoesNotExist(511);
});

// Story: crud:Role:nondet:negative:dup-add
bthread("crud:Role:nondet:negative:dup-add", function () {
  let id = 516;
  createRole(516);
  verifyRoleExists(516);
  tryToAddExistingRole(516);
  verifyRoleExists(516);
});

// Story: crud:Role:nondet:existing:update
bthread("crud:Role:nondet:existing:update", function () {
  let ev = waitForAnyRoleAdded();
  let args = Object.values(ev);
  block(matchDeletedRole.apply(null, args), function () {
    verifyRoleExists.apply(null, args);
    updateRole.apply(null, args);
    verifyRoleExists.apply(null, args);
  });
});

// Story: monitor:Role:add
bthread("monitor:Role:add", function () {
  while (true) {
    let ev = waitForAnyRoleAdded();
    let args = Object.values(ev);
    block(matchDeletedRole.apply(null, args), function () {
      verifyRoleExists.apply(null, args);
    });
  }
});

// Story: crud:RouteTarget:nondet:1:1
bthread("crud:RouteTarget:nondet:1:1", function () {
  let id = 520;
  createRouteTarget(520);
  tryToAddExistingRouteTarget(520);
  verifyRouteTargetExists(520);
  updateRouteTarget(520);
  deleteRouteTarget(520);
  tryToDeleteANonExistingRouteTarget(520);
  verifyRouteTargetDoesNotExist(520);
});

// Story: crud:RouteTarget:nondet:1:2
bthread("crud:RouteTarget:nondet:1:2", function () {
  let id = 521;
  createRouteTarget(521);
  tryToAddExistingRouteTarget(521);
  updateRouteTarget(521);
  verifyRouteTargetExists(521);
  deleteRouteTarget(521);
  tryToDeleteANonExistingRouteTarget(521);
  verifyRouteTargetDoesNotExist(521);
});

// Story: crud:RouteTarget:nondet:negative:dup-add
bthread("crud:RouteTarget:nondet:negative:dup-add", function () {
  let id = 526;
  createRouteTarget(526);
  verifyRouteTargetExists(526);
  tryToAddExistingRouteTarget(526);
  verifyRouteTargetExists(526);
});

// Story: crud:RouteTarget:nondet:existing:update
bthread("crud:RouteTarget:nondet:existing:update", function () {
  let ev = waitForAnyRouteTargetAdded();
  let args = Object.values(ev);
  block(matchDeletedRouteTarget.apply(null, args), function () {
    verifyRouteTargetExists.apply(null, args);
    updateRouteTarget.apply(null, args);
    verifyRouteTargetExists.apply(null, args);
  });
});

// Story: monitor:RouteTarget:add
bthread("monitor:RouteTarget:add", function () {
  while (true) {
    let ev = waitForAnyRouteTargetAdded();
    let args = Object.values(ev);
    block(matchDeletedRouteTarget.apply(null, args), function () {
      verifyRouteTargetExists.apply(null, args);
    });
  }
});

// Story: crud:ServiceTemplate:nondet:1:1
bthread("crud:ServiceTemplate:nondet:1:1", function () {
  let id = 530;
  createServiceTemplate(530);
  tryToAddExistingServiceTemplate(530);
  verifyServiceTemplateExists(530);
  updateServiceTemplate(530);
  deleteServiceTemplate(530);
  tryToDeleteANonExistingServiceTemplate(530);
  verifyServiceTemplateDoesNotExist(530);
});

// Story: crud:ServiceTemplate:nondet:1:2
bthread("crud:ServiceTemplate:nondet:1:2", function () {
  let id = 531;
  createServiceTemplate(531);
  tryToAddExistingServiceTemplate(531);
  updateServiceTemplate(531);
  verifyServiceTemplateExists(531);
  deleteServiceTemplate(531);
  tryToDeleteANonExistingServiceTemplate(531);
  verifyServiceTemplateDoesNotExist(531);
});

// Story: crud:ServiceTemplate:nondet:negative:dup-add
bthread("crud:ServiceTemplate:nondet:negative:dup-add", function () {
  let id = 536;
  createServiceTemplate(536);
  verifyServiceTemplateExists(536);
  tryToAddExistingServiceTemplate(536);
  verifyServiceTemplateExists(536);
});

// Story: crud:ServiceTemplate:nondet:existing:update
bthread("crud:ServiceTemplate:nondet:existing:update", function () {
  let ev = waitForAnyServiceTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedServiceTemplate.apply(null, args), function () {
    verifyServiceTemplateExists.apply(null, args);
    updateServiceTemplate.apply(null, args);
    verifyServiceTemplateExists.apply(null, args);
  });
});

// Story: monitor:ServiceTemplate:add
bthread("monitor:ServiceTemplate:add", function () {
  while (true) {
    let ev = waitForAnyServiceTemplateAdded();
    let args = Object.values(ev);
    block(matchDeletedServiceTemplate.apply(null, args), function () {
      verifyServiceTemplateExists.apply(null, args);
    });
  }
});

// Story: crud:Service:nondet:1:1
bthread("crud:Service:nondet:1:1", function () {
  let id = 540;
  createService(540);
  tryToAddExistingService(540);
  verifyServiceExists(540);
  updateService(540);
  deleteService(540);
  tryToDeleteANonExistingService(540);
  verifyServiceDoesNotExist(540);
});

// Story: crud:Service:nondet:1:2
bthread("crud:Service:nondet:1:2", function () {
  let id = 541;
  createService(541);
  tryToAddExistingService(541);
  updateService(541);
  verifyServiceExists(541);
  deleteService(541);
  tryToDeleteANonExistingService(541);
  verifyServiceDoesNotExist(541);
});

// Story: crud:Service:nondet:negative:dup-add
bthread("crud:Service:nondet:negative:dup-add", function () {
  let id = 546;
  createService(546);
  verifyServiceExists(546);
  tryToAddExistingService(546);
  verifyServiceExists(546);
});

// Story: crud:Service:nondet:existing:update
bthread("crud:Service:nondet:existing:update", function () {
  let ev = waitForAnyServiceAdded();
  let args = Object.values(ev);
  block(matchDeletedService.apply(null, args), function () {
    verifyServiceExists.apply(null, args);
    updateService.apply(null, args);
    verifyServiceExists.apply(null, args);
  });
});

// Story: monitor:Service:add
bthread("monitor:Service:add", function () {
  while (true) {
    let ev = waitForAnyServiceAdded();
    let args = Object.values(ev);
    block(matchDeletedService.apply(null, args), function () {
      verifyServiceExists.apply(null, args);
    });
  }
});

// Story: crud:VLANGroup:nondet:1:1
bthread("crud:VLANGroup:nondet:1:1", function () {
  let id = 550;
  createVLANGroup(550);
  tryToAddExistingVLANGroup(550);
  verifyVLANGroupExists(550);
  updateVLANGroup(550);
  deleteVLANGroup(550);
  tryToDeleteANonExistingVLANGroup(550);
  verifyVLANGroupDoesNotExist(550);
});

// Story: crud:VLANGroup:nondet:1:2
bthread("crud:VLANGroup:nondet:1:2", function () {
  let id = 551;
  createVLANGroup(551);
  tryToAddExistingVLANGroup(551);
  updateVLANGroup(551);
  verifyVLANGroupExists(551);
  deleteVLANGroup(551);
  tryToDeleteANonExistingVLANGroup(551);
  verifyVLANGroupDoesNotExist(551);
});

// Story: crud:VLANGroup:nondet:negative:dup-add
bthread("crud:VLANGroup:nondet:negative:dup-add", function () {
  let id = 556;
  createVLANGroup(556);
  verifyVLANGroupExists(556);
  tryToAddExistingVLANGroup(556);
  verifyVLANGroupExists(556);
});

// Story: crud:VLANGroup:nondet:existing:update
bthread("crud:VLANGroup:nondet:existing:update", function () {
  let ev = waitForAnyVLANGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedVLANGroup.apply(null, args), function () {
    verifyVLANGroupExists.apply(null, args);
    updateVLANGroup.apply(null, args);
    verifyVLANGroupExists.apply(null, args);
  });
});

// Story: monitor:VLANGroup:add
bthread("monitor:VLANGroup:add", function () {
  while (true) {
    let ev = waitForAnyVLANGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedVLANGroup.apply(null, args), function () {
      verifyVLANGroupExists.apply(null, args);
    });
  }
});

// Story: crud:VLANTranslationPolicy:nondet:1:1
bthread("crud:VLANTranslationPolicy:nondet:1:1", function () {
  let id = 560;
  createVLANTranslationPolicy(560);
  tryToAddExistingVLANTranslationPolicy(560);
  verifyVLANTranslationPolicyExists(560);
  updateVLANTranslationPolicy(560);
  deleteVLANTranslationPolicy(560);
  tryToDeleteANonExistingVLANTranslationPolicy(560);
  verifyVLANTranslationPolicyDoesNotExist(560);
});

// Story: crud:VLANTranslationPolicy:nondet:1:2
bthread("crud:VLANTranslationPolicy:nondet:1:2", function () {
  let id = 561;
  createVLANTranslationPolicy(561);
  tryToAddExistingVLANTranslationPolicy(561);
  updateVLANTranslationPolicy(561);
  verifyVLANTranslationPolicyExists(561);
  deleteVLANTranslationPolicy(561);
  tryToDeleteANonExistingVLANTranslationPolicy(561);
  verifyVLANTranslationPolicyDoesNotExist(561);
});

// Story: crud:VLANTranslationPolicy:nondet:negative:dup-add
bthread("crud:VLANTranslationPolicy:nondet:negative:dup-add", function () {
  let id = 566;
  createVLANTranslationPolicy(566);
  verifyVLANTranslationPolicyExists(566);
  tryToAddExistingVLANTranslationPolicy(566);
  verifyVLANTranslationPolicyExists(566);
});

// Story: crud:VLANTranslationPolicy:nondet:existing:update
bthread("crud:VLANTranslationPolicy:nondet:existing:update", function () {
  let ev = waitForAnyVLANTranslationPolicyAdded();
  let args = Object.values(ev);
  block(matchDeletedVLANTranslationPolicy.apply(null, args), function () {
    verifyVLANTranslationPolicyExists.apply(null, args);
    updateVLANTranslationPolicy.apply(null, args);
    verifyVLANTranslationPolicyExists.apply(null, args);
  });
});

// Story: monitor:VLANTranslationPolicy:add
bthread("monitor:VLANTranslationPolicy:add", function () {
  while (true) {
    let ev = waitForAnyVLANTranslationPolicyAdded();
    let args = Object.values(ev);
    block(matchDeletedVLANTranslationPolicy.apply(null, args), function () {
      verifyVLANTranslationPolicyExists.apply(null, args);
    });
  }
});

// Story: crud:VLANTranslationRule:nondet:1:1
bthread("crud:VLANTranslationRule:nondet:1:1", function () {
  let id = 570;
  createVLANTranslationRule(570);
  tryToAddExistingVLANTranslationRule(570);
  verifyVLANTranslationRuleExists(570);
  updateVLANTranslationRule(570);
  deleteVLANTranslationRule(570);
  tryToDeleteANonExistingVLANTranslationRule(570);
  verifyVLANTranslationRuleDoesNotExist(570);
});

// Story: crud:VLANTranslationRule:nondet:1:2
bthread("crud:VLANTranslationRule:nondet:1:2", function () {
  let id = 571;
  createVLANTranslationRule(571);
  tryToAddExistingVLANTranslationRule(571);
  updateVLANTranslationRule(571);
  verifyVLANTranslationRuleExists(571);
  deleteVLANTranslationRule(571);
  tryToDeleteANonExistingVLANTranslationRule(571);
  verifyVLANTranslationRuleDoesNotExist(571);
});

// Story: crud:VLANTranslationRule:nondet:negative:dup-add
bthread("crud:VLANTranslationRule:nondet:negative:dup-add", function () {
  let id = 576;
  createVLANTranslationRule(576);
  verifyVLANTranslationRuleExists(576);
  tryToAddExistingVLANTranslationRule(576);
  verifyVLANTranslationRuleExists(576);
});

// Story: crud:VLANTranslationRule:nondet:existing:update
bthread("crud:VLANTranslationRule:nondet:existing:update", function () {
  let ev = waitForAnyVLANTranslationRuleAdded();
  let args = Object.values(ev);
  block(matchDeletedVLANTranslationRule.apply(null, args), function () {
    verifyVLANTranslationRuleExists.apply(null, args);
    updateVLANTranslationRule.apply(null, args);
    verifyVLANTranslationRuleExists.apply(null, args);
  });
});

// Story: monitor:VLANTranslationRule:add
bthread("monitor:VLANTranslationRule:add", function () {
  while (true) {
    let ev = waitForAnyVLANTranslationRuleAdded();
    let args = Object.values(ev);
    block(matchDeletedVLANTranslationRule.apply(null, args), function () {
      verifyVLANTranslationRuleExists.apply(null, args);
    });
  }
});

// Story: crud:VLAN:nondet:1:1
bthread("crud:VLAN:nondet:1:1", function () {
  let id = 580;
  createVLAN(580);
  tryToAddExistingVLAN(580);
  verifyVLANExists(580);
  updateVLAN(580);
  deleteVLAN(580);
  tryToDeleteANonExistingVLAN(580);
  verifyVLANDoesNotExist(580);
});

// Story: crud:VLAN:nondet:1:2
bthread("crud:VLAN:nondet:1:2", function () {
  let id = 581;
  createVLAN(581);
  tryToAddExistingVLAN(581);
  updateVLAN(581);
  verifyVLANExists(581);
  deleteVLAN(581);
  tryToDeleteANonExistingVLAN(581);
  verifyVLANDoesNotExist(581);
});

// Story: crud:VLAN:nondet:negative:dup-add
bthread("crud:VLAN:nondet:negative:dup-add", function () {
  let id = 586;
  createVLAN(586);
  verifyVLANExists(586);
  tryToAddExistingVLAN(586);
  verifyVLANExists(586);
});

// Story: crud:VLAN:nondet:existing:update
bthread("crud:VLAN:nondet:existing:update", function () {
  let ev = waitForAnyVLANAdded();
  let args = Object.values(ev);
  block(matchDeletedVLAN.apply(null, args), function () {
    verifyVLANExists.apply(null, args);
    updateVLAN.apply(null, args);
    verifyVLANExists.apply(null, args);
  });
});

// Story: monitor:VLAN:add
bthread("monitor:VLAN:add", function () {
  while (true) {
    let ev = waitForAnyVLANAdded();
    let args = Object.values(ev);
    block(matchDeletedVLAN.apply(null, args), function () {
      verifyVLANExists.apply(null, args);
    });
  }
});

// Story: crud:VRF:nondet:1:1
bthread("crud:VRF:nondet:1:1", function () {
  let id = 590;
  createVRF(590);
  tryToAddExistingVRF(590);
  verifyVRFExists(590);
  updateVRF(590);
  deleteVRF(590);
  tryToDeleteANonExistingVRF(590);
  verifyVRFDoesNotExist(590);
});

// Story: crud:VRF:nondet:1:2
bthread("crud:VRF:nondet:1:2", function () {
  let id = 591;
  createVRF(591);
  tryToAddExistingVRF(591);
  updateVRF(591);
  verifyVRFExists(591);
  deleteVRF(591);
  tryToDeleteANonExistingVRF(591);
  verifyVRFDoesNotExist(591);
});

// Story: crud:VRF:nondet:negative:dup-add
bthread("crud:VRF:nondet:negative:dup-add", function () {
  let id = 596;
  createVRF(596);
  verifyVRFExists(596);
  tryToAddExistingVRF(596);
  verifyVRFExists(596);
});

// Story: crud:VRF:nondet:existing:update
bthread("crud:VRF:nondet:existing:update", function () {
  let ev = waitForAnyVRFAdded();
  let args = Object.values(ev);
  block(matchDeletedVRF.apply(null, args), function () {
    verifyVRFExists.apply(null, args);
    updateVRF.apply(null, args);
    verifyVRFExists.apply(null, args);
  });
});

// Story: monitor:VRF:add
bthread("monitor:VRF:add", function () {
  while (true) {
    let ev = waitForAnyVRFAdded();
    let args = Object.values(ev);
    block(matchDeletedVRF.apply(null, args), function () {
      verifyVRFExists.apply(null, args);
    });
  }
});

// Story: crud:CircuitGroupAssignment:nondet:1:1
bthread("crud:CircuitGroupAssignment:nondet:1:1", function () {
  let id = 600;
  createCircuitGroupAssignment(600);
  tryToAddExistingCircuitGroupAssignment(600);
  verifyCircuitGroupAssignmentExists(600);
  updateCircuitGroupAssignment(600);
  deleteCircuitGroupAssignment(600);
  tryToDeleteANonExistingCircuitGroupAssignment(600);
  verifyCircuitGroupAssignmentDoesNotExist(600);
});

// Story: crud:CircuitGroupAssignment:nondet:1:2
bthread("crud:CircuitGroupAssignment:nondet:1:2", function () {
  let id = 601;
  createCircuitGroupAssignment(601);
  tryToAddExistingCircuitGroupAssignment(601);
  updateCircuitGroupAssignment(601);
  verifyCircuitGroupAssignmentExists(601);
  deleteCircuitGroupAssignment(601);
  tryToDeleteANonExistingCircuitGroupAssignment(601);
  verifyCircuitGroupAssignmentDoesNotExist(601);
});

// Story: crud:CircuitGroupAssignment:nondet:negative:dup-add
bthread("crud:CircuitGroupAssignment:nondet:negative:dup-add", function () {
  let id = 606;
  createCircuitGroupAssignment(606);
  verifyCircuitGroupAssignmentExists(606);
  tryToAddExistingCircuitGroupAssignment(606);
  verifyCircuitGroupAssignmentExists(606);
});

// Story: crud:CircuitGroupAssignment:nondet:existing:update
bthread("crud:CircuitGroupAssignment:nondet:existing:update", function () {
  let ev = waitForAnyCircuitGroupAssignmentAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitGroupAssignment.apply(null, args), function () {
    verifyCircuitGroupAssignmentExists.apply(null, args);
    updateCircuitGroupAssignment.apply(null, args);
    verifyCircuitGroupAssignmentExists.apply(null, args);
  });
});

// Story: monitor:CircuitGroupAssignment:add
bthread("monitor:CircuitGroupAssignment:add", function () {
  while (true) {
    let ev = waitForAnyCircuitGroupAssignmentAdded();
    let args = Object.values(ev);
    block(matchDeletedCircuitGroupAssignment.apply(null, args), function () {
      verifyCircuitGroupAssignmentExists.apply(null, args);
    });
  }
});

// Story: crud:CircuitGroup:nondet:1:1
bthread("crud:CircuitGroup:nondet:1:1", function () {
  let name = "name_610";
  let slug = "slug_610";
  let id = 610;
  createCircuitGroup("name_610", "slug_610", 610);
  tryToAddExistingCircuitGroup("name_610", "slug_610", 610);
  verifyCircuitGroupExists("name_610", "slug_610", 610);
  updateCircuitGroup("name_610", "slug_610", 610);
  deleteCircuitGroup("name_610", "slug_610", 610);
  tryToDeleteANonExistingCircuitGroup("name_610", "slug_610", 610);
  verifyCircuitGroupDoesNotExist("name_610", "slug_610", 610);
});

// Story: crud:CircuitGroup:nondet:1:2
bthread("crud:CircuitGroup:nondet:1:2", function () {
  let name = "name_611";
  let slug = "slug_611";
  let id = 611;
  createCircuitGroup("name_611", "slug_611", 611);
  tryToAddExistingCircuitGroup("name_611", "slug_611", 611);
  updateCircuitGroup("name_611", "slug_611", 611);
  verifyCircuitGroupExists("name_611", "slug_611", 611);
  deleteCircuitGroup("name_611", "slug_611", 611);
  tryToDeleteANonExistingCircuitGroup("name_611", "slug_611", 611);
  verifyCircuitGroupDoesNotExist("name_611", "slug_611", 611);
});

// Story: crud:CircuitGroup:nondet:negative:dup-add
bthread("crud:CircuitGroup:nondet:negative:dup-add", function () {
  let name = "name_616";
  let slug = "slug_616";
  let id = 616;
  createCircuitGroup("name_616", "slug_616", 616);
  verifyCircuitGroupExists("name_616", "slug_616", 616);
  tryToAddExistingCircuitGroup("name_616", "slug_616", 616);
  verifyCircuitGroupExists("name_616", "slug_616", 616);
});

// Story: crud:CircuitGroup:nondet:existing:update
bthread("crud:CircuitGroup:nondet:existing:update", function () {
  let ev = waitForAnyCircuitGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitGroup.apply(null, args), function () {
    verifyCircuitGroupExists.apply(null, args);
    updateCircuitGroup.apply(null, args);
    verifyCircuitGroupExists.apply(null, args);
  });
});

// Story: monitor:CircuitGroup:add
bthread("monitor:CircuitGroup:add", function () {
  while (true) {
    let ev = waitForAnyCircuitGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedCircuitGroup.apply(null, args), function () {
      verifyCircuitGroupExists.apply(null, args);
    });
  }
});

// Story: crud:CircuitTermination:nondet:1:1
bthread("crud:CircuitTermination:nondet:1:1", function () {
  let id = 620;
  createCircuitTermination(620);
  tryToAddExistingCircuitTermination(620);
  verifyCircuitTerminationExists(620);
  updateCircuitTermination(620);
  deleteCircuitTermination(620);
  tryToDeleteANonExistingCircuitTermination(620);
  verifyCircuitTerminationDoesNotExist(620);
});

// Story: crud:CircuitTermination:nondet:1:2
bthread("crud:CircuitTermination:nondet:1:2", function () {
  let id = 621;
  createCircuitTermination(621);
  tryToAddExistingCircuitTermination(621);
  updateCircuitTermination(621);
  verifyCircuitTerminationExists(621);
  deleteCircuitTermination(621);
  tryToDeleteANonExistingCircuitTermination(621);
  verifyCircuitTerminationDoesNotExist(621);
});

// Story: crud:CircuitTermination:nondet:negative:dup-add
bthread("crud:CircuitTermination:nondet:negative:dup-add", function () {
  let id = 626;
  createCircuitTermination(626);
  verifyCircuitTerminationExists(626);
  tryToAddExistingCircuitTermination(626);
  verifyCircuitTerminationExists(626);
});

// Story: crud:CircuitTermination:nondet:existing:update
bthread("crud:CircuitTermination:nondet:existing:update", function () {
  let ev = waitForAnyCircuitTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitTermination.apply(null, args), function () {
    verifyCircuitTerminationExists.apply(null, args);
    updateCircuitTermination.apply(null, args);
    verifyCircuitTerminationExists.apply(null, args);
  });
});

// Story: monitor:CircuitTermination:add
bthread("monitor:CircuitTermination:add", function () {
  while (true) {
    let ev = waitForAnyCircuitTerminationAdded();
    let args = Object.values(ev);
    block(matchDeletedCircuitTermination.apply(null, args), function () {
      verifyCircuitTerminationExists.apply(null, args);
    });
  }
});

// Story: crud:CircuitType:nondet:1:1
bthread("crud:CircuitType:nondet:1:1", function () {
  let name = "name_630";
  let slug = "slug_630";
  let id = 630;
  createCircuitType("name_630", "slug_630", 630);
  tryToAddExistingCircuitType("name_630", "slug_630", 630);
  verifyCircuitTypeExists("name_630", "slug_630", 630);
  updateCircuitType("name_630", "slug_630", 630);
  deleteCircuitType("name_630", "slug_630", 630);
  tryToDeleteANonExistingCircuitType("name_630", "slug_630", 630);
  verifyCircuitTypeDoesNotExist("name_630", "slug_630", 630);
});

// Story: crud:CircuitType:nondet:1:2
bthread("crud:CircuitType:nondet:1:2", function () {
  let name = "name_631";
  let slug = "slug_631";
  let id = 631;
  createCircuitType("name_631", "slug_631", 631);
  tryToAddExistingCircuitType("name_631", "slug_631", 631);
  updateCircuitType("name_631", "slug_631", 631);
  verifyCircuitTypeExists("name_631", "slug_631", 631);
  deleteCircuitType("name_631", "slug_631", 631);
  tryToDeleteANonExistingCircuitType("name_631", "slug_631", 631);
  verifyCircuitTypeDoesNotExist("name_631", "slug_631", 631);
});

// Story: crud:CircuitType:nondet:negative:dup-add
bthread("crud:CircuitType:nondet:negative:dup-add", function () {
  let name = "name_636";
  let slug = "slug_636";
  let id = 636;
  createCircuitType("name_636", "slug_636", 636);
  verifyCircuitTypeExists("name_636", "slug_636", 636);
  tryToAddExistingCircuitType("name_636", "slug_636", 636);
  verifyCircuitTypeExists("name_636", "slug_636", 636);
});

// Story: crud:CircuitType:nondet:existing:update
bthread("crud:CircuitType:nondet:existing:update", function () {
  let ev = waitForAnyCircuitTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitType.apply(null, args), function () {
    verifyCircuitTypeExists.apply(null, args);
    updateCircuitType.apply(null, args);
    verifyCircuitTypeExists.apply(null, args);
  });
});

// Story: monitor:CircuitType:add
bthread("monitor:CircuitType:add", function () {
  while (true) {
    let ev = waitForAnyCircuitTypeAdded();
    let args = Object.values(ev);
    block(matchDeletedCircuitType.apply(null, args), function () {
      verifyCircuitTypeExists.apply(null, args);
    });
  }
});

// Story: crud:Circuit:nondet:1:1
bthread("crud:Circuit:nondet:1:1", function () {
  let cid = 640;
  let id = 640;
  createCircuit(640, 640);
  tryToAddExistingCircuit(640, 640);
  verifyCircuitExists(640, 640);
  updateCircuit(640, 640);
  deleteCircuit(640, 640);
  tryToDeleteANonExistingCircuit(640, 640);
  verifyCircuitDoesNotExist(640, 640);
});

// Story: crud:Circuit:nondet:1:2
bthread("crud:Circuit:nondet:1:2", function () {
  let cid = 641;
  let id = 641;
  createCircuit(641, 641);
  tryToAddExistingCircuit(641, 641);
  updateCircuit(641, 641);
  verifyCircuitExists(641, 641);
  deleteCircuit(641, 641);
  tryToDeleteANonExistingCircuit(641, 641);
  verifyCircuitDoesNotExist(641, 641);
});

// Story: crud:Circuit:nondet:negative:dup-add
bthread("crud:Circuit:nondet:negative:dup-add", function () {
  let cid = 646;
  let id = 646;
  createCircuit(646, 646);
  verifyCircuitExists(646, 646);
  tryToAddExistingCircuit(646, 646);
  verifyCircuitExists(646, 646);
});

// Story: crud:Circuit:nondet:existing:update
bthread("crud:Circuit:nondet:existing:update", function () {
  let ev = waitForAnyCircuitAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuit.apply(null, args), function () {
    verifyCircuitExists.apply(null, args);
    updateCircuit.apply(null, args);
    verifyCircuitExists.apply(null, args);
  });
});

// Story: monitor:Circuit:add
bthread("monitor:Circuit:add", function () {
  while (true) {
    let ev = waitForAnyCircuitAdded();
    let args = Object.values(ev);
    block(matchDeletedCircuit.apply(null, args), function () {
      verifyCircuitExists.apply(null, args);
    });
  }
});

// Story: crud:ProviderAccount:nondet:1:1
bthread("crud:ProviderAccount:nondet:1:1", function () {
  let account = "account_650";
  let id = 650;
  createProviderAccount("account_650", 650);
  tryToAddExistingProviderAccount("account_650", 650);
  verifyProviderAccountExists("account_650", 650);
  updateProviderAccount("account_650", 650);
  deleteProviderAccount("account_650", 650);
  tryToDeleteANonExistingProviderAccount("account_650", 650);
  verifyProviderAccountDoesNotExist("account_650", 650);
});

// Story: crud:ProviderAccount:nondet:1:2
bthread("crud:ProviderAccount:nondet:1:2", function () {
  let account = "account_651";
  let id = 651;
  createProviderAccount("account_651", 651);
  tryToAddExistingProviderAccount("account_651", 651);
  updateProviderAccount("account_651", 651);
  verifyProviderAccountExists("account_651", 651);
  deleteProviderAccount("account_651", 651);
  tryToDeleteANonExistingProviderAccount("account_651", 651);
  verifyProviderAccountDoesNotExist("account_651", 651);
});

// Story: crud:ProviderAccount:nondet:negative:dup-add
bthread("crud:ProviderAccount:nondet:negative:dup-add", function () {
  let account = "account_656";
  let id = 656;
  createProviderAccount("account_656", 656);
  verifyProviderAccountExists("account_656", 656);
  tryToAddExistingProviderAccount("account_656", 656);
  verifyProviderAccountExists("account_656", 656);
});

// Story: crud:ProviderAccount:nondet:existing:update
bthread("crud:ProviderAccount:nondet:existing:update", function () {
  let ev = waitForAnyProviderAccountAdded();
  let args = Object.values(ev);
  block(matchDeletedProviderAccount.apply(null, args), function () {
    verifyProviderAccountExists.apply(null, args);
    updateProviderAccount.apply(null, args);
    verifyProviderAccountExists.apply(null, args);
  });
});

// Story: monitor:ProviderAccount:add
bthread("monitor:ProviderAccount:add", function () {
  while (true) {
    let ev = waitForAnyProviderAccountAdded();
    let args = Object.values(ev);
    block(matchDeletedProviderAccount.apply(null, args), function () {
      verifyProviderAccountExists.apply(null, args);
    });
  }
});

// Story: crud:ProviderNetwork:nondet:1:1
bthread("crud:ProviderNetwork:nondet:1:1", function () {
  let name = "name_660";
  let slug = "slug_660";
  let id = 660;
  createProviderNetwork("name_660", "slug_660", 660);
  tryToAddExistingProviderNetwork("name_660", "slug_660", 660);
  verifyProviderNetworkExists("name_660", "slug_660", 660);
  updateProviderNetwork("name_660", "slug_660", 660);
  deleteProviderNetwork("name_660", "slug_660", 660);
  tryToDeleteANonExistingProviderNetwork("name_660", "slug_660", 660);
  verifyProviderNetworkDoesNotExist("name_660", "slug_660", 660);
});

// Story: crud:ProviderNetwork:nondet:1:2
bthread("crud:ProviderNetwork:nondet:1:2", function () {
  let name = "name_661";
  let slug = "slug_661";
  let id = 661;
  createProviderNetwork("name_661", "slug_661", 661);
  tryToAddExistingProviderNetwork("name_661", "slug_661", 661);
  updateProviderNetwork("name_661", "slug_661", 661);
  verifyProviderNetworkExists("name_661", "slug_661", 661);
  deleteProviderNetwork("name_661", "slug_661", 661);
  tryToDeleteANonExistingProviderNetwork("name_661", "slug_661", 661);
  verifyProviderNetworkDoesNotExist("name_661", "slug_661", 661);
});

// Story: crud:ProviderNetwork:nondet:negative:dup-add
bthread("crud:ProviderNetwork:nondet:negative:dup-add", function () {
  let name = "name_666";
  let slug = "slug_666";
  let id = 666;
  createProviderNetwork("name_666", "slug_666", 666);
  verifyProviderNetworkExists("name_666", "slug_666", 666);
  tryToAddExistingProviderNetwork("name_666", "slug_666", 666);
  verifyProviderNetworkExists("name_666", "slug_666", 666);
});

// Story: crud:ProviderNetwork:nondet:existing:update
bthread("crud:ProviderNetwork:nondet:existing:update", function () {
  let ev = waitForAnyProviderNetworkAdded();
  let args = Object.values(ev);
  block(matchDeletedProviderNetwork.apply(null, args), function () {
    verifyProviderNetworkExists.apply(null, args);
    updateProviderNetwork.apply(null, args);
    verifyProviderNetworkExists.apply(null, args);
  });
});

// Story: monitor:ProviderNetwork:add
bthread("monitor:ProviderNetwork:add", function () {
  while (true) {
    let ev = waitForAnyProviderNetworkAdded();
    let args = Object.values(ev);
    block(matchDeletedProviderNetwork.apply(null, args), function () {
      verifyProviderNetworkExists.apply(null, args);
    });
  }
});

// Story: crud:Provider:nondet:1:1
bthread("crud:Provider:nondet:1:1", function () {
  let name = "name_670";
  let slug = "slug_670";
  let id = 670;
  createProvider("name_670", "slug_670", 670);
  tryToAddExistingProvider("name_670", "slug_670", 670);
  verifyProviderExists("name_670", "slug_670", 670);
  updateProvider("name_670", "slug_670", 670);
  deleteProvider("name_670", "slug_670", 670);
  tryToDeleteANonExistingProvider("name_670", "slug_670", 670);
  verifyProviderDoesNotExist("name_670", "slug_670", 670);
});

// Story: crud:Provider:nondet:1:2
bthread("crud:Provider:nondet:1:2", function () {
  let name = "name_671";
  let slug = "slug_671";
  let id = 671;
  createProvider("name_671", "slug_671", 671);
  tryToAddExistingProvider("name_671", "slug_671", 671);
  updateProvider("name_671", "slug_671", 671);
  verifyProviderExists("name_671", "slug_671", 671);
  deleteProvider("name_671", "slug_671", 671);
  tryToDeleteANonExistingProvider("name_671", "slug_671", 671);
  verifyProviderDoesNotExist("name_671", "slug_671", 671);
});

// Story: crud:Provider:nondet:negative:dup-add
bthread("crud:Provider:nondet:negative:dup-add", function () {
  let name = "name_676";
  let slug = "slug_676";
  let id = 676;
  createProvider("name_676", "slug_676", 676);
  verifyProviderExists("name_676", "slug_676", 676);
  tryToAddExistingProvider("name_676", "slug_676", 676);
  verifyProviderExists("name_676", "slug_676", 676);
});

// Story: crud:Provider:nondet:existing:update
bthread("crud:Provider:nondet:existing:update", function () {
  let ev = waitForAnyProviderAdded();
  let args = Object.values(ev);
  block(matchDeletedProvider.apply(null, args), function () {
    verifyProviderExists.apply(null, args);
    updateProvider.apply(null, args);
    verifyProviderExists.apply(null, args);
  });
});

// Story: monitor:Provider:add
bthread("monitor:Provider:add", function () {
  while (true) {
    let ev = waitForAnyProviderAdded();
    let args = Object.values(ev);
    block(matchDeletedProvider.apply(null, args), function () {
      verifyProviderExists.apply(null, args);
    });
  }
});

// Story: crud:VirtualCircuitTermination:nondet:1:1
bthread("crud:VirtualCircuitTermination:nondet:1:1", function () {
  let id = 680;
  createVirtualCircuitTermination(680);
  tryToAddExistingVirtualCircuitTermination(680);
  verifyVirtualCircuitTerminationExists(680);
  updateVirtualCircuitTermination(680);
  deleteVirtualCircuitTermination(680);
  tryToDeleteANonExistingVirtualCircuitTermination(680);
  verifyVirtualCircuitTerminationDoesNotExist(680);
});

// Story: crud:VirtualCircuitTermination:nondet:1:2
bthread("crud:VirtualCircuitTermination:nondet:1:2", function () {
  let id = 681;
  createVirtualCircuitTermination(681);
  tryToAddExistingVirtualCircuitTermination(681);
  updateVirtualCircuitTermination(681);
  verifyVirtualCircuitTerminationExists(681);
  deleteVirtualCircuitTermination(681);
  tryToDeleteANonExistingVirtualCircuitTermination(681);
  verifyVirtualCircuitTerminationDoesNotExist(681);
});

// Story: crud:VirtualCircuitTermination:nondet:negative:dup-add
bthread("crud:VirtualCircuitTermination:nondet:negative:dup-add", function () {
  let id = 686;
  createVirtualCircuitTermination(686);
  verifyVirtualCircuitTerminationExists(686);
  tryToAddExistingVirtualCircuitTermination(686);
  verifyVirtualCircuitTerminationExists(686);
});

// Story: crud:VirtualCircuitTermination:nondet:existing:update
bthread("crud:VirtualCircuitTermination:nondet:existing:update", function () {
  let ev = waitForAnyVirtualCircuitTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualCircuitTermination.apply(null, args), function () {
    verifyVirtualCircuitTerminationExists.apply(null, args);
    updateVirtualCircuitTermination.apply(null, args);
    verifyVirtualCircuitTerminationExists.apply(null, args);
  });
});

// Story: monitor:VirtualCircuitTermination:add
bthread("monitor:VirtualCircuitTermination:add", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitTerminationAdded();
    let args = Object.values(ev);
    block(matchDeletedVirtualCircuitTermination.apply(null, args), function () {
      verifyVirtualCircuitTerminationExists.apply(null, args);
    });
  }
});

// Story: crud:VirtualCircuitType:nondet:1:1
bthread("crud:VirtualCircuitType:nondet:1:1", function () {
  let name = "name_690";
  let slug = "slug_690";
  let id = 690;
  createVirtualCircuitType("name_690", "slug_690", 690);
  tryToAddExistingVirtualCircuitType("name_690", "slug_690", 690);
  verifyVirtualCircuitTypeExists("name_690", "slug_690", 690);
  updateVirtualCircuitType("name_690", "slug_690", 690);
  deleteVirtualCircuitType("name_690", "slug_690", 690);
  tryToDeleteANonExistingVirtualCircuitType("name_690", "slug_690", 690);
  verifyVirtualCircuitTypeDoesNotExist("name_690", "slug_690", 690);
});

// Story: crud:VirtualCircuitType:nondet:1:2
bthread("crud:VirtualCircuitType:nondet:1:2", function () {
  let name = "name_691";
  let slug = "slug_691";
  let id = 691;
  createVirtualCircuitType("name_691", "slug_691", 691);
  tryToAddExistingVirtualCircuitType("name_691", "slug_691", 691);
  updateVirtualCircuitType("name_691", "slug_691", 691);
  verifyVirtualCircuitTypeExists("name_691", "slug_691", 691);
  deleteVirtualCircuitType("name_691", "slug_691", 691);
  tryToDeleteANonExistingVirtualCircuitType("name_691", "slug_691", 691);
  verifyVirtualCircuitTypeDoesNotExist("name_691", "slug_691", 691);
});

// Story: crud:VirtualCircuitType:nondet:negative:dup-add
bthread("crud:VirtualCircuitType:nondet:negative:dup-add", function () {
  let name = "name_696";
  let slug = "slug_696";
  let id = 696;
  createVirtualCircuitType("name_696", "slug_696", 696);
  verifyVirtualCircuitTypeExists("name_696", "slug_696", 696);
  tryToAddExistingVirtualCircuitType("name_696", "slug_696", 696);
  verifyVirtualCircuitTypeExists("name_696", "slug_696", 696);
});

// Story: crud:VirtualCircuitType:nondet:existing:update
bthread("crud:VirtualCircuitType:nondet:existing:update", function () {
  let ev = waitForAnyVirtualCircuitTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualCircuitType.apply(null, args), function () {
    verifyVirtualCircuitTypeExists.apply(null, args);
    updateVirtualCircuitType.apply(null, args);
    verifyVirtualCircuitTypeExists.apply(null, args);
  });
});

// Story: monitor:VirtualCircuitType:add
bthread("monitor:VirtualCircuitType:add", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitTypeAdded();
    let args = Object.values(ev);
    block(matchDeletedVirtualCircuitType.apply(null, args), function () {
      verifyVirtualCircuitTypeExists.apply(null, args);
    });
  }
});

// Story: crud:VirtualCircuit:nondet:1:1
bthread("crud:VirtualCircuit:nondet:1:1", function () {
  let cid = 700;
  let id = 700;
  createVirtualCircuit(700, 700);
  tryToAddExistingVirtualCircuit(700, 700);
  verifyVirtualCircuitExists(700, 700);
  updateVirtualCircuit(700, 700);
  deleteVirtualCircuit(700, 700);
  tryToDeleteANonExistingVirtualCircuit(700, 700);
  verifyVirtualCircuitDoesNotExist(700, 700);
});

// Story: crud:VirtualCircuit:nondet:1:2
bthread("crud:VirtualCircuit:nondet:1:2", function () {
  let cid = 701;
  let id = 701;
  createVirtualCircuit(701, 701);
  tryToAddExistingVirtualCircuit(701, 701);
  updateVirtualCircuit(701, 701);
  verifyVirtualCircuitExists(701, 701);
  deleteVirtualCircuit(701, 701);
  tryToDeleteANonExistingVirtualCircuit(701, 701);
  verifyVirtualCircuitDoesNotExist(701, 701);
});

// Story: crud:VirtualCircuit:nondet:negative:dup-add
bthread("crud:VirtualCircuit:nondet:negative:dup-add", function () {
  let cid = 706;
  let id = 706;
  createVirtualCircuit(706, 706);
  verifyVirtualCircuitExists(706, 706);
  tryToAddExistingVirtualCircuit(706, 706);
  verifyVirtualCircuitExists(706, 706);
});

// Story: crud:VirtualCircuit:nondet:existing:update
bthread("crud:VirtualCircuit:nondet:existing:update", function () {
  let ev = waitForAnyVirtualCircuitAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualCircuit.apply(null, args), function () {
    verifyVirtualCircuitExists.apply(null, args);
    updateVirtualCircuit.apply(null, args);
    verifyVirtualCircuitExists.apply(null, args);
  });
});

// Story: monitor:VirtualCircuit:add
bthread("monitor:VirtualCircuit:add", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitAdded();
    let args = Object.values(ev);
    block(matchDeletedVirtualCircuit.apply(null, args), function () {
      verifyVirtualCircuitExists.apply(null, args);
    });
  }
});

// Story: crud:BackgroundQueue:read_only
bthread("crud:BackgroundQueue:read_only", function () {
  let name = "name_710";
  verifyBackgroundQueueExists("name_710");
});

// Story: crud:BackgroundTask:read_only
bthread("crud:BackgroundTask:read_only", function () {
  let id = 720;
  verifyBackgroundTaskExists(720);
});

// Story: crud:BackgroundWorker:read_only
bthread("crud:BackgroundWorker:read_only", function () {
  let name = "name_730";
  verifyBackgroundWorkerExists("name_730");
});

// Story: crud:DataFile:read_only
bthread("crud:DataFile:read_only", function () {
  let id = 740;
  verifyDataFileExists(740);
});

// Story: crud:DataSource:nondet:1:1
bthread("crud:DataSource:nondet:1:1", function () {
  let id = 750;
  createDataSource(750);
  tryToAddExistingDataSource(750);
  verifyDataSourceExists(750);
  updateDataSource(750);
  deleteDataSource(750);
  tryToDeleteANonExistingDataSource(750);
  verifyDataSourceDoesNotExist(750);
});

// Story: crud:DataSource:nondet:1:2
bthread("crud:DataSource:nondet:1:2", function () {
  let id = 751;
  createDataSource(751);
  tryToAddExistingDataSource(751);
  updateDataSource(751);
  verifyDataSourceExists(751);
  deleteDataSource(751);
  tryToDeleteANonExistingDataSource(751);
  verifyDataSourceDoesNotExist(751);
});

// Story: crud:DataSource:nondet:negative:dup-add
bthread("crud:DataSource:nondet:negative:dup-add", function () {
  let id = 756;
  createDataSource(756);
  verifyDataSourceExists(756);
  tryToAddExistingDataSource(756);
  verifyDataSourceExists(756);
});

// Story: crud:DataSource:nondet:existing:update
bthread("crud:DataSource:nondet:existing:update", function () {
  let ev = waitForAnyDataSourceAdded();
  let args = Object.values(ev);
  block(matchDeletedDataSource.apply(null, args), function () {
    verifyDataSourceExists.apply(null, args);
    updateDataSource.apply(null, args);
    verifyDataSourceExists.apply(null, args);
  });
});

// Story: monitor:DataSource:add
bthread("monitor:DataSource:add", function () {
  while (true) {
    let ev = waitForAnyDataSourceAdded();
    let args = Object.values(ev);
    block(matchDeletedDataSource.apply(null, args), function () {
      verifyDataSourceExists.apply(null, args);
    });
  }
});

// Story: crud:Job:read_only
bthread("crud:Job:read_only", function () {
  let id = 760;
  verifyJobExists(760);
});

// Story: crud:ObjectChange:read_only
bthread("crud:ObjectChange:read_only", function () {
  let id = 770;
  verifyObjectChangeExists(770);
});

// Story: crud:IKEPolicy:nondet:1:1
bthread("crud:IKEPolicy:nondet:1:1", function () {
  let id = 780;
  let name = "name_780";
  createIKEPolicy(780, "name_780");
  tryToAddExistingIKEPolicy(780, "name_780");
  verifyIKEPolicyExists(780, "name_780");
  updateIKEPolicy(780, "name_780");
  deleteIKEPolicy(780, "name_780");
  tryToDeleteANonExistingIKEPolicy(780, "name_780");
  verifyIKEPolicyDoesNotExist(780, "name_780");
});

// Story: crud:IKEPolicy:nondet:1:2
bthread("crud:IKEPolicy:nondet:1:2", function () {
  let id = 781;
  let name = "name_781";
  createIKEPolicy(781, "name_781");
  tryToAddExistingIKEPolicy(781, "name_781");
  updateIKEPolicy(781, "name_781");
  verifyIKEPolicyExists(781, "name_781");
  deleteIKEPolicy(781, "name_781");
  tryToDeleteANonExistingIKEPolicy(781, "name_781");
  verifyIKEPolicyDoesNotExist(781, "name_781");
});

// Story: crud:IKEPolicy:nondet:negative:dup-add
bthread("crud:IKEPolicy:nondet:negative:dup-add", function () {
  let id = 786;
  let name = "name_786";
  createIKEPolicy(786, "name_786");
  verifyIKEPolicyExists(786, "name_786");
  tryToAddExistingIKEPolicy(786, "name_786");
  verifyIKEPolicyExists(786, "name_786");
});

// Story: crud:IKEPolicy:nondet:existing:update
bthread("crud:IKEPolicy:nondet:existing:update", function () {
  let ev = waitForAnyIKEPolicyAdded();
  let args = Object.values(ev);
  block(matchDeletedIKEPolicy.apply(null, args), function () {
    verifyIKEPolicyExists.apply(null, args);
    updateIKEPolicy.apply(null, args);
    verifyIKEPolicyExists.apply(null, args);
  });
});

// Story: monitor:IKEPolicy:add
bthread("monitor:IKEPolicy:add", function () {
  while (true) {
    let ev = waitForAnyIKEPolicyAdded();
    let args = Object.values(ev);
    block(matchDeletedIKEPolicy.apply(null, args), function () {
      verifyIKEPolicyExists.apply(null, args);
    });
  }
});

// Story: crud:IKEProposal:nondet:1:1
bthread("crud:IKEProposal:nondet:1:1", function () {
  let id = 790;
  let name = "name_790";
  createIKEProposal(790, "name_790");
  tryToAddExistingIKEProposal(790, "name_790");
  verifyIKEProposalExists(790, "name_790");
  updateIKEProposal(790, "name_790");
  deleteIKEProposal(790, "name_790");
  tryToDeleteANonExistingIKEProposal(790, "name_790");
  verifyIKEProposalDoesNotExist(790, "name_790");
});

// Story: crud:IKEProposal:nondet:1:2
bthread("crud:IKEProposal:nondet:1:2", function () {
  let id = 791;
  let name = "name_791";
  createIKEProposal(791, "name_791");
  tryToAddExistingIKEProposal(791, "name_791");
  updateIKEProposal(791, "name_791");
  verifyIKEProposalExists(791, "name_791");
  deleteIKEProposal(791, "name_791");
  tryToDeleteANonExistingIKEProposal(791, "name_791");
  verifyIKEProposalDoesNotExist(791, "name_791");
});

// Story: crud:IKEProposal:nondet:negative:dup-add
bthread("crud:IKEProposal:nondet:negative:dup-add", function () {
  let id = 796;
  let name = "name_796";
  createIKEProposal(796, "name_796");
  verifyIKEProposalExists(796, "name_796");
  tryToAddExistingIKEProposal(796, "name_796");
  verifyIKEProposalExists(796, "name_796");
});

// Story: crud:IKEProposal:nondet:existing:update
bthread("crud:IKEProposal:nondet:existing:update", function () {
  let ev = waitForAnyIKEProposalAdded();
  let args = Object.values(ev);
  block(matchDeletedIKEProposal.apply(null, args), function () {
    verifyIKEProposalExists.apply(null, args);
    updateIKEProposal.apply(null, args);
    verifyIKEProposalExists.apply(null, args);
  });
});

// Story: monitor:IKEProposal:add
bthread("monitor:IKEProposal:add", function () {
  while (true) {
    let ev = waitForAnyIKEProposalAdded();
    let args = Object.values(ev);
    block(matchDeletedIKEProposal.apply(null, args), function () {
      verifyIKEProposalExists.apply(null, args);
    });
  }
});

// Story: crud:IPSecPolicy:nondet:1:1
bthread("crud:IPSecPolicy:nondet:1:1", function () {
  let id = 800;
  let name = "name_800";
  createIPSecPolicy(800, "name_800");
  tryToAddExistingIPSecPolicy(800, "name_800");
  verifyIPSecPolicyExists(800, "name_800");
  updateIPSecPolicy(800, "name_800");
  deleteIPSecPolicy(800, "name_800");
  tryToDeleteANonExistingIPSecPolicy(800, "name_800");
  verifyIPSecPolicyDoesNotExist(800, "name_800");
});

// Story: crud:IPSecPolicy:nondet:1:2
bthread("crud:IPSecPolicy:nondet:1:2", function () {
  let id = 801;
  let name = "name_801";
  createIPSecPolicy(801, "name_801");
  tryToAddExistingIPSecPolicy(801, "name_801");
  updateIPSecPolicy(801, "name_801");
  verifyIPSecPolicyExists(801, "name_801");
  deleteIPSecPolicy(801, "name_801");
  tryToDeleteANonExistingIPSecPolicy(801, "name_801");
  verifyIPSecPolicyDoesNotExist(801, "name_801");
});

// Story: crud:IPSecPolicy:nondet:negative:dup-add
bthread("crud:IPSecPolicy:nondet:negative:dup-add", function () {
  let id = 806;
  let name = "name_806";
  createIPSecPolicy(806, "name_806");
  verifyIPSecPolicyExists(806, "name_806");
  tryToAddExistingIPSecPolicy(806, "name_806");
  verifyIPSecPolicyExists(806, "name_806");
});

// Story: crud:IPSecPolicy:nondet:existing:update
bthread("crud:IPSecPolicy:nondet:existing:update", function () {
  let ev = waitForAnyIPSecPolicyAdded();
  let args = Object.values(ev);
  block(matchDeletedIPSecPolicy.apply(null, args), function () {
    verifyIPSecPolicyExists.apply(null, args);
    updateIPSecPolicy.apply(null, args);
    verifyIPSecPolicyExists.apply(null, args);
  });
});

// Story: monitor:IPSecPolicy:add
bthread("monitor:IPSecPolicy:add", function () {
  while (true) {
    let ev = waitForAnyIPSecPolicyAdded();
    let args = Object.values(ev);
    block(matchDeletedIPSecPolicy.apply(null, args), function () {
      verifyIPSecPolicyExists.apply(null, args);
    });
  }
});

// Story: crud:IPSecProfile:nondet:1:1
bthread("crud:IPSecProfile:nondet:1:1", function () {
  let id = 810;
  let name = "name_810";
  createIPSecProfile(810, "name_810");
  tryToAddExistingIPSecProfile(810, "name_810");
  verifyIPSecProfileExists(810, "name_810");
  updateIPSecProfile(810, "name_810");
  deleteIPSecProfile(810, "name_810");
  tryToDeleteANonExistingIPSecProfile(810, "name_810");
  verifyIPSecProfileDoesNotExist(810, "name_810");
});

// Story: crud:IPSecProfile:nondet:1:2
bthread("crud:IPSecProfile:nondet:1:2", function () {
  let id = 811;
  let name = "name_811";
  createIPSecProfile(811, "name_811");
  tryToAddExistingIPSecProfile(811, "name_811");
  updateIPSecProfile(811, "name_811");
  verifyIPSecProfileExists(811, "name_811");
  deleteIPSecProfile(811, "name_811");
  tryToDeleteANonExistingIPSecProfile(811, "name_811");
  verifyIPSecProfileDoesNotExist(811, "name_811");
});

// Story: crud:IPSecProfile:nondet:negative:dup-add
bthread("crud:IPSecProfile:nondet:negative:dup-add", function () {
  let id = 816;
  let name = "name_816";
  createIPSecProfile(816, "name_816");
  verifyIPSecProfileExists(816, "name_816");
  tryToAddExistingIPSecProfile(816, "name_816");
  verifyIPSecProfileExists(816, "name_816");
});

// Story: crud:IPSecProfile:nondet:existing:update
bthread("crud:IPSecProfile:nondet:existing:update", function () {
  let ev = waitForAnyIPSecProfileAdded();
  let args = Object.values(ev);
  block(matchDeletedIPSecProfile.apply(null, args), function () {
    verifyIPSecProfileExists.apply(null, args);
    updateIPSecProfile.apply(null, args);
    verifyIPSecProfileExists.apply(null, args);
  });
});

// Story: monitor:IPSecProfile:add
bthread("monitor:IPSecProfile:add", function () {
  while (true) {
    let ev = waitForAnyIPSecProfileAdded();
    let args = Object.values(ev);
    block(matchDeletedIPSecProfile.apply(null, args), function () {
      verifyIPSecProfileExists.apply(null, args);
    });
  }
});

// Story: crud:IPSecProposal:nondet:1:1
bthread("crud:IPSecProposal:nondet:1:1", function () {
  let id = 820;
  let name = "name_820";
  createIPSecProposal(820, "name_820");
  tryToAddExistingIPSecProposal(820, "name_820");
  verifyIPSecProposalExists(820, "name_820");
  updateIPSecProposal(820, "name_820");
  deleteIPSecProposal(820, "name_820");
  tryToDeleteANonExistingIPSecProposal(820, "name_820");
  verifyIPSecProposalDoesNotExist(820, "name_820");
});

// Story: crud:IPSecProposal:nondet:1:2
bthread("crud:IPSecProposal:nondet:1:2", function () {
  let id = 821;
  let name = "name_821";
  createIPSecProposal(821, "name_821");
  tryToAddExistingIPSecProposal(821, "name_821");
  updateIPSecProposal(821, "name_821");
  verifyIPSecProposalExists(821, "name_821");
  deleteIPSecProposal(821, "name_821");
  tryToDeleteANonExistingIPSecProposal(821, "name_821");
  verifyIPSecProposalDoesNotExist(821, "name_821");
});

// Story: crud:IPSecProposal:nondet:negative:dup-add
bthread("crud:IPSecProposal:nondet:negative:dup-add", function () {
  let id = 826;
  let name = "name_826";
  createIPSecProposal(826, "name_826");
  verifyIPSecProposalExists(826, "name_826");
  tryToAddExistingIPSecProposal(826, "name_826");
  verifyIPSecProposalExists(826, "name_826");
});

// Story: crud:IPSecProposal:nondet:existing:update
bthread("crud:IPSecProposal:nondet:existing:update", function () {
  let ev = waitForAnyIPSecProposalAdded();
  let args = Object.values(ev);
  block(matchDeletedIPSecProposal.apply(null, args), function () {
    verifyIPSecProposalExists.apply(null, args);
    updateIPSecProposal.apply(null, args);
    verifyIPSecProposalExists.apply(null, args);
  });
});

// Story: monitor:IPSecProposal:add
bthread("monitor:IPSecProposal:add", function () {
  while (true) {
    let ev = waitForAnyIPSecProposalAdded();
    let args = Object.values(ev);
    block(matchDeletedIPSecProposal.apply(null, args), function () {
      verifyIPSecProposalExists.apply(null, args);
    });
  }
});

// Story: crud:L2VPNTermination:nondet:1:1
bthread("crud:L2VPNTermination:nondet:1:1", function () {
  let id = 830;
  createL2VPNTermination(830);
  tryToAddExistingL2VPNTermination(830);
  verifyL2VPNTerminationExists(830);
  updateL2VPNTermination(830);
  deleteL2VPNTermination(830);
  tryToDeleteANonExistingL2VPNTermination(830);
  verifyL2VPNTerminationDoesNotExist(830);
});

// Story: crud:L2VPNTermination:nondet:1:2
bthread("crud:L2VPNTermination:nondet:1:2", function () {
  let id = 831;
  createL2VPNTermination(831);
  tryToAddExistingL2VPNTermination(831);
  updateL2VPNTermination(831);
  verifyL2VPNTerminationExists(831);
  deleteL2VPNTermination(831);
  tryToDeleteANonExistingL2VPNTermination(831);
  verifyL2VPNTerminationDoesNotExist(831);
});

// Story: crud:L2VPNTermination:nondet:negative:dup-add
bthread("crud:L2VPNTermination:nondet:negative:dup-add", function () {
  let id = 836;
  createL2VPNTermination(836);
  verifyL2VPNTerminationExists(836);
  tryToAddExistingL2VPNTermination(836);
  verifyL2VPNTerminationExists(836);
});

// Story: crud:L2VPNTermination:nondet:existing:update
bthread("crud:L2VPNTermination:nondet:existing:update", function () {
  let ev = waitForAnyL2VPNTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedL2VPNTermination.apply(null, args), function () {
    verifyL2VPNTerminationExists.apply(null, args);
    updateL2VPNTermination.apply(null, args);
    verifyL2VPNTerminationExists.apply(null, args);
  });
});

// Story: monitor:L2VPNTermination:add
bthread("monitor:L2VPNTermination:add", function () {
  while (true) {
    let ev = waitForAnyL2VPNTerminationAdded();
    let args = Object.values(ev);
    block(matchDeletedL2VPNTermination.apply(null, args), function () {
      verifyL2VPNTerminationExists.apply(null, args);
    });
  }
});

// Story: crud:L2VPN:nondet:1:1
bthread("crud:L2VPN:nondet:1:1", function () {
  let id = 840;
  let name = "name_840";
  let slug = "slug_840";
  createL2VPN(840, "name_840", "slug_840");
  tryToAddExistingL2VPN(840, "name_840", "slug_840");
  verifyL2VPNExists(840, "name_840", "slug_840");
  updateL2VPN(840, "name_840", "slug_840");
  deleteL2VPN(840, "name_840", "slug_840");
  tryToDeleteANonExistingL2VPN(840, "name_840", "slug_840");
  verifyL2VPNDoesNotExist(840, "name_840", "slug_840");
});

// Story: crud:L2VPN:nondet:1:2
bthread("crud:L2VPN:nondet:1:2", function () {
  let id = 841;
  let name = "name_841";
  let slug = "slug_841";
  createL2VPN(841, "name_841", "slug_841");
  tryToAddExistingL2VPN(841, "name_841", "slug_841");
  updateL2VPN(841, "name_841", "slug_841");
  verifyL2VPNExists(841, "name_841", "slug_841");
  deleteL2VPN(841, "name_841", "slug_841");
  tryToDeleteANonExistingL2VPN(841, "name_841", "slug_841");
  verifyL2VPNDoesNotExist(841, "name_841", "slug_841");
});

// Story: crud:L2VPN:nondet:negative:dup-add
bthread("crud:L2VPN:nondet:negative:dup-add", function () {
  let id = 846;
  let name = "name_846";
  let slug = "slug_846";
  createL2VPN(846, "name_846", "slug_846");
  verifyL2VPNExists(846, "name_846", "slug_846");
  tryToAddExistingL2VPN(846, "name_846", "slug_846");
  verifyL2VPNExists(846, "name_846", "slug_846");
});

// Story: crud:L2VPN:nondet:existing:update
bthread("crud:L2VPN:nondet:existing:update", function () {
  let ev = waitForAnyL2VPNAdded();
  let args = Object.values(ev);
  block(matchDeletedL2VPN.apply(null, args), function () {
    verifyL2VPNExists.apply(null, args);
    updateL2VPN.apply(null, args);
    verifyL2VPNExists.apply(null, args);
  });
});

// Story: monitor:L2VPN:add
bthread("monitor:L2VPN:add", function () {
  while (true) {
    let ev = waitForAnyL2VPNAdded();
    let args = Object.values(ev);
    block(matchDeletedL2VPN.apply(null, args), function () {
      verifyL2VPNExists.apply(null, args);
    });
  }
});

// Story: crud:TunnelGroup:nondet:1:1
bthread("crud:TunnelGroup:nondet:1:1", function () {
  let id = 850;
  let name = "name_850";
  createTunnelGroup(850, "name_850");
  tryToAddExistingTunnelGroup(850, "name_850");
  verifyTunnelGroupExists(850, "name_850");
  updateTunnelGroup(850, "name_850");
  deleteTunnelGroup(850, "name_850");
  tryToDeleteANonExistingTunnelGroup(850, "name_850");
  verifyTunnelGroupDoesNotExist(850, "name_850");
});

// Story: crud:TunnelGroup:nondet:1:2
bthread("crud:TunnelGroup:nondet:1:2", function () {
  let id = 851;
  let name = "name_851";
  createTunnelGroup(851, "name_851");
  tryToAddExistingTunnelGroup(851, "name_851");
  updateTunnelGroup(851, "name_851");
  verifyTunnelGroupExists(851, "name_851");
  deleteTunnelGroup(851, "name_851");
  tryToDeleteANonExistingTunnelGroup(851, "name_851");
  verifyTunnelGroupDoesNotExist(851, "name_851");
});

// Story: crud:TunnelGroup:nondet:negative:dup-add
bthread("crud:TunnelGroup:nondet:negative:dup-add", function () {
  let id = 856;
  let name = "name_856";
  createTunnelGroup(856, "name_856");
  verifyTunnelGroupExists(856, "name_856");
  tryToAddExistingTunnelGroup(856, "name_856");
  verifyTunnelGroupExists(856, "name_856");
});

// Story: crud:TunnelGroup:nondet:existing:update
bthread("crud:TunnelGroup:nondet:existing:update", function () {
  let ev = waitForAnyTunnelGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedTunnelGroup.apply(null, args), function () {
    verifyTunnelGroupExists.apply(null, args);
    updateTunnelGroup.apply(null, args);
    verifyTunnelGroupExists.apply(null, args);
  });
});

// Story: monitor:TunnelGroup:add
bthread("monitor:TunnelGroup:add", function () {
  while (true) {
    let ev = waitForAnyTunnelGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedTunnelGroup.apply(null, args), function () {
      verifyTunnelGroupExists.apply(null, args);
    });
  }
});

// Story: crud:TunnelTermination:nondet:1:1
bthread("crud:TunnelTermination:nondet:1:1", function () {
  let id = 860;
  createTunnelTermination(860);
  tryToAddExistingTunnelTermination(860);
  verifyTunnelTerminationExists(860);
  updateTunnelTermination(860);
  deleteTunnelTermination(860);
  tryToDeleteANonExistingTunnelTermination(860);
  verifyTunnelTerminationDoesNotExist(860);
});

// Story: crud:TunnelTermination:nondet:1:2
bthread("crud:TunnelTermination:nondet:1:2", function () {
  let id = 861;
  createTunnelTermination(861);
  tryToAddExistingTunnelTermination(861);
  updateTunnelTermination(861);
  verifyTunnelTerminationExists(861);
  deleteTunnelTermination(861);
  tryToDeleteANonExistingTunnelTermination(861);
  verifyTunnelTerminationDoesNotExist(861);
});

// Story: crud:TunnelTermination:nondet:negative:dup-add
bthread("crud:TunnelTermination:nondet:negative:dup-add", function () {
  let id = 866;
  createTunnelTermination(866);
  verifyTunnelTerminationExists(866);
  tryToAddExistingTunnelTermination(866);
  verifyTunnelTerminationExists(866);
});

// Story: crud:TunnelTermination:nondet:existing:update
bthread("crud:TunnelTermination:nondet:existing:update", function () {
  let ev = waitForAnyTunnelTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedTunnelTermination.apply(null, args), function () {
    verifyTunnelTerminationExists.apply(null, args);
    updateTunnelTermination.apply(null, args);
    verifyTunnelTerminationExists.apply(null, args);
  });
});

// Story: monitor:TunnelTermination:add
bthread("monitor:TunnelTermination:add", function () {
  while (true) {
    let ev = waitForAnyTunnelTerminationAdded();
    let args = Object.values(ev);
    block(matchDeletedTunnelTermination.apply(null, args), function () {
      verifyTunnelTerminationExists.apply(null, args);
    });
  }
});

// Story: crud:Tunnel:nondet:1:1
bthread("crud:Tunnel:nondet:1:1", function () {
  let id = 870;
  let name = "name_870";
  createTunnel(870, "name_870");
  tryToAddExistingTunnel(870, "name_870");
  verifyTunnelExists(870, "name_870");
  updateTunnel(870, "name_870");
  deleteTunnel(870, "name_870");
  tryToDeleteANonExistingTunnel(870, "name_870");
  verifyTunnelDoesNotExist(870, "name_870");
});

// Story: crud:Tunnel:nondet:1:2
bthread("crud:Tunnel:nondet:1:2", function () {
  let id = 871;
  let name = "name_871";
  createTunnel(871, "name_871");
  tryToAddExistingTunnel(871, "name_871");
  updateTunnel(871, "name_871");
  verifyTunnelExists(871, "name_871");
  deleteTunnel(871, "name_871");
  tryToDeleteANonExistingTunnel(871, "name_871");
  verifyTunnelDoesNotExist(871, "name_871");
});

// Story: crud:Tunnel:nondet:negative:dup-add
bthread("crud:Tunnel:nondet:negative:dup-add", function () {
  let id = 876;
  let name = "name_876";
  createTunnel(876, "name_876");
  verifyTunnelExists(876, "name_876");
  tryToAddExistingTunnel(876, "name_876");
  verifyTunnelExists(876, "name_876");
});

// Story: crud:Tunnel:nondet:existing:update
bthread("crud:Tunnel:nondet:existing:update", function () {
  let ev = waitForAnyTunnelAdded();
  let args = Object.values(ev);
  block(matchDeletedTunnel.apply(null, args), function () {
    verifyTunnelExists.apply(null, args);
    updateTunnel.apply(null, args);
    verifyTunnelExists.apply(null, args);
  });
});

// Story: monitor:Tunnel:add
bthread("monitor:Tunnel:add", function () {
  while (true) {
    let ev = waitForAnyTunnelAdded();
    let args = Object.values(ev);
    block(matchDeletedTunnel.apply(null, args), function () {
      verifyTunnelExists.apply(null, args);
    });
  }
});

// Story: crud:ClusterGroup:nondet:1:1
bthread("crud:ClusterGroup:nondet:1:1", function () {
  let id = 880;
  createClusterGroup(880);
  tryToAddExistingClusterGroup(880);
  verifyClusterGroupExists(880);
  updateClusterGroup(880);
  deleteClusterGroup(880);
  tryToDeleteANonExistingClusterGroup(880);
  verifyClusterGroupDoesNotExist(880);
});

// Story: crud:ClusterGroup:nondet:1:2
bthread("crud:ClusterGroup:nondet:1:2", function () {
  let id = 881;
  createClusterGroup(881);
  tryToAddExistingClusterGroup(881);
  updateClusterGroup(881);
  verifyClusterGroupExists(881);
  deleteClusterGroup(881);
  tryToDeleteANonExistingClusterGroup(881);
  verifyClusterGroupDoesNotExist(881);
});

// Story: crud:ClusterGroup:nondet:negative:dup-add
bthread("crud:ClusterGroup:nondet:negative:dup-add", function () {
  let id = 886;
  createClusterGroup(886);
  verifyClusterGroupExists(886);
  tryToAddExistingClusterGroup(886);
  verifyClusterGroupExists(886);
});

// Story: crud:ClusterGroup:nondet:existing:update
bthread("crud:ClusterGroup:nondet:existing:update", function () {
  let ev = waitForAnyClusterGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedClusterGroup.apply(null, args), function () {
    verifyClusterGroupExists.apply(null, args);
    updateClusterGroup.apply(null, args);
    verifyClusterGroupExists.apply(null, args);
  });
});

// Story: monitor:ClusterGroup:add
bthread("monitor:ClusterGroup:add", function () {
  while (true) {
    let ev = waitForAnyClusterGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedClusterGroup.apply(null, args), function () {
      verifyClusterGroupExists.apply(null, args);
    });
  }
});

// Story: crud:ClusterType:nondet:1:1
bthread("crud:ClusterType:nondet:1:1", function () {
  let id = 890;
  createClusterType(890);
  tryToAddExistingClusterType(890);
  verifyClusterTypeExists(890);
  updateClusterType(890);
  deleteClusterType(890);
  tryToDeleteANonExistingClusterType(890);
  verifyClusterTypeDoesNotExist(890);
});

// Story: crud:ClusterType:nondet:1:2
bthread("crud:ClusterType:nondet:1:2", function () {
  let id = 891;
  createClusterType(891);
  tryToAddExistingClusterType(891);
  updateClusterType(891);
  verifyClusterTypeExists(891);
  deleteClusterType(891);
  tryToDeleteANonExistingClusterType(891);
  verifyClusterTypeDoesNotExist(891);
});

// Story: crud:ClusterType:nondet:negative:dup-add
bthread("crud:ClusterType:nondet:negative:dup-add", function () {
  let id = 896;
  createClusterType(896);
  verifyClusterTypeExists(896);
  tryToAddExistingClusterType(896);
  verifyClusterTypeExists(896);
});

// Story: crud:ClusterType:nondet:existing:update
bthread("crud:ClusterType:nondet:existing:update", function () {
  let ev = waitForAnyClusterTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedClusterType.apply(null, args), function () {
    verifyClusterTypeExists.apply(null, args);
    updateClusterType.apply(null, args);
    verifyClusterTypeExists.apply(null, args);
  });
});

// Story: monitor:ClusterType:add
bthread("monitor:ClusterType:add", function () {
  while (true) {
    let ev = waitForAnyClusterTypeAdded();
    let args = Object.values(ev);
    block(matchDeletedClusterType.apply(null, args), function () {
      verifyClusterTypeExists.apply(null, args);
    });
  }
});

// Story: crud:Cluster:nondet:1:1
bthread("crud:Cluster:nondet:1:1", function () {
  let id = 900;
  createCluster(900);
  tryToAddExistingCluster(900);
  verifyClusterExists(900);
  updateCluster(900);
  deleteCluster(900);
  tryToDeleteANonExistingCluster(900);
  verifyClusterDoesNotExist(900);
});

// Story: crud:Cluster:nondet:1:2
bthread("crud:Cluster:nondet:1:2", function () {
  let id = 901;
  createCluster(901);
  tryToAddExistingCluster(901);
  updateCluster(901);
  verifyClusterExists(901);
  deleteCluster(901);
  tryToDeleteANonExistingCluster(901);
  verifyClusterDoesNotExist(901);
});

// Story: crud:Cluster:nondet:negative:dup-add
bthread("crud:Cluster:nondet:negative:dup-add", function () {
  let id = 906;
  createCluster(906);
  verifyClusterExists(906);
  tryToAddExistingCluster(906);
  verifyClusterExists(906);
});

// Story: crud:Cluster:nondet:existing:update
bthread("crud:Cluster:nondet:existing:update", function () {
  let ev = waitForAnyClusterAdded();
  let args = Object.values(ev);
  block(matchDeletedCluster.apply(null, args), function () {
    verifyClusterExists.apply(null, args);
    updateCluster.apply(null, args);
    verifyClusterExists.apply(null, args);
  });
});

// Story: monitor:Cluster:add
bthread("monitor:Cluster:add", function () {
  while (true) {
    let ev = waitForAnyClusterAdded();
    let args = Object.values(ev);
    block(matchDeletedCluster.apply(null, args), function () {
      verifyClusterExists.apply(null, args);
    });
  }
});

// Story: crud:Interface:nondet:1:1
bthread("crud:Interface:nondet:1:1", function () {
  let id = 910;
  createInterface(910);
  tryToAddExistingInterface(910);
  verifyInterfaceExists(910);
  updateInterface(910);
  deleteInterface(910);
  tryToDeleteANonExistingInterface(910);
  verifyInterfaceDoesNotExist(910);
});

// Story: crud:Interface:nondet:1:2
bthread("crud:Interface:nondet:1:2", function () {
  let id = 911;
  createInterface(911);
  tryToAddExistingInterface(911);
  updateInterface(911);
  verifyInterfaceExists(911);
  deleteInterface(911);
  tryToDeleteANonExistingInterface(911);
  verifyInterfaceDoesNotExist(911);
});

// Story: crud:Interface:nondet:negative:dup-add
bthread("crud:Interface:nondet:negative:dup-add", function () {
  let id = 916;
  createInterface(916);
  verifyInterfaceExists(916);
  tryToAddExistingInterface(916);
  verifyInterfaceExists(916);
});

// Story: crud:Interface:nondet:existing:update
bthread("crud:Interface:nondet:existing:update", function () {
  let ev = waitForAnyInterfaceAdded();
  let args = Object.values(ev);
  block(matchDeletedInterface.apply(null, args), function () {
    verifyInterfaceExists.apply(null, args);
    updateInterface.apply(null, args);
    verifyInterfaceExists.apply(null, args);
  });
});

// Story: monitor:Interface:add
bthread("monitor:Interface:add", function () {
  while (true) {
    let ev = waitForAnyInterfaceAdded();
    let args = Object.values(ev);
    block(matchDeletedInterface.apply(null, args), function () {
      verifyInterfaceExists.apply(null, args);
    });
  }
});

// Story: crud:VirtualDisk:nondet:1:1
bthread("crud:VirtualDisk:nondet:1:1", function () {
  let id = 920;
  createVirtualDisk(920);
  tryToAddExistingVirtualDisk(920);
  verifyVirtualDiskExists(920);
  updateVirtualDisk(920);
  deleteVirtualDisk(920);
  tryToDeleteANonExistingVirtualDisk(920);
  verifyVirtualDiskDoesNotExist(920);
});

// Story: crud:VirtualDisk:nondet:1:2
bthread("crud:VirtualDisk:nondet:1:2", function () {
  let id = 921;
  createVirtualDisk(921);
  tryToAddExistingVirtualDisk(921);
  updateVirtualDisk(921);
  verifyVirtualDiskExists(921);
  deleteVirtualDisk(921);
  tryToDeleteANonExistingVirtualDisk(921);
  verifyVirtualDiskDoesNotExist(921);
});

// Story: crud:VirtualDisk:nondet:negative:dup-add
bthread("crud:VirtualDisk:nondet:negative:dup-add", function () {
  let id = 926;
  createVirtualDisk(926);
  verifyVirtualDiskExists(926);
  tryToAddExistingVirtualDisk(926);
  verifyVirtualDiskExists(926);
});

// Story: crud:VirtualDisk:nondet:existing:update
bthread("crud:VirtualDisk:nondet:existing:update", function () {
  let ev = waitForAnyVirtualDiskAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualDisk.apply(null, args), function () {
    verifyVirtualDiskExists.apply(null, args);
    updateVirtualDisk.apply(null, args);
    verifyVirtualDiskExists.apply(null, args);
  });
});

// Story: monitor:VirtualDisk:add
bthread("monitor:VirtualDisk:add", function () {
  while (true) {
    let ev = waitForAnyVirtualDiskAdded();
    let args = Object.values(ev);
    block(matchDeletedVirtualDisk.apply(null, args), function () {
      verifyVirtualDiskExists.apply(null, args);
    });
  }
});

// Story: crud:VirtualMachine:nondet:1:1
bthread("crud:VirtualMachine:nondet:1:1", function () {
  let id = 930;
  createVirtualMachine(930);
  tryToAddExistingVirtualMachine(930);
  verifyVirtualMachineExists(930);
  updateVirtualMachine(930);
  deleteVirtualMachine(930);
  tryToDeleteANonExistingVirtualMachine(930);
  verifyVirtualMachineDoesNotExist(930);
});

// Story: crud:VirtualMachine:nondet:1:2
bthread("crud:VirtualMachine:nondet:1:2", function () {
  let id = 931;
  createVirtualMachine(931);
  tryToAddExistingVirtualMachine(931);
  updateVirtualMachine(931);
  verifyVirtualMachineExists(931);
  deleteVirtualMachine(931);
  tryToDeleteANonExistingVirtualMachine(931);
  verifyVirtualMachineDoesNotExist(931);
});

// Story: crud:VirtualMachine:nondet:negative:dup-add
bthread("crud:VirtualMachine:nondet:negative:dup-add", function () {
  let id = 936;
  createVirtualMachine(936);
  verifyVirtualMachineExists(936);
  tryToAddExistingVirtualMachine(936);
  verifyVirtualMachineExists(936);
});

// Story: crud:VirtualMachine:nondet:existing:update
bthread("crud:VirtualMachine:nondet:existing:update", function () {
  let ev = waitForAnyVirtualMachineAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualMachine.apply(null, args), function () {
    verifyVirtualMachineExists.apply(null, args);
    updateVirtualMachine.apply(null, args);
    verifyVirtualMachineExists.apply(null, args);
  });
});

// Story: monitor:VirtualMachine:add
bthread("monitor:VirtualMachine:add", function () {
  while (true) {
    let ev = waitForAnyVirtualMachineAdded();
    let args = Object.values(ev);
    block(matchDeletedVirtualMachine.apply(null, args), function () {
      verifyVirtualMachineExists.apply(null, args);
    });
  }
});

// Story: crud:ContactAssignment:nondet:1:1
bthread("crud:ContactAssignment:nondet:1:1", function () {
  let id = 940;
  createContactAssignment(940);
  tryToAddExistingContactAssignment(940);
  verifyContactAssignmentExists(940);
  updateContactAssignment(940);
  deleteContactAssignment(940);
  tryToDeleteANonExistingContactAssignment(940);
  verifyContactAssignmentDoesNotExist(940);
});

// Story: crud:ContactAssignment:nondet:1:2
bthread("crud:ContactAssignment:nondet:1:2", function () {
  let id = 941;
  createContactAssignment(941);
  tryToAddExistingContactAssignment(941);
  updateContactAssignment(941);
  verifyContactAssignmentExists(941);
  deleteContactAssignment(941);
  tryToDeleteANonExistingContactAssignment(941);
  verifyContactAssignmentDoesNotExist(941);
});

// Story: crud:ContactAssignment:nondet:negative:dup-add
bthread("crud:ContactAssignment:nondet:negative:dup-add", function () {
  let id = 946;
  createContactAssignment(946);
  verifyContactAssignmentExists(946);
  tryToAddExistingContactAssignment(946);
  verifyContactAssignmentExists(946);
});

// Story: crud:ContactAssignment:nondet:existing:update
bthread("crud:ContactAssignment:nondet:existing:update", function () {
  let ev = waitForAnyContactAssignmentAdded();
  let args = Object.values(ev);
  block(matchDeletedContactAssignment.apply(null, args), function () {
    verifyContactAssignmentExists.apply(null, args);
    updateContactAssignment.apply(null, args);
    verifyContactAssignmentExists.apply(null, args);
  });
});

// Story: monitor:ContactAssignment:add
bthread("monitor:ContactAssignment:add", function () {
  while (true) {
    let ev = waitForAnyContactAssignmentAdded();
    let args = Object.values(ev);
    block(matchDeletedContactAssignment.apply(null, args), function () {
      verifyContactAssignmentExists.apply(null, args);
    });
  }
});

// Story: crud:ContactGroup:nondet:1:1
bthread("crud:ContactGroup:nondet:1:1", function () {
  let name = "name_950";
  let slug = "slug_950";
  let id = 950;
  createContactGroup("name_950", "slug_950", 950);
  tryToAddExistingContactGroup("name_950", "slug_950", 950);
  verifyContactGroupExists("name_950", "slug_950", 950);
  updateContactGroup("name_950", "slug_950", 950);
  deleteContactGroup("name_950", "slug_950", 950);
  tryToDeleteANonExistingContactGroup("name_950", "slug_950", 950);
  verifyContactGroupDoesNotExist("name_950", "slug_950", 950);
});

// Story: crud:ContactGroup:nondet:1:2
bthread("crud:ContactGroup:nondet:1:2", function () {
  let name = "name_951";
  let slug = "slug_951";
  let id = 951;
  createContactGroup("name_951", "slug_951", 951);
  tryToAddExistingContactGroup("name_951", "slug_951", 951);
  updateContactGroup("name_951", "slug_951", 951);
  verifyContactGroupExists("name_951", "slug_951", 951);
  deleteContactGroup("name_951", "slug_951", 951);
  tryToDeleteANonExistingContactGroup("name_951", "slug_951", 951);
  verifyContactGroupDoesNotExist("name_951", "slug_951", 951);
});

// Story: crud:ContactGroup:nondet:negative:dup-add
bthread("crud:ContactGroup:nondet:negative:dup-add", function () {
  let name = "name_956";
  let slug = "slug_956";
  let id = 956;
  createContactGroup("name_956", "slug_956", 956);
  verifyContactGroupExists("name_956", "slug_956", 956);
  tryToAddExistingContactGroup("name_956", "slug_956", 956);
  verifyContactGroupExists("name_956", "slug_956", 956);
});

// Story: crud:ContactGroup:nondet:existing:update
bthread("crud:ContactGroup:nondet:existing:update", function () {
  let ev = waitForAnyContactGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedContactGroup.apply(null, args), function () {
    verifyContactGroupExists.apply(null, args);
    updateContactGroup.apply(null, args);
    verifyContactGroupExists.apply(null, args);
  });
});

// Story: monitor:ContactGroup:add
bthread("monitor:ContactGroup:add", function () {
  while (true) {
    let ev = waitForAnyContactGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedContactGroup.apply(null, args), function () {
      verifyContactGroupExists.apply(null, args);
    });
  }
});

// Story: crud:ContactRole:nondet:1:1
bthread("crud:ContactRole:nondet:1:1", function () {
  let name = "name_960";
  let slug = "slug_960";
  let id = 960;
  createContactRole("name_960", "slug_960", 960);
  tryToAddExistingContactRole("name_960", "slug_960", 960);
  verifyContactRoleExists("name_960", "slug_960", 960);
  updateContactRole("name_960", "slug_960", 960);
  deleteContactRole("name_960", "slug_960", 960);
  tryToDeleteANonExistingContactRole("name_960", "slug_960", 960);
  verifyContactRoleDoesNotExist("name_960", "slug_960", 960);
});

// Story: crud:ContactRole:nondet:1:2
bthread("crud:ContactRole:nondet:1:2", function () {
  let name = "name_961";
  let slug = "slug_961";
  let id = 961;
  createContactRole("name_961", "slug_961", 961);
  tryToAddExistingContactRole("name_961", "slug_961", 961);
  updateContactRole("name_961", "slug_961", 961);
  verifyContactRoleExists("name_961", "slug_961", 961);
  deleteContactRole("name_961", "slug_961", 961);
  tryToDeleteANonExistingContactRole("name_961", "slug_961", 961);
  verifyContactRoleDoesNotExist("name_961", "slug_961", 961);
});

// Story: crud:ContactRole:nondet:negative:dup-add
bthread("crud:ContactRole:nondet:negative:dup-add", function () {
  let name = "name_966";
  let slug = "slug_966";
  let id = 966;
  createContactRole("name_966", "slug_966", 966);
  verifyContactRoleExists("name_966", "slug_966", 966);
  tryToAddExistingContactRole("name_966", "slug_966", 966);
  verifyContactRoleExists("name_966", "slug_966", 966);
});

// Story: crud:ContactRole:nondet:existing:update
bthread("crud:ContactRole:nondet:existing:update", function () {
  let ev = waitForAnyContactRoleAdded();
  let args = Object.values(ev);
  block(matchDeletedContactRole.apply(null, args), function () {
    verifyContactRoleExists.apply(null, args);
    updateContactRole.apply(null, args);
    verifyContactRoleExists.apply(null, args);
  });
});

// Story: monitor:ContactRole:add
bthread("monitor:ContactRole:add", function () {
  while (true) {
    let ev = waitForAnyContactRoleAdded();
    let args = Object.values(ev);
    block(matchDeletedContactRole.apply(null, args), function () {
      verifyContactRoleExists.apply(null, args);
    });
  }
});

// Story: crud:Contact:nondet:1:1
bthread("crud:Contact:nondet:1:1", function () {
  let name = "name_970";
  let id = 970;
  createContact("name_970", 970);
  tryToAddExistingContact("name_970", 970);
  verifyContactExists("name_970", 970);
  updateContact("name_970", 970);
  deleteContact("name_970", 970);
  tryToDeleteANonExistingContact("name_970", 970);
  verifyContactDoesNotExist("name_970", 970);
});

// Story: crud:Contact:nondet:1:2
bthread("crud:Contact:nondet:1:2", function () {
  let name = "name_971";
  let id = 971;
  createContact("name_971", 971);
  tryToAddExistingContact("name_971", 971);
  updateContact("name_971", 971);
  verifyContactExists("name_971", 971);
  deleteContact("name_971", 971);
  tryToDeleteANonExistingContact("name_971", 971);
  verifyContactDoesNotExist("name_971", 971);
});

// Story: crud:Contact:nondet:negative:dup-add
bthread("crud:Contact:nondet:negative:dup-add", function () {
  let name = "name_976";
  let id = 976;
  createContact("name_976", 976);
  verifyContactExists("name_976", 976);
  tryToAddExistingContact("name_976", 976);
  verifyContactExists("name_976", 976);
});

// Story: crud:Contact:nondet:existing:update
bthread("crud:Contact:nondet:existing:update", function () {
  let ev = waitForAnyContactAdded();
  let args = Object.values(ev);
  block(matchDeletedContact.apply(null, args), function () {
    verifyContactExists.apply(null, args);
    updateContact.apply(null, args);
    verifyContactExists.apply(null, args);
  });
});

// Story: monitor:Contact:add
bthread("monitor:Contact:add", function () {
  while (true) {
    let ev = waitForAnyContactAdded();
    let args = Object.values(ev);
    block(matchDeletedContact.apply(null, args), function () {
      verifyContactExists.apply(null, args);
    });
  }
});

// Story: crud:TenantGroup:nondet:1:1
bthread("crud:TenantGroup:nondet:1:1", function () {
  let name = "name_980";
  let slug = "slug_980";
  let id = 980;
  createTenantGroup("name_980", "slug_980", 980);
  tryToAddExistingTenantGroup("name_980", "slug_980", 980);
  verifyTenantGroupExists("name_980", "slug_980", 980);
  updateTenantGroup("name_980", "slug_980", 980);
  deleteTenantGroup("name_980", "slug_980", 980);
  tryToDeleteANonExistingTenantGroup("name_980", "slug_980", 980);
  verifyTenantGroupDoesNotExist("name_980", "slug_980", 980);
});

// Story: crud:TenantGroup:nondet:1:2
bthread("crud:TenantGroup:nondet:1:2", function () {
  let name = "name_981";
  let slug = "slug_981";
  let id = 981;
  createTenantGroup("name_981", "slug_981", 981);
  tryToAddExistingTenantGroup("name_981", "slug_981", 981);
  updateTenantGroup("name_981", "slug_981", 981);
  verifyTenantGroupExists("name_981", "slug_981", 981);
  deleteTenantGroup("name_981", "slug_981", 981);
  tryToDeleteANonExistingTenantGroup("name_981", "slug_981", 981);
  verifyTenantGroupDoesNotExist("name_981", "slug_981", 981);
});

// Story: crud:TenantGroup:nondet:negative:dup-add
bthread("crud:TenantGroup:nondet:negative:dup-add", function () {
  let name = "name_986";
  let slug = "slug_986";
  let id = 986;
  createTenantGroup("name_986", "slug_986", 986);
  verifyTenantGroupExists("name_986", "slug_986", 986);
  tryToAddExistingTenantGroup("name_986", "slug_986", 986);
  verifyTenantGroupExists("name_986", "slug_986", 986);
});

// Story: crud:TenantGroup:nondet:existing:update
bthread("crud:TenantGroup:nondet:existing:update", function () {
  let ev = waitForAnyTenantGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedTenantGroup.apply(null, args), function () {
    verifyTenantGroupExists.apply(null, args);
    updateTenantGroup.apply(null, args);
    verifyTenantGroupExists.apply(null, args);
  });
});

// Story: monitor:TenantGroup:add
bthread("monitor:TenantGroup:add", function () {
  while (true) {
    let ev = waitForAnyTenantGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedTenantGroup.apply(null, args), function () {
      verifyTenantGroupExists.apply(null, args);
    });
  }
});

// Story: crud:Tenant:nondet:1:1
bthread("crud:Tenant:nondet:1:1", function () {
  let name = "name_990";
  let slug = "slug_990";
  let id = 990;
  createTenant("name_990", "slug_990", 990);
  tryToAddExistingTenant("name_990", "slug_990", 990);
  verifyTenantExists("name_990", "slug_990", 990);
  updateTenant("name_990", "slug_990", 990);
  deleteTenant("name_990", "slug_990", 990);
  tryToDeleteANonExistingTenant("name_990", "slug_990", 990);
  verifyTenantDoesNotExist("name_990", "slug_990", 990);
});

// Story: crud:Tenant:nondet:1:2
bthread("crud:Tenant:nondet:1:2", function () {
  let name = "name_991";
  let slug = "slug_991";
  let id = 991;
  createTenant("name_991", "slug_991", 991);
  tryToAddExistingTenant("name_991", "slug_991", 991);
  updateTenant("name_991", "slug_991", 991);
  verifyTenantExists("name_991", "slug_991", 991);
  deleteTenant("name_991", "slug_991", 991);
  tryToDeleteANonExistingTenant("name_991", "slug_991", 991);
  verifyTenantDoesNotExist("name_991", "slug_991", 991);
});

// Story: crud:Tenant:nondet:negative:dup-add
bthread("crud:Tenant:nondet:negative:dup-add", function () {
  let name = "name_996";
  let slug = "slug_996";
  let id = 996;
  createTenant("name_996", "slug_996", 996);
  verifyTenantExists("name_996", "slug_996", 996);
  tryToAddExistingTenant("name_996", "slug_996", 996);
  verifyTenantExists("name_996", "slug_996", 996);
});

// Story: crud:Tenant:nondet:existing:update
bthread("crud:Tenant:nondet:existing:update", function () {
  let ev = waitForAnyTenantAdded();
  let args = Object.values(ev);
  block(matchDeletedTenant.apply(null, args), function () {
    verifyTenantExists.apply(null, args);
    updateTenant.apply(null, args);
    verifyTenantExists.apply(null, args);
  });
});

// Story: monitor:Tenant:add
bthread("monitor:Tenant:add", function () {
  while (true) {
    let ev = waitForAnyTenantAdded();
    let args = Object.values(ev);
    block(matchDeletedTenant.apply(null, args), function () {
      verifyTenantExists.apply(null, args);
    });
  }
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let id = 1000;
  createGroup(1000);
  tryToAddExistingGroup(1000);
  verifyGroupExists(1000);
  updateGroup(1000);
  deleteGroup(1000);
  tryToDeleteANonExistingGroup(1000);
  verifyGroupDoesNotExist(1000);
});

// Story: crud:Group:nondet:1:2
bthread("crud:Group:nondet:1:2", function () {
  let id = 1001;
  createGroup(1001);
  tryToAddExistingGroup(1001);
  updateGroup(1001);
  verifyGroupExists(1001);
  deleteGroup(1001);
  tryToDeleteANonExistingGroup(1001);
  verifyGroupDoesNotExist(1001);
});

// Story: crud:Group:nondet:negative:dup-add
bthread("crud:Group:nondet:negative:dup-add", function () {
  let id = 1006;
  createGroup(1006);
  verifyGroupExists(1006);
  tryToAddExistingGroup(1006);
  verifyGroupExists(1006);
});

// Story: crud:Group:nondet:existing:update
bthread("crud:Group:nondet:existing:update", function () {
  let ev = waitForAnyGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedGroup.apply(null, args), function () {
    verifyGroupExists.apply(null, args);
    updateGroup.apply(null, args);
    verifyGroupExists.apply(null, args);
  });
});

// Story: monitor:Group:add
bthread("monitor:Group:add", function () {
  while (true) {
    let ev = waitForAnyGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedGroup.apply(null, args), function () {
      verifyGroupExists.apply(null, args);
    });
  }
});

// Story: crud:Permission:nondet:1:1
bthread("crud:Permission:nondet:1:1", function () {
  let id = 1010;
  createPermission(1010);
  tryToAddExistingPermission(1010);
  verifyPermissionExists(1010);
  updatePermission(1010);
  deletePermission(1010);
  tryToDeleteANonExistingPermission(1010);
  verifyPermissionDoesNotExist(1010);
});

// Story: crud:Permission:nondet:1:2
bthread("crud:Permission:nondet:1:2", function () {
  let id = 1011;
  createPermission(1011);
  tryToAddExistingPermission(1011);
  updatePermission(1011);
  verifyPermissionExists(1011);
  deletePermission(1011);
  tryToDeleteANonExistingPermission(1011);
  verifyPermissionDoesNotExist(1011);
});

// Story: crud:Permission:nondet:negative:dup-add
bthread("crud:Permission:nondet:negative:dup-add", function () {
  let id = 1016;
  createPermission(1016);
  verifyPermissionExists(1016);
  tryToAddExistingPermission(1016);
  verifyPermissionExists(1016);
});

// Story: crud:Permission:nondet:existing:update
bthread("crud:Permission:nondet:existing:update", function () {
  let ev = waitForAnyPermissionAdded();
  let args = Object.values(ev);
  block(matchDeletedPermission.apply(null, args), function () {
    verifyPermissionExists.apply(null, args);
    updatePermission.apply(null, args);
    verifyPermissionExists.apply(null, args);
  });
});

// Story: monitor:Permission:add
bthread("monitor:Permission:add", function () {
  while (true) {
    let ev = waitForAnyPermissionAdded();
    let args = Object.values(ev);
    block(matchDeletedPermission.apply(null, args), function () {
      verifyPermissionExists.apply(null, args);
    });
  }
});

// Story: crud:Token:nondet:1:1
bthread("crud:Token:nondet:1:1", function () {
  let id = 1020;
  createToken(1020);
  tryToAddExistingToken(1020);
  verifyTokenExists(1020);
  updateToken(1020);
  deleteToken(1020);
  tryToDeleteANonExistingToken(1020);
  verifyTokenDoesNotExist(1020);
});

// Story: crud:Token:nondet:1:2
bthread("crud:Token:nondet:1:2", function () {
  let id = 1021;
  createToken(1021);
  tryToAddExistingToken(1021);
  updateToken(1021);
  verifyTokenExists(1021);
  deleteToken(1021);
  tryToDeleteANonExistingToken(1021);
  verifyTokenDoesNotExist(1021);
});

// Story: crud:Token:nondet:negative:dup-add
bthread("crud:Token:nondet:negative:dup-add", function () {
  let id = 1026;
  createToken(1026);
  verifyTokenExists(1026);
  tryToAddExistingToken(1026);
  verifyTokenExists(1026);
});

// Story: crud:Token:nondet:existing:update
bthread("crud:Token:nondet:existing:update", function () {
  let ev = waitForAnyTokenAdded();
  let args = Object.values(ev);
  block(matchDeletedToken.apply(null, args), function () {
    verifyTokenExists.apply(null, args);
    updateToken.apply(null, args);
    verifyTokenExists.apply(null, args);
  });
});

// Story: monitor:Token:add
bthread("monitor:Token:add", function () {
  while (true) {
    let ev = waitForAnyTokenAdded();
    let args = Object.values(ev);
    block(matchDeletedToken.apply(null, args), function () {
      verifyTokenExists.apply(null, args);
    });
  }
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let id = 1030;
  createUser(1030);
  tryToAddExistingUser(1030);
  verifyUserExists(1030);
  updateUser(1030);
  deleteUser(1030);
  tryToDeleteANonExistingUser(1030);
  verifyUserDoesNotExist(1030);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let id = 1031;
  createUser(1031);
  tryToAddExistingUser(1031);
  updateUser(1031);
  verifyUserExists(1031);
  deleteUser(1031);
  tryToDeleteANonExistingUser(1031);
  verifyUserDoesNotExist(1031);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let id = 1036;
  createUser(1036);
  verifyUserExists(1036);
  tryToAddExistingUser(1036);
  verifyUserExists(1036);
});

// Story: crud:User:nondet:existing:update
bthread("crud:User:nondet:existing:update", function () {
  let ev = waitForAnyUserAdded();
  let args = Object.values(ev);
  block(matchDeletedUser.apply(null, args), function () {
    verifyUserExists.apply(null, args);
    updateUser.apply(null, args);
    verifyUserExists.apply(null, args);
  });
});

// Story: monitor:User:add
bthread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    let args = Object.values(ev);
    block(matchDeletedUser.apply(null, args), function () {
      verifyUserExists.apply(null, args);
    });
  }
});

// Story: crud:WirelessLANGroup:nondet:1:1
bthread("crud:WirelessLANGroup:nondet:1:1", function () {
  let id = 1040;
  createWirelessLANGroup(1040);
  tryToAddExistingWirelessLANGroup(1040);
  verifyWirelessLANGroupExists(1040);
  updateWirelessLANGroup(1040);
  deleteWirelessLANGroup(1040);
  tryToDeleteANonExistingWirelessLANGroup(1040);
  verifyWirelessLANGroupDoesNotExist(1040);
});

// Story: crud:WirelessLANGroup:nondet:1:2
bthread("crud:WirelessLANGroup:nondet:1:2", function () {
  let id = 1041;
  createWirelessLANGroup(1041);
  tryToAddExistingWirelessLANGroup(1041);
  updateWirelessLANGroup(1041);
  verifyWirelessLANGroupExists(1041);
  deleteWirelessLANGroup(1041);
  tryToDeleteANonExistingWirelessLANGroup(1041);
  verifyWirelessLANGroupDoesNotExist(1041);
});

// Story: crud:WirelessLANGroup:nondet:negative:dup-add
bthread("crud:WirelessLANGroup:nondet:negative:dup-add", function () {
  let id = 1046;
  createWirelessLANGroup(1046);
  verifyWirelessLANGroupExists(1046);
  tryToAddExistingWirelessLANGroup(1046);
  verifyWirelessLANGroupExists(1046);
});

// Story: crud:WirelessLANGroup:nondet:existing:update
bthread("crud:WirelessLANGroup:nondet:existing:update", function () {
  let ev = waitForAnyWirelessLANGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedWirelessLANGroup.apply(null, args), function () {
    verifyWirelessLANGroupExists.apply(null, args);
    updateWirelessLANGroup.apply(null, args);
    verifyWirelessLANGroupExists.apply(null, args);
  });
});

// Story: monitor:WirelessLANGroup:add
bthread("monitor:WirelessLANGroup:add", function () {
  while (true) {
    let ev = waitForAnyWirelessLANGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedWirelessLANGroup.apply(null, args), function () {
      verifyWirelessLANGroupExists.apply(null, args);
    });
  }
});

// Story: crud:WirelessLAN:nondet:1:1
bthread("crud:WirelessLAN:nondet:1:1", function () {
  let id = 1050;
  createWirelessLAN(1050);
  tryToAddExistingWirelessLAN(1050);
  verifyWirelessLANExists(1050);
  updateWirelessLAN(1050);
  deleteWirelessLAN(1050);
  tryToDeleteANonExistingWirelessLAN(1050);
  verifyWirelessLANDoesNotExist(1050);
});

// Story: crud:WirelessLAN:nondet:1:2
bthread("crud:WirelessLAN:nondet:1:2", function () {
  let id = 1051;
  createWirelessLAN(1051);
  tryToAddExistingWirelessLAN(1051);
  updateWirelessLAN(1051);
  verifyWirelessLANExists(1051);
  deleteWirelessLAN(1051);
  tryToDeleteANonExistingWirelessLAN(1051);
  verifyWirelessLANDoesNotExist(1051);
});

// Story: crud:WirelessLAN:nondet:negative:dup-add
bthread("crud:WirelessLAN:nondet:negative:dup-add", function () {
  let id = 1056;
  createWirelessLAN(1056);
  verifyWirelessLANExists(1056);
  tryToAddExistingWirelessLAN(1056);
  verifyWirelessLANExists(1056);
});

// Story: crud:WirelessLAN:nondet:existing:update
bthread("crud:WirelessLAN:nondet:existing:update", function () {
  let ev = waitForAnyWirelessLANAdded();
  let args = Object.values(ev);
  block(matchDeletedWirelessLAN.apply(null, args), function () {
    verifyWirelessLANExists.apply(null, args);
    updateWirelessLAN.apply(null, args);
    verifyWirelessLANExists.apply(null, args);
  });
});

// Story: monitor:WirelessLAN:add
bthread("monitor:WirelessLAN:add", function () {
  while (true) {
    let ev = waitForAnyWirelessLANAdded();
    let args = Object.values(ev);
    block(matchDeletedWirelessLAN.apply(null, args), function () {
      verifyWirelessLANExists.apply(null, args);
    });
  }
});

// Story: crud:WirelessLink:nondet:1:1
bthread("crud:WirelessLink:nondet:1:1", function () {
  let id = 1060;
  createWirelessLink(1060);
  tryToAddExistingWirelessLink(1060);
  verifyWirelessLinkExists(1060);
  updateWirelessLink(1060);
  deleteWirelessLink(1060);
  tryToDeleteANonExistingWirelessLink(1060);
  verifyWirelessLinkDoesNotExist(1060);
});

// Story: crud:WirelessLink:nondet:1:2
bthread("crud:WirelessLink:nondet:1:2", function () {
  let id = 1061;
  createWirelessLink(1061);
  tryToAddExistingWirelessLink(1061);
  updateWirelessLink(1061);
  verifyWirelessLinkExists(1061);
  deleteWirelessLink(1061);
  tryToDeleteANonExistingWirelessLink(1061);
  verifyWirelessLinkDoesNotExist(1061);
});

// Story: crud:WirelessLink:nondet:negative:dup-add
bthread("crud:WirelessLink:nondet:negative:dup-add", function () {
  let id = 1066;
  createWirelessLink(1066);
  verifyWirelessLinkExists(1066);
  tryToAddExistingWirelessLink(1066);
  verifyWirelessLinkExists(1066);
});

// Story: crud:WirelessLink:nondet:existing:update
bthread("crud:WirelessLink:nondet:existing:update", function () {
  let ev = waitForAnyWirelessLinkAdded();
  let args = Object.values(ev);
  block(matchDeletedWirelessLink.apply(null, args), function () {
    verifyWirelessLinkExists.apply(null, args);
    updateWirelessLink.apply(null, args);
    verifyWirelessLinkExists.apply(null, args);
  });
});

// Story: monitor:WirelessLink:add
bthread("monitor:WirelessLink:add", function () {
  while (true) {
    let ev = waitForAnyWirelessLinkAdded();
    let args = Object.values(ev);
    block(matchDeletedWirelessLink.apply(null, args), function () {
      verifyWirelessLinkExists.apply(null, args);
    });
  }
});
