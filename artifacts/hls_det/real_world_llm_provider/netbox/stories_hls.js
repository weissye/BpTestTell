// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("AggregateLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAggregate(x.id);
  updateAggregate(x.id);
  updateAggregate(x.id);
  verifyAggregateExists(x.id);
  verifyAggregateUpdated(x.id);
});

bthread("ApiLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApi(x.id);
  updateApi(x.id);
  updateApi(x.id);
  verifyApiExists(x.id);
  verifyApiUpdated(x.id);
});

bthread("AsnLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAsn(x.id);
  updateAsn(x.id);
  updateAsn(x.id);
  verifyAsnExists(x.id);
  verifyAsnUpdated(x.id);
});

bthread("AsnrangeLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAsnrange(x.id);
  updateAsnrange(x.id);
  updateAsnrange(x.id);
  verifyAsnrangeExists(x.id);
  verifyAsnrangeUpdated(x.id);
});

bthread("AvailableasnLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvailableasn(x.id);
  updateAvailableasn(x.id);
  updateAvailableasn(x.id);
  verifyAvailableasnExists(x.id);
  verifyAvailableasnUpdated(x.id);
});

bthread("AvailableipLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvailableip(x.id);
  updateAvailableip(x.id);
  updateAvailableip(x.id);
  verifyAvailableipExists(x.id);
  verifyAvailableipUpdated(x.id);
});

bthread("AvailableprefixeLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvailableprefixe(x.id);
  updateAvailableprefixe(x.id);
  updateAvailableprefixe(x.id);
  verifyAvailableprefixeExists(x.id);
  verifyAvailableprefixeUpdated(x.id);
});

bthread("AvailablevlanLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvailablevlan(x.id);
  updateAvailablevlan(x.id);
  updateAvailablevlan(x.id);
  verifyAvailablevlanExists(x.id);
  verifyAvailablevlanUpdated(x.id);
});

bthread("BackgroundqueueLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBackgroundqueue(x.id);
  updateBackgroundqueue(x.id);
  updateBackgroundqueue(x.id);
  verifyBackgroundqueueExists(x.id);
  verifyBackgroundqueueUpdated(x.id);
});

bthread("BackgroundtaskLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBackgroundtask(x.id);
  updateBackgroundtask(x.id);
  updateBackgroundtask(x.id);
  verifyBackgroundtaskExists(x.id);
  verifyBackgroundtaskUpdated(x.id);
});

bthread("BackgroundworkerLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBackgroundworker(x.id);
  updateBackgroundworker(x.id);
  updateBackgroundworker(x.id);
  verifyBackgroundworkerExists(x.id);
  verifyBackgroundworkerUpdated(x.id);
});

bthread("BookmarkLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBookmark(x.id);
  updateBookmark(x.id);
  updateBookmark(x.id);
  verifyBookmarkExists(x.id);
  verifyBookmarkUpdated(x.id);
});

bthread("CableLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCable(x.id);
  updateCable(x.id);
  updateCable(x.id);
  verifyCableExists(x.id);
  verifyCableUpdated(x.id);
});

bthread("CableterminationLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCabletermination(x.id);
  updateCabletermination(x.id);
  updateCabletermination(x.id);
  verifyCableterminationExists(x.id);
  verifyCableterminationUpdated(x.id);
});

bthread("ChoiceLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChoice(x.id);
  updateChoice(x.id);
  updateChoice(x.id);
  verifyChoiceExists(x.id);
  verifyChoiceUpdated(x.id);
});

bthread("CircuitLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCircuit(x.id);
  updateCircuit(x.id);
  updateCircuit(x.id);
  verifyCircuitExists(x.id);
  verifyCircuitUpdated(x.id);
});

bthread("CircuitgroupLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCircuitgroup(x.id);
  updateCircuitgroup(x.id);
  updateCircuitgroup(x.id);
  verifyCircuitgroupExists(x.id);
  verifyCircuitgroupUpdated(x.id);
});

bthread("CircuitgroupassignmentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCircuitgroupassignment(x.id);
  updateCircuitgroupassignment(x.id);
  updateCircuitgroupassignment(x.id);
  verifyCircuitgroupassignmentExists(x.id);
  verifyCircuitgroupassignmentUpdated(x.id);
});

bthread("CircuitterminationLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCircuittermination(x.id);
  updateCircuittermination(x.id);
  updateCircuittermination(x.id);
  verifyCircuitterminationExists(x.id);
  verifyCircuitterminationUpdated(x.id);
});

bthread("CircuittypeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCircuittype(x.id);
  updateCircuittype(x.id);
  updateCircuittype(x.id);
  verifyCircuittypeExists(x.id);
  verifyCircuittypeUpdated(x.id);
});

bthread("ClusterLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCluster(x.id);
  updateCluster(x.id);
  updateCluster(x.id);
  verifyClusterExists(x.id);
  verifyClusterUpdated(x.id);
});

bthread("ClustergroupLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClustergroup(x.id);
  updateClustergroup(x.id);
  updateClustergroup(x.id);
  verifyClustergroupExists(x.id);
  verifyClustergroupUpdated(x.id);
});

bthread("ClustertypeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClustertype(x.id);
  updateClustertype(x.id);
  updateClustertype(x.id);
  verifyClustertypeExists(x.id);
  verifyClustertypeUpdated(x.id);
});

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfig(x.id);
  updateConfig(x.id);
  updateConfig(x.id);
  verifyConfigExists(x.id);
  verifyConfigUpdated(x.id);
});

bthread("ConfigcontextLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfigcontext(x.id);
  updateConfigcontext(x.id);
  updateConfigcontext(x.id);
  verifyConfigcontextExists(x.id);
  verifyConfigcontextUpdated(x.id);
});

bthread("ConfigcontextprofileLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfigcontextprofile(x.id);
  updateConfigcontextprofile(x.id);
  updateConfigcontextprofile(x.id);
  verifyConfigcontextprofileExists(x.id);
  verifyConfigcontextprofileUpdated(x.id);
});

bthread("ConfigtemplateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfigtemplate(x.id);
  updateConfigtemplate(x.id);
  updateConfigtemplate(x.id);
  verifyConfigtemplateExists(x.id);
  verifyConfigtemplateUpdated(x.id);
});

bthread("ConnecteddeviceLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConnecteddevice(x.id);
  updateConnecteddevice(x.id);
  updateConnecteddevice(x.id);
  verifyConnecteddeviceExists(x.id);
  verifyConnecteddeviceUpdated(x.id);
});

bthread("ConsoleportLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConsoleport(x.id);
  updateConsoleport(x.id);
  updateConsoleport(x.id);
  verifyConsoleportExists(x.id);
  verifyConsoleportUpdated(x.id);
});

bthread("ConsoleporttemplateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConsoleporttemplate(x.id);
  updateConsoleporttemplate(x.id);
  updateConsoleporttemplate(x.id);
  verifyConsoleporttemplateExists(x.id);
  verifyConsoleporttemplateUpdated(x.id);
});

bthread("ConsoleserverportLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConsoleserverport(x.id);
  updateConsoleserverport(x.id);
  updateConsoleserverport(x.id);
  verifyConsoleserverportExists(x.id);
  verifyConsoleserverportUpdated(x.id);
});

bthread("ConsoleserverporttemplateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConsoleserverporttemplate(x.id);
  updateConsoleserverporttemplate(x.id);
  updateConsoleserverporttemplate(x.id);
  verifyConsoleserverporttemplateExists(x.id);
  verifyConsoleserverporttemplateUpdated(x.id);
});

bthread("ContactLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContact(x.id);
  updateContact(x.id);
  updateContact(x.id);
  verifyContactExists(x.id);
  verifyContactUpdated(x.id);
});

bthread("ContactassignmentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContactassignment(x.id);
  updateContactassignment(x.id);
  updateContactassignment(x.id);
  verifyContactassignmentExists(x.id);
  verifyContactassignmentUpdated(x.id);
});

bthread("ContactgroupLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContactgroup(x.id);
  updateContactgroup(x.id);
  updateContactgroup(x.id);
  verifyContactgroupExists(x.id);
  verifyContactgroupUpdated(x.id);
});

bthread("ContactroleLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContactrole(x.id);
  updateContactrole(x.id);
  updateContactrole(x.id);
  verifyContactroleExists(x.id);
  verifyContactroleUpdated(x.id);
});

bthread("CoreLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCore(x.id);
  updateCore(x.id);
  updateCore(x.id);
  verifyCoreExists(x.id);
  verifyCoreUpdated(x.id);
});

bthread("CustomfieldLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomfield(x.id);
  updateCustomfield(x.id);
  updateCustomfield(x.id);
  verifyCustomfieldExists(x.id);
  verifyCustomfieldUpdated(x.id);
});

bthread("CustomfieldchoicesetLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomfieldchoiceset(x.id);
  updateCustomfieldchoiceset(x.id);
  updateCustomfieldchoiceset(x.id);
  verifyCustomfieldchoicesetExists(x.id);
  verifyCustomfieldchoicesetUpdated(x.id);
});

bthread("CustomlinkLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomlink(x.id);
  updateCustomlink(x.id);
  updateCustomlink(x.id);
  verifyCustomlinkExists(x.id);
  verifyCustomlinkUpdated(x.id);
});

bthread("DashboardLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDashboard(x.id);
  updateDashboard(x.id);
  updateDashboard(x.id);
  verifyDashboardExists(x.id);
  verifyDashboardUpdated(x.id);
});

bthread("DatafileLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDatafile(x.id);
  updateDatafile(x.id);
  updateDatafile(x.id);
  verifyDatafileExists(x.id);
  verifyDatafileUpdated(x.id);
});

bthread("DatasourceLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDatasource(x.id);
  updateDatasource(x.id);
  updateDatasource(x.id);
  verifyDatasourceExists(x.id);
  verifyDatasourceUpdated(x.id);
});

bthread("DcimLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDcim(x.id);
  updateDcim(x.id);
  updateDcim(x.id);
  verifyDcimExists(x.id);
  verifyDcimUpdated(x.id);
});

bthread("DeleteLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDelete(x.id);
  updateDelete(x.id);
  updateDelete(x.id);
  verifyDeleteExists(x.id);
  verifyDeleteUpdated(x.id);
});

bthread("DeviceLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDevice(x.id);
  updateDevice(x.id);
  updateDevice(x.id);
  verifyDeviceExists(x.id);
  verifyDeviceUpdated(x.id);
});

bthread("DevicebayLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDevicebay(x.id);
  updateDevicebay(x.id);
  updateDevicebay(x.id);
  verifyDevicebayExists(x.id);
  verifyDevicebayUpdated(x.id);
});

bthread("DevicebaytemplateLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDevicebaytemplate(x.id);
  updateDevicebaytemplate(x.id);
  updateDevicebaytemplate(x.id);
  verifyDevicebaytemplateExists(x.id);
  verifyDevicebaytemplateUpdated(x.id);
});

bthread("DeviceroleLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDevicerole(x.id);
  updateDevicerole(x.id);
  updateDevicerole(x.id);
  verifyDeviceroleExists(x.id);
  verifyDeviceroleUpdated(x.id);
});

bthread("DevicetypeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDevicetype(x.id);
  updateDevicetype(x.id);
  updateDevicetype(x.id);
  verifyDevicetypeExists(x.id);
  verifyDevicetypeUpdated(x.id);
});

bthread("ElevationLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addElevation(x.id);
  updateElevation(x.id);
  updateElevation(x.id);
  verifyElevationExists(x.id);
  verifyElevationUpdated(x.id);
});

bthread("EnqueueLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnqueue(x.id);
  updateEnqueue(x.id);
  updateEnqueue(x.id);
  verifyEnqueueExists(x.id);
  verifyEnqueueUpdated(x.id);
});

bthread("EventruleLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEventrule(x.id);
  updateEventrule(x.id);
  updateEventrule(x.id);
  verifyEventruleExists(x.id);
  verifyEventruleUpdated(x.id);
});

bthread("ExporttemplateLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExporttemplate(x.id);
  updateExporttemplate(x.id);
  updateExporttemplate(x.id);
  verifyExporttemplateExists(x.id);
  verifyExporttemplateUpdated(x.id);
});

bthread("ExtraLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExtra(x.id);
  updateExtra(x.id);
  updateExtra(x.id);
  verifyExtraExists(x.id);
  verifyExtraUpdated(x.id);
});

bthread("FhrpgroupLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFhrpgroup(x.id);
  updateFhrpgroup(x.id);
  updateFhrpgroup(x.id);
  verifyFhrpgroupExists(x.id);
  verifyFhrpgroupUpdated(x.id);
});

bthread("FhrpgroupassignmentLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFhrpgroupassignment(x.id);
  updateFhrpgroupassignment(x.id);
  updateFhrpgroupassignment(x.id);
  verifyFhrpgroupassignmentExists(x.id);
  verifyFhrpgroupassignmentUpdated(x.id);
});

bthread("FrontportLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFrontport(x.id);
  updateFrontport(x.id);
  updateFrontport(x.id);
  verifyFrontportExists(x.id);
  verifyFrontportUpdated(x.id);
});

bthread("FrontporttemplateLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFrontporttemplate(x.id);
  updateFrontporttemplate(x.id);
  updateFrontporttemplate(x.id);
  verifyFrontporttemplateExists(x.id);
  verifyFrontporttemplateUpdated(x.id);
});

bthread("GroupLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGroup(x.id);
  updateGroup(x.id);
  updateGroup(x.id);
  verifyGroupExists(x.id);
  verifyGroupUpdated(x.id);
});

bthread("IkepolicyLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIkepolicy(x.id);
  updateIkepolicy(x.id);
  updateIkepolicy(x.id);
  verifyIkepolicyExists(x.id);
  verifyIkepolicyUpdated(x.id);
});

bthread("IkeproposalLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIkeproposal(x.id);
  updateIkeproposal(x.id);
  updateIkeproposal(x.id);
  verifyIkeproposalExists(x.id);
  verifyIkeproposalUpdated(x.id);
});

bthread("ImageattachmentLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImageattachment(x.id);
  updateImageattachment(x.id);
  updateImageattachment(x.id);
  verifyImageattachmentExists(x.id);
  verifyImageattachmentUpdated(x.id);
});

bthread("InterfaceLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInterface(x.id);
  updateInterface(x.id);
  updateInterface(x.id);
  verifyInterfaceExists(x.id);
  verifyInterfaceUpdated(x.id);
});

bthread("InterfacetemplateLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInterfacetemplate(x.id);
  updateInterfacetemplate(x.id);
  updateInterfacetemplate(x.id);
  verifyInterfacetemplateExists(x.id);
  verifyInterfacetemplateUpdated(x.id);
});

bthread("InventoryitemLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInventoryitem(x.id);
  updateInventoryitem(x.id);
  updateInventoryitem(x.id);
  verifyInventoryitemExists(x.id);
  verifyInventoryitemUpdated(x.id);
});

bthread("InventoryitemroleLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInventoryitemrole(x.id);
  updateInventoryitemrole(x.id);
  updateInventoryitemrole(x.id);
  verifyInventoryitemroleExists(x.id);
  verifyInventoryitemroleUpdated(x.id);
});

bthread("InventoryitemtemplateLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInventoryitemtemplate(x.id);
  updateInventoryitemtemplate(x.id);
  updateInventoryitemtemplate(x.id);
  verifyInventoryitemtemplateExists(x.id);
  verifyInventoryitemtemplateUpdated(x.id);
});

bthread("IpaddressLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpaddress(x.id);
  updateIpaddress(x.id);
  updateIpaddress(x.id);
  verifyIpaddressExists(x.id);
  verifyIpaddressUpdated(x.id);
});

bthread("IpamLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpam(x.id);
  updateIpam(x.id);
  updateIpam(x.id);
  verifyIpamExists(x.id);
  verifyIpamUpdated(x.id);
});

bthread("IprangeLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIprange(x.id);
  updateIprange(x.id);
  updateIprange(x.id);
  verifyIprangeExists(x.id);
  verifyIprangeUpdated(x.id);
});

bthread("IpsecpolicyLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpsecpolicy(x.id);
  updateIpsecpolicy(x.id);
  updateIpsecpolicy(x.id);
  verifyIpsecpolicyExists(x.id);
  verifyIpsecpolicyUpdated(x.id);
});

bthread("IpsecprofileLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpsecprofile(x.id);
  updateIpsecprofile(x.id);
  updateIpsecprofile(x.id);
  verifyIpsecprofileExists(x.id);
  verifyIpsecprofileUpdated(x.id);
});

bthread("IpsecproposalLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIpsecproposal(x.id);
  updateIpsecproposal(x.id);
  updateIpsecproposal(x.id);
  verifyIpsecproposalExists(x.id);
  verifyIpsecproposalUpdated(x.id);
});

bthread("JobLifecycle", function () {
  const x = pick([{id: "J001"}, {id: "J002"}]);
  addJob(x.id);
  updateJob(x.id);
  updateJob(x.id);
  verifyJobExists(x.id);
  verifyJobUpdated(x.id);
});

bthread("JournalentryLifecycle", function () {
  const x = pick([{id: "J001"}, {id: "J002"}]);
  addJournalentry(x.id);
  updateJournalentry(x.id);
  updateJournalentry(x.id);
  verifyJournalentryExists(x.id);
  verifyJournalentryUpdated(x.id);
});

bthread("L2vpnLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addL2vpn(x.id);
  updateL2vpn(x.id);
  updateL2vpn(x.id);
  verifyL2vpnExists(x.id);
  verifyL2vpnUpdated(x.id);
});

bthread("L2vpnterminationLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addL2vpntermination(x.id);
  updateL2vpntermination(x.id);
  updateL2vpntermination(x.id);
  verifyL2vpnterminationExists(x.id);
  verifyL2vpnterminationUpdated(x.id);
});

bthread("LocationLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLocation(x.id);
  updateLocation(x.id);
  updateLocation(x.id);
  verifyLocationExists(x.id);
  verifyLocationUpdated(x.id);
});

bthread("MacaddressLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMacaddress(x.id);
  updateMacaddress(x.id);
  updateMacaddress(x.id);
  verifyMacaddressExists(x.id);
  verifyMacaddressUpdated(x.id);
});

bthread("ManufacturerLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addManufacturer(x.id);
  updateManufacturer(x.id);
  updateManufacturer(x.id);
  verifyManufacturerExists(x.id);
  verifyManufacturerUpdated(x.id);
});

bthread("ModuleLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addModule(x.id);
  updateModule(x.id);
  updateModule(x.id);
  verifyModuleExists(x.id);
  verifyModuleUpdated(x.id);
});

bthread("ModulebayLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addModulebay(x.id);
  updateModulebay(x.id);
  updateModulebay(x.id);
  verifyModulebayExists(x.id);
  verifyModulebayUpdated(x.id);
});

bthread("ModulebaytemplateLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addModulebaytemplate(x.id);
  updateModulebaytemplate(x.id);
  updateModulebaytemplate(x.id);
  verifyModulebaytemplateExists(x.id);
  verifyModulebaytemplateUpdated(x.id);
});

bthread("ModuletypeLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addModuletype(x.id);
  updateModuletype(x.id);
  updateModuletype(x.id);
  verifyModuletypeExists(x.id);
  verifyModuletypeUpdated(x.id);
});

bthread("ModuletypeprofileLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addModuletypeprofile(x.id);
  updateModuletypeprofile(x.id);
  updateModuletypeprofile(x.id);
  verifyModuletypeprofileExists(x.id);
  verifyModuletypeprofileUpdated(x.id);
});

bthread("NotificationLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotification(x.id);
  updateNotification(x.id);
  updateNotification(x.id);
  verifyNotificationExists(x.id);
  verifyNotificationUpdated(x.id);
});

bthread("NotificationgroupLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotificationgroup(x.id);
  updateNotificationgroup(x.id);
  updateNotificationgroup(x.id);
  verifyNotificationgroupExists(x.id);
  verifyNotificationgroupUpdated(x.id);
});

