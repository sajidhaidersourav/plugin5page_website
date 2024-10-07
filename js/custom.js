// =======  [ javascript ] ======= 
// =========  [ jquery ] ======== 

$(function(){
    // preloader strat
    $(window).load(function () {
        $("#loading").fadeOut(400);
      });
    // preloader end
    // slider strat
    $('.s1_wapper').slick({
        dots: true
    });
    // slider end
    // responsive slider strat
    $('.s2_wapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    // responsive slider end
    // Slider Syncing strat
    $('.s3t_wapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        asNavFor: '.s3b_wapper'
      });
      $('.s3b_wapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        asNavFor: '.s3t_wapper',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
    // Slider Syncing end
})
