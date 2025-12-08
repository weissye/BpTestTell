// Auto-generated stories for garage
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

// Story: crud:Cars:linear:1
bthread("crud:Cars:linear:1", function () {
  let homeGarageId; // Resolved Dependency
  let make = "make_210";
  let mileage = 10210;
  let model = "model_210";
  let ownerCustomerId; // Resolved Dependency
  let vin = "vin_210";
  let year = 2020;
  // Dependency Barrier
  let deps = {};
  deps["homeGarageId"] = matchAnyGaragesAdded();
  deps["ownerCustomerId"] = matchAnyCustomersAdded();
  let pkMap = {"homeGarageId": "garageId", "ownerCustomerId": "customerId"};
  let captured = resolveDependencies(deps, pkMap);
  homeGarageId = captured["homeGarageId"];
  ownerCustomerId = captured["ownerCustomerId"];
  createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarsExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  deleteCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToDeleteANonExistingCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarsDoesNotExist(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
});

// Story: crud:Cars:linear:2
bthread("crud:Cars:linear:2", function () {
  let homeGarageId; // Resolved Dependency
  let make = "make_220";
  let mileage = 10220;
  let model = "model_220";
  let ownerCustomerId; // Resolved Dependency
  let vin = "vin_220";
  let year = 2020;
  // Dependency Barrier
  let deps = {};
  deps["homeGarageId"] = matchAnyGaragesAdded();
  deps["ownerCustomerId"] = matchAnyCustomersAdded();
  let pkMap = {"homeGarageId": "garageId", "ownerCustomerId": "customerId"};
  let captured = resolveDependencies(deps, pkMap);
  homeGarageId = captured["homeGarageId"];
  ownerCustomerId = captured["ownerCustomerId"];
  createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarsExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  deleteCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToDeleteANonExistingCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarsDoesNotExist(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
});

// Story: crud:Cars:linear:3
bthread("crud:Cars:linear:3", function () {
  let homeGarageId; // Resolved Dependency
  let make = "make_230";
  let mileage = 10230;
  let model = "model_230";
  let ownerCustomerId; // Resolved Dependency
  let vin = "vin_230";
  let year = 2020;
  // Dependency Barrier
  let deps = {};
  deps["homeGarageId"] = matchAnyGaragesAdded();
  deps["ownerCustomerId"] = matchAnyCustomersAdded();
  let pkMap = {"homeGarageId": "garageId", "ownerCustomerId": "customerId"};
  let captured = resolveDependencies(deps, pkMap);
  homeGarageId = captured["homeGarageId"];
  ownerCustomerId = captured["ownerCustomerId"];
  createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToAddExistingCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarsExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  deleteCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  tryToDeleteANonExistingCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarsDoesNotExist(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
});

// Monitor: Cars Verification
bthread("monitor:Cars", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCarsAdded() });
    let homeGarageId = (e.data.parameters && e.data.parameters.homeGarageId) ? e.data.parameters.homeGarageId : e.data.homeGarageId;
    let make = (e.data.parameters && e.data.parameters.make) ? e.data.parameters.make : e.data.make;
    let mileage = (e.data.parameters && e.data.parameters.mileage) ? e.data.parameters.mileage : e.data.mileage;
    let model = (e.data.parameters && e.data.parameters.model) ? e.data.parameters.model : e.data.model;
    let ownerCustomerId = (e.data.parameters && e.data.parameters.ownerCustomerId) ? e.data.parameters.ownerCustomerId : e.data.ownerCustomerId;
    let vin = (e.data.parameters && e.data.parameters.vin) ? e.data.parameters.vin : e.data.vin;
    let year = (e.data.parameters && e.data.parameters.year) ? e.data.parameters.year : e.data.year;
    // Block Deletion while Verifying Existence
    block(matchDeletedCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year), function() {
        verifyCarsExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
    });
  }
});

// Story: crud:Chains:linear:1
bthread("crud:Chains:linear:1", function () {
  let active = true;
  let chainId = "chainId_260";
  let hqAddress = "hqAddress_260";
  let name = "name_260";
  let supportEmail = "supportEmail_260";
  createChain(active, chainId, hqAddress, name, supportEmail);
  tryToAddExistingChains(active, chainId, hqAddress, name, supportEmail);
  verifyChainsExists(active, chainId, hqAddress, name, supportEmail);
  updateChain(active, chainId, hqAddress, name, supportEmail);
  deleteChain(active, chainId, hqAddress, name, supportEmail);
  tryToDeleteANonExistingChains(active, chainId, hqAddress, name, supportEmail);
  verifyChainsDoesNotExist(active, chainId, hqAddress, name, supportEmail);
});

