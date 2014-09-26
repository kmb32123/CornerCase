angular.module( 'ngBoilerplate.music', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'music', {
    url: '/music',
    views: {
      "main": {
        controller: 'MusicCtrl',
        templateUrl: 'music/music.tpl.html'
      }
    },
    data: {
        pageTitle: 'Music Library',
        qoutes: [ {
                    qoute:"Music is a higher revelation than all wisdom and philosophy.", 
                    author:"Ludwig van Beethoven"
                }, {
                    qoute:"One good thing about music; when it hits you, you feel no pain.", 
                    author:"Bob Marley"
                }, {
                    qoute:"Without music, life would be a mistake.", 
                    author:"Friedrich Nietzsche"
                }, {
                    qoute:"Some people have lives; some people have music.", 
                    author:"John Green"
                }, {
                    qoute:"Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.", 
                    author:"Plato"
                }, {
                    qoute:"The only truth is music.", 
                    author:"Jack Kerouac"
                }, {
                    qoute:"Music expresses that which cannot be put into words and that which cannot remain silent", 
                    author:"Victor Hugo"
                }]
    }
  });
})

.controller( 'MusicCtrl', function MusicCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
