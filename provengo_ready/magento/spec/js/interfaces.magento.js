//@provengo summon rest
// === Auto-generated interfaces for magento ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '';
const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function customerAccountManagementV1ResetPasswordPost(customerId, email, newPassword, resetPasswordLinkToken, resetToken, template, websiteId) {
  var url = "/V1/customers/resetPassword";
  var reqDescription = "Reset customer password. " + customerId;
  var body = {
    "email": String(email),
    "newPassword": String(newPassword),
    "resetToken": String(resetToken),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 500], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"customerId": customerId, "email": email, "newPassword": newPassword, "resetPasswordLinkToken": resetPasswordLinkToken, "resetToken": resetToken, "template": template, "websiteId": websiteId}) });
  }
  return res;
}

function customerAccountManagementV1InitiatePasswordResetPut(customerId, email, newPassword, resetPasswordLinkToken, resetToken, template, websiteId) {
  var url = "/V1/customers/password";
  var reqDescription = "Send an email to the customer with a password reset link. " + customerId;
  var body = {
    "email": String(email),
    "template": String(template),
    "websiteId": websiteId,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 500], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"customerId": customerId, "email": email, "newPassword": newPassword, "resetPasswordLinkToken": resetPasswordLinkToken, "resetToken": resetToken, "template": template, "websiteId": websiteId}) });
  }
  return res;
}

function customerAccountManagementV1ValidateResetPasswordLinkTokenGet(customerId, resetPasswordLinkToken) {
  var url = "/V1/customers/" + customerId + "/password/resetLinkToken/" + resetPasswordLinkToken;
  var reqDescription = "Check if password reset token is valid. " + customerId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 500] });
}

