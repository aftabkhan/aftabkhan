$(function(){
    "use strict";

    /*=========================================================================
     Parallax layers
     =========================================================================*/
     if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
         if ($('.parallax').length > 0) { 
            var scene = $('.parallax').get(0);
            var parallax = new Parallax(scene, { 
                relativeInput: true,
                onReady: function() { console.log('ready!');
            } });
        }
    }


    /*=========================================================================
            Scroll to Top
    =========================================================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body, html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 400);
    });

});


$(document).ready(function(){
    /**************************************************************************
                 SKILL BAR 
    **************************************************************************/

    $(".determinate").each(function(){
      var width = $(this).text();
      $(this).css("width", width)
        //.empty();
        //.append('<i class="fa fa-circle"></i>');                
    });


});