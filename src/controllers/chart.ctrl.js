app.controller('chartCtrl', function($scope) {
  $scope.labels = [
      'Laravel',
      'NodeJS',
      'C#',
      'Angular',
      'VueJS',
      'React'
    ];
  
    $scope.series = ['Percent of knowledge'];

    $scope.data = [
        [
          90, // Laravel
          75, // NodeJS
          75, // C#
          85,  // Angular
          90,  // VueJS
          75  // React
        ]
    ];
})