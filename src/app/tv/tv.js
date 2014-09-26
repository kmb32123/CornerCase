angular.module( 'ngBoilerplate.tv', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'tv', {
    url: '/tv',
    views: {
      "main": {
        controller: 'TVCtrl',
        templateUrl: 'tv/tv.tpl.html'
      }
    },
    data:{ pageTitle: 'TV Library',

	qoutes: [ {
                qoute:"I was reading my new book, but my brain got tired, so I decided to watch some television instead.", 
                author:"Stephen Chbosky"
            }, {
                qoute:"If it weren't for Philo T. Farnsworth, inventor of television, we'd still be eating frozen radio dinners.", 
                author:"Johnny Carson"
			}, {
                qoute:"Television has changed the American child from an irresistable force to an immovable object.", 
                author:"Laurence J. Peter"
			}, {
                qoute:"Television is simply automated day-dreaming.", 
                author:"Lee Lovinger"
            }, {
                qoute:"They say that ninety percent of TV is junk.  But, ninety percent of everything is junk.", 
                author:"Gene Roddenberry"
            }, {
                qoute:"TV; It's the next best thing to being alive. ", 
                author:"Philip J. Fry"
            }, {
                qoute:"It's the menace that everyone loves to hate but can't seem to live without.", 
                author:"Paddy Chayevsky"
            }, {
                qoute:"The human race is faced with a cruel choice:  work or daytime television.", 
                author:"Unknown"
            }]}
  });
})

.controller( 'TVCtrl', function TVCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
