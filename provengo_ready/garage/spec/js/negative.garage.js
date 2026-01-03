// Auto-generated NEGATIVE (Fuzzing) stories for garage
//@provengo summon rest

// Negative Test: Injecting invalid type into active
bthread("fuzz:Chains:active_InvalidType", function () {
  let active_valid = true;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let chainUpdate_valid = "chainUpdate_valid_" + Math.floor(Math.random()*1000);
  let hqAddress_valid = {};
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let supportEmail_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let bad_active = "NOT_A_BOOL";
  verifyChainsRejects(bad_active, chainId_valid, chainUpdate_valid, hqAddress_valid, name_valid, supportEmail_valid);
});

// Negative Test: Injecting invalid type into chainId
bthread("fuzz:Chains:chainId_InvalidType", function () {
  let active_valid = true;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let chainUpdate_valid = "chainUpdate_valid_" + Math.floor(Math.random()*1000);
  let hqAddress_valid = {};
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let supportEmail_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let bad_chainId = 12345;
  verifyChainsRejects(active_valid, bad_chainId, chainUpdate_valid, hqAddress_valid, name_valid, supportEmail_valid);
});

// Negative Test: Injecting invalid type into chainUpdate
bthread("fuzz:Chains:chainUpdate_InvalidType", function () {
  let active_valid = true;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let chainUpdate_valid = "chainUpdate_valid_" + Math.floor(Math.random()*1000);
  let hqAddress_valid = {};
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let supportEmail_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let bad_chainUpdate = 12345;
  verifyChainsRejects(active_valid, chainId_valid, bad_chainUpdate, hqAddress_valid, name_valid, supportEmail_valid);
});

// Negative Test: Injecting invalid type into hqAddress
bthread("fuzz:Chains:hqAddress_InvalidType", function () {
  let active_valid = true;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let chainUpdate_valid = "chainUpdate_valid_" + Math.floor(Math.random()*1000);
  let hqAddress_valid = {};
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let supportEmail_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let bad_hqAddress = 12345;
  verifyChainsRejects(active_valid, chainId_valid, chainUpdate_valid, bad_hqAddress, name_valid, supportEmail_valid);
});

// Negative Test: Injecting invalid type into name
bthread("fuzz:Chains:name_InvalidType", function () {
  let active_valid = true;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let chainUpdate_valid = "chainUpdate_valid_" + Math.floor(Math.random()*1000);
  let hqAddress_valid = {};
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let supportEmail_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let bad_name = 12345;
  verifyChainsRejects(active_valid, chainId_valid, chainUpdate_valid, hqAddress_valid, bad_name, supportEmail_valid);
});

// Negative Test: Injecting invalid type into supportEmail
bthread("fuzz:Chains:supportEmail_InvalidType", function () {
  let active_valid = true;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let chainUpdate_valid = "chainUpdate_valid_" + Math.floor(Math.random()*1000);
  let hqAddress_valid = {};
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let supportEmail_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let bad_supportEmail = 12345;
  verifyChainsRejects(active_valid, chainId_valid, chainUpdate_valid, hqAddress_valid, name_valid, bad_supportEmail);
});

// Negative Test: Injecting invalid type into customerId
bthread("fuzz:Customers:customerId_InvalidType", function () {
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_valid = "fullName_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_valid = "preferredGarageId_valid_" + Math.floor(Math.random()*1000);
  let type_valid = "type_valid_" + Math.floor(Math.random()*1000);
  let bad_customerId = 12345;
  verifyCustomersRejects(bad_customerId, email_valid, fullName_valid, name_valid, phone_valid, preferredGarageId_valid, type_valid);
});

// Negative Test: Injecting invalid type into email
bthread("fuzz:Customers:email_InvalidType", function () {
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_valid = "fullName_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_valid = "preferredGarageId_valid_" + Math.floor(Math.random()*1000);
  let type_valid = "type_valid_" + Math.floor(Math.random()*1000);
  let bad_email = 12345;
  verifyCustomersRejects(customerId_valid, bad_email, fullName_valid, name_valid, phone_valid, preferredGarageId_valid, type_valid);
});

