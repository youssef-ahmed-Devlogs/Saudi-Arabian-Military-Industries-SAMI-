// HOME LINE
if (document.querySelector(".home_line") !== null) {
  homeLine();

  window.onresize = homeLine;

  function homeLine() {
    document.querySelector(".home_line").style.height = `${
      document.querySelector(".subsidiaries__section .head").offsetTop + 30
    }px`;
  }
}

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
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
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

// ====== START board directors SECTION ======

if (document.querySelector(".board__directors") !== null) {
  const boardDirectors = document.querySelector(".board__directors");
  const years = boardDirectors.querySelectorAll(".year");
  years.forEach((year, index) => {
    year.addEventListener("click", () => {
      years.forEach((y) => y.classList.remove("active", "current"));
      year.classList.toggle("current");

      for (let i = 0; i <= index; i++) {
        years[i].classList.toggle("active");
      }

      for (let i = index + 1; i < years.length; i++) {
        years[i].style.right = `${i * 250}px`;
      }
    });
  });
}

// ====== END board directors SECTION ======

// ====== START latest__news SECTION ======

var latestNewsSwiper = new Swiper(".latest__news-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".latest__news-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".latest__news .next",
    prevEl: ".latest__news .prev",
  },
});

// ====== END latest__news SECTION ======
