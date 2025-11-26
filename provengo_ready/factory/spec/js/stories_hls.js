// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Machine:read_only
bthread("crud:Machine:read_only", function () {

  verifyMachineExists();
});

// Story: crud:Workorder:read_only
bthread("crud:Workorder:read_only", function () {

  verifyWorkorderExists();
});

// Story: crud:MaintenanceTicket:read_only
bthread("crud:MaintenanceTicket:read_only", function () {

  verifyMaintenanceTicketExists();
});

// Story: crud:SensorReading:read_only
bthread("crud:SensorReading:read_only", function () {

  verifySensorReadingExists();
});
