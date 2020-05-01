$(document).ready(function () {
    var b = $("#header").offset().top;

    $(".top").click(function () {
        $("html,body").animate({
            'scrollTop': '0'
        });
    });


    $(window).scroll(function () {
        var a = $(this).scrollTop();
        if (a != 0) {
            $(".top").fadeIn();
        } else {
            $(".top").fadeOut();
        }
    });
    //    back to top 


    $(window).scroll(function () {
        var c = $(this).scrollTop();
        if (b < c) {
            $("#header").addClass("sticky");
        } else {
            $("#header").removeClass("sticky");
        }
    });
//    sticky menu
    $('.slider_slick').slick({
  dots: true,
  infinite: true,
        arrows:true,
        prevArrow:'<i class = "fas fa-angle-left"></i>',
        nextArrow:'<i class = "fas fa-angle-right"></i>',
        slideToShow:1,
        slideToShow:1,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
//    banner slick slider
    new WOW().init();
//    wow.js plagin


});
