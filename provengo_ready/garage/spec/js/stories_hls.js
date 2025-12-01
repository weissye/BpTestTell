// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    bp.log.info("Guard waiting for: " + Object.keys(deps).join(", "));
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("Guard received event: " + e.name);
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        delete deps[k];
        if (captured[k]) bp.log.info("Captured " + k + ": " + captured[k]);
      }
    }
  }
  return captured;
}

// Story: crud:Chain:nondet:1:1
bthread("crud:Chain:nondet:1:1", function () {
  let chainId = 200;
  let hqAddress = {};
  let name = "name_200";
  createChain(active, chainId, hqAddress, name, supportEmail);
  // waitForChainAdded(active, chainId, hqAddress, name, supportEmail);
  tryToAddExistingChain(active, chainId, hqAddress, name, supportEmail);
  verifyChainExists(chainId);
  updateChain(active, chainId, hqAddress, name, supportEmail);
  deleteChain(chainId);
  tryToDeleteANonExistingChain(chainId);
  verifyChainDoesNotExist(chainId);
});

// Story: crud:Chain:nondet:1:2
bthread("crud:Chain:nondet:1:2", function () {
  let chainId = 201;
  let hqAddress = {};
  let name = "name_201";
  createChain(active, chainId, hqAddress, name, supportEmail);
  // waitForChainAdded(active, chainId, hqAddress, name, supportEmail);
  tryToAddExistingChain(active, chainId, hqAddress, name, supportEmail);
  updateChain(active, chainId, hqAddress, name, supportEmail);
  verifyChainExists(chainId);
  deleteChain(chainId);
  tryToDeleteANonExistingChain(chainId);
  verifyChainDoesNotExist(chainId);
});

// Story: crud:Chain:nondet:negative:dup-add
bthread("crud:Chain:nondet:negative:dup-add", function () {
  let chainId = 206;
  let hqAddress = {};
  let name = "name_206";
  createChain(active, chainId, hqAddress, name, supportEmail);
  // waitForChainAdded(active, chainId, hqAddress, name, supportEmail);
  verifyChainExists(chainId);
  tryToAddExistingChain(active, chainId, hqAddress, name, supportEmail);
  verifyChainExists(chainId);
});

// Story: crud:Garage:nondet:1:1
bthread("crud:Garage:nondet:1:1", function () {
  let address = {};
  let garageId = 210;
  let name = "name_210";
  let phone = "phone_210";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainAdded();
  let captured = resolveDependencies(deps);
  chainId = captured["chainId"];
  if (!chainId) chainId = captured["chainId"];
  if (!chainId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("chain") > -1 || key.toLowerCase().indexOf("id") > -1) {
             chainId = captured[key]; break;
         }
      }
  }
  createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  // waitForGarageAdded(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToAddExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageExists(garageId);
  updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  deleteGarage(garageId);
  tryToDeleteANonExistingGarage(garageId);
  verifyGarageDoesNotExist(garageId);
});

// Story: crud:Garage:nondet:1:2
bthread("crud:Garage:nondet:1:2", function () {
  let address = {};
  let garageId = 211;
  let name = "name_211";
  let phone = "phone_211";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainAdded();
  let captured = resolveDependencies(deps);
  chainId = captured["chainId"];
  if (!chainId) chainId = captured["chainId"];
  if (!chainId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("chain") > -1 || key.toLowerCase().indexOf("id") > -1) {
             chainId = captured[key]; break;
         }
      }
  }
  createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  // waitForGarageAdded(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToAddExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageExists(garageId);
  deleteGarage(garageId);
  tryToDeleteANonExistingGarage(garageId);
  verifyGarageDoesNotExist(garageId);
});

// Story: crud:Garage:nondet:negative:dup-add
bthread("crud:Garage:nondet:negative:dup-add", function () {
  let address = {};
  let garageId = 216;
  let name = "name_216";
  let phone = "phone_216";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainAdded();
  let captured = resolveDependencies(deps);
  chainId = captured["chainId"];
  if (!chainId) chainId = captured["chainId"];
  if (!chainId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("chain") > -1 || key.toLowerCase().indexOf("id") > -1) {
             chainId = captured[key]; break;
         }
      }
  }
  createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  // waitForGarageAdded(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageExists(garageId);
  tryToAddExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageExists(garageId);
});

// Story: crud:Customer:nondet:1:1
bthread("crud:Customer:nondet:1:1", function () {
  let customerId = 220;
  let email = "email_220";
  let fullName = "fullName_220";
  let phone = "phone_220";
  let type = "type_220";
  createCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  // waitForCustomerAdded(customerId, email, fullName, phone, preferredGarageId, type);
  tryToAddExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerExists(customerId);
  updateCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  deleteCustomer(customerId);
  tryToDeleteANonExistingCustomer(customerId);
  verifyCustomerDoesNotExist(customerId);
});

