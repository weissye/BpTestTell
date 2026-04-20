const NUMBER_OF_USERS = 3
const NUMBER_OF_BOOKS = 3

ctx.registerEffect("createBook", function(data) {
	ctx.insertEntity(ctx.Entity(data.id, 'book', {name:data.name}))
	let allusers = ctx.runQuery('User.All')
	for (let u of allusers) {
		ctx.insertEntity(ctx.Entity(u.id + ":" + data.id, 'user-book', {bookid:data.id, userid:u.id}))
	}
})

ctx.registerEffect("createUser", function(data) {
	ctx.insertEntity(ctx.Entity(data.id, 'user', {name:data.name}))
	let allbooks = ctx.runQuery('Book.All')
	for (let b of allbooks) {
		ctx.insertEntity(ctx.Entity(data.id + ":" + b.id, 'user-book', {bookid:b.id, userid:data.id}))
	}
})


ctx.registerQuery('Book.All', function(e) {
	return e.type==='book'
})


ctx.registerQuery('User.All', function(e) {
	return e.type==='user'
})

ctx.registerQuery('User.NoLoan', function(e) {
	return e.type==='user' && e.loan == null
})

ctx.registerWholeDbQuery('UserBook.BookIsNotLoaned', function(db) {
	return db
		.filter(e => e.type === 'user-book')
		.filter(e => !db[e.bookid].IsLoaned)
})

bthread("create random users", function () {
  // -> Creating Users
  for(let i= 0 ; i<NUMBER_OF_USERS; i++){
	  let id_Users_160 = 160 + Math.floor(Math.random() * 99);
	  let name_Users_160 = "name_Users_160_" + Math.floor(Math.random()*1000);
	  let q_Users_160 = "q_Users_160_" + Math.floor(Math.random()*1000);
	  createUser(id_Users_160, name_Users_160, q_Users_160, { expectedResponseCodes: [200, 201, 204] });
	  sync({ request: verifyUserExists, block: AnyUserChanges })
  }
});

bthread("create random books", function () {
  // -> Creating Users
  for(let i= 0 ; i<NUMBER_OF_BOOKS; i++){
	  //...
	  createBook()
	  sync({ request: verifyBookExists, block: AnyBookChanges })
  }
});

ctx.bthread("deleteUser","User.NoLoan", function(user) {
	deleteUser(user);
})

ctx.bthread("deleteUser","User.HasLoan", function(user) {
	deleteUserThatCannotBeDeleted(user);
})

bthread("verifyUserDeletion", function() {
	let e = waitFor(anyDeleteUser);
	verifyUserDoesNotExists(e.data);
})


ctx.bthread("crud:Holds:linear:2", 'UserBook.BookIsNotLoaned', function (userbook) {
	let user = ctx.getEntity(userbook.userid)
	let book = ctx.getEntity(userbook.bookid)
	try {
		createHold(bookId_Holds_170, id_Holds_170, userId_Holds_170, { expectedResponseCodes: [200, 201, 204] });
	} catch (e) {
		verifyHoldsExists(id_Holds_170);
		deleteHold(id_Holds_170);
		verifyHoldsDoesNotExist(id_Holds_170);
	}
});
