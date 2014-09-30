angular.module( 'ngBoilerplate.movies', [
  'ui.router',
  'placeholders',
  'ui.select',
  'ui.unique',
  'ui.bootstrap',
  'ngSanitize'
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

.factory('movieRetrievalService', function ($http, $q) {

    function Request () {
        this.request = {};
        this.request.jsonrpc = "2.0";
        this.request.method = "VideoLibrary.GetMovies";
        this.request.params = {};
        this.request.params.limits = {};
        this.request.params.limits.start = 0;
        this.request.params.limits.end = 200;
        this.request.params.properties = ["title","genre","year","mpaa","rating"];
        this.request.id = "libMovies";
        
        this.encode = function() {
            return encodeURIComponent(JSON.stringify(this.request));
        };
    }

    var deffered = $q.defer();
    var data = [];
    var movieRetrievalService = {};

    var request = new Request();
    var url = 'http://localhost/jsonrpc?request=' + request.encode();
    
    console.log(request);
    movieRetrievalService.async = function () {
        $http.get(url)
            .success(function (d) {
                data = d;
                console.log(d);
                deffered.resolve();
            });
        return deffered.promise;
    };
    movieRetrievalService.data = function () {
        return data;
    };

    return movieRetrievalService;
})

.controller( 'MoviesCtrl', function MoviesCtrl( movieRetrievalService, $scope, $filter ) {
    $scope.isCollapsed = true;

    $scope.columns = [{
        property: function (i) {
            return i.label;
        },
        name: "label",
        header: "Title"
    }, {
        property: function (i) {
            return i.year;
        },
        name: "year",
        header: "Year"
    }, {
        property: function (i) {
            return i.mpaa;
        },
        name: "mpaa",
        header: "MPAA Rating"
    }, {
        property:  function (i) {
            return $filter('number')(i.rating, 1);
        },
        name: "rating",
        header: "Rating"
    }];

    $scope.setSorting = function (columnName) {
        var sort = $scope.sort;
        if (sort.columnName == columnName) {
            sort.descending = !sort.descending;
            if ($scope.sort.descending) {
                sort.sortTerm = "-" + $scope.sort.columnName;
            } else {
                sort.sortTerm = columnName;
            }
        } else {
            sort.sortTerm = sort.columnName = columnName;
            sort.descending = false;
        }
    };

    $scope.clear = function() {
        $scope.genre.selected = undefined;
    };

    $scope.genre = {};
    $scope.genres = [];


    $scope.rating = {};
    $scope.ratings = [];

    $scope.sort = {
        columnName: '',
        descending: false,
        sortTerm: ''
    };

    movieRetrievalService.async().then(function () {
        $scope.data = movieRetrievalService.data();
        
        var genres = [];
        $scope.data.result.movies.forEach(function(entry) {
            genres = genres.concat(entry.genre);
        });
        
        $scope.genres = genres;
        
        var ratings = [];
        $scope.data.result.movies.forEach(function(entry) {
            ratings.push(entry.mpaa);
        });
        
        $scope.ratings = ratings;
    });
})

;
