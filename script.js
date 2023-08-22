const navbarLeftMenu = document.querySelector(".navbar-left-menu");
const navbarLeft = document.querySelector(".navbar-left");

navbarLeft.addEventListener("click", function () {
  navbarLeftMenu.classList.toggle("active");
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
