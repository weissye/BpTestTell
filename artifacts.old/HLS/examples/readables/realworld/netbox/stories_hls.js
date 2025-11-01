// HLS (active + passive) – netbox
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("netbox: Seed Devices", function () {
    addDevice("DE-001");
    addDevice("DE-002");
    addDevice("DE-003");
    updateDevice("DE-003", { "note": "seeded" });
  });
  
    bthread("netbox: Rack lifecycle", function () {
    addRack("RA-100");
    updateRack("RA-100", { "status": "ready" });
    deleteRack("RA-100");
    verifyRackDoesNotExist("RA-100");
  });
  
    bthread("netbox: Contention on IPAddress", function () {
    addIPAddress("IP-200");
    tryAddIPAddress("IP-200"); // duplicate should be blocked
    updateIPAddress("IP-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("Device add verification", function () {
    const ev = waitForAnyDeviceAdded();
    block(matchDeleteDevice(ev.deviceId || ev.id || ev.key), function () {
      verifyDeviceExists(ev.deviceId || ev.id || ev.key);
    });
  });
  
    bthread("Device update verification", function () {
    const ev = waitForAnyDeviceUpdated();
    block(matchDeleteDevice(ev.deviceId || ev.id || ev.key), function () {
      verifyDeviceUpdated(ev.deviceId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Device deletion verification", function () {
    const ev = waitForAnyDeviceDeleted();
    block(matchAddDevice(ev.deviceId || ev.id || ev.key, ANY), function () {
      verifyDeviceDoesNotExist(ev.deviceId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Device)", function () {
    const ev = waitForAnyDeviceDeleted();
    block(matchUpdateDevice(ev.deviceId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Rack add verification", function () {
    const ev = waitForAnyRackAdded();
    block(matchDeleteRack(ev.rackId || ev.id || ev.key), function () {
      verifyRackExists(ev.rackId || ev.id || ev.key);
    });
  });
  
    bthread("Rack update verification", function () {
    const ev = waitForAnyRackUpdated();
    block(matchDeleteRack(ev.rackId || ev.id || ev.key), function () {
      verifyRackUpdated(ev.rackId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Rack deletion verification", function () {
    const ev = waitForAnyRackDeleted();
    block(matchAddRack(ev.rackId || ev.id || ev.key, ANY), function () {
      verifyRackDoesNotExist(ev.rackId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Rack)", function () {
    const ev = waitForAnyRackDeleted();
    block(matchUpdateRack(ev.rackId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("IPAddress add verification", function () {
    const ev = waitForAnyIPAddressAdded();
    block(matchDeleteIPAddress(ev.iPAddressId || ev.id || ev.key), function () {
      verifyIPAddressExists(ev.iPAddressId || ev.id || ev.key);
    });
  });
  
    bthread("IPAddress update verification", function () {
    const ev = waitForAnyIPAddressUpdated();
    block(matchDeleteIPAddress(ev.iPAddressId || ev.id || ev.key), function () {
      verifyIPAddressUpdated(ev.iPAddressId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("IPAddress deletion verification", function () {
    const ev = waitForAnyIPAddressDeleted();
    block(matchAddIPAddress(ev.iPAddressId || ev.id || ev.key, ANY), function () {
      verifyIPAddressDoesNotExist(ev.iPAddressId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (IPAddress)", function () {
    const ev = waitForAnyIPAddressDeleted();
    block(matchUpdateIPAddress(ev.iPAddressId || ev.id || ev.key, ANY), function () {
    });
  });

} // end if MODE
