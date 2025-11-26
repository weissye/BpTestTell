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

// ---- Entity: bookmark ----

function createBookmark(id) {
  var url = "/api/extras/bookmarks/";
  var description = "Create bookmark with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBookmark(id) {
  var url = "/api/extras/bookmarks/" + id + "/";
  var description = "Delete bookmark with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBookmark(id) {
  var url = "/api/extras/bookmarks/" + id + "/";
  var description = "Update bookmark with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateBookmark(id) {
  var url = "/api/extras/bookmarks/" + id + "/";
  var description = "Partially update bookmark with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBookmark(id) {
  var url = "/api/extras/bookmarks/" + id + "/";
  var description = "Get bookmark with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBookmark(id) {
  return createBookmark(id);
}

function verifyBookmarkExists(id) {
  return getBookmark(id);
}

function verifyBookmarkDoesNotExist(id) {
  return getBookmark(id);
}

function tryToDeleteANonExistingBookmark(id) {
  return deleteBookmark(id);
}

// ---- Entity: config context profile ----

function createConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/";
  var description = "Create config context profile {name} with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/" + id + "/";
  var description = "Delete config context profile with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/" + id + "/";
  var description = "Update config context profile with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/" + id + "/";
  var description = "Partially update config context profile with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/" + id + "/";
  var description = "Get config context profile with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingConfigContextProfile(id) {
  return createConfigContextProfile(id);
}

function verifyConfigContextProfileExists(id) {
  return getConfigContextProfile(id);
}

function verifyConfigContextProfileDoesNotExist(id) {
  return getConfigContextProfile(id);
}

function tryToDeleteANonExistingConfigContextProfile(id) {
  return deleteConfigContextProfile(id);
}

// ---- Entity: config context ----

function createConfigContext(id) {
  var url = "/api/extras/config-contexts/";
  var description = "Create config context {name} with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteConfigContext(id) {
  var url = "/api/extras/config-contexts/" + id + "/";
  var description = "Delete config context with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateConfigContext(id) {
  var url = "/api/extras/config-contexts/" + id + "/";
  var description = "Update config context with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateConfigContext(id) {
  var url = "/api/extras/config-contexts/" + id + "/";
  var description = "Partially update config context with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getConfigContext(id) {
  var url = "/api/extras/config-contexts/" + id + "/";
  var description = "Get config context with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingConfigContext(id) {
  return createConfigContext(id);
}

function verifyConfigContextExists(id) {
  return getConfigContext(id);
}

function verifyConfigContextDoesNotExist(id) {
  return getConfigContext(id);
}

function tryToDeleteANonExistingConfigContext(id) {
  return deleteConfigContext(id);
}

// ---- Entity: config template ----

function createConfigTemplate(id) {
  var url = "/api/extras/config-templates/";
  var description = "Create config template {name} with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteConfigTemplate(id) {
  var url = "/api/extras/config-templates/" + id + "/";
  var description = "Delete config template with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateConfigTemplate(id) {
  var url = "/api/extras/config-templates/" + id + "/";
  var description = "Update config template with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateConfigTemplate(id) {
  var url = "/api/extras/config-templates/" + id + "/";
  var description = "Partially update config template with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getConfigTemplate(id) {
  var url = "/api/extras/config-templates/" + id + "/";
  var description = "Get config template with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingConfigTemplate(id) {
  return createConfigTemplate(id);
}

function verifyConfigTemplateExists(id) {
  return getConfigTemplate(id);
}

function verifyConfigTemplateDoesNotExist(id) {
  return getConfigTemplate(id);
}

function tryToDeleteANonExistingConfigTemplate(id) {
  return deleteConfigTemplate(id);
}

// ---- Entity: custom field choice set ----

function createCustomFieldChoiceSet(id) {
  var url = "/api/extras/custom-field-choice-sets/";
  var description = "Create custom field choice set with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCustomFieldChoiceSet(id) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  var description = "Delete custom field choice set with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCustomFieldChoiceSet(id) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  var description = "Update custom field choice set with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateCustomFieldChoiceSet(id) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  var description = "Partially update custom field choice set with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCustomFieldChoiceSet(id) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  var description = "Get custom field choice set with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomFieldChoiceSet(id) {
  return createCustomFieldChoiceSet(id);
}

function verifyCustomFieldChoiceSetExists(id) {
  return getCustomFieldChoiceSet(id);
}

function verifyCustomFieldChoiceSetDoesNotExist(id) {
  return getCustomFieldChoiceSet(id);
}

function tryToDeleteANonExistingCustomFieldChoiceSet(id) {
  return deleteCustomFieldChoiceSet(id);
}

// ---- Entity: custom field ----

function createCustomField(id) {
  var url = "/api/extras/custom-fields/";
  var description = "Create custom field {name} with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCustomField(id) {
  var url = "/api/extras/custom-fields/" + id + "/";
  var description = "Delete custom field with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCustomField(id) {
  var url = "/api/extras/custom-fields/" + id + "/";
  var description = "Update custom field with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateCustomField(id) {
  var url = "/api/extras/custom-fields/" + id + "/";
  var description = "Partially update custom field with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCustomField(id) {
  var url = "/api/extras/custom-fields/" + id + "/";
  var description = "Get custom field with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomField(id) {
  return createCustomField(id);
}

function verifyCustomFieldExists(id) {
  return getCustomField(id);
}

function verifyCustomFieldDoesNotExist(id) {
  return getCustomField(id);
}

function tryToDeleteANonExistingCustomField(id) {
  return deleteCustomField(id);
}

// ---- Entity: custom link ----

function createCustomLink(id) {
  var url = "/api/extras/custom-links/";
  var description = "Create custom link {name} with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCustomLink(id) {
  var url = "/api/extras/custom-links/" + id + "/";
  var description = "Delete custom link with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCustomLink(id) {
  var url = "/api/extras/custom-links/" + id + "/";
  var description = "Update custom link with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateCustomLink(id) {
  var url = "/api/extras/custom-links/" + id + "/";
  var description = "Partially update custom link with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCustomLink(id) {
  var url = "/api/extras/custom-links/" + id + "/";
  var description = "Get custom link with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomLink(id) {
  return createCustomLink(id);
}

function verifyCustomLinkExists(id) {
  return getCustomLink(id);
}

function verifyCustomLinkDoesNotExist(id) {
  return getCustomLink(id);
}

function tryToDeleteANonExistingCustomLink(id) {
  return deleteCustomLink(id);
}

// ---- Entity: dashboard ----

