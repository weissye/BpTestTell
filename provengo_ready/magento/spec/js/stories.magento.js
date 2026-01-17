// Auto-generated stories for magento
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("DEBUG: [resolveDependencies] Caught event: " + e.name);
    if (e.data) bp.log.info("DEBUG: [resolveDependencies] Data: " + JSON.stringify(e.data));
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (val) {
            captured[k] = val;
            bp.log.info("DEBUG: [resolveDependencies] Resolved " + k + " -> " + val);
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// --- Monitors ---
// Monitor: Customers Verification (Existence)
bthread("monitor:Customers:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCustomersAdded() });
    let customerAccountManagementV1InitiatePasswordResetPutBody = (e.data.parameters && e.data.parameters["customerAccountManagementV1InitiatePasswordResetPutBody"]) ? e.data.parameters["customerAccountManagementV1InitiatePasswordResetPutBody"] : e.data["customerAccountManagementV1InitiatePasswordResetPutBody"];
    let customerAccountManagementV1ResetPasswordPostBody = (e.data.parameters && e.data.parameters["customerAccountManagementV1ResetPasswordPostBody"]) ? e.data.parameters["customerAccountManagementV1ResetPasswordPostBody"] : e.data["customerAccountManagementV1ResetPasswordPostBody"];
    let customerId = (e.data.parameters && e.data.parameters["customerId"]) ? e.data.parameters["customerId"] : e.data["customerId"];
    let email = (e.data.parameters && e.data.parameters["email"]) ? e.data.parameters["email"] : e.data["email"];
    let newPassword = (e.data.parameters && e.data.parameters["newPassword"]) ? e.data.parameters["newPassword"] : e.data["newPassword"];
    let resetPasswordLinkToken = (e.data.parameters && e.data.parameters["resetPasswordLinkToken"]) ? e.data.parameters["resetPasswordLinkToken"] : e.data["resetPasswordLinkToken"];
    let resetToken = (e.data.parameters && e.data.parameters["resetToken"]) ? e.data.parameters["resetToken"] : e.data["resetToken"];
    let template = (e.data.parameters && e.data.parameters["template"]) ? e.data.parameters["template"] : e.data["template"];
    let websiteId = (e.data.parameters && e.data.parameters["websiteId"]) ? e.data.parameters["websiteId"] : e.data["websiteId"];
    verifyCustomersExists(customerAccountManagementV1InitiatePasswordResetPutBody, customerAccountManagementV1ResetPasswordPostBody, customerId, email, newPassword, resetPasswordLinkToken, resetToken, template, websiteId);
  }
});

// Monitor: GuestCarts Verification (Existence)
bthread("monitor:GuestCarts:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsAdded() });
    let additionalData = (e.data.parameters && e.data.parameters["additionalData"]) ? e.data.parameters["additionalData"] : e.data["additionalData"];
    let addressInformation = (e.data.parameters && e.data.parameters["addressInformation"]) ? e.data.parameters["addressInformation"] : e.data["addressInformation"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let paymentMethod = (e.data.parameters && e.data.parameters["paymentMethod"]) ? e.data.parameters["paymentMethod"] : e.data["paymentMethod"];
    let shippingCarrierCode = (e.data.parameters && e.data.parameters["shippingCarrierCode"]) ? e.data.parameters["shippingCarrierCode"] : e.data["shippingCarrierCode"];
    let shippingMethodCode = (e.data.parameters && e.data.parameters["shippingMethodCode"]) ? e.data.parameters["shippingMethodCode"] : e.data["shippingMethodCode"];
    verifyGuestCartsExists(additionalData, addressInformation, cartId, paymentMethod, shippingCarrierCode, shippingMethodCode);
  }
});

// Monitor: GuestCartsEstimateShippingMethods Verification (Existence)
bthread("monitor:GuestCartsEstimateShippingMethods:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsEstimateShippingMethodsAdded() });
    let address = (e.data.parameters && e.data.parameters["address"]) ? e.data.parameters["address"] : e.data["address"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartsEstimateShippingMethodsExists(address, cartId, id);
  }
});

// Monitor: GuestCartsItems Verification (Existence)
bthread("monitor:GuestCartsItems:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsItemsAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let cartItem = (e.data.parameters && e.data.parameters["cartItem"]) ? e.data.parameters["cartItem"] : e.data["cartItem"];
    let quoteGuestCartManagementV1PlaceOrderPutBody = (e.data.parameters && e.data.parameters["quoteGuestCartManagementV1PlaceOrderPutBody"]) ? e.data.parameters["quoteGuestCartManagementV1PlaceOrderPutBody"] : e.data["quoteGuestCartManagementV1PlaceOrderPutBody"];
    // Block Deletion while Verifying Existence
    block(matchDeletedGuestCartsItems(cartId, cartItem, quoteGuestCartManagementV1PlaceOrderPutBody), function() { verifyGuestCartsItemsExists(cartId, cartItem, quoteGuestCartManagementV1PlaceOrderPutBody); });
  }
});

// Monitor: GuestCartsItems Verification (Absence)
bthread("monitor:GuestCartsItems:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedGuestCartsItems() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let cartItem = (e.data.parameters && e.data.parameters["cartItem"]) ? e.data.parameters["cartItem"] : e.data["cartItem"];
    let quoteGuestCartManagementV1PlaceOrderPutBody = (e.data.parameters && e.data.parameters["quoteGuestCartManagementV1PlaceOrderPutBody"]) ? e.data.parameters["quoteGuestCartManagementV1PlaceOrderPutBody"] : e.data["quoteGuestCartManagementV1PlaceOrderPutBody"];
    // Block Creation while Verifying Absence
    block(matchAnyGuestCartsItemsAdded(), function() { verifyGuestCartsItemsDoesNotExist(cartId, cartItem, quoteGuestCartManagementV1PlaceOrderPutBody); });
  }
});

// Monitor: GuestCartsBillingAddress Verification (Existence)
bthread("monitor:GuestCartsBillingAddress:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsBillingAddressAdded() });
    let address = (e.data.parameters && e.data.parameters["address"]) ? e.data.parameters["address"] : e.data["address"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let useForShipping = (e.data.parameters && e.data.parameters["useForShipping"]) ? e.data.parameters["useForShipping"] : e.data["useForShipping"];
    verifyGuestCartsBillingAddressExists(address, cartId, useForShipping);
  }
});

// Monitor: AdminToken Verification (Existence)
bthread("monitor:AdminToken:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAdminTokenAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let password = (e.data.parameters && e.data.parameters["password"]) ? e.data.parameters["password"] : e.data["password"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    verifyAdminTokenExists(id, password, username);
  }
});

// Monitor: GuestCartsPaymentInformation Verification (Existence)
bthread("monitor:GuestCartsPaymentInformation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsPaymentInformationAdded() });
    let addressInformation = (e.data.parameters && e.data.parameters["addressInformation"]) ? e.data.parameters["addressInformation"] : e.data["addressInformation"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    verifyGuestCartsPaymentInformationExists(addressInformation, cartId);
  }
});

// Monitor: GuestCartsSetPaymentInformation Verification (Existence)
bthread("monitor:GuestCartsSetPaymentInformation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsSetPaymentInformationAdded() });
    let billingAddress = (e.data.parameters && e.data.parameters["billingAddress"]) ? e.data.parameters["billingAddress"] : e.data["billingAddress"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let email = (e.data.parameters && e.data.parameters["email"]) ? e.data.parameters["email"] : e.data["email"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let paymentMethod = (e.data.parameters && e.data.parameters["paymentMethod"]) ? e.data.parameters["paymentMethod"] : e.data["paymentMethod"];
    verifyGuestCartsSetPaymentInformationExists(billingAddress, cartId, email, id, paymentMethod);
  }
});

// Monitor: GuestCartsShippingInformation Verification (Existence)
bthread("monitor:GuestCartsShippingInformation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsShippingInformationAdded() });
    let addressInformation = (e.data.parameters && e.data.parameters["addressInformation"]) ? e.data.parameters["addressInformation"] : e.data["addressInformation"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartsShippingInformationExists(addressInformation, cartId, id);
  }
});

// Monitor: GuestCartsTotalsInformation Verification (Existence)
bthread("monitor:GuestCartsTotalsInformation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsTotalsInformationAdded() });
    let addressInformation = (e.data.parameters && e.data.parameters["addressInformation"]) ? e.data.parameters["addressInformation"] : e.data["addressInformation"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartsTotalsInformationExists(addressInformation, cartId, id);
  }
});

// Monitor: CustomerToken Verification (Existence)
bthread("monitor:CustomerToken:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCustomerTokenAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let password = (e.data.parameters && e.data.parameters["password"]) ? e.data.parameters["password"] : e.data["password"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    verifyCustomerTokenExists(id, password, username);
  }
});

// Monitor: GuestCartGiftMessage Verification (Existence)
bthread("monitor:GuestCartGiftMessage:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartGiftMessageAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let giftMessage = (e.data.parameters && e.data.parameters["giftMessage"]) ? e.data.parameters["giftMessage"] : e.data["giftMessage"];
    verifyGuestCartGiftMessageExists(cartId, giftMessage);
  }
});

// Monitor: GuestItemGiftMessage Verification (Existence)
bthread("monitor:GuestItemGiftMessage:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestItemGiftMessageAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let giftMessage = (e.data.parameters && e.data.parameters["giftMessage"]) ? e.data.parameters["giftMessage"] : e.data["giftMessage"];
    let itemId = (e.data.parameters && e.data.parameters["itemId"]) ? e.data.parameters["itemId"] : e.data["itemId"];
    verifyGuestItemGiftMessageExists(cartId, giftMessage, itemId);
  }
});

// Monitor: GuestCartCollectionPoint Verification (Existence)
bthread("monitor:GuestCartCollectionPoint:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartCollectionPointAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let collectionPointId = (e.data.parameters && e.data.parameters["collectionPointId"]) ? e.data.parameters["collectionPointId"] : e.data["collectionPointId"];
    let countryId = (e.data.parameters && e.data.parameters["countryId"]) ? e.data.parameters["countryId"] : e.data["countryId"];
    let postcode = (e.data.parameters && e.data.parameters["postcode"]) ? e.data.parameters["postcode"] : e.data["postcode"];
    // Block Deletion while Verifying Existence
    block(matchDeletedGuestCartCollectionPoint(cartId, collectionPointId, countryId, postcode), function() { verifyGuestCartCollectionPointExists(cartId, collectionPointId, countryId, postcode); });
  }
});

// Monitor: GuestCartCollectionPoint Verification (Absence)
bthread("monitor:GuestCartCollectionPoint:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedGuestCartCollectionPoint() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let collectionPointId = (e.data.parameters && e.data.parameters["collectionPointId"]) ? e.data.parameters["collectionPointId"] : e.data["collectionPointId"];
    let countryId = (e.data.parameters && e.data.parameters["countryId"]) ? e.data.parameters["countryId"] : e.data["countryId"];
    let postcode = (e.data.parameters && e.data.parameters["postcode"]) ? e.data.parameters["postcode"] : e.data["postcode"];
    // Block Creation while Verifying Absence
    block(matchAnyGuestCartCollectionPointAdded(), function() { verifyGuestCartCollectionPointDoesNotExist(cartId, collectionPointId, countryId, postcode); });
  }
});