function tryToAddExistingCustomers(customerId, email, newPassword, resetPasswordLinkToken, resetToken, template, websiteId) {
  var url = "/V1/customers/resetPassword";
  var reqDescription = "Try Add Existing Customers " + customerId;
  var body = {
    "email": String(email),
    "newPassword": String(newPassword),
    "resetToken": String(resetToken),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyCustomersRejects(customerId, email, newPassword, resetPasswordLinkToken, resetToken, template, websiteId) {
  var url = "/V1/customers/resetPassword";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "email": email,
    "newPassword": newPassword,
    "resetToken": resetToken,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyCustomersExists(customerId) {
  var url = "/V1/customers/" + customerId + "/password/resetLinkToken/{resetPasswordLinkToken}";
  var description = "Verify Customers " + customerId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Customers found");
}

function verifyCustomersDeleted(customerId) {
  var url = "/V1/customers/" + customerId + "/password/resetLinkToken/{resetPasswordLinkToken}";
  var description = "Verify Customers " + customerId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Customers correctly deleted (404)");
}

function verifyCustomersDoesNotExist(customerId) { verifyCustomersDeleted(customerId); }

function matchAnyCustomersAdded() {
  return bp.EventSet("Any Customers Added", function(e) {
      return e.name.startsWith("Done: Positive: Reset customer password.");
  });
}

function directoryCountryInformationAcquirerV1GetCountriesInfoGet() {
  var url = "/V1/directory/countries";
  var reqDescription = "Get all countries and regions information for the store. {countryId}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function directoryCountryInformationAcquirerV1GetCountryInfoGet(countryId) {
  var url = "/V1/directory/countries/" + countryId;
  var reqDescription = "Get country and region information for the store. " + countryId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function verifyCountriesExists(countryId) {
  var url = "/V1/directory/countries/" + countryId;
  var description = "Verify Countries " + countryId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Countries found");
}

function verifyCountriesDeleted(countryId) {
  var url = "/V1/directory/countries/" + countryId;
  var description = "Verify Countries " + countryId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Countries correctly deleted (404)");
}

function verifyCountriesDoesNotExist(countryId) { verifyCountriesDeleted(countryId); }

function directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet() {
  var url = "/V1/directory/currency";
  var reqDescription = "Get currency information for the store. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyCurrencyExists(id) {
  let res = directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet(id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Currency found in list");
          else pvg.fail("Currency NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyCurrencyDeleted(id) {
  let res = directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet(id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Currency correctly not found in list");
          else pvg.fail("Currency still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyCurrencyDoesNotExist(id) { verifyCurrencyDeleted(id); }

function searchV1SearchGet() {
  var url = "/V1/search";
  var reqDescription = "Make Full Text Search and return found Documents {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifySearchExists(id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_requestName_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_) {
  let res = searchV1SearchGet(id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_requestName_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Search found in list");
          else pvg.fail("Search NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySearchDeleted(id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_requestName_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_) {
  let res = searchV1SearchGet(id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_requestName_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Search correctly not found in list");
          else pvg.fail("Search still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySearchDoesNotExist(id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_requestName_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_) { verifySearchDeleted(id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_requestName_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_); }

function quoteGuestCartRepositoryV1GetGet(cartId) {
  var url = "/V1/guest-carts/" + cartId;
  var reqDescription = "Enable a guest user to return information for a specified cart. " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function createEmptyCart(cartId) {
  var url = "/V1/guest-carts";
  var reqDescription = "Enable an customer or guest user to create an empty cart and quote for an anonymous customer. " + cartId;
  var body = {
    "id": Math.floor(Math.random() * 10000),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId}) });
  }
  return res;
}

function tryToAddExistingGuestCarts(cartId) {
  var url = "/V1/guest-carts";
  var reqDescription = "Try Add Existing GuestCarts " + cartId;
  var body = {};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyGuestCartsRejects(cartId) {
  var url = "/V1/guest-carts";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyGuestCartsExists(cartId) {
  var url = "/V1/guest-carts/" + cartId;
  var description = "Verify GuestCarts " + cartId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GuestCarts found");
}

function verifyGuestCartsDeleted(cartId) {
  var url = "/V1/guest-carts/" + cartId;
  var description = "Verify GuestCarts " + cartId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GuestCarts correctly deleted (404)");
}

function verifyGuestCartsDoesNotExist(cartId) { verifyGuestCartsDeleted(cartId); }

function matchAnyGuestcartsAdded() {
  return bp.EventSet("Any GuestCarts Added", function(e) {
      return e.name.startsWith("Done: Positive: Enable an customer or guest user to create an empty cart and quote for an anonymous customer.");
  });
}

function estimateShippingMethods(address, cartId, id) {
  var url = "/V1/guest-carts/" + cartId + "/estimate-shipping-methods";
  var reqDescription = "Estimate shipping by address and return list of available shipping methods " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"address": address, "cartId": cartId, "id": id}) });
  }
  return res;
}

function verifyGuestCartsEstimateShippingMethodsRejects(address, cartId, id) {
  var url = "/V1/guest-carts/" + cartId + "/estimate-shipping-methods";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartsestimateshippingmethodsAdded() {
  return bp.EventSet("Any GuestCartsEstimateShippingMethods Added", function(e) {
      return e.name.startsWith("Done: Positive: Estimate shipping by address and return list of available shipping methods");
  });
}

function listCartItems(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/items";
  var reqDescription = "List items that are assigned to a specified cart. " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function addOrUpdateCartItem(cartId, cartItem, quoteGuestCartManagementV1PlaceOrderPutBody) {
  var url = "/V1/guest-carts/" + cartId + "/items";
  var reqDescription = "Add/update the specified cart item. " + cartId;
  var body = {};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "cartItem": cartItem, "quoteGuestCartManagementV1PlaceOrderPutBody": quoteGuestCartManagementV1PlaceOrderPutBody}) });
  }
  return res;
}

function quoteGuestCouponManagementV1RemoveDelete(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/coupons";
  var reqDescription = " " + cartId;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function quoteGuestCartManagementV1PlaceOrderPut(cartId, cartItem, quoteGuestCartManagementV1PlaceOrderPutBody) {
  var url = "/V1/guest-carts/" + cartId + "/order";
  var reqDescription = " " + cartId;
  var body = {
    "quoteGuestCartManagementV1PlaceOrderPutBody": String(quoteGuestCartManagementV1PlaceOrderPutBody),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "cartItem": cartItem, "quoteGuestCartManagementV1PlaceOrderPutBody": quoteGuestCartManagementV1PlaceOrderPutBody}) });
  }
  return res;
}

function verifyGuestCartsItemsRejects(cartId, cartItem, quoteGuestCartManagementV1PlaceOrderPutBody) {
  var url = "/V1/guest-carts/" + cartId + "/items";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartsitemsAdded() {
  return bp.EventSet("Any GuestCartsItems Added", function(e) {
      return e.name.startsWith("Done: Positive: Add/update the specified cart item.");
  });
}

function matchDeletedGuestcartsitems(cartId) {
  return bp.EventSet("Deleted GuestCartsItems " + cartId, function(e) {
      return e.name.startsWith("Done: Positive:") && e.name.includes(cartId);
  });
}

function placeOrder(cartId, paymentMethod) {
  var url = "/V1/guest-carts/" + cartId + "/order";
  var reqDescription = "Place an order for a specified cart. " + cartId;
  var body = {};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "paymentMethod": paymentMethod}) });
  }
  return res;
}

