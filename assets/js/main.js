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

// document.getElementById("sliderVideo").play();

// ====== START HERO SECTION ======
if (document.querySelector(".sidebar") !== null) {
  // HERO SIDEBAR
  const sidebarBtnOpen = document.querySelector(".sidebar__btn-open");
  const sidebarBtnClose = document.querySelector(".sidebar__btn-close");
  const sidebar = document.querySelector(".sidebar");

  sidebarBtnOpen.addEventListener("click", (e) => {
    sidebar.classList.add("open");
    e.stopPropagation();
  });

  sidebarBtnClose.addEventListener("click", (e) => {
    sidebar.classList.remove("open");

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

  if (document.querySelector(".hero__slider")) {
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
        delay: 8000,
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
  }
}

// ====== END HERO SECTION ======

// ====== START board directors SECTION ======

if (document.querySelector(".board__directors") !== null) {
  var latestNewsSwiper = new Swiper(".board__directors-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".board__directors-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".board__directors .next",
      prevEl: ".board__directors .prev",
    },
  });

  const swiperPagination = document.querySelector(
    ".board__directors .swiper-pagination"
  );
  const swiperPaginationBullets = document.querySelectorAll(
    ".board__directors .swiper-pagination-bullet"
  );

  let years = swiperPagination.dataset.years.split(",");

  swiperPaginationBullets.forEach((bullet, index) => {
    if (index < years.length) {
      bullet.setAttribute("data-before", years[index]);
    }
  });
}

// ====== END board directors SECTION ======

// ====== START latest__news SECTION ======

if (document.querySelector(".latest__news-swiper") !== null) {
  var latestNewsSwiper = new Swiper(".latest__news-swiper", {
    freeMode: true,
    pagination: {
      el: ".latest__news-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".latest__news .next",
      prevEl: ".latest__news .prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

// ====== END latest__news SECTION ======

// ====== START files__links SECTION ======

if (document.querySelector(".files__links-swiper") !== null) {
  var latestNewsSwiper = new Swiper(".files__links-swiper", {
    freeMode: true,
    navigation: {
      nextEl: ".files__links .next",
      prevEl: ".files__links .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

// ====== END files__links SECTION ======

// ====== START CARD Collapse ======

const cardsCollapse = document.querySelectorAll(".card_collapse");
cardsCollapse.forEach((card) => {
  const moreInfoBtn = card.querySelector(".show__more");

  moreInfoBtn.addEventListener("click", () => {
    cardsCollapse.forEach((ele) => {
      ele.classList.remove("active");
    });

    card.classList.toggle("active");

    card.querySelector(".fa-xmark").addEventListener("click", () => {
      card.classList.remove("active");
    });
  });
});

// ====== END CARD Collapse ======

if (document.querySelector(".aboutUs__slider-swiper") != null) {
  var swiper = new Swiper(".aboutUs__slider-swiper", {
    effect: "coverflow",
    grabCursor: true,
    // centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".aboutUs__slider .next",
      prevEl: ".aboutUs__slider .prev",
    },
    breakpoints: {
      991: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}
