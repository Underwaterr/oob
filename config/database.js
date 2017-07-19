let mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/oob', {
	useMongoClient: true
})

var database = mongoose.connection

database.on('error', function() {
	console.log("Database error :(")
})
database.once('open', function() {
	console.log("Database connected :)")
})