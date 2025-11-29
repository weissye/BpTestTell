// Auto-generated HLS stories
//@provengo summon rest


// Story: crud:Chain:nondet:1:1
bthread("crud:Chain:nondet:1:1", function () {
  let chainId = 200;
  let name = "name_200";
  let hqAddress = "hqAddress_200";
  createChain(200, "name_200", "hqAddress_200");
  waitForChainAdded(200, "name_200", "hqAddress_200");
  tryToAddExistingChain(200, "name_200", "hqAddress_200");
  verifyChainExists(200, "name_200", "hqAddress_200");
  updateChain(200, "name_200", "hqAddress_200");
  deleteChain(200, "name_200", "hqAddress_200");
  tryToDeleteANonExistingChain(200, "name_200", "hqAddress_200");
  verifyChainDoesNotExist(200, "name_200", "hqAddress_200");
});

// Story: crud:Chain:nondet:1:2
bthread("crud:Chain:nondet:1:2", function () {
  let chainId = 201;
  let name = "name_201";
  let hqAddress = "hqAddress_201";
  createChain(201, "name_201", "hqAddress_201");
  waitForChainAdded(201, "name_201", "hqAddress_201");
  tryToAddExistingChain(201, "name_201", "hqAddress_201");
  updateChain(201, "name_201", "hqAddress_201");
  verifyChainExists(201, "name_201", "hqAddress_201");
  deleteChain(201, "name_201", "hqAddress_201");
  tryToDeleteANonExistingChain(201, "name_201", "hqAddress_201");
  verifyChainDoesNotExist(201, "name_201", "hqAddress_201");
});

// Story: crud:Chain:nondet:negative:dup-add
bthread("crud:Chain:nondet:negative:dup-add", function () {
  let chainId = 206;
  let name = "name_206";
  let hqAddress = "hqAddress_206";
  createChain(206, "name_206", "hqAddress_206");
  waitForChainAdded(206, "name_206", "hqAddress_206");
  verifyChainExists(206, "name_206", "hqAddress_206");
  tryToAddExistingChain(206, "name_206", "hqAddress_206");
  verifyChainExists(206, "name_206", "hqAddress_206");
});

// Story: crud:Chain:nondet:existing:update
bthread("crud:Chain:nondet:existing:update", function () {
  let ev = waitForAnyChainAdded();
  let args = Object.values(ev);
  block(matchDeletedChain.apply(null, args), function () {
    verifyChainExists.apply(null, args);
    updateChain.apply(null, args);
    verifyChainExists.apply(null, args);
  });
});

// Story: monitor:Chain:add
bthread("monitor:Chain:add", function () {
  while (true) {
    let ev = waitForAnyChainAdded();
    let args = Object.values(ev);
    block(matchDeletedChain.apply(null, args), function () {
      verifyChainExists.apply(null, args);
    });
  }
});

// Story: crud:Garage:nondet:1:1
bthread("crud:Garage:nondet:1:1", function () {
  let garageId = 210;
  let chainId = 210;
  let name = "name_210";
  let address = "address_210";
  let phone = "phone_210";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let chainId = captured["chainId"];
  createGarage(210, 210, "name_210", "address_210", "phone_210");
  tryToAddExistingGarage(210, 210, "name_210", "address_210", "phone_210");
  verifyGarageExists(210, 210, "name_210", "address_210", "phone_210");
  updateGarage(210, 210, "name_210", "address_210", "phone_210");
  deleteGarage(210, 210, "name_210", "address_210", "phone_210");
  tryToDeleteANonExistingGarage(210, 210, "name_210", "address_210", "phone_210");
  verifyGarageDoesNotExist(210, 210, "name_210", "address_210", "phone_210");
});

// Story: crud:Garage:nondet:1:2
bthread("crud:Garage:nondet:1:2", function () {
  let garageId = 211;
  let chainId = 211;
  let name = "name_211";
  let address = "address_211";
  let phone = "phone_211";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let chainId = captured["chainId"];
  createGarage(211, 211, "name_211", "address_211", "phone_211");
  tryToAddExistingGarage(211, 211, "name_211", "address_211", "phone_211");
  updateGarage(211, 211, "name_211", "address_211", "phone_211");
  verifyGarageExists(211, 211, "name_211", "address_211", "phone_211");
  deleteGarage(211, 211, "name_211", "address_211", "phone_211");
  tryToDeleteANonExistingGarage(211, 211, "name_211", "address_211", "phone_211");
  verifyGarageDoesNotExist(211, 211, "name_211", "address_211", "phone_211");
});

