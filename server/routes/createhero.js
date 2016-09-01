var express = require('express');
var router = express.Router();
var path = require('path');

var myApp = angular.module("myApp", ["ngRoute"]);


myApp.controller('heroController', ['$scope', '$http', function($scope, $http) {

$scope.addHero = function() {

    var hero = {
        alias: $scope.alias,
        first_name: $scope.first_name,
        last_name: $scope.last_name,
        city: $scope.city,
        power_name: $scope.power_name
    };
    $http.post('/hero', hero).then(function(response) {
    });
}

}]);


module.exports = router;
