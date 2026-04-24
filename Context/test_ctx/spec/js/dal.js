
ctx.registerEffect("createBook", function(data) {
	ctx.insertEntity(ctx.Entity(data.id, 'book', {title:data.title || data.name}))
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

ctx.registerEffect("createLoan", function(data) {
	ctx.insertEntity(ctx.Entity(data.userId + ":" + data.bookId, 'loan', {userid:data.userId, bookid:data.bookId}))
})

ctx.registerEffect("deleteLoan", function(data) {
	ctx.removeEntity(data.userId + ":" + data.bookId)
})


ctx.registerQuery('Book.All', function(e) {
	return e.type==='book'
})


ctx.registerQuery('User.All', function(e) {
	return e.type==='user'
})

ctx.registerQuery('Loan.All', function(e) {
	return e.type==='loan'
})

ctx.registerQuery('User.NoLoan', function(e) {
	return e.type === 'user' && !ctx.runQuery('Loan.All').some(l => l.userid === e.id)
})

ctx.registerQuery('User.HasLoan', function(e) {
	return e.type === 'user' && ctx.runQuery('Loan.All').some(l => l.userid === e.id)
})

ctx.registerQuery('Book.NotLoaned', function(e) {
	return e.type === 'book' && !ctx.runQuery('Loan.All').some(l => l.bookid === e.id)
})

ctx.registerQuery('Book.IsLoaned', function(e) {
	return e.type === 'book' && ctx.runQuery('Loan.All').some(l => l.bookid === e.id)
})

ctx.registerQuery('UserBook.BookIsNotLoaned', function(e) {
	return e.type === 'user-book' && !ctx.runQuery('Loan.All').some(l => l.bookid === e.bookid)
})