// Negative Test: Injecting invalid type into fullName
bthread("fuzz:Customers:fullName_InvalidType", function () {
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_valid = "fullName_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_valid = "preferredGarageId_valid_" + Math.floor(Math.random()*1000);
  let type_valid = "type_valid_" + Math.floor(Math.random()*1000);
  let bad_fullName = 12345;
  verifyCustomersRejects(customerId_valid, email_valid, bad_fullName, name_valid, phone_valid, preferredGarageId_valid, type_valid);
});

// Negative Test: Injecting invalid type into name
bthread("fuzz:Customers:name_InvalidType", function () {
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_valid = "fullName_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_valid = "preferredGarageId_valid_" + Math.floor(Math.random()*1000);
  let type_valid = "type_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 12345;
  verifyCustomersRejects(customerId_valid, email_valid, fullName_valid, bad_name, phone_valid, preferredGarageId_valid, type_valid);
});

// Negative Test: Injecting invalid type into phone
bthread("fuzz:Customers:phone_InvalidType", function () {
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_valid = "fullName_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_valid = "preferredGarageId_valid_" + Math.floor(Math.random()*1000);
  let type_valid = "type_valid_" + Math.floor(Math.random()*1000);
  let bad_phone = 12345;
  verifyCustomersRejects(customerId_valid, email_valid, fullName_valid, name_valid, bad_phone, preferredGarageId_valid, type_valid);
});

// Negative Test: Injecting invalid type into preferredGarageId
bthread("fuzz:Customers:preferredGarageId_InvalidType", function () {
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_valid = "fullName_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_valid = "preferredGarageId_valid_" + Math.floor(Math.random()*1000);
  let type_valid = "type_valid_" + Math.floor(Math.random()*1000);
  let bad_preferredGarageId = 12345;
  verifyCustomersRejects(customerId_valid, email_valid, fullName_valid, name_valid, phone_valid, bad_preferredGarageId, type_valid);
});

// Negative Test: Injecting invalid type into type
bthread("fuzz:Customers:type_InvalidType", function () {
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "uvalid_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_valid = "fullName_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_valid = "preferredGarageId_valid_" + Math.floor(Math.random()*1000);
  let type_valid = "type_valid_" + Math.floor(Math.random()*1000);
  let bad_type = 12345;
  verifyCustomersRejects(customerId_valid, email_valid, fullName_valid, name_valid, phone_valid, preferredGarageId_valid, bad_type);
});

// Negative Test: Injecting invalid type into active
bthread("fuzz:Garages:active_InvalidType", function () {
  let active_valid = true;
  let address_valid = {};
  let bayCount_valid = Math.floor(Math.random() * 1000) + 1990;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let garageUpdate_valid = "garageUpdate_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_valid = [];
  let bad_active = "NOT_A_BOOL";
  verifyGaragesRejects(bad_active, address_valid, bayCount_valid, chainId_valid, garageId_valid, garageUpdate_valid, name_valid, phone_valid, servicesOffered_valid);
});

// Negative Test: Injecting invalid type into address
bthread("fuzz:Garages:address_InvalidType", function () {
  let active_valid = true;
  let address_valid = {};
  let bayCount_valid = Math.floor(Math.random() * 1000) + 1990;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let garageUpdate_valid = "garageUpdate_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_valid = [];
  let bad_address = 12345;
  verifyGaragesRejects(active_valid, bad_address, bayCount_valid, chainId_valid, garageId_valid, garageUpdate_valid, name_valid, phone_valid, servicesOffered_valid);
});

// Negative Test: Injecting invalid type into bayCount
bthread("fuzz:Garages:bayCount_InvalidType", function () {
  let active_valid = true;
  let address_valid = {};
  let bayCount_valid = Math.floor(Math.random() * 1000) + 1990;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let garageUpdate_valid = "garageUpdate_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_valid = [];
  let bad_bayCount = "INVALID_STRING";
  verifyGaragesRejects(active_valid, address_valid, bad_bayCount, chainId_valid, garageId_valid, garageUpdate_valid, name_valid, phone_valid, servicesOffered_valid);
});

