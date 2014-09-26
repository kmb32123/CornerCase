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
    data:{ pageTitle: 'Movie Library',

    qoutes: [ {
                qoute:"It's funny how the colors of the real world only seem really real when you watch them on a screen.", 
                author:"Anthony Burgess"
            }, {
                qoute:"Movies are like an expensive form of therapy for me.", 
                author:"Tim Burton"
            }, {
                qoute:"People who LIKE movies have a favorite. People who LOVE movies couldn't possibly choose.", 
                author:"Nicole Yatsonsky"
            }, {
                qoute:"You know what your problem is, it's that you haven't seen enough movies - all of life's riddles are answered in the movies.", 
                author:"Steve Martin"
            }]}
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
