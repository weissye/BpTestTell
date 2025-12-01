// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
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
  createChain(chainId, hqAddress, name);
  // waitForChainAdded(chainId, hqAddress, name);
  tryToAddExistingChain(chainId, hqAddress, name);
  verifyChainExists(chainId, hqAddress, name);
  updateChain(chainId, hqAddress, name);
  deleteChain(chainId, hqAddress, name);
  tryToDeleteANonExistingChain(chainId, hqAddress, name);
  verifyChainDoesNotExist(chainId, hqAddress, name);
});

// Story: crud:Chain:nondet:1:2
bthread("crud:Chain:nondet:1:2", function () {
  let chainId = 201;
  let hqAddress = {};
  let name = "name_201";
  createChain(chainId, hqAddress, name);
  // waitForChainAdded(chainId, hqAddress, name);
  tryToAddExistingChain(chainId, hqAddress, name);
  updateChain(chainId, hqAddress, name);
  verifyChainExists(chainId, hqAddress, name);
  deleteChain(chainId, hqAddress, name);
  tryToDeleteANonExistingChain(chainId, hqAddress, name);
  verifyChainDoesNotExist(chainId, hqAddress, name);
});

// Story: crud:Chain:nondet:negative:dup-add
bthread("crud:Chain:nondet:negative:dup-add", function () {
  let chainId = 206;
  let hqAddress = {};
  let name = "name_206";
  createChain(chainId, hqAddress, name);
  // waitForChainAdded(chainId, hqAddress, name);
  verifyChainExists(chainId, hqAddress, name);
  tryToAddExistingChain(chainId, hqAddress, name);
  verifyChainExists(chainId, hqAddress, name);
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
  createGarage(address, chainId, garageId, name, phone);
  // waitForGarageAdded(address, chainId, garageId, name, phone);
  tryToAddExistingGarage(address, chainId, garageId, name, phone);
  verifyGarageExists(address, chainId, garageId, name, phone);
  updateGarage(address, chainId, garageId, name, phone);
  deleteGarage(address, chainId, garageId, name, phone);
  tryToDeleteANonExistingGarage(address, chainId, garageId, name, phone);
  verifyGarageDoesNotExist(address, chainId, garageId, name, phone);
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
  createGarage(address, chainId, garageId, name, phone);
  // waitForGarageAdded(address, chainId, garageId, name, phone);
  tryToAddExistingGarage(address, chainId, garageId, name, phone);
  updateGarage(address, chainId, garageId, name, phone);
  verifyGarageExists(address, chainId, garageId, name, phone);
  deleteGarage(address, chainId, garageId, name, phone);
  tryToDeleteANonExistingGarage(address, chainId, garageId, name, phone);
  verifyGarageDoesNotExist(address, chainId, garageId, name, phone);
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
  createGarage(address, chainId, garageId, name, phone);
  // waitForGarageAdded(address, chainId, garageId, name, phone);
  verifyGarageExists(address, chainId, garageId, name, phone);
  tryToAddExistingGarage(address, chainId, garageId, name, phone);
  verifyGarageExists(address, chainId, garageId, name, phone);
});

// Story: crud:Customer:nondet:1:1
bthread("crud:Customer:nondet:1:1", function () {
  let customerId = 220;
  let email = "email_220";
  let fullName = "fullName_220";
  let phone = "phone_220";
  let type = "type_220";
  createCustomer(customerId, email, fullName, phone, type);
  // waitForCustomerAdded(customerId, email, fullName, phone, type);
  tryToAddExistingCustomer(customerId, email, fullName, phone, type);
  verifyCustomerExists(customerId, email, fullName, phone, type);
  updateCustomer(customerId, email, fullName, phone, type);
  deleteCustomer(customerId, email, fullName, phone, type);
  tryToDeleteANonExistingCustomer(customerId, email, fullName, phone, type);
  verifyCustomerDoesNotExist(customerId, email, fullName, phone, type);
});