function updateDashboard() {
  var url = "/api/extras/dashboard/";
  var description = "Update dashboard";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateDashboard() {
  var url = "/api/extras/dashboard/";
  var description = "Partially update dashboard";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDashboard() {
  var url = "/api/extras/dashboard/";
  var description = "Delete dashboard";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDashboard() {
  var url = "/api/extras/dashboard/";
  var description = "Get dashboard";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDashboardExists() {
  return getDashboard();
}

function verifyDashboardDoesNotExist() {
  return getDashboard();
}

function tryToDeleteANonExistingDashboard() {
  return deleteDashboard();
}

// ---- Entity: event rule ----

function createEventRule(id) {
  var url = "/api/extras/event-rules/";
  var description = "Create event rule with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteEventRule(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  var description = "Delete event rule with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateEventRule(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  var description = "Update event rule with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateEventRule(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  var description = "Partially update event rule with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getEventRule(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  var description = "Get event rule with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingEventRule(id) {
  return createEventRule(id);
}

function verifyEventRuleExists(id) {
  return getEventRule(id);
}

function verifyEventRuleDoesNotExist(id) {
  return getEventRule(id);
}

function tryToDeleteANonExistingEventRule(id) {
  return deleteEventRule(id);
}

// ---- Entity: export template ----

function createExportTemplate(id) {
  var url = "/api/extras/export-templates/";
  var description = "Create export template {name} with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  var description = "Delete export template with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  var description = "Update export template with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  var description = "Partially update export template with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  var description = "Get export template with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingExportTemplate(id) {
  return createExportTemplate(id);
}

function verifyExportTemplateExists(id) {
  return getExportTemplate(id);
}

function verifyExportTemplateDoesNotExist(id) {
  return getExportTemplate(id);
}

function tryToDeleteANonExistingExportTemplate(id) {
  return deleteExportTemplate(id);
}

// ---- Entity: image attachment ----

function createImageAttachment(id) {
  var url = "/api/extras/image-attachments/";
  var description = "Create image attachment with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteImageAttachment(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  var description = "Delete image attachment with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateImageAttachment(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  var description = "Update image attachment with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateImageAttachment(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  var description = "Partially update image attachment with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getImageAttachment(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  var description = "Get image attachment with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingImageAttachment(id) {
  return createImageAttachment(id);
}

function verifyImageAttachmentExists(id) {
  return getImageAttachment(id);
}

function verifyImageAttachmentDoesNotExist(id) {
  return getImageAttachment(id);
}

function tryToDeleteANonExistingImageAttachment(id) {
  return deleteImageAttachment(id);
}

// ---- Entity: journal entry ----

function createJournalEntry(id) {
  var url = "/api/extras/journal-entries/";
  var description = "Create journal entry with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteJournalEntry(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  var description = "Delete journal entry with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateJournalEntry(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  var description = "Update journal entry with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateJournalEntry(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  var description = "Partially update journal entry with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getJournalEntry(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  var description = "Get journal entry with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingJournalEntry(id) {
  return createJournalEntry(id);
}

function verifyJournalEntryExists(id) {
  return getJournalEntry(id);
}

function verifyJournalEntryDoesNotExist(id) {
  return getJournalEntry(id);
}

function tryToDeleteANonExistingJournalEntry(id) {
  return deleteJournalEntry(id);
}

// ---- Entity: notification group ----

function createNotificationGroup(id) {
  var url = "/api/extras/notification-groups/";
  var description = "Create notification group with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteNotificationGroup(id) {
  var url = "/api/extras/notification-groups/" + id + "/";
  var description = "Delete notification group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateNotificationGroup(id) {
  var url = "/api/extras/notification-groups/" + id + "/";
  var description = "Update notification group with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateNotificationGroup(id) {
  var url = "/api/extras/notification-groups/" + id + "/";
  var description = "Partially update notification group with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getNotificationGroup(id) {
  var url = "/api/extras/notification-groups/" + id + "/";
  var description = "Get notification group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingNotificationGroup(id) {
  return createNotificationGroup(id);
}

function verifyNotificationGroupExists(id) {
  return getNotificationGroup(id);
}

function verifyNotificationGroupDoesNotExist(id) {
  return getNotificationGroup(id);
}

function tryToDeleteANonExistingNotificationGroup(id) {
  return deleteNotificationGroup(id);
}

// ---- Entity: notification ----

function createNotification(id) {
  var url = "/api/extras/notifications/";
  var description = "Create notification with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteNotification(id) {
  var url = "/api/extras/notifications/" + id + "/";
  var description = "Delete notification with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateNotification(id) {
  var url = "/api/extras/notifications/" + id + "/";
  var description = "Update notification with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateNotification(id) {
  var url = "/api/extras/notifications/" + id + "/";
  var description = "Partially update notification with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getNotification(id) {
  var url = "/api/extras/notifications/" + id + "/";
  var description = "Get notification with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingNotification(id) {
  return createNotification(id);
}

function verifyNotificationExists(id) {
  return getNotification(id);
}

function verifyNotificationDoesNotExist(id) {
  return getNotification(id);
}

function tryToDeleteANonExistingNotification(id) {
  return deleteNotification(id);
}

// ---- Entity: tagged object ----

function getTaggedObject(id) {
  var url = "/api/extras/tagged-objects/" + id + "/";
  var description = "Get tagged object with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTaggedObjectExists(id) {
  return getTaggedObject(id);
}

function verifyTaggedObjectDoesNotExist(id) {
  return getTaggedObject(id);
}

// ---- Entity: tag ----

function createTag(id) {
  var url = "/api/extras/tags/";
  var description = "Create tag {name} with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTag(id) {
  var url = "/api/extras/tags/" + id + "/";
  var description = "Delete tag with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTag(id) {
  var url = "/api/extras/tags/" + id + "/";
  var description = "Update tag with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateTag(id) {
  var url = "/api/extras/tags/" + id + "/";
  var description = "Partially update tag with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTag(id) {
  var url = "/api/extras/tags/" + id + "/";
  var description = "Get tag with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTag(id) {
  return createTag(id);
}

function verifyTagExists(id) {
  return getTag(id);
}

function verifyTagDoesNotExist(id) {
  return getTag(id);
}

function tryToDeleteANonExistingTag(id) {
  return deleteTag(id);
}

// ---- Entity: webhook ----

function createWebhook(id) {
  var url = "/api/extras/webhooks/";
  var description = "Create webhook with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhook(id) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Delete webhook with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhook(id) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Update webhook with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateWebhook(id) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Partially update webhook with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhook(id) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Get webhook with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhook(id) {
  return createWebhook(id);
}

function verifyWebhookExists(id) {
  return getWebhook(id);
}

function verifyWebhookDoesNotExist(id) {
  return getWebhook(id);
}

function tryToDeleteANonExistingWebhook(id) {
  return deleteWebhook(id);
}

// ---- Entity: script ----

function createScript(id) {
  var url = "/api/extras/scripts/";
  var description = "Create script with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteScript(id) {
  var url = "/api/extras/scripts/" + id + "/";
  var description = "Delete script with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateScript(id) {
  var url = "/api/extras/scripts/" + id + "/";
  var description = "Update script with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateScript(id) {
  var url = "/api/extras/scripts/" + id + "/";
  var description = "Partially update script with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getScript(id) {
  var url = "/api/extras/scripts/" + id + "/";
  var description = "Get script with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingScript(id) {
  return createScript(id);
}

function verifyScriptExists(id) {
  return getScript(id);
}

function verifyScriptDoesNotExist(id) {
  return getScript(id);
}

function tryToDeleteANonExistingScript(id) {
  return deleteScript(id);
}

// ---- Entity: subscription ----

function createSubscription(id) {
  var url = "/api/extras/subscriptions/";
  var description = "Create subscription with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteSubscription(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  var description = "Delete subscription with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSubscription(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  var description = "Update subscription with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateSubscription(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  var description = "Partially update subscription with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getSubscription(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  var description = "Get subscription with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSubscription(id) {
  return createSubscription(id);
}

function verifySubscriptionExists(id) {
  return getSubscription(id);
}

function verifySubscriptionDoesNotExist(id) {
  return getSubscription(id);
}

function tryToDeleteANonExistingSubscription(id) {
  return deleteSubscription(id);
}

// ---- Entity: table config ----

function createTableConfig(id) {
  var url = "/api/extras/table-configs/";
  var description = "Create table config with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTableConfig(id) {
  var url = "/api/extras/table-configs/" + id + "/";
  var description = "Delete table config with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTableConfig(id) {
  var url = "/api/extras/table-configs/" + id + "/";
  var description = "Update table config with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateTableConfig(id) {
  var url = "/api/extras/table-configs/" + id + "/";
  var description = "Partially update table config with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTableConfig(id) {
  var url = "/api/extras/table-configs/" + id + "/";
  var description = "Get table config with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTableConfig(id) {
  return createTableConfig(id);
}

function verifyTableConfigExists(id) {
  return getTableConfig(id);
}

function verifyTableConfigDoesNotExist(id) {
  return getTableConfig(id);
}

function tryToDeleteANonExistingTableConfig(id) {
  return deleteTableConfig(id);
}

// ---- Entity: saved filter ----

function createSavedFilter(id) {
  var url = "/api/extras/saved-filters/";
  var description = "Create saved filter {name} with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteSavedFilter(id) {
  var url = "/api/extras/saved-filters/" + id + "/";
  var description = "Delete saved filter with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSavedFilter(id) {
  var url = "/api/extras/saved-filters/" + id + "/";
  var description = "Update saved filter with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateSavedFilter(id) {
  var url = "/api/extras/saved-filters/" + id + "/";
  var description = "Partially update saved filter with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getSavedFilter(id) {
  var url = "/api/extras/saved-filters/" + id + "/";
  var description = "Get saved filter with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSavedFilter(id) {
  return createSavedFilter(id);
}

function verifySavedFilterExists(id) {
  return getSavedFilter(id);
}

function verifySavedFilterDoesNotExist(id) {
  return getSavedFilter(id);
}

function tryToDeleteANonExistingSavedFilter(id) {
  return deleteSavedFilter(id);
}

// ---- Entity: object type ----

function getObjectType(id) {
  var url = "/api/core/object-types/" + id + "/";
  var description = "Get object type " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listObjectTypes(id) {
  var url = "/api/core/object-types/";
  var description = "List object types";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyObjectTypeExists(id) {
  return getObjectType(id);
}

function verifyObjectTypeDoesNotExist(id) {
  return getObjectType(id);
}

// ---- Entity: aggregate ----

function createAggregate(id) {
  var url = "/api/ipam/aggregates/";
  var description = "Create aggregate with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAggregate(id) {
  var url = "/api/ipam/aggregates/" + id + "/";
  var description = "Delete aggregate with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAggregate(id) {
  var url = "/api/ipam/aggregates/" + id + "/";
  var description = "Update aggregate with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAggregate(id) {
  var url = "/api/ipam/aggregates/" + id + "/";
  var description = "Get aggregate with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAggregate(id) {
  return createAggregate(id);
}

function verifyAggregateExists(id) {
  return getAggregate(id);
}

function verifyAggregateDoesNotExist(id) {
  return getAggregate(id);
}

function tryToDeleteANonExistingAggregate(id) {
  return deleteAggregate(id);
}

// ---- Entity: asnRange ----

function createASNRange(id) {
  var url = "/api/ipam/asn-ranges/";
  var description = "Create ASN range with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteASNRange(id) {
  var url = "/api/ipam/asn-ranges/" + id + "/";
  var description = "Delete ASN range with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateASNRange(id) {
  var url = "/api/ipam/asn-ranges/" + id + "/";
  var description = "Update ASN range with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getASNRange(id) {
  var url = "/api/ipam/asn-ranges/" + id + "/";
  var description = "Get ASN range with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingASNRange(id) {
  return createASNRange(id);
}

function verifyASNRangeExists(id) {
  return getASNRange(id);
}

function verifyASNRangeDoesNotExist(id) {
  return getASNRange(id);
}

function tryToDeleteANonExistingASNRange(id) {
  return deleteASNRange(id);
}

// ---- Entity: asn ----

function createASN(id) {
  var url = "/api/ipam/asns/";
  var description = "Create ASN with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteASN(id) {
  var url = "/api/ipam/asns/" + id + "/";
  var description = "Delete ASN with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateASN(id) {
  var url = "/api/ipam/asns/" + id + "/";
  var description = "Update ASN with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getASN(id) {
  var url = "/api/ipam/asns/" + id + "/";
  var description = "Get ASN with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingASN(id) {
  return createASN(id);
}

function verifyASNExists(id) {
  return getASN(id);
}

function verifyASNDoesNotExist(id) {
  return getASN(id);
}

function tryToDeleteANonExistingASN(id) {
  return deleteASN(id);
}

// ---- Entity: fhrpGroupAssignment ----

function createFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/";
  var description = "Create FHRP group assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/" + id + "/";
  var description = "Delete FHRP group assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/" + id + "/";
  var description = "Update FHRP group assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/" + id + "/";
  var description = "Get FHRP group assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFHRPGroupAssignment(id) {
  return createFHRPGroupAssignment(id);
}

function verifyFHRPGroupAssignmentExists(id) {
  return getFHRPGroupAssignment(id);
}

function verifyFHRPGroupAssignmentDoesNotExist(id) {
  return getFHRPGroupAssignment(id);
}

function tryToDeleteANonExistingFHRPGroupAssignment(id) {
  return deleteFHRPGroupAssignment(id);
}

// ---- Entity: fhrpGroup ----

function createFHRPGroup(id) {
  var url = "/api/ipam/fhrp-groups/";
  var description = "Create FHRP group with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFHRPGroup(id) {
  var url = "/api/ipam/fhrp-groups/" + id + "/";
  var description = "Delete FHRP group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFHRPGroup(id) {
  var url = "/api/ipam/fhrp-groups/" + id + "/";
  var description = "Update FHRP group with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFHRPGroup(id) {
  var url = "/api/ipam/fhrp-groups/" + id + "/";
  var description = "Get FHRP group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFHRPGroup(id) {
  return createFHRPGroup(id);
}

function verifyFHRPGroupExists(id) {
  return getFHRPGroup(id);
}

function verifyFHRPGroupDoesNotExist(id) {
  return getFHRPGroup(id);
}

function tryToDeleteANonExistingFHRPGroup(id) {
  return deleteFHRPGroup(id);
}

// ---- Entity: ipAddress ----

function createIPAddress(id) {
  var url = "/api/ipam/ip-addresses/";
  var description = "Create IP address with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIPAddress(id) {
  var url = "/api/ipam/ip-addresses/" + id + "/";
  var description = "Delete IP address with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIPAddress(id) {
  var url = "/api/ipam/ip-addresses/" + id + "/";
  var description = "Update IP address with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIPAddress(id) {
  var url = "/api/ipam/ip-addresses/" + id + "/";
  var description = "Get IP address with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIPAddress(id) {
  return createIPAddress(id);
}

function verifyIPAddressExists(id) {
  return getIPAddress(id);
}

function verifyIPAddressDoesNotExist(id) {
  return getIPAddress(id);
}

function tryToDeleteANonExistingIPAddress(id) {
  return deleteIPAddress(id);
}

// ---- Entity: ipRange ----

function createIPRange(id) {
  var url = "/api/ipam/ip-ranges/";
  var description = "Create IP range with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIPRange(id) {
  var url = "/api/ipam/ip-ranges/" + id + "/";
  var description = "Delete IP range with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIPRange(id) {
  var url = "/api/ipam/ip-ranges/" + id + "/";
  var description = "Update IP range with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIPRange(id) {
  var url = "/api/ipam/ip-ranges/" + id + "/";
  var description = "Get IP range with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIPRange(id) {
  return createIPRange(id);
}

function verifyIPRangeExists(id) {
  return getIPRange(id);
}

function verifyIPRangeDoesNotExist(id) {
  return getIPRange(id);
}

function tryToDeleteANonExistingIPRange(id) {
  return deleteIPRange(id);
}

// ---- Entity: prefix ----

function createPrefix(id) {
  var url = "/api/ipam/prefixes/";
  var description = "Create prefix with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePrefix(id) {
  var url = "/api/ipam/prefixes/" + id + "/";
  var description = "Delete prefix with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePrefix(id) {
  var url = "/api/ipam/prefixes/" + id + "/";
  var description = "Update prefix with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPrefix(id) {
  var url = "/api/ipam/prefixes/" + id + "/";
  var description = "Get prefix with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPrefix(id) {
  return createPrefix(id);
}

function verifyPrefixExists(id) {
  return getPrefix(id);
}

function verifyPrefixDoesNotExist(id) {
  return getPrefix(id);
}

function tryToDeleteANonExistingPrefix(id) {
  return deletePrefix(id);
}

// ---- Entity: rir ----

function createRIR(id) {
  var url = "/api/ipam/rirs/";
  var description = "Create RIR with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRIR(id) {
  var url = "/api/ipam/rirs/" + id + "/";
  var description = "Delete RIR with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRIR(id) {
  var url = "/api/ipam/rirs/" + id + "/";
  var description = "Update RIR with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRIR(id) {
  var url = "/api/ipam/rirs/" + id + "/";
  var description = "Get RIR with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRIR(id) {
  return createRIR(id);
}

function verifyRIRExists(id) {
  return getRIR(id);
}

function verifyRIRDoesNotExist(id) {
  return getRIR(id);
}

function tryToDeleteANonExistingRIR(id) {
  return deleteRIR(id);
}

// ---- Entity: role ----

function createRole(id) {
  var url = "/api/ipam/roles/";
  var description = "Create role with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRole(id) {
  var url = "/api/ipam/roles/" + id + "/";
  var description = "Delete role with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRole(id) {
  var url = "/api/ipam/roles/" + id + "/";
  var description = "Update role with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRole(id) {
  var url = "/api/ipam/roles/" + id + "/";
  var description = "Get role with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRole(id) {
  return createRole(id);
}

function verifyRoleExists(id) {
  return getRole(id);
}

function verifyRoleDoesNotExist(id) {
  return getRole(id);
}

function tryToDeleteANonExistingRole(id) {
  return deleteRole(id);
}

// ---- Entity: routeTarget ----

function createRouteTarget(id) {
  var url = "/api/ipam/route-targets/";
  var description = "Create route target with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRouteTarget(id) {
  var url = "/api/ipam/route-targets/" + id + "/";
  var description = "Delete route target with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRouteTarget(id) {
  var url = "/api/ipam/route-targets/" + id + "/";
  var description = "Update route target with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRouteTarget(id) {
  var url = "/api/ipam/route-targets/" + id + "/";
  var description = "Get route target with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRouteTarget(id) {
  return createRouteTarget(id);
}

function verifyRouteTargetExists(id) {
  return getRouteTarget(id);
}

function verifyRouteTargetDoesNotExist(id) {
  return getRouteTarget(id);
}

function tryToDeleteANonExistingRouteTarget(id) {
  return deleteRouteTarget(id);
}

// ---- Entity: serviceTemplate ----

function createServiceTemplate(id) {
  var url = "/api/ipam/service-templates/";
  var description = "Create service template with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteServiceTemplate(id) {
  var url = "/api/ipam/service-templates/" + id + "/";
  var description = "Delete service template with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateServiceTemplate(id) {
  var url = "/api/ipam/service-templates/" + id + "/";
  var description = "Update service template with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getServiceTemplate(id) {
  var url = "/api/ipam/service-templates/" + id + "/";
  var description = "Get service template with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingServiceTemplate(id) {
  return createServiceTemplate(id);
}

function verifyServiceTemplateExists(id) {
  return getServiceTemplate(id);
}

function verifyServiceTemplateDoesNotExist(id) {
  return getServiceTemplate(id);
}

function tryToDeleteANonExistingServiceTemplate(id) {
  return deleteServiceTemplate(id);
}

// ---- Entity: service ----

function createService(id) {
  var url = "/api/ipam/services/";
  var description = "Create service with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteService(id) {
  var url = "/api/ipam/services/" + id + "/";
  var description = "Delete service with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateService(id) {
  var url = "/api/ipam/services/" + id + "/";
  var description = "Update service with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getService(id) {
  var url = "/api/ipam/services/" + id + "/";
  var description = "Get service with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingService(id) {
  return createService(id);
}

function verifyServiceExists(id) {
  return getService(id);
}

function verifyServiceDoesNotExist(id) {
  return getService(id);
}

function tryToDeleteANonExistingService(id) {
  return deleteService(id);
}

// ---- Entity: vlanGroup ----

function createVLANGroup(id) {
  var url = "/api/ipam/vlan-groups/";
  var description = "Create VLAN group with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVLANGroup(id) {
  var url = "/api/ipam/vlan-groups/" + id + "/";
  var description = "Delete VLAN group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVLANGroup(id) {
  var url = "/api/ipam/vlan-groups/" + id + "/";
  var description = "Update VLAN group with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVLANGroup(id) {
  var url = "/api/ipam/vlan-groups/" + id + "/";
  var description = "Get VLAN group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVLANGroup(id) {
  return createVLANGroup(id);
}

function verifyVLANGroupExists(id) {
  return getVLANGroup(id);
}

function verifyVLANGroupDoesNotExist(id) {
  return getVLANGroup(id);
}

function tryToDeleteANonExistingVLANGroup(id) {
  return deleteVLANGroup(id);
}

// ---- Entity: vlanTranslationPolicy ----

function createVLANTranslationPolicy(id) {
  var url = "/api/ipam/vlan-translation-policies/";
  var description = "Create VLAN translation policy with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVLANTranslationPolicy(id) {
  var url = "/api/ipam/vlan-translation-policies/" + id + "/";
  var description = "Delete VLAN translation policy with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVLANTranslationPolicy(id) {
  var url = "/api/ipam/vlan-translation-policies/" + id + "/";
  var description = "Update VLAN translation policy with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVLANTranslationPolicy(id) {
  var url = "/api/ipam/vlan-translation-policies/" + id + "/";
  var description = "Get VLAN translation policy with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVLANTranslationPolicy(id) {
  return createVLANTranslationPolicy(id);
}

function verifyVLANTranslationPolicyExists(id) {
  return getVLANTranslationPolicy(id);
}

function verifyVLANTranslationPolicyDoesNotExist(id) {
  return getVLANTranslationPolicy(id);
}

function tryToDeleteANonExistingVLANTranslationPolicy(id) {
  return deleteVLANTranslationPolicy(id);
}

// ---- Entity: vlanTranslationRule ----

function createVLANTranslationRule(id) {
  var url = "/api/ipam/vlan-translation-rules/";
  var description = "Create VLAN translation rule with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVLANTranslationRule(id) {
  var url = "/api/ipam/vlan-translation-rules/" + id + "/";
  var description = "Delete VLAN translation rule with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVLANTranslationRule(id) {
  var url = "/api/ipam/vlan-translation-rules/" + id + "/";
  var description = "Update VLAN translation rule with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVLANTranslationRule(id) {
  var url = "/api/ipam/vlan-translation-rules/" + id + "/";
  var description = "Get VLAN translation rule with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVLANTranslationRule(id) {
  return createVLANTranslationRule(id);
}

function verifyVLANTranslationRuleExists(id) {
  return getVLANTranslationRule(id);
}

function verifyVLANTranslationRuleDoesNotExist(id) {
  return getVLANTranslationRule(id);
}

function tryToDeleteANonExistingVLANTranslationRule(id) {
  return deleteVLANTranslationRule(id);
}

// ---- Entity: vlan ----

function createVLAN(id) {
  var url = "/api/ipam/vlans/";
  var description = "Create VLAN with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVLAN(id) {
  var url = "/api/ipam/vlans/" + id + "/";
  var description = "Delete VLAN with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVLAN(id) {
  var url = "/api/ipam/vlans/" + id + "/";
  var description = "Update VLAN with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVLAN(id) {
  var url = "/api/ipam/vlans/" + id + "/";
  var description = "Get VLAN with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVLAN(id) {
  return createVLAN(id);
}

function verifyVLANExists(id) {
  return getVLAN(id);
}

function verifyVLANDoesNotExist(id) {
  return getVLAN(id);
}

function tryToDeleteANonExistingVLAN(id) {
  return deleteVLAN(id);
}

// ---- Entity: vrf ----

function createVRF(id) {
  var url = "/api/ipam/vrfs/";
  var description = "Create VRF with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVRF(id) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "Delete VRF with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVRF(id) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "Update VRF with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVRF(id) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "Get VRF with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVRF(id) {
  return createVRF(id);
}

function verifyVRFExists(id) {
  return getVRF(id);
}

function verifyVRFDoesNotExist(id) {
  return getVRF(id);
}

function tryToDeleteANonExistingVRF(id) {
  return deleteVRF(id);
}

// ---- Entity: circuit group assignment ----

function createCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/";
  var description = "Create circuit group assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/" + id + "/";
  var description = "Delete circuit group assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/" + id + "/";
  var description = "Update circuit group assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/" + id + "/";
  var description = "Get circuit group assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCircuitGroupAssignment(id) {
  return createCircuitGroupAssignment(id);
}

function verifyCircuitGroupAssignmentExists(id) {
  return getCircuitGroupAssignment(id);
}

function verifyCircuitGroupAssignmentDoesNotExist(id) {
  return getCircuitGroupAssignment(id);
}

function tryToDeleteANonExistingCircuitGroupAssignment(id) {
  return deleteCircuitGroupAssignment(id);
}

// ---- Entity: circuit group ----

function createCircuitGroup(name, slug, id) {
  var url = "/api/circuits/circuit-groups/";
  var description = "Create circuit group " + name + " with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCircuitGroup(name, slug, id) {
  var url = "/api/circuits/circuit-groups/" + id + "/";
  var description = "Delete circuit group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCircuitGroup(name, slug, id) {
  var url = "/api/circuits/circuit-groups/" + id + "/";
  var description = "Update circuit group with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCircuitGroup(name, slug, id) {
  var url = "/api/circuits/circuit-groups/" + id + "/";
  var description = "Get circuit group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCircuitGroup(name, slug, id) {
  return createCircuitGroup(name, slug, id);
}

function verifyCircuitGroupExists(name, slug, id) {
  return getCircuitGroup(name, slug, id);
}

function verifyCircuitGroupDoesNotExist(name, slug, id) {
  return getCircuitGroup(name, slug, id);
}

function tryToDeleteANonExistingCircuitGroup(name, slug, id) {
  return deleteCircuitGroup(name, slug, id);
}

// ---- Entity: circuit termination ----

function createCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/";
  var description = "Create circuit termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/" + id + "/";
  var description = "Delete circuit termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/" + id + "/";
  var description = "Update circuit termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/" + id + "/";
  var description = "Get circuit termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCircuitTermination(id) {
  return createCircuitTermination(id);
}

function verifyCircuitTerminationExists(id) {
  return getCircuitTermination(id);
}

function verifyCircuitTerminationDoesNotExist(id) {
  return getCircuitTermination(id);
}

function tryToDeleteANonExistingCircuitTermination(id) {
  return deleteCircuitTermination(id);
}

// ---- Entity: circuit type ----

function createCircuitType(name, slug, id) {
  var url = "/api/circuits/circuit-types/";
  var description = "Create circuit type " + name + " with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCircuitType(name, slug, id) {
  var url = "/api/circuits/circuit-types/" + id + "/";
  var description = "Delete circuit type with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCircuitType(name, slug, id) {
  var url = "/api/circuits/circuit-types/" + id + "/";
  var description = "Update circuit type with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCircuitType(name, slug, id) {
  var url = "/api/circuits/circuit-types/" + id + "/";
  var description = "Get circuit type with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCircuitType(name, slug, id) {
  return createCircuitType(name, slug, id);
}

function verifyCircuitTypeExists(name, slug, id) {
  return getCircuitType(name, slug, id);
}

function verifyCircuitTypeDoesNotExist(name, slug, id) {
  return getCircuitType(name, slug, id);
}

function tryToDeleteANonExistingCircuitType(name, slug, id) {
  return deleteCircuitType(name, slug, id);
}

// ---- Entity: circuit ----

function createCircuit(cid, id) {
  var url = "/api/circuits/circuits/";
  var description = "Create circuit " + cid + " with id " + id;
  var body = {
    "cid": cid,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCircuit(cid, id) {
  var url = "/api/circuits/circuits/" + id + "/";
  var description = "Delete circuit with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCircuit(cid, id) {
  var url = "/api/circuits/circuits/" + id + "/";
  var description = "Update circuit with id " + id;
  var body = {
    "cid": cid,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCircuit(cid, id) {
  var url = "/api/circuits/circuits/" + id + "/";
  var description = "Get circuit with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCircuit(cid, id) {
  return createCircuit(cid, id);
}

function verifyCircuitExists(cid, id) {
  return getCircuit(cid, id);
}

function verifyCircuitDoesNotExist(cid, id) {
  return getCircuit(cid, id);
}

function tryToDeleteANonExistingCircuit(cid, id) {
  return deleteCircuit(cid, id);
}

// ---- Entity: provider account ----

function createProviderAccount(account, id) {
  var url = "/api/circuits/provider-accounts/";
  var description = "Create provider account " + account + " with id " + id;
  var body = {
    "account": account,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteProviderAccount(account, id) {
  var url = "/api/circuits/provider-accounts/" + id + "/";
  var description = "Delete provider account with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateProviderAccount(account, id) {
  var url = "/api/circuits/provider-accounts/" + id + "/";
  var description = "Update provider account with id " + id;
  var body = {
    "account": account,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getProviderAccount(account, id) {
  var url = "/api/circuits/provider-accounts/" + id + "/";
  var description = "Get provider account with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingProviderAccount(account, id) {
  return createProviderAccount(account, id);
}

function verifyProviderAccountExists(account, id) {
  return getProviderAccount(account, id);
}

function verifyProviderAccountDoesNotExist(account, id) {
  return getProviderAccount(account, id);
}

function tryToDeleteANonExistingProviderAccount(account, id) {
  return deleteProviderAccount(account, id);
}

// ---- Entity: provider network ----

function createProviderNetwork(name, slug, id) {
  var url = "/api/circuits/provider-networks/";
  var description = "Create provider network " + name + " with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteProviderNetwork(name, slug, id) {
  var url = "/api/circuits/provider-networks/" + id + "/";
  var description = "Delete provider network with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateProviderNetwork(name, slug, id) {
  var url = "/api/circuits/provider-networks/" + id + "/";
  var description = "Update provider network with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getProviderNetwork(name, slug, id) {
  var url = "/api/circuits/provider-networks/" + id + "/";
  var description = "Get provider network with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingProviderNetwork(name, slug, id) {
  return createProviderNetwork(name, slug, id);
}

function verifyProviderNetworkExists(name, slug, id) {
  return getProviderNetwork(name, slug, id);
}

function verifyProviderNetworkDoesNotExist(name, slug, id) {
  return getProviderNetwork(name, slug, id);
}

function tryToDeleteANonExistingProviderNetwork(name, slug, id) {
  return deleteProviderNetwork(name, slug, id);
}

// ---- Entity: provider ----

function createProvider(name, slug, id) {
  var url = "/api/circuits/providers/";
  var description = "Create provider " + name + " with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteProvider(name, slug, id) {
  var url = "/api/circuits/providers/" + id + "/";
  var description = "Delete provider with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateProvider(name, slug, id) {
  var url = "/api/circuits/providers/" + id + "/";
  var description = "Update provider with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getProvider(name, slug, id) {
  var url = "/api/circuits/providers/" + id + "/";
  var description = "Get provider with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingProvider(name, slug, id) {
  return createProvider(name, slug, id);
}

function verifyProviderExists(name, slug, id) {
  return getProvider(name, slug, id);
}

function verifyProviderDoesNotExist(name, slug, id) {
  return getProvider(name, slug, id);
}

function tryToDeleteANonExistingProvider(name, slug, id) {
  return deleteProvider(name, slug, id);
}

// ---- Entity: virtual circuit termination ----

function createVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/";
  var description = "Create virtual circuit termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/" + id + "/";
  var description = "Delete virtual circuit termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/" + id + "/";
  var description = "Update virtual circuit termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/" + id + "/";
  var description = "Get virtual circuit termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVirtualCircuitTermination(id) {
  return createVirtualCircuitTermination(id);
}

function verifyVirtualCircuitTerminationExists(id) {
  return getVirtualCircuitTermination(id);
}

function verifyVirtualCircuitTerminationDoesNotExist(id) {
  return getVirtualCircuitTermination(id);
}

function tryToDeleteANonExistingVirtualCircuitTermination(id) {
  return deleteVirtualCircuitTermination(id);
}

// ---- Entity: virtual circuit type ----

function createVirtualCircuitType(name, slug, id) {
  var url = "/api/circuits/virtual-circuit-types/";
  var description = "Create virtual circuit type " + name + " with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVirtualCircuitType(name, slug, id) {
  var url = "/api/circuits/virtual-circuit-types/" + id + "/";
  var description = "Delete virtual circuit type with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVirtualCircuitType(name, slug, id) {
  var url = "/api/circuits/virtual-circuit-types/" + id + "/";
  var description = "Update virtual circuit type with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVirtualCircuitType(name, slug, id) {
  var url = "/api/circuits/virtual-circuit-types/" + id + "/";
  var description = "Get virtual circuit type with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVirtualCircuitType(name, slug, id) {
  return createVirtualCircuitType(name, slug, id);
}

function verifyVirtualCircuitTypeExists(name, slug, id) {
  return getVirtualCircuitType(name, slug, id);
}

function verifyVirtualCircuitTypeDoesNotExist(name, slug, id) {
  return getVirtualCircuitType(name, slug, id);
}

function tryToDeleteANonExistingVirtualCircuitType(name, slug, id) {
  return deleteVirtualCircuitType(name, slug, id);
}

// ---- Entity: virtual circuit ----

function createVirtualCircuit(cid, id) {
  var url = "/api/circuits/virtual-circuits/";
  var description = "Create virtual circuit " + cid + " with id " + id;
  var body = {
    "cid": cid,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVirtualCircuit(cid, id) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "Delete virtual circuit with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVirtualCircuit(cid, id) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "Update virtual circuit with id " + id;
  var body = {
    "cid": cid,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVirtualCircuit(cid, id) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "Get virtual circuit with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVirtualCircuit(cid, id) {
  return createVirtualCircuit(cid, id);
}

function verifyVirtualCircuitExists(cid, id) {
  return getVirtualCircuit(cid, id);
}

function verifyVirtualCircuitDoesNotExist(cid, id) {
  return getVirtualCircuit(cid, id);
}

function tryToDeleteANonExistingVirtualCircuit(cid, id) {
  return deleteVirtualCircuit(cid, id);
}

// ---- Entity: background queue ----

function getBackgroundQueue(name) {
  var url = "/api/core/background-queues/" + name + "/";
  var description = "Get background queue " + name;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listBackgroundQueues(name) {
  var url = "/api/core/background-queues/";
  var description = "List background queues";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyBackgroundQueueExists(name) {
  return getBackgroundQueue(name);
}

function verifyBackgroundQueueDoesNotExist(name) {
  return getBackgroundQueue(name);
}

// ---- Entity: background task ----

function getBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/";
  var description = "Get background task " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listBackgroundTasks(id) {
  var url = "/api/core/background-tasks/";
  var description = "List background tasks";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/delete/";
  var description = "Delete background task " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function enqueueBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/enqueue/";
  var description = "Enqueue background task " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function requeueBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/requeue/";
  var description = "Requeue background task " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function stopBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/stop/";
  var description = "Stop background task " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyBackgroundTaskExists(id) {
  return getBackgroundTask(id);
}

function verifyBackgroundTaskDoesNotExist(id) {
  return getBackgroundTask(id);
}

function tryToDeleteANonExistingBackgroundTask(id) {
  return deleteBackgroundTask(id);
}

// ---- Entity: background worker ----

function getBackgroundWorker(name) {
  var url = "/api/core/background-workers/" + name + "/";
  var description = "Get background worker " + name;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listBackgroundWorkers(name) {
  var url = "/api/core/background-workers/";
  var description = "List background workers";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyBackgroundWorkerExists(name) {
  return getBackgroundWorker(name);
}

function verifyBackgroundWorkerDoesNotExist(name) {
  return getBackgroundWorker(name);
}

// ---- Entity: data file ----

function getDataFile(id) {
  var url = "/api/core/data-files/" + id + "/";
  var description = "Get data file " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listDataFiles(id) {
  var url = "/api/core/data-files/";
  var description = "List data files";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDataFileExists(id) {
  return getDataFile(id);
}

function verifyDataFileDoesNotExist(id) {
  return getDataFile(id);
}

// ---- Entity: data source ----

function createDataSource(id) {
  var url = "/api/core/data-sources/";
  var description = "Create data source";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDataSource(id) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Get data source " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDataSource(id) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Update data source " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateDataSource(id) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Partial update data source " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDataSource(id) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Delete data source " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkUpdateDataSources(id) {
  var url = "/api/core/data-sources/";
  var description = "Bulk update data sources";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkPartialUpdateDataSources(id) {
  var url = "/api/core/data-sources/";
  var description = "Bulk partial update data sources";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkDeleteDataSources(id) {
  var url = "/api/core/data-sources/";
  var description = "Bulk delete data sources";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function syncDataSource(id) {
  var url = "/api/core/data-sources/" + id + "/sync/";
  var description = "Sync data source " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDataSource(id) {
  return createDataSource(id);
}

function verifyDataSourceExists(id) {
  return getDataSource(id);
}

function verifyDataSourceDoesNotExist(id) {
  return getDataSource(id);
}

function tryToDeleteANonExistingDataSource(id) {
  return deleteDataSource(id);
}

// ---- Entity: job ----

function getJob(id) {
  var url = "/api/core/jobs/" + id + "/";
  var description = "Get job " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listJobs(id) {
  var url = "/api/core/jobs/";
  var description = "List jobs";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyJobExists(id) {
  return getJob(id);
}

function verifyJobDoesNotExist(id) {
  return getJob(id);
}

// ---- Entity: object change ----

function getObjectChange(id) {
  var url = "/api/core/object-changes/" + id + "/";
  var description = "Get object change " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listObjectChanges(id) {
  var url = "/api/core/object-changes/";
  var description = "List object changes";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyObjectChangeExists(id) {
  return getObjectChange(id);
}

function verifyObjectChangeDoesNotExist(id) {
  return getObjectChange(id);
}

// ---- Entity: ike policy ----

function createIKEPolicy(id, name) {
  var url = "/api/vpn/ike-policies/";
  var description = "Create IKE policy " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIKEPolicy(id, name) {
  var url = "/api/vpn/ike-policies/" + id + "/";
  var description = "Delete IKE policy with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIKEPolicy(id, name) {
  var url = "/api/vpn/ike-policies/" + id + "/";
  var description = "Update IKE policy " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIKEPolicy(id, name) {
  var url = "/api/vpn/ike-policies/" + id + "/";
  var description = "Get IKE policy with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIKEPolicy(id, name) {
  return createIKEPolicy(id, name);
}

function verifyIKEPolicyExists(id, name) {
  return getIKEPolicy(id, name);
}

function verifyIKEPolicyDoesNotExist(id, name) {
  return getIKEPolicy(id, name);
}

function tryToDeleteANonExistingIKEPolicy(id, name) {
  return deleteIKEPolicy(id, name);
}

// ---- Entity: ike proposal ----

function createIKEProposal(id, name) {
  var url = "/api/vpn/ike-proposals/";
  var description = "Create IKE proposal " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIKEProposal(id, name) {
  var url = "/api/vpn/ike-proposals/" + id + "/";
  var description = "Delete IKE proposal with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIKEProposal(id, name) {
  var url = "/api/vpn/ike-proposals/" + id + "/";
  var description = "Update IKE proposal " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIKEProposal(id, name) {
  var url = "/api/vpn/ike-proposals/" + id + "/";
  var description = "Get IKE proposal with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIKEProposal(id, name) {
  return createIKEProposal(id, name);
}

function verifyIKEProposalExists(id, name) {
  return getIKEProposal(id, name);
}

function verifyIKEProposalDoesNotExist(id, name) {
  return getIKEProposal(id, name);
}

function tryToDeleteANonExistingIKEProposal(id, name) {
  return deleteIKEProposal(id, name);
}

// ---- Entity: ipsec policy ----

function createIPSecPolicy(id, name) {
  var url = "/api/vpn/ipsec-policies/";
  var description = "Create IPSec policy " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIPSecPolicy(id, name) {
  var url = "/api/vpn/ipsec-policies/" + id + "/";
  var description = "Delete IPSec policy with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIPSecPolicy(id, name) {
  var url = "/api/vpn/ipsec-policies/" + id + "/";
  var description = "Update IPSec policy " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIPSecPolicy(id, name) {
  var url = "/api/vpn/ipsec-policies/" + id + "/";
  var description = "Get IPSec policy with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIPSecPolicy(id, name) {
  return createIPSecPolicy(id, name);
}

function verifyIPSecPolicyExists(id, name) {
  return getIPSecPolicy(id, name);
}

function verifyIPSecPolicyDoesNotExist(id, name) {
  return getIPSecPolicy(id, name);
}

function tryToDeleteANonExistingIPSecPolicy(id, name) {
  return deleteIPSecPolicy(id, name);
}

// ---- Entity: ipsec profile ----

function createIPSecProfile(id, name) {
  var url = "/api/vpn/ipsec-profiles/";
  var description = "Create IPSec profile " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIPSecProfile(id, name) {
  var url = "/api/vpn/ipsec-profiles/" + id + "/";
  var description = "Delete IPSec profile with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIPSecProfile(id, name) {
  var url = "/api/vpn/ipsec-profiles/" + id + "/";
  var description = "Update IPSec profile " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIPSecProfile(id, name) {
  var url = "/api/vpn/ipsec-profiles/" + id + "/";
  var description = "Get IPSec profile with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIPSecProfile(id, name) {
  return createIPSecProfile(id, name);
}

function verifyIPSecProfileExists(id, name) {
  return getIPSecProfile(id, name);
}

function verifyIPSecProfileDoesNotExist(id, name) {
  return getIPSecProfile(id, name);
}

function tryToDeleteANonExistingIPSecProfile(id, name) {
  return deleteIPSecProfile(id, name);
}

// ---- Entity: ipsec proposal ----

function createIPSecProposal(id, name) {
  var url = "/api/vpn/ipsec-proposals/";
  var description = "Create IPSec proposal " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIPSecProposal(id, name) {
  var url = "/api/vpn/ipsec-proposals/" + id + "/";
  var description = "Delete IPSec proposal with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIPSecProposal(id, name) {
  var url = "/api/vpn/ipsec-proposals/" + id + "/";
  var description = "Update IPSec proposal " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIPSecProposal(id, name) {
  var url = "/api/vpn/ipsec-proposals/" + id + "/";
  var description = "Get IPSec proposal with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIPSecProposal(id, name) {
  return createIPSecProposal(id, name);
}

function verifyIPSecProposalExists(id, name) {
  return getIPSecProposal(id, name);
}

function verifyIPSecProposalDoesNotExist(id, name) {
  return getIPSecProposal(id, name);
}

function tryToDeleteANonExistingIPSecProposal(id, name) {
  return deleteIPSecProposal(id, name);
}

// ---- Entity: l2vpn termination ----

function createL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/";
  var description = "Create L2VPN termination with id " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/" + id + "/";
  var description = "Delete L2VPN termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/" + id + "/";
  var description = "Update L2VPN termination with id " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/" + id + "/";
  var description = "Get L2VPN termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingL2VPNTermination(id) {
  return createL2VPNTermination(id);
}

function verifyL2VPNTerminationExists(id) {
  return getL2VPNTermination(id);
}

function verifyL2VPNTerminationDoesNotExist(id) {
  return getL2VPNTermination(id);
}

function tryToDeleteANonExistingL2VPNTermination(id) {
  return deleteL2VPNTermination(id);
}

// ---- Entity: l2vpn ----

function createL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/";
  var description = "Create L2VPN " + name + " with id " + id + " and slug " + slug;
  var body = {
    "id": id,
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/" + id + "/";
  var description = "Delete L2VPN with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/" + id + "/";
  var description = "Update L2VPN " + name + " with id " + id + " and slug " + slug;
  var body = {
    "id": id,
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/" + id + "/";
  var description = "Get L2VPN with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingL2VPN(id, name, slug) {
  return createL2VPN(id, name, slug);
}

function verifyL2VPNExists(id, name, slug) {
  return getL2VPN(id, name, slug);
}

function verifyL2VPNDoesNotExist(id, name, slug) {
  return getL2VPN(id, name, slug);
}

function tryToDeleteANonExistingL2VPN(id, name, slug) {
  return deleteL2VPN(id, name, slug);
}

// ---- Entity: tunnel group ----

function createTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/";
  var description = "Create tunnel group " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/" + id + "/";
  var description = "Delete tunnel group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/" + id + "/";
  var description = "Update tunnel group " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/" + id + "/";
  var description = "Get tunnel group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTunnelGroup(id, name) {
  return createTunnelGroup(id, name);
}

function verifyTunnelGroupExists(id, name) {
  return getTunnelGroup(id, name);
}

function verifyTunnelGroupDoesNotExist(id, name) {
  return getTunnelGroup(id, name);
}

function tryToDeleteANonExistingTunnelGroup(id, name) {
  return deleteTunnelGroup(id, name);
}

// ---- Entity: tunnel termination ----

function createTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/";
  var description = "Create tunnel termination with id " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/" + id + "/";
  var description = "Delete tunnel termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/" + id + "/";
  var description = "Update tunnel termination with id " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/" + id + "/";
  var description = "Get tunnel termination with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTunnelTermination(id) {
  return createTunnelTermination(id);
}

function verifyTunnelTerminationExists(id) {
  return getTunnelTermination(id);
}

function verifyTunnelTerminationDoesNotExist(id) {
  return getTunnelTermination(id);
}

function tryToDeleteANonExistingTunnelTermination(id) {
  return deleteTunnelTermination(id);
}

// ---- Entity: tunnel ----

function createTunnel(id, name) {
  var url = "/api/vpn/tunnels/";
  var description = "Create tunnel " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTunnel(id, name) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "Delete tunnel with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTunnel(id, name) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "Update tunnel " + name + " with id " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTunnel(id, name) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "Get tunnel with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTunnel(id, name) {
  return createTunnel(id, name);
}

function verifyTunnelExists(id, name) {
  return getTunnel(id, name);
}

function verifyTunnelDoesNotExist(id, name) {
  return getTunnel(id, name);
}

function tryToDeleteANonExistingTunnel(id, name) {
  return deleteTunnel(id, name);
}

// ---- Entity: cluster group ----

function createClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/";
  var description = "Create cluster group with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/" + id + "/";
  var description = "Delete cluster group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/" + id + "/";
  var description = "Update cluster group with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/" + id + "/";
  var description = "Get cluster group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingClusterGroup(id) {
  return createClusterGroup(id);
}

function verifyClusterGroupExists(id) {
  return getClusterGroup(id);
}

function verifyClusterGroupDoesNotExist(id) {
  return getClusterGroup(id);
}

function tryToDeleteANonExistingClusterGroup(id) {
  return deleteClusterGroup(id);
}

// ---- Entity: cluster type ----

function createClusterType(id) {
  var url = "/api/virtualization/cluster-types/";
  var description = "Create cluster type with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteClusterType(id) {
  var url = "/api/virtualization/cluster-types/" + id + "/";
  var description = "Delete cluster type with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateClusterType(id) {
  var url = "/api/virtualization/cluster-types/" + id + "/";
  var description = "Update cluster type with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getClusterType(id) {
  var url = "/api/virtualization/cluster-types/" + id + "/";
  var description = "Get cluster type with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingClusterType(id) {
  return createClusterType(id);
}

function verifyClusterTypeExists(id) {
  return getClusterType(id);
}

function verifyClusterTypeDoesNotExist(id) {
  return getClusterType(id);
}

function tryToDeleteANonExistingClusterType(id) {
  return deleteClusterType(id);
}

// ---- Entity: cluster ----

function createCluster(id) {
  var url = "/api/virtualization/clusters/";
  var description = "Create cluster with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCluster(id) {
  var url = "/api/virtualization/clusters/" + id + "/";
  var description = "Delete cluster with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCluster(id) {
  var url = "/api/virtualization/clusters/" + id + "/";
  var description = "Update cluster with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCluster(id) {
  var url = "/api/virtualization/clusters/" + id + "/";
  var description = "Get cluster with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCluster(id) {
  return createCluster(id);
}

function verifyClusterExists(id) {
  return getCluster(id);
}

function verifyClusterDoesNotExist(id) {
  return getCluster(id);
}

function tryToDeleteANonExistingCluster(id) {
  return deleteCluster(id);
}

// ---- Entity: interface ----

function createInterface(id) {
  var url = "/api/virtualization/interfaces/";
  var description = "Create interface with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteInterface(id) {
  var url = "/api/virtualization/interfaces/" + id + "/";
  var description = "Delete interface with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateInterface(id) {
  var url = "/api/virtualization/interfaces/" + id + "/";
  var description = "Update interface with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getInterface(id) {
  var url = "/api/virtualization/interfaces/" + id + "/";
  var description = "Get interface with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingInterface(id) {
  return createInterface(id);
}

function verifyInterfaceExists(id) {
  return getInterface(id);
}

function verifyInterfaceDoesNotExist(id) {
  return getInterface(id);
}

function tryToDeleteANonExistingInterface(id) {
  return deleteInterface(id);
}

// ---- Entity: virtual disk ----

function createVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/";
  var description = "Create virtual disk with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/" + id + "/";
  var description = "Delete virtual disk with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/" + id + "/";
  var description = "Update virtual disk with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/" + id + "/";
  var description = "Get virtual disk with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVirtualDisk(id) {
  return createVirtualDisk(id);
}

function verifyVirtualDiskExists(id) {
  return getVirtualDisk(id);
}

function verifyVirtualDiskDoesNotExist(id) {
  return getVirtualDisk(id);
}

function tryToDeleteANonExistingVirtualDisk(id) {
  return deleteVirtualDisk(id);
}

// ---- Entity: virtual machine ----

function createVirtualMachine(id) {
  var url = "/api/virtualization/virtual-machines/";
  var description = "Create virtual machine with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVirtualMachine(id) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "Delete virtual machine with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVirtualMachine(id) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "Update virtual machine with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVirtualMachine(id) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "Get virtual machine with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVirtualMachine(id) {
  return createVirtualMachine(id);
}

function verifyVirtualMachineExists(id) {
  return getVirtualMachine(id);
}

function verifyVirtualMachineDoesNotExist(id) {
  return getVirtualMachine(id);
}

function tryToDeleteANonExistingVirtualMachine(id) {
  return deleteVirtualMachine(id);
}

// ---- Entity: contact assignment ----

function createContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/";
  var description = "Create contact assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  var description = "Delete contact assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  var description = "Update contact assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  var description = "Partially update contact assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkUpdateContactAssignments(id) {
  var url = "/api/tenancy/contact-assignments/";
  var description = "Bulk update contact assignments";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkPartialUpdateContactAssignments(id) {
  var url = "/api/tenancy/contact-assignments/";
  var description = "Bulk partial update contact assignments";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkDeleteContactAssignments(id) {
  var url = "/api/tenancy/contact-assignments/";
  var description = "Bulk delete contact assignments";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  var description = "Get contact assignment with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listContactAssignments(id) {
  var url = "/api/tenancy/contact-assignments/";
  var description = "List contact assignments";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingContactAssignment(id) {
  return createContactAssignment(id);
}

function verifyContactAssignmentExists(id) {
  return getContactAssignment(id);
}

function verifyContactAssignmentDoesNotExist(id) {
  return getContactAssignment(id);
}

function tryToDeleteANonExistingContactAssignment(id) {
  return deleteContactAssignment(id);
}

// ---- Entity: contact group ----

function createContactGroup(name, slug, id) {
  var url = "/api/tenancy/contact-groups/";
  var description = "Create contact group " + name + " with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteContactGroup(name, slug, id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  var description = "Delete contact group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateContactGroup(name, slug, id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  var description = "Update contact group with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateContactGroup(name, slug, id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  var description = "Partially update contact group with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkUpdateContactGroups(name, slug, id) {
  var url = "/api/tenancy/contact-groups/";
  var description = "Bulk update contact groups";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkPartialUpdateContactGroups(name, slug, id) {
  var url = "/api/tenancy/contact-groups/";
  var description = "Bulk partial update contact groups";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkDeleteContactGroups(name, slug, id) {
  var url = "/api/tenancy/contact-groups/";
  var description = "Bulk delete contact groups";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getContactGroup(name, slug, id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  var description = "Get contact group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listContactGroups(name, slug, id) {
  var url = "/api/tenancy/contact-groups/";
  var description = "List contact groups";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingContactGroup(name, slug, id) {
  return createContactGroup(name, slug, id);
}

function verifyContactGroupExists(name, slug, id) {
  return getContactGroup(name, slug, id);
}

function verifyContactGroupDoesNotExist(name, slug, id) {
  return getContactGroup(name, slug, id);
}

function tryToDeleteANonExistingContactGroup(name, slug, id) {
  return deleteContactGroup(name, slug, id);
}

// ---- Entity: contact role ----

function createContactRole(name, slug, id) {
  var url = "/api/tenancy/contact-roles/";
  var description = "Create contact role " + name + " with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteContactRole(name, slug, id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  var description = "Delete contact role with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateContactRole(name, slug, id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  var description = "Update contact role with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateContactRole(name, slug, id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  var description = "Partially update contact role with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkUpdateContactRoles(name, slug, id) {
  var url = "/api/tenancy/contact-roles/";
  var description = "Bulk update contact roles";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkPartialUpdateContactRoles(name, slug, id) {
  var url = "/api/tenancy/contact-roles/";
  var description = "Bulk partial update contact roles";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkDeleteContactRoles(name, slug, id) {
  var url = "/api/tenancy/contact-roles/";
  var description = "Bulk delete contact roles";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getContactRole(name, slug, id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  var description = "Get contact role with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listContactRoles(name, slug, id) {
  var url = "/api/tenancy/contact-roles/";
  var description = "List contact roles";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingContactRole(name, slug, id) {
  return createContactRole(name, slug, id);
}

function verifyContactRoleExists(name, slug, id) {
  return getContactRole(name, slug, id);
}

function verifyContactRoleDoesNotExist(name, slug, id) {
  return getContactRole(name, slug, id);
}

function tryToDeleteANonExistingContactRole(name, slug, id) {
  return deleteContactRole(name, slug, id);
}

// ---- Entity: contact ----

function createContact(name, id) {
  var url = "/api/tenancy/contacts/";
  var description = "Create contact " + name + " with id " + id;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteContact(name, id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  var description = "Delete contact with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateContact(name, id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  var description = "Update contact with id " + id;
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

function partialUpdateContact(name, id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  var description = "Partially update contact with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkUpdateContacts(name, id) {
  var url = "/api/tenancy/contacts/";
  var description = "Bulk update contacts";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkPartialUpdateContacts(name, id) {
  var url = "/api/tenancy/contacts/";
  var description = "Bulk partial update contacts";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkDeleteContacts(name, id) {
  var url = "/api/tenancy/contacts/";
  var description = "Bulk delete contacts";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getContact(name, id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  var description = "Get contact with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listContacts(name, id) {
  var url = "/api/tenancy/contacts/";
  var description = "List contacts";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingContact(name, id) {
  return createContact(name, id);
}

function verifyContactExists(name, id) {
  return getContact(name, id);
}

function verifyContactDoesNotExist(name, id) {
  return getContact(name, id);
}

function tryToDeleteANonExistingContact(name, id) {
  return deleteContact(name, id);
}

// ---- Entity: tenant group ----

function createTenantGroup(name, slug, id) {
  var url = "/api/tenancy/tenant-groups/";
  var description = "Create tenant group " + name + " with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTenantGroup(name, slug, id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  var description = "Delete tenant group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTenantGroup(name, slug, id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  var description = "Update tenant group with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateTenantGroup(name, slug, id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  var description = "Partially update tenant group with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkUpdateTenantGroups(name, slug, id) {
  var url = "/api/tenancy/tenant-groups/";
  var description = "Bulk update tenant groups";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkPartialUpdateTenantGroups(name, slug, id) {
  var url = "/api/tenancy/tenant-groups/";
  var description = "Bulk partial update tenant groups";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkDeleteTenantGroups(name, slug, id) {
  var url = "/api/tenancy/tenant-groups/";
  var description = "Bulk delete tenant groups";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTenantGroup(name, slug, id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  var description = "Get tenant group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listTenantGroups(name, slug, id) {
  var url = "/api/tenancy/tenant-groups/";
  var description = "List tenant groups";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTenantGroup(name, slug, id) {
  return createTenantGroup(name, slug, id);
}

function verifyTenantGroupExists(name, slug, id) {
  return getTenantGroup(name, slug, id);
}

function verifyTenantGroupDoesNotExist(name, slug, id) {
  return getTenantGroup(name, slug, id);
}

function tryToDeleteANonExistingTenantGroup(name, slug, id) {
  return deleteTenantGroup(name, slug, id);
}

// ---- Entity: tenant ----

function createTenant(name, slug, id) {
  var url = "/api/tenancy/tenants/";
  var description = "Create tenant " + name + " with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTenant(name, slug, id) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "Delete tenant with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTenant(name, slug, id) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "Update tenant with id " + id;
  var body = {
    "name": name,
    "slug": slug,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function partialUpdateTenant(name, slug, id) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "Partially update tenant with id " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkUpdateTenants(name, slug, id) {
  var url = "/api/tenancy/tenants/";
  var description = "Bulk update tenants";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkPartialUpdateTenants(name, slug, id) {
  var url = "/api/tenancy/tenants/";
  var description = "Bulk partial update tenants";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkDeleteTenants(name, slug, id) {
  var url = "/api/tenancy/tenants/";
  var description = "Bulk delete tenants";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTenant(name, slug, id) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "Get tenant with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listTenants(name, slug, id) {
  var url = "/api/tenancy/tenants/";
  var description = "List tenants";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTenant(name, slug, id) {
  return createTenant(name, slug, id);
}

function verifyTenantExists(name, slug, id) {
  return getTenant(name, slug, id);
}

function verifyTenantDoesNotExist(name, slug, id) {
  return getTenant(name, slug, id);
}

function tryToDeleteANonExistingTenant(name, slug, id) {
  return deleteTenant(name, slug, id);
}

// ---- Entity: group ----

function createGroup(id) {
  var url = "/api/users/groups/";
  var description = "Create group with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteGroup(id) {
  var url = "/api/users/groups/" + id + "/";
  var description = "Delete group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateGroup(id) {
  var url = "/api/users/groups/" + id + "/";
  var description = "Update group with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getGroup(id) {
  var url = "/api/users/groups/" + id + "/";
  var description = "Get group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingGroup(id) {
  return createGroup(id);
}

function verifyGroupExists(id) {
  return getGroup(id);
}

function verifyGroupDoesNotExist(id) {
  return getGroup(id);
}

function tryToDeleteANonExistingGroup(id) {
  return deleteGroup(id);
}

// ---- Entity: permission ----

function createPermission(id) {
  var url = "/api/users/permissions/";
  var description = "Create permission with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePermission(id) {
  var url = "/api/users/permissions/" + id + "/";
  var description = "Delete permission with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePermission(id) {
  var url = "/api/users/permissions/" + id + "/";
  var description = "Update permission with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPermission(id) {
  var url = "/api/users/permissions/" + id + "/";
  var description = "Get permission with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPermission(id) {
  return createPermission(id);
}

function verifyPermissionExists(id) {
  return getPermission(id);
}

function verifyPermissionDoesNotExist(id) {
  return getPermission(id);
}

function tryToDeleteANonExistingPermission(id) {
  return deletePermission(id);
}

// ---- Entity: token ----

function createToken(id) {
  var url = "/api/users/tokens/";
  var description = "Create token with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteToken(id) {
  var url = "/api/users/tokens/" + id + "/";
  var description = "Delete token with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateToken(id) {
  var url = "/api/users/tokens/" + id + "/";
  var description = "Update token with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getToken(id) {
  var url = "/api/users/tokens/" + id + "/";
  var description = "Get token with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingToken(id) {
  return createToken(id);
}

function verifyTokenExists(id) {
  return getToken(id);
}

function verifyTokenDoesNotExist(id) {
  return getToken(id);
}

function tryToDeleteANonExistingToken(id) {
  return deleteToken(id);
}

// ---- Entity: user ----

function createUser(id) {
  var url = "/api/users/users/";
  var description = "Create user with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUser(id) {
  var url = "/api/users/users/" + id + "/";
  var description = "Delete user with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateUser(id) {
  var url = "/api/users/users/" + id + "/";
  var description = "Update user with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUser(id) {
  var url = "/api/users/users/" + id + "/";
  var description = "Get user with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUser(id) {
  return createUser(id);
}

function verifyUserExists(id) {
  return getUser(id);
}

function verifyUserDoesNotExist(id) {
  return getUser(id);
}

function tryToDeleteANonExistingUser(id) {
  return deleteUser(id);
}

// ---- Entity: wireless LAN group ----

function createWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/";
  var description = "Create wireless LAN group with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/" + id + "/";
  var description = "Delete wireless LAN group with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/" + id + "/";
  var description = "Update wireless LAN group with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/" + id + "/";
  var description = "Get wireless LAN group with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWirelessLANGroup(id) {
  return createWirelessLANGroup(id);
}

function verifyWirelessLANGroupExists(id) {
  return getWirelessLANGroup(id);
}

function verifyWirelessLANGroupDoesNotExist(id) {
  return getWirelessLANGroup(id);
}

function tryToDeleteANonExistingWirelessLANGroup(id) {
  return deleteWirelessLANGroup(id);
}

// ---- Entity: wireless LAN ----

function createWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/";
  var description = "Create wireless LAN with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/" + id + "/";
  var description = "Delete wireless LAN with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/" + id + "/";
  var description = "Update wireless LAN with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/" + id + "/";
  var description = "Get wireless LAN with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWirelessLAN(id) {
  return createWirelessLAN(id);
}

function verifyWirelessLANExists(id) {
  return getWirelessLAN(id);
}

function verifyWirelessLANDoesNotExist(id) {
  return getWirelessLAN(id);
}

function tryToDeleteANonExistingWirelessLAN(id) {
  return deleteWirelessLAN(id);
}

// ---- Entity: wireless link ----

function createWirelessLink(id) {
  var url = "/api/wireless/wireless-links/";
  var description = "Create wireless link with id " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWirelessLink(id) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "Delete wireless link with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWirelessLink(id) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "Update wireless link with id " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWirelessLink(id) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "Get wireless link with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWirelessLink(id) {
  return createWirelessLink(id);
}

function verifyWirelessLinkExists(id) {
  return getWirelessLink(id);
}

function verifyWirelessLinkDoesNotExist(id) {
  return getWirelessLink(id);
}

function tryToDeleteANonExistingWirelessLink(id) {
  return deleteWirelessLink(id);
}
