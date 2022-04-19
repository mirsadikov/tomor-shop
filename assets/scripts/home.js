import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const arrivalSwiper = new Swiper('.arrivals__list', {
  grabCursor: true,
  rewind: true,
  navigation: {
    nextEl: '.arrivals__next-btn',
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 7,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

const collectionOptions = {
  grabCursor: true,
  navigation: {
    nextEl: '.collections__next-btn',
    prevEl: '.collections__prev-btn',
  },
  grid: {
    rows: 2,
    fill: 'row',
  },
  slidesPerView: 2,
  spaceBetween: 40,
};
const newinSwiper = new Swiper(
  '.newin .collections__products-container',
  collectionOptions,
);
const seasonalSwiper = new Swiper(
  '.seasonal .collections__products-container',
  collectionOptions,
);

const editorsSlider = new Swiper('.collections-slider__slider', {
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.collections-slider__next-btn',
  },
  rewind: true,
});
