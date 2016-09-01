var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller('IndexController', ['$scope', function($scope) {
  console.log("working!");

  $scope.Invisibility = " ";
  $scope.Flight = " ";
  $scope.SuperSpeed = " ";
  $scope.Flight = " ";
  $scope.SuperSpeed = " ";
  $scope.HeatVision = " ";
  $scope.SuperStrength = " ";
  $scope.AcceleratedHealing = " ";
  $scope.PowerBlast = " ";
  $scope.AnimalAffinity = " ";



  $scope.superpowers = [$scope.Invisibility, $scope.Flight, $scope.SuperSpeed, $scope.HeatVision, $scope.SuperStrength, $scope.AcceleratedHealing, $scope.PowerBlast, $scope.AnimalAffinity
  ];


}]);
