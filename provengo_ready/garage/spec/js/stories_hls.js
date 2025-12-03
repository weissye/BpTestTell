// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:Chain:nondet:1:1
bthread("crud:Chain:nondet:1:1", function () {
  let active = "active_200";
  let chainId = 200;
  let hqAddress = {};
  let name = "name_200";
  let supportEmail = "supportEmail_200";
  createChain(active, chainId, hqAddress, name, supportEmail);
  waitForChainAdded(active, chainId, hqAddress, name, supportEmail);
  tryToAddExistingChain(active, chainId, hqAddress, name, supportEmail);
  verifyChainExists(active, chainId, hqAddress, name, supportEmail);
  updateChain(active, chainId, hqAddress, name, supportEmail);
  deleteChain(active, chainId, hqAddress, name, supportEmail);
  tryToDeleteANonExistingChain(active, chainId, hqAddress, name, supportEmail);
  verifyChainDoesNotExist(active, chainId, hqAddress, name, supportEmail);
});

// Story: crud:Chain:nondet:1:2
bthread("crud:Chain:nondet:1:2", function () {
  let active = "active_201";
  let chainId = 201;
  let hqAddress = {};
  let name = "name_201";
  let supportEmail = "supportEmail_201";
  createChain(active, chainId, hqAddress, name, supportEmail);
  // waitForChainAdded(active, chainId, hqAddress, name, supportEmail);
  tryToAddExistingChain(active, chainId, hqAddress, name, supportEmail);
  updateChain(active, chainId, hqAddress, name, supportEmail);
  verifyChainExists(active, chainId, hqAddress, name, supportEmail);
  deleteChain(active, chainId, hqAddress, name, supportEmail);
  tryToDeleteANonExistingChain(active, chainId, hqAddress, name, supportEmail);
  verifyChainDoesNotExist(active, chainId, hqAddress, name, supportEmail);
});

// Story: crud:Chain:nondet:negative:dup-add
bthread("crud:Chain:nondet:negative:dup-add", function () {
  let active = "active_206";
  let chainId = 206;
  let hqAddress = {};
  let name = "name_206";
  let supportEmail = "supportEmail_206";
  createChain(active, chainId, hqAddress, name, supportEmail);
  // waitForChainAdded(active, chainId, hqAddress, name, supportEmail);
  verifyChainExists(active, chainId, hqAddress, name, supportEmail);
  tryToAddExistingChain(active, chainId, hqAddress, name, supportEmail);
  verifyChainExists(active, chainId, hqAddress, name, supportEmail);
});

