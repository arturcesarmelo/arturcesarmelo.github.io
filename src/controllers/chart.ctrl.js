app.controller('chartCtrl', function($scope) {
  $scope.labels = [
      'JavaScript',
      'PHP',
      'Laravel',
      'Cake',
      'Symfony',
      'Java',
      'Angular',
      'VueJS'
    ];
  
    $scope.series = ['Series A'];

    $scope.data = [
        [
          80,
          90,
          85,
          70,
          75,
          55,
          80,
          80
        ]
    ];
})