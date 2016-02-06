//Create the PostCtrl module
//Dependecy inject $scope
angular.module('app').controller('PostsCtrl', function($scope, PostsSvc){
  //To make it compatible with posts.ctrl.spec.js
  /*PostsSvc.fetch()
  .success(function (posts){
    $scope.posts = posts
  })*/
  PostsSvc.fetch()
  .then(function(posts){
    $scope.posts = posts
  })
  /*$scope.addPost = function(){
    if($scope.postBody){
      PostsSvc.create({
        //username: '@jeansolis',
        body: $scope.postBody
      //}).success(function(post){ Commented to pass JSHint
      }).success(function(){
          //$scope.posts.unshift(post)
          $scope.postBody = null
      })
    }
  }*/

  $scope.addPost = function(){
    if($scope.postBody){
      PostsSvc.create({
        //username: '@jeansolis',
        body: $scope.postBody
      //}).success(function(post){ Commented to pass JSHint
      }).then(function(){
          //$scope.posts.unshift(post)
          $scope.postBody = null
      })
    }
  }

  $scope.$on('ws:new_post', function(_, post){
    //$scope.$apply to refresh the UI (Possible angular bug)
    $scope.$apply(function(){
      $scope.posts.unshift(post)
    })
  })
});