bthread("ObjectchangeLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addObjectchange(x.id);
  updateObjectchange(x.id);
  updateObjectchange(x.id);
  verifyObjectchangeExists(x.id);
  verifyObjectchangeUpdated(x.id);
});

bthread("ObjecttypeLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addObjecttype(x.id);
  updateObjecttype(x.id);
  updateObjecttype(x.id);
  verifyObjecttypeExists(x.id);
  verifyObjecttypeUpdated(x.id);
});

bthread("PathLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPath(x.id);
  updatePath(x.id);
  updatePath(x.id);
  verifyPathExists(x.id);
  verifyPathUpdated(x.id);
});

bthread("PermissionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPermission(x.id);
  updatePermission(x.id);
  updatePermission(x.id);
  verifyPermissionExists(x.id);
  verifyPermissionUpdated(x.id);
});

bthread("PlatformLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPlatform(x.id);
  updatePlatform(x.id);
  updatePlatform(x.id);
  verifyPlatformExists(x.id);
  verifyPlatformUpdated(x.id);
});

bthread("PowerfeedLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPowerfeed(x.id);
  updatePowerfeed(x.id);
  updatePowerfeed(x.id);
  verifyPowerfeedExists(x.id);
  verifyPowerfeedUpdated(x.id);
});

bthread("PoweroutletLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPoweroutlet(x.id);
  updatePoweroutlet(x.id);
  updatePoweroutlet(x.id);
  verifyPoweroutletExists(x.id);
  verifyPoweroutletUpdated(x.id);
});

bthread("PoweroutlettemplateLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPoweroutlettemplate(x.id);
  updatePoweroutlettemplate(x.id);
  updatePoweroutlettemplate(x.id);
  verifyPoweroutlettemplateExists(x.id);
  verifyPoweroutlettemplateUpdated(x.id);
});

bthread("PowerpanelLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPowerpanel(x.id);
  updatePowerpanel(x.id);
  updatePowerpanel(x.id);
  verifyPowerpanelExists(x.id);
  verifyPowerpanelUpdated(x.id);
});

bthread("PowerportLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPowerport(x.id);
  updatePowerport(x.id);
  updatePowerport(x.id);
  verifyPowerportExists(x.id);
  verifyPowerportUpdated(x.id);
});

bthread("PowerporttemplateLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPowerporttemplate(x.id);
  updatePowerporttemplate(x.id);
  updatePowerporttemplate(x.id);
  verifyPowerporttemplateExists(x.id);
  verifyPowerporttemplateUpdated(x.id);
});

bthread("PrefixeLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPrefixe(x.id);
  updatePrefixe(x.id);
  updatePrefixe(x.id);
  verifyPrefixeExists(x.id);
  verifyPrefixeUpdated(x.id);
});

bthread("ProviderLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProvider(x.id);
  updateProvider(x.id);
  updateProvider(x.id);
  verifyProviderExists(x.id);
  verifyProviderUpdated(x.id);
});

bthread("ProvideraccountLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProvideraccount(x.id);
  updateProvideraccount(x.id);
  updateProvideraccount(x.id);
  verifyProvideraccountExists(x.id);
  verifyProvideraccountUpdated(x.id);
});

bthread("ProvidernetworkLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProvidernetwork(x.id);
  updateProvidernetwork(x.id);
  updateProvidernetwork(x.id);
  verifyProvidernetworkExists(x.id);
  verifyProvidernetworkUpdated(x.id);
});

bthread("ProvisionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProvision(x.id);
  updateProvision(x.id);
  updateProvision(x.id);
  verifyProvisionExists(x.id);
  verifyProvisionUpdated(x.id);
});

bthread("RackLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRack(x.id);
  updateRack(x.id);
  updateRack(x.id);
  verifyRackExists(x.id);
  verifyRackUpdated(x.id);
});

bthread("RackreservationLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRackreservation(x.id);
  updateRackreservation(x.id);
  updateRackreservation(x.id);
  verifyRackreservationExists(x.id);
  verifyRackreservationUpdated(x.id);
});

bthread("RackroleLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRackrole(x.id);
  updateRackrole(x.id);
  updateRackrole(x.id);
  verifyRackroleExists(x.id);
  verifyRackroleUpdated(x.id);
});

bthread("RacktypeLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRacktype(x.id);
  updateRacktype(x.id);
  updateRacktype(x.id);
  verifyRacktypeExists(x.id);
  verifyRacktypeUpdated(x.id);
});

bthread("RearportLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRearport(x.id);
  updateRearport(x.id);
  updateRearport(x.id);
  verifyRearportExists(x.id);
  verifyRearportUpdated(x.id);
});

bthread("RearporttemplateLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRearporttemplate(x.id);
  updateRearporttemplate(x.id);
  updateRearporttemplate(x.id);
  verifyRearporttemplateExists(x.id);
  verifyRearporttemplateUpdated(x.id);
});

bthread("RegionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRegion(x.id);
  updateRegion(x.id);
  updateRegion(x.id);
  verifyRegionExists(x.id);
  verifyRegionUpdated(x.id);
});

bthread("RenderLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRender(x.id);
  updateRender(x.id);
  updateRender(x.id);
  verifyRenderExists(x.id);
  verifyRenderUpdated(x.id);
});

bthread("RenderconfigLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRenderconfig(x.id);
  updateRenderconfig(x.id);
  updateRenderconfig(x.id);
  verifyRenderconfigExists(x.id);
  verifyRenderconfigUpdated(x.id);
});

bthread("RequeueLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequeue(x.id);
  updateRequeue(x.id);
  updateRequeue(x.id);
  verifyRequeueExists(x.id);
  verifyRequeueUpdated(x.id);
});

bthread("RirLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRir(x.id);
  updateRir(x.id);
  updateRir(x.id);
  verifyRirExists(x.id);
  verifyRirUpdated(x.id);
});

bthread("RoleLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRole(x.id);
  updateRole(x.id);
  updateRole(x.id);
  verifyRoleExists(x.id);
  verifyRoleUpdated(x.id);
});

bthread("RoutetargetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRoutetarget(x.id);
  updateRoutetarget(x.id);
  updateRoutetarget(x.id);
  verifyRoutetargetExists(x.id);
  verifyRoutetargetUpdated(x.id);
});

bthread("SavedfilterLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSavedfilter(x.id);
  updateSavedfilter(x.id);
  updateSavedfilter(x.id);
  verifySavedfilterExists(x.id);
  verifySavedfilterUpdated(x.id);
});

bthread("SchemaLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSchema(x.id);
  updateSchema(x.id);
  updateSchema(x.id);
  verifySchemaExists(x.id);
  verifySchemaUpdated(x.id);
});

bthread("ScriptLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScript(x.id);
  updateScript(x.id);
  updateScript(x.id);
  verifyScriptExists(x.id);
  verifyScriptUpdated(x.id);
});

bthread("ServiceLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addService(x.id);
  updateService(x.id);
  updateService(x.id);
  verifyServiceExists(x.id);
  verifyServiceUpdated(x.id);
});

bthread("ServicetemplateLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addServicetemplate(x.id);
  updateServicetemplate(x.id);
  updateServicetemplate(x.id);
  verifyServicetemplateExists(x.id);
  verifyServicetemplateUpdated(x.id);
});

bthread("SiteLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSite(x.id);
  updateSite(x.id);
  updateSite(x.id);
  verifySiteExists(x.id);
  verifySiteUpdated(x.id);
});

bthread("SitegroupLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSitegroup(x.id);
  updateSitegroup(x.id);
  updateSitegroup(x.id);
  verifySitegroupExists(x.id);
  verifySitegroupUpdated(x.id);
});

bthread("StatuLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStatu(x.id);
  updateStatu(x.id);
  updateStatu(x.id);
  verifyStatuExists(x.id);
  verifyStatuUpdated(x.id);
});

bthread("StopLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStop(x.id);
  updateStop(x.id);
  updateStop(x.id);
  verifyStopExists(x.id);
  verifyStopUpdated(x.id);
});

bthread("SubscriptionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubscription(x.id);
  updateSubscription(x.id);
  updateSubscription(x.id);
  verifySubscriptionExists(x.id);
  verifySubscriptionUpdated(x.id);
});

bthread("SyncLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSync(x.id);
  updateSync(x.id);
  updateSync(x.id);
  verifySyncExists(x.id);
  verifySyncUpdated(x.id);
});

bthread("TableconfigLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTableconfig(x.id);
  updateTableconfig(x.id);
  updateTableconfig(x.id);
  verifyTableconfigExists(x.id);
  verifyTableconfigUpdated(x.id);
});

bthread("TagLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTag(x.id);
  updateTag(x.id);
  updateTag(x.id);
  verifyTagExists(x.id);
  verifyTagUpdated(x.id);
});

bthread("TaggedobjectLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTaggedobject(x.id);
  updateTaggedobject(x.id);
  updateTaggedobject(x.id);
  verifyTaggedobjectExists(x.id);
  verifyTaggedobjectUpdated(x.id);
});

bthread("TenancyLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTenancy(x.id);
  updateTenancy(x.id);
  updateTenancy(x.id);
  verifyTenancyExists(x.id);
  verifyTenancyUpdated(x.id);
});

bthread("TenantLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTenant(x.id);
  updateTenant(x.id);
  updateTenant(x.id);
  verifyTenantExists(x.id);
  verifyTenantUpdated(x.id);
});

bthread("TenantgroupLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTenantgroup(x.id);
  updateTenantgroup(x.id);
  updateTenantgroup(x.id);
  verifyTenantgroupExists(x.id);
  verifyTenantgroupUpdated(x.id);
});

bthread("TokenLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addToken(x.id);
  updateToken(x.id);
  updateToken(x.id);
  verifyTokenExists(x.id);
  verifyTokenUpdated(x.id);
});

bthread("TraceLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTrace(x.id);
  updateTrace(x.id);
  updateTrace(x.id);
  verifyTraceExists(x.id);
  verifyTraceUpdated(x.id);
});

bthread("TunnelLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTunnel(x.id);
  updateTunnel(x.id);
  updateTunnel(x.id);
  verifyTunnelExists(x.id);
  verifyTunnelUpdated(x.id);
});

bthread("TunnelgroupLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTunnelgroup(x.id);
  updateTunnelgroup(x.id);
  updateTunnelgroup(x.id);
  verifyTunnelgroupExists(x.id);
  verifyTunnelgroupUpdated(x.id);
});

bthread("TunnelterminationLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTunneltermination(x.id);
  updateTunneltermination(x.id);
  updateTunneltermination(x.id);
  verifyTunnelterminationExists(x.id);
  verifyTunnelterminationUpdated(x.id);
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUser(x.id);
  updateUser(x.id);
  updateUser(x.id);
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
});

bthread("VirtualchassiLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVirtualchassi(x.id);
  updateVirtualchassi(x.id);
  updateVirtualchassi(x.id);
  verifyVirtualchassiExists(x.id);
  verifyVirtualchassiUpdated(x.id);
});

bthread("VirtualcircuitLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVirtualcircuit(x.id);
  updateVirtualcircuit(x.id);
  updateVirtualcircuit(x.id);
  verifyVirtualcircuitExists(x.id);
  verifyVirtualcircuitUpdated(x.id);
});

bthread("VirtualcircuitterminationLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVirtualcircuittermination(x.id);
  updateVirtualcircuittermination(x.id);
  updateVirtualcircuittermination(x.id);
  verifyVirtualcircuitterminationExists(x.id);
  verifyVirtualcircuitterminationUpdated(x.id);
});

bthread("VirtualcircuittypeLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVirtualcircuittype(x.id);
  updateVirtualcircuittype(x.id);
  updateVirtualcircuittype(x.id);
  verifyVirtualcircuittypeExists(x.id);
  verifyVirtualcircuittypeUpdated(x.id);
});

bthread("VirtualdevicecontextLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVirtualdevicecontext(x.id);
  updateVirtualdevicecontext(x.id);
  updateVirtualdevicecontext(x.id);
  verifyVirtualdevicecontextExists(x.id);
  verifyVirtualdevicecontextUpdated(x.id);
});

bthread("VirtualdiskLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVirtualdisk(x.id);
  updateVirtualdisk(x.id);
  updateVirtualdisk(x.id);
  verifyVirtualdiskExists(x.id);
  verifyVirtualdiskUpdated(x.id);
});

bthread("VirtualizationLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVirtualization(x.id);
  updateVirtualization(x.id);
  updateVirtualization(x.id);
  verifyVirtualizationExists(x.id);
  verifyVirtualizationUpdated(x.id);
});

bthread("VirtualmachineLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVirtualmachine(x.id);
  updateVirtualmachine(x.id);
  updateVirtualmachine(x.id);
  verifyVirtualmachineExists(x.id);
  verifyVirtualmachineUpdated(x.id);
});

bthread("VlanLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVlan(x.id);
  updateVlan(x.id);
  updateVlan(x.id);
  verifyVlanExists(x.id);
  verifyVlanUpdated(x.id);
});

bthread("VlangroupLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVlangroup(x.id);
  updateVlangroup(x.id);
  updateVlangroup(x.id);
  verifyVlangroupExists(x.id);
  verifyVlangroupUpdated(x.id);
});

bthread("VlantranslationpolicyLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVlantranslationpolicy(x.id);
  updateVlantranslationpolicy(x.id);
  updateVlantranslationpolicy(x.id);
  verifyVlantranslationpolicyExists(x.id);
  verifyVlantranslationpolicyUpdated(x.id);
});

bthread("VlantranslationruleLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVlantranslationrule(x.id);
  updateVlantranslationrule(x.id);
  updateVlantranslationrule(x.id);
  verifyVlantranslationruleExists(x.id);
  verifyVlantranslationruleUpdated(x.id);
});

bthread("VpnLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVpn(x.id);
  updateVpn(x.id);
  updateVpn(x.id);
  verifyVpnExists(x.id);
  verifyVpnUpdated(x.id);
});

bthread("VrfLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVrf(x.id);
  updateVrf(x.id);
  updateVrf(x.id);
  verifyVrfExists(x.id);
  verifyVrfUpdated(x.id);
});

bthread("WebhookLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWebhook(x.id);
  updateWebhook(x.id);
  updateWebhook(x.id);
  verifyWebhookExists(x.id);
  verifyWebhookUpdated(x.id);
});

bthread("WirelesLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWireles(x.id);
  updateWireles(x.id);
  updateWireles(x.id);
  verifyWirelesExists(x.id);
  verifyWirelesUpdated(x.id);
});

bthread("WirelesslanLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWirelesslan(x.id);
  updateWirelesslan(x.id);
  updateWirelesslan(x.id);
  verifyWirelesslanExists(x.id);
  verifyWirelesslanUpdated(x.id);
});

bthread("WirelesslangroupLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWirelesslangroup(x.id);
  updateWirelesslangroup(x.id);
  updateWirelesslangroup(x.id);
  verifyWirelesslangroupExists(x.id);
  verifyWirelesslangroupUpdated(x.id);
});

bthread("WirelesslinkLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWirelesslink(x.id);
  updateWirelesslink(x.id);
  updateWirelesslink(x.id);
  verifyWirelesslinkExists(x.id);
  verifyWirelesslinkUpdated(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Aggregate create verification", function () {
  const e = waitForAnyAggregateAdded();
  block(matchDeleteAggregate(e.id, ANY), function () {
    verifyAggregateExists(e.id);
  });
});

bthread("Aggregate update verification", function () {
  const e = waitForAnyAggregateUpdated();
  block(matchDeleteAggregate(e.id, ANY), function () {
    verifyAggregateUpdated(e.id);
  });
});

bthread("Aggregate delete verification", function () {
  const e = waitForAnyAggregateDeleted();
  block(matchAddAggregate(e.id, ANY), function () {
    verifyAggregateDoesNotExist(e.id);
  });
});

bthread("Api create verification", function () {
  const e = waitForAnyApiAdded();
  block(matchDeleteApi(e.id, ANY), function () {
    verifyApiExists(e.id);
  });
});

bthread("Api update verification", function () {
  const e = waitForAnyApiUpdated();
  block(matchDeleteApi(e.id, ANY), function () {
    verifyApiUpdated(e.id);
  });
});

bthread("Api delete verification", function () {
  const e = waitForAnyApiDeleted();
  block(matchAddApi(e.id, ANY), function () {
    verifyApiDoesNotExist(e.id);
  });
});

bthread("Asn create verification", function () {
  const e = waitForAnyAsnAdded();
  block(matchDeleteAsn(e.id, ANY), function () {
    verifyAsnExists(e.id);
  });
});

bthread("Asn update verification", function () {
  const e = waitForAnyAsnUpdated();
  block(matchDeleteAsn(e.id, ANY), function () {
    verifyAsnUpdated(e.id);
  });
});

bthread("Asn delete verification", function () {
  const e = waitForAnyAsnDeleted();
  block(matchAddAsn(e.id, ANY), function () {
    verifyAsnDoesNotExist(e.id);
  });
});

bthread("Asnrange create verification", function () {
  const e = waitForAnyAsnrangeAdded();
  block(matchDeleteAsnrange(e.id, ANY), function () {
    verifyAsnrangeExists(e.id);
  });
});

bthread("Asnrange update verification", function () {
  const e = waitForAnyAsnrangeUpdated();
  block(matchDeleteAsnrange(e.id, ANY), function () {
    verifyAsnrangeUpdated(e.id);
  });
});

bthread("Asnrange delete verification", function () {
  const e = waitForAnyAsnrangeDeleted();
  block(matchAddAsnrange(e.id, ANY), function () {
    verifyAsnrangeDoesNotExist(e.id);
  });
});

bthread("Availableasn create verification", function () {
  const e = waitForAnyAvailableasnAdded();
  block(matchDeleteAvailableasn(e.id, ANY), function () {
    verifyAvailableasnExists(e.id);
  });
});

bthread("Availableasn update verification", function () {
  const e = waitForAnyAvailableasnUpdated();
  block(matchDeleteAvailableasn(e.id, ANY), function () {
    verifyAvailableasnUpdated(e.id);
  });
});

bthread("Availableasn delete verification", function () {
  const e = waitForAnyAvailableasnDeleted();
  block(matchAddAvailableasn(e.id, ANY), function () {
    verifyAvailableasnDoesNotExist(e.id);
  });
});

bthread("Availableip create verification", function () {
  const e = waitForAnyAvailableipAdded();
  block(matchDeleteAvailableip(e.id, ANY), function () {
    verifyAvailableipExists(e.id);
  });
});

bthread("Availableip update verification", function () {
  const e = waitForAnyAvailableipUpdated();
  block(matchDeleteAvailableip(e.id, ANY), function () {
    verifyAvailableipUpdated(e.id);
  });
});

bthread("Availableip delete verification", function () {
  const e = waitForAnyAvailableipDeleted();
  block(matchAddAvailableip(e.id, ANY), function () {
    verifyAvailableipDoesNotExist(e.id);
  });
});

bthread("Availableprefixe create verification", function () {
  const e = waitForAnyAvailableprefixeAdded();
  block(matchDeleteAvailableprefixe(e.id, ANY), function () {
    verifyAvailableprefixeExists(e.id);
  });
});

bthread("Availableprefixe update verification", function () {
  const e = waitForAnyAvailableprefixeUpdated();
  block(matchDeleteAvailableprefixe(e.id, ANY), function () {
    verifyAvailableprefixeUpdated(e.id);
  });
});

bthread("Availableprefixe delete verification", function () {
  const e = waitForAnyAvailableprefixeDeleted();
  block(matchAddAvailableprefixe(e.id, ANY), function () {
    verifyAvailableprefixeDoesNotExist(e.id);
  });
});

bthread("Availablevlan create verification", function () {
  const e = waitForAnyAvailablevlanAdded();
  block(matchDeleteAvailablevlan(e.id, ANY), function () {
    verifyAvailablevlanExists(e.id);
  });
});

bthread("Availablevlan update verification", function () {
  const e = waitForAnyAvailablevlanUpdated();
  block(matchDeleteAvailablevlan(e.id, ANY), function () {
    verifyAvailablevlanUpdated(e.id);
  });
});