// Negative Test: Injecting invalid type into chainId
bthread("fuzz:Garages:chainId_InvalidType", function () {
  let active_valid = true;
  let address_valid = {};
  let bayCount_valid = Math.floor(Math.random() * 1000) + 1990;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let garageUpdate_valid = "garageUpdate_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_valid = [];
  let bad_chainId = 12345;
  verifyGaragesRejects(active_valid, address_valid, bayCount_valid, bad_chainId, garageId_valid, garageUpdate_valid, name_valid, phone_valid, servicesOffered_valid);
});

// Negative Test: Injecting invalid type into garageId
bthread("fuzz:Garages:garageId_InvalidType", function () {
  let active_valid = true;
  let address_valid = {};
  let bayCount_valid = Math.floor(Math.random() * 1000) + 1990;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let garageUpdate_valid = "garageUpdate_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_valid = [];
  let bad_garageId = 12345;
  verifyGaragesRejects(active_valid, address_valid, bayCount_valid, chainId_valid, bad_garageId, garageUpdate_valid, name_valid, phone_valid, servicesOffered_valid);
});

// Negative Test: Injecting invalid type into garageUpdate
bthread("fuzz:Garages:garageUpdate_InvalidType", function () {
  let active_valid = true;
  let address_valid = {};
  let bayCount_valid = Math.floor(Math.random() * 1000) + 1990;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let garageUpdate_valid = "garageUpdate_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_valid = [];
  let bad_garageUpdate = 12345;
  verifyGaragesRejects(active_valid, address_valid, bayCount_valid, chainId_valid, garageId_valid, bad_garageUpdate, name_valid, phone_valid, servicesOffered_valid);
});

// Negative Test: Injecting invalid type into name
bthread("fuzz:Garages:name_InvalidType", function () {
  let active_valid = true;
  let address_valid = {};
  let bayCount_valid = Math.floor(Math.random() * 1000) + 1990;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let garageUpdate_valid = "garageUpdate_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_valid = [];
  let bad_name = 12345;
  verifyGaragesRejects(active_valid, address_valid, bayCount_valid, chainId_valid, garageId_valid, garageUpdate_valid, bad_name, phone_valid, servicesOffered_valid);
});

// Negative Test: Injecting invalid type into phone
bthread("fuzz:Garages:phone_InvalidType", function () {
  let active_valid = true;
  let address_valid = {};
  let bayCount_valid = Math.floor(Math.random() * 1000) + 1990;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let garageUpdate_valid = "garageUpdate_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_valid = [];
  let bad_phone = 12345;
  verifyGaragesRejects(active_valid, address_valid, bayCount_valid, chainId_valid, garageId_valid, garageUpdate_valid, name_valid, bad_phone, servicesOffered_valid);
});

// Negative Test: Injecting invalid type into servicesOffered
bthread("fuzz:Garages:servicesOffered_InvalidType", function () {
  let active_valid = true;
  let address_valid = {};
  let bayCount_valid = Math.floor(Math.random() * 1000) + 1990;
  let chainId_valid = "chainId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let garageUpdate_valid = "garageUpdate_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let phone_valid = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_valid = [];
  let bad_servicesOffered = "NOT_AN_ARRAY";
  verifyGaragesRejects(active_valid, address_valid, bayCount_valid, chainId_valid, garageId_valid, garageUpdate_valid, name_valid, phone_valid, bad_servicesOffered);
});

// Negative Test: Injecting invalid type into homeGarageId
bthread("fuzz:Cars:homeGarageId_InvalidType", function () {
  let homeGarageId_valid = "homeGarageId_valid_" + Math.floor(Math.random()*1000);
  let make_valid = "make_valid_" + Math.floor(Math.random()*1000);
  let mileage_valid = Math.floor(Math.random() * 1000) + 1990;
  let model_valid = "model_valid_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_valid = "ownerCustomerId_valid_" + Math.floor(Math.random()*1000);
  let vin_valid = "vin_valid_" + Math.floor(Math.random()*1000);
  let year_valid = Math.floor(Math.random() * 1000) + 1990;
  let bad_homeGarageId = 12345;
  verifyCarsRejects(bad_homeGarageId, make_valid, mileage_valid, model_valid, ownerCustomerId_valid, vin_valid, year_valid);
});

