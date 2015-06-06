'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
  $locationProvider.html5Mode(true);
}])

.controller('View1Ctrl', [function() {

}]);