// Story: crud:Customer:nondet:1:2
bthread("crud:Customer:nondet:1:2", function () {
  let customerId = 221;
  let email = "email_221";
  let fullName = "fullName_221";
  let phone = "phone_221";
  let type = "type_221";
  createCustomer(customerId, email, fullName, phone, type);
  // waitForCustomerAdded(customerId, email, fullName, phone, type);
  tryToAddExistingCustomer(customerId, email, fullName, phone, type);
  updateCustomer(customerId, email, fullName, phone, type);
  verifyCustomerExists(customerId, email, fullName, phone, type);
  deleteCustomer(customerId, email, fullName, phone, type);
  tryToDeleteANonExistingCustomer(customerId, email, fullName, phone, type);
  verifyCustomerDoesNotExist(customerId, email, fullName, phone, type);
});

// Story: crud:Customer:nondet:negative:dup-add
bthread("crud:Customer:nondet:negative:dup-add", function () {
  let customerId = 226;
  let email = "email_226";
  let fullName = "fullName_226";
  let phone = "phone_226";
  let type = "type_226";
  createCustomer(customerId, email, fullName, phone, type);
  // waitForCustomerAdded(customerId, email, fullName, phone, type);
  verifyCustomerExists(customerId, email, fullName, phone, type);
  tryToAddExistingCustomer(customerId, email, fullName, phone, type);
  verifyCustomerExists(customerId, email, fullName, phone, type);
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
  createCar(make, mileage, model, ownerCustomerId, vin, year);
  // waitForCarAdded(make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCar(make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(make, mileage, model, ownerCustomerId, vin, year);
  updateCar(make, mileage, model, ownerCustomerId, vin, year);
  deleteCar(make, mileage, model, ownerCustomerId, vin, year);
  tryToDeleteANonExistingCar(make, mileage, model, ownerCustomerId, vin, year);
  verifyCarDoesNotExist(make, mileage, model, ownerCustomerId, vin, year);
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
  createCar(make, mileage, model, ownerCustomerId, vin, year);
  // waitForCarAdded(make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCar(make, mileage, model, ownerCustomerId, vin, year);
  updateCar(make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(make, mileage, model, ownerCustomerId, vin, year);
  deleteCar(make, mileage, model, ownerCustomerId, vin, year);
  tryToDeleteANonExistingCar(make, mileage, model, ownerCustomerId, vin, year);
  verifyCarDoesNotExist(make, mileage, model, ownerCustomerId, vin, year);
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
  createCar(make, mileage, model, ownerCustomerId, vin, year);
  // waitForCarAdded(make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCar(make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(make, mileage, model, ownerCustomerId, vin, year);
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
  createPeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  // waitForPeriodicMaintenanceAdded(carVin, garageId, planType, pmId, tasks);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  verifyPeriodicMaintenanceExists(carVin, garageId, planType, pmId, tasks);
  updatePeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  deletePeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, planType, pmId, tasks);
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
  createPeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  // waitForPeriodicMaintenanceAdded(carVin, garageId, planType, pmId, tasks);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  updatePeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  verifyPeriodicMaintenanceExists(carVin, garageId, planType, pmId, tasks);
  deletePeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, planType, pmId, tasks);
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
  createPeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  // waitForPeriodicMaintenanceAdded(carVin, garageId, planType, pmId, tasks);
  verifyPeriodicMaintenanceExists(carVin, garageId, planType, pmId, tasks);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, planType, pmId, tasks);
  verifyPeriodicMaintenanceExists(carVin, garageId, planType, pmId, tasks);
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
  garageId = captured["garageId"];
  if (!garageId) garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, garageId, roId);
  // waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId);
  updateRepairOrder(carVin, complaint, customerId, garageId, roId);
  deleteRepairOrder(carVin, complaint, customerId, garageId, roId);
  tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId);
  verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId);
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
  garageId = captured["garageId"];
  if (!garageId) garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, garageId, roId);
  // waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId);
  updateRepairOrder(carVin, complaint, customerId, garageId, roId);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId);
  deleteRepairOrder(carVin, complaint, customerId, garageId, roId);
  tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId);
  verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId);
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
  garageId = captured["garageId"];
  if (!garageId) garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, garageId, roId);
  // waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId);
});
