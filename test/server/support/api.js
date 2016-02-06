//This code creates a new express app using your new base router and then
//returns it wrapped in SuperTest
var express = require('express')
var request = require('supertest')
var router = require('../../../controllers')

var app = express()
app.use(router)

module.exports = request(app)
