const NUMBER_OF_USERS = 3
const NUMBER_OF_BOOKS = 3


bthread("create random users", function () {
  // -> Creating Users
  for(let i= 0 ; i<NUMBER_OF_USERS; i++){
	  let id_Users_160 = 160 + Math.floor(Math.random() * 99);
	  let name_Users_160 = "name_Users_160_" + Math.floor(Math.random()*1000);
	  let q_Users_160 = "q_Users_160_" + Math.floor(Math.random()*1000);
	  createUser(id_Users_160, name_Users_160, q_Users_160, { expectedResponseCodes: [201] });
	  verifyUsersExists(id_Users_160, name_Users_160, q_Users_160);
  }
});

bthread("create random books", function () {
  // -> Creating Books
  for(let i= 0 ; i<NUMBER_OF_BOOKS; i++){
	  let id_Books_160 = 160 + Math.floor(Math.random() * 99);
	  let title_Books_160 = "title_Books_160_" + Math.floor(Math.random()*1000);
	  let q_Books_160 = "q_Books_160_" + Math.floor(Math.random()*1000);
	  createBook(id_Books_160, q_Books_160, title_Books_160, { expectedResponseCodes: [201] });
	  verifyBooksExists(id_Books_160);
  }
});

ctx.bthread("deleteUser","User.NoLoan", function(user) {
	deleteUser(user.id);
})

ctx.bthread("deleteUser","User.HasLoan", function(user) {
	deleteUser(user.id, { expectedResponseCodes: [400] });
})

bthread("verifyUserCreation", function() {
	let e = waitFor(matchAnyUsersAdded());
	block(matchDeletedUsers(e.data.id), function() {
		verifyUsersExists(e.data.id);
	});
});


bthread("verifyUserDeletion", function() {
	let e = waitFor(matchAnyUsersDeleted());
	block(matchAnyUsersAdded(), function() {
		verifyUsersDoesNotExist(e.data.id);
	});
});


ctx.bthread("crud:Holds:linear:2", 'UserBook.BookIsNotLoaned', function (userbook) {
	let user = ctx.getEntity(userbook.userid)
	let book = ctx.getEntity(userbook.bookid)
	let id_Holds_170 = 170 + Math.floor(Math.random() * 99);
	try {
		createHold(book.id, id_Holds_170, user.id, { expectedResponseCodes: [201] });
	} catch (e) {
		verifyHoldsExists(book.id, id_Holds_170, user.id);
		deleteHold(id_Holds_170);
		verifyHoldsDoesNotExist(book.id, id_Holds_170, user.id);
	}
});
