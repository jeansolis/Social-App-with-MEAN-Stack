angular.module('app')
.service('UserSvc',function($http){

  var svc = this

  svc.getUser = function(){
    return $http.get('/api/users', {
      headers: {'x-auth': this.token}
    })
    /*return $http.get('/api/users', {
      headers: {'X-Auth': this.token}
    })*/
  }
  /*svc.getUser = function () {
    return $http.get('/api/users')
    .then(function (response) {
      return response.data
    })
  }*/

  svc.login = function(username, password){
    return $http.post('/api/sessions', {
      username: username, password: password
    }).then(function(val){
      //console.log(val);
      svc.token = val.data
      $http.defaults.headers.common['x-auth'] = val.data
      //console.log(svc.getUser())
      return svc.getUser()
    })
  }

  svc.register = function(username, password){
    return $http.post('/api/users', {
      username: username, password: password
    }).then(function(){
        return svc.login(username, password)
    })
  }

  svc.logout = function(){
    //return $http.post('api/sessions/logout')
    svc.token = undefined
    $http.defaults.headers.common['X-Auth'] = svc.token
    return true
  }

})