function listShippingMethods(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/shipping-methods";
  var reqDescription = "List applicable shipping methods for a specified quote. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function quoteGuestBillingAddressManagementV1GetGet(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/billing-address";
  var reqDescription = "Return the billing address for a specified quote. " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function quoteGuestBillingAddressManagementV1AssignPost(address, cartId, useForShipping) {
  var url = "/V1/guest-carts/" + cartId + "/billing-address";
  var reqDescription = "Assign a specified billing address to a specified cart. " + cartId;
  var body = {
    "address": address,
    "useForShipping": useForShipping,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"address": address, "cartId": cartId, "useForShipping": useForShipping}) });
  }
  return res;
}

function tryToAddExistingGuestCartsBillingAddress(address, cartId, useForShipping) {
  var url = "/V1/guest-carts/" + cartId + "/billing-address";
  var reqDescription = "Try Add Existing GuestCartsBillingAddress " + cartId;
  var body = {
    "address": address,
    "useForShipping": useForShipping,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyGuestCartsBillingAddressRejects(address, cartId, useForShipping) {
  var url = "/V1/guest-carts/" + cartId + "/billing-address";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "address": address,
    "useForShipping": useForShipping,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyGuestCartsBillingAddressExists(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/billing-address";
  var description = "Verify GuestCartsBillingAddress " + cartId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GuestCartsBillingAddress found");
}

function verifyGuestCartsBillingAddressDeleted(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/billing-address";
  var description = "Verify GuestCartsBillingAddress " + cartId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GuestCartsBillingAddress correctly deleted (404)");
}

function verifyGuestCartsBillingAddressDoesNotExist(cartId) { verifyGuestCartsBillingAddressDeleted(cartId); }

function matchAnyGuestcartsbillingaddressAdded() {
  return bp.EventSet("Any GuestCartsBillingAddress Added", function(e) {
      return e.name.startsWith("Done: Positive: Assign a specified billing address to a specified cart.");
  });
}

function quoteGuestCouponManagementV1RemoveDelete(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/coupons";
  var reqDescription = "Delete a coupon from a specified cart. " + cartId;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function quoteGuestCouponManagementV1GetGet(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/coupons";
  var reqDescription = "Return information for a coupon in a specified cart. " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function verifyGuestCartsCouponsExists(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/coupons";
  var description = "Verify GuestCartsCoupons " + cartId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GuestCartsCoupons found");
}

function verifyGuestCartsCouponsDeleted(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/coupons";
  var description = "Verify GuestCartsCoupons " + cartId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GuestCartsCoupons correctly deleted (404)");
}

function verifyGuestCartsCouponsDoesNotExist(cartId) { verifyGuestCartsCouponsDeleted(cartId); }

function matchDeletedGuestcartscoupons(cartId) {
  return bp.EventSet("Deleted GuestCartsCoupons " + cartId, function(e) {
      return e.name.startsWith("Done: Positive: Delete a coupon from a specified cart.") && e.name.includes(cartId);
  });
}

function quoteGuestPaymentMethodManagementV1GetListGet(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/payment-methods";
  var reqDescription = "List available payment methods for a specified shopping cart. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function quoteGuestPaymentMethodManagementV1GetGet(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/selected-payment-method";
  var reqDescription = "Return the payment method for a specified shopping cart. " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function quoteGuestPaymentMethodManagementV1SetPut(cartId, method) {
  var url = "/V1/guest-carts/" + cartId + "/selected-payment-method";
  var reqDescription = "Add a specified payment method to a specified shopping cart. " + cartId;
  var body = {
    "method": method,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "method": method}) });
  }
  return res;
}

function verifyGuestCartsSelectedPaymentMethodExists(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/selected-payment-method";
  var description = "Verify GuestCartsSelectedPaymentMethod " + cartId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GuestCartsSelectedPaymentMethod found");
}

function verifyGuestCartsSelectedPaymentMethodDeleted(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/selected-payment-method";
  var description = "Verify GuestCartsSelectedPaymentMethod " + cartId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GuestCartsSelectedPaymentMethod correctly deleted (404)");
}

function verifyGuestCartsSelectedPaymentMethodDoesNotExist(cartId) { verifyGuestCartsSelectedPaymentMethodDeleted(cartId); }

function quoteGuestCartTotalManagementV1CollectTotalsPut(additionalData, addressInformation, cartId, paymentMethod, shippingCarrierCode, shippingMethodCode) {
  var url = "/V1/guest-carts/" + cartId + "/collect-totals";
  var reqDescription = "Set shipping/billing methods and additional data for cart and collect totals for guest. " + cartId;
  var body = {};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"additionalData": additionalData, "addressInformation": addressInformation, "cartId": cartId, "paymentMethod": paymentMethod, "shippingCarrierCode": shippingCarrierCode, "shippingMethodCode": shippingMethodCode}) });
  }
  return res;
}

