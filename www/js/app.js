/**
 * Created by simba on 24/03/15.
 */

var app = angular.module('Myapp', [
    'ngRoute',
    'channelController'
]);

app.factory('FeedService', ['$http', function ($http) {
    return {
        tvFeed: function () {
            return $http.get('js/data/tv.json')
        }
    }
}]);

app.run(['$rootScope','$routeParams','FeedService', function($rootScope,$routeParams,FeedService) {
    var channels;

    FeedService.tvFeed().success(function (data) {
         channels = data;
    });

    $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
        //Change page title, based on Route information
        $rootScope.pagetitle = channels[$routeParams.itemId].title;
        //$rootScope.pagetitle = channels[whichChannel].title;
        //console.log(channels[0].title)
        //console.log(channels[$routeParams.itemId].title)
    });

    console.log($rootScope.pagetitle)

}]);

app.filter('html', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}])

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/channels', {
            templateUrl: 'partials/news.html',
            controller: 'ListCtrl'
        }).
        when('/watch/:itemId',{
            templateUrl: 'partials/watch.html',
            controller: 'WatchCtrl'
        }).
        when('/ramadan',{
            templateUrl: 'partials/ramadan.html',
            controller: 'WatchCtrl'
        }).
        when('/democracy-day-nigeria',{
            templateUrl: 'partials/democracy.html',
            controller: 'WatchCtrl'
        }).
        otherwise({
            redirectTo:'/channels'
        })
}]);

