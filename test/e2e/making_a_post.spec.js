//var db = require("../../db") //Commented to pass JSHint
var chai = require('chai')
chai.use(require('chai-as-promised'))
var expect = chai.expect

describe('making a post', function(){
  it('logs in and creates a new post', function(){
    //Go to homepage
    browser.get('http://localhost:3001')
    //Click 'Login'
    element(by.css('nav .login')).click()
    //browser.pause()
    //Fill out and submit login form
    element(by.model('username')).sendKeys('jeansolis')
    element(by.model('password')).sendKeys('06js20IN')
    element(by.css('form .btn')).click()

    //Submit a new post on the post page
    var post = 'Test post from Protractor (' + Math.random() + ')'
    element(by.model('postBody')).sendKeys(post)
    element(by.css('form .btn')).click()

    //browser.pause()
    //The user should now see their post as the first post on the page

    //Protractor Expectations

    //Using chai
    /*element.all(by.css('ul.list-group li')).first().getText().then(function(text){
      //Uses a then function because the Protractor actions execute asynchronously with promises.
      console.log(text)
      expect(text).to.contain(post)
    })*/

    //Using chai-as-promised
    expect(element.all(by.css('ul.list-group li')).first().getText()).
    to.eventually.contain(post)

  })
  /*afterEach(function(){
    db.connection.db.dropDatabase()
  })*/
})