function quoteGuestCartTotalRepositoryV1GetGet(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/totals";
  var reqDescription = "Return quote totals data for a specified cart. " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData, addressInformation, cartId, paymentMethod, shippingCarrierCode, shippingMethodCode) {
  var url = "/V1/guest-carts/" + cartId + "/totals-information";
  var reqDescription = "Calculate quote totals based on address and shipping method. " + cartId;
  var body = {
    "addressInformation": addressInformation,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"additionalData": additionalData, "addressInformation": addressInformation, "cartId": cartId, "paymentMethod": paymentMethod, "shippingCarrierCode": shippingCarrierCode, "shippingMethodCode": shippingMethodCode}) });
  }
  return res;
}

function tryToAddExistingGuestCartTotals(additionalData, addressInformation, cartId, paymentMethod, shippingCarrierCode, shippingMethodCode) {
  var url = "/V1/guest-carts/" + cartId + "/totals-information";
  var reqDescription = "Try Add Existing GuestCartTotals " + cartId;
  var body = {
    "addressInformation": addressInformation,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyGuestCartTotalsRejects(additionalData, addressInformation, cartId, paymentMethod, shippingCarrierCode, shippingMethodCode) {
  var url = "/V1/guest-carts/" + cartId + "/totals-information";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "addressInformation": addressInformation,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyGuestCartTotalsExists(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/totals";
  var description = "Verify GuestCartTotals " + cartId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GuestCartTotals found");
}

function verifyGuestCartTotalsDeleted(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/totals";
  var description = "Verify GuestCartTotals " + cartId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GuestCartTotals correctly deleted (404)");
}

function verifyGuestCartTotalsDoesNotExist(cartId) { verifyGuestCartTotalsDeleted(cartId); }

function matchAnyGuestcarttotalsAdded() {
  return bp.EventSet("Any GuestCartTotals Added", function(e) {
      return e.name.startsWith("Done: Positive: Calculate quote totals based on address and shipping method.");
  });
}

function quoteGuestCartManagementV1PlaceOrderPut(cartId, quoteGuestCartManagementV1PlaceOrderPutBody) {
  var url = "/V1/guest-carts/" + cartId + "/order";
  var reqDescription = " " + cartId;
  var body = {
    "quoteGuestCartManagementV1PlaceOrderPutBody": String(quoteGuestCartManagementV1PlaceOrderPutBody),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "quoteGuestCartManagementV1PlaceOrderPutBody": quoteGuestCartManagementV1PlaceOrderPutBody}) });
  }
  return res;
}

function integrationAdminTokenServiceV1CreateAdminAccessTokenPost(id, password, username) {
  var url = "/V1/integration/admin/token";
  var reqDescription = "Create access token for admin given the admin credentials. " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409, 500], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "password": password, "username": username}) });
  }
  return res;
}

