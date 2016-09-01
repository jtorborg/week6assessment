var myApp = angular.module("myApp", ["ngRoute"]);


myApp.controller('heroController', ['$scope', '$http', function($scope, $http) {

  var hero = {};

    $http.get('/partials/power_list').then(function(response) {
        $scope.powers = response.data;
    });

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



    $scope.deleteHero = function() {


        $http.post('/hero', hero).then(function(response) {
        });
    }

}]);
