/**
 * Created by simba on 12/05/15.
 */
var channelController = angular.module('channelController', []);

channelController.controller("ListCtrl", ['$scope', 'FeedService', '$sce', function ($scope, FeedService, $sce) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    };

    //$http.get('js/data/tv.json').success(function (data) {
    //    $scope.channels = data;
    //    //console.log($scope.channels)
    //});

    FeedService.tvFeed().success(function (data) {
        $scope.channels = data;
        //console.log($scope.channels)
    });

    $scope.categories =
        [
            "News","Sport","Music","Comedy"
        ]
}]);

channelController.controller("WatchCtrl", ['$scope', 'FeedService', '$sce','$routeParams', function ($scope, FeedService, $sce, $routeParams) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    };



    FeedService.tvFeed().success(function (data) {
        $scope.channels = data;
        $scope.whichChannel = $routeParams.itemId;
        //console.log($scope.channels.title)
    });

    //
    //videojs.autoSetup();
    //videojs('vid1').ready(function(){
    //    console.log(this.options()); //log all of the default videojs options
    //    // Store the video object
    //    var myPlayer = this, id = myPlayer.id();
    //    // Make up an aspect ratio
    //    var aspectRatio = 422/770;
    //
    //    function resizeVideoJS(){
    //        var width = document.getElementById(id).parentElement.offsetWidth;
    //        myPlayer.width(width).height( width * aspectRatio );
    //
    //    }
    //
    //    // Initialize resizeVideoJS()
    //    resizeVideoJS();
    //    // Then on resize call resizeVideoJS()
    //    window.onresize = resizeVideoJS;
    //});

//    var myPlayer;
//    $scope.$on('$destroy', function() {
//        // Destroy the object if it exists
//        if ((myPlayer !== undefined) && (myPlayer !== null)) {
//            myPlayer.dispose();
//        }
//    });
//
//// Manually loading the videojs
//    videojs("preach-video").ready(function() {
//        myPlayer = this; // Store the object on a variable
//    })


}]);