function verifyAdminTokenRejects(id, password, username) {
  var url = "/V1/integration/admin/token";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyAdmintokenAdded() {
  return bp.EventSet("Any AdminToken Added", function(e) {
      return e.name.startsWith("Done: Positive: Create access token for admin given the admin credentials.");
  });
}

function catalogProductRenderListV1GetListGet() {
  var url = "/V1/products-render-info";
  var reqDescription = "Collect and retrieve the list of product render info. This info contains raw prices and formatted prices, product name, stock status, store_id, etc.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyProductRenderInfoExists(currencyCode, id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_, storeId) {
  let res = catalogProductRenderListV1GetListGet(currencyCode, id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_, storeId);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("ProductRenderInfo found in list");
          else pvg.fail("ProductRenderInfo NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyProductRenderInfoDeleted(currencyCode, id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_, storeId) {
  let res = catalogProductRenderListV1GetListGet(currencyCode, id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_, storeId);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("ProductRenderInfo correctly not found in list");
          else pvg.fail("ProductRenderInfo still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyProductRenderInfoDoesNotExist(currencyCode, id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_, storeId) { verifyProductRenderInfoDeleted(currencyCode, id, searchCriteria_currentPage_, searchCriteria_filterGroups__0__filters__0__conditionType_, searchCriteria_filterGroups__0__filters__0__field_, searchCriteria_filterGroups__0__filters__0__value_, searchCriteria_pageSize_, searchCriteria_sortOrders__0__direction_, searchCriteria_sortOrders__0__field_, storeId); }

function checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/payment-information";
  var reqDescription = "Get payment information " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation, cartId) {
  var url = "/V1/guest-carts/" + cartId + "/shipping-information";
  var reqDescription = " " + cartId;
  var body = {
    "addressInformation": addressInformation,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"addressInformation": addressInformation, "cartId": cartId}) });
  }
  return res;
}

function tryToAddExistingGuestCartsPaymentInformation(addressInformation, cartId) {
  var url = "/V1/guest-carts/" + cartId + "/shipping-information";
  var reqDescription = "Try Add Existing GuestCartsPaymentInformation " + cartId;
  var body = {
    "addressInformation": addressInformation,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyGuestCartsPaymentInformationRejects(addressInformation, cartId) {
  var url = "/V1/guest-carts/" + cartId + "/shipping-information";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "addressInformation": addressInformation,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyGuestCartsPaymentInformationExists(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/payment-information";
  var description = "Verify GuestCartsPaymentInformation " + cartId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GuestCartsPaymentInformation found");
}

function verifyGuestCartsPaymentInformationDeleted(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/payment-information";
  var description = "Verify GuestCartsPaymentInformation " + cartId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GuestCartsPaymentInformation correctly deleted (404)");
}

function verifyGuestCartsPaymentInformationDoesNotExist(cartId) { verifyGuestCartsPaymentInformationDeleted(cartId); }

function matchAnyGuestcartspaymentinformationAdded() {
  return bp.EventSet("Any GuestCartsPaymentInformation Added", function(e) {
      return e.name.startsWith("Done: Positive: ");
  });
}

function checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(billingAddress, cartId, email, id, paymentMethod) {
  var url = "/V1/guest-carts/" + cartId + "/set-payment-information";
  var reqDescription = "Set payment information for a specified cart. " + id;
  var body = {
    "id": id,
    "billingAddress": billingAddress,
    "email": String(email),
    "paymentMethod": paymentMethod,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"billingAddress": billingAddress, "cartId": cartId, "email": email, "id": id, "paymentMethod": paymentMethod}) });
  }
  return res;
}

function verifyGuestCartsSetPaymentInformationRejects(billingAddress, cartId, email, id, paymentMethod) {
  var url = "/V1/guest-carts/" + cartId + "/set-payment-information";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "billingAddress": billingAddress,
    "email": email,
    "id": id,
    "paymentMethod": paymentMethod,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartssetpaymentinformationAdded() {
  return bp.EventSet("Any GuestCartsSetPaymentInformation Added", function(e) {
      return e.name.startsWith("Done: Positive: Set payment information for a specified cart.");
  });
}

function checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation, cartId, id) {
  var url = "/V1/guest-carts/" + cartId + "/shipping-information";
  var reqDescription = " " + id;
  var body = {
    "id": id,
    "addressInformation": addressInformation,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"addressInformation": addressInformation, "cartId": cartId, "id": id}) });
  }
  return res;
}

