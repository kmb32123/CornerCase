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

.factory('songRetrievalService', function ($http, $q) {
    
    function Request () {
        this.request = {};
        this.request.jsonrpc = "2.0";
        this.request.method = "AudioLibrary.GetSongs";
        this.request.params = {};
        this.request.params.limits = {};
        this.request.params.limits.start = 0;
        this.request.params.limits.end = 200;
        this.request.params.properties = ["artist","duration","album","track"];
        this.request.id = "libSongs";
        
        this.encode = function() {
            return encodeURIComponent(JSON.stringify(this.request));
        };
    }

    var deffered = $q.defer();
    var data = [];
    var songRetrievalService = {};
    
    var request = new Request();
    var url = 'http://localhost/jsonrpc?request=' + request.encode();
    
    console.log(request);
    songRetrievalService.async = function () {
        $http.get(url)
            .success(function (d) {
                data = d;
                console.log(d);
                deffered.resolve();
            });
        return deffered.promise;
    };
    songRetrievalService.data = function () {
        return data;
    };

    return songRetrievalService;
})

.controller( 'MusicCtrl', function MusicCtrl( songRetrievalService, $scope ) {
    $scope.isCollapsed = true;

    $scope.columns = [{
        property: function (i) {
            return i.songid;
        },
        name: "songid",
        header: "ID"
    }, {
        property: function (i) {
            return i.track;
        },
        name: "track",
        header: "Track"
    }, {
        property: function (i) {
            return i.label;
        },
        name: "label",
        header: "Title"
    }, {
        property: function (i) {
            return i.album;
        },
        name: "album",
        header: "Album"
    }, {
        property: function (i) {
            return i.artist.join(",");
        },
        name: "artist",
        header: "Artist"
    }, {
        property: function (i) {
            seconds = i.duration;
            minutes = (i.duration / 60) | 0;
            seconds -= (minutes * 60);
            return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        },
        name: "duration",
        header: "Length"
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

    $scope.sort = {
        columnName: '',
        descending: false,
        sortTerm: ''
    };

    songRetrievalService.async().then(function () {
        $scope.data = songRetrievalService.data();
    });
})

;