// Monitor: GuestCartDeliveryOption Verification (Existence)
bthread("monitor:GuestCartDeliveryOption:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartDeliveryOptionAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let selectedOption = (e.data.parameters && e.data.parameters["selectedOption"]) ? e.data.parameters["selectedOption"] : e.data["selectedOption"];
    verifyGuestCartDeliveryOptionExists(cartId, id, selectedOption);
  }
});

// Monitor: GuestCartCollectionPointSelect Verification (Existence)
bthread("monitor:GuestCartCollectionPointSelect:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartCollectionPointSelectAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let entityId = (e.data.parameters && e.data.parameters["entityId"]) ? e.data.parameters["entityId"] : e.data["entityId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartCollectionPointSelectExists(cartId, entityId, id);
  }
});

// Monitor: GuestCartCheckoutFields Verification (Existence)
bthread("monitor:GuestCartCheckoutFields:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartCheckoutFieldsAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let serviceSelection = (e.data.parameters && e.data.parameters["serviceSelection"]) ? e.data.parameters["serviceSelection"] : e.data["serviceSelection"];
    verifyGuestCartCheckoutFieldsExists(cartId, id, serviceSelection);
  }
});

// Monitor: GuestCartPickupLocation Verification (Existence)
bthread("monitor:GuestCartPickupLocation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartPickupLocationAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let pickupLocationId = (e.data.parameters && e.data.parameters["pickupLocationId"]) ? e.data.parameters["pickupLocationId"] : e.data["pickupLocationId"];
    verifyGuestCartPickupLocationExists(cartId, id, pickupLocationId);
  }
});

// Monitor: GuestCartDeliveryPickupLocation Verification (Existence)
bthread("monitor:GuestCartDeliveryPickupLocation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartDeliveryPickupLocationAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let entityId = (e.data.parameters && e.data.parameters["entityId"]) ? e.data.parameters["entityId"] : e.data["entityId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartDeliveryPickupLocationExists(cartId, entityId, id);
  }
});