// Negative Test: Injecting invalid type into make
bthread("fuzz:Cars:make_InvalidType", function () {
  let homeGarageId_valid = "homeGarageId_valid_" + Math.floor(Math.random()*1000);
  let make_valid = "make_valid_" + Math.floor(Math.random()*1000);
  let mileage_valid = Math.floor(Math.random() * 1000) + 1990;
  let model_valid = "model_valid_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_valid = "ownerCustomerId_valid_" + Math.floor(Math.random()*1000);
  let vin_valid = "vin_valid_" + Math.floor(Math.random()*1000);
  let year_valid = Math.floor(Math.random() * 1000) + 1990;
  let bad_make = 12345;
  verifyCarsRejects(homeGarageId_valid, bad_make, mileage_valid, model_valid, ownerCustomerId_valid, vin_valid, year_valid);
});

// Negative Test: Injecting invalid type into mileage
bthread("fuzz:Cars:mileage_InvalidType", function () {
  let homeGarageId_valid = "homeGarageId_valid_" + Math.floor(Math.random()*1000);
  let make_valid = "make_valid_" + Math.floor(Math.random()*1000);
  let mileage_valid = Math.floor(Math.random() * 1000) + 1990;
  let model_valid = "model_valid_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_valid = "ownerCustomerId_valid_" + Math.floor(Math.random()*1000);
  let vin_valid = "vin_valid_" + Math.floor(Math.random()*1000);
  let year_valid = Math.floor(Math.random() * 1000) + 1990;
  let bad_mileage = "INVALID_STRING";
  verifyCarsRejects(homeGarageId_valid, make_valid, bad_mileage, model_valid, ownerCustomerId_valid, vin_valid, year_valid);
});

// Negative Test: Injecting invalid type into model
bthread("fuzz:Cars:model_InvalidType", function () {
  let homeGarageId_valid = "homeGarageId_valid_" + Math.floor(Math.random()*1000);
  let make_valid = "make_valid_" + Math.floor(Math.random()*1000);
  let mileage_valid = Math.floor(Math.random() * 1000) + 1990;
  let model_valid = "model_valid_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_valid = "ownerCustomerId_valid_" + Math.floor(Math.random()*1000);
  let vin_valid = "vin_valid_" + Math.floor(Math.random()*1000);
  let year_valid = Math.floor(Math.random() * 1000) + 1990;
  let bad_model = 12345;
  verifyCarsRejects(homeGarageId_valid, make_valid, mileage_valid, bad_model, ownerCustomerId_valid, vin_valid, year_valid);
});

// Negative Test: Injecting invalid type into ownerCustomerId
bthread("fuzz:Cars:ownerCustomerId_InvalidType", function () {
  let homeGarageId_valid = "homeGarageId_valid_" + Math.floor(Math.random()*1000);
  let make_valid = "make_valid_" + Math.floor(Math.random()*1000);
  let mileage_valid = Math.floor(Math.random() * 1000) + 1990;
  let model_valid = "model_valid_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_valid = "ownerCustomerId_valid_" + Math.floor(Math.random()*1000);
  let vin_valid = "vin_valid_" + Math.floor(Math.random()*1000);
  let year_valid = Math.floor(Math.random() * 1000) + 1990;
  let bad_ownerCustomerId = 12345;
  verifyCarsRejects(homeGarageId_valid, make_valid, mileage_valid, model_valid, bad_ownerCustomerId, vin_valid, year_valid);
});

