var expect = require('chai').expect
//var ctrl = require('../../../../controllers/api/posts')
var api = require('../../support/api')
var user = require('../../support/user')
var Post = require('../../../../models/post')

describe('controllers.api.posts', function(){
  beforeEach(function(done){
    Post.remove({}, done)
  })
  describe('GET /api/posts', function(){
    beforeEach(function(done){
      var posts = [
        {body: 'Post 1', username: 'jeansolis'},
        {body: 'Post 2', username: 'jeansolis'},
        {body: 'Post 3', username: 'jeansolis'}
      ]
      Post.create(posts, done)
    })
    //Using Chai for assertions
    it('has 3 posts', function(done){
      api.get('/api/posts')
      .expect(200)
      .expect(function(response){
        expect(response.body).to.have.length(3)
      })
      .end(done)
    })
    /*it('has 3 posts', function(done){
      api.get('/api/posts')
      .expect(200)
      .expect(function(posts){
        if(posts.body.length!=3){
          return "posts count should be 3"
        }
      })
      .end(done)
    })*/
  })
  describe('POST /api/posts', function(){
    var token

    beforeEach(function(done){
      user.create('jeansolisQA', 'passQA', function(err, user){
        token = user.token
        done(err)
      })
    })

    beforeEach(function(done){
      api.post('/api/posts')
      .send({body: 'This is my new post from QA'})
      .set('X-Auth', token)
      .expect(201)
      .end(done)
    })

    it('added 1 new authenticated post', function(done){
      Post.findOne(function(err, post){
        expect(post.body).to.equal('This is my new post from QA')
        done(err)
      })
    })

  })
})

/*describe('controllers.api.posts', function(){
  it('exists', function(){
    expect(ctrl).to.exist
  })
})*/
