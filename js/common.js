$(document).ready(function() {

    new WOW().init();

    $(function() {
        $('.burger').click(function() {
            $('.main-nav_list').slideToggle();
        });
        $(window).resize(function() {
            var w = $(window).width();
            if (w >= 768) {
                $('.main-nav_list').removeAttr('style');
            }
        });
    });

    $(function() {

        $("#typing").typed({
            strings: ["Дворец культуры<br> железнодорожников"],
            typeSpeed: 70,
            backDelay: 1500,
            startDelay: 2500,
            loop: true,
            loopCount: 1,
            contentType: 'html',
        });

    });

    // $(".dws-progress-bar").circularProgress({
    //     color: "#CAE2ED",
    //     line_width: 17,
    //     height: "350px",
    //     width: "350px",
    //     percent: 0,
    //     // counter_clockwise: true,
    //     starting_position: 25
    // }).circularProgress('animate', 100, 2000);

});

// $(window).on('load', function() {
//     var $preloader = $('#preloader');
//     $preloader.delay(2850).fadeOut('slow');
// });
