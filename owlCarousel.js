$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      responsiveClass:true,
      responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1,
          nav: true,
          navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
        },
        // breakpoint from 480 up
        480 : {
          items: 2,
          margin: 30,
        }
    }
    });
  });