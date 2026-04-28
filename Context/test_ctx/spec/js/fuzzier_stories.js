const FUZZ_EXPECTED_CODES = [400, 401];

const FUZZ_VALUES = [
	{ label: "null", value: null },
	{ label: "boolean_true", value: true },
	{ label: "boolean_false", value: false },
	{ label: "empty_string", value: "" },
	{ label: "alpha_string", value: "abc" },
	{ label: "float", value: 12.34 },
	{ label: "negative_integer", value: -1 },
	{ label: "zero", value: 0 },
	{ label: "array", value: [1, 2, 3] },
	{ label: "object", value: { nested: "value" } }
];

function fuzzId(base) {
	return base + Math.floor(Math.random() * 100000);
}

function fuzzPayload(base, fieldName, value) {
	let payload = {};
	for (let key in base) {
		payload[key] = base[key];
	}
	payload[fieldName] = value;
	return payload;
}

function fuzzPost(url, payload, description) {
	bp.log.info("FUZZ POST " + url + " Body: " + JSON.stringify(payload));
	svc.post(url, {
		body: JSON.stringify(payload),
		expectedResponseCodes: FUZZ_EXPECTED_CODES,
		parameters: { description: description }
	});
	bp.sync({ request: bp.Event("Done: Fuzz Negative: " + description, payload) });
}

function fuzzGet(url, parameters, description) {
	let requestParameters = { description: description };
	for (let key in parameters) {
		requestParameters[key] = parameters[key];
	}

	bp.log.info("FUZZ GET " + url + " Params: " + JSON.stringify(parameters));
	svc.get(url, {
		parameters: requestParameters,
		expectedResponseCodes: FUZZ_EXPECTED_CODES
	});
	bp.sync({ request: bp.Event("Done: Fuzz Negative: " + description, parameters) });
}

function fuzzDelete(url, description) {
	bp.log.info("FUZZ DELETE " + url);
	svc.delete(url, {
		expectedResponseCodes: FUZZ_EXPECTED_CODES,
		parameters: { description: description }
	});
	bp.sync({ request: bp.Event("Done: Fuzz Negative: " + description, {}) });
}

function fuzzPostFieldTypes(entityName, url, validPayload, fieldName) {
	for (let i = 0; i < FUZZ_VALUES.length; i++) {
		let candidate = FUZZ_VALUES[i];
		fuzzPost(url, fuzzPayload(validPayload, fieldName, candidate.value),
			entityName + " field " + fieldName + " rejects " + candidate.label);
	}
}

bthread("fuzz:create user field types", function() {
	let validUser = {
		id: fuzzId(300000),
		name: "fuzz_user"
	};

	fuzzPostFieldTypes("Users", "/users", validUser, "id");
	fuzzPostFieldTypes("Users", "/users", validUser, "name");
	fuzzPost("/users", { name: "missing_id" }, "Users reject missing id");
	fuzzPost("/users", { id: fuzzId(310000) }, "Users reject missing name");
	fuzzPost("/users", {}, "Users reject empty body");
});

bthread("fuzz:create book field types", function() {
	let validBook = {
		id: fuzzId(320000),
		title: "fuzz_book"
	};

	fuzzPostFieldTypes("Books", "/books", validBook, "id");
	fuzzPostFieldTypes("Books", "/books", validBook, "title");
	fuzzPost("/books", { title: "missing_id" }, "Books reject missing id");
	fuzzPost("/books", { id: fuzzId(330000) }, "Books reject missing title");
	fuzzPost("/books", {}, "Books reject empty body");
});

bthread("fuzz:create loan field types", function() {
	let validLoan = {
		userId: fuzzId(340000),
		bookId: fuzzId(350000)
	};

	fuzzPostFieldTypes("Loans", "/loans", validLoan, "userId");
	fuzzPostFieldTypes("Loans", "/loans", validLoan, "bookId");
	fuzzPost("/loans", { bookId: fuzzId(360000) }, "Loans reject missing userId");
	fuzzPost("/loans", { userId: fuzzId(370000) }, "Loans reject missing bookId");
	fuzzPost("/loans", {}, "Loans reject empty body");
});

bthread("fuzz:create hold field types", function() {
	let validHold = {
		id: fuzzId(380000),
		userId: fuzzId(390000),
		bookId: fuzzId(400000)
	};

	fuzzPostFieldTypes("Holds", "/holds", validHold, "id");
	fuzzPostFieldTypes("Holds", "/holds", validHold, "userId");
	fuzzPostFieldTypes("Holds", "/holds", validHold, "bookId");
	fuzzPost("/holds", { userId: fuzzId(410000), bookId: fuzzId(420000) }, "Holds reject missing id");
	fuzzPost("/holds", { id: fuzzId(430000), bookId: fuzzId(440000) }, "Holds reject missing userId");
	fuzzPost("/holds", { id: fuzzId(450000), userId: fuzzId(460000) }, "Holds reject missing bookId");
	fuzzPost("/holds", {}, "Holds reject empty body");
});

bthread("fuzz:list query parameter types", function() {
	for (let i = 0; i < FUZZ_VALUES.length; i++) {
		let candidate = FUZZ_VALUES[i];
		fuzzGet("/loans", { userId: candidate.value, bookId: fuzzId(470000) },
			"Loans list rejects userId query type " + candidate.label);
		fuzzGet("/loans", { userId: fuzzId(480000), bookId: candidate.value },
			"Loans list rejects bookId query type " + candidate.label);
	}
});

bthread("fuzz:delete path parameter types", function() {
	let badPathValues = ["abc", "12.34", "true", "null", "[]", "{}"];

	for (let i = 0; i < badPathValues.length; i++) {
		let value = encodeURIComponent(badPathValues[i]);
		fuzzDelete("/users/" + value, "Users delete rejects path id " + badPathValues[i]);
		fuzzDelete("/books/" + value, "Books delete rejects path id " + badPathValues[i]);
		fuzzDelete("/holds/" + value, "Holds delete rejects path id " + badPathValues[i]);
		fuzzDelete("/loans/" + value + "/" + fuzzId(490000), "Loans delete rejects userId path " + badPathValues[i]);
		fuzzDelete("/loans/" + fuzzId(500000) + "/" + value, "Loans delete rejects bookId path " + badPathValues[i]);
	}
});
