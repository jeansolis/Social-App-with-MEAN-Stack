angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc, $location){
  $scope.login = function(username, password) {
    UserSvc.login(username, password)
    .then(function(user){
      //console.log(user)
      //Use $emit to pass the event up
      $scope.$emit('login', user.data)
      $location.path('/')
    })
  }
})