// Story: crud:Chains:linear:2
bthread("crud:Chains:linear:2", function () {
  let active = true;
  let chainId = "chainId_270";
  let hqAddress = "hqAddress_270";
  let name = "name_270";
  let supportEmail = "supportEmail_270";
  createChain(active, chainId, hqAddress, name, supportEmail);
  tryToAddExistingChains(active, chainId, hqAddress, name, supportEmail);
  verifyChainsExists(active, chainId, hqAddress, name, supportEmail);
  updateChain(active, chainId, hqAddress, name, supportEmail);
  deleteChain(active, chainId, hqAddress, name, supportEmail);
  tryToDeleteANonExistingChains(active, chainId, hqAddress, name, supportEmail);
  verifyChainsDoesNotExist(active, chainId, hqAddress, name, supportEmail);
});

// Story: crud:Chains:linear:3
bthread("crud:Chains:linear:3", function () {
  let active = true;
  let chainId = "chainId_280";
  let hqAddress = "hqAddress_280";
  let name = "name_280";
  let supportEmail = "supportEmail_280";
  createChain(active, chainId, hqAddress, name, supportEmail);
  tryToAddExistingChains(active, chainId, hqAddress, name, supportEmail);
  verifyChainsExists(active, chainId, hqAddress, name, supportEmail);
  updateChain(active, chainId, hqAddress, name, supportEmail);
  deleteChain(active, chainId, hqAddress, name, supportEmail);
  tryToDeleteANonExistingChains(active, chainId, hqAddress, name, supportEmail);
  verifyChainsDoesNotExist(active, chainId, hqAddress, name, supportEmail);
});

// Monitor: Chains Verification
bthread("monitor:Chains", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyChainsAdded() });
    let active = (e.data.parameters && e.data.parameters.active) ? e.data.parameters.active : e.data.active;
    let chainId = (e.data.parameters && e.data.parameters.chainId) ? e.data.parameters.chainId : e.data.chainId;
    let hqAddress = (e.data.parameters && e.data.parameters.hqAddress) ? e.data.parameters.hqAddress : e.data.hqAddress;
    let name = (e.data.parameters && e.data.parameters.name) ? e.data.parameters.name : e.data.name;
    let supportEmail = (e.data.parameters && e.data.parameters.supportEmail) ? e.data.parameters.supportEmail : e.data.supportEmail;
    // Block Deletion while Verifying Existence
    block(matchDeletedChains(active, chainId, hqAddress, name, supportEmail), function() {
        verifyChainsExists(active, chainId, hqAddress, name, supportEmail);
    });
  }
});

