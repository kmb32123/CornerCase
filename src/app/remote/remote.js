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
    data:{ pageTitle: 'Remote',

    qoutes: [ {
                qoute:"If life had a remote control, I would: PAUSE the beautiful moments; REWIND my mistakes. FASTFORWARD through the heartbreak; STOP the drama; PLAY the rest.", 
                author:"Unknown"
            }, {
                qoute:"Life does not have a remote control; you need to get up and change it yourself.", 
                author:"Damien L. Malcolm"
            }, {
                qoute:"He who controls the remote, controls the world", 
                author:"Julie Garwood"
            }]}
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