// Negative Test: Injecting invalid type into vin
bthread("fuzz:Cars:vin_InvalidType", function () {
  let homeGarageId_valid = "homeGarageId_valid_" + Math.floor(Math.random()*1000);
  let make_valid = "make_valid_" + Math.floor(Math.random()*1000);
  let mileage_valid = Math.floor(Math.random() * 1000) + 1990;
  let model_valid = "model_valid_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_valid = "ownerCustomerId_valid_" + Math.floor(Math.random()*1000);
  let vin_valid = "vin_valid_" + Math.floor(Math.random()*1000);
  let year_valid = Math.floor(Math.random() * 1000) + 1990;
  let bad_vin = 12345;
  verifyCarsRejects(homeGarageId_valid, make_valid, mileage_valid, model_valid, ownerCustomerId_valid, bad_vin, year_valid);
});

// Negative Test: Injecting invalid type into year
bthread("fuzz:Cars:year_InvalidType", function () {
  let homeGarageId_valid = "homeGarageId_valid_" + Math.floor(Math.random()*1000);
  let make_valid = "make_valid_" + Math.floor(Math.random()*1000);
  let mileage_valid = Math.floor(Math.random() * 1000) + 1990;
  let model_valid = "model_valid_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_valid = "ownerCustomerId_valid_" + Math.floor(Math.random()*1000);
  let vin_valid = "vin_valid_" + Math.floor(Math.random()*1000);
  let year_valid = Math.floor(Math.random() * 1000) + 1990;
  let bad_year = "INVALID_STRING";
  verifyCarsRejects(homeGarageId_valid, make_valid, mileage_valid, model_valid, ownerCustomerId_valid, vin_valid, bad_year);
});

// Negative Test: Injecting invalid type into carVin
bthread("fuzz:PeriodicMaintenance:carVin_InvalidType", function () {
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let intervalKm_valid = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_valid = Math.floor(Math.random() * 1000) + 1990;
  let planType_valid = "planType_valid_" + Math.floor(Math.random()*1000);
  let pmId_valid = "pmId_valid_" + Math.floor(Math.random()*1000);
  let schedule_valid = "schedule_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let tasks_valid = [];
  let bad_carVin = 12345;
  verifyPeriodicMaintenanceRejects(bad_carVin, garageId_valid, intervalKm_valid, intervalMonths_valid, planType_valid, pmId_valid, schedule_valid, status_valid, tasks_valid);
});

// Negative Test: Injecting invalid type into garageId
bthread("fuzz:PeriodicMaintenance:garageId_InvalidType", function () {
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let intervalKm_valid = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_valid = Math.floor(Math.random() * 1000) + 1990;
  let planType_valid = "planType_valid_" + Math.floor(Math.random()*1000);
  let pmId_valid = "pmId_valid_" + Math.floor(Math.random()*1000);
  let schedule_valid = "schedule_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let tasks_valid = [];
  let bad_garageId = 12345;
  verifyPeriodicMaintenanceRejects(carVin_valid, bad_garageId, intervalKm_valid, intervalMonths_valid, planType_valid, pmId_valid, schedule_valid, status_valid, tasks_valid);
});

// Negative Test: Injecting invalid type into intervalKm
bthread("fuzz:PeriodicMaintenance:intervalKm_InvalidType", function () {
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let intervalKm_valid = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_valid = Math.floor(Math.random() * 1000) + 1990;
  let planType_valid = "planType_valid_" + Math.floor(Math.random()*1000);
  let pmId_valid = "pmId_valid_" + Math.floor(Math.random()*1000);
  let schedule_valid = "schedule_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let tasks_valid = [];
  let bad_intervalKm = "INVALID_STRING";
  verifyPeriodicMaintenanceRejects(carVin_valid, garageId_valid, bad_intervalKm, intervalMonths_valid, planType_valid, pmId_valid, schedule_valid, status_valid, tasks_valid);
});

// Negative Test: Injecting invalid type into intervalMonths
bthread("fuzz:PeriodicMaintenance:intervalMonths_InvalidType", function () {
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let intervalKm_valid = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_valid = Math.floor(Math.random() * 1000) + 1990;
  let planType_valid = "planType_valid_" + Math.floor(Math.random()*1000);
  let pmId_valid = "pmId_valid_" + Math.floor(Math.random()*1000);
  let schedule_valid = "schedule_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let tasks_valid = [];
  let bad_intervalMonths = "INVALID_STRING";
  verifyPeriodicMaintenanceRejects(carVin_valid, garageId_valid, intervalKm_valid, bad_intervalMonths, planType_valid, pmId_valid, schedule_valid, status_valid, tasks_valid);
});