function verifyGuestCartsShippingInformationRejects(addressInformation, cartId, id) {
  var url = "/V1/guest-carts/" + cartId + "/shipping-information";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "addressInformation": addressInformation,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartsshippinginformationAdded() {
  return bp.EventSet("Any GuestCartsShippingInformation Added", function(e) {
      return e.name.startsWith("Done: Positive: ");
  });
}

function checkoutGuestTotalsInformationManagementV1CalculatePost(addressInformation, cartId, id) {
  var url = "/V1/guest-carts/" + cartId + "/totals-information";
  var reqDescription = "Calculate quote totals based on address and shipping method. " + id;
  var body = {
    "id": id,
    "addressInformation": addressInformation,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"addressInformation": addressInformation, "cartId": cartId, "id": id}) });
  }
  return res;
}

function verifyGuestCartsTotalsInformationRejects(addressInformation, cartId, id) {
  var url = "/V1/guest-carts/" + cartId + "/totals-information";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "addressInformation": addressInformation,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartstotalsinformationAdded() {
  return bp.EventSet("Any GuestCartsTotalsInformation Added", function(e) {
      return e.name.startsWith("Done: Positive: Calculate quote totals based on address and shipping method.");
  });
}

function integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(id, password, username) {
  var url = "/V1/integration/customer/token";
  var reqDescription = "Create access token for admin given the customer credentials. " + id;
  var body = {
    "id": id,
    "password": String(password),
    "username": String(username),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "password": password, "username": username}) });
  }
  return res;
}

function verifyCustomerTokenRejects(id, password, username) {
  var url = "/V1/integration/customer/token";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
    "password": password,
    "username": username,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyCustomertokenAdded() {
  return bp.EventSet("Any CustomerToken Added", function(e) {
      return e.name.startsWith("Done: Positive: Create access token for admin given the customer credentials.");
  });
}

function amazonPaymentAddressManagementV1GetBillingAddressPut(addressConsentToken, amazonOrderReferenceId) {
  var url = "/V1/amazon-billing-address/" + amazonOrderReferenceId;
  var reqDescription = " " + amazonOrderReferenceId;
  var body = {
    "addressConsentToken": String(addressConsentToken),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"addressConsentToken": addressConsentToken, "amazonOrderReferenceId": amazonOrderReferenceId}) });
  }
  return res;
}

function amazonPaymentAddressManagementV1GetShippingAddressPut(addressConsentToken, amazonOrderReferenceId) {
  var url = "/V1/amazon-shipping-address/" + amazonOrderReferenceId;
  var reqDescription = " " + amazonOrderReferenceId;
  var body = {
    "addressConsentToken": String(addressConsentToken),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"addressConsentToken": addressConsentToken, "amazonOrderReferenceId": amazonOrderReferenceId}) });
  }
  return res;
}

function amazonPaymentOrderInformationManagementV1RemoveOrderReferenceDelete() {
  var url = "/V1/amazon/order-ref";
  var reqDescription = " {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [204] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function matchDeletedAmazonorderreference(id) {
  return bp.EventSet("Deleted AmazonOrderReference " + id, function(e) {
      return e.name.startsWith("Done: Positive:") && e.name.includes(id);
  });
}

function giftMessageGuestCartRepositoryV1GetGet(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/gift-message";
  var reqDescription = "Return the gift message for a specified order. " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function giftMessageGuestCartRepositoryV1SavePost(cartId, giftMessage) {
  var url = "/V1/guest-carts/" + cartId + "/gift-message";
  var reqDescription = "Set the gift message for an entire order. " + cartId;
  var body = {
    "giftMessage": giftMessage,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "giftMessage": giftMessage}) });
  }
  return res;
}

