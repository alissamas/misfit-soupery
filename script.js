$(document).ready(function(){
  $('.soups').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
});

$(document).ready(function() {
  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("down", (fromTop > 300));
  });
});