// Negative Test: Injecting invalid type into planType
bthread("fuzz:PeriodicMaintenance:planType_InvalidType", function () {
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let intervalKm_valid = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_valid = Math.floor(Math.random() * 1000) + 1990;
  let planType_valid = "planType_valid_" + Math.floor(Math.random()*1000);
  let pmId_valid = "pmId_valid_" + Math.floor(Math.random()*1000);
  let schedule_valid = "schedule_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let tasks_valid = [];
  let bad_planType = 12345;
  verifyPeriodicMaintenanceRejects(carVin_valid, garageId_valid, intervalKm_valid, intervalMonths_valid, bad_planType, pmId_valid, schedule_valid, status_valid, tasks_valid);
});

// Negative Test: Injecting invalid type into pmId
bthread("fuzz:PeriodicMaintenance:pmId_InvalidType", function () {
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let intervalKm_valid = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_valid = Math.floor(Math.random() * 1000) + 1990;
  let planType_valid = "planType_valid_" + Math.floor(Math.random()*1000);
  let pmId_valid = "pmId_valid_" + Math.floor(Math.random()*1000);
  let schedule_valid = "schedule_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let tasks_valid = [];
  let bad_pmId = 12345;
  verifyPeriodicMaintenanceRejects(carVin_valid, garageId_valid, intervalKm_valid, intervalMonths_valid, planType_valid, bad_pmId, schedule_valid, status_valid, tasks_valid);
});

// Negative Test: Injecting invalid type into schedule
bthread("fuzz:PeriodicMaintenance:schedule_InvalidType", function () {
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let intervalKm_valid = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_valid = Math.floor(Math.random() * 1000) + 1990;
  let planType_valid = "planType_valid_" + Math.floor(Math.random()*1000);
  let pmId_valid = "pmId_valid_" + Math.floor(Math.random()*1000);
  let schedule_valid = "schedule_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let tasks_valid = [];
  let bad_schedule = 12345;
  verifyPeriodicMaintenanceRejects(carVin_valid, garageId_valid, intervalKm_valid, intervalMonths_valid, planType_valid, pmId_valid, bad_schedule, status_valid, tasks_valid);
});

// Negative Test: Injecting invalid type into status
bthread("fuzz:PeriodicMaintenance:status_InvalidType", function () {
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let intervalKm_valid = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_valid = Math.floor(Math.random() * 1000) + 1990;
  let planType_valid = "planType_valid_" + Math.floor(Math.random()*1000);
  let pmId_valid = "pmId_valid_" + Math.floor(Math.random()*1000);
  let schedule_valid = "schedule_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let tasks_valid = [];
  let bad_status = 12345;
  verifyPeriodicMaintenanceRejects(carVin_valid, garageId_valid, intervalKm_valid, intervalMonths_valid, planType_valid, pmId_valid, schedule_valid, bad_status, tasks_valid);
});

// Negative Test: Injecting invalid type into tasks
bthread("fuzz:PeriodicMaintenance:tasks_InvalidType", function () {
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let intervalKm_valid = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_valid = Math.floor(Math.random() * 1000) + 1990;
  let planType_valid = "planType_valid_" + Math.floor(Math.random()*1000);
  let pmId_valid = "pmId_valid_" + Math.floor(Math.random()*1000);
  let schedule_valid = "schedule_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let tasks_valid = [];
  let bad_tasks = "NOT_AN_ARRAY";
  verifyPeriodicMaintenanceRejects(carVin_valid, garageId_valid, intervalKm_valid, intervalMonths_valid, planType_valid, pmId_valid, schedule_valid, status_valid, bad_tasks);
});