function tryToAddExistingGuestCartGiftMessage(cartId, giftMessage) {
  var url = "/V1/guest-carts/" + cartId + "/gift-message";
  var reqDescription = "Try Add Existing GuestCartGiftMessage " + cartId;
  var body = {
    "giftMessage": giftMessage,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyGuestCartGiftMessageRejects(cartId, giftMessage) {
  var url = "/V1/guest-carts/" + cartId + "/gift-message";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "giftMessage": giftMessage,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyGuestCartGiftMessageExists(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/gift-message";
  var description = "Verify GuestCartGiftMessage " + cartId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GuestCartGiftMessage found");
}

function verifyGuestCartGiftMessageDeleted(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/gift-message";
  var description = "Verify GuestCartGiftMessage " + cartId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GuestCartGiftMessage correctly deleted (404)");
}

function verifyGuestCartGiftMessageDoesNotExist(cartId) { verifyGuestCartGiftMessageDeleted(cartId); }

function matchAnyGuestcartgiftmessageAdded() {
  return bp.EventSet("Any GuestCartGiftMessage Added", function(e) {
      return e.name.startsWith("Done: Positive: Set the gift message for an entire order.");
  });
}

function quoteGuestCartRepositoryV1GetGet(cartId) {
  var url = "/V1/guest-carts/" + cartId;
  var reqDescription = " " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400] });
}

function giftMessageGuestItemRepositoryV1SavePost(cartId, giftMessage, itemId) {
  var url = "/V1/guest-carts/" + cartId + "/gift-message/" + itemId;
  var reqDescription = "Set the gift message for a specified item in a specified shopping cart. " + cartId;
  var body = {
    "giftMessage": giftMessage,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "giftMessage": giftMessage, "itemId": itemId}) });
  }
  return res;
}

function tryToAddExistingGuestItemGiftMessage(cartId, giftMessage, itemId) {
  var url = "/V1/guest-carts/" + cartId + "/gift-message/" + itemId;
  var reqDescription = "Try Add Existing GuestItemGiftMessage " + cartId;
  var body = {
    "giftMessage": giftMessage,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyGuestItemGiftMessageRejects(cartId, giftMessage, itemId) {
  var url = "/V1/guest-carts/" + cartId + "/gift-message/" + itemId;
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "giftMessage": giftMessage,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyGuestItemGiftMessageExists(cartId) {
  var url = "/V1/guest-carts/" + cartId;
  var description = "Verify GuestItemGiftMessage " + cartId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GuestItemGiftMessage found");
}

function verifyGuestItemGiftMessageDeleted(cartId) {
  var url = "/V1/guest-carts/" + cartId;
  var description = "Verify GuestItemGiftMessage " + cartId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GuestItemGiftMessage correctly deleted (404)");
}

function verifyGuestItemGiftMessageDoesNotExist(cartId) { verifyGuestItemGiftMessageDeleted(cartId); }

function matchAnyGuestitemgiftmessageAdded() {
  return bp.EventSet("Any GuestItemGiftMessage Added", function(e) {
      return e.name.startsWith("Done: Positive: Set the gift message for a specified item in a specified shopping cart.");
  });
}

function temandoShippingCheckoutGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId, collectionPointId, countryId, postcode) {
  var url = "/V1/guest-carts/" + cartId + "/checkout-collection-point/select";
  var reqDescription = "Select a given collection point for checkout. " + cartId;
  var body = {
    "collectionPointId": String(collectionPointId),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 500], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "collectionPointId": collectionPointId, "countryId": countryId, "postcode": postcode}) });
  }
  return res;
}

function temandoShippingCheckoutGuestCartCollectionPointManagementV1DeleteSearchRequestDelete(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/collection-point/search-request";
  var reqDescription = "Delete a customer's search for collection points. " + cartId;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 500] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function temandoShippingCheckoutGuestCartCollectionPointManagementV1SaveSearchRequestPut(cartId, collectionPointId, countryId, postcode) {
  var url = "/V1/guest-carts/" + cartId + "/collection-point/search-request";
  var reqDescription = "Save a customer's search for collection points. " + cartId;
  var body = {
    "countryId": String(countryId),
    "postcode": String(postcode),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 500], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "collectionPointId": collectionPointId, "countryId": countryId, "postcode": postcode}) });
  }
  return res;
}