// Story: crud:Customers:linear:1
bthread("crud:Customers:linear:1", function () {
  // -> Creating Customers
  let customerAccountManagementV1InitiatePasswordResetPutBody_Customers_100 = {};
  let customerAccountManagementV1ResetPasswordPostBody_Customers_100 = {};
  let customerId_Customers_100 = Math.floor(Math.random() * 1000);
  let email_Customers_100 = "email_Customers_100_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_100 = "newPassword_Customers_100_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_100 = "resetPasswordLinkToken_Customers_100_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_100 = "resetToken_Customers_100_" + Math.floor(Math.random()*1000);
  let template_Customers_100 = "template_Customers_100_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_100 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_Customers_100, customerAccountManagementV1ResetPasswordPostBody_Customers_100, customerId_Customers_100, email_Customers_100, newPassword_Customers_100, resetPasswordLinkToken_Customers_100, resetToken_Customers_100, template_Customers_100, websiteId_Customers_100, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Customers
  let customerAccountManagementV1InitiatePasswordResetPutBody_Customers_upd_100 = {};
  let customerAccountManagementV1ResetPasswordPostBody_Customers_upd_100 = {};
  let customerId_Customers_upd_100 = customerId_Customers_100;
  let email_Customers_upd_100 = "email_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_upd_100 = "newPassword_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_upd_100 = "resetPasswordLinkToken_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_upd_100 = "resetToken_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let template_Customers_upd_100 = "template_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_upd_100 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1InitiatePasswordResetPut(customerAccountManagementV1InitiatePasswordResetPutBody_Customers_upd_100, customerAccountManagementV1ResetPasswordPostBody_Customers_upd_100, customerId_Customers_upd_100, email_Customers_upd_100, newPassword_Customers_upd_100, resetPasswordLinkToken_Customers_upd_100, resetToken_Customers_upd_100, template_Customers_upd_100, websiteId_Customers_upd_100, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCarts:linear:1
bthread("crud:GuestCarts:linear:1", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_110 = {};
  let addressInformation_GuestCarts_110 = {};
  let cartId_GuestCarts_110 = "cartId_GuestCarts_110_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_110 = {};
  let shippingCarrierCode_GuestCarts_110 = "shippingCarrierCode_GuestCarts_110_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_110 = "shippingMethodCode_GuestCarts_110_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_110, addressInformation_GuestCarts_110, cartId_GuestCarts_110, paymentMethod_GuestCarts_110, shippingCarrierCode_GuestCarts_110, shippingMethodCode_GuestCarts_110, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCarts
  let additionalData_GuestCarts_upd_110 = {};
  let addressInformation_GuestCarts_upd_110 = {};
  let cartId_GuestCarts_upd_110 = cartId_GuestCarts_110;
  let paymentMethod_GuestCarts_upd_110 = {};
  let shippingCarrierCode_GuestCarts_upd_110 = "shippingCarrierCode_GuestCarts_upd_110_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_upd_110 = "shippingMethodCode_GuestCarts_upd_110_" + Math.floor(Math.random()*1000);
  quoteGuestCartTotalManagementV1CollectTotalsPut(additionalData_GuestCarts_upd_110, addressInformation_GuestCarts_upd_110, cartId_GuestCarts_upd_110, paymentMethod_GuestCarts_upd_110, shippingCarrierCode_GuestCarts_upd_110, shippingMethodCode_GuestCarts_upd_110, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for GuestCarts to prevent foreign key errors (has active dependents)
});

// Story: crud:GuestCartsEstimateShippingMethods:linear:1
bthread("crud:GuestCartsEstimateShippingMethods:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsEstimateShippingMethods
  let address_GuestCartsEstimateShippingMethods_120 = "address_GuestCartsEstimateShippingMethods_120_" + Math.floor(Math.random()*1000);
  let cartId_GuestCartsEstimateShippingMethods_120 = GuestCartsId;
  let id_GuestCartsEstimateShippingMethods_120 = "id_GuestCartsEstimateShippingMethods_120_" + Math.floor(Math.random()*1000);
  estimateShippingMethods(address_GuestCartsEstimateShippingMethods_120, cartId_GuestCartsEstimateShippingMethods_120, id_GuestCartsEstimateShippingMethods_120, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsItems:linear:1
bthread("crud:GuestCartsItems:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsItems
  let cartId_GuestCartsItems_130 = GuestCartsId;
  let cartItem_GuestCartsItems_130 = "cartItem_GuestCartsItems_130_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_130 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_130_" + Math.floor(Math.random()*1000);
  addOrUpdateCartItem(cartId_GuestCartsItems_130, cartItem_GuestCartsItems_130, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_130, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartsItems
  let cartId_GuestCartsItems_upd_130 = cartId_GuestCartsItems_130;
  let cartItem_GuestCartsItems_upd_130 = "cartItem_GuestCartsItems_upd_130_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_130 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_130_" + Math.floor(Math.random()*1000);
  quoteGuestCartManagementV1PlaceOrderPut(cartId_GuestCartsItems_upd_130, cartItem_GuestCartsItems_upd_130, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_130, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartsItems
  quoteGuestCouponManagementV1RemoveDelete(cartId_GuestCartsItems_130, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsBillingAddress:linear:1
bthread("crud:GuestCartsBillingAddress:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsBillingAddress
  let address_GuestCartsBillingAddress_140 = {};
  let cartId_GuestCartsBillingAddress_140 = GuestCartsId;
  let useForShipping_GuestCartsBillingAddress_140 = true;
  quoteGuestBillingAddressManagementV1AssignPost(address_GuestCartsBillingAddress_140, cartId_GuestCartsBillingAddress_140, useForShipping_GuestCartsBillingAddress_140, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:AdminToken:linear:1
bthread("crud:AdminToken:linear:1", function () {
  // -> Creating AdminToken
  let id_AdminToken_150 = "id_AdminToken_150_" + Math.floor(Math.random()*1000);
  let password_AdminToken_150 = "password_AdminToken_150_" + Math.floor(Math.random()*1000);
  let username_AdminToken_150 = "username_AdminToken_150_" + Math.floor(Math.random()*1000);
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost(id_AdminToken_150, password_AdminToken_150, username_AdminToken_150, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsPaymentInformation:linear:1
bthread("crud:GuestCartsPaymentInformation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsPaymentInformation
  let addressInformation_GuestCartsPaymentInformation_160 = {};
  let cartId_GuestCartsPaymentInformation_160 = GuestCartsId;
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsPaymentInformation_160, cartId_GuestCartsPaymentInformation_160, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsSetPaymentInformation:linear:1
bthread("crud:GuestCartsSetPaymentInformation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsSetPaymentInformation
  let billingAddress_GuestCartsSetPaymentInformation_170 = {};
  let cartId_GuestCartsSetPaymentInformation_170 = GuestCartsId;
  let email_GuestCartsSetPaymentInformation_170 = "email_GuestCartsSetPaymentInformation_170_" + Math.floor(Math.random()*1000);
  let id_GuestCartsSetPaymentInformation_170 = "id_GuestCartsSetPaymentInformation_170_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCartsSetPaymentInformation_170 = {};
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(billingAddress_GuestCartsSetPaymentInformation_170, cartId_GuestCartsSetPaymentInformation_170, email_GuestCartsSetPaymentInformation_170, id_GuestCartsSetPaymentInformation_170, paymentMethod_GuestCartsSetPaymentInformation_170, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsShippingInformation:linear:1
bthread("crud:GuestCartsShippingInformation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsShippingInformation
  let addressInformation_GuestCartsShippingInformation_180 = {};
  let cartId_GuestCartsShippingInformation_180 = GuestCartsId;
  let id_GuestCartsShippingInformation_180 = "id_GuestCartsShippingInformation_180_" + Math.floor(Math.random()*1000);
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsShippingInformation_180, cartId_GuestCartsShippingInformation_180, id_GuestCartsShippingInformation_180, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsTotalsInformation:linear:1
bthread("crud:GuestCartsTotalsInformation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsTotalsInformation
  let addressInformation_GuestCartsTotalsInformation_190 = {};
  let cartId_GuestCartsTotalsInformation_190 = GuestCartsId;
  let id_GuestCartsTotalsInformation_190 = "id_GuestCartsTotalsInformation_190_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(addressInformation_GuestCartsTotalsInformation_190, cartId_GuestCartsTotalsInformation_190, id_GuestCartsTotalsInformation_190, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:CustomerToken:linear:1
bthread("crud:CustomerToken:linear:1", function () {
  // -> Creating CustomerToken
  let id_CustomerToken_200 = "id_CustomerToken_200_" + Math.floor(Math.random()*1000);
  let password_CustomerToken_200 = "password_CustomerToken_200_" + Math.floor(Math.random()*1000);
  let username_CustomerToken_200 = "username_CustomerToken_200_" + Math.floor(Math.random()*1000);
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(id_CustomerToken_200, password_CustomerToken_200, username_CustomerToken_200, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartGiftMessage:linear:1
bthread("crud:GuestCartGiftMessage:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartGiftMessage
  let cartId_GuestCartGiftMessage_210 = GuestCartsId;
  let giftMessage_GuestCartGiftMessage_210 = {};
  giftMessageGuestCartRepositoryV1SavePost(cartId_GuestCartGiftMessage_210, giftMessage_GuestCartGiftMessage_210, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestItemGiftMessage:linear:1
bthread("crud:GuestItemGiftMessage:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestItemGiftMessage
  let cartId_GuestItemGiftMessage_220 = GuestCartsId;
  let giftMessage_GuestItemGiftMessage_220 = {};
  let itemId_GuestItemGiftMessage_220 = Math.floor(Math.random() * 1000);
  giftMessageGuestItemRepositoryV1SavePost(cartId_GuestItemGiftMessage_220, giftMessage_GuestItemGiftMessage_220, itemId_GuestItemGiftMessage_220, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPoint:linear:1
bthread("crud:GuestCartCollectionPoint:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_230 = GuestCartsId;
  let collectionPointId_GuestCartCollectionPoint_230 = "collectionPointId_GuestCartCollectionPoint_230_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_230 = "countryId_GuestCartCollectionPoint_230_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_230 = "postcode_GuestCartCollectionPoint_230_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPoint_230, collectionPointId_GuestCartCollectionPoint_230, countryId_GuestCartCollectionPoint_230, postcode_GuestCartCollectionPoint_230, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_upd_230 = cartId_GuestCartCollectionPoint_230;
  let collectionPointId_GuestCartCollectionPoint_upd_230 = "collectionPointId_GuestCartCollectionPoint_upd_230_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_upd_230 = "countryId_GuestCartCollectionPoint_upd_230_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_upd_230 = "postcode_GuestCartCollectionPoint_upd_230_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SaveSearchRequestPut(cartId_GuestCartCollectionPoint_upd_230, collectionPointId_GuestCartCollectionPoint_upd_230, countryId_GuestCartCollectionPoint_upd_230, postcode_GuestCartCollectionPoint_upd_230, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartCollectionPoint
  temandoShippingCheckoutGuestCartCollectionPointManagementV1DeleteSearchRequestDelete(cartId_GuestCartCollectionPoint_230, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryOption:linear:1
bthread("crud:GuestCartDeliveryOption:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryOption
  let cartId_GuestCartDeliveryOption_240 = GuestCartsId;
  let id_GuestCartDeliveryOption_240 = "id_GuestCartDeliveryOption_240_" + Math.floor(Math.random()*1000);
  let selectedOption_GuestCartDeliveryOption_240 = "selectedOption_GuestCartDeliveryOption_240_" + Math.floor(Math.random()*1000);
  temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost(cartId_GuestCartDeliveryOption_240, id_GuestCartDeliveryOption_240, selectedOption_GuestCartDeliveryOption_240, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPointSelect:linear:1
bthread("crud:GuestCartCollectionPointSelect:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPointSelect
  let cartId_GuestCartCollectionPointSelect_250 = GuestCartsId;
  let entityId_GuestCartCollectionPointSelect_250 = Math.floor(Math.random() * 1000);
  let id_GuestCartCollectionPointSelect_250 = "id_GuestCartCollectionPointSelect_250_" + Math.floor(Math.random()*1000);
  temandoShippingDeliveryGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPointSelect_250, entityId_GuestCartCollectionPointSelect_250, id_GuestCartCollectionPointSelect_250, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCheckoutFields:linear:1
bthread("crud:GuestCartCheckoutFields:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCheckoutFields
  let cartId_GuestCartCheckoutFields_260 = GuestCartsId;
  let id_GuestCartCheckoutFields_260 = "id_GuestCartCheckoutFields_260_" + Math.floor(Math.random()*1000);
  let serviceSelection_GuestCartCheckoutFields_260 = [];
  saveCheckoutFields(cartId_GuestCartCheckoutFields_260, id_GuestCartCheckoutFields_260, serviceSelection_GuestCartCheckoutFields_260, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartPickupLocation:linear:1
bthread("crud:GuestCartPickupLocation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartPickupLocation
  let cartId_GuestCartPickupLocation_270 = GuestCartsId;
  let id_GuestCartPickupLocation_270 = "id_GuestCartPickupLocation_270_" + Math.floor(Math.random()*1000);
  let pickupLocationId_GuestCartPickupLocation_270 = "pickupLocationId_GuestCartPickupLocation_270_" + Math.floor(Math.random()*1000);
  selectPickupLocationForCheckout(cartId_GuestCartPickupLocation_270, id_GuestCartPickupLocation_270, pickupLocationId_GuestCartPickupLocation_270, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryPickupLocation:linear:1
bthread("crud:GuestCartDeliveryPickupLocation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryPickupLocation
  let cartId_GuestCartDeliveryPickupLocation_280 = GuestCartsId;
  let entityId_GuestCartDeliveryPickupLocation_280 = Math.floor(Math.random() * 1000);
  let id_GuestCartDeliveryPickupLocation_280 = "id_GuestCartDeliveryPickupLocation_280_" + Math.floor(Math.random()*1000);
  selectPickupLocationForDelivery(cartId_GuestCartDeliveryPickupLocation_280, entityId_GuestCartDeliveryPickupLocation_280, id_GuestCartDeliveryPickupLocation_280, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Customers:linear:2
bthread("crud:Customers:linear:2", function () {
  // -> Creating Customers
  let customerAccountManagementV1InitiatePasswordResetPutBody_Customers_290 = {};
  let customerAccountManagementV1ResetPasswordPostBody_Customers_290 = {};
  let customerId_Customers_290 = Math.floor(Math.random() * 1000);
  let email_Customers_290 = "email_Customers_290_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_290 = "newPassword_Customers_290_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_290 = "resetPasswordLinkToken_Customers_290_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_290 = "resetToken_Customers_290_" + Math.floor(Math.random()*1000);
  let template_Customers_290 = "template_Customers_290_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_290 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_Customers_290, customerAccountManagementV1ResetPasswordPostBody_Customers_290, customerId_Customers_290, email_Customers_290, newPassword_Customers_290, resetPasswordLinkToken_Customers_290, resetToken_Customers_290, template_Customers_290, websiteId_Customers_290, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Customers
  let customerAccountManagementV1InitiatePasswordResetPutBody_Customers_upd_290 = {};
  let customerAccountManagementV1ResetPasswordPostBody_Customers_upd_290 = {};
  let customerId_Customers_upd_290 = customerId_Customers_290;
  let email_Customers_upd_290 = "email_Customers_upd_290_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_upd_290 = "newPassword_Customers_upd_290_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_upd_290 = "resetPasswordLinkToken_Customers_upd_290_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_upd_290 = "resetToken_Customers_upd_290_" + Math.floor(Math.random()*1000);
  let template_Customers_upd_290 = "template_Customers_upd_290_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_upd_290 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1InitiatePasswordResetPut(customerAccountManagementV1InitiatePasswordResetPutBody_Customers_upd_290, customerAccountManagementV1ResetPasswordPostBody_Customers_upd_290, customerId_Customers_upd_290, email_Customers_upd_290, newPassword_Customers_upd_290, resetPasswordLinkToken_Customers_upd_290, resetToken_Customers_upd_290, template_Customers_upd_290, websiteId_Customers_upd_290, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCarts:linear:2
bthread("crud:GuestCarts:linear:2", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_300 = {};
  let addressInformation_GuestCarts_300 = {};
  let cartId_GuestCarts_300 = "cartId_GuestCarts_300_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_300 = {};
  let shippingCarrierCode_GuestCarts_300 = "shippingCarrierCode_GuestCarts_300_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_300 = "shippingMethodCode_GuestCarts_300_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_300, addressInformation_GuestCarts_300, cartId_GuestCarts_300, paymentMethod_GuestCarts_300, shippingCarrierCode_GuestCarts_300, shippingMethodCode_GuestCarts_300, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCarts
  let additionalData_GuestCarts_upd_300 = {};
  let addressInformation_GuestCarts_upd_300 = {};
  let cartId_GuestCarts_upd_300 = cartId_GuestCarts_300;
  let paymentMethod_GuestCarts_upd_300 = {};
  let shippingCarrierCode_GuestCarts_upd_300 = "shippingCarrierCode_GuestCarts_upd_300_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_upd_300 = "shippingMethodCode_GuestCarts_upd_300_" + Math.floor(Math.random()*1000);
  quoteGuestCartTotalManagementV1CollectTotalsPut(additionalData_GuestCarts_upd_300, addressInformation_GuestCarts_upd_300, cartId_GuestCarts_upd_300, paymentMethod_GuestCarts_upd_300, shippingCarrierCode_GuestCarts_upd_300, shippingMethodCode_GuestCarts_upd_300, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for GuestCarts to prevent foreign key errors (has active dependents)
});

// Story: crud:GuestCartsEstimateShippingMethods:linear:2
bthread("crud:GuestCartsEstimateShippingMethods:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsEstimateShippingMethods
  let address_GuestCartsEstimateShippingMethods_310 = "address_GuestCartsEstimateShippingMethods_310_" + Math.floor(Math.random()*1000);
  let cartId_GuestCartsEstimateShippingMethods_310 = GuestCartsId;
  let id_GuestCartsEstimateShippingMethods_310 = "id_GuestCartsEstimateShippingMethods_310_" + Math.floor(Math.random()*1000);
  estimateShippingMethods(address_GuestCartsEstimateShippingMethods_310, cartId_GuestCartsEstimateShippingMethods_310, id_GuestCartsEstimateShippingMethods_310, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsItems:linear:2
bthread("crud:GuestCartsItems:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsItems
  let cartId_GuestCartsItems_320 = GuestCartsId;
  let cartItem_GuestCartsItems_320 = "cartItem_GuestCartsItems_320_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_320 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_320_" + Math.floor(Math.random()*1000);
  addOrUpdateCartItem(cartId_GuestCartsItems_320, cartItem_GuestCartsItems_320, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_320, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartsItems
  let cartId_GuestCartsItems_upd_320 = cartId_GuestCartsItems_320;
  let cartItem_GuestCartsItems_upd_320 = "cartItem_GuestCartsItems_upd_320_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_320 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_320_" + Math.floor(Math.random()*1000);
  quoteGuestCartManagementV1PlaceOrderPut(cartId_GuestCartsItems_upd_320, cartItem_GuestCartsItems_upd_320, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_320, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartsItems
  quoteGuestCouponManagementV1RemoveDelete(cartId_GuestCartsItems_320, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsBillingAddress:linear:2
bthread("crud:GuestCartsBillingAddress:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsBillingAddress
  let address_GuestCartsBillingAddress_330 = {};
  let cartId_GuestCartsBillingAddress_330 = GuestCartsId;
  let useForShipping_GuestCartsBillingAddress_330 = true;
  quoteGuestBillingAddressManagementV1AssignPost(address_GuestCartsBillingAddress_330, cartId_GuestCartsBillingAddress_330, useForShipping_GuestCartsBillingAddress_330, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:AdminToken:linear:2
bthread("crud:AdminToken:linear:2", function () {
  // -> Creating AdminToken
  let id_AdminToken_340 = "id_AdminToken_340_" + Math.floor(Math.random()*1000);
  let password_AdminToken_340 = "password_AdminToken_340_" + Math.floor(Math.random()*1000);
  let username_AdminToken_340 = "username_AdminToken_340_" + Math.floor(Math.random()*1000);
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost(id_AdminToken_340, password_AdminToken_340, username_AdminToken_340, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsPaymentInformation:linear:2
bthread("crud:GuestCartsPaymentInformation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsPaymentInformation
  let addressInformation_GuestCartsPaymentInformation_350 = {};
  let cartId_GuestCartsPaymentInformation_350 = GuestCartsId;
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsPaymentInformation_350, cartId_GuestCartsPaymentInformation_350, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsSetPaymentInformation:linear:2
bthread("crud:GuestCartsSetPaymentInformation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsSetPaymentInformation
  let billingAddress_GuestCartsSetPaymentInformation_360 = {};
  let cartId_GuestCartsSetPaymentInformation_360 = GuestCartsId;
  let email_GuestCartsSetPaymentInformation_360 = "email_GuestCartsSetPaymentInformation_360_" + Math.floor(Math.random()*1000);
  let id_GuestCartsSetPaymentInformation_360 = "id_GuestCartsSetPaymentInformation_360_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCartsSetPaymentInformation_360 = {};
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(billingAddress_GuestCartsSetPaymentInformation_360, cartId_GuestCartsSetPaymentInformation_360, email_GuestCartsSetPaymentInformation_360, id_GuestCartsSetPaymentInformation_360, paymentMethod_GuestCartsSetPaymentInformation_360, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsShippingInformation:linear:2
bthread("crud:GuestCartsShippingInformation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsShippingInformation
  let addressInformation_GuestCartsShippingInformation_370 = {};
  let cartId_GuestCartsShippingInformation_370 = GuestCartsId;
  let id_GuestCartsShippingInformation_370 = "id_GuestCartsShippingInformation_370_" + Math.floor(Math.random()*1000);
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsShippingInformation_370, cartId_GuestCartsShippingInformation_370, id_GuestCartsShippingInformation_370, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsTotalsInformation:linear:2
bthread("crud:GuestCartsTotalsInformation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsTotalsInformation
  let addressInformation_GuestCartsTotalsInformation_380 = {};
  let cartId_GuestCartsTotalsInformation_380 = GuestCartsId;
  let id_GuestCartsTotalsInformation_380 = "id_GuestCartsTotalsInformation_380_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(addressInformation_GuestCartsTotalsInformation_380, cartId_GuestCartsTotalsInformation_380, id_GuestCartsTotalsInformation_380, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:CustomerToken:linear:2
bthread("crud:CustomerToken:linear:2", function () {
  // -> Creating CustomerToken
  let id_CustomerToken_390 = "id_CustomerToken_390_" + Math.floor(Math.random()*1000);
  let password_CustomerToken_390 = "password_CustomerToken_390_" + Math.floor(Math.random()*1000);
  let username_CustomerToken_390 = "username_CustomerToken_390_" + Math.floor(Math.random()*1000);
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(id_CustomerToken_390, password_CustomerToken_390, username_CustomerToken_390, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartGiftMessage:linear:2
bthread("crud:GuestCartGiftMessage:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartGiftMessage
  let cartId_GuestCartGiftMessage_400 = GuestCartsId;
  let giftMessage_GuestCartGiftMessage_400 = {};
  giftMessageGuestCartRepositoryV1SavePost(cartId_GuestCartGiftMessage_400, giftMessage_GuestCartGiftMessage_400, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestItemGiftMessage:linear:2
bthread("crud:GuestItemGiftMessage:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestItemGiftMessage
  let cartId_GuestItemGiftMessage_410 = GuestCartsId;
  let giftMessage_GuestItemGiftMessage_410 = {};
  let itemId_GuestItemGiftMessage_410 = Math.floor(Math.random() * 1000);
  giftMessageGuestItemRepositoryV1SavePost(cartId_GuestItemGiftMessage_410, giftMessage_GuestItemGiftMessage_410, itemId_GuestItemGiftMessage_410, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPoint:linear:2
bthread("crud:GuestCartCollectionPoint:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_420 = GuestCartsId;
  let collectionPointId_GuestCartCollectionPoint_420 = "collectionPointId_GuestCartCollectionPoint_420_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_420 = "countryId_GuestCartCollectionPoint_420_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_420 = "postcode_GuestCartCollectionPoint_420_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPoint_420, collectionPointId_GuestCartCollectionPoint_420, countryId_GuestCartCollectionPoint_420, postcode_GuestCartCollectionPoint_420, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_upd_420 = cartId_GuestCartCollectionPoint_420;
  let collectionPointId_GuestCartCollectionPoint_upd_420 = "collectionPointId_GuestCartCollectionPoint_upd_420_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_upd_420 = "countryId_GuestCartCollectionPoint_upd_420_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_upd_420 = "postcode_GuestCartCollectionPoint_upd_420_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SaveSearchRequestPut(cartId_GuestCartCollectionPoint_upd_420, collectionPointId_GuestCartCollectionPoint_upd_420, countryId_GuestCartCollectionPoint_upd_420, postcode_GuestCartCollectionPoint_upd_420, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartCollectionPoint
  temandoShippingCheckoutGuestCartCollectionPointManagementV1DeleteSearchRequestDelete(cartId_GuestCartCollectionPoint_420, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryOption:linear:2
bthread("crud:GuestCartDeliveryOption:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryOption
  let cartId_GuestCartDeliveryOption_430 = GuestCartsId;
  let id_GuestCartDeliveryOption_430 = "id_GuestCartDeliveryOption_430_" + Math.floor(Math.random()*1000);
  let selectedOption_GuestCartDeliveryOption_430 = "selectedOption_GuestCartDeliveryOption_430_" + Math.floor(Math.random()*1000);
  temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost(cartId_GuestCartDeliveryOption_430, id_GuestCartDeliveryOption_430, selectedOption_GuestCartDeliveryOption_430, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPointSelect:linear:2
bthread("crud:GuestCartCollectionPointSelect:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPointSelect
  let cartId_GuestCartCollectionPointSelect_440 = GuestCartsId;
  let entityId_GuestCartCollectionPointSelect_440 = Math.floor(Math.random() * 1000);
  let id_GuestCartCollectionPointSelect_440 = "id_GuestCartCollectionPointSelect_440_" + Math.floor(Math.random()*1000);
  temandoShippingDeliveryGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPointSelect_440, entityId_GuestCartCollectionPointSelect_440, id_GuestCartCollectionPointSelect_440, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCheckoutFields:linear:2
bthread("crud:GuestCartCheckoutFields:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCheckoutFields
  let cartId_GuestCartCheckoutFields_450 = GuestCartsId;
  let id_GuestCartCheckoutFields_450 = "id_GuestCartCheckoutFields_450_" + Math.floor(Math.random()*1000);
  let serviceSelection_GuestCartCheckoutFields_450 = [];
  saveCheckoutFields(cartId_GuestCartCheckoutFields_450, id_GuestCartCheckoutFields_450, serviceSelection_GuestCartCheckoutFields_450, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartPickupLocation:linear:2
bthread("crud:GuestCartPickupLocation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartPickupLocation
  let cartId_GuestCartPickupLocation_460 = GuestCartsId;
  let id_GuestCartPickupLocation_460 = "id_GuestCartPickupLocation_460_" + Math.floor(Math.random()*1000);
  let pickupLocationId_GuestCartPickupLocation_460 = "pickupLocationId_GuestCartPickupLocation_460_" + Math.floor(Math.random()*1000);
  selectPickupLocationForCheckout(cartId_GuestCartPickupLocation_460, id_GuestCartPickupLocation_460, pickupLocationId_GuestCartPickupLocation_460, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryPickupLocation:linear:2
bthread("crud:GuestCartDeliveryPickupLocation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryPickupLocation
  let cartId_GuestCartDeliveryPickupLocation_470 = GuestCartsId;
  let entityId_GuestCartDeliveryPickupLocation_470 = Math.floor(Math.random() * 1000);
  let id_GuestCartDeliveryPickupLocation_470 = "id_GuestCartDeliveryPickupLocation_470_" + Math.floor(Math.random()*1000);
  selectPickupLocationForDelivery(cartId_GuestCartDeliveryPickupLocation_470, entityId_GuestCartDeliveryPickupLocation_470, id_GuestCartDeliveryPickupLocation_470, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Customers:linear:3
bthread("crud:Customers:linear:3", function () {
  // -> Creating Customers
  let customerAccountManagementV1InitiatePasswordResetPutBody_Customers_480 = {};
  let customerAccountManagementV1ResetPasswordPostBody_Customers_480 = {};
  let customerId_Customers_480 = Math.floor(Math.random() * 1000);
  let email_Customers_480 = "email_Customers_480_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_480 = "newPassword_Customers_480_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_480 = "resetPasswordLinkToken_Customers_480_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_480 = "resetToken_Customers_480_" + Math.floor(Math.random()*1000);
  let template_Customers_480 = "template_Customers_480_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_480 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_Customers_480, customerAccountManagementV1ResetPasswordPostBody_Customers_480, customerId_Customers_480, email_Customers_480, newPassword_Customers_480, resetPasswordLinkToken_Customers_480, resetToken_Customers_480, template_Customers_480, websiteId_Customers_480, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Customers
  let customerAccountManagementV1InitiatePasswordResetPutBody_Customers_upd_480 = {};
  let customerAccountManagementV1ResetPasswordPostBody_Customers_upd_480 = {};
  let customerId_Customers_upd_480 = customerId_Customers_480;
  let email_Customers_upd_480 = "email_Customers_upd_480_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_upd_480 = "newPassword_Customers_upd_480_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_upd_480 = "resetPasswordLinkToken_Customers_upd_480_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_upd_480 = "resetToken_Customers_upd_480_" + Math.floor(Math.random()*1000);
  let template_Customers_upd_480 = "template_Customers_upd_480_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_upd_480 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1InitiatePasswordResetPut(customerAccountManagementV1InitiatePasswordResetPutBody_Customers_upd_480, customerAccountManagementV1ResetPasswordPostBody_Customers_upd_480, customerId_Customers_upd_480, email_Customers_upd_480, newPassword_Customers_upd_480, resetPasswordLinkToken_Customers_upd_480, resetToken_Customers_upd_480, template_Customers_upd_480, websiteId_Customers_upd_480, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCarts:linear:3
bthread("crud:GuestCarts:linear:3", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_490 = {};
  let addressInformation_GuestCarts_490 = {};
  let cartId_GuestCarts_490 = "cartId_GuestCarts_490_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_490 = {};
  let shippingCarrierCode_GuestCarts_490 = "shippingCarrierCode_GuestCarts_490_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_490 = "shippingMethodCode_GuestCarts_490_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_490, addressInformation_GuestCarts_490, cartId_GuestCarts_490, paymentMethod_GuestCarts_490, shippingCarrierCode_GuestCarts_490, shippingMethodCode_GuestCarts_490, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCarts
  let additionalData_GuestCarts_upd_490 = {};
  let addressInformation_GuestCarts_upd_490 = {};
  let cartId_GuestCarts_upd_490 = cartId_GuestCarts_490;
  let paymentMethod_GuestCarts_upd_490 = {};
  let shippingCarrierCode_GuestCarts_upd_490 = "shippingCarrierCode_GuestCarts_upd_490_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_upd_490 = "shippingMethodCode_GuestCarts_upd_490_" + Math.floor(Math.random()*1000);
  quoteGuestCartTotalManagementV1CollectTotalsPut(additionalData_GuestCarts_upd_490, addressInformation_GuestCarts_upd_490, cartId_GuestCarts_upd_490, paymentMethod_GuestCarts_upd_490, shippingCarrierCode_GuestCarts_upd_490, shippingMethodCode_GuestCarts_upd_490, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for GuestCarts to prevent foreign key errors (has active dependents)
});

// Story: crud:GuestCartsEstimateShippingMethods:linear:3
bthread("crud:GuestCartsEstimateShippingMethods:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsEstimateShippingMethods
  let address_GuestCartsEstimateShippingMethods_500 = "address_GuestCartsEstimateShippingMethods_500_" + Math.floor(Math.random()*1000);
  let cartId_GuestCartsEstimateShippingMethods_500 = GuestCartsId;
  let id_GuestCartsEstimateShippingMethods_500 = "id_GuestCartsEstimateShippingMethods_500_" + Math.floor(Math.random()*1000);
  estimateShippingMethods(address_GuestCartsEstimateShippingMethods_500, cartId_GuestCartsEstimateShippingMethods_500, id_GuestCartsEstimateShippingMethods_500, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsItems:linear:3
bthread("crud:GuestCartsItems:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsItems
  let cartId_GuestCartsItems_510 = GuestCartsId;
  let cartItem_GuestCartsItems_510 = "cartItem_GuestCartsItems_510_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_510 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_510_" + Math.floor(Math.random()*1000);
  addOrUpdateCartItem(cartId_GuestCartsItems_510, cartItem_GuestCartsItems_510, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_510, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartsItems
  let cartId_GuestCartsItems_upd_510 = cartId_GuestCartsItems_510;
  let cartItem_GuestCartsItems_upd_510 = "cartItem_GuestCartsItems_upd_510_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_510 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_510_" + Math.floor(Math.random()*1000);
  quoteGuestCartManagementV1PlaceOrderPut(cartId_GuestCartsItems_upd_510, cartItem_GuestCartsItems_upd_510, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_510, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartsItems
  quoteGuestCouponManagementV1RemoveDelete(cartId_GuestCartsItems_510, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsBillingAddress:linear:3
bthread("crud:GuestCartsBillingAddress:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsBillingAddress
  let address_GuestCartsBillingAddress_520 = {};
  let cartId_GuestCartsBillingAddress_520 = GuestCartsId;
  let useForShipping_GuestCartsBillingAddress_520 = true;
  quoteGuestBillingAddressManagementV1AssignPost(address_GuestCartsBillingAddress_520, cartId_GuestCartsBillingAddress_520, useForShipping_GuestCartsBillingAddress_520, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:AdminToken:linear:3
bthread("crud:AdminToken:linear:3", function () {
  // -> Creating AdminToken
  let id_AdminToken_530 = "id_AdminToken_530_" + Math.floor(Math.random()*1000);
  let password_AdminToken_530 = "password_AdminToken_530_" + Math.floor(Math.random()*1000);
  let username_AdminToken_530 = "username_AdminToken_530_" + Math.floor(Math.random()*1000);
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost(id_AdminToken_530, password_AdminToken_530, username_AdminToken_530, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsPaymentInformation:linear:3
bthread("crud:GuestCartsPaymentInformation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsPaymentInformation
  let addressInformation_GuestCartsPaymentInformation_540 = {};
  let cartId_GuestCartsPaymentInformation_540 = GuestCartsId;
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsPaymentInformation_540, cartId_GuestCartsPaymentInformation_540, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsSetPaymentInformation:linear:3
bthread("crud:GuestCartsSetPaymentInformation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsSetPaymentInformation
  let billingAddress_GuestCartsSetPaymentInformation_550 = {};
  let cartId_GuestCartsSetPaymentInformation_550 = GuestCartsId;
  let email_GuestCartsSetPaymentInformation_550 = "email_GuestCartsSetPaymentInformation_550_" + Math.floor(Math.random()*1000);
  let id_GuestCartsSetPaymentInformation_550 = "id_GuestCartsSetPaymentInformation_550_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCartsSetPaymentInformation_550 = {};
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(billingAddress_GuestCartsSetPaymentInformation_550, cartId_GuestCartsSetPaymentInformation_550, email_GuestCartsSetPaymentInformation_550, id_GuestCartsSetPaymentInformation_550, paymentMethod_GuestCartsSetPaymentInformation_550, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsShippingInformation:linear:3
bthread("crud:GuestCartsShippingInformation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsShippingInformation
  let addressInformation_GuestCartsShippingInformation_560 = {};
  let cartId_GuestCartsShippingInformation_560 = GuestCartsId;
  let id_GuestCartsShippingInformation_560 = "id_GuestCartsShippingInformation_560_" + Math.floor(Math.random()*1000);
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsShippingInformation_560, cartId_GuestCartsShippingInformation_560, id_GuestCartsShippingInformation_560, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsTotalsInformation:linear:3
bthread("crud:GuestCartsTotalsInformation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsTotalsInformation
  let addressInformation_GuestCartsTotalsInformation_570 = {};
  let cartId_GuestCartsTotalsInformation_570 = GuestCartsId;
  let id_GuestCartsTotalsInformation_570 = "id_GuestCartsTotalsInformation_570_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(addressInformation_GuestCartsTotalsInformation_570, cartId_GuestCartsTotalsInformation_570, id_GuestCartsTotalsInformation_570, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:CustomerToken:linear:3
bthread("crud:CustomerToken:linear:3", function () {
  // -> Creating CustomerToken
  let id_CustomerToken_580 = "id_CustomerToken_580_" + Math.floor(Math.random()*1000);
  let password_CustomerToken_580 = "password_CustomerToken_580_" + Math.floor(Math.random()*1000);
  let username_CustomerToken_580 = "username_CustomerToken_580_" + Math.floor(Math.random()*1000);
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(id_CustomerToken_580, password_CustomerToken_580, username_CustomerToken_580, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartGiftMessage:linear:3
bthread("crud:GuestCartGiftMessage:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartGiftMessage
  let cartId_GuestCartGiftMessage_590 = GuestCartsId;
  let giftMessage_GuestCartGiftMessage_590 = {};
  giftMessageGuestCartRepositoryV1SavePost(cartId_GuestCartGiftMessage_590, giftMessage_GuestCartGiftMessage_590, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestItemGiftMessage:linear:3
bthread("crud:GuestItemGiftMessage:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestItemGiftMessage
  let cartId_GuestItemGiftMessage_600 = GuestCartsId;
  let giftMessage_GuestItemGiftMessage_600 = {};
  let itemId_GuestItemGiftMessage_600 = Math.floor(Math.random() * 1000);
  giftMessageGuestItemRepositoryV1SavePost(cartId_GuestItemGiftMessage_600, giftMessage_GuestItemGiftMessage_600, itemId_GuestItemGiftMessage_600, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPoint:linear:3
bthread("crud:GuestCartCollectionPoint:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_610 = GuestCartsId;
  let collectionPointId_GuestCartCollectionPoint_610 = "collectionPointId_GuestCartCollectionPoint_610_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_610 = "countryId_GuestCartCollectionPoint_610_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_610 = "postcode_GuestCartCollectionPoint_610_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPoint_610, collectionPointId_GuestCartCollectionPoint_610, countryId_GuestCartCollectionPoint_610, postcode_GuestCartCollectionPoint_610, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_upd_610 = cartId_GuestCartCollectionPoint_610;
  let collectionPointId_GuestCartCollectionPoint_upd_610 = "collectionPointId_GuestCartCollectionPoint_upd_610_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_upd_610 = "countryId_GuestCartCollectionPoint_upd_610_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_upd_610 = "postcode_GuestCartCollectionPoint_upd_610_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SaveSearchRequestPut(cartId_GuestCartCollectionPoint_upd_610, collectionPointId_GuestCartCollectionPoint_upd_610, countryId_GuestCartCollectionPoint_upd_610, postcode_GuestCartCollectionPoint_upd_610, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartCollectionPoint
  temandoShippingCheckoutGuestCartCollectionPointManagementV1DeleteSearchRequestDelete(cartId_GuestCartCollectionPoint_610, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryOption:linear:3
bthread("crud:GuestCartDeliveryOption:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryOption
  let cartId_GuestCartDeliveryOption_620 = GuestCartsId;
  let id_GuestCartDeliveryOption_620 = "id_GuestCartDeliveryOption_620_" + Math.floor(Math.random()*1000);
  let selectedOption_GuestCartDeliveryOption_620 = "selectedOption_GuestCartDeliveryOption_620_" + Math.floor(Math.random()*1000);
  temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost(cartId_GuestCartDeliveryOption_620, id_GuestCartDeliveryOption_620, selectedOption_GuestCartDeliveryOption_620, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPointSelect:linear:3
bthread("crud:GuestCartCollectionPointSelect:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPointSelect
  let cartId_GuestCartCollectionPointSelect_630 = GuestCartsId;
  let entityId_GuestCartCollectionPointSelect_630 = Math.floor(Math.random() * 1000);
  let id_GuestCartCollectionPointSelect_630 = "id_GuestCartCollectionPointSelect_630_" + Math.floor(Math.random()*1000);
  temandoShippingDeliveryGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPointSelect_630, entityId_GuestCartCollectionPointSelect_630, id_GuestCartCollectionPointSelect_630, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCheckoutFields:linear:3
bthread("crud:GuestCartCheckoutFields:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCheckoutFields
  let cartId_GuestCartCheckoutFields_640 = GuestCartsId;
  let id_GuestCartCheckoutFields_640 = "id_GuestCartCheckoutFields_640_" + Math.floor(Math.random()*1000);
  let serviceSelection_GuestCartCheckoutFields_640 = [];
  saveCheckoutFields(cartId_GuestCartCheckoutFields_640, id_GuestCartCheckoutFields_640, serviceSelection_GuestCartCheckoutFields_640, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartPickupLocation:linear:3
bthread("crud:GuestCartPickupLocation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartPickupLocation
  let cartId_GuestCartPickupLocation_650 = GuestCartsId;
  let id_GuestCartPickupLocation_650 = "id_GuestCartPickupLocation_650_" + Math.floor(Math.random()*1000);
  let pickupLocationId_GuestCartPickupLocation_650 = "pickupLocationId_GuestCartPickupLocation_650_" + Math.floor(Math.random()*1000);
  selectPickupLocationForCheckout(cartId_GuestCartPickupLocation_650, id_GuestCartPickupLocation_650, pickupLocationId_GuestCartPickupLocation_650, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryPickupLocation:linear:3
bthread("crud:GuestCartDeliveryPickupLocation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryPickupLocation
  let cartId_GuestCartDeliveryPickupLocation_660 = GuestCartsId;
  let entityId_GuestCartDeliveryPickupLocation_660 = Math.floor(Math.random() * 1000);
  let id_GuestCartDeliveryPickupLocation_660 = "id_GuestCartDeliveryPickupLocation_660_" + Math.floor(Math.random()*1000);
  selectPickupLocationForDelivery(cartId_GuestCartDeliveryPickupLocation_660, entityId_GuestCartDeliveryPickupLocation_660, id_GuestCartDeliveryPickupLocation_660, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain GuestCarts_GuestCartsEstimateShippingMethods (Self-Contained)
bthread("chain:GuestCarts_GuestCartsEstimateShippingMethods", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_670 = {};
  let addressInformation_GuestCarts_670 = {};
  let cartId_GuestCarts_670 = "cartId_GuestCarts_670_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_670 = {};
  let shippingCarrierCode_GuestCarts_670 = "shippingCarrierCode_GuestCarts_670_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_670 = "shippingMethodCode_GuestCarts_670_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_670, addressInformation_GuestCarts_670, cartId_GuestCarts_670, paymentMethod_GuestCarts_670, shippingCarrierCode_GuestCarts_670, shippingMethodCode_GuestCarts_670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsEstimateShippingMethods
  let address_GuestCartsEstimateShippingMethods_670 = "address_GuestCartsEstimateShippingMethods_670_" + Math.floor(Math.random()*1000);
  let cartId_GuestCartsEstimateShippingMethods_670 = cartId_GuestCarts_670;
  let id_GuestCartsEstimateShippingMethods_670 = "id_GuestCartsEstimateShippingMethods_670_" + Math.floor(Math.random()*1000);
  estimateShippingMethods(address_GuestCartsEstimateShippingMethods_670, cartId_GuestCartsEstimateShippingMethods_670, id_GuestCartsEstimateShippingMethods_670, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsItems (Self-Contained)
bthread("chain:GuestCarts_GuestCartsItems", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_770 = {};
  let addressInformation_GuestCarts_770 = {};
  let cartId_GuestCarts_770 = "cartId_GuestCarts_770_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_770 = {};
  let shippingCarrierCode_GuestCarts_770 = "shippingCarrierCode_GuestCarts_770_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_770 = "shippingMethodCode_GuestCarts_770_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_770, addressInformation_GuestCarts_770, cartId_GuestCarts_770, paymentMethod_GuestCarts_770, shippingCarrierCode_GuestCarts_770, shippingMethodCode_GuestCarts_770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsItems
  let cartId_GuestCartsItems_770 = cartId_GuestCarts_770;
  let cartItem_GuestCartsItems_770 = "cartItem_GuestCartsItems_770_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_770 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_770_" + Math.floor(Math.random()*1000);
  addOrUpdateCartItem(cartId_GuestCartsItems_770, cartItem_GuestCartsItems_770, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_770, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting GuestCartsItems
  quoteGuestCouponManagementV1RemoveDelete(cartId_GuestCartsItems_770, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain GuestCarts_GuestCartsBillingAddress (Self-Contained)
bthread("chain:GuestCarts_GuestCartsBillingAddress", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_870 = {};
  let addressInformation_GuestCarts_870 = {};
  let cartId_GuestCarts_870 = "cartId_GuestCarts_870_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_870 = {};
  let shippingCarrierCode_GuestCarts_870 = "shippingCarrierCode_GuestCarts_870_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_870 = "shippingMethodCode_GuestCarts_870_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_870, addressInformation_GuestCarts_870, cartId_GuestCarts_870, paymentMethod_GuestCarts_870, shippingCarrierCode_GuestCarts_870, shippingMethodCode_GuestCarts_870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsBillingAddress
  let address_GuestCartsBillingAddress_870 = {};
  let cartId_GuestCartsBillingAddress_870 = cartId_GuestCarts_870;
  let useForShipping_GuestCartsBillingAddress_870 = true;
  quoteGuestBillingAddressManagementV1AssignPost(address_GuestCartsBillingAddress_870, cartId_GuestCartsBillingAddress_870, useForShipping_GuestCartsBillingAddress_870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsPaymentInformation (Self-Contained)
bthread("chain:GuestCarts_GuestCartsPaymentInformation", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_970 = {};
  let addressInformation_GuestCarts_970 = {};
  let cartId_GuestCarts_970 = "cartId_GuestCarts_970_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_970 = {};
  let shippingCarrierCode_GuestCarts_970 = "shippingCarrierCode_GuestCarts_970_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_970 = "shippingMethodCode_GuestCarts_970_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_970, addressInformation_GuestCarts_970, cartId_GuestCarts_970, paymentMethod_GuestCarts_970, shippingCarrierCode_GuestCarts_970, shippingMethodCode_GuestCarts_970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsPaymentInformation
  let addressInformation_GuestCartsPaymentInformation_970 = {};
  let cartId_GuestCartsPaymentInformation_970 = cartId_GuestCarts_970;
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsPaymentInformation_970, cartId_GuestCartsPaymentInformation_970, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsSetPaymentInformation (Self-Contained)
bthread("chain:GuestCarts_GuestCartsSetPaymentInformation", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1070 = {};
  let addressInformation_GuestCarts_1070 = {};
  let cartId_GuestCarts_1070 = "cartId_GuestCarts_1070_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1070 = {};
  let shippingCarrierCode_GuestCarts_1070 = "shippingCarrierCode_GuestCarts_1070_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1070 = "shippingMethodCode_GuestCarts_1070_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1070, addressInformation_GuestCarts_1070, cartId_GuestCarts_1070, paymentMethod_GuestCarts_1070, shippingCarrierCode_GuestCarts_1070, shippingMethodCode_GuestCarts_1070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsSetPaymentInformation
  let billingAddress_GuestCartsSetPaymentInformation_1070 = {};
  let cartId_GuestCartsSetPaymentInformation_1070 = cartId_GuestCarts_1070;
  let email_GuestCartsSetPaymentInformation_1070 = "email_GuestCartsSetPaymentInformation_1070_" + Math.floor(Math.random()*1000);
  let id_GuestCartsSetPaymentInformation_1070 = "id_GuestCartsSetPaymentInformation_1070_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCartsSetPaymentInformation_1070 = {};
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(billingAddress_GuestCartsSetPaymentInformation_1070, cartId_GuestCartsSetPaymentInformation_1070, email_GuestCartsSetPaymentInformation_1070, id_GuestCartsSetPaymentInformation_1070, paymentMethod_GuestCartsSetPaymentInformation_1070, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsShippingInformation (Self-Contained)
bthread("chain:GuestCarts_GuestCartsShippingInformation", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1170 = {};
  let addressInformation_GuestCarts_1170 = {};
  let cartId_GuestCarts_1170 = "cartId_GuestCarts_1170_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1170 = {};
  let shippingCarrierCode_GuestCarts_1170 = "shippingCarrierCode_GuestCarts_1170_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1170 = "shippingMethodCode_GuestCarts_1170_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1170, addressInformation_GuestCarts_1170, cartId_GuestCarts_1170, paymentMethod_GuestCarts_1170, shippingCarrierCode_GuestCarts_1170, shippingMethodCode_GuestCarts_1170, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsShippingInformation
  let addressInformation_GuestCartsShippingInformation_1170 = {};
  let cartId_GuestCartsShippingInformation_1170 = cartId_GuestCarts_1170;
  let id_GuestCartsShippingInformation_1170 = "id_GuestCartsShippingInformation_1170_" + Math.floor(Math.random()*1000);
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsShippingInformation_1170, cartId_GuestCartsShippingInformation_1170, id_GuestCartsShippingInformation_1170, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsTotalsInformation (Self-Contained)
bthread("chain:GuestCarts_GuestCartsTotalsInformation", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1270 = {};
  let addressInformation_GuestCarts_1270 = {};
  let cartId_GuestCarts_1270 = "cartId_GuestCarts_1270_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1270 = {};
  let shippingCarrierCode_GuestCarts_1270 = "shippingCarrierCode_GuestCarts_1270_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1270 = "shippingMethodCode_GuestCarts_1270_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1270, addressInformation_GuestCarts_1270, cartId_GuestCarts_1270, paymentMethod_GuestCarts_1270, shippingCarrierCode_GuestCarts_1270, shippingMethodCode_GuestCarts_1270, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsTotalsInformation
  let addressInformation_GuestCartsTotalsInformation_1270 = {};
  let cartId_GuestCartsTotalsInformation_1270 = cartId_GuestCarts_1270;
  let id_GuestCartsTotalsInformation_1270 = "id_GuestCartsTotalsInformation_1270_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(addressInformation_GuestCartsTotalsInformation_1270, cartId_GuestCartsTotalsInformation_1270, id_GuestCartsTotalsInformation_1270, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartGiftMessage (Self-Contained)
bthread("chain:GuestCarts_GuestCartGiftMessage", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1370 = {};
  let addressInformation_GuestCarts_1370 = {};
  let cartId_GuestCarts_1370 = "cartId_GuestCarts_1370_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1370 = {};
  let shippingCarrierCode_GuestCarts_1370 = "shippingCarrierCode_GuestCarts_1370_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1370 = "shippingMethodCode_GuestCarts_1370_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1370, addressInformation_GuestCarts_1370, cartId_GuestCarts_1370, paymentMethod_GuestCarts_1370, shippingCarrierCode_GuestCarts_1370, shippingMethodCode_GuestCarts_1370, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartGiftMessage
  let cartId_GuestCartGiftMessage_1370 = cartId_GuestCarts_1370;
  let giftMessage_GuestCartGiftMessage_1370 = {};
  giftMessageGuestCartRepositoryV1SavePost(cartId_GuestCartGiftMessage_1370, giftMessage_GuestCartGiftMessage_1370, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestItemGiftMessage (Self-Contained)
bthread("chain:GuestCarts_GuestItemGiftMessage", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1470 = {};
  let addressInformation_GuestCarts_1470 = {};
  let cartId_GuestCarts_1470 = "cartId_GuestCarts_1470_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1470 = {};
  let shippingCarrierCode_GuestCarts_1470 = "shippingCarrierCode_GuestCarts_1470_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1470 = "shippingMethodCode_GuestCarts_1470_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1470, addressInformation_GuestCarts_1470, cartId_GuestCarts_1470, paymentMethod_GuestCarts_1470, shippingCarrierCode_GuestCarts_1470, shippingMethodCode_GuestCarts_1470, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestItemGiftMessage
  let cartId_GuestItemGiftMessage_1470 = cartId_GuestCarts_1470;
  let giftMessage_GuestItemGiftMessage_1470 = {};
  let itemId_GuestItemGiftMessage_1470 = Math.floor(Math.random() * 1000);
  giftMessageGuestItemRepositoryV1SavePost(cartId_GuestItemGiftMessage_1470, giftMessage_GuestItemGiftMessage_1470, itemId_GuestItemGiftMessage_1470, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartCollectionPoint (Self-Contained)
bthread("chain:GuestCarts_GuestCartCollectionPoint", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1570 = {};
  let addressInformation_GuestCarts_1570 = {};
  let cartId_GuestCarts_1570 = "cartId_GuestCarts_1570_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1570 = {};
  let shippingCarrierCode_GuestCarts_1570 = "shippingCarrierCode_GuestCarts_1570_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1570 = "shippingMethodCode_GuestCarts_1570_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1570, addressInformation_GuestCarts_1570, cartId_GuestCarts_1570, paymentMethod_GuestCarts_1570, shippingCarrierCode_GuestCarts_1570, shippingMethodCode_GuestCarts_1570, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_1570 = cartId_GuestCarts_1570;
  let collectionPointId_GuestCartCollectionPoint_1570 = "collectionPointId_GuestCartCollectionPoint_1570_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_1570 = "countryId_GuestCartCollectionPoint_1570_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_1570 = "postcode_GuestCartCollectionPoint_1570_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPoint_1570, collectionPointId_GuestCartCollectionPoint_1570, countryId_GuestCartCollectionPoint_1570, postcode_GuestCartCollectionPoint_1570, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting GuestCartCollectionPoint
  temandoShippingCheckoutGuestCartCollectionPointManagementV1DeleteSearchRequestDelete(cartId_GuestCartCollectionPoint_1570, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain GuestCarts_GuestCartDeliveryOption (Self-Contained)
bthread("chain:GuestCarts_GuestCartDeliveryOption", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1670 = {};
  let addressInformation_GuestCarts_1670 = {};
  let cartId_GuestCarts_1670 = "cartId_GuestCarts_1670_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1670 = {};
  let shippingCarrierCode_GuestCarts_1670 = "shippingCarrierCode_GuestCarts_1670_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1670 = "shippingMethodCode_GuestCarts_1670_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1670, addressInformation_GuestCarts_1670, cartId_GuestCarts_1670, paymentMethod_GuestCarts_1670, shippingCarrierCode_GuestCarts_1670, shippingMethodCode_GuestCarts_1670, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartDeliveryOption
  let cartId_GuestCartDeliveryOption_1670 = cartId_GuestCarts_1670;
  let id_GuestCartDeliveryOption_1670 = "id_GuestCartDeliveryOption_1670_" + Math.floor(Math.random()*1000);
  let selectedOption_GuestCartDeliveryOption_1670 = "selectedOption_GuestCartDeliveryOption_1670_" + Math.floor(Math.random()*1000);
  temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost(cartId_GuestCartDeliveryOption_1670, id_GuestCartDeliveryOption_1670, selectedOption_GuestCartDeliveryOption_1670, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartCollectionPointSelect (Self-Contained)
bthread("chain:GuestCarts_GuestCartCollectionPointSelect", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1770 = {};
  let addressInformation_GuestCarts_1770 = {};
  let cartId_GuestCarts_1770 = "cartId_GuestCarts_1770_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1770 = {};
  let shippingCarrierCode_GuestCarts_1770 = "shippingCarrierCode_GuestCarts_1770_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1770 = "shippingMethodCode_GuestCarts_1770_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1770, addressInformation_GuestCarts_1770, cartId_GuestCarts_1770, paymentMethod_GuestCarts_1770, shippingCarrierCode_GuestCarts_1770, shippingMethodCode_GuestCarts_1770, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartCollectionPointSelect
  let cartId_GuestCartCollectionPointSelect_1770 = cartId_GuestCarts_1770;
  let entityId_GuestCartCollectionPointSelect_1770 = Math.floor(Math.random() * 1000);
  let id_GuestCartCollectionPointSelect_1770 = "id_GuestCartCollectionPointSelect_1770_" + Math.floor(Math.random()*1000);
  temandoShippingDeliveryGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPointSelect_1770, entityId_GuestCartCollectionPointSelect_1770, id_GuestCartCollectionPointSelect_1770, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartCheckoutFields (Self-Contained)
bthread("chain:GuestCarts_GuestCartCheckoutFields", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1870 = {};
  let addressInformation_GuestCarts_1870 = {};
  let cartId_GuestCarts_1870 = "cartId_GuestCarts_1870_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1870 = {};
  let shippingCarrierCode_GuestCarts_1870 = "shippingCarrierCode_GuestCarts_1870_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1870 = "shippingMethodCode_GuestCarts_1870_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1870, addressInformation_GuestCarts_1870, cartId_GuestCarts_1870, paymentMethod_GuestCarts_1870, shippingCarrierCode_GuestCarts_1870, shippingMethodCode_GuestCarts_1870, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartCheckoutFields
  let cartId_GuestCartCheckoutFields_1870 = cartId_GuestCarts_1870;
  let id_GuestCartCheckoutFields_1870 = "id_GuestCartCheckoutFields_1870_" + Math.floor(Math.random()*1000);
  let serviceSelection_GuestCartCheckoutFields_1870 = [];
  saveCheckoutFields(cartId_GuestCartCheckoutFields_1870, id_GuestCartCheckoutFields_1870, serviceSelection_GuestCartCheckoutFields_1870, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartPickupLocation (Self-Contained)
bthread("chain:GuestCarts_GuestCartPickupLocation", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_1970 = {};
  let addressInformation_GuestCarts_1970 = {};
  let cartId_GuestCarts_1970 = "cartId_GuestCarts_1970_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_1970 = {};
  let shippingCarrierCode_GuestCarts_1970 = "shippingCarrierCode_GuestCarts_1970_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_1970 = "shippingMethodCode_GuestCarts_1970_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_1970, addressInformation_GuestCarts_1970, cartId_GuestCarts_1970, paymentMethod_GuestCarts_1970, shippingCarrierCode_GuestCarts_1970, shippingMethodCode_GuestCarts_1970, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartPickupLocation
  let cartId_GuestCartPickupLocation_1970 = cartId_GuestCarts_1970;
  let id_GuestCartPickupLocation_1970 = "id_GuestCartPickupLocation_1970_" + Math.floor(Math.random()*1000);
  let pickupLocationId_GuestCartPickupLocation_1970 = "pickupLocationId_GuestCartPickupLocation_1970_" + Math.floor(Math.random()*1000);
  selectPickupLocationForCheckout(cartId_GuestCartPickupLocation_1970, id_GuestCartPickupLocation_1970, pickupLocationId_GuestCartPickupLocation_1970, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartDeliveryPickupLocation (Self-Contained)
bthread("chain:GuestCarts_GuestCartDeliveryPickupLocation", function () {
  // -> Creating GuestCarts
  let additionalData_GuestCarts_2070 = {};
  let addressInformation_GuestCarts_2070 = {};
  let cartId_GuestCarts_2070 = "cartId_GuestCarts_2070_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCarts_2070 = {};
  let shippingCarrierCode_GuestCarts_2070 = "shippingCarrierCode_GuestCarts_2070_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCarts_2070 = "shippingMethodCode_GuestCarts_2070_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCarts_2070, addressInformation_GuestCarts_2070, cartId_GuestCarts_2070, paymentMethod_GuestCarts_2070, shippingCarrierCode_GuestCarts_2070, shippingMethodCode_GuestCarts_2070, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartDeliveryPickupLocation
  let cartId_GuestCartDeliveryPickupLocation_2070 = cartId_GuestCarts_2070;
  let entityId_GuestCartDeliveryPickupLocation_2070 = Math.floor(Math.random() * 1000);
  let id_GuestCartDeliveryPickupLocation_2070 = "id_GuestCartDeliveryPickupLocation_2070_" + Math.floor(Math.random()*1000);
  selectPickupLocationForDelivery(cartId_GuestCartDeliveryPickupLocation_2070, entityId_GuestCartDeliveryPickupLocation_2070, id_GuestCartDeliveryPickupLocation_2070, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// --- Hyper-Story Version 1: Global Coordination for magento ---
bthread("hyper:magento:orchestration:1", function () {
  bthread("Persona_Customer_1", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});
  bthread("Persona_Admin_1", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});
  bthread("Persona_Guest_1", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});
  bthread("Persona_Supplier_1", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});

  // Seeding Phase
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_1 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_1 = {};
      let customerId_seed_1 = Math.floor(Math.random() * 1000);
      let email_seed_1 = "email_seed_1_" + Math.floor(Math.random()*1000);
      let newPassword_seed_1 = "newPassword_seed_1_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_1 = "resetPasswordLinkToken_seed_1_" + Math.floor(Math.random()*1000);
      let resetToken_seed_1 = "resetToken_seed_1_" + Math.floor(Math.random()*1000);
      let template_seed_1 = "template_seed_1_" + Math.floor(Math.random()*1000);
      let websiteId_seed_1 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_1, customerAccountManagementV1ResetPasswordPostBody_seed_1, customerId_seed_1, email_seed_1, newPassword_seed_1, resetPasswordLinkToken_seed_1, resetToken_seed_1, template_seed_1, websiteId_seed_1, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_1 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_1 = {};
      let customerId_seed_1 = Math.floor(Math.random() * 1000);
      let email_seed_1 = "email_seed_1_" + Math.floor(Math.random()*1000);
      let newPassword_seed_1 = "newPassword_seed_1_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_1 = "resetPasswordLinkToken_seed_1_" + Math.floor(Math.random()*1000);
      let resetToken_seed_1 = "resetToken_seed_1_" + Math.floor(Math.random()*1000);
      let template_seed_1 = "template_seed_1_" + Math.floor(Math.random()*1000);
      let websiteId_seed_1 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_1, customerAccountManagementV1ResetPasswordPostBody_seed_1, customerId_seed_1, email_seed_1, newPassword_seed_1, resetPasswordLinkToken_seed_1, resetToken_seed_1, template_seed_1, websiteId_seed_1, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_1 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_1 = {};
      let customerId_seed_1 = Math.floor(Math.random() * 1000);
      let email_seed_1 = "email_seed_1_" + Math.floor(Math.random()*1000);
      let newPassword_seed_1 = "newPassword_seed_1_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_1 = "resetPasswordLinkToken_seed_1_" + Math.floor(Math.random()*1000);
      let resetToken_seed_1 = "resetToken_seed_1_" + Math.floor(Math.random()*1000);
      let template_seed_1 = "template_seed_1_" + Math.floor(Math.random()*1000);
      let websiteId_seed_1 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_1, customerAccountManagementV1ResetPasswordPostBody_seed_1, customerId_seed_1, email_seed_1, newPassword_seed_1, resetPasswordLinkToken_seed_1, resetToken_seed_1, template_seed_1, websiteId_seed_1, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_1 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_1 = {};
      let customerId_seed_1 = Math.floor(Math.random() * 1000);
      let email_seed_1 = "email_seed_1_" + Math.floor(Math.random()*1000);
      let newPassword_seed_1 = "newPassword_seed_1_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_1 = "resetPasswordLinkToken_seed_1_" + Math.floor(Math.random()*1000);
      let resetToken_seed_1 = "resetToken_seed_1_" + Math.floor(Math.random()*1000);
      let template_seed_1 = "template_seed_1_" + Math.floor(Math.random()*1000);
      let websiteId_seed_1 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_1, customerAccountManagementV1ResetPasswordPostBody_seed_1, customerId_seed_1, email_seed_1, newPassword_seed_1, resetPasswordLinkToken_seed_1, resetToken_seed_1, template_seed_1, websiteId_seed_1, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_1 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_1 = {};
      let customerId_seed_1 = Math.floor(Math.random() * 1000);
      let email_seed_1 = "email_seed_1_" + Math.floor(Math.random()*1000);
      let newPassword_seed_1 = "newPassword_seed_1_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_1 = "resetPasswordLinkToken_seed_1_" + Math.floor(Math.random()*1000);
      let resetToken_seed_1 = "resetToken_seed_1_" + Math.floor(Math.random()*1000);
      let template_seed_1 = "template_seed_1_" + Math.floor(Math.random()*1000);
      let websiteId_seed_1 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_1, customerAccountManagementV1ResetPasswordPostBody_seed_1, customerId_seed_1, email_seed_1, newPassword_seed_1, resetPasswordLinkToken_seed_1, resetToken_seed_1, template_seed_1, websiteId_seed_1, { expectedResponseCodes: [200, 201] });
}});
// --- Hyper-Story Version 2: Global Coordination for magento ---
bthread("hyper:magento:orchestration:2", function () {
  bthread("Persona_Customer_2", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});
  bthread("Persona_Admin_2", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});
  bthread("Persona_Guest_2", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});
  bthread("Persona_Supplier_2", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});

  // Seeding Phase
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_2 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_2 = {};
      let customerId_seed_2 = Math.floor(Math.random() * 1000);
      let email_seed_2 = "email_seed_2_" + Math.floor(Math.random()*1000);
      let newPassword_seed_2 = "newPassword_seed_2_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_2 = "resetPasswordLinkToken_seed_2_" + Math.floor(Math.random()*1000);
      let resetToken_seed_2 = "resetToken_seed_2_" + Math.floor(Math.random()*1000);
      let template_seed_2 = "template_seed_2_" + Math.floor(Math.random()*1000);
      let websiteId_seed_2 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_2, customerAccountManagementV1ResetPasswordPostBody_seed_2, customerId_seed_2, email_seed_2, newPassword_seed_2, resetPasswordLinkToken_seed_2, resetToken_seed_2, template_seed_2, websiteId_seed_2, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_2 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_2 = {};
      let customerId_seed_2 = Math.floor(Math.random() * 1000);
      let email_seed_2 = "email_seed_2_" + Math.floor(Math.random()*1000);
      let newPassword_seed_2 = "newPassword_seed_2_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_2 = "resetPasswordLinkToken_seed_2_" + Math.floor(Math.random()*1000);
      let resetToken_seed_2 = "resetToken_seed_2_" + Math.floor(Math.random()*1000);
      let template_seed_2 = "template_seed_2_" + Math.floor(Math.random()*1000);
      let websiteId_seed_2 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_2, customerAccountManagementV1ResetPasswordPostBody_seed_2, customerId_seed_2, email_seed_2, newPassword_seed_2, resetPasswordLinkToken_seed_2, resetToken_seed_2, template_seed_2, websiteId_seed_2, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_2 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_2 = {};
      let customerId_seed_2 = Math.floor(Math.random() * 1000);
      let email_seed_2 = "email_seed_2_" + Math.floor(Math.random()*1000);
      let newPassword_seed_2 = "newPassword_seed_2_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_2 = "resetPasswordLinkToken_seed_2_" + Math.floor(Math.random()*1000);
      let resetToken_seed_2 = "resetToken_seed_2_" + Math.floor(Math.random()*1000);
      let template_seed_2 = "template_seed_2_" + Math.floor(Math.random()*1000);
      let websiteId_seed_2 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_2, customerAccountManagementV1ResetPasswordPostBody_seed_2, customerId_seed_2, email_seed_2, newPassword_seed_2, resetPasswordLinkToken_seed_2, resetToken_seed_2, template_seed_2, websiteId_seed_2, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_2 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_2 = {};
      let customerId_seed_2 = Math.floor(Math.random() * 1000);
      let email_seed_2 = "email_seed_2_" + Math.floor(Math.random()*1000);
      let newPassword_seed_2 = "newPassword_seed_2_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_2 = "resetPasswordLinkToken_seed_2_" + Math.floor(Math.random()*1000);
      let resetToken_seed_2 = "resetToken_seed_2_" + Math.floor(Math.random()*1000);
      let template_seed_2 = "template_seed_2_" + Math.floor(Math.random()*1000);
      let websiteId_seed_2 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_2, customerAccountManagementV1ResetPasswordPostBody_seed_2, customerId_seed_2, email_seed_2, newPassword_seed_2, resetPasswordLinkToken_seed_2, resetToken_seed_2, template_seed_2, websiteId_seed_2, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_2 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_2 = {};
      let customerId_seed_2 = Math.floor(Math.random() * 1000);
      let email_seed_2 = "email_seed_2_" + Math.floor(Math.random()*1000);
      let newPassword_seed_2 = "newPassword_seed_2_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_2 = "resetPasswordLinkToken_seed_2_" + Math.floor(Math.random()*1000);
      let resetToken_seed_2 = "resetToken_seed_2_" + Math.floor(Math.random()*1000);
      let template_seed_2 = "template_seed_2_" + Math.floor(Math.random()*1000);
      let websiteId_seed_2 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_2, customerAccountManagementV1ResetPasswordPostBody_seed_2, customerId_seed_2, email_seed_2, newPassword_seed_2, resetPasswordLinkToken_seed_2, resetToken_seed_2, template_seed_2, websiteId_seed_2, { expectedResponseCodes: [200, 201] });
}});
// --- Hyper-Story Version 3: Global Coordination for magento ---
bthread("hyper:magento:orchestration:3", function () {
  bthread("Persona_Customer_3", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});
  bthread("Persona_Admin_3", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});
  bthread("Persona_Guest_3", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});
  bthread("Persona_Supplier_3", function() {
    let event_Customers = waitFor(matchAnyCustomersAdded());
    let sharedId = event_Customers.data.id || event_Customers.data.sku;
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
    customerAccountManagementV1ValidateResetPasswordLinkTokenGet(sharedId);
  }});

  // Seeding Phase
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_3 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_3 = {};
      let customerId_seed_3 = Math.floor(Math.random() * 1000);
      let email_seed_3 = "email_seed_3_" + Math.floor(Math.random()*1000);
      let newPassword_seed_3 = "newPassword_seed_3_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_3 = "resetPasswordLinkToken_seed_3_" + Math.floor(Math.random()*1000);
      let resetToken_seed_3 = "resetToken_seed_3_" + Math.floor(Math.random()*1000);
      let template_seed_3 = "template_seed_3_" + Math.floor(Math.random()*1000);
      let websiteId_seed_3 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_3, customerAccountManagementV1ResetPasswordPostBody_seed_3, customerId_seed_3, email_seed_3, newPassword_seed_3, resetPasswordLinkToken_seed_3, resetToken_seed_3, template_seed_3, websiteId_seed_3, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_3 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_3 = {};
      let customerId_seed_3 = Math.floor(Math.random() * 1000);
      let email_seed_3 = "email_seed_3_" + Math.floor(Math.random()*1000);
      let newPassword_seed_3 = "newPassword_seed_3_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_3 = "resetPasswordLinkToken_seed_3_" + Math.floor(Math.random()*1000);
      let resetToken_seed_3 = "resetToken_seed_3_" + Math.floor(Math.random()*1000);
      let template_seed_3 = "template_seed_3_" + Math.floor(Math.random()*1000);
      let websiteId_seed_3 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_3, customerAccountManagementV1ResetPasswordPostBody_seed_3, customerId_seed_3, email_seed_3, newPassword_seed_3, resetPasswordLinkToken_seed_3, resetToken_seed_3, template_seed_3, websiteId_seed_3, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_3 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_3 = {};
      let customerId_seed_3 = Math.floor(Math.random() * 1000);
      let email_seed_3 = "email_seed_3_" + Math.floor(Math.random()*1000);
      let newPassword_seed_3 = "newPassword_seed_3_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_3 = "resetPasswordLinkToken_seed_3_" + Math.floor(Math.random()*1000);
      let resetToken_seed_3 = "resetToken_seed_3_" + Math.floor(Math.random()*1000);
      let template_seed_3 = "template_seed_3_" + Math.floor(Math.random()*1000);
      let websiteId_seed_3 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_3, customerAccountManagementV1ResetPasswordPostBody_seed_3, customerId_seed_3, email_seed_3, newPassword_seed_3, resetPasswordLinkToken_seed_3, resetToken_seed_3, template_seed_3, websiteId_seed_3, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_3 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_3 = {};
      let customerId_seed_3 = Math.floor(Math.random() * 1000);
      let email_seed_3 = "email_seed_3_" + Math.floor(Math.random()*1000);
      let newPassword_seed_3 = "newPassword_seed_3_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_3 = "resetPasswordLinkToken_seed_3_" + Math.floor(Math.random()*1000);
      let resetToken_seed_3 = "resetToken_seed_3_" + Math.floor(Math.random()*1000);
      let template_seed_3 = "template_seed_3_" + Math.floor(Math.random()*1000);
      let websiteId_seed_3 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_3, customerAccountManagementV1ResetPasswordPostBody_seed_3, customerId_seed_3, email_seed_3, newPassword_seed_3, resetPasswordLinkToken_seed_3, resetToken_seed_3, template_seed_3, websiteId_seed_3, { expectedResponseCodes: [200, 201] });
      let customerAccountManagementV1InitiatePasswordResetPutBody_seed_3 = {};
      let customerAccountManagementV1ResetPasswordPostBody_seed_3 = {};
      let customerId_seed_3 = Math.floor(Math.random() * 1000);
      let email_seed_3 = "email_seed_3_" + Math.floor(Math.random()*1000);
      let newPassword_seed_3 = "newPassword_seed_3_" + Math.floor(Math.random()*1000);
      let resetPasswordLinkToken_seed_3 = "resetPasswordLinkToken_seed_3_" + Math.floor(Math.random()*1000);
      let resetToken_seed_3 = "resetToken_seed_3_" + Math.floor(Math.random()*1000);
      let template_seed_3 = "template_seed_3_" + Math.floor(Math.random()*1000);
      let websiteId_seed_3 = Math.floor(Math.random() * 1000);
    customerAccountManagementV1ResetPasswordPost(customerAccountManagementV1InitiatePasswordResetPutBody_seed_3, customerAccountManagementV1ResetPasswordPostBody_seed_3, customerId_seed_3, email_seed_3, newPassword_seed_3, resetPasswordLinkToken_seed_3, resetToken_seed_3, template_seed_3, websiteId_seed_3, { expectedResponseCodes: [200, 201] });
}});
// --- Hyper-Negative Story Version 1 ---
bthread("hyper:magento:negative_orchestration:1", function () {
}});
// --- Hyper-Negative Story Version 2 ---
bthread("hyper:magento:negative_orchestration:2", function () {
}});
// --- Hyper-Negative Story Version 3 ---
bthread("hyper:magento:negative_orchestration:3", function () {
}});