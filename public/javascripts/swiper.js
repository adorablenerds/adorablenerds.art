var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",
  initialSlide: 0,
  slideToClickedSlide: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".swiper-pagination"
  },
  breakpoints: {
    // when window width is >= 320px
    800: {
      slidesPerView: 2
    },
    1000: {
      slidesPerView: 3
    }    
  }
});
