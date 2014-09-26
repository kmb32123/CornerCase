angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.movies',
  'ngBoilerplate.music',
  'ngBoilerplate.tv',
  'ngBoilerplate.remote',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle ;

      var qoute = toState.data.qoutes[Math.floor(Math.random() * toState.data.qoutes.length)];
      $scope.qoute =  qoute.qoute;
      $scope.author = qoute.author;
    }
  });
})

;
