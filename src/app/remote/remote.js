angular.module( 'ngBoilerplate.remote', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'remote', {
    url: '/remote',
    views: {
      "main": {
        controller: 'RemoteCtrl',
        templateUrl: 'remote/remote.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'RemoteCtrl', function RemoteCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