// Story: crud:Garage:nondet:negative:dup-add
bthread("crud:Garage:nondet:negative:dup-add", function () {
  let garageId = 216;
  let chainId = 216;
  let name = "name_216";
  let address = "address_216";
  let phone = "phone_216";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let chainId = captured["chainId"];
  createGarage(216, 216, "name_216", "address_216", "phone_216");
  verifyGarageExists(216, 216, "name_216", "address_216", "phone_216");
  tryToAddExistingGarage(216, 216, "name_216", "address_216", "phone_216");
  verifyGarageExists(216, 216, "name_216", "address_216", "phone_216");
});

// Story: crud:Garage:nondet:existing:update
bthread("crud:Garage:nondet:existing:update", function () {
  let ev = waitForAnyGarageAdded();
  let args = Object.values(ev);
  block(matchDeletedGarage.apply(null, args), function () {
    verifyGarageExists.apply(null, args);
    updateGarage.apply(null, args);
    verifyGarageExists.apply(null, args);
  });
});

// Story: monitor:Garage:add
bthread("monitor:Garage:add", function () {
  while (true) {
    let ev = waitForAnyGarageAdded();
    let args = Object.values(ev);
    block(matchDeletedGarage.apply(null, args), function () {
      verifyGarageExists.apply(null, args);
    });
  }
});

// Story: crud:Customer:nondet:1:1
bthread("crud:Customer:nondet:1:1", function () {
  let customerId = 220;
  let type = "type_220";
  let fullName = "fullName_220";
  let email = "email_220";
  let phone = "phone_220";
  createCustomer(220, "type_220", "fullName_220", "email_220", "phone_220");
  waitForCustomerAdded(220, "type_220", "fullName_220", "email_220", "phone_220");
  tryToAddExistingCustomer(220, "type_220", "fullName_220", "email_220", "phone_220");
  verifyCustomerExists(220, "type_220", "fullName_220", "email_220", "phone_220");
  updateCustomer(220, "type_220", "fullName_220", "email_220", "phone_220");
  deleteCustomer(220, "type_220", "fullName_220", "email_220", "phone_220");
  tryToDeleteANonExistingCustomer(220, "type_220", "fullName_220", "email_220", "phone_220");
  verifyCustomerDoesNotExist(220, "type_220", "fullName_220", "email_220", "phone_220");
});

// Story: crud:Customer:nondet:1:2
bthread("crud:Customer:nondet:1:2", function () {
  let customerId = 221;
  let type = "type_221";
  let fullName = "fullName_221";
  let email = "email_221";
  let phone = "phone_221";
  createCustomer(221, "type_221", "fullName_221", "email_221", "phone_221");
  waitForCustomerAdded(221, "type_221", "fullName_221", "email_221", "phone_221");
  tryToAddExistingCustomer(221, "type_221", "fullName_221", "email_221", "phone_221");
  updateCustomer(221, "type_221", "fullName_221", "email_221", "phone_221");
  verifyCustomerExists(221, "type_221", "fullName_221", "email_221", "phone_221");
  deleteCustomer(221, "type_221", "fullName_221", "email_221", "phone_221");
  tryToDeleteANonExistingCustomer(221, "type_221", "fullName_221", "email_221", "phone_221");
  verifyCustomerDoesNotExist(221, "type_221", "fullName_221", "email_221", "phone_221");
});

// Story: crud:Customer:nondet:negative:dup-add
bthread("crud:Customer:nondet:negative:dup-add", function () {
  let customerId = 226;
  let type = "type_226";
  let fullName = "fullName_226";
  let email = "email_226";
  let phone = "phone_226";
  createCustomer(226, "type_226", "fullName_226", "email_226", "phone_226");
  waitForCustomerAdded(226, "type_226", "fullName_226", "email_226", "phone_226");
  verifyCustomerExists(226, "type_226", "fullName_226", "email_226", "phone_226");
  tryToAddExistingCustomer(226, "type_226", "fullName_226", "email_226", "phone_226");
  verifyCustomerExists(226, "type_226", "fullName_226", "email_226", "phone_226");
});

