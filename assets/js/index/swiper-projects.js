var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

var swiper = new Swiper(".swiper-container.gallery", {
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  loop: true,
});