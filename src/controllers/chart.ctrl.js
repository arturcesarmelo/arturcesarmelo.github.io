app.controller('chartCtrl', function($scope) {
  $scope.labels = [
      'JavaScript',
      'PHP',
      'Ruby',
      'Laravel',
      'Cake',
      'Symfony',
      'Rails',
      'Angular',
      'VueJS'
    ];
  
    $scope.series = ['Percent of knowledge'];

    $scope.data = [
        [
          87.5, // JavaScript
          90, // PHP
          75, // Ruby
          90, // Laravel
          74, // Cake
          75.5, // Symfony
          75, // Rails
          87.5, // Angular
          87.5  // VueJS
        ]
    ];
})