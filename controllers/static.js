//Static controller

var express = require('express')
var router = express.Router()

//__dirname, Node variable that points to the current file's directory.
router.use(express.static(__dirname + '/../assets'))

//Tell Express to serve the templates folder
//router.use(express.static(__dirname + '/../templates'))
router.use('/templates', express.static(__dirname + '/../templates')) //From GitHub

router.get('/', function(req, res){
	res.sendfile('layouts/app.html')
	//res.sendFile(__dirname + '/../layouts/app.html') Forbidden Error?
})

module.exports = router