// Story: crud:Customers:linear:1
bthread("crud:Customers:linear:1", function () {
  let customerId = "customerId_310";
  let email = "email_310";
  let fullName = "fullName_310";
  let phone = "phone_310";
  let preferredGarageId; // Resolved Dependency
  let type = "type_310";
  // Dependency Barrier
  let deps = {};
  deps["preferredGarageId"] = matchAnyGaragesAdded();
  let pkMap = {"preferredGarageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  preferredGarageId = captured["preferredGarageId"];
  createCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  tryToAddExistingCustomers(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomersExists(customerId, email, fullName, phone, preferredGarageId, type);
  updateCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  deleteCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  tryToDeleteANonExistingCustomers(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomersDoesNotExist(customerId, email, fullName, phone, preferredGarageId, type);
});

// Story: crud:Customers:linear:2
bthread("crud:Customers:linear:2", function () {
  let customerId = "customerId_320";
  let email = "email_320";
  let fullName = "fullName_320";
  let phone = "phone_320";
  let preferredGarageId; // Resolved Dependency
  let type = "type_320";
  // Dependency Barrier
  let deps = {};
  deps["preferredGarageId"] = matchAnyGaragesAdded();
  let pkMap = {"preferredGarageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  preferredGarageId = captured["preferredGarageId"];
  createCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  tryToAddExistingCustomers(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomersExists(customerId, email, fullName, phone, preferredGarageId, type);
  updateCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  deleteCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  tryToDeleteANonExistingCustomers(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomersDoesNotExist(customerId, email, fullName, phone, preferredGarageId, type);
});

// Story: crud:Customers:linear:3
bthread("crud:Customers:linear:3", function () {
  let customerId = "customerId_330";
  let email = "email_330";
  let fullName = "fullName_330";
  let phone = "phone_330";
  let preferredGarageId; // Resolved Dependency
  let type = "type_330";
  // Dependency Barrier
  let deps = {};
  deps["preferredGarageId"] = matchAnyGaragesAdded();
  let pkMap = {"preferredGarageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  preferredGarageId = captured["preferredGarageId"];
  createCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  tryToAddExistingCustomers(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomersExists(customerId, email, fullName, phone, preferredGarageId, type);
  updateCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  deleteCustomer(customerId, email, fullName, phone, preferredGarageId, type);
  tryToDeleteANonExistingCustomers(customerId, email, fullName, phone, preferredGarageId, type);
  verifyCustomersDoesNotExist(customerId, email, fullName, phone, preferredGarageId, type);
});

// Monitor: Customers Verification
bthread("monitor:Customers", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCustomersAdded() });
    let customerId = (e.data.parameters && e.data.parameters.customerId) ? e.data.parameters.customerId : e.data.customerId;
    let email = (e.data.parameters && e.data.parameters.email) ? e.data.parameters.email : e.data.email;
    let fullName = (e.data.parameters && e.data.parameters.fullName) ? e.data.parameters.fullName : e.data.fullName;
    let phone = (e.data.parameters && e.data.parameters.phone) ? e.data.parameters.phone : e.data.phone;
    let preferredGarageId = (e.data.parameters && e.data.parameters.preferredGarageId) ? e.data.parameters.preferredGarageId : e.data.preferredGarageId;
    let type = (e.data.parameters && e.data.parameters.type) ? e.data.parameters.type : e.data.type;
    // Block Deletion while Verifying Existence
    block(matchDeletedCustomers(customerId, email, fullName, phone, preferredGarageId, type), function() {
        verifyCustomersExists(customerId, email, fullName, phone, preferredGarageId, type);
    });
  }
});

// Story: crud:Garages:linear:1
bthread("crud:Garages:linear:1", function () {
  let active = true;
  let address = "address_360";
  let bayCount = 5;
  let chainId; // Resolved Dependency
  let garageId = "garageId_360";
  let name = "name_360";
  let phone = "phone_360";
  let servicesOffered = "servicesOffered_360";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainsAdded();
  let pkMap = {"chainId": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  chainId = captured["chainId"];
  createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToAddExistingGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGaragesExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  deleteGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToDeleteANonExistingGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGaragesDoesNotExist(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
});

// Story: crud:Garages:linear:2
bthread("crud:Garages:linear:2", function () {
  let active = true;
  let address = "address_370";
  let bayCount = 5;
  let chainId; // Resolved Dependency
  let garageId = "garageId_370";
  let name = "name_370";
  let phone = "phone_370";
  let servicesOffered = "servicesOffered_370";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainsAdded();
  let pkMap = {"chainId": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  chainId = captured["chainId"];
  createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToAddExistingGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGaragesExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  deleteGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToDeleteANonExistingGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGaragesDoesNotExist(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
});

// Story: crud:Garages:linear:3
bthread("crud:Garages:linear:3", function () {
  let active = true;
  let address = "address_380";
  let bayCount = 5;
  let chainId; // Resolved Dependency
  let garageId = "garageId_380";
  let name = "name_380";
  let phone = "phone_380";
  let servicesOffered = "servicesOffered_380";
  // Dependency Barrier
  let deps = {};
  deps["chainId"] = matchAnyChainsAdded();
  let pkMap = {"chainId": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  chainId = captured["chainId"];
  createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToAddExistingGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGaragesExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  deleteGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  tryToDeleteANonExistingGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
  verifyGaragesDoesNotExist(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
});

// Monitor: Garages Verification
bthread("monitor:Garages", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGaragesAdded() });
    let active = (e.data.parameters && e.data.parameters.active) ? e.data.parameters.active : e.data.active;
    let address = (e.data.parameters && e.data.parameters.address) ? e.data.parameters.address : e.data.address;
    let bayCount = (e.data.parameters && e.data.parameters.bayCount) ? e.data.parameters.bayCount : e.data.bayCount;
    let chainId = (e.data.parameters && e.data.parameters.chainId) ? e.data.parameters.chainId : e.data.chainId;
    let garageId = (e.data.parameters && e.data.parameters.garageId) ? e.data.parameters.garageId : e.data.garageId;
    let name = (e.data.parameters && e.data.parameters.name) ? e.data.parameters.name : e.data.name;
    let phone = (e.data.parameters && e.data.parameters.phone) ? e.data.parameters.phone : e.data.phone;
    let servicesOffered = (e.data.parameters && e.data.parameters.servicesOffered) ? e.data.parameters.servicesOffered : e.data.servicesOffered;
    // Block Deletion while Verifying Existence
    block(matchDeletedGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered), function() {
        verifyGaragesExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
    });
  }
});

// Story: crud:PeriodicMaintenance:linear:1
bthread("crud:PeriodicMaintenance:linear:1", function () {
  let carVin; // Resolved Dependency
  let garageId; // Resolved Dependency
  let intervalKm = 6;
  let intervalMonths = 6;
  let planType = "planType_410";
  let pmId = "pmId_410";
  let status = "status_410";
  let task = "task_410";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  carVin = captured["carVin"];
  garageId = captured["garageId"];
  createPMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  updatePMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  deletePMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
});

// Story: crud:PeriodicMaintenance:linear:2
bthread("crud:PeriodicMaintenance:linear:2", function () {
  let carVin; // Resolved Dependency
  let garageId; // Resolved Dependency
  let intervalKm = 6;
  let intervalMonths = 6;
  let planType = "planType_420";
  let pmId = "pmId_420";
  let status = "status_420";
  let task = "task_420";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  carVin = captured["carVin"];
  garageId = captured["garageId"];
  createPMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  updatePMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  deletePMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
});

// Story: crud:PeriodicMaintenance:linear:3
bthread("crud:PeriodicMaintenance:linear:3", function () {
  let carVin; // Resolved Dependency
  let garageId; // Resolved Dependency
  let intervalKm = 6;
  let intervalMonths = 6;
  let planType = "planType_430";
  let pmId = "pmId_430";
  let status = "status_430";
  let task = "task_430";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  carVin = captured["carVin"];
  garageId = captured["garageId"];
  createPMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  updatePMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  deletePMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
  verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
});

// Monitor: PeriodicMaintenance Verification
bthread("monitor:PeriodicMaintenance", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPeriodicMaintenanceAdded() });
    let carVin = (e.data.parameters && e.data.parameters.carVin) ? e.data.parameters.carVin : e.data.carVin;
    let garageId = (e.data.parameters && e.data.parameters.garageId) ? e.data.parameters.garageId : e.data.garageId;
    let intervalKm = (e.data.parameters && e.data.parameters.intervalKm) ? e.data.parameters.intervalKm : e.data.intervalKm;
    let intervalMonths = (e.data.parameters && e.data.parameters.intervalMonths) ? e.data.parameters.intervalMonths : e.data.intervalMonths;
    let planType = (e.data.parameters && e.data.parameters.planType) ? e.data.parameters.planType : e.data.planType;
    let pmId = (e.data.parameters && e.data.parameters.pmId) ? e.data.parameters.pmId : e.data.pmId;
    let status = (e.data.parameters && e.data.parameters.status) ? e.data.parameters.status : e.data.status;
    let task = (e.data.parameters && e.data.parameters.task) ? e.data.parameters.task : e.data.task;
    // Block Deletion while Verifying Existence
    block(matchDeletedPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task), function() {
        verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task);
    });
  }
});

