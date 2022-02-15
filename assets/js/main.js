// ====== START HERO SECTION ======

// HERO SIDEBAR
const sidebarBtnOpen = document.querySelector(".sidebar__btn-open");
const sidebarBtnClose = document.querySelector(".sidebar__btn-close");
const sidebar = document.querySelector(".sidebar");

sidebarBtnOpen.addEventListener("click", (e) => {
  sidebar.style.left = 0;
  e.stopPropagation();
});

sidebarBtnClose.addEventListener("click", (e) => {
  sidebar.style.left = "-300%";
  e.stopPropagation();
});

const sidebarItem = document.querySelectorAll(".sidebar__item");

sidebarItem.forEach((item) => {
  if (item.classList.contains("has__sublist")) {
    const link = item.querySelector(".sidebar__link");
    const sublist = item.querySelector(".sidebar__sublist");

    link.innerHTML += '<i class="fa-solid fa-chevron-down"></i>';
    link.addEventListener("click", (e) => {
      e.preventDefault();

      sublist.classList.toggle("active");
      link.querySelector("i").classList.toggle("fa-chevron-up");
    });
  }
});

// HERO SLIDER
var heroSlider = new Swiper(".hero__slider", {
  loop: true,
  lazy: true,
  effect: "coverflow",
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// HERO SCROLL DOWN
const scrollDownBtn = document.querySelector(".scroll__down");
scrollDownBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".hero__section").clientHeight,
    behavior: "smooth",
  });
});

// ====== END HERO SECTION ======
