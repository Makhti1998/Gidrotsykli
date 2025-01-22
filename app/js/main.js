const swiper = new Swiper(".banner-slider", {
  rewind: true,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".search__tabs-item").on("click", function (e) {
  e.preventDefault();

  $(".search__tabs-item").removeClass("search__tabs-item--active");
  $(".search__content-item").removeClass("search__content-item--active");

  $(this).addClass("search__tabs-item--active");
  $($(this).attr("href")).addClass("search__content-item--active");
});
