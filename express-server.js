var express = require('express')
var jwt = require('jwt-simple')
//var _ = require('lodash')
var app = express()
var bcrypt = require('bcrypt')

var User = require('./models/user')

app.use(require('body-parser').json())

//var users = [{username: 'jeansolis', password: '$2a$10$jfOv3tddeD0o37KjiNdhNuu8993zhLTxwmOKXyrJ4aTRInml4ZBvy'}]
var secretKey = 'supersecretkey'

/*function findUserByUserName(username){
  return _.find(users, {username: username})
}*/

/*function validateUser(user, password, cb){
  return user !== undefined && bcrypt.compare(password, user.password, cb)
}*/

app.post('/user', function(req, res, next){
  var user = new User({username: req.body.username})
  bcrypt.hash(req.body.password, 10, function(err, hash){
    user.password = hash
    //user.save(function(err, user){
    user.save(function(err){
      if(err){throw next(err)} //Server error with database
      res.send(201)
    })
  })
})

app.post('/session', function(req, res, next){
    var username = req.body.username
    User.findOne({username: username})
      .select('password')
      .exec(function(err, user){
        if(err) {return next(err)}
        if(!user){return res.send(401)} //Unathorized
        bcrypt.compare(req.body.password, user.password, function(err, valid){
            if (err){return next(err)}
            if(!valid){return res.send(401)} //Unathorized
            var token = jwt.encode({username: username}, secretKey)
            res.json(token)
        })
    })
})

app.get('/user', function(req, res){
  var token = req.headers['x-auth']
  var user = jwt.decode(token, secretKey)
  User.findOne({username: user.username}, function(err, user){
    res.json(user)
  })
})

app.listen(3001)
