describe('posts.svc', function(){
  beforeEach(module('app'))
  var PostsSvc, $httpBackend

  beforeEach(inject(function(_PostsSvc_, _$httpBackend_){
    PostsSvc = _PostsSvc_
    $httpBackend = _$httpBackend_
  }))

  afterEach(function(){
    $httpBackend.flush()
  })

  describe('#fetch', function(){
    /*it('exists', function(){
      expect(PostsSvc.fetch).to.exist
    })*/
    beforeEach(function(){
      $httpBackend.expect('GET', 'api/posts')
      .respond([
        {username:'jeansolis', body:'first post'},
        {username:'jeansolis', body:'second post'}
      ])
    })

    /*it('Gets 2 posts', function(){
      PostsSvc.fetch().success(function (posts){
        expect(posts).to.have.length(2)
      })
    })*/
    it('Gets 2 posts', function(){
      PostsSvc.fetch().then(function (posts){
        expect(posts).to.have.length(2)
      })
    })

  })
})
