'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/view3/:roomId', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
  
  $locationProvider.html5Mode(true);
  
}])

.controller('View3Ctrl', ['$scope','$routeParams', function($scope, $routeParams) {
    console.log($routeParams);
    $scope.room = $routeParams.roomId;
}]);