function temandoShippingCheckoutGuestCartCollectionPointManagementV1GetCollectionPointsGet(cartId) {
  var url = "/V1/guest-carts/" + cartId + "/collection-point/search-result";
  var reqDescription = "Retrieve collection points matching the customer's search parameters. " + cartId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyGuestCartCollectionPointRejects(cartId, collectionPointId, countryId, postcode) {
  var url = "/V1/guest-carts/" + cartId + "/checkout-collection-point/select";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "collectionPointId": collectionPointId,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartcollectionpointAdded() {
  return bp.EventSet("Any GuestCartCollectionPoint Added", function(e) {
      return e.name.startsWith("Done: Positive: Select a given collection point for checkout.");
  });
}

function matchDeletedGuestcartcollectionpoint(cartId) {
  return bp.EventSet("Deleted GuestCartCollectionPoint " + cartId, function(e) {
      return e.name.startsWith("Done: Positive: Delete a customer's search for collection points.") && e.name.includes(cartId);
  });
}

function temandoShippingDeliveryGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId, entityId, id) {
  var url = "/V1/guest-carts/" + cartId + "/collection-point/select";
  var reqDescription = " " + id;
  var body = {
    "id": id,
    "entityId": entityId,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 500], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "entityId": entityId, "id": id}) });
  }
  return res;
}

function verifyGuestCartCollectionPointSelectRejects(cartId, entityId, id) {
  var url = "/V1/guest-carts/" + cartId + "/collection-point/select";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "entityId": entityId,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartcollectionpointselectAdded() {
  return bp.EventSet("Any GuestCartCollectionPointSelect Added", function(e) {
      return e.name.startsWith("Done: Positive: ");
  });
}

function temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost(cartId, id, selectedOption) {
  var url = "/V1/guest-carts/" + cartId + "/delivery-option";
  var reqDescription = "Handle selected delivery option. " + id;
  var body = {
    "id": id,
    "selectedOption": String(selectedOption),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 409, 500], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "id": id, "selectedOption": selectedOption}) });
  }
  return res;
}

function verifyGuestCartDeliveryOptionRejects(cartId, id, selectedOption) {
  var url = "/V1/guest-carts/" + cartId + "/delivery-option";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
    "selectedOption": selectedOption,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartdeliveryoptionAdded() {
  return bp.EventSet("Any GuestCartDeliveryOption Added", function(e) {
      return e.name.startsWith("Done: Positive: Handle selected delivery option.");
  });
}

function saveCheckoutFields(cartId, id, serviceSelection) {
  var url = "/V1/guest-carts/" + cartId + "/checkout-fields";
  var reqDescription = " " + id;
  var body = {
    "id": id,
    "serviceSelection": serviceSelection,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "id": id, "serviceSelection": serviceSelection}) });
  }
  return res;
}

function verifyGuestCartCheckoutFieldsRejects(cartId, id, serviceSelection) {
  var url = "/V1/guest-carts/" + cartId + "/checkout-fields";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
    "serviceSelection": serviceSelection,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartcheckoutfieldsAdded() {
  return bp.EventSet("Any GuestCartCheckoutFields Added", function(e) {
      return e.name.startsWith("Done: Positive: ");
  });
}

function selectPickupLocationForCheckout(cartId, id, pickupLocationId) {
  var url = "/V1/guest-carts/" + cartId + "/checkout-pickup-location/select";
  var reqDescription = "Select a given pickup location for checkout. " + id;
  var body = {
    "id": id,
    "pickupLocationId": String(pickupLocationId),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 500], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "id": id, "pickupLocationId": pickupLocationId}) });
  }
  return res;
}

function verifyGuestCartPickupLocationRejects(cartId, id, pickupLocationId) {
  var url = "/V1/guest-carts/" + cartId + "/checkout-pickup-location/select";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
    "pickupLocationId": pickupLocationId,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartpickuplocationAdded() {
  return bp.EventSet("Any GuestCartPickupLocation Added", function(e) {
      return e.name.startsWith("Done: Positive: Select a given pickup location for checkout.");
  });
}

function selectPickupLocation(cartId, entityId, id) {
  var url = "/V1/guest-carts/" + cartId + "/pickup-location/select";
  var reqDescription = " " + id;
  var body = {
    "id": id,
    "entityId": entityId,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 500], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"cartId": cartId, "entityId": entityId, "id": id}) });
  }
  return res;
}

function verifyGuestCartDeliveryPickupLocationRejects(cartId, entityId, id) {
  var url = "/V1/guest-carts/" + cartId + "/pickup-location/select";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "entityId": entityId,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyGuestcartdeliverypickuplocationAdded() {
  return bp.EventSet("Any GuestCartDeliveryPickupLocation Added", function(e) {
      return e.name.startsWith("Done: Positive: ");
  });
}
