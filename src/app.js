var app = angular.module('app', ['ui.router', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/pt');
  $stateProvider 
    .state('pt', {
        url: '/pt',
        templateUrl: './templates/page.html',
        controller:'portugeseCtrl'
    })
    .state('en', {
      url: '/en',
      templateUrl: './templates/page.html',
      controller:'englishCtrl'
  })

});