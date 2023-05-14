var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000, // set the delay between slides in milliseconds
    disableOnInteraction: false // allow user interaction with the slider
  }
});
