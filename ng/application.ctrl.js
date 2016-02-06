angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc){

  $scope.$on('login', function(_, user){
    console.log('ApplicationCtrl, setting currentUser...')
    $scope.currentUser = user
  })

  $scope.logout = function() {
    /*UserSvc.logout()
    .then(function(user){
      //console.log(user)
      //Use $emit to pass the event up
      console.log('ApplicationCtrl, login out currentUser...')
      $scope.currentUser = null
      $location.path('/')
    })*/
    if (UserSvc.logout()){
      //console.log(user)
      //Use $emit to pass the event up
      console.log('ApplicationCtrl, login out currentUser...')
      $scope.currentUser = null
      //$location.path('/')
    }
  }

})
