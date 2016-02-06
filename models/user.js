//var mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/auth_demo')
var db = require('../db')

//var user = mongoose.Schema({
var user = db.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true, select: false}
})

//module.exports = mongoose.model('User', user)
module.exports = db.model('User', user)
