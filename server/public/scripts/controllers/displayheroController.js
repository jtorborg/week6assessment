var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller('IndexController', ['$scope', function($scope) {
  console.log("working!");

  $scope.a = '  ';
  $scope.b = '';

}]);