// Story: crud:Customer:nondet:1:2
bthread("crud:Customer:nondet:1:2", function () {
  let customerId = 221;
  let email = "email_221";
  let fullName = "fullName_221";
  let phone = "phone_221";
  let type = "type_221";
  createCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  // waitForCustomerAdded(customerId, email, fullName, phone, preferredGarageId, type);
  tryToAddExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  updateCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerExists(customerId);
  deleteCustomer(customerId);
  tryToDeleteANonExistingCustomer(customerId);
  verifyCustomerDoesNotExist(customerId);
});

// Story: crud:Customer:nondet:negative:dup-add
bthread("crud:Customer:nondet:negative:dup-add", function () {
  let customerId = 226;
  let email = "email_226";
  let fullName = "fullName_226";
  let phone = "phone_226";
  let type = "type_226";
  createCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  // waitForCustomerAdded(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerExists(customerId);
  tryToAddExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerExists(customerId);
});

// Story: crud:Car:nondet:1:1
bthread("crud:Car:nondet:1:1", function () {
  let make = "make_230";
  let mileage = 230;
  let model = "model_230";
  let vin = 230;
  let year = 230;
  // Dependency Barrier
  let deps = {};
  deps["ownerCustomerId"] = matchAnyCustomerAdded();
  let captured = resolveDependencies(deps);
  ownerCustomerId = captured["ownerCustomerId"];
  if (!ownerCustomerId) ownerCustomerId = captured["customerId"];
  if (!ownerCustomerId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("customer") > -1 || key.toLowerCase().indexOf("id") > -1) {
             ownerCustomerId = captured[key]; break;
         }
      }
  }
  createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  // waitForCarAdded(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(vin);
  updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  deleteCar(vin);
  tryToDeleteANonExistingCar(vin);
  verifyCarDoesNotExist(vin);
});

// Story: crud:Car:nondet:1:2
bthread("crud:Car:nondet:1:2", function () {
  let make = "make_231";
  let mileage = 231;
  let model = "model_231";
  let vin = 231;
  let year = 231;
  // Dependency Barrier
  let deps = {};
  deps["ownerCustomerId"] = matchAnyCustomerAdded();
  let captured = resolveDependencies(deps);
  ownerCustomerId = captured["ownerCustomerId"];
  if (!ownerCustomerId) ownerCustomerId = captured["customerId"];
  if (!ownerCustomerId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("customer") > -1 || key.toLowerCase().indexOf("id") > -1) {
             ownerCustomerId = captured[key]; break;
         }
      }
  }
  createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  // waitForCarAdded(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(vin);
  deleteCar(vin);
  tryToDeleteANonExistingCar(vin);
  verifyCarDoesNotExist(vin);
});

// Story: crud:Car:nondet:negative:dup-add
bthread("crud:Car:nondet:negative:dup-add", function () {
  let make = "make_236";
  let mileage = 236;
  let model = "model_236";
  let vin = 236;
  let year = 236;
  // Dependency Barrier
  let deps = {};
  deps["ownerCustomerId"] = matchAnyCustomerAdded();
  let captured = resolveDependencies(deps);
  ownerCustomerId = captured["ownerCustomerId"];
  if (!ownerCustomerId) ownerCustomerId = captured["customerId"];
  if (!ownerCustomerId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("customer") > -1 || key.toLowerCase().indexOf("id") > -1) {
             ownerCustomerId = captured[key]; break;
         }
      }
  }
  createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  // waitForCarAdded(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(vin);
  tryToAddExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(vin);
});

// Story: crud:PeriodicMaintenance:nondet:1:1
bthread("crud:PeriodicMaintenance:nondet:1:1", function () {
  let carVin = "carVin_240";
  let planType = "planType_240";
  let pmId = 240;
  let tasks = "tasks_240";
  // Dependency Barrier
  let deps = {};
  deps["garageId"] = matchAnyGarageAdded();
  let captured = resolveDependencies(deps);
  garageId = captured["garageId"];
  if (!garageId) garageId = captured["garageId"];
  if (!garageId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("garage") > -1 || key.toLowerCase().indexOf("id") > -1) {
             garageId = captured[key]; break;
         }
      }
  }
  createPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  // waitForPeriodicMaintenanceAdded(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceExists(pmId);
  updatePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  deletePeriodicMaintenance(pmId);
  tryToDeleteANonExistingPeriodicMaintenance(pmId);
  verifyPeriodicMaintenanceDoesNotExist(pmId);
});

