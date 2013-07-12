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

app.controller('CreateCtrl', ['$scope', '$location',
  function CreateCtrl($scope, $location) {
    var votesRef = new Firebase('https://voteebase.firebaseio.com/votes')
    $scope.createVote = function() {
      newVote = votesRef.push();
      console.log(newVote);
      console.log(newVote.name());
      $location.path(newVote.name());
    };
  }
]);

app.controller('VoteCtrl', ['$scope', '$routeParams', 'angularFire',
  function CreateCtrl($scope, $routeParams, angularFire) {
    var url = 'https://voteebase.firebaseio.com/votes/' + $routeParams.id;
    var promise = angularFire(url, $scope, 'options', []);
    promise.then(function() {
      // Add a new item by simply modifying the model directly.
      // Or, attach a function to $scope that will let a directive in markup manipulate the model.
      $scope.addOption = function() {
        $scope.options.push({name: $scope.text, score: 0});
      };
      $scope.addScore = function(option) {
        option.score++;
      }
    });
  }
]);
