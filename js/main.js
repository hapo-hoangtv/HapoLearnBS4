$(document).ready(function(){
    $('.header-button').click(function() {
        $('.icon').toggleClass('fa-times');
        $('.icon').toggleClass('fa-bars');
    });
    $('.feedback-detail').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: false,
      autoplaySpeed : 3000,
      prevArrow: $('.next-left'),
      nextArrow: $('.next-right'),
  
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});