// Story: crud:PeriodicMaintenance:nondet:1:2
bthread("crud:PeriodicMaintenance:nondet:1:2", function () {
  let carVin = "carVin_241";
  let planType = "planType_241";
  let pmId = 241;
  let tasks = "tasks_241";
  // Dependency Barrier
  let deps = {};
  deps["garageId"] = matchAnyGarageAdded();
  let captured = resolveDependencies(deps);
  garageId = captured["garageId"];
  if (!garageId) garageId = captured["garageId"];
  if (!garageId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("garage") > -1 || key.toLowerCase().indexOf("id") > -1) {
             garageId = captured[key]; break;
         }
      }
  }
  createPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  // waitForPeriodicMaintenanceAdded(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  updatePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceExists(pmId);
  deletePeriodicMaintenance(pmId);
  tryToDeleteANonExistingPeriodicMaintenance(pmId);
  verifyPeriodicMaintenanceDoesNotExist(pmId);
});

// Story: crud:PeriodicMaintenance:nondet:negative:dup-add
bthread("crud:PeriodicMaintenance:nondet:negative:dup-add", function () {
  let carVin = "carVin_246";
  let planType = "planType_246";
  let pmId = 246;
  let tasks = "tasks_246";
  // Dependency Barrier
  let deps = {};
  deps["garageId"] = matchAnyGarageAdded();
  let captured = resolveDependencies(deps);
  garageId = captured["garageId"];
  if (!garageId) garageId = captured["garageId"];
  if (!garageId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("garage") > -1 || key.toLowerCase().indexOf("id") > -1) {
             garageId = captured[key]; break;
         }
      }
  }
  createPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  // waitForPeriodicMaintenanceAdded(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceExists(pmId);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceExists(pmId);
});

// Story: crud:RepairOrder:nondet:1:1
bthread("crud:RepairOrder:nondet:1:1", function () {
  let carVin = "carVin_250";
  let complaint = "complaint_250";
  let roId = 250;
  // Dependency Barrier
  let deps = {};
  deps["customerId"] = matchAnyCustomerAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let captured = resolveDependencies(deps);
  customerId = captured["customerId"];
  if (!customerId) customerId = captured["customerId"];
  if (!customerId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("customer") > -1 || key.toLowerCase().indexOf("id") > -1) {
             customerId = captured[key]; break;
         }
      }
  }
  garageId = captured["garageId"];
  if (!garageId) garageId = captured["garageId"];
  if (!garageId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("garage") > -1 || key.toLowerCase().indexOf("id") > -1) {
             garageId = captured[key]; break;
         }
      }
  }
  createRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  // waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId, status);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(roId);
  updateRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  deleteRepairOrder(roId);
  tryToDeleteANonExistingRepairOrder(roId);
  verifyRepairOrderDoesNotExist(roId);
});

// Story: crud:RepairOrder:nondet:1:2
bthread("crud:RepairOrder:nondet:1:2", function () {
  let carVin = "carVin_251";
  let complaint = "complaint_251";
  let roId = 251;
  // Dependency Barrier
  let deps = {};
  deps["customerId"] = matchAnyCustomerAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let captured = resolveDependencies(deps);
  customerId = captured["customerId"];
  if (!customerId) customerId = captured["customerId"];
  if (!customerId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("customer") > -1 || key.toLowerCase().indexOf("id") > -1) {
             customerId = captured[key]; break;
         }
      }
  }
  garageId = captured["garageId"];
  if (!garageId) garageId = captured["garageId"];
  if (!garageId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("garage") > -1 || key.toLowerCase().indexOf("id") > -1) {
             garageId = captured[key]; break;
         }
      }
  }
  createRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  // waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId, status);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  updateRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(roId);
  deleteRepairOrder(roId);
  tryToDeleteANonExistingRepairOrder(roId);
  verifyRepairOrderDoesNotExist(roId);
});

// Story: crud:RepairOrder:nondet:negative:dup-add
bthread("crud:RepairOrder:nondet:negative:dup-add", function () {
  let carVin = "carVin_256";
  let complaint = "complaint_256";
  let roId = 256;
  // Dependency Barrier
  let deps = {};
  deps["customerId"] = matchAnyCustomerAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let captured = resolveDependencies(deps);
  customerId = captured["customerId"];
  if (!customerId) customerId = captured["customerId"];
  if (!customerId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("customer") > -1 || key.toLowerCase().indexOf("id") > -1) {
             customerId = captured[key]; break;
         }
      }
  }
  garageId = captured["garageId"];
  if (!garageId) garageId = captured["garageId"];
  if (!garageId) {
      for (let key in captured) {
         if (key.toLowerCase().indexOf("garage") > -1 || key.toLowerCase().indexOf("id") > -1) {
             garageId = captured[key]; break;
         }
      }
  }
  createRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  // waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(roId);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(roId);
});