bthread("Availablevlan delete verification", function () {
  const e = waitForAnyAvailablevlanDeleted();
  block(matchAddAvailablevlan(e.id, ANY), function () {
    verifyAvailablevlanDoesNotExist(e.id);
  });
});

bthread("Backgroundqueue create verification", function () {
  const e = waitForAnyBackgroundqueueAdded();
  block(matchDeleteBackgroundqueue(e.id, ANY), function () {
    verifyBackgroundqueueExists(e.id);
  });
});

bthread("Backgroundqueue update verification", function () {
  const e = waitForAnyBackgroundqueueUpdated();
  block(matchDeleteBackgroundqueue(e.id, ANY), function () {
    verifyBackgroundqueueUpdated(e.id);
  });
});

bthread("Backgroundqueue delete verification", function () {
  const e = waitForAnyBackgroundqueueDeleted();
  block(matchAddBackgroundqueue(e.id, ANY), function () {
    verifyBackgroundqueueDoesNotExist(e.id);
  });
});

bthread("Backgroundtask create verification", function () {
  const e = waitForAnyBackgroundtaskAdded();
  block(matchDeleteBackgroundtask(e.id, ANY), function () {
    verifyBackgroundtaskExists(e.id);
  });
});

bthread("Backgroundtask update verification", function () {
  const e = waitForAnyBackgroundtaskUpdated();
  block(matchDeleteBackgroundtask(e.id, ANY), function () {
    verifyBackgroundtaskUpdated(e.id);
  });
});

bthread("Backgroundtask delete verification", function () {
  const e = waitForAnyBackgroundtaskDeleted();
  block(matchAddBackgroundtask(e.id, ANY), function () {
    verifyBackgroundtaskDoesNotExist(e.id);
  });
});

bthread("Backgroundworker create verification", function () {
  const e = waitForAnyBackgroundworkerAdded();
  block(matchDeleteBackgroundworker(e.id, ANY), function () {
    verifyBackgroundworkerExists(e.id);
  });
});

bthread("Backgroundworker update verification", function () {
  const e = waitForAnyBackgroundworkerUpdated();
  block(matchDeleteBackgroundworker(e.id, ANY), function () {
    verifyBackgroundworkerUpdated(e.id);
  });
});

bthread("Backgroundworker delete verification", function () {
  const e = waitForAnyBackgroundworkerDeleted();
  block(matchAddBackgroundworker(e.id, ANY), function () {
    verifyBackgroundworkerDoesNotExist(e.id);
  });
});

bthread("Bookmark create verification", function () {
  const e = waitForAnyBookmarkAdded();
  block(matchDeleteBookmark(e.id, ANY), function () {
    verifyBookmarkExists(e.id);
  });
});

bthread("Bookmark update verification", function () {
  const e = waitForAnyBookmarkUpdated();
  block(matchDeleteBookmark(e.id, ANY), function () {
    verifyBookmarkUpdated(e.id);
  });
});

bthread("Bookmark delete verification", function () {
  const e = waitForAnyBookmarkDeleted();
  block(matchAddBookmark(e.id, ANY), function () {
    verifyBookmarkDoesNotExist(e.id);
  });
});

bthread("Cable create verification", function () {
  const e = waitForAnyCableAdded();
  block(matchDeleteCable(e.id, ANY), function () {
    verifyCableExists(e.id);
  });
});

bthread("Cable update verification", function () {
  const e = waitForAnyCableUpdated();
  block(matchDeleteCable(e.id, ANY), function () {
    verifyCableUpdated(e.id);
  });
});

bthread("Cable delete verification", function () {
  const e = waitForAnyCableDeleted();
  block(matchAddCable(e.id, ANY), function () {
    verifyCableDoesNotExist(e.id);
  });
});

bthread("Cabletermination create verification", function () {
  const e = waitForAnyCableterminationAdded();
  block(matchDeleteCabletermination(e.id, ANY), function () {
    verifyCableterminationExists(e.id);
  });
});

bthread("Cabletermination update verification", function () {
  const e = waitForAnyCableterminationUpdated();
  block(matchDeleteCabletermination(e.id, ANY), function () {
    verifyCableterminationUpdated(e.id);
  });
});

bthread("Cabletermination delete verification", function () {
  const e = waitForAnyCableterminationDeleted();
  block(matchAddCabletermination(e.id, ANY), function () {
    verifyCableterminationDoesNotExist(e.id);
  });
});

bthread("Choice create verification", function () {
  const e = waitForAnyChoiceAdded();
  block(matchDeleteChoice(e.id, ANY), function () {
    verifyChoiceExists(e.id);
  });
});

bthread("Choice update verification", function () {
  const e = waitForAnyChoiceUpdated();
  block(matchDeleteChoice(e.id, ANY), function () {
    verifyChoiceUpdated(e.id);
  });
});

bthread("Choice delete verification", function () {
  const e = waitForAnyChoiceDeleted();
  block(matchAddChoice(e.id, ANY), function () {
    verifyChoiceDoesNotExist(e.id);
  });
});

bthread("Circuit create verification", function () {
  const e = waitForAnyCircuitAdded();
  block(matchDeleteCircuit(e.id, ANY), function () {
    verifyCircuitExists(e.id);
  });
});

bthread("Circuit update verification", function () {
  const e = waitForAnyCircuitUpdated();
  block(matchDeleteCircuit(e.id, ANY), function () {
    verifyCircuitUpdated(e.id);
  });
});

bthread("Circuit delete verification", function () {
  const e = waitForAnyCircuitDeleted();
  block(matchAddCircuit(e.id, ANY), function () {
    verifyCircuitDoesNotExist(e.id);
  });
});

bthread("Circuitgroup create verification", function () {
  const e = waitForAnyCircuitgroupAdded();
  block(matchDeleteCircuitgroup(e.id, ANY), function () {
    verifyCircuitgroupExists(e.id);
  });
});

bthread("Circuitgroup update verification", function () {
  const e = waitForAnyCircuitgroupUpdated();
  block(matchDeleteCircuitgroup(e.id, ANY), function () {
    verifyCircuitgroupUpdated(e.id);
  });
});

bthread("Circuitgroup delete verification", function () {
  const e = waitForAnyCircuitgroupDeleted();
  block(matchAddCircuitgroup(e.id, ANY), function () {
    verifyCircuitgroupDoesNotExist(e.id);
  });
});

bthread("Circuitgroupassignment create verification", function () {
  const e = waitForAnyCircuitgroupassignmentAdded();
  block(matchDeleteCircuitgroupassignment(e.id, ANY), function () {
    verifyCircuitgroupassignmentExists(e.id);
  });
});

bthread("Circuitgroupassignment update verification", function () {
  const e = waitForAnyCircuitgroupassignmentUpdated();
  block(matchDeleteCircuitgroupassignment(e.id, ANY), function () {
    verifyCircuitgroupassignmentUpdated(e.id);
  });
});

bthread("Circuitgroupassignment delete verification", function () {
  const e = waitForAnyCircuitgroupassignmentDeleted();
  block(matchAddCircuitgroupassignment(e.id, ANY), function () {
    verifyCircuitgroupassignmentDoesNotExist(e.id);
  });
});

bthread("Circuittermination create verification", function () {
  const e = waitForAnyCircuitterminationAdded();
  block(matchDeleteCircuittermination(e.id, ANY), function () {
    verifyCircuitterminationExists(e.id);
  });
});

bthread("Circuittermination update verification", function () {
  const e = waitForAnyCircuitterminationUpdated();
  block(matchDeleteCircuittermination(e.id, ANY), function () {
    verifyCircuitterminationUpdated(e.id);
  });
});

bthread("Circuittermination delete verification", function () {
  const e = waitForAnyCircuitterminationDeleted();
  block(matchAddCircuittermination(e.id, ANY), function () {
    verifyCircuitterminationDoesNotExist(e.id);
  });
});

bthread("Circuittype create verification", function () {
  const e = waitForAnyCircuittypeAdded();
  block(matchDeleteCircuittype(e.id, ANY), function () {
    verifyCircuittypeExists(e.id);
  });
});

bthread("Circuittype update verification", function () {
  const e = waitForAnyCircuittypeUpdated();
  block(matchDeleteCircuittype(e.id, ANY), function () {
    verifyCircuittypeUpdated(e.id);
  });
});

bthread("Circuittype delete verification", function () {
  const e = waitForAnyCircuittypeDeleted();
  block(matchAddCircuittype(e.id, ANY), function () {
    verifyCircuittypeDoesNotExist(e.id);
  });
});

bthread("Cluster create verification", function () {
  const e = waitForAnyClusterAdded();
  block(matchDeleteCluster(e.id, ANY), function () {
    verifyClusterExists(e.id);
  });
});

bthread("Cluster update verification", function () {
  const e = waitForAnyClusterUpdated();
  block(matchDeleteCluster(e.id, ANY), function () {
    verifyClusterUpdated(e.id);
  });
});

bthread("Cluster delete verification", function () {
  const e = waitForAnyClusterDeleted();
  block(matchAddCluster(e.id, ANY), function () {
    verifyClusterDoesNotExist(e.id);
  });
});

bthread("Clustergroup create verification", function () {
  const e = waitForAnyClustergroupAdded();
  block(matchDeleteClustergroup(e.id, ANY), function () {
    verifyClustergroupExists(e.id);
  });
});

bthread("Clustergroup update verification", function () {
  const e = waitForAnyClustergroupUpdated();
  block(matchDeleteClustergroup(e.id, ANY), function () {
    verifyClustergroupUpdated(e.id);
  });
});

bthread("Clustergroup delete verification", function () {
  const e = waitForAnyClustergroupDeleted();
  block(matchAddClustergroup(e.id, ANY), function () {
    verifyClustergroupDoesNotExist(e.id);
  });
});

bthread("Clustertype create verification", function () {
  const e = waitForAnyClustertypeAdded();
  block(matchDeleteClustertype(e.id, ANY), function () {
    verifyClustertypeExists(e.id);
  });
});

bthread("Clustertype update verification", function () {
  const e = waitForAnyClustertypeUpdated();
  block(matchDeleteClustertype(e.id, ANY), function () {
    verifyClustertypeUpdated(e.id);
  });
});

bthread("Clustertype delete verification", function () {
  const e = waitForAnyClustertypeDeleted();
  block(matchAddClustertype(e.id, ANY), function () {
    verifyClustertypeDoesNotExist(e.id);
  });
});

bthread("Config create verification", function () {
  const e = waitForAnyConfigAdded();
  block(matchDeleteConfig(e.id, ANY), function () {
    verifyConfigExists(e.id);
  });
});

bthread("Config update verification", function () {
  const e = waitForAnyConfigUpdated();
  block(matchDeleteConfig(e.id, ANY), function () {
    verifyConfigUpdated(e.id);
  });
});

bthread("Config delete verification", function () {
  const e = waitForAnyConfigDeleted();
  block(matchAddConfig(e.id, ANY), function () {
    verifyConfigDoesNotExist(e.id);
  });
});

bthread("Configcontext create verification", function () {
  const e = waitForAnyConfigcontextAdded();
  block(matchDeleteConfigcontext(e.id, ANY), function () {
    verifyConfigcontextExists(e.id);
  });
});

bthread("Configcontext update verification", function () {
  const e = waitForAnyConfigcontextUpdated();
  block(matchDeleteConfigcontext(e.id, ANY), function () {
    verifyConfigcontextUpdated(e.id);
  });
});

bthread("Configcontext delete verification", function () {
  const e = waitForAnyConfigcontextDeleted();
  block(matchAddConfigcontext(e.id, ANY), function () {
    verifyConfigcontextDoesNotExist(e.id);
  });
});

bthread("Configcontextprofile create verification", function () {
  const e = waitForAnyConfigcontextprofileAdded();
  block(matchDeleteConfigcontextprofile(e.id, ANY), function () {
    verifyConfigcontextprofileExists(e.id);
  });
});

bthread("Configcontextprofile update verification", function () {
  const e = waitForAnyConfigcontextprofileUpdated();
  block(matchDeleteConfigcontextprofile(e.id, ANY), function () {
    verifyConfigcontextprofileUpdated(e.id);
  });
});

bthread("Configcontextprofile delete verification", function () {
  const e = waitForAnyConfigcontextprofileDeleted();
  block(matchAddConfigcontextprofile(e.id, ANY), function () {
    verifyConfigcontextprofileDoesNotExist(e.id);
  });
});

bthread("Configtemplate create verification", function () {
  const e = waitForAnyConfigtemplateAdded();
  block(matchDeleteConfigtemplate(e.id, ANY), function () {
    verifyConfigtemplateExists(e.id);
  });
});

bthread("Configtemplate update verification", function () {
  const e = waitForAnyConfigtemplateUpdated();
  block(matchDeleteConfigtemplate(e.id, ANY), function () {
    verifyConfigtemplateUpdated(e.id);
  });
});

bthread("Configtemplate delete verification", function () {
  const e = waitForAnyConfigtemplateDeleted();
  block(matchAddConfigtemplate(e.id, ANY), function () {
    verifyConfigtemplateDoesNotExist(e.id);
  });
});

bthread("Connecteddevice create verification", function () {
  const e = waitForAnyConnecteddeviceAdded();
  block(matchDeleteConnecteddevice(e.id, ANY), function () {
    verifyConnecteddeviceExists(e.id);
  });
});

bthread("Connecteddevice update verification", function () {
  const e = waitForAnyConnecteddeviceUpdated();
  block(matchDeleteConnecteddevice(e.id, ANY), function () {
    verifyConnecteddeviceUpdated(e.id);
  });
});

bthread("Connecteddevice delete verification", function () {
  const e = waitForAnyConnecteddeviceDeleted();
  block(matchAddConnecteddevice(e.id, ANY), function () {
    verifyConnecteddeviceDoesNotExist(e.id);
  });
});

bthread("Consoleport create verification", function () {
  const e = waitForAnyConsoleportAdded();
  block(matchDeleteConsoleport(e.id, ANY), function () {
    verifyConsoleportExists(e.id);
  });
});

bthread("Consoleport update verification", function () {
  const e = waitForAnyConsoleportUpdated();
  block(matchDeleteConsoleport(e.id, ANY), function () {
    verifyConsoleportUpdated(e.id);
  });
});

bthread("Consoleport delete verification", function () {
  const e = waitForAnyConsoleportDeleted();
  block(matchAddConsoleport(e.id, ANY), function () {
    verifyConsoleportDoesNotExist(e.id);
  });
});

bthread("Consoleporttemplate create verification", function () {
  const e = waitForAnyConsoleporttemplateAdded();
  block(matchDeleteConsoleporttemplate(e.id, ANY), function () {
    verifyConsoleporttemplateExists(e.id);
  });
});

bthread("Consoleporttemplate update verification", function () {
  const e = waitForAnyConsoleporttemplateUpdated();
  block(matchDeleteConsoleporttemplate(e.id, ANY), function () {
    verifyConsoleporttemplateUpdated(e.id);
  });
});

bthread("Consoleporttemplate delete verification", function () {
  const e = waitForAnyConsoleporttemplateDeleted();
  block(matchAddConsoleporttemplate(e.id, ANY), function () {
    verifyConsoleporttemplateDoesNotExist(e.id);
  });
});

bthread("Consoleserverport create verification", function () {
  const e = waitForAnyConsoleserverportAdded();
  block(matchDeleteConsoleserverport(e.id, ANY), function () {
    verifyConsoleserverportExists(e.id);
  });
});

bthread("Consoleserverport update verification", function () {
  const e = waitForAnyConsoleserverportUpdated();
  block(matchDeleteConsoleserverport(e.id, ANY), function () {
    verifyConsoleserverportUpdated(e.id);
  });
});

bthread("Consoleserverport delete verification", function () {
  const e = waitForAnyConsoleserverportDeleted();
  block(matchAddConsoleserverport(e.id, ANY), function () {
    verifyConsoleserverportDoesNotExist(e.id);
  });
});

bthread("Consoleserverporttemplate create verification", function () {
  const e = waitForAnyConsoleserverporttemplateAdded();
  block(matchDeleteConsoleserverporttemplate(e.id, ANY), function () {
    verifyConsoleserverporttemplateExists(e.id);
  });
});

bthread("Consoleserverporttemplate update verification", function () {
  const e = waitForAnyConsoleserverporttemplateUpdated();
  block(matchDeleteConsoleserverporttemplate(e.id, ANY), function () {
    verifyConsoleserverporttemplateUpdated(e.id);
  });
});

bthread("Consoleserverporttemplate delete verification", function () {
  const e = waitForAnyConsoleserverporttemplateDeleted();
  block(matchAddConsoleserverporttemplate(e.id, ANY), function () {
    verifyConsoleserverporttemplateDoesNotExist(e.id);
  });
});

bthread("Contact create verification", function () {
  const e = waitForAnyContactAdded();
  block(matchDeleteContact(e.id, ANY), function () {
    verifyContactExists(e.id);
  });
});

bthread("Contact update verification", function () {
  const e = waitForAnyContactUpdated();
  block(matchDeleteContact(e.id, ANY), function () {
    verifyContactUpdated(e.id);
  });
});

bthread("Contact delete verification", function () {
  const e = waitForAnyContactDeleted();
  block(matchAddContact(e.id, ANY), function () {
    verifyContactDoesNotExist(e.id);
  });
});

bthread("Contactassignment create verification", function () {
  const e = waitForAnyContactassignmentAdded();
  block(matchDeleteContactassignment(e.id, ANY), function () {
    verifyContactassignmentExists(e.id);
  });
});

bthread("Contactassignment update verification", function () {
  const e = waitForAnyContactassignmentUpdated();
  block(matchDeleteContactassignment(e.id, ANY), function () {
    verifyContactassignmentUpdated(e.id);
  });
});

bthread("Contactassignment delete verification", function () {
  const e = waitForAnyContactassignmentDeleted();
  block(matchAddContactassignment(e.id, ANY), function () {
    verifyContactassignmentDoesNotExist(e.id);
  });
});

bthread("Contactgroup create verification", function () {
  const e = waitForAnyContactgroupAdded();
  block(matchDeleteContactgroup(e.id, ANY), function () {
    verifyContactgroupExists(e.id);
  });
});

bthread("Contactgroup update verification", function () {
  const e = waitForAnyContactgroupUpdated();
  block(matchDeleteContactgroup(e.id, ANY), function () {
    verifyContactgroupUpdated(e.id);
  });
});

bthread("Contactgroup delete verification", function () {
  const e = waitForAnyContactgroupDeleted();
  block(matchAddContactgroup(e.id, ANY), function () {
    verifyContactgroupDoesNotExist(e.id);
  });
});

bthread("Contactrole create verification", function () {
  const e = waitForAnyContactroleAdded();
  block(matchDeleteContactrole(e.id, ANY), function () {
    verifyContactroleExists(e.id);
  });
});

bthread("Contactrole update verification", function () {
  const e = waitForAnyContactroleUpdated();
  block(matchDeleteContactrole(e.id, ANY), function () {
    verifyContactroleUpdated(e.id);
  });
});

bthread("Contactrole delete verification", function () {
  const e = waitForAnyContactroleDeleted();
  block(matchAddContactrole(e.id, ANY), function () {
    verifyContactroleDoesNotExist(e.id);
  });
});

bthread("Core create verification", function () {
  const e = waitForAnyCoreAdded();
  block(matchDeleteCore(e.id, ANY), function () {
    verifyCoreExists(e.id);
  });
});

bthread("Core update verification", function () {
  const e = waitForAnyCoreUpdated();
  block(matchDeleteCore(e.id, ANY), function () {
    verifyCoreUpdated(e.id);
  });
});

bthread("Core delete verification", function () {
  const e = waitForAnyCoreDeleted();
  block(matchAddCore(e.id, ANY), function () {
    verifyCoreDoesNotExist(e.id);
  });
});

bthread("Customfield create verification", function () {
  const e = waitForAnyCustomfieldAdded();
  block(matchDeleteCustomfield(e.id, ANY), function () {
    verifyCustomfieldExists(e.id);
  });
});

