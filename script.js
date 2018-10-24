var app = angular.module('dispApp', []);

app.controller('dispCtrl', function($scope, $http) {
  $http.get('voiture.json').then(function(data) {
    $scope.voitures = data.data;
  });
});
