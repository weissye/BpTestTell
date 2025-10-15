// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: jira_cloud
// Source: artifacts\hls_nondet\real_world_llm_provider\jira_cloud\hls_nondet_gold.json


bthread(`HLS PASSIVE: delete Actor`, function () {
  const ev = waitFor({op: 'delete', entity: 'Actor'});
  block({op: 'addActor'});
  verifyActorNotExists(ev.id);
});

bthread(`HLS PASSIVE: add ActorUsers`, function () {
  const ev = waitFor({op: 'add', entity: 'ActorUsers'});
  block({op: 'deleteActorUsers'});
  verifyActorUsersExists(ev.id);
});

bthread(`HLS PASSIVE: delete AddonProperty_delete`, function () {
  const ev = waitFor({op: 'delete', entity: 'AddonProperty_delete'});
  block({op: 'addAddonProperty_delete'});
  verifyAddonProperty_deleteNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete AndReplaceVersion`, function () {
  const ev = waitFor({op: 'delete', entity: 'AndReplaceVersion'});
  block({op: 'addAndReplaceVersion'});
  verifyAndReplaceVersionNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete AndSwap`, function () {
  const ev = waitFor({op: 'delete', entity: 'AndSwap'});
  block({op: 'addAndSwap'});
  verifyAndSwapNotExists(ev.id);
});

bthread(`HLS PASSIVE: add Associations`, function () {
  const ev = waitFor({op: 'add', entity: 'Associations'});
  block({op: 'deleteAssociations'});
  verifyAssociationsExists(ev.id);
});

bthread(`HLS PASSIVE: delete Associations`, function () {
  const ev = waitFor({op: 'delete', entity: 'Associations'});
  block({op: 'addAssociations'});
  verifyAssociationsNotExists(ev.id);
});

bthread(`HLS PASSIVE: add AtlassianTeam`, function () {
  const ev = waitFor({op: 'add', entity: 'AtlassianTeam'});
  block({op: 'deleteAtlassianTeam'});
  verifyAtlassianTeamExists(ev.id);
});

bthread(`HLS PASSIVE: delete AtlassianTeam`, function () {
  const ev = waitFor({op: 'delete', entity: 'AtlassianTeam'});
  block({op: 'addAtlassianTeam'});
  verifyAtlassianTeamNotExists(ev.id);
});

bthread(`HLS PASSIVE: update AtlassianTeam`, function () {
  const ev = waitFor({op: 'update', entity: 'AtlassianTeam'});
  block({op: 'updateAtlassianTeam'});
  verifyAtlassianTeamExists(ev.id);
  verifyAtlassianTeamUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Attachment`, function () {
  const ev = waitFor({op: 'add', entity: 'Attachment'});
  block({op: 'deleteAttachment'});
  verifyAttachmentExists(ev.id);
});

bthread(`HLS PASSIVE: delete Attachment`, function () {
  const ev = waitFor({op: 'delete', entity: 'Attachment'});
  block({op: 'addAttachment'});
  verifyAttachmentNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Avatar`, function () {
  const ev = waitFor({op: 'delete', entity: 'Avatar'});
  block({op: 'addAvatar'});
  verifyAvatarNotExists(ev.id);
});

bthread(`HLS PASSIVE: add Comment`, function () {
  const ev = waitFor({op: 'add', entity: 'Comment'});
  block({op: 'deleteComment'});
  verifyCommentExists(ev.id);
});

bthread(`HLS PASSIVE: delete Comment`, function () {
  const ev = waitFor({op: 'delete', entity: 'Comment'});
  block({op: 'addComment'});
  verifyCommentNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Comment`, function () {
  const ev = waitFor({op: 'update', entity: 'Comment'});
  block({op: 'updateComment'});
  verifyCommentExists(ev.id);
  verifyCommentUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete CommentProperty`, function () {
  const ev = waitFor({op: 'delete', entity: 'CommentProperty'});
  block({op: 'addCommentProperty'});
  verifyCommentPropertyNotExists(ev.id);
});

bthread(`HLS PASSIVE: add Component`, function () {
  const ev = waitFor({op: 'add', entity: 'Component'});
  block({op: 'deleteComponent'});
  verifyComponentExists(ev.id);
});

bthread(`HLS PASSIVE: delete Component`, function () {
  const ev = waitFor({op: 'delete', entity: 'Component'});
  block({op: 'addComponent'});
  verifyComponentNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Component`, function () {
  const ev = waitFor({op: 'update', entity: 'Component'});
  block({op: 'updateComponent'});
  verifyComponentExists(ev.id);
  verifyComponentUpdated(ev.id);
});

bthread(`HLS PASSIVE: add CustomField`, function () {
  const ev = waitFor({op: 'add', entity: 'CustomField'});
  block({op: 'deleteCustomField'});
  verifyCustomFieldExists(ev.id);
});

bthread(`HLS PASSIVE: delete CustomField`, function () {
  const ev = waitFor({op: 'delete', entity: 'CustomField'});
  block({op: 'addCustomField'});
  verifyCustomFieldNotExists(ev.id);
});

bthread(`HLS PASSIVE: update CustomField`, function () {
  const ev = waitFor({op: 'update', entity: 'CustomField'});
  block({op: 'updateCustomField'});
  verifyCustomFieldExists(ev.id);
  verifyCustomFieldUpdated(ev.id);
});

bthread(`HLS PASSIVE: update CustomFieldConfiguration`, function () {
  const ev = waitFor({op: 'update', entity: 'CustomFieldConfiguration'});
  block({op: 'updateCustomFieldConfiguration'});
  verifyCustomFieldConfigurationExists(ev.id);
  verifyCustomFieldConfigurationUpdated(ev.id);
});

bthread(`HLS PASSIVE: add CustomFieldContext`, function () {
  const ev = waitFor({op: 'add', entity: 'CustomFieldContext'});
  block({op: 'deleteCustomFieldContext'});
  verifyCustomFieldContextExists(ev.id);
});

bthread(`HLS PASSIVE: delete CustomFieldContext`, function () {
  const ev = waitFor({op: 'delete', entity: 'CustomFieldContext'});
  block({op: 'addCustomFieldContext'});
  verifyCustomFieldContextNotExists(ev.id);
});

bthread(`HLS PASSIVE: update CustomFieldContext`, function () {
  const ev = waitFor({op: 'update', entity: 'CustomFieldContext'});
  block({op: 'updateCustomFieldContext'});
  verifyCustomFieldContextExists(ev.id);
  verifyCustomFieldContextUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete CustomFieldContextFromProjects`, function () {
  const ev = waitFor({op: 'delete', entity: 'CustomFieldContextFromProjects'});
  block({op: 'addCustomFieldContextFromProjects'});
  verifyCustomFieldContextFromProjectsNotExists(ev.id);
});

bthread(`HLS PASSIVE: add CustomFieldOption`, function () {
  const ev = waitFor({op: 'add', entity: 'CustomFieldOption'});
  block({op: 'deleteCustomFieldOption'});
  verifyCustomFieldOptionExists(ev.id);
});

bthread(`HLS PASSIVE: delete CustomFieldOption`, function () {
  const ev = waitFor({op: 'delete', entity: 'CustomFieldOption'});
  block({op: 'addCustomFieldOption'});
  verifyCustomFieldOptionNotExists(ev.id);
});

bthread(`HLS PASSIVE: update CustomFieldOption`, function () {
  const ev = waitFor({op: 'update', entity: 'CustomFieldOption'});
  block({op: 'updateCustomFieldOption'});
  verifyCustomFieldOptionExists(ev.id);
  verifyCustomFieldOptionUpdated(ev.id);
});

bthread(`HLS PASSIVE: update CustomFieldValue`, function () {
  const ev = waitFor({op: 'update', entity: 'CustomFieldValue'});
  block({op: 'updateCustomFieldValue'});
  verifyCustomFieldValueExists(ev.id);
  verifyCustomFieldValueUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Dashboard`, function () {
  const ev = waitFor({op: 'add', entity: 'Dashboard'});
  block({op: 'deleteDashboard'});
  verifyDashboardExists(ev.id);
});

bthread(`HLS PASSIVE: delete Dashboard`, function () {
  const ev = waitFor({op: 'delete', entity: 'Dashboard'});
  block({op: 'addDashboard'});
  verifyDashboardNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Dashboard`, function () {
  const ev = waitFor({op: 'update', entity: 'Dashboard'});
  block({op: 'updateDashboard'});
  verifyDashboardExists(ev.id);
  verifyDashboardUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete DashboardItemProperty`, function () {
  const ev = waitFor({op: 'delete', entity: 'DashboardItemProperty'});
  block({op: 'addDashboardItemProperty'});
  verifyDashboardItemPropertyNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete DefaultProjectClassification`, function () {
  const ev = waitFor({op: 'delete', entity: 'DefaultProjectClassification'});
  block({op: 'addDefaultProjectClassification'});
  verifyDefaultProjectClassificationNotExists(ev.id);
});

bthread(`HLS PASSIVE: update DefaultProjectClassification`, function () {
  const ev = waitFor({op: 'update', entity: 'DefaultProjectClassification'});
  block({op: 'updateDefaultProjectClassification'});
  verifyDefaultProjectClassificationExists(ev.id);
  verifyDefaultProjectClassificationUpdated(ev.id);
});

bthread(`HLS PASSIVE: update DefaultScreenScheme`, function () {
  const ev = waitFor({op: 'update', entity: 'DefaultScreenScheme'});
  block({op: 'updateDefaultScreenScheme'});
  verifyDefaultScreenSchemeExists(ev.id);
  verifyDefaultScreenSchemeUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete CustomWorkflow`, function () {
  const ev = waitFor({op: 'delete', entity: 'CustomWorkflow'});
  block({op: 'addCustomWorkflow'});
  verifyCustomWorkflowNotExists(ev.id);
});

bthread(`HLS PASSIVE: update DefaultWorkflow`, function () {
  const ev = waitFor({op: 'update', entity: 'DefaultWorkflow'});
  block({op: 'updateDefaultWorkflow'});
  verifyDefaultWorkflowExists(ev.id);
  verifyDefaultWorkflowUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete DraftDefaultWorkflow`, function () {
  const ev = waitFor({op: 'delete', entity: 'DraftDefaultWorkflow'});
  block({op: 'addDraftDefaultWorkflow'});
  verifyDraftDefaultWorkflowNotExists(ev.id);
});

bthread(`HLS PASSIVE: update DraftDefaultWorkflow`, function () {
  const ev = waitFor({op: 'update', entity: 'DraftDefaultWorkflow'});
  block({op: 'updateDraftDefaultWorkflow'});
  verifyDraftDefaultWorkflowExists(ev.id);
  verifyDraftDefaultWorkflowUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete DraftWorkflowMapping`, function () {
  const ev = waitFor({op: 'delete', entity: 'DraftWorkflowMapping'});
  block({op: 'addDraftWorkflowMapping'});
  verifyDraftWorkflowMappingNotExists(ev.id);
});

bthread(`HLS PASSIVE: update DraftWorkflowMapping`, function () {
  const ev = waitFor({op: 'update', entity: 'DraftWorkflowMapping'});
  block({op: 'updateDraftWorkflowMapping'});
  verifyDraftWorkflowMappingExists(ev.id);
  verifyDraftWorkflowMappingUpdated(ev.id);
});

bthread(`HLS PASSIVE: update EntityPropertiesValue_put`, function () {
  const ev = waitFor({op: 'update', entity: 'EntityPropertiesValue_put'});
  block({op: 'updateEntityPropertiesValue_put'});
  verifyEntityPropertiesValue_putExists(ev.id);
  verifyEntityPropertiesValue_putUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete FavouriteForFilter`, function () {
  const ev = waitFor({op: 'delete', entity: 'FavouriteForFilter'});
  block({op: 'addFavouriteForFilter'});
  verifyFavouriteForFilterNotExists(ev.id);
});

bthread(`HLS PASSIVE: add FieldConfiguration`, function () {
  const ev = waitFor({op: 'add', entity: 'FieldConfiguration'});
  block({op: 'deleteFieldConfiguration'});
  verifyFieldConfigurationExists(ev.id);
});

bthread(`HLS PASSIVE: delete FieldConfiguration`, function () {
  const ev = waitFor({op: 'delete', entity: 'FieldConfiguration'});
  block({op: 'addFieldConfiguration'});
  verifyFieldConfigurationNotExists(ev.id);
});

bthread(`HLS PASSIVE: update FieldConfiguration`, function () {
  const ev = waitFor({op: 'update', entity: 'FieldConfiguration'});
  block({op: 'updateFieldConfiguration'});
  verifyFieldConfigurationExists(ev.id);
  verifyFieldConfigurationUpdated(ev.id);
});

bthread(`HLS PASSIVE: update FieldConfigurationItems`, function () {
  const ev = waitFor({op: 'update', entity: 'FieldConfigurationItems'});
  block({op: 'updateFieldConfigurationItems'});
  verifyFieldConfigurationItemsExists(ev.id);
  verifyFieldConfigurationItemsUpdated(ev.id);
});

bthread(`HLS PASSIVE: add FieldConfigurationScheme`, function () {
  const ev = waitFor({op: 'add', entity: 'FieldConfigurationScheme'});
  block({op: 'deleteFieldConfigurationScheme'});
  verifyFieldConfigurationSchemeExists(ev.id);
});

bthread(`HLS PASSIVE: delete FieldConfigurationScheme`, function () {
  const ev = waitFor({op: 'delete', entity: 'FieldConfigurationScheme'});
  block({op: 'addFieldConfigurationScheme'});
  verifyFieldConfigurationSchemeNotExists(ev.id);
});

bthread(`HLS PASSIVE: update FieldConfigurationScheme`, function () {
  const ev = waitFor({op: 'update', entity: 'FieldConfigurationScheme'});
  block({op: 'updateFieldConfigurationScheme'});
  verifyFieldConfigurationSchemeExists(ev.id);
  verifyFieldConfigurationSchemeUpdated(ev.id);
});

bthread(`HLS PASSIVE: add FieldToDefaultScreen`, function () {
  const ev = waitFor({op: 'add', entity: 'FieldToDefaultScreen'});
  block({op: 'deleteFieldToDefaultScreen'});
  verifyFieldToDefaultScreenExists(ev.id);
});

bthread(`HLS PASSIVE: add Filter`, function () {
  const ev = waitFor({op: 'add', entity: 'Filter'});
  block({op: 'deleteFilter'});
  verifyFilterExists(ev.id);
});

bthread(`HLS PASSIVE: delete Filter`, function () {
  const ev = waitFor({op: 'delete', entity: 'Filter'});
  block({op: 'addFilter'});
  verifyFilterNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Filter`, function () {
  const ev = waitFor({op: 'update', entity: 'Filter'});
  block({op: 'updateFilter'});
  verifyFilterExists(ev.id);
  verifyFilterUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete ForgeAppProperty`, function () {
  const ev = waitFor({op: 'delete', entity: 'ForgeAppProperty'});
  block({op: 'addForgeAppProperty'});
  verifyForgeAppPropertyNotExists(ev.id);
});

bthread(`HLS PASSIVE: add Gadget`, function () {
  const ev = waitFor({op: 'add', entity: 'Gadget'});
  block({op: 'deleteGadget'});
  verifyGadgetExists(ev.id);
});

