var mongoose = require('mongoose')

var url = process.env.MONGOLAB_URI || "mongodb://localhost/social"

mongoose.connect('', function(){
	console.log('mongodb connected!')
})

module.exports = mongoose
