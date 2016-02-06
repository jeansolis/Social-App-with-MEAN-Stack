var express = require('express')
//var bodyParser = require('body-parser')

var logger = require('morgan') //From chapter 10.

var app = express()
//app.use(bodyParser.json())

app.use(logger('dev')) //From chapter 10.

//app.use(require('./auth'))
app.use(require('./controllers'))

//Mounting controllers
//app.use('/api/posts', require('./controllers/api/posts'))
//app.use('/api/sessions', require('./controllers/api/sessions'))
//app.use('/api/users', require('./controllers/api/users'))
//app.use(require('./controllers/static'))

var port = process.env.PORT || 3000

var server = app.listen(port, function() {
	console.log('Server', process.pid, 'listening on', port)
})

//server object comes from the Node core http.Server
require('./websockets').connect(server)
