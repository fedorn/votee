var app = angular.module("votee", ['firebase'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      templateUrl: 'create.html',
      controller: 'CreateCtrl'
    })
    .when('/:id',
    {
      templateUrl: 'vote.html',
      controller: 'VoteCtrl'
    })
})

app.controller('CreateCtrl', ['$scope', 'angularFire',
  function CreateCtrl($scope, angularFire) {

  }
]);

app.controller('VoteCtrl', ['$scope', '$routeParams', 'angularFire',
  function CreateCtrl($scope, $routeParams, angularFire) {
    $scope.id = $routeParams.id
  }
]);
