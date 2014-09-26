angular.module( 'ngBoilerplate.movies', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'movies', {
    url: '/movies',
    views: {
      "main": {
        controller: 'MoviesCtrl',
        templateUrl: 'movies/movies.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'MoviesCtrl', function MoviesCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