// Negative Test: Injecting invalid type into ROUpdate
bthread("fuzz:RepairOrders:ROUpdate_InvalidType", function () {
  let ROUpdate_valid = "ROUpdate_valid_" + Math.floor(Math.random()*1000);
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let complaint_valid = "complaint_valid_" + Math.floor(Math.random()*1000);
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let roId_valid = "roId_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let bad_ROUpdate = 12345;
  verifyRepairOrdersRejects(bad_ROUpdate, carVin_valid, complaint_valid, customerId_valid, garageId_valid, roId_valid, status_valid);
});

// Negative Test: Injecting invalid type into carVin
bthread("fuzz:RepairOrders:carVin_InvalidType", function () {
  let ROUpdate_valid = "ROUpdate_valid_" + Math.floor(Math.random()*1000);
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let complaint_valid = "complaint_valid_" + Math.floor(Math.random()*1000);
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let roId_valid = "roId_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let bad_carVin = 12345;
  verifyRepairOrdersRejects(ROUpdate_valid, bad_carVin, complaint_valid, customerId_valid, garageId_valid, roId_valid, status_valid);
});

// Negative Test: Injecting invalid type into complaint
bthread("fuzz:RepairOrders:complaint_InvalidType", function () {
  let ROUpdate_valid = "ROUpdate_valid_" + Math.floor(Math.random()*1000);
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let complaint_valid = "complaint_valid_" + Math.floor(Math.random()*1000);
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let roId_valid = "roId_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let bad_complaint = 12345;
  verifyRepairOrdersRejects(ROUpdate_valid, carVin_valid, bad_complaint, customerId_valid, garageId_valid, roId_valid, status_valid);
});

// Negative Test: Injecting invalid type into customerId
bthread("fuzz:RepairOrders:customerId_InvalidType", function () {
  let ROUpdate_valid = "ROUpdate_valid_" + Math.floor(Math.random()*1000);
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let complaint_valid = "complaint_valid_" + Math.floor(Math.random()*1000);
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let roId_valid = "roId_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let bad_customerId = 12345;
  verifyRepairOrdersRejects(ROUpdate_valid, carVin_valid, complaint_valid, bad_customerId, garageId_valid, roId_valid, status_valid);
});

// Negative Test: Injecting invalid type into garageId
bthread("fuzz:RepairOrders:garageId_InvalidType", function () {
  let ROUpdate_valid = "ROUpdate_valid_" + Math.floor(Math.random()*1000);
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let complaint_valid = "complaint_valid_" + Math.floor(Math.random()*1000);
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let roId_valid = "roId_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let bad_garageId = 12345;
  verifyRepairOrdersRejects(ROUpdate_valid, carVin_valid, complaint_valid, customerId_valid, bad_garageId, roId_valid, status_valid);
});

// Negative Test: Injecting invalid type into roId
bthread("fuzz:RepairOrders:roId_InvalidType", function () {
  let ROUpdate_valid = "ROUpdate_valid_" + Math.floor(Math.random()*1000);
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let complaint_valid = "complaint_valid_" + Math.floor(Math.random()*1000);
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let roId_valid = "roId_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let bad_roId = 12345;
  verifyRepairOrdersRejects(ROUpdate_valid, carVin_valid, complaint_valid, customerId_valid, garageId_valid, bad_roId, status_valid);
});

// Negative Test: Injecting invalid type into status
bthread("fuzz:RepairOrders:status_InvalidType", function () {
  let ROUpdate_valid = "ROUpdate_valid_" + Math.floor(Math.random()*1000);
  let carVin_valid = "carVin_valid_" + Math.floor(Math.random()*1000);
  let complaint_valid = "complaint_valid_" + Math.floor(Math.random()*1000);
  let customerId_valid = "customerId_valid_" + Math.floor(Math.random()*1000);
  let garageId_valid = "garageId_valid_" + Math.floor(Math.random()*1000);
  let roId_valid = "roId_valid_" + Math.floor(Math.random()*1000);
  let status_valid = "open";
  let bad_status = 12345;
  verifyRepairOrdersRejects(ROUpdate_valid, carVin_valid, complaint_valid, customerId_valid, garageId_valid, roId_valid, bad_status);
});
