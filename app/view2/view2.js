'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
   $locationProvider.html5Mode(true);
}])

.controller('View2Ctrl', [function() {

}]);
