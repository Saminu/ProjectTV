/**
 * Created by simba on 17/01/15.
 */
$(document).ready(function () {

    $("#header").load("/templates/header.html");

    $("#footer").load("/templates/footer.html");

    $("#channels").load("/templates/tvChannels.html");

    //$('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //    var iframe = $(e.relatedTarget.hash).find('iframe');
    //    var src = iframe.attr('src');
    //    iframe.attr('src', '');
    //    iframe.attr('src', src);
    //});

//    var $myCarousel = $("#carousel-example-generic");
//    $myCarousel.on("slide.bs.carousel", function (event) {
//        // Bootstrap carousel marks the current slide (the one we're exiting) with an 'active' class
//        var $currentSlide = $myCarousel.find(".active iframe");
//
//        // exit if there's no iframe, i.e. if this is just an image and not a video player
//        if (!$currentSlide.length) { return; }
//
//        // pass that iframe into Froogaloop, and call api("pause") on it.
//        var player = Froogaloop($currentSlide[0]);
//        player.api("pause");
//
//        if(player.api("pause")){
//            $myCarousel.on("slide.bs.carousel", function (event) {
//                player.api("play");
//            })
//        }
//    });

    //videojs.autoSetup();
    //
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


});

