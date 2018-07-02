$("#myCarousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});





/*
window.onscroll = function() {scrollFunction()};
var nav2 = document.getElementById('nav1')


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        nav2.style.backgroundColor="#fff";
        $(".navbar-brand").css("color", "black");
        $("#nav1 .nav li a ").css("color", "black");

    } else {
        nav2.style.backgroundColor="transparent";
        $(".navbar-brand").css("color", "white");
        $("#nav1 .nav li a ").css("color", "white");
    }
}
*/




$(window).scroll(function() {
      if ($("#nav1").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");

          }
    });
 

 /*
 $(window).resize(function(){     

       if ($('#nav1').width() <= 767 ){

              $("#nav1.custom-navbar.navbar-brand").css("background", " #202020")
       }

});
  */
 

 
 