$(".contacts__button, .js-button-testdrive, .js-button-credit, .js-button-price").fancybox({
  href   : '#hidden-content',
  transitionEffect: 'elastic',
  smallBtn : false,
});

$(".modal-window__close").on("click", function() {
  $.fancybox.close();
});

$(".overlay").on("click", function() {
  $.fancybox.close();
});

$(document).keyup(function(e) {
  if (e.key === "Escape") {
    $.fancybox.close();
  }
});

$(document).ready(function(){
  $('.promo__slider').slick({
    prevArrow: '.slick-prev-promo',
    nextArrow: '.slick-next-promo',
  });
});

$(window).on('load resize', function() {
  if ($(window).width() <= 1139) {
    $('.slick-arrow').css('display', 'none');
  } else {
    $('.slick-arrow').css('display', 'flex');
  }
});

$(document).ready(function(){
  $('.car-slider__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    speed: 500,
    dots: false,
    initialSlide: 4,
    prevArrow: $(".slick-prev-model"),
    nextArrow: $(".slick-next-model"),
    asNavFor: '.car-transporent__slider',
  });

  $('.car-transporent__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    initialSlide: 4,
    prevArrow: $(".slick-prev-model"),
    nextArrow: $(".slick-next-model"),
    asNavFor: '.car-slider__slider'
  });

  $('.slider-dots__button').each(function(index) {
    $(this).on('click', function(){
      $('.car-slider__slider').slick('slickGoTo', index);
      $('.car-transporent__slider').slick('slickGoTo', index);
    });
  });

  $('.car-slider__slider').on('afterChange', function(event, slick, currentSlide){
    $('.slider-dots__button').removeClass('slider-dots__button--active');
    $('.slider-dots__button').eq(currentSlide).addClass('slider-dots__button--active');
  });

  $('.car-transporent__slider').on('afterChange', function(event, slick, currentSlide){
    $('.slider-dots__button').removeClass('slider-dots__button--active');
    $('.slider-dots__button').eq(currentSlide).addClass('slider-dots__button--active');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.js-nav-burger');
  const close = document.querySelector('.header__close');
  const nav = document.querySelector('.header__navigation');

  burger.addEventListener('click', function() {
    nav.classList.add('js-nav-menu');
    close.classList.add('js-nav-close');
  });

  close.addEventListener('click', function() {
    nav.classList.remove('js-nav-menu');
    close.classList.remove('js-nav-close');
  });
});