// Story: crud:Customer:nondet:existing:update
bthread("crud:Customer:nondet:existing:update", function () {
  let ev = waitForAnyCustomerAdded();
  let args = Object.values(ev);
  block(matchDeletedCustomer.apply(null, args), function () {
    verifyCustomerExists.apply(null, args);
    updateCustomer.apply(null, args);
    verifyCustomerExists.apply(null, args);
  });
});

// Story: monitor:Customer:add
bthread("monitor:Customer:add", function () {
  while (true) {
    let ev = waitForAnyCustomerAdded();
    let args = Object.values(ev);
    block(matchDeletedCustomer.apply(null, args), function () {
      verifyCustomerExists.apply(null, args);
    });
  }
});

// Story: crud:Car:nondet:1:1
bthread("crud:Car:nondet:1:1", function () {
  let vin = 230;
  let make = "make_230";
  let model = "model_230";
  let year = "year_230";
  let mileage = "mileage_230";
  let ownerCustomerId = 230;
  // Dependency Barrier
  let deps = {};
  deps["ownerCustomerId"] = matchAnyCustomerAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let ownerCustomerId = captured["ownerCustomerId"];
  createCar(230, "make_230", "model_230", "year_230", "mileage_230", 230);
  tryToAddExistingCar(230, "make_230", "model_230", "year_230", "mileage_230", 230);
  verifyCarExists(230, "make_230", "model_230", "year_230", "mileage_230", 230);
  updateCar(230, "make_230", "model_230", "year_230", "mileage_230", 230);
  deleteCar(230, "make_230", "model_230", "year_230", "mileage_230", 230);
  tryToDeleteANonExistingCar(230, "make_230", "model_230", "year_230", "mileage_230", 230);
  verifyCarDoesNotExist(230, "make_230", "model_230", "year_230", "mileage_230", 230);
});

// Story: crud:Car:nondet:1:2
bthread("crud:Car:nondet:1:2", function () {
  let vin = 231;
  let make = "make_231";
  let model = "model_231";
  let year = "year_231";
  let mileage = "mileage_231";
  let ownerCustomerId = 231;
  // Dependency Barrier
  let deps = {};
  deps["ownerCustomerId"] = matchAnyCustomerAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let ownerCustomerId = captured["ownerCustomerId"];
  createCar(231, "make_231", "model_231", "year_231", "mileage_231", 231);
  tryToAddExistingCar(231, "make_231", "model_231", "year_231", "mileage_231", 231);
  updateCar(231, "make_231", "model_231", "year_231", "mileage_231", 231);
  verifyCarExists(231, "make_231", "model_231", "year_231", "mileage_231", 231);
  deleteCar(231, "make_231", "model_231", "year_231", "mileage_231", 231);
  tryToDeleteANonExistingCar(231, "make_231", "model_231", "year_231", "mileage_231", 231);
  verifyCarDoesNotExist(231, "make_231", "model_231", "year_231", "mileage_231", 231);
});

// Story: crud:Car:nondet:negative:dup-add
bthread("crud:Car:nondet:negative:dup-add", function () {
  let vin = 236;
  let make = "make_236";
  let model = "model_236";
  let year = "year_236";
  let mileage = "mileage_236";
  let ownerCustomerId = 236;
  // Dependency Barrier
  let deps = {};
  deps["ownerCustomerId"] = matchAnyCustomerAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let ownerCustomerId = captured["ownerCustomerId"];
  createCar(236, "make_236", "model_236", "year_236", "mileage_236", 236);
  verifyCarExists(236, "make_236", "model_236", "year_236", "mileage_236", 236);
  tryToAddExistingCar(236, "make_236", "model_236", "year_236", "mileage_236", 236);
  verifyCarExists(236, "make_236", "model_236", "year_236", "mileage_236", 236);
});

// Story: crud:Car:nondet:existing:update
bthread("crud:Car:nondet:existing:update", function () {
  let ev = waitForAnyCarAdded();
  let args = Object.values(ev);
  block(matchDeletedCar.apply(null, args), function () {
    verifyCarExists.apply(null, args);
    updateCar.apply(null, args);
    verifyCarExists.apply(null, args);
  });
});