// Story: crud:RepairOrder:linear:1
bthread("crud:RepairOrder:linear:1", function () {
  let carVin; // Resolved Dependency
  let complaint = "complaint_460";
  let customerId; // Resolved Dependency
  let garageId; // Resolved Dependency
  let roId = "roId_460";
  let status = "status_460";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["customerId"] = matchAnyCustomersAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "customerId": "customerId", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  carVin = captured["carVin"];
  customerId = captured["customerId"];
  garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status);
  updateRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  deleteRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId, status);
});

// Story: crud:RepairOrder:linear:2
bthread("crud:RepairOrder:linear:2", function () {
  let carVin; // Resolved Dependency
  let complaint = "complaint_470";
  let customerId; // Resolved Dependency
  let garageId; // Resolved Dependency
  let roId = "roId_470";
  let status = "status_470";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["customerId"] = matchAnyCustomersAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "customerId": "customerId", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  carVin = captured["carVin"];
  customerId = captured["customerId"];
  garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status);
  updateRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  deleteRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId, status);
});

// Story: crud:RepairOrder:linear:3
bthread("crud:RepairOrder:linear:3", function () {
  let carVin; // Resolved Dependency
  let complaint = "complaint_480";
  let customerId; // Resolved Dependency
  let garageId; // Resolved Dependency
  let roId = "roId_480";
  let status = "status_480";
  // Dependency Barrier
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["customerId"] = matchAnyCustomersAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "customerId": "customerId", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  carVin = captured["carVin"];
  customerId = captured["customerId"];
  garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status);
  updateRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  deleteRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status);
  verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId, status);
});

// Monitor: RepairOrder Verification
bthread("monitor:RepairOrder", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepairOrderAdded() });
    let carVin = (e.data.parameters && e.data.parameters.carVin) ? e.data.parameters.carVin : e.data.carVin;
    let complaint = (e.data.parameters && e.data.parameters.complaint) ? e.data.parameters.complaint : e.data.complaint;
    let customerId = (e.data.parameters && e.data.parameters.customerId) ? e.data.parameters.customerId : e.data.customerId;
    let garageId = (e.data.parameters && e.data.parameters.garageId) ? e.data.parameters.garageId : e.data.garageId;
    let roId = (e.data.parameters && e.data.parameters.roId) ? e.data.parameters.roId : e.data.roId;
    let status = (e.data.parameters && e.data.parameters.status) ? e.data.parameters.status : e.data.status;
    // Block Deletion while Verifying Existence
    block(matchDeletedRepairOrder(carVin, complaint, customerId, garageId, roId, status), function() {
        verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status);
    });
  }
});
