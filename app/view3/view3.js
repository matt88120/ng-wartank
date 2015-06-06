'use strict';

angular.module('myApp.view3', ['ngRoute', 'firebase'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/view3/:roomId', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
  
  
}])

.controller('View3Ctrl', ['$scope','$routeParams', '$firebaseObject', function($scope, $routeParams, $firebaseObject) {
    console.log($routeParams);
    $scope.room = $routeParams.roomId;
    
    // Affiche le contenu de ma chatroom dans une variable du scope
    var chatroom = new Firebase("https://listecourse.firebaseio.com/chat");
    var sync = $firebaseObject(chatroom);
    sync.$bindTo($scope, "data");
    console.log(sync);
}]);