// Story: crud:Garage:nondet:1:1
bthread("crud:Garage:nondet:1:1", function () {
  let active = "active_210";
  let address = {};
  let bayCount = 210;
  let chainId;
  let garageId = 210;
  let name = "name_210";
  let phone = "phone_210";
  let servicesOffered = "servicesOffered_210";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainAdded();
  let pkMap = {"chainId": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  chainId = captured["chainId"];
  createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  waitForGarageAdded(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToAddExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  deleteGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToDeleteANonExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageDoesNotExist(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
});

// Story: crud:Garage:nondet:1:2
bthread("crud:Garage:nondet:1:2", function () {
  let active = "active_211";
  let address = {};
  let bayCount = 211;
  let chainId;
  let garageId = 211;
  let name = "name_211";
  let phone = "phone_211";
  let servicesOffered = "servicesOffered_211";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainAdded();
  let pkMap = {"chainId": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  chainId = captured["chainId"];
  createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  // waitForGarageAdded(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToAddExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  deleteGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToDeleteANonExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageDoesNotExist(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
});

// Story: crud:Garage:nondet:negative:dup-add
bthread("crud:Garage:nondet:negative:dup-add", function () {
  let active = "active_216";
  let address = {};
  let bayCount = 216;
  let chainId;
  let garageId = 216;
  let name = "name_216";
  let phone = "phone_216";
  let servicesOffered = "servicesOffered_216";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainAdded();
  let pkMap = {"chainId": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  chainId = captured["chainId"];
  createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  // waitForGarageAdded(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToAddExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGarageExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
});

// Story: crud:Customer:nondet:1:1
bthread("crud:Customer:nondet:1:1", function () {
  let customerId = 220;
  let email = "email_220";
  let fullName = "fullName_220";
  let phone = "phone_220";
  let preferredGarageId;
  let type = "type_220";
  // Dependency Barrier
  let deps = {};
  deps["preferredGarageId"] = matchAnyGarageAdded();
  let pkMap = {"preferredGarageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  preferredGarageId = captured["preferredGarageId"];
  createCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  waitForCustomerAdded(customerId, email, fullName, phone, preferredGarageId, type);
  tryToAddExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerExists(customerId, email, fullName, phone, preferredGarageId, type);
  updateCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  deleteCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  tryToDeleteANonExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerDoesNotExist(customerId, email, fullName, phone, preferredGarageId, type);
});

// Story: crud:Customer:nondet:1:2
bthread("crud:Customer:nondet:1:2", function () {
  let customerId = 221;
  let email = "email_221";
  let fullName = "fullName_221";
  let phone = "phone_221";
  let preferredGarageId;
  let type = "type_221";
  // Dependency Barrier
  let deps = {};
  deps["preferredGarageId"] = matchAnyGarageAdded();
  let pkMap = {"preferredGarageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  preferredGarageId = captured["preferredGarageId"];
  createCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  // waitForCustomerAdded(customerId, email, fullName, phone, preferredGarageId, type);
  tryToAddExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  updateCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerExists(customerId, email, fullName, phone, preferredGarageId, type);
  deleteCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  tryToDeleteANonExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerDoesNotExist(customerId, email, fullName, phone, preferredGarageId, type);
});

// Story: crud:Customer:nondet:negative:dup-add
bthread("crud:Customer:nondet:negative:dup-add", function () {
  let customerId = 226;
  let email = "email_226";
  let fullName = "fullName_226";
  let phone = "phone_226";
  let preferredGarageId;
  let type = "type_226";
  // Dependency Barrier
  let deps = {};
  deps["preferredGarageId"] = matchAnyGarageAdded();
  let pkMap = {"preferredGarageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  preferredGarageId = captured["preferredGarageId"];
  createCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  // waitForCustomerAdded(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerExists(customerId, email, fullName, phone, preferredGarageId, type);
  tryToAddExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomerExists(customerId, email, fullName, phone, preferredGarageId, type);
});

// Story: crud:Car:nondet:1:1
bthread("crud:Car:nondet:1:1", function () {
  let homeGarageId;
  let make = "make_230";
  let mileage = 230;
  let model = "model_230";
  let ownerCustomerId;
  let vin = 230;
  let year = 230;
  // Dependency Barrier
  let deps = {};
  deps["homeGarageId"] = matchAnyGarageAdded();
  deps["ownerCustomerId"] = matchAnyCustomerAdded();
  let pkMap = {"homeGarageId": "garageId", "ownerCustomerId": "customerId"};
  let captured = resolveDependencies(deps, pkMap);
  homeGarageId = captured["homeGarageId"];
  ownerCustomerId = captured["ownerCustomerId"];
  createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  waitForCarAdded(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  deleteCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToDeleteANonExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarDoesNotExist(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
});

// Story: crud:Car:nondet:1:2
bthread("crud:Car:nondet:1:2", function () {
  let homeGarageId;
  let make = "make_231";
  let mileage = 231;
  let model = "model_231";
  let ownerCustomerId;
  let vin = 231;
  let year = 231;
  // Dependency Barrier
  let deps = {};
  deps["homeGarageId"] = matchAnyGarageAdded();
  deps["ownerCustomerId"] = matchAnyCustomerAdded();
  let pkMap = {"homeGarageId": "garageId", "ownerCustomerId": "customerId"};
  let captured = resolveDependencies(deps, pkMap);
  homeGarageId = captured["homeGarageId"];
  ownerCustomerId = captured["ownerCustomerId"];
  createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  // waitForCarAdded(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  deleteCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToDeleteANonExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarDoesNotExist(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
});

// Story: crud:Car:nondet:negative:dup-add
bthread("crud:Car:nondet:negative:dup-add", function () {
  let homeGarageId;
  let make = "make_236";
  let mileage = 236;
  let model = "model_236";
  let ownerCustomerId;
  let vin = 236;
  let year = 236;
  // Dependency Barrier
  let deps = {};
  deps["homeGarageId"] = matchAnyGarageAdded();
  deps["ownerCustomerId"] = matchAnyCustomerAdded();
  let pkMap = {"homeGarageId": "garageId", "ownerCustomerId": "customerId"};
  let captured = resolveDependencies(deps, pkMap);
  homeGarageId = captured["homeGarageId"];
  ownerCustomerId = captured["ownerCustomerId"];
  createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  // waitForCarAdded(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
});

// Story: crud:PeriodicMaintenance:nondet:1:1
bthread("crud:PeriodicMaintenance:nondet:1:1", function () {
  let carVin = "carVin_240";
  let garageId;
  let intervalKm = 240;
  let intervalMonths = 240;
  let planType = "planType_240";
  let pmId = 240;
  let status = "status_240";
  let tasks = "tasks_240";
  // Dependency Barrier
  let deps = {};
  deps["garageId"] = matchAnyGarageAdded();
  let pkMap = {"garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  garageId = captured["garageId"];
  createPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  waitForPeriodicMaintenanceAdded(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  updatePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  deletePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
});

// Story: crud:PeriodicMaintenance:nondet:1:2
bthread("crud:PeriodicMaintenance:nondet:1:2", function () {
  let carVin = "carVin_241";
  let garageId;
  let intervalKm = 241;
  let intervalMonths = 241;
  let planType = "planType_241";
  let pmId = 241;
  let status = "status_241";
  let tasks = "tasks_241";
  // Dependency Barrier
  let deps = {};
  deps["garageId"] = matchAnyGarageAdded();
  let pkMap = {"garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  garageId = captured["garageId"];
  createPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  // waitForPeriodicMaintenanceAdded(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  updatePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  deletePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
});

// Story: crud:PeriodicMaintenance:nondet:negative:dup-add
bthread("crud:PeriodicMaintenance:nondet:negative:dup-add", function () {
  let carVin = "carVin_246";
  let garageId;
  let intervalKm = 246;
  let intervalMonths = 246;
  let planType = "planType_246";
  let pmId = 246;
  let status = "status_246";
  let tasks = "tasks_246";
  // Dependency Barrier
  let deps = {};
  deps["garageId"] = matchAnyGarageAdded();
  let pkMap = {"garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  garageId = captured["garageId"];
  createPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  // waitForPeriodicMaintenanceAdded(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
  verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
});

// Story: crud:RepairOrder:nondet:1:1
bthread("crud:RepairOrder:nondet:1:1", function () {
  let carVin = "carVin_250";
  let complaint = "complaint_250";
  let customerId;
  let garageId;
  let roId = 250;
  let status = "status_250";
  // Dependency Barrier
  let deps = {};
  deps["customerId"] = matchAnyCustomerAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let pkMap = {"customerId": "customerId", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  customerId = captured["customerId"];
  garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId, status);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status);
  updateRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  deleteRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId, status);
});

// Story: crud:RepairOrder:nondet:1:2
bthread("crud:RepairOrder:nondet:1:2", function () {
  let carVin = "carVin_251";
  let complaint = "complaint_251";
  let customerId;
  let garageId;
  let roId = 251;
  let status = "status_251";
  // Dependency Barrier
  let deps = {};
  deps["customerId"] = matchAnyCustomerAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let pkMap = {"customerId": "customerId", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  customerId = captured["customerId"];
  garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  // waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId, status);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  updateRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status);
  deleteRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId, status);
});

// Story: crud:RepairOrder:nondet:negative:dup-add
bthread("crud:RepairOrder:nondet:negative:dup-add", function () {
  let carVin = "carVin_256";
  let complaint = "complaint_256";
  let customerId;
  let garageId;
  let roId = 256;
  let status = "status_256";
  // Dependency Barrier
  let deps = {};
  deps["customerId"] = matchAnyCustomerAdded();
  deps["garageId"] = matchAnyGarageAdded();
  let pkMap = {"customerId": "customerId", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  customerId = captured["customerId"];
  garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  // waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status);
});
