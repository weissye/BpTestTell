/**
 * SCENARIO: Peak Load Service Test
 * Description: Simulates a high-volume service day to test capacity.
 */
bthread("scenario:service:peak_load", function () {
    let suffix = Date.now();
    let chainId = "ChainPeak_" + suffix;
    let garageId = "GaragePeak_" + suffix;
    let custId = "CustPeak_" + suffix;

    // 1. Infrastructure
    // Signatures inferred from your previous logs (likely alphabetical or specific to your gen)
    createChain(chainId, "123MainSt", chainId, "PeakCorp");
    createGarage("123MainSt", 20, chainId, garageId, garageId, "NY", "GarageOne", "5551234");
    createCustomer(custId, "email@peak.com", "JohnDoe", custId, "John", "5555678", "VIP");

    // 2. Fleet
    let car1 = "VinA_" + suffix;
    let car2 = "VinB_" + suffix;
    let car3 = "VinC_" + suffix;

    // Signature: createCar(id, make, mileage, model, ownerCustomerId, vin, year)
    createCar(car1, "Ford", 10000, "Fiesta", custId, car1, 2020);
    createCar(car2, "Ford", 20000, "Focus", custId, car2, 2021);
    createCar(car3, "Ford", 30000, "Mustang", custId, car3, 2022);

    // 3. Service Orders
    let ro1 = "RO1_" + suffix;
    let ro2 = "RO2_" + suffix;
    let ro3 = "RO3_" + suffix;

    // Signature: createRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId)
    // We pass "dummy" for field1/field2 to maintain alignment for garageId
    
    // RO 1 (OK)
    createRepairOrder(car1, "Oil", custId, "dummy", "dummy", garageId, ro1, ro1);
    
    // RO 2 (OK)
    createRepairOrder(car2, "Tires", custId, "dummy", "dummy", garageId, ro2, ro2);

    // RO 3 (CRASH EXPECTED)
    bp.log.info("Initiating 3rd concurrent service (Should Fail Test)...");
    
    // The interface expects 200/201. The SUT will return 500.
    // Provengo will automatically mark this test as FAILED.
    createRepairOrder(car3, "Brakes", custId, "dummy", "dummy", garageId, ro3, ro3);
});