// Story: monitor:Car:add
bthread("monitor:Car:add", function () {
  while (true) {
    let ev = waitForAnyCarAdded();
    let args = Object.values(ev);
    block(matchDeletedCar.apply(null, args), function () {
      verifyCarExists.apply(null, args);
    });
  }
});

// Story: crud:PeriodicMaintenance:nondet:1:1
bthread("crud:PeriodicMaintenance:nondet:1:1", function () {
  let pmId = 240;
  let carVin = "carVin_240";
  let garageId = 240;
  let planType = "planType_240";
  let tasks = "tasks_240";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let carVin = captured["carVin"];
  let garageId = captured["garageId"];
  createPeriodicMaintenance(240, "carVin_240", 240, "planType_240", "tasks_240");
  tryToAddExistingPeriodicMaintenance(240, "carVin_240", 240, "planType_240", "tasks_240");
  verifyPeriodicMaintenanceExists(240, "carVin_240", 240, "planType_240", "tasks_240");
  updatePeriodicMaintenance(240, "carVin_240", 240, "planType_240", "tasks_240");
  deletePeriodicMaintenance(240, "carVin_240", 240, "planType_240", "tasks_240");
  tryToDeleteANonExistingPeriodicMaintenance(240, "carVin_240", 240, "planType_240", "tasks_240");
  verifyPeriodicMaintenanceDoesNotExist(240, "carVin_240", 240, "planType_240", "tasks_240");
});

// Story: crud:PeriodicMaintenance:nondet:1:2
bthread("crud:PeriodicMaintenance:nondet:1:2", function () {
  let pmId = 241;
  let carVin = "carVin_241";
  let garageId = 241;
  let planType = "planType_241";
  let tasks = "tasks_241";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let carVin = captured["carVin"];
  let garageId = captured["garageId"];
  createPeriodicMaintenance(241, "carVin_241", 241, "planType_241", "tasks_241");
  tryToAddExistingPeriodicMaintenance(241, "carVin_241", 241, "planType_241", "tasks_241");
  updatePeriodicMaintenance(241, "carVin_241", 241, "planType_241", "tasks_241");
  verifyPeriodicMaintenanceExists(241, "carVin_241", 241, "planType_241", "tasks_241");
  deletePeriodicMaintenance(241, "carVin_241", 241, "planType_241", "tasks_241");
  tryToDeleteANonExistingPeriodicMaintenance(241, "carVin_241", 241, "planType_241", "tasks_241");
  verifyPeriodicMaintenanceDoesNotExist(241, "carVin_241", 241, "planType_241", "tasks_241");
});

// Story: crud:PeriodicMaintenance:nondet:negative:dup-add
bthread("crud:PeriodicMaintenance:nondet:negative:dup-add", function () {
  let pmId = 246;
  let carVin = "carVin_246";
  let garageId = 246;
  let planType = "planType_246";
  let tasks = "tasks_246";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let carVin = captured["carVin"];
  let garageId = captured["garageId"];
  createPeriodicMaintenance(246, "carVin_246", 246, "planType_246", "tasks_246");
  verifyPeriodicMaintenanceExists(246, "carVin_246", 246, "planType_246", "tasks_246");
  tryToAddExistingPeriodicMaintenance(246, "carVin_246", 246, "planType_246", "tasks_246");
  verifyPeriodicMaintenanceExists(246, "carVin_246", 246, "planType_246", "tasks_246");
});

// Story: crud:PeriodicMaintenance:nondet:existing:update
bthread("crud:PeriodicMaintenance:nondet:existing:update", function () {
  let ev = waitForAnyPeriodicMaintenanceAdded();
  let args = Object.values(ev);
  block(matchDeletedPeriodicMaintenance.apply(null, args), function () {
    verifyPeriodicMaintenanceExists.apply(null, args);
    updatePeriodicMaintenance.apply(null, args);
    verifyPeriodicMaintenanceExists.apply(null, args);
  });
});

// Story: monitor:PeriodicMaintenance:add
bthread("monitor:PeriodicMaintenance:add", function () {
  while (true) {
    let ev = waitForAnyPeriodicMaintenanceAdded();
    let args = Object.values(ev);
    block(matchDeletedPeriodicMaintenance.apply(null, args), function () {
      verifyPeriodicMaintenanceExists.apply(null, args);
    });
  }
});

