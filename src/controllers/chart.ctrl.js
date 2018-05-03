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
          81, // JavaScript
          91, // PHP
          75, // Ruby
          93, // Laravel
          74, // Cake
          75, // Symfony
          75, // Rails
          92, // Angular
          85  // VueJS
        ]
    ];
})