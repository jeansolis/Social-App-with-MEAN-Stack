//Create de Register controller module
//Dependency inject $scope
angular.module('app')
.controller('RegisterCtrl', function($scope, UserSvc){
  $scope.register = function(username, password){
    UserSvc.register(username, password)
    .then(function(user){
      console.log("New user: " + user)
      //Use $emit to pass the event up
      $scope.$emit('login', user.data)
    })
  }
})