// Story: crud:RepairOrder:nondet:1:1
bthread("crud:RepairOrder:nondet:1:1", function () {
  let roId = 250;
  let carVin = "carVin_250";
  let customerId = 250;
  let garageId = 250;
  let complaint = "complaint_250";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarAdded();
  deps["customerId"] = matchAnyCustomerAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let carVin = captured["carVin"];
  let customerId = captured["customerId"];
  let garageId = captured["garageId"];
  createRepairOrder(250, "carVin_250", 250, 250, "complaint_250");
  tryToAddExistingRepairOrder(250, "carVin_250", 250, 250, "complaint_250");
  verifyRepairOrderExists(250, "carVin_250", 250, 250, "complaint_250");
  updateRepairOrder(250, "carVin_250", 250, 250, "complaint_250");
  deleteRepairOrder(250, "carVin_250", 250, 250, "complaint_250");
  tryToDeleteANonExistingRepairOrder(250, "carVin_250", 250, 250, "complaint_250");
  verifyRepairOrderDoesNotExist(250, "carVin_250", 250, 250, "complaint_250");
});

// Story: crud:RepairOrder:nondet:1:2
bthread("crud:RepairOrder:nondet:1:2", function () {
  let roId = 251;
  let carVin = "carVin_251";
  let customerId = 251;
  let garageId = 251;
  let complaint = "complaint_251";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarAdded();
  deps["customerId"] = matchAnyCustomerAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let carVin = captured["carVin"];
  let customerId = captured["customerId"];
  let garageId = captured["garageId"];
  createRepairOrder(251, "carVin_251", 251, 251, "complaint_251");
  tryToAddExistingRepairOrder(251, "carVin_251", 251, 251, "complaint_251");
  updateRepairOrder(251, "carVin_251", 251, 251, "complaint_251");
  verifyRepairOrderExists(251, "carVin_251", 251, 251, "complaint_251");
  deleteRepairOrder(251, "carVin_251", 251, 251, "complaint_251");
  tryToDeleteANonExistingRepairOrder(251, "carVin_251", 251, 251, "complaint_251");
  verifyRepairOrderDoesNotExist(251, "carVin_251", 251, 251, "complaint_251");
});

// Story: crud:RepairOrder:nondet:negative:dup-add
bthread("crud:RepairOrder:nondet:negative:dup-add", function () {
  let roId = 256;
  let carVin = "carVin_256";
  let customerId = 256;
  let garageId = 256;
  let complaint = "complaint_256";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarAdded();
  deps["customerId"] = matchAnyCustomerAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let e = bp.sync({waitFor: Object.values(deps)});
    for (let k in deps) {
       if (deps[k].contains(e)) {
         captured[k] = e.data.parameters[k] || e.data.parameters.id;
         delete deps[k];
       }
    }
  }
  let carVin = captured["carVin"];
  let customerId = captured["customerId"];
  let garageId = captured["garageId"];
  createRepairOrder(256, "carVin_256", 256, 256, "complaint_256");
  verifyRepairOrderExists(256, "carVin_256", 256, 256, "complaint_256");
  tryToAddExistingRepairOrder(256, "carVin_256", 256, 256, "complaint_256");
  verifyRepairOrderExists(256, "carVin_256", 256, 256, "complaint_256");
});

// Story: crud:RepairOrder:nondet:existing:update
bthread("crud:RepairOrder:nondet:existing:update", function () {
  let ev = waitForAnyRepairOrderAdded();
  let args = Object.values(ev);
  block(matchDeletedRepairOrder.apply(null, args), function () {
    verifyRepairOrderExists.apply(null, args);
    updateRepairOrder.apply(null, args);
    verifyRepairOrderExists.apply(null, args);
  });
});

// Story: monitor:RepairOrder:add
bthread("monitor:RepairOrder:add", function () {
  while (true) {
    let ev = waitForAnyRepairOrderAdded();
    let args = Object.values(ev);
    block(matchDeletedRepairOrder.apply(null, args), function () {
      verifyRepairOrderExists.apply(null, args);
    });
  }
});
