document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mon-slider', {
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 3000,
    },
  });
})

function switchDarkMode() {
  var body = document.getElementsByTagName("body")[0];
  var header = document.getElementsByTagName("header")[0];
  var footer = document.getElementsByTagName("header")[0];
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    header.classList.remove("dark");
    footer.classList.remove("dark");
  } else {
    body.classList.add("dark");
    header.classList.add("dark");
    footer.classList.add("dark");
  }
}