bthread("Customfield update verification", function () {
  const e = waitForAnyCustomfieldUpdated();
  block(matchDeleteCustomfield(e.id, ANY), function () {
    verifyCustomfieldUpdated(e.id);
  });
});

bthread("Customfield delete verification", function () {
  const e = waitForAnyCustomfieldDeleted();
  block(matchAddCustomfield(e.id, ANY), function () {
    verifyCustomfieldDoesNotExist(e.id);
  });
});

bthread("Customfieldchoiceset create verification", function () {
  const e = waitForAnyCustomfieldchoicesetAdded();
  block(matchDeleteCustomfieldchoiceset(e.id, ANY), function () {
    verifyCustomfieldchoicesetExists(e.id);
  });
});

bthread("Customfieldchoiceset update verification", function () {
  const e = waitForAnyCustomfieldchoicesetUpdated();
  block(matchDeleteCustomfieldchoiceset(e.id, ANY), function () {
    verifyCustomfieldchoicesetUpdated(e.id);
  });
});

bthread("Customfieldchoiceset delete verification", function () {
  const e = waitForAnyCustomfieldchoicesetDeleted();
  block(matchAddCustomfieldchoiceset(e.id, ANY), function () {
    verifyCustomfieldchoicesetDoesNotExist(e.id);
  });
});

bthread("Customlink create verification", function () {
  const e = waitForAnyCustomlinkAdded();
  block(matchDeleteCustomlink(e.id, ANY), function () {
    verifyCustomlinkExists(e.id);
  });
});

bthread("Customlink update verification", function () {
  const e = waitForAnyCustomlinkUpdated();
  block(matchDeleteCustomlink(e.id, ANY), function () {
    verifyCustomlinkUpdated(e.id);
  });
});

bthread("Customlink delete verification", function () {
  const e = waitForAnyCustomlinkDeleted();
  block(matchAddCustomlink(e.id, ANY), function () {
    verifyCustomlinkDoesNotExist(e.id);
  });
});

bthread("Dashboard create verification", function () {
  const e = waitForAnyDashboardAdded();
  block(matchDeleteDashboard(e.id, ANY), function () {
    verifyDashboardExists(e.id);
  });
});

bthread("Dashboard update verification", function () {
  const e = waitForAnyDashboardUpdated();
  block(matchDeleteDashboard(e.id, ANY), function () {
    verifyDashboardUpdated(e.id);
  });
});

bthread("Dashboard delete verification", function () {
  const e = waitForAnyDashboardDeleted();
  block(matchAddDashboard(e.id, ANY), function () {
    verifyDashboardDoesNotExist(e.id);
  });
});

bthread("Datafile create verification", function () {
  const e = waitForAnyDatafileAdded();
  block(matchDeleteDatafile(e.id, ANY), function () {
    verifyDatafileExists(e.id);
  });
});

bthread("Datafile update verification", function () {
  const e = waitForAnyDatafileUpdated();
  block(matchDeleteDatafile(e.id, ANY), function () {
    verifyDatafileUpdated(e.id);
  });
});

bthread("Datafile delete verification", function () {
  const e = waitForAnyDatafileDeleted();
  block(matchAddDatafile(e.id, ANY), function () {
    verifyDatafileDoesNotExist(e.id);
  });
});

bthread("Datasource create verification", function () {
  const e = waitForAnyDatasourceAdded();
  block(matchDeleteDatasource(e.id, ANY), function () {
    verifyDatasourceExists(e.id);
  });
});

bthread("Datasource update verification", function () {
  const e = waitForAnyDatasourceUpdated();
  block(matchDeleteDatasource(e.id, ANY), function () {
    verifyDatasourceUpdated(e.id);
  });
});

bthread("Datasource delete verification", function () {
  const e = waitForAnyDatasourceDeleted();
  block(matchAddDatasource(e.id, ANY), function () {
    verifyDatasourceDoesNotExist(e.id);
  });
});

bthread("Dcim create verification", function () {
  const e = waitForAnyDcimAdded();
  block(matchDeleteDcim(e.id, ANY), function () {
    verifyDcimExists(e.id);
  });
});

bthread("Dcim update verification", function () {
  const e = waitForAnyDcimUpdated();
  block(matchDeleteDcim(e.id, ANY), function () {
    verifyDcimUpdated(e.id);
  });
});

bthread("Dcim delete verification", function () {
  const e = waitForAnyDcimDeleted();
  block(matchAddDcim(e.id, ANY), function () {
    verifyDcimDoesNotExist(e.id);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  block(matchDeleteDelete(e.id, ANY), function () {
    verifyDeleteExists(e.id);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  block(matchDeleteDelete(e.id, ANY), function () {
    verifyDeleteUpdated(e.id);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  block(matchAddDelete(e.id, ANY), function () {
    verifyDeleteDoesNotExist(e.id);
  });
});

bthread("Device create verification", function () {
  const e = waitForAnyDeviceAdded();
  block(matchDeleteDevice(e.id, ANY), function () {
    verifyDeviceExists(e.id);
  });
});

bthread("Device update verification", function () {
  const e = waitForAnyDeviceUpdated();
  block(matchDeleteDevice(e.id, ANY), function () {
    verifyDeviceUpdated(e.id);
  });
});

bthread("Device delete verification", function () {
  const e = waitForAnyDeviceDeleted();
  block(matchAddDevice(e.id, ANY), function () {
    verifyDeviceDoesNotExist(e.id);
  });
});

bthread("Devicebay create verification", function () {
  const e = waitForAnyDevicebayAdded();
  block(matchDeleteDevicebay(e.id, ANY), function () {
    verifyDevicebayExists(e.id);
  });
});

bthread("Devicebay update verification", function () {
  const e = waitForAnyDevicebayUpdated();
  block(matchDeleteDevicebay(e.id, ANY), function () {
    verifyDevicebayUpdated(e.id);
  });
});

bthread("Devicebay delete verification", function () {
  const e = waitForAnyDevicebayDeleted();
  block(matchAddDevicebay(e.id, ANY), function () {
    verifyDevicebayDoesNotExist(e.id);
  });
});

bthread("Devicebaytemplate create verification", function () {
  const e = waitForAnyDevicebaytemplateAdded();
  block(matchDeleteDevicebaytemplate(e.id, ANY), function () {
    verifyDevicebaytemplateExists(e.id);
  });
});

bthread("Devicebaytemplate update verification", function () {
  const e = waitForAnyDevicebaytemplateUpdated();
  block(matchDeleteDevicebaytemplate(e.id, ANY), function () {
    verifyDevicebaytemplateUpdated(e.id);
  });
});

bthread("Devicebaytemplate delete verification", function () {
  const e = waitForAnyDevicebaytemplateDeleted();
  block(matchAddDevicebaytemplate(e.id, ANY), function () {
    verifyDevicebaytemplateDoesNotExist(e.id);
  });
});

bthread("Devicerole create verification", function () {
  const e = waitForAnyDeviceroleAdded();
  block(matchDeleteDevicerole(e.id, ANY), function () {
    verifyDeviceroleExists(e.id);
  });
});

bthread("Devicerole update verification", function () {
  const e = waitForAnyDeviceroleUpdated();
  block(matchDeleteDevicerole(e.id, ANY), function () {
    verifyDeviceroleUpdated(e.id);
  });
});

bthread("Devicerole delete verification", function () {
  const e = waitForAnyDeviceroleDeleted();
  block(matchAddDevicerole(e.id, ANY), function () {
    verifyDeviceroleDoesNotExist(e.id);
  });
});

bthread("Devicetype create verification", function () {
  const e = waitForAnyDevicetypeAdded();
  block(matchDeleteDevicetype(e.id, ANY), function () {
    verifyDevicetypeExists(e.id);
  });
});

bthread("Devicetype update verification", function () {
  const e = waitForAnyDevicetypeUpdated();
  block(matchDeleteDevicetype(e.id, ANY), function () {
    verifyDevicetypeUpdated(e.id);
  });
});

bthread("Devicetype delete verification", function () {
  const e = waitForAnyDevicetypeDeleted();
  block(matchAddDevicetype(e.id, ANY), function () {
    verifyDevicetypeDoesNotExist(e.id);
  });
});

bthread("Elevation create verification", function () {
  const e = waitForAnyElevationAdded();
  block(matchDeleteElevation(e.id, ANY), function () {
    verifyElevationExists(e.id);
  });
});

bthread("Elevation update verification", function () {
  const e = waitForAnyElevationUpdated();
  block(matchDeleteElevation(e.id, ANY), function () {
    verifyElevationUpdated(e.id);
  });
});

bthread("Elevation delete verification", function () {
  const e = waitForAnyElevationDeleted();
  block(matchAddElevation(e.id, ANY), function () {
    verifyElevationDoesNotExist(e.id);
  });
});

bthread("Enqueue create verification", function () {
  const e = waitForAnyEnqueueAdded();
  block(matchDeleteEnqueue(e.id, ANY), function () {
    verifyEnqueueExists(e.id);
  });
});

bthread("Enqueue update verification", function () {
  const e = waitForAnyEnqueueUpdated();
  block(matchDeleteEnqueue(e.id, ANY), function () {
    verifyEnqueueUpdated(e.id);
  });
});

bthread("Enqueue delete verification", function () {
  const e = waitForAnyEnqueueDeleted();
  block(matchAddEnqueue(e.id, ANY), function () {
    verifyEnqueueDoesNotExist(e.id);
  });
});

bthread("Eventrule create verification", function () {
  const e = waitForAnyEventruleAdded();
  block(matchDeleteEventrule(e.id, ANY), function () {
    verifyEventruleExists(e.id);
  });
});

bthread("Eventrule update verification", function () {
  const e = waitForAnyEventruleUpdated();
  block(matchDeleteEventrule(e.id, ANY), function () {
    verifyEventruleUpdated(e.id);
  });
});

bthread("Eventrule delete verification", function () {
  const e = waitForAnyEventruleDeleted();
  block(matchAddEventrule(e.id, ANY), function () {
    verifyEventruleDoesNotExist(e.id);
  });
});

bthread("Exporttemplate create verification", function () {
  const e = waitForAnyExporttemplateAdded();
  block(matchDeleteExporttemplate(e.id, ANY), function () {
    verifyExporttemplateExists(e.id);
  });
});

bthread("Exporttemplate update verification", function () {
  const e = waitForAnyExporttemplateUpdated();
  block(matchDeleteExporttemplate(e.id, ANY), function () {
    verifyExporttemplateUpdated(e.id);
  });
});

bthread("Exporttemplate delete verification", function () {
  const e = waitForAnyExporttemplateDeleted();
  block(matchAddExporttemplate(e.id, ANY), function () {
    verifyExporttemplateDoesNotExist(e.id);
  });
});

bthread("Extra create verification", function () {
  const e = waitForAnyExtraAdded();
  block(matchDeleteExtra(e.id, ANY), function () {
    verifyExtraExists(e.id);
  });
});

bthread("Extra update verification", function () {
  const e = waitForAnyExtraUpdated();
  block(matchDeleteExtra(e.id, ANY), function () {
    verifyExtraUpdated(e.id);
  });
});

bthread("Extra delete verification", function () {
  const e = waitForAnyExtraDeleted();
  block(matchAddExtra(e.id, ANY), function () {
    verifyExtraDoesNotExist(e.id);
  });
});

bthread("Fhrpgroup create verification", function () {
  const e = waitForAnyFhrpgroupAdded();
  block(matchDeleteFhrpgroup(e.id, ANY), function () {
    verifyFhrpgroupExists(e.id);
  });
});

bthread("Fhrpgroup update verification", function () {
  const e = waitForAnyFhrpgroupUpdated();
  block(matchDeleteFhrpgroup(e.id, ANY), function () {
    verifyFhrpgroupUpdated(e.id);
  });
});

bthread("Fhrpgroup delete verification", function () {
  const e = waitForAnyFhrpgroupDeleted();
  block(matchAddFhrpgroup(e.id, ANY), function () {
    verifyFhrpgroupDoesNotExist(e.id);
  });
});

bthread("Fhrpgroupassignment create verification", function () {
  const e = waitForAnyFhrpgroupassignmentAdded();
  block(matchDeleteFhrpgroupassignment(e.id, ANY), function () {
    verifyFhrpgroupassignmentExists(e.id);
  });
});

bthread("Fhrpgroupassignment update verification", function () {
  const e = waitForAnyFhrpgroupassignmentUpdated();
  block(matchDeleteFhrpgroupassignment(e.id, ANY), function () {
    verifyFhrpgroupassignmentUpdated(e.id);
  });
});

bthread("Fhrpgroupassignment delete verification", function () {
  const e = waitForAnyFhrpgroupassignmentDeleted();
  block(matchAddFhrpgroupassignment(e.id, ANY), function () {
    verifyFhrpgroupassignmentDoesNotExist(e.id);
  });
});

bthread("Frontport create verification", function () {
  const e = waitForAnyFrontportAdded();
  block(matchDeleteFrontport(e.id, ANY), function () {
    verifyFrontportExists(e.id);
  });
});

bthread("Frontport update verification", function () {
  const e = waitForAnyFrontportUpdated();
  block(matchDeleteFrontport(e.id, ANY), function () {
    verifyFrontportUpdated(e.id);
  });
});

bthread("Frontport delete verification", function () {
  const e = waitForAnyFrontportDeleted();
  block(matchAddFrontport(e.id, ANY), function () {
    verifyFrontportDoesNotExist(e.id);
  });
});

bthread("Frontporttemplate create verification", function () {
  const e = waitForAnyFrontporttemplateAdded();
  block(matchDeleteFrontporttemplate(e.id, ANY), function () {
    verifyFrontporttemplateExists(e.id);
  });
});

bthread("Frontporttemplate update verification", function () {
  const e = waitForAnyFrontporttemplateUpdated();
  block(matchDeleteFrontporttemplate(e.id, ANY), function () {
    verifyFrontporttemplateUpdated(e.id);
  });
});

bthread("Frontporttemplate delete verification", function () {
  const e = waitForAnyFrontporttemplateDeleted();
  block(matchAddFrontporttemplate(e.id, ANY), function () {
    verifyFrontporttemplateDoesNotExist(e.id);
  });
});

bthread("Group create verification", function () {
  const e = waitForAnyGroupAdded();
  block(matchDeleteGroup(e.id, ANY), function () {
    verifyGroupExists(e.id);
  });
});

bthread("Group update verification", function () {
  const e = waitForAnyGroupUpdated();
  block(matchDeleteGroup(e.id, ANY), function () {
    verifyGroupUpdated(e.id);
  });
});

bthread("Group delete verification", function () {
  const e = waitForAnyGroupDeleted();
  block(matchAddGroup(e.id, ANY), function () {
    verifyGroupDoesNotExist(e.id);
  });
});

bthread("Ikepolicy create verification", function () {
  const e = waitForAnyIkepolicyAdded();
  block(matchDeleteIkepolicy(e.id, ANY), function () {
    verifyIkepolicyExists(e.id);
  });
});

bthread("Ikepolicy update verification", function () {
  const e = waitForAnyIkepolicyUpdated();
  block(matchDeleteIkepolicy(e.id, ANY), function () {
    verifyIkepolicyUpdated(e.id);
  });
});

bthread("Ikepolicy delete verification", function () {
  const e = waitForAnyIkepolicyDeleted();
  block(matchAddIkepolicy(e.id, ANY), function () {
    verifyIkepolicyDoesNotExist(e.id);
  });
});

bthread("Ikeproposal create verification", function () {
  const e = waitForAnyIkeproposalAdded();
  block(matchDeleteIkeproposal(e.id, ANY), function () {
    verifyIkeproposalExists(e.id);
  });
});

bthread("Ikeproposal update verification", function () {
  const e = waitForAnyIkeproposalUpdated();
  block(matchDeleteIkeproposal(e.id, ANY), function () {
    verifyIkeproposalUpdated(e.id);
  });
});

bthread("Ikeproposal delete verification", function () {
  const e = waitForAnyIkeproposalDeleted();
  block(matchAddIkeproposal(e.id, ANY), function () {
    verifyIkeproposalDoesNotExist(e.id);
  });
});

bthread("Imageattachment create verification", function () {
  const e = waitForAnyImageattachmentAdded();
  block(matchDeleteImageattachment(e.id, ANY), function () {
    verifyImageattachmentExists(e.id);
  });
});

bthread("Imageattachment update verification", function () {
  const e = waitForAnyImageattachmentUpdated();
  block(matchDeleteImageattachment(e.id, ANY), function () {
    verifyImageattachmentUpdated(e.id);
  });
});

bthread("Imageattachment delete verification", function () {
  const e = waitForAnyImageattachmentDeleted();
  block(matchAddImageattachment(e.id, ANY), function () {
    verifyImageattachmentDoesNotExist(e.id);
  });
});

bthread("Interface create verification", function () {
  const e = waitForAnyInterfaceAdded();
  block(matchDeleteInterface(e.id, ANY), function () {
    verifyInterfaceExists(e.id);
  });
});

bthread("Interface update verification", function () {
  const e = waitForAnyInterfaceUpdated();
  block(matchDeleteInterface(e.id, ANY), function () {
    verifyInterfaceUpdated(e.id);
  });
});

bthread("Interface delete verification", function () {
  const e = waitForAnyInterfaceDeleted();
  block(matchAddInterface(e.id, ANY), function () {
    verifyInterfaceDoesNotExist(e.id);
  });
});

bthread("Interfacetemplate create verification", function () {
  const e = waitForAnyInterfacetemplateAdded();
  block(matchDeleteInterfacetemplate(e.id, ANY), function () {
    verifyInterfacetemplateExists(e.id);
  });
});

bthread("Interfacetemplate update verification", function () {
  const e = waitForAnyInterfacetemplateUpdated();
  block(matchDeleteInterfacetemplate(e.id, ANY), function () {
    verifyInterfacetemplateUpdated(e.id);
  });
});

bthread("Interfacetemplate delete verification", function () {
  const e = waitForAnyInterfacetemplateDeleted();
  block(matchAddInterfacetemplate(e.id, ANY), function () {
    verifyInterfacetemplateDoesNotExist(e.id);
  });
});

bthread("Inventoryitem create verification", function () {
  const e = waitForAnyInventoryitemAdded();
  block(matchDeleteInventoryitem(e.id, ANY), function () {
    verifyInventoryitemExists(e.id);
  });
});

bthread("Inventoryitem update verification", function () {
  const e = waitForAnyInventoryitemUpdated();
  block(matchDeleteInventoryitem(e.id, ANY), function () {
    verifyInventoryitemUpdated(e.id);
  });
});

bthread("Inventoryitem delete verification", function () {
  const e = waitForAnyInventoryitemDeleted();
  block(matchAddInventoryitem(e.id, ANY), function () {
    verifyInventoryitemDoesNotExist(e.id);
  });
});

bthread("Inventoryitemrole create verification", function () {
  const e = waitForAnyInventoryitemroleAdded();
  block(matchDeleteInventoryitemrole(e.id, ANY), function () {
    verifyInventoryitemroleExists(e.id);
  });
});

bthread("Inventoryitemrole update verification", function () {
  const e = waitForAnyInventoryitemroleUpdated();
  block(matchDeleteInventoryitemrole(e.id, ANY), function () {
    verifyInventoryitemroleUpdated(e.id);
  });
});

bthread("Inventoryitemrole delete verification", function () {
  const e = waitForAnyInventoryitemroleDeleted();
  block(matchAddInventoryitemrole(e.id, ANY), function () {
    verifyInventoryitemroleDoesNotExist(e.id);
  });
});

bthread("Inventoryitemtemplate create verification", function () {
  const e = waitForAnyInventoryitemtemplateAdded();
  block(matchDeleteInventoryitemtemplate(e.id, ANY), function () {
    verifyInventoryitemtemplateExists(e.id);
  });
});

bthread("Inventoryitemtemplate update verification", function () {
  const e = waitForAnyInventoryitemtemplateUpdated();
  block(matchDeleteInventoryitemtemplate(e.id, ANY), function () {
    verifyInventoryitemtemplateUpdated(e.id);
  });
});

bthread("Inventoryitemtemplate delete verification", function () {
  const e = waitForAnyInventoryitemtemplateDeleted();
  block(matchAddInventoryitemtemplate(e.id, ANY), function () {
    verifyInventoryitemtemplateDoesNotExist(e.id);
  });
});

bthread("Ipaddress create verification", function () {
  const e = waitForAnyIpaddressAdded();
  block(matchDeleteIpaddress(e.id, ANY), function () {
    verifyIpaddressExists(e.id);
  });
});

bthread("Ipaddress update verification", function () {
  const e = waitForAnyIpaddressUpdated();
  block(matchDeleteIpaddress(e.id, ANY), function () {
    verifyIpaddressUpdated(e.id);
  });
});

bthread("Ipaddress delete verification", function () {
  const e = waitForAnyIpaddressDeleted();
  block(matchAddIpaddress(e.id, ANY), function () {
    verifyIpaddressDoesNotExist(e.id);
  });
});

bthread("Ipam create verification", function () {
  const e = waitForAnyIpamAdded();
  block(matchDeleteIpam(e.id, ANY), function () {
    verifyIpamExists(e.id);
  });
});

bthread("Ipam update verification", function () {
  const e = waitForAnyIpamUpdated();
  block(matchDeleteIpam(e.id, ANY), function () {
    verifyIpamUpdated(e.id);
  });
});

bthread("Ipam delete verification", function () {
  const e = waitForAnyIpamDeleted();
  block(matchAddIpam(e.id, ANY), function () {
    verifyIpamDoesNotExist(e.id);
  });
});

bthread("Iprange create verification", function () {
  const e = waitForAnyIprangeAdded();
  block(matchDeleteIprange(e.id, ANY), function () {
    verifyIprangeExists(e.id);
  });
});

bthread("Iprange update verification", function () {
  const e = waitForAnyIprangeUpdated();
  block(matchDeleteIprange(e.id, ANY), function () {
    verifyIprangeUpdated(e.id);
  });
});

bthread("Iprange delete verification", function () {
  const e = waitForAnyIprangeDeleted();
  block(matchAddIprange(e.id, ANY), function () {
    verifyIprangeDoesNotExist(e.id);
  });
});

bthread("Ipsecpolicy create verification", function () {
  const e = waitForAnyIpsecpolicyAdded();
  block(matchDeleteIpsecpolicy(e.id, ANY), function () {
    verifyIpsecpolicyExists(e.id);
  });
});

bthread("Ipsecpolicy update verification", function () {
  const e = waitForAnyIpsecpolicyUpdated();
  block(matchDeleteIpsecpolicy(e.id, ANY), function () {
    verifyIpsecpolicyUpdated(e.id);
  });
});

bthread("Ipsecpolicy delete verification", function () {
  const e = waitForAnyIpsecpolicyDeleted();
  block(matchAddIpsecpolicy(e.id, ANY), function () {
    verifyIpsecpolicyDoesNotExist(e.id);
  });
});

bthread("Ipsecprofile create verification", function () {
  const e = waitForAnyIpsecprofileAdded();
  block(matchDeleteIpsecprofile(e.id, ANY), function () {
    verifyIpsecprofileExists(e.id);
  });
});

bthread("Ipsecprofile update verification", function () {
  const e = waitForAnyIpsecprofileUpdated();
  block(matchDeleteIpsecprofile(e.id, ANY), function () {
    verifyIpsecprofileUpdated(e.id);
  });
});

bthread("Ipsecprofile delete verification", function () {
  const e = waitForAnyIpsecprofileDeleted();
  block(matchAddIpsecprofile(e.id, ANY), function () {
    verifyIpsecprofileDoesNotExist(e.id);
  });
});

bthread("Ipsecproposal create verification", function () {
  const e = waitForAnyIpsecproposalAdded();
  block(matchDeleteIpsecproposal(e.id, ANY), function () {
    verifyIpsecproposalExists(e.id);
  });
});

bthread("Ipsecproposal update verification", function () {
  const e = waitForAnyIpsecproposalUpdated();
  block(matchDeleteIpsecproposal(e.id, ANY), function () {
    verifyIpsecproposalUpdated(e.id);
  });
});

bthread("Ipsecproposal delete verification", function () {
  const e = waitForAnyIpsecproposalDeleted();
  block(matchAddIpsecproposal(e.id, ANY), function () {
    verifyIpsecproposalDoesNotExist(e.id);
  });
});

bthread("Job create verification", function () {
  const e = waitForAnyJobAdded();
  block(matchDeleteJob(e.id, ANY), function () {
    verifyJobExists(e.id);
  });
});

bthread("Job update verification", function () {
  const e = waitForAnyJobUpdated();
  block(matchDeleteJob(e.id, ANY), function () {
    verifyJobUpdated(e.id);
  });
});

bthread("Job delete verification", function () {
  const e = waitForAnyJobDeleted();
  block(matchAddJob(e.id, ANY), function () {
    verifyJobDoesNotExist(e.id);
  });
});

bthread("Journalentry create verification", function () {
  const e = waitForAnyJournalentryAdded();
  block(matchDeleteJournalentry(e.id, ANY), function () {
    verifyJournalentryExists(e.id);
  });
});

bthread("Journalentry update verification", function () {
  const e = waitForAnyJournalentryUpdated();
  block(matchDeleteJournalentry(e.id, ANY), function () {
    verifyJournalentryUpdated(e.id);
  });
});

bthread("Journalentry delete verification", function () {
  const e = waitForAnyJournalentryDeleted();
  block(matchAddJournalentry(e.id, ANY), function () {
    verifyJournalentryDoesNotExist(e.id);
  });
});

bthread("L2vpn create verification", function () {
  const e = waitForAnyL2vpnAdded();
  block(matchDeleteL2vpn(e.id, ANY), function () {
    verifyL2vpnExists(e.id);
  });
});

bthread("L2vpn update verification", function () {
  const e = waitForAnyL2vpnUpdated();
  block(matchDeleteL2vpn(e.id, ANY), function () {
    verifyL2vpnUpdated(e.id);
  });
});

bthread("L2vpn delete verification", function () {
  const e = waitForAnyL2vpnDeleted();
  block(matchAddL2vpn(e.id, ANY), function () {
    verifyL2vpnDoesNotExist(e.id);
  });
});

bthread("L2vpntermination create verification", function () {
  const e = waitForAnyL2vpnterminationAdded();
  block(matchDeleteL2vpntermination(e.id, ANY), function () {
    verifyL2vpnterminationExists(e.id);
  });
});

bthread("L2vpntermination update verification", function () {
  const e = waitForAnyL2vpnterminationUpdated();
  block(matchDeleteL2vpntermination(e.id, ANY), function () {
    verifyL2vpnterminationUpdated(e.id);
  });
});

bthread("L2vpntermination delete verification", function () {
  const e = waitForAnyL2vpnterminationDeleted();
  block(matchAddL2vpntermination(e.id, ANY), function () {
    verifyL2vpnterminationDoesNotExist(e.id);
  });
});

bthread("Location create verification", function () {
  const e = waitForAnyLocationAdded();
  block(matchDeleteLocation(e.id, ANY), function () {
    verifyLocationExists(e.id);
  });
});

bthread("Location update verification", function () {
  const e = waitForAnyLocationUpdated();
  block(matchDeleteLocation(e.id, ANY), function () {
    verifyLocationUpdated(e.id);
  });
});

bthread("Location delete verification", function () {
  const e = waitForAnyLocationDeleted();
  block(matchAddLocation(e.id, ANY), function () {
    verifyLocationDoesNotExist(e.id);
  });
});

bthread("Macaddress create verification", function () {
  const e = waitForAnyMacaddressAdded();
  block(matchDeleteMacaddress(e.id, ANY), function () {
    verifyMacaddressExists(e.id);
  });
});

bthread("Macaddress update verification", function () {
  const e = waitForAnyMacaddressUpdated();
  block(matchDeleteMacaddress(e.id, ANY), function () {
    verifyMacaddressUpdated(e.id);
  });
});

bthread("Macaddress delete verification", function () {
  const e = waitForAnyMacaddressDeleted();
  block(matchAddMacaddress(e.id, ANY), function () {
    verifyMacaddressDoesNotExist(e.id);
  });
});

bthread("Manufacturer create verification", function () {
  const e = waitForAnyManufacturerAdded();
  block(matchDeleteManufacturer(e.id, ANY), function () {
    verifyManufacturerExists(e.id);
  });
});

bthread("Manufacturer update verification", function () {
  const e = waitForAnyManufacturerUpdated();
  block(matchDeleteManufacturer(e.id, ANY), function () {
    verifyManufacturerUpdated(e.id);
  });
});

bthread("Manufacturer delete verification", function () {
  const e = waitForAnyManufacturerDeleted();
  block(matchAddManufacturer(e.id, ANY), function () {
    verifyManufacturerDoesNotExist(e.id);
  });
});

bthread("Module create verification", function () {
  const e = waitForAnyModuleAdded();
  block(matchDeleteModule(e.id, ANY), function () {
    verifyModuleExists(e.id);
  });
});

bthread("Module update verification", function () {
  const e = waitForAnyModuleUpdated();
  block(matchDeleteModule(e.id, ANY), function () {
    verifyModuleUpdated(e.id);
  });
});

bthread("Module delete verification", function () {
  const e = waitForAnyModuleDeleted();
  block(matchAddModule(e.id, ANY), function () {
    verifyModuleDoesNotExist(e.id);
  });
});

bthread("Modulebay create verification", function () {
  const e = waitForAnyModulebayAdded();
  block(matchDeleteModulebay(e.id, ANY), function () {
    verifyModulebayExists(e.id);
  });
});

bthread("Modulebay update verification", function () {
  const e = waitForAnyModulebayUpdated();
  block(matchDeleteModulebay(e.id, ANY), function () {
    verifyModulebayUpdated(e.id);
  });
});

bthread("Modulebay delete verification", function () {
  const e = waitForAnyModulebayDeleted();
  block(matchAddModulebay(e.id, ANY), function () {
    verifyModulebayDoesNotExist(e.id);
  });
});

bthread("Modulebaytemplate create verification", function () {
  const e = waitForAnyModulebaytemplateAdded();
  block(matchDeleteModulebaytemplate(e.id, ANY), function () {
    verifyModulebaytemplateExists(e.id);
  });
});

bthread("Modulebaytemplate update verification", function () {
  const e = waitForAnyModulebaytemplateUpdated();
  block(matchDeleteModulebaytemplate(e.id, ANY), function () {
    verifyModulebaytemplateUpdated(e.id);
  });
});

bthread("Modulebaytemplate delete verification", function () {
  const e = waitForAnyModulebaytemplateDeleted();
  block(matchAddModulebaytemplate(e.id, ANY), function () {
    verifyModulebaytemplateDoesNotExist(e.id);
  });
});

bthread("Moduletype create verification", function () {
  const e = waitForAnyModuletypeAdded();
  block(matchDeleteModuletype(e.id, ANY), function () {
    verifyModuletypeExists(e.id);
  });
});

bthread("Moduletype update verification", function () {
  const e = waitForAnyModuletypeUpdated();
  block(matchDeleteModuletype(e.id, ANY), function () {
    verifyModuletypeUpdated(e.id);
  });
});

bthread("Moduletype delete verification", function () {
  const e = waitForAnyModuletypeDeleted();
  block(matchAddModuletype(e.id, ANY), function () {
    verifyModuletypeDoesNotExist(e.id);
  });
});

bthread("Moduletypeprofile create verification", function () {
  const e = waitForAnyModuletypeprofileAdded();
  block(matchDeleteModuletypeprofile(e.id, ANY), function () {
    verifyModuletypeprofileExists(e.id);
  });
});

bthread("Moduletypeprofile update verification", function () {
  const e = waitForAnyModuletypeprofileUpdated();
  block(matchDeleteModuletypeprofile(e.id, ANY), function () {
    verifyModuletypeprofileUpdated(e.id);
  });
});

bthread("Moduletypeprofile delete verification", function () {
  const e = waitForAnyModuletypeprofileDeleted();
  block(matchAddModuletypeprofile(e.id, ANY), function () {
    verifyModuletypeprofileDoesNotExist(e.id);
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

bthread("Notificationgroup create verification", function () {
  const e = waitForAnyNotificationgroupAdded();
  block(matchDeleteNotificationgroup(e.id, ANY), function () {
    verifyNotificationgroupExists(e.id);
  });
});

bthread("Notificationgroup update verification", function () {
  const e = waitForAnyNotificationgroupUpdated();
  block(matchDeleteNotificationgroup(e.id, ANY), function () {
    verifyNotificationgroupUpdated(e.id);
  });
});

bthread("Notificationgroup delete verification", function () {
  const e = waitForAnyNotificationgroupDeleted();
  block(matchAddNotificationgroup(e.id, ANY), function () {
    verifyNotificationgroupDoesNotExist(e.id);
  });
});

bthread("Objectchange create verification", function () {
  const e = waitForAnyObjectchangeAdded();
  block(matchDeleteObjectchange(e.id, ANY), function () {
    verifyObjectchangeExists(e.id);
  });
});

bthread("Objectchange update verification", function () {
  const e = waitForAnyObjectchangeUpdated();
  block(matchDeleteObjectchange(e.id, ANY), function () {
    verifyObjectchangeUpdated(e.id);
  });
});

bthread("Objectchange delete verification", function () {
  const e = waitForAnyObjectchangeDeleted();
  block(matchAddObjectchange(e.id, ANY), function () {
    verifyObjectchangeDoesNotExist(e.id);
  });
});

bthread("Objecttype create verification", function () {
  const e = waitForAnyObjecttypeAdded();
  block(matchDeleteObjecttype(e.id, ANY), function () {
    verifyObjecttypeExists(e.id);
  });
});

bthread("Objecttype update verification", function () {
  const e = waitForAnyObjecttypeUpdated();
  block(matchDeleteObjecttype(e.id, ANY), function () {
    verifyObjecttypeUpdated(e.id);
  });
});

bthread("Objecttype delete verification", function () {
  const e = waitForAnyObjecttypeDeleted();
  block(matchAddObjecttype(e.id, ANY), function () {
    verifyObjecttypeDoesNotExist(e.id);
  });
});

bthread("Path create verification", function () {
  const e = waitForAnyPathAdded();
  block(matchDeletePath(e.id, ANY), function () {
    verifyPathExists(e.id);
  });
});

bthread("Path update verification", function () {
  const e = waitForAnyPathUpdated();
  block(matchDeletePath(e.id, ANY), function () {
    verifyPathUpdated(e.id);
  });
});

bthread("Path delete verification", function () {
  const e = waitForAnyPathDeleted();
  block(matchAddPath(e.id, ANY), function () {
    verifyPathDoesNotExist(e.id);
  });
});

bthread("Permission create verification", function () {
  const e = waitForAnyPermissionAdded();
  block(matchDeletePermission(e.id, ANY), function () {
    verifyPermissionExists(e.id);
  });
});

bthread("Permission update verification", function () {
  const e = waitForAnyPermissionUpdated();
  block(matchDeletePermission(e.id, ANY), function () {
    verifyPermissionUpdated(e.id);
  });
});

bthread("Permission delete verification", function () {
  const e = waitForAnyPermissionDeleted();
  block(matchAddPermission(e.id, ANY), function () {
    verifyPermissionDoesNotExist(e.id);
  });
});

bthread("Platform create verification", function () {
  const e = waitForAnyPlatformAdded();
  block(matchDeletePlatform(e.id, ANY), function () {
    verifyPlatformExists(e.id);
  });
});

bthread("Platform update verification", function () {
  const e = waitForAnyPlatformUpdated();
  block(matchDeletePlatform(e.id, ANY), function () {
    verifyPlatformUpdated(e.id);
  });
});

bthread("Platform delete verification", function () {
  const e = waitForAnyPlatformDeleted();
  block(matchAddPlatform(e.id, ANY), function () {
    verifyPlatformDoesNotExist(e.id);
  });
});

bthread("Powerfeed create verification", function () {
  const e = waitForAnyPowerfeedAdded();
  block(matchDeletePowerfeed(e.id, ANY), function () {
    verifyPowerfeedExists(e.id);
  });
});

bthread("Powerfeed update verification", function () {
  const e = waitForAnyPowerfeedUpdated();
  block(matchDeletePowerfeed(e.id, ANY), function () {
    verifyPowerfeedUpdated(e.id);
  });
});

bthread("Powerfeed delete verification", function () {
  const e = waitForAnyPowerfeedDeleted();
  block(matchAddPowerfeed(e.id, ANY), function () {
    verifyPowerfeedDoesNotExist(e.id);
  });
});

bthread("Poweroutlet create verification", function () {
  const e = waitForAnyPoweroutletAdded();
  block(matchDeletePoweroutlet(e.id, ANY), function () {
    verifyPoweroutletExists(e.id);
  });
});

bthread("Poweroutlet update verification", function () {
  const e = waitForAnyPoweroutletUpdated();
  block(matchDeletePoweroutlet(e.id, ANY), function () {
    verifyPoweroutletUpdated(e.id);
  });
});

bthread("Poweroutlet delete verification", function () {
  const e = waitForAnyPoweroutletDeleted();
  block(matchAddPoweroutlet(e.id, ANY), function () {
    verifyPoweroutletDoesNotExist(e.id);
  });
});

bthread("Poweroutlettemplate create verification", function () {
  const e = waitForAnyPoweroutlettemplateAdded();
  block(matchDeletePoweroutlettemplate(e.id, ANY), function () {
    verifyPoweroutlettemplateExists(e.id);
  });
});

bthread("Poweroutlettemplate update verification", function () {
  const e = waitForAnyPoweroutlettemplateUpdated();
  block(matchDeletePoweroutlettemplate(e.id, ANY), function () {
    verifyPoweroutlettemplateUpdated(e.id);
  });
});

bthread("Poweroutlettemplate delete verification", function () {
  const e = waitForAnyPoweroutlettemplateDeleted();
  block(matchAddPoweroutlettemplate(e.id, ANY), function () {
    verifyPoweroutlettemplateDoesNotExist(e.id);
  });
});

bthread("Powerpanel create verification", function () {
  const e = waitForAnyPowerpanelAdded();
  block(matchDeletePowerpanel(e.id, ANY), function () {
    verifyPowerpanelExists(e.id);
  });
});

bthread("Powerpanel update verification", function () {
  const e = waitForAnyPowerpanelUpdated();
  block(matchDeletePowerpanel(e.id, ANY), function () {
    verifyPowerpanelUpdated(e.id);
  });
});

bthread("Powerpanel delete verification", function () {
  const e = waitForAnyPowerpanelDeleted();
  block(matchAddPowerpanel(e.id, ANY), function () {
    verifyPowerpanelDoesNotExist(e.id);
  });
});

bthread("Powerport create verification", function () {
  const e = waitForAnyPowerportAdded();
  block(matchDeletePowerport(e.id, ANY), function () {
    verifyPowerportExists(e.id);
  });
});

bthread("Powerport update verification", function () {
  const e = waitForAnyPowerportUpdated();
  block(matchDeletePowerport(e.id, ANY), function () {
    verifyPowerportUpdated(e.id);
  });
});

bthread("Powerport delete verification", function () {
  const e = waitForAnyPowerportDeleted();
  block(matchAddPowerport(e.id, ANY), function () {
    verifyPowerportDoesNotExist(e.id);
  });
});

bthread("Powerporttemplate create verification", function () {
  const e = waitForAnyPowerporttemplateAdded();
  block(matchDeletePowerporttemplate(e.id, ANY), function () {
    verifyPowerporttemplateExists(e.id);
  });
});

bthread("Powerporttemplate update verification", function () {
  const e = waitForAnyPowerporttemplateUpdated();
  block(matchDeletePowerporttemplate(e.id, ANY), function () {
    verifyPowerporttemplateUpdated(e.id);
  });
});

bthread("Powerporttemplate delete verification", function () {
  const e = waitForAnyPowerporttemplateDeleted();
  block(matchAddPowerporttemplate(e.id, ANY), function () {
    verifyPowerporttemplateDoesNotExist(e.id);
  });
});

bthread("Prefixe create verification", function () {
  const e = waitForAnyPrefixeAdded();
  block(matchDeletePrefixe(e.id, ANY), function () {
    verifyPrefixeExists(e.id);
  });
});

bthread("Prefixe update verification", function () {
  const e = waitForAnyPrefixeUpdated();
  block(matchDeletePrefixe(e.id, ANY), function () {
    verifyPrefixeUpdated(e.id);
  });
});

bthread("Prefixe delete verification", function () {
  const e = waitForAnyPrefixeDeleted();
  block(matchAddPrefixe(e.id, ANY), function () {
    verifyPrefixeDoesNotExist(e.id);
  });
});

bthread("Provider create verification", function () {
  const e = waitForAnyProviderAdded();
  block(matchDeleteProvider(e.id, ANY), function () {
    verifyProviderExists(e.id);
  });
});

bthread("Provider update verification", function () {
  const e = waitForAnyProviderUpdated();
  block(matchDeleteProvider(e.id, ANY), function () {
    verifyProviderUpdated(e.id);
  });
});

bthread("Provider delete verification", function () {
  const e = waitForAnyProviderDeleted();
  block(matchAddProvider(e.id, ANY), function () {
    verifyProviderDoesNotExist(e.id);
  });
});

bthread("Provideraccount create verification", function () {
  const e = waitForAnyProvideraccountAdded();
  block(matchDeleteProvideraccount(e.id, ANY), function () {
    verifyProvideraccountExists(e.id);
  });
});

bthread("Provideraccount update verification", function () {
  const e = waitForAnyProvideraccountUpdated();
  block(matchDeleteProvideraccount(e.id, ANY), function () {
    verifyProvideraccountUpdated(e.id);
  });
});

bthread("Provideraccount delete verification", function () {
  const e = waitForAnyProvideraccountDeleted();
  block(matchAddProvideraccount(e.id, ANY), function () {
    verifyProvideraccountDoesNotExist(e.id);
  });
});

bthread("Providernetwork create verification", function () {
  const e = waitForAnyProvidernetworkAdded();
  block(matchDeleteProvidernetwork(e.id, ANY), function () {
    verifyProvidernetworkExists(e.id);
  });
});

bthread("Providernetwork update verification", function () {
  const e = waitForAnyProvidernetworkUpdated();
  block(matchDeleteProvidernetwork(e.id, ANY), function () {
    verifyProvidernetworkUpdated(e.id);
  });
});

bthread("Providernetwork delete verification", function () {
  const e = waitForAnyProvidernetworkDeleted();
  block(matchAddProvidernetwork(e.id, ANY), function () {
    verifyProvidernetworkDoesNotExist(e.id);
  });
});

bthread("Provision create verification", function () {
  const e = waitForAnyProvisionAdded();
  block(matchDeleteProvision(e.id, ANY), function () {
    verifyProvisionExists(e.id);
  });
});

bthread("Provision update verification", function () {
  const e = waitForAnyProvisionUpdated();
  block(matchDeleteProvision(e.id, ANY), function () {
    verifyProvisionUpdated(e.id);
  });
});

bthread("Provision delete verification", function () {
  const e = waitForAnyProvisionDeleted();
  block(matchAddProvision(e.id, ANY), function () {
    verifyProvisionDoesNotExist(e.id);
  });
});

bthread("Rack create verification", function () {
  const e = waitForAnyRackAdded();
  block(matchDeleteRack(e.id, ANY), function () {
    verifyRackExists(e.id);
  });
});

bthread("Rack update verification", function () {
  const e = waitForAnyRackUpdated();
  block(matchDeleteRack(e.id, ANY), function () {
    verifyRackUpdated(e.id);
  });
});

bthread("Rack delete verification", function () {
  const e = waitForAnyRackDeleted();
  block(matchAddRack(e.id, ANY), function () {
    verifyRackDoesNotExist(e.id);
  });
});

bthread("Rackreservation create verification", function () {
  const e = waitForAnyRackreservationAdded();
  block(matchDeleteRackreservation(e.id, ANY), function () {
    verifyRackreservationExists(e.id);
  });
});

bthread("Rackreservation update verification", function () {
  const e = waitForAnyRackreservationUpdated();
  block(matchDeleteRackreservation(e.id, ANY), function () {
    verifyRackreservationUpdated(e.id);
  });
});

bthread("Rackreservation delete verification", function () {
  const e = waitForAnyRackreservationDeleted();
  block(matchAddRackreservation(e.id, ANY), function () {
    verifyRackreservationDoesNotExist(e.id);
  });
});

bthread("Rackrole create verification", function () {
  const e = waitForAnyRackroleAdded();
  block(matchDeleteRackrole(e.id, ANY), function () {
    verifyRackroleExists(e.id);
  });
});

bthread("Rackrole update verification", function () {
  const e = waitForAnyRackroleUpdated();
  block(matchDeleteRackrole(e.id, ANY), function () {
    verifyRackroleUpdated(e.id);
  });
});

bthread("Rackrole delete verification", function () {
  const e = waitForAnyRackroleDeleted();
  block(matchAddRackrole(e.id, ANY), function () {
    verifyRackroleDoesNotExist(e.id);
  });
});

bthread("Racktype create verification", function () {
  const e = waitForAnyRacktypeAdded();
  block(matchDeleteRacktype(e.id, ANY), function () {
    verifyRacktypeExists(e.id);
  });
});

bthread("Racktype update verification", function () {
  const e = waitForAnyRacktypeUpdated();
  block(matchDeleteRacktype(e.id, ANY), function () {
    verifyRacktypeUpdated(e.id);
  });
});

bthread("Racktype delete verification", function () {
  const e = waitForAnyRacktypeDeleted();
  block(matchAddRacktype(e.id, ANY), function () {
    verifyRacktypeDoesNotExist(e.id);
  });
});

bthread("Rearport create verification", function () {
  const e = waitForAnyRearportAdded();
  block(matchDeleteRearport(e.id, ANY), function () {
    verifyRearportExists(e.id);
  });
});

bthread("Rearport update verification", function () {
  const e = waitForAnyRearportUpdated();
  block(matchDeleteRearport(e.id, ANY), function () {
    verifyRearportUpdated(e.id);
  });
});

bthread("Rearport delete verification", function () {
  const e = waitForAnyRearportDeleted();
  block(matchAddRearport(e.id, ANY), function () {
    verifyRearportDoesNotExist(e.id);
  });
});

bthread("Rearporttemplate create verification", function () {
  const e = waitForAnyRearporttemplateAdded();
  block(matchDeleteRearporttemplate(e.id, ANY), function () {
    verifyRearporttemplateExists(e.id);
  });
});

bthread("Rearporttemplate update verification", function () {
  const e = waitForAnyRearporttemplateUpdated();
  block(matchDeleteRearporttemplate(e.id, ANY), function () {
    verifyRearporttemplateUpdated(e.id);
  });
});

bthread("Rearporttemplate delete verification", function () {
  const e = waitForAnyRearporttemplateDeleted();
  block(matchAddRearporttemplate(e.id, ANY), function () {
    verifyRearporttemplateDoesNotExist(e.id);
  });
});

bthread("Region create verification", function () {
  const e = waitForAnyRegionAdded();
  block(matchDeleteRegion(e.id, ANY), function () {
    verifyRegionExists(e.id);
  });
});

bthread("Region update verification", function () {
  const e = waitForAnyRegionUpdated();
  block(matchDeleteRegion(e.id, ANY), function () {
    verifyRegionUpdated(e.id);
  });
});

bthread("Region delete verification", function () {
  const e = waitForAnyRegionDeleted();
  block(matchAddRegion(e.id, ANY), function () {
    verifyRegionDoesNotExist(e.id);
  });
});

bthread("Render create verification", function () {
  const e = waitForAnyRenderAdded();
  block(matchDeleteRender(e.id, ANY), function () {
    verifyRenderExists(e.id);
  });
});

bthread("Render update verification", function () {
  const e = waitForAnyRenderUpdated();
  block(matchDeleteRender(e.id, ANY), function () {
    verifyRenderUpdated(e.id);
  });
});

bthread("Render delete verification", function () {
  const e = waitForAnyRenderDeleted();
  block(matchAddRender(e.id, ANY), function () {
    verifyRenderDoesNotExist(e.id);
  });
});

bthread("Renderconfig create verification", function () {
  const e = waitForAnyRenderconfigAdded();
  block(matchDeleteRenderconfig(e.id, ANY), function () {
    verifyRenderconfigExists(e.id);
  });
});

bthread("Renderconfig update verification", function () {
  const e = waitForAnyRenderconfigUpdated();
  block(matchDeleteRenderconfig(e.id, ANY), function () {
    verifyRenderconfigUpdated(e.id);
  });
});

bthread("Renderconfig delete verification", function () {
  const e = waitForAnyRenderconfigDeleted();
  block(matchAddRenderconfig(e.id, ANY), function () {
    verifyRenderconfigDoesNotExist(e.id);
  });
});

bthread("Requeue create verification", function () {
  const e = waitForAnyRequeueAdded();
  block(matchDeleteRequeue(e.id, ANY), function () {
    verifyRequeueExists(e.id);
  });
});

bthread("Requeue update verification", function () {
  const e = waitForAnyRequeueUpdated();
  block(matchDeleteRequeue(e.id, ANY), function () {
    verifyRequeueUpdated(e.id);
  });
});

bthread("Requeue delete verification", function () {
  const e = waitForAnyRequeueDeleted();
  block(matchAddRequeue(e.id, ANY), function () {
    verifyRequeueDoesNotExist(e.id);
  });
});

bthread("Rir create verification", function () {
  const e = waitForAnyRirAdded();
  block(matchDeleteRir(e.id, ANY), function () {
    verifyRirExists(e.id);
  });
});

bthread("Rir update verification", function () {
  const e = waitForAnyRirUpdated();
  block(matchDeleteRir(e.id, ANY), function () {
    verifyRirUpdated(e.id);
  });
});

bthread("Rir delete verification", function () {
  const e = waitForAnyRirDeleted();
  block(matchAddRir(e.id, ANY), function () {
    verifyRirDoesNotExist(e.id);
  });
});

bthread("Role create verification", function () {
  const e = waitForAnyRoleAdded();
  block(matchDeleteRole(e.id, ANY), function () {
    verifyRoleExists(e.id);
  });
});

bthread("Role update verification", function () {
  const e = waitForAnyRoleUpdated();
  block(matchDeleteRole(e.id, ANY), function () {
    verifyRoleUpdated(e.id);
  });
});

bthread("Role delete verification", function () {
  const e = waitForAnyRoleDeleted();
  block(matchAddRole(e.id, ANY), function () {
    verifyRoleDoesNotExist(e.id);
  });
});

bthread("Routetarget create verification", function () {
  const e = waitForAnyRoutetargetAdded();
  block(matchDeleteRoutetarget(e.id, ANY), function () {
    verifyRoutetargetExists(e.id);
  });
});

bthread("Routetarget update verification", function () {
  const e = waitForAnyRoutetargetUpdated();
  block(matchDeleteRoutetarget(e.id, ANY), function () {
    verifyRoutetargetUpdated(e.id);
  });
});

bthread("Routetarget delete verification", function () {
  const e = waitForAnyRoutetargetDeleted();
  block(matchAddRoutetarget(e.id, ANY), function () {
    verifyRoutetargetDoesNotExist(e.id);
  });
});

bthread("Savedfilter create verification", function () {
  const e = waitForAnySavedfilterAdded();
  block(matchDeleteSavedfilter(e.id, ANY), function () {
    verifySavedfilterExists(e.id);
  });
});

bthread("Savedfilter update verification", function () {
  const e = waitForAnySavedfilterUpdated();
  block(matchDeleteSavedfilter(e.id, ANY), function () {
    verifySavedfilterUpdated(e.id);
  });
});

bthread("Savedfilter delete verification", function () {
  const e = waitForAnySavedfilterDeleted();
  block(matchAddSavedfilter(e.id, ANY), function () {
    verifySavedfilterDoesNotExist(e.id);
  });
});

bthread("Schema create verification", function () {
  const e = waitForAnySchemaAdded();
  block(matchDeleteSchema(e.id, ANY), function () {
    verifySchemaExists(e.id);
  });
});

bthread("Schema update verification", function () {
  const e = waitForAnySchemaUpdated();
  block(matchDeleteSchema(e.id, ANY), function () {
    verifySchemaUpdated(e.id);
  });
});

bthread("Schema delete verification", function () {
  const e = waitForAnySchemaDeleted();
  block(matchAddSchema(e.id, ANY), function () {
    verifySchemaDoesNotExist(e.id);
  });
});

bthread("Script create verification", function () {
  const e = waitForAnyScriptAdded();
  block(matchDeleteScript(e.id, ANY), function () {
    verifyScriptExists(e.id);
  });
});

bthread("Script update verification", function () {
  const e = waitForAnyScriptUpdated();
  block(matchDeleteScript(e.id, ANY), function () {
    verifyScriptUpdated(e.id);
  });
});

bthread("Script delete verification", function () {
  const e = waitForAnyScriptDeleted();
  block(matchAddScript(e.id, ANY), function () {
    verifyScriptDoesNotExist(e.id);
  });
});

bthread("Service create verification", function () {
  const e = waitForAnyServiceAdded();
  block(matchDeleteService(e.id, ANY), function () {
    verifyServiceExists(e.id);
  });
});

bthread("Service update verification", function () {
  const e = waitForAnyServiceUpdated();
  block(matchDeleteService(e.id, ANY), function () {
    verifyServiceUpdated(e.id);
  });
});

bthread("Service delete verification", function () {
  const e = waitForAnyServiceDeleted();
  block(matchAddService(e.id, ANY), function () {
    verifyServiceDoesNotExist(e.id);
  });
});

bthread("Servicetemplate create verification", function () {
  const e = waitForAnyServicetemplateAdded();
  block(matchDeleteServicetemplate(e.id, ANY), function () {
    verifyServicetemplateExists(e.id);
  });
});

bthread("Servicetemplate update verification", function () {
  const e = waitForAnyServicetemplateUpdated();
  block(matchDeleteServicetemplate(e.id, ANY), function () {
    verifyServicetemplateUpdated(e.id);
  });
});

bthread("Servicetemplate delete verification", function () {
  const e = waitForAnyServicetemplateDeleted();
  block(matchAddServicetemplate(e.id, ANY), function () {
    verifyServicetemplateDoesNotExist(e.id);
  });
});

bthread("Site create verification", function () {
  const e = waitForAnySiteAdded();
  block(matchDeleteSite(e.id, ANY), function () {
    verifySiteExists(e.id);
  });
});

bthread("Site update verification", function () {
  const e = waitForAnySiteUpdated();
  block(matchDeleteSite(e.id, ANY), function () {
    verifySiteUpdated(e.id);
  });
});

bthread("Site delete verification", function () {
  const e = waitForAnySiteDeleted();
  block(matchAddSite(e.id, ANY), function () {
    verifySiteDoesNotExist(e.id);
  });
});

bthread("Sitegroup create verification", function () {
  const e = waitForAnySitegroupAdded();
  block(matchDeleteSitegroup(e.id, ANY), function () {
    verifySitegroupExists(e.id);
  });
});

bthread("Sitegroup update verification", function () {
  const e = waitForAnySitegroupUpdated();
  block(matchDeleteSitegroup(e.id, ANY), function () {
    verifySitegroupUpdated(e.id);
  });
});

bthread("Sitegroup delete verification", function () {
  const e = waitForAnySitegroupDeleted();
  block(matchAddSitegroup(e.id, ANY), function () {
    verifySitegroupDoesNotExist(e.id);
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

bthread("Stop create verification", function () {
  const e = waitForAnyStopAdded();
  block(matchDeleteStop(e.id, ANY), function () {
    verifyStopExists(e.id);
  });
});

bthread("Stop update verification", function () {
  const e = waitForAnyStopUpdated();
  block(matchDeleteStop(e.id, ANY), function () {
    verifyStopUpdated(e.id);
  });
});

bthread("Stop delete verification", function () {
  const e = waitForAnyStopDeleted();
  block(matchAddStop(e.id, ANY), function () {
    verifyStopDoesNotExist(e.id);
  });
});

bthread("Subscription create verification", function () {
  const e = waitForAnySubscriptionAdded();
  block(matchDeleteSubscription(e.id, ANY), function () {
    verifySubscriptionExists(e.id);
  });
});

bthread("Subscription update verification", function () {
  const e = waitForAnySubscriptionUpdated();
  block(matchDeleteSubscription(e.id, ANY), function () {
    verifySubscriptionUpdated(e.id);
  });
});

bthread("Subscription delete verification", function () {
  const e = waitForAnySubscriptionDeleted();
  block(matchAddSubscription(e.id, ANY), function () {
    verifySubscriptionDoesNotExist(e.id);
  });
});

bthread("Sync create verification", function () {
  const e = waitForAnySyncAdded();
  block(matchDeleteSync(e.id, ANY), function () {
    verifySyncExists(e.id);
  });
});

bthread("Sync update verification", function () {
  const e = waitForAnySyncUpdated();
  block(matchDeleteSync(e.id, ANY), function () {
    verifySyncUpdated(e.id);
  });
});

bthread("Sync delete verification", function () {
  const e = waitForAnySyncDeleted();
  block(matchAddSync(e.id, ANY), function () {
    verifySyncDoesNotExist(e.id);
  });
});

bthread("Tableconfig create verification", function () {
  const e = waitForAnyTableconfigAdded();
  block(matchDeleteTableconfig(e.id, ANY), function () {
    verifyTableconfigExists(e.id);
  });
});

bthread("Tableconfig update verification", function () {
  const e = waitForAnyTableconfigUpdated();
  block(matchDeleteTableconfig(e.id, ANY), function () {
    verifyTableconfigUpdated(e.id);
  });
});

bthread("Tableconfig delete verification", function () {
  const e = waitForAnyTableconfigDeleted();
  block(matchAddTableconfig(e.id, ANY), function () {
    verifyTableconfigDoesNotExist(e.id);
  });
});

bthread("Tag create verification", function () {
  const e = waitForAnyTagAdded();
  block(matchDeleteTag(e.id, ANY), function () {
    verifyTagExists(e.id);
  });
});

bthread("Tag update verification", function () {
  const e = waitForAnyTagUpdated();
  block(matchDeleteTag(e.id, ANY), function () {
    verifyTagUpdated(e.id);
  });
});

bthread("Tag delete verification", function () {
  const e = waitForAnyTagDeleted();
  block(matchAddTag(e.id, ANY), function () {
    verifyTagDoesNotExist(e.id);
  });
});

bthread("Taggedobject create verification", function () {
  const e = waitForAnyTaggedobjectAdded();
  block(matchDeleteTaggedobject(e.id, ANY), function () {
    verifyTaggedobjectExists(e.id);
  });
});

bthread("Taggedobject update verification", function () {
  const e = waitForAnyTaggedobjectUpdated();
  block(matchDeleteTaggedobject(e.id, ANY), function () {
    verifyTaggedobjectUpdated(e.id);
  });
});

bthread("Taggedobject delete verification", function () {
  const e = waitForAnyTaggedobjectDeleted();
  block(matchAddTaggedobject(e.id, ANY), function () {
    verifyTaggedobjectDoesNotExist(e.id);
  });
});

bthread("Tenancy create verification", function () {
  const e = waitForAnyTenancyAdded();
  block(matchDeleteTenancy(e.id, ANY), function () {
    verifyTenancyExists(e.id);
  });
});

bthread("Tenancy update verification", function () {
  const e = waitForAnyTenancyUpdated();
  block(matchDeleteTenancy(e.id, ANY), function () {
    verifyTenancyUpdated(e.id);
  });
});

bthread("Tenancy delete verification", function () {
  const e = waitForAnyTenancyDeleted();
  block(matchAddTenancy(e.id, ANY), function () {
    verifyTenancyDoesNotExist(e.id);
  });
});

bthread("Tenant create verification", function () {
  const e = waitForAnyTenantAdded();
  block(matchDeleteTenant(e.id, ANY), function () {
    verifyTenantExists(e.id);
  });
});

bthread("Tenant update verification", function () {
  const e = waitForAnyTenantUpdated();
  block(matchDeleteTenant(e.id, ANY), function () {
    verifyTenantUpdated(e.id);
  });
});

bthread("Tenant delete verification", function () {
  const e = waitForAnyTenantDeleted();
  block(matchAddTenant(e.id, ANY), function () {
    verifyTenantDoesNotExist(e.id);
  });
});

bthread("Tenantgroup create verification", function () {
  const e = waitForAnyTenantgroupAdded();
  block(matchDeleteTenantgroup(e.id, ANY), function () {
    verifyTenantgroupExists(e.id);
  });
});

bthread("Tenantgroup update verification", function () {
  const e = waitForAnyTenantgroupUpdated();
  block(matchDeleteTenantgroup(e.id, ANY), function () {
    verifyTenantgroupUpdated(e.id);
  });
});

bthread("Tenantgroup delete verification", function () {
  const e = waitForAnyTenantgroupDeleted();
  block(matchAddTenantgroup(e.id, ANY), function () {
    verifyTenantgroupDoesNotExist(e.id);
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

bthread("Trace create verification", function () {
  const e = waitForAnyTraceAdded();
  block(matchDeleteTrace(e.id, ANY), function () {
    verifyTraceExists(e.id);
  });
});

bthread("Trace update verification", function () {
  const e = waitForAnyTraceUpdated();
  block(matchDeleteTrace(e.id, ANY), function () {
    verifyTraceUpdated(e.id);
  });
});

bthread("Trace delete verification", function () {
  const e = waitForAnyTraceDeleted();
  block(matchAddTrace(e.id, ANY), function () {
    verifyTraceDoesNotExist(e.id);
  });
});

bthread("Tunnel create verification", function () {
  const e = waitForAnyTunnelAdded();
  block(matchDeleteTunnel(e.id, ANY), function () {
    verifyTunnelExists(e.id);
  });
});

bthread("Tunnel update verification", function () {
  const e = waitForAnyTunnelUpdated();
  block(matchDeleteTunnel(e.id, ANY), function () {
    verifyTunnelUpdated(e.id);
  });
});

bthread("Tunnel delete verification", function () {
  const e = waitForAnyTunnelDeleted();
  block(matchAddTunnel(e.id, ANY), function () {
    verifyTunnelDoesNotExist(e.id);
  });
});

bthread("Tunnelgroup create verification", function () {
  const e = waitForAnyTunnelgroupAdded();
  block(matchDeleteTunnelgroup(e.id, ANY), function () {
    verifyTunnelgroupExists(e.id);
  });
});

bthread("Tunnelgroup update verification", function () {
  const e = waitForAnyTunnelgroupUpdated();
  block(matchDeleteTunnelgroup(e.id, ANY), function () {
    verifyTunnelgroupUpdated(e.id);
  });
});

bthread("Tunnelgroup delete verification", function () {
  const e = waitForAnyTunnelgroupDeleted();
  block(matchAddTunnelgroup(e.id, ANY), function () {
    verifyTunnelgroupDoesNotExist(e.id);
  });
});

bthread("Tunneltermination create verification", function () {
  const e = waitForAnyTunnelterminationAdded();
  block(matchDeleteTunneltermination(e.id, ANY), function () {
    verifyTunnelterminationExists(e.id);
  });
});

bthread("Tunneltermination update verification", function () {
  const e = waitForAnyTunnelterminationUpdated();
  block(matchDeleteTunneltermination(e.id, ANY), function () {
    verifyTunnelterminationUpdated(e.id);
  });
});

bthread("Tunneltermination delete verification", function () {
  const e = waitForAnyTunnelterminationDeleted();
  block(matchAddTunneltermination(e.id, ANY), function () {
    verifyTunnelterminationDoesNotExist(e.id);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserExists(e.id);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserUpdated(e.id);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  block(matchAddUser(e.id, ANY), function () {
    verifyUserDoesNotExist(e.id);
  });
});

bthread("Virtualchassi create verification", function () {
  const e = waitForAnyVirtualchassiAdded();
  block(matchDeleteVirtualchassi(e.id, ANY), function () {
    verifyVirtualchassiExists(e.id);
  });
});

bthread("Virtualchassi update verification", function () {
  const e = waitForAnyVirtualchassiUpdated();
  block(matchDeleteVirtualchassi(e.id, ANY), function () {
    verifyVirtualchassiUpdated(e.id);
  });
});

bthread("Virtualchassi delete verification", function () {
  const e = waitForAnyVirtualchassiDeleted();
  block(matchAddVirtualchassi(e.id, ANY), function () {
    verifyVirtualchassiDoesNotExist(e.id);
  });
});

bthread("Virtualcircuit create verification", function () {
  const e = waitForAnyVirtualcircuitAdded();
  block(matchDeleteVirtualcircuit(e.id, ANY), function () {
    verifyVirtualcircuitExists(e.id);
  });
});

bthread("Virtualcircuit update verification", function () {
  const e = waitForAnyVirtualcircuitUpdated();
  block(matchDeleteVirtualcircuit(e.id, ANY), function () {
    verifyVirtualcircuitUpdated(e.id);
  });
});

bthread("Virtualcircuit delete verification", function () {
  const e = waitForAnyVirtualcircuitDeleted();
  block(matchAddVirtualcircuit(e.id, ANY), function () {
    verifyVirtualcircuitDoesNotExist(e.id);
  });
});

bthread("Virtualcircuittermination create verification", function () {
  const e = waitForAnyVirtualcircuitterminationAdded();
  block(matchDeleteVirtualcircuittermination(e.id, ANY), function () {
    verifyVirtualcircuitterminationExists(e.id);
  });
});

bthread("Virtualcircuittermination update verification", function () {
  const e = waitForAnyVirtualcircuitterminationUpdated();
  block(matchDeleteVirtualcircuittermination(e.id, ANY), function () {
    verifyVirtualcircuitterminationUpdated(e.id);
  });
});

bthread("Virtualcircuittermination delete verification", function () {
  const e = waitForAnyVirtualcircuitterminationDeleted();
  block(matchAddVirtualcircuittermination(e.id, ANY), function () {
    verifyVirtualcircuitterminationDoesNotExist(e.id);
  });
});

bthread("Virtualcircuittype create verification", function () {
  const e = waitForAnyVirtualcircuittypeAdded();
  block(matchDeleteVirtualcircuittype(e.id, ANY), function () {
    verifyVirtualcircuittypeExists(e.id);
  });
});

bthread("Virtualcircuittype update verification", function () {
  const e = waitForAnyVirtualcircuittypeUpdated();
  block(matchDeleteVirtualcircuittype(e.id, ANY), function () {
    verifyVirtualcircuittypeUpdated(e.id);
  });
});

bthread("Virtualcircuittype delete verification", function () {
  const e = waitForAnyVirtualcircuittypeDeleted();
  block(matchAddVirtualcircuittype(e.id, ANY), function () {
    verifyVirtualcircuittypeDoesNotExist(e.id);
  });
});

bthread("Virtualdevicecontext create verification", function () {
  const e = waitForAnyVirtualdevicecontextAdded();
  block(matchDeleteVirtualdevicecontext(e.id, ANY), function () {
    verifyVirtualdevicecontextExists(e.id);
  });
});

bthread("Virtualdevicecontext update verification", function () {
  const e = waitForAnyVirtualdevicecontextUpdated();
  block(matchDeleteVirtualdevicecontext(e.id, ANY), function () {
    verifyVirtualdevicecontextUpdated(e.id);
  });
});

bthread("Virtualdevicecontext delete verification", function () {
  const e = waitForAnyVirtualdevicecontextDeleted();
  block(matchAddVirtualdevicecontext(e.id, ANY), function () {
    verifyVirtualdevicecontextDoesNotExist(e.id);
  });
});

bthread("Virtualdisk create verification", function () {
  const e = waitForAnyVirtualdiskAdded();
  block(matchDeleteVirtualdisk(e.id, ANY), function () {
    verifyVirtualdiskExists(e.id);
  });
});

bthread("Virtualdisk update verification", function () {
  const e = waitForAnyVirtualdiskUpdated();
  block(matchDeleteVirtualdisk(e.id, ANY), function () {
    verifyVirtualdiskUpdated(e.id);
  });
});

bthread("Virtualdisk delete verification", function () {
  const e = waitForAnyVirtualdiskDeleted();
  block(matchAddVirtualdisk(e.id, ANY), function () {
    verifyVirtualdiskDoesNotExist(e.id);
  });
});

bthread("Virtualization create verification", function () {
  const e = waitForAnyVirtualizationAdded();
  block(matchDeleteVirtualization(e.id, ANY), function () {
    verifyVirtualizationExists(e.id);
  });
});

bthread("Virtualization update verification", function () {
  const e = waitForAnyVirtualizationUpdated();
  block(matchDeleteVirtualization(e.id, ANY), function () {
    verifyVirtualizationUpdated(e.id);
  });
});

bthread("Virtualization delete verification", function () {
  const e = waitForAnyVirtualizationDeleted();
  block(matchAddVirtualization(e.id, ANY), function () {
    verifyVirtualizationDoesNotExist(e.id);
  });
});

bthread("Virtualmachine create verification", function () {
  const e = waitForAnyVirtualmachineAdded();
  block(matchDeleteVirtualmachine(e.id, ANY), function () {
    verifyVirtualmachineExists(e.id);
  });
});

bthread("Virtualmachine update verification", function () {
  const e = waitForAnyVirtualmachineUpdated();
  block(matchDeleteVirtualmachine(e.id, ANY), function () {
    verifyVirtualmachineUpdated(e.id);
  });
});

bthread("Virtualmachine delete verification", function () {
  const e = waitForAnyVirtualmachineDeleted();
  block(matchAddVirtualmachine(e.id, ANY), function () {
    verifyVirtualmachineDoesNotExist(e.id);
  });
});

bthread("Vlan create verification", function () {
  const e = waitForAnyVlanAdded();
  block(matchDeleteVlan(e.id, ANY), function () {
    verifyVlanExists(e.id);
  });
});

bthread("Vlan update verification", function () {
  const e = waitForAnyVlanUpdated();
  block(matchDeleteVlan(e.id, ANY), function () {
    verifyVlanUpdated(e.id);
  });
});

bthread("Vlan delete verification", function () {
  const e = waitForAnyVlanDeleted();
  block(matchAddVlan(e.id, ANY), function () {
    verifyVlanDoesNotExist(e.id);
  });
});

bthread("Vlangroup create verification", function () {
  const e = waitForAnyVlangroupAdded();
  block(matchDeleteVlangroup(e.id, ANY), function () {
    verifyVlangroupExists(e.id);
  });
});

bthread("Vlangroup update verification", function () {
  const e = waitForAnyVlangroupUpdated();
  block(matchDeleteVlangroup(e.id, ANY), function () {
    verifyVlangroupUpdated(e.id);
  });
});

bthread("Vlangroup delete verification", function () {
  const e = waitForAnyVlangroupDeleted();
  block(matchAddVlangroup(e.id, ANY), function () {
    verifyVlangroupDoesNotExist(e.id);
  });
});

bthread("Vlantranslationpolicy create verification", function () {
  const e = waitForAnyVlantranslationpolicyAdded();
  block(matchDeleteVlantranslationpolicy(e.id, ANY), function () {
    verifyVlantranslationpolicyExists(e.id);
  });
});

bthread("Vlantranslationpolicy update verification", function () {
  const e = waitForAnyVlantranslationpolicyUpdated();
  block(matchDeleteVlantranslationpolicy(e.id, ANY), function () {
    verifyVlantranslationpolicyUpdated(e.id);
  });
});

bthread("Vlantranslationpolicy delete verification", function () {
  const e = waitForAnyVlantranslationpolicyDeleted();
  block(matchAddVlantranslationpolicy(e.id, ANY), function () {
    verifyVlantranslationpolicyDoesNotExist(e.id);
  });
});

bthread("Vlantranslationrule create verification", function () {
  const e = waitForAnyVlantranslationruleAdded();
  block(matchDeleteVlantranslationrule(e.id, ANY), function () {
    verifyVlantranslationruleExists(e.id);
  });
});

bthread("Vlantranslationrule update verification", function () {
  const e = waitForAnyVlantranslationruleUpdated();
  block(matchDeleteVlantranslationrule(e.id, ANY), function () {
    verifyVlantranslationruleUpdated(e.id);
  });
});

bthread("Vlantranslationrule delete verification", function () {
  const e = waitForAnyVlantranslationruleDeleted();
  block(matchAddVlantranslationrule(e.id, ANY), function () {
    verifyVlantranslationruleDoesNotExist(e.id);
  });
});

bthread("Vpn create verification", function () {
  const e = waitForAnyVpnAdded();
  block(matchDeleteVpn(e.id, ANY), function () {
    verifyVpnExists(e.id);
  });
});

bthread("Vpn update verification", function () {
  const e = waitForAnyVpnUpdated();
  block(matchDeleteVpn(e.id, ANY), function () {
    verifyVpnUpdated(e.id);
  });
});

bthread("Vpn delete verification", function () {
  const e = waitForAnyVpnDeleted();
  block(matchAddVpn(e.id, ANY), function () {
    verifyVpnDoesNotExist(e.id);
  });
});

bthread("Vrf create verification", function () {
  const e = waitForAnyVrfAdded();
  block(matchDeleteVrf(e.id, ANY), function () {
    verifyVrfExists(e.id);
  });
});

bthread("Vrf update verification", function () {
  const e = waitForAnyVrfUpdated();
  block(matchDeleteVrf(e.id, ANY), function () {
    verifyVrfUpdated(e.id);
  });
});

bthread("Vrf delete verification", function () {
  const e = waitForAnyVrfDeleted();
  block(matchAddVrf(e.id, ANY), function () {
    verifyVrfDoesNotExist(e.id);
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

bthread("Wireles create verification", function () {
  const e = waitForAnyWirelesAdded();
  block(matchDeleteWireles(e.id, ANY), function () {
    verifyWirelesExists(e.id);
  });
});

bthread("Wireles update verification", function () {
  const e = waitForAnyWirelesUpdated();
  block(matchDeleteWireles(e.id, ANY), function () {
    verifyWirelesUpdated(e.id);
  });
});

bthread("Wireles delete verification", function () {
  const e = waitForAnyWirelesDeleted();
  block(matchAddWireles(e.id, ANY), function () {
    verifyWirelesDoesNotExist(e.id);
  });
});

bthread("Wirelesslan create verification", function () {
  const e = waitForAnyWirelesslanAdded();
  block(matchDeleteWirelesslan(e.id, ANY), function () {
    verifyWirelesslanExists(e.id);
  });
});

bthread("Wirelesslan update verification", function () {
  const e = waitForAnyWirelesslanUpdated();
  block(matchDeleteWirelesslan(e.id, ANY), function () {
    verifyWirelesslanUpdated(e.id);
  });
});

bthread("Wirelesslan delete verification", function () {
  const e = waitForAnyWirelesslanDeleted();
  block(matchAddWirelesslan(e.id, ANY), function () {
    verifyWirelesslanDoesNotExist(e.id);
  });
});

bthread("Wirelesslangroup create verification", function () {
  const e = waitForAnyWirelesslangroupAdded();
  block(matchDeleteWirelesslangroup(e.id, ANY), function () {
    verifyWirelesslangroupExists(e.id);
  });
});

bthread("Wirelesslangroup update verification", function () {
  const e = waitForAnyWirelesslangroupUpdated();
  block(matchDeleteWirelesslangroup(e.id, ANY), function () {
    verifyWirelesslangroupUpdated(e.id);
  });
});

bthread("Wirelesslangroup delete verification", function () {
  const e = waitForAnyWirelesslangroupDeleted();
  block(matchAddWirelesslangroup(e.id, ANY), function () {
    verifyWirelesslangroupDoesNotExist(e.id);
  });
});

bthread("Wirelesslink create verification", function () {
  const e = waitForAnyWirelesslinkAdded();
  block(matchDeleteWirelesslink(e.id, ANY), function () {
    verifyWirelesslinkExists(e.id);
  });
});

bthread("Wirelesslink update verification", function () {
  const e = waitForAnyWirelesslinkUpdated();
  block(matchDeleteWirelesslink(e.id, ANY), function () {
    verifyWirelesslinkUpdated(e.id);
  });
});

bthread("Wirelesslink delete verification", function () {
  const e = waitForAnyWirelesslinkDeleted();
  block(matchAddWirelesslink(e.id, ANY), function () {
    verifyWirelesslinkDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Aggregate", function () {
  const x = waitForAnyAggregateAdded();
  block(matchAddAggregate(x.id, ANY), function () {});
});

bthread("Guard: Unique Api", function () {
  const x = waitForAnyApiAdded();
  block(matchAddApi(x.id, ANY), function () {});
});

bthread("Guard: Unique Asn", function () {
  const x = waitForAnyAsnAdded();
  block(matchAddAsn(x.id, ANY), function () {});
});

bthread("Guard: Unique Asnrange", function () {
  const x = waitForAnyAsnrangeAdded();
  block(matchAddAsnrange(x.id, ANY), function () {});
});

bthread("Guard: Unique Availableasn", function () {
  const x = waitForAnyAvailableasnAdded();
  block(matchAddAvailableasn(x.id, ANY), function () {});
});

bthread("Guard: Unique Availableip", function () {
  const x = waitForAnyAvailableipAdded();
  block(matchAddAvailableip(x.id, ANY), function () {});
});

bthread("Guard: Unique Availableprefixe", function () {
  const x = waitForAnyAvailableprefixeAdded();
  block(matchAddAvailableprefixe(x.id, ANY), function () {});
});

bthread("Guard: Unique Availablevlan", function () {
  const x = waitForAnyAvailablevlanAdded();
  block(matchAddAvailablevlan(x.id, ANY), function () {});
});

bthread("Guard: Unique Backgroundqueue", function () {
  const x = waitForAnyBackgroundqueueAdded();
  block(matchAddBackgroundqueue(x.id, ANY), function () {});
});

bthread("Guard: Unique Backgroundtask", function () {
  const x = waitForAnyBackgroundtaskAdded();
  block(matchAddBackgroundtask(x.id, ANY), function () {});
});

bthread("Guard: Unique Backgroundworker", function () {
  const x = waitForAnyBackgroundworkerAdded();
  block(matchAddBackgroundworker(x.id, ANY), function () {});
});

bthread("Guard: Unique Bookmark", function () {
  const x = waitForAnyBookmarkAdded();
  block(matchAddBookmark(x.id, ANY), function () {});
});

bthread("Guard: Unique Cable", function () {
  const x = waitForAnyCableAdded();
  block(matchAddCable(x.id, ANY), function () {});
});

bthread("Guard: Unique Cabletermination", function () {
  const x = waitForAnyCableterminationAdded();
  block(matchAddCabletermination(x.id, ANY), function () {});
});

bthread("Guard: Unique Choice", function () {
  const x = waitForAnyChoiceAdded();
  block(matchAddChoice(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuit", function () {
  const x = waitForAnyCircuitAdded();
  block(matchAddCircuit(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuitgroup", function () {
  const x = waitForAnyCircuitgroupAdded();
  block(matchAddCircuitgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuitgroupassignment", function () {
  const x = waitForAnyCircuitgroupassignmentAdded();
  block(matchAddCircuitgroupassignment(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuittermination", function () {
  const x = waitForAnyCircuitterminationAdded();
  block(matchAddCircuittermination(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuittype", function () {
  const x = waitForAnyCircuittypeAdded();
  block(matchAddCircuittype(x.id, ANY), function () {});
});

bthread("Guard: Unique Cluster", function () {
  const x = waitForAnyClusterAdded();
  block(matchAddCluster(x.id, ANY), function () {});
});

bthread("Guard: Unique Clustergroup", function () {
  const x = waitForAnyClustergroupAdded();
  block(matchAddClustergroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Clustertype", function () {
  const x = waitForAnyClustertypeAdded();
  block(matchAddClustertype(x.id, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  block(matchAddConfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Configcontext", function () {
  const x = waitForAnyConfigcontextAdded();
  block(matchAddConfigcontext(x.id, ANY), function () {});
});

bthread("Guard: Unique Configcontextprofile", function () {
  const x = waitForAnyConfigcontextprofileAdded();
  block(matchAddConfigcontextprofile(x.id, ANY), function () {});
});

bthread("Guard: Unique Configtemplate", function () {
  const x = waitForAnyConfigtemplateAdded();
  block(matchAddConfigtemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Connecteddevice", function () {
  const x = waitForAnyConnecteddeviceAdded();
  block(matchAddConnecteddevice(x.id, ANY), function () {});
});

bthread("Guard: Unique Consoleport", function () {
  const x = waitForAnyConsoleportAdded();
  block(matchAddConsoleport(x.id, ANY), function () {});
});

bthread("Guard: Unique Consoleporttemplate", function () {
  const x = waitForAnyConsoleporttemplateAdded();
  block(matchAddConsoleporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Consoleserverport", function () {
  const x = waitForAnyConsoleserverportAdded();
  block(matchAddConsoleserverport(x.id, ANY), function () {});
});

bthread("Guard: Unique Consoleserverporttemplate", function () {
  const x = waitForAnyConsoleserverporttemplateAdded();
  block(matchAddConsoleserverporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Contact", function () {
  const x = waitForAnyContactAdded();
  block(matchAddContact(x.id, ANY), function () {});
});

bthread("Guard: Unique Contactassignment", function () {
  const x = waitForAnyContactassignmentAdded();
  block(matchAddContactassignment(x.id, ANY), function () {});
});

bthread("Guard: Unique Contactgroup", function () {
  const x = waitForAnyContactgroupAdded();
  block(matchAddContactgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Contactrole", function () {
  const x = waitForAnyContactroleAdded();
  block(matchAddContactrole(x.id, ANY), function () {});
});

bthread("Guard: Unique Core", function () {
  const x = waitForAnyCoreAdded();
  block(matchAddCore(x.id, ANY), function () {});
});

bthread("Guard: Unique Customfield", function () {
  const x = waitForAnyCustomfieldAdded();
  block(matchAddCustomfield(x.id, ANY), function () {});
});

bthread("Guard: Unique Customfieldchoiceset", function () {
  const x = waitForAnyCustomfieldchoicesetAdded();
  block(matchAddCustomfieldchoiceset(x.id, ANY), function () {});
});

bthread("Guard: Unique Customlink", function () {
  const x = waitForAnyCustomlinkAdded();
  block(matchAddCustomlink(x.id, ANY), function () {});
});

bthread("Guard: Unique Dashboard", function () {
  const x = waitForAnyDashboardAdded();
  block(matchAddDashboard(x.id, ANY), function () {});
});

bthread("Guard: Unique Datafile", function () {
  const x = waitForAnyDatafileAdded();
  block(matchAddDatafile(x.id, ANY), function () {});
});

bthread("Guard: Unique Datasource", function () {
  const x = waitForAnyDatasourceAdded();
  block(matchAddDatasource(x.id, ANY), function () {});
});

bthread("Guard: Unique Dcim", function () {
  const x = waitForAnyDcimAdded();
  block(matchAddDcim(x.id, ANY), function () {});
});

bthread("Guard: Unique Delete", function () {
  const x = waitForAnyDeleteAdded();
  block(matchAddDelete(x.id, ANY), function () {});
});

bthread("Guard: Unique Device", function () {
  const x = waitForAnyDeviceAdded();
  block(matchAddDevice(x.id, ANY), function () {});
});

bthread("Guard: Unique Devicebay", function () {
  const x = waitForAnyDevicebayAdded();
  block(matchAddDevicebay(x.id, ANY), function () {});
});

bthread("Guard: Unique Devicebaytemplate", function () {
  const x = waitForAnyDevicebaytemplateAdded();
  block(matchAddDevicebaytemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Devicerole", function () {
  const x = waitForAnyDeviceroleAdded();
  block(matchAddDevicerole(x.id, ANY), function () {});
});

bthread("Guard: Unique Devicetype", function () {
  const x = waitForAnyDevicetypeAdded();
  block(matchAddDevicetype(x.id, ANY), function () {});
});

bthread("Guard: Unique Elevation", function () {
  const x = waitForAnyElevationAdded();
  block(matchAddElevation(x.id, ANY), function () {});
});

bthread("Guard: Unique Enqueue", function () {
  const x = waitForAnyEnqueueAdded();
  block(matchAddEnqueue(x.id, ANY), function () {});
});

bthread("Guard: Unique Eventrule", function () {
  const x = waitForAnyEventruleAdded();
  block(matchAddEventrule(x.id, ANY), function () {});
});

bthread("Guard: Unique Exporttemplate", function () {
  const x = waitForAnyExporttemplateAdded();
  block(matchAddExporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Extra", function () {
  const x = waitForAnyExtraAdded();
  block(matchAddExtra(x.id, ANY), function () {});
});

bthread("Guard: Unique Fhrpgroup", function () {
  const x = waitForAnyFhrpgroupAdded();
  block(matchAddFhrpgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Fhrpgroupassignment", function () {
  const x = waitForAnyFhrpgroupassignmentAdded();
  block(matchAddFhrpgroupassignment(x.id, ANY), function () {});
});

bthread("Guard: Unique Frontport", function () {
  const x = waitForAnyFrontportAdded();
  block(matchAddFrontport(x.id, ANY), function () {});
});

bthread("Guard: Unique Frontporttemplate", function () {
  const x = waitForAnyFrontporttemplateAdded();
  block(matchAddFrontporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Group", function () {
  const x = waitForAnyGroupAdded();
  block(matchAddGroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Ikepolicy", function () {
  const x = waitForAnyIkepolicyAdded();
  block(matchAddIkepolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Ikeproposal", function () {
  const x = waitForAnyIkeproposalAdded();
  block(matchAddIkeproposal(x.id, ANY), function () {});
});

bthread("Guard: Unique Imageattachment", function () {
  const x = waitForAnyImageattachmentAdded();
  block(matchAddImageattachment(x.id, ANY), function () {});
});

bthread("Guard: Unique Interface", function () {
  const x = waitForAnyInterfaceAdded();
  block(matchAddInterface(x.id, ANY), function () {});
});

bthread("Guard: Unique Interfacetemplate", function () {
  const x = waitForAnyInterfacetemplateAdded();
  block(matchAddInterfacetemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Inventoryitem", function () {
  const x = waitForAnyInventoryitemAdded();
  block(matchAddInventoryitem(x.id, ANY), function () {});
});

bthread("Guard: Unique Inventoryitemrole", function () {
  const x = waitForAnyInventoryitemroleAdded();
  block(matchAddInventoryitemrole(x.id, ANY), function () {});
});

bthread("Guard: Unique Inventoryitemtemplate", function () {
  const x = waitForAnyInventoryitemtemplateAdded();
  block(matchAddInventoryitemtemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaddress", function () {
  const x = waitForAnyIpaddressAdded();
  block(matchAddIpaddress(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipam", function () {
  const x = waitForAnyIpamAdded();
  block(matchAddIpam(x.id, ANY), function () {});
});

bthread("Guard: Unique Iprange", function () {
  const x = waitForAnyIprangeAdded();
  block(matchAddIprange(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipsecpolicy", function () {
  const x = waitForAnyIpsecpolicyAdded();
  block(matchAddIpsecpolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipsecprofile", function () {
  const x = waitForAnyIpsecprofileAdded();
  block(matchAddIpsecprofile(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipsecproposal", function () {
  const x = waitForAnyIpsecproposalAdded();
  block(matchAddIpsecproposal(x.id, ANY), function () {});
});

bthread("Guard: Unique Job", function () {
  const x = waitForAnyJobAdded();
  block(matchAddJob(x.id, ANY), function () {});
});

bthread("Guard: Unique Journalentry", function () {
  const x = waitForAnyJournalentryAdded();
  block(matchAddJournalentry(x.id, ANY), function () {});
});

bthread("Guard: Unique L2vpn", function () {
  const x = waitForAnyL2vpnAdded();
  block(matchAddL2vpn(x.id, ANY), function () {});
});

bthread("Guard: Unique L2vpntermination", function () {
  const x = waitForAnyL2vpnterminationAdded();
  block(matchAddL2vpntermination(x.id, ANY), function () {});
});

bthread("Guard: Unique Location", function () {
  const x = waitForAnyLocationAdded();
  block(matchAddLocation(x.id, ANY), function () {});
});

bthread("Guard: Unique Macaddress", function () {
  const x = waitForAnyMacaddressAdded();
  block(matchAddMacaddress(x.id, ANY), function () {});
});

bthread("Guard: Unique Manufacturer", function () {
  const x = waitForAnyManufacturerAdded();
  block(matchAddManufacturer(x.id, ANY), function () {});
});

bthread("Guard: Unique Module", function () {
  const x = waitForAnyModuleAdded();
  block(matchAddModule(x.id, ANY), function () {});
});

bthread("Guard: Unique Modulebay", function () {
  const x = waitForAnyModulebayAdded();
  block(matchAddModulebay(x.id, ANY), function () {});
});

bthread("Guard: Unique Modulebaytemplate", function () {
  const x = waitForAnyModulebaytemplateAdded();
  block(matchAddModulebaytemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Moduletype", function () {
  const x = waitForAnyModuletypeAdded();
  block(matchAddModuletype(x.id, ANY), function () {});
});

bthread("Guard: Unique Moduletypeprofile", function () {
  const x = waitForAnyModuletypeprofileAdded();
  block(matchAddModuletypeprofile(x.id, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  block(matchAddNotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Notificationgroup", function () {
  const x = waitForAnyNotificationgroupAdded();
  block(matchAddNotificationgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Objectchange", function () {
  const x = waitForAnyObjectchangeAdded();
  block(matchAddObjectchange(x.id, ANY), function () {});
});

bthread("Guard: Unique Objecttype", function () {
  const x = waitForAnyObjecttypeAdded();
  block(matchAddObjecttype(x.id, ANY), function () {});
});

bthread("Guard: Unique Path", function () {
  const x = waitForAnyPathAdded();
  block(matchAddPath(x.id, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  block(matchAddPermission(x.id, ANY), function () {});
});

bthread("Guard: Unique Platform", function () {
  const x = waitForAnyPlatformAdded();
  block(matchAddPlatform(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerfeed", function () {
  const x = waitForAnyPowerfeedAdded();
  block(matchAddPowerfeed(x.id, ANY), function () {});
});

bthread("Guard: Unique Poweroutlet", function () {
  const x = waitForAnyPoweroutletAdded();
  block(matchAddPoweroutlet(x.id, ANY), function () {});
});

bthread("Guard: Unique Poweroutlettemplate", function () {
  const x = waitForAnyPoweroutlettemplateAdded();
  block(matchAddPoweroutlettemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerpanel", function () {
  const x = waitForAnyPowerpanelAdded();
  block(matchAddPowerpanel(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerport", function () {
  const x = waitForAnyPowerportAdded();
  block(matchAddPowerport(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerporttemplate", function () {
  const x = waitForAnyPowerporttemplateAdded();
  block(matchAddPowerporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Prefixe", function () {
  const x = waitForAnyPrefixeAdded();
  block(matchAddPrefixe(x.id, ANY), function () {});
});

bthread("Guard: Unique Provider", function () {
  const x = waitForAnyProviderAdded();
  block(matchAddProvider(x.id, ANY), function () {});
});

bthread("Guard: Unique Provideraccount", function () {
  const x = waitForAnyProvideraccountAdded();
  block(matchAddProvideraccount(x.id, ANY), function () {});
});

bthread("Guard: Unique Providernetwork", function () {
  const x = waitForAnyProvidernetworkAdded();
  block(matchAddProvidernetwork(x.id, ANY), function () {});
});

bthread("Guard: Unique Provision", function () {
  const x = waitForAnyProvisionAdded();
  block(matchAddProvision(x.id, ANY), function () {});
});

bthread("Guard: Unique Rack", function () {
  const x = waitForAnyRackAdded();
  block(matchAddRack(x.id, ANY), function () {});
});

bthread("Guard: Unique Rackreservation", function () {
  const x = waitForAnyRackreservationAdded();
  block(matchAddRackreservation(x.id, ANY), function () {});
});

bthread("Guard: Unique Rackrole", function () {
  const x = waitForAnyRackroleAdded();
  block(matchAddRackrole(x.id, ANY), function () {});
});

bthread("Guard: Unique Racktype", function () {
  const x = waitForAnyRacktypeAdded();
  block(matchAddRacktype(x.id, ANY), function () {});
});

bthread("Guard: Unique Rearport", function () {
  const x = waitForAnyRearportAdded();
  block(matchAddRearport(x.id, ANY), function () {});
});

bthread("Guard: Unique Rearporttemplate", function () {
  const x = waitForAnyRearporttemplateAdded();
  block(matchAddRearporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Region", function () {
  const x = waitForAnyRegionAdded();
  block(matchAddRegion(x.id, ANY), function () {});
});

bthread("Guard: Unique Render", function () {
  const x = waitForAnyRenderAdded();
  block(matchAddRender(x.id, ANY), function () {});
});

bthread("Guard: Unique Renderconfig", function () {
  const x = waitForAnyRenderconfigAdded();
  block(matchAddRenderconfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Requeue", function () {
  const x = waitForAnyRequeueAdded();
  block(matchAddRequeue(x.id, ANY), function () {});
});

bthread("Guard: Unique Rir", function () {
  const x = waitForAnyRirAdded();
  block(matchAddRir(x.id, ANY), function () {});
});

bthread("Guard: Unique Role", function () {
  const x = waitForAnyRoleAdded();
  block(matchAddRole(x.id, ANY), function () {});
});

bthread("Guard: Unique Routetarget", function () {
  const x = waitForAnyRoutetargetAdded();
  block(matchAddRoutetarget(x.id, ANY), function () {});
});

bthread("Guard: Unique Savedfilter", function () {
  const x = waitForAnySavedfilterAdded();
  block(matchAddSavedfilter(x.id, ANY), function () {});
});

bthread("Guard: Unique Schema", function () {
  const x = waitForAnySchemaAdded();
  block(matchAddSchema(x.id, ANY), function () {});
});

bthread("Guard: Unique Script", function () {
  const x = waitForAnyScriptAdded();
  block(matchAddScript(x.id, ANY), function () {});
});

bthread("Guard: Unique Service", function () {
  const x = waitForAnyServiceAdded();
  block(matchAddService(x.id, ANY), function () {});
});

bthread("Guard: Unique Servicetemplate", function () {
  const x = waitForAnyServicetemplateAdded();
  block(matchAddServicetemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Site", function () {
  const x = waitForAnySiteAdded();
  block(matchAddSite(x.id, ANY), function () {});
});

bthread("Guard: Unique Sitegroup", function () {
  const x = waitForAnySitegroupAdded();
  block(matchAddSitegroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  block(matchAddStatu(x.id, ANY), function () {});
});

bthread("Guard: Unique Stop", function () {
  const x = waitForAnyStopAdded();
  block(matchAddStop(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscription", function () {
  const x = waitForAnySubscriptionAdded();
  block(matchAddSubscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Sync", function () {
  const x = waitForAnySyncAdded();
  block(matchAddSync(x.id, ANY), function () {});
});

bthread("Guard: Unique Tableconfig", function () {
  const x = waitForAnyTableconfigAdded();
  block(matchAddTableconfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Tag", function () {
  const x = waitForAnyTagAdded();
  block(matchAddTag(x.id, ANY), function () {});
});

bthread("Guard: Unique Taggedobject", function () {
  const x = waitForAnyTaggedobjectAdded();
  block(matchAddTaggedobject(x.id, ANY), function () {});
});

bthread("Guard: Unique Tenancy", function () {
  const x = waitForAnyTenancyAdded();
  block(matchAddTenancy(x.id, ANY), function () {});
});

bthread("Guard: Unique Tenant", function () {
  const x = waitForAnyTenantAdded();
  block(matchAddTenant(x.id, ANY), function () {});
});

bthread("Guard: Unique Tenantgroup", function () {
  const x = waitForAnyTenantgroupAdded();
  block(matchAddTenantgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Token", function () {
  const x = waitForAnyTokenAdded();
  block(matchAddToken(x.id, ANY), function () {});
});

bthread("Guard: Unique Trace", function () {
  const x = waitForAnyTraceAdded();
  block(matchAddTrace(x.id, ANY), function () {});
});

bthread("Guard: Unique Tunnel", function () {
  const x = waitForAnyTunnelAdded();
  block(matchAddTunnel(x.id, ANY), function () {});
});

bthread("Guard: Unique Tunnelgroup", function () {
  const x = waitForAnyTunnelgroupAdded();
  block(matchAddTunnelgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Tunneltermination", function () {
  const x = waitForAnyTunnelterminationAdded();
  block(matchAddTunneltermination(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualchassi", function () {
  const x = waitForAnyVirtualchassiAdded();
  block(matchAddVirtualchassi(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualcircuit", function () {
  const x = waitForAnyVirtualcircuitAdded();
  block(matchAddVirtualcircuit(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualcircuittermination", function () {
  const x = waitForAnyVirtualcircuitterminationAdded();
  block(matchAddVirtualcircuittermination(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualcircuittype", function () {
  const x = waitForAnyVirtualcircuittypeAdded();
  block(matchAddVirtualcircuittype(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualdevicecontext", function () {
  const x = waitForAnyVirtualdevicecontextAdded();
  block(matchAddVirtualdevicecontext(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualdisk", function () {
  const x = waitForAnyVirtualdiskAdded();
  block(matchAddVirtualdisk(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualization", function () {
  const x = waitForAnyVirtualizationAdded();
  block(matchAddVirtualization(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualmachine", function () {
  const x = waitForAnyVirtualmachineAdded();
  block(matchAddVirtualmachine(x.id, ANY), function () {});
});

bthread("Guard: Unique Vlan", function () {
  const x = waitForAnyVlanAdded();
  block(matchAddVlan(x.id, ANY), function () {});
});

bthread("Guard: Unique Vlangroup", function () {
  const x = waitForAnyVlangroupAdded();
  block(matchAddVlangroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Vlantranslationpolicy", function () {
  const x = waitForAnyVlantranslationpolicyAdded();
  block(matchAddVlantranslationpolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Vlantranslationrule", function () {
  const x = waitForAnyVlantranslationruleAdded();
  block(matchAddVlantranslationrule(x.id, ANY), function () {});
});

bthread("Guard: Unique Vpn", function () {
  const x = waitForAnyVpnAdded();
  block(matchAddVpn(x.id, ANY), function () {});
});

bthread("Guard: Unique Vrf", function () {
  const x = waitForAnyVrfAdded();
  block(matchAddVrf(x.id, ANY), function () {});
});

bthread("Guard: Unique Webhook", function () {
  const x = waitForAnyWebhookAdded();
  block(matchAddWebhook(x.id, ANY), function () {});
});

bthread("Guard: Unique Wireles", function () {
  const x = waitForAnyWirelesAdded();
  block(matchAddWireles(x.id, ANY), function () {});
});

bthread("Guard: Unique Wirelesslan", function () {
  const x = waitForAnyWirelesslanAdded();
  block(matchAddWirelesslan(x.id, ANY), function () {});
});

bthread("Guard: Unique Wirelesslangroup", function () {
  const x = waitForAnyWirelesslangroupAdded();
  block(matchAddWirelesslangroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Wirelesslink", function () {
  const x = waitForAnyWirelesslinkAdded();
  block(matchAddWirelesslink(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
