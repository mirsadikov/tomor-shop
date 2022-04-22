import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';
const pairContainer = document.querySelector('.pair__list');
const additionalContainer = document.querySelector('.additional__list');

const breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 7,
  },
  701: {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  1001: {
    slidesPerView: 4,
    spaceBetween: 16,
  },
};

const pairSlider = new Swiper('.pair__list', {
  breakpoints,
  rewind: true,
  navigation: {
    nextEl: '.pair__next-btn',
  },
});

const additionalSlider = new Swiper('.additional__list', {
  breakpoints,
  rewind: true,
  navigation: {
    nextEl: '.additional__next-btn',
  },
});

const link = (event) => {
  const target = event.target;
  const product = target.closest('.product');

  if (!target.classList.contains('product__color') && product) {
    window.location.href = 'product.html';
  }
};

pairContainer.addEventListener('click', link);
additionalContainer.addEventListener('click', link);

const thumbs = new Swiper('.hero__thumbs', {
  // autoHeight: true,
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      direction: 'horizontal',
      spaceBetween: 10,
    },
    1001: {
      slidesPerView: 8,
      direction: 'vertical',
    },
  },
});

const images = new Swiper('.hero__images', {
  slidesPerView: 1,
  thumbs: {
    swiper: thumbs,
  },
  navigation: {
    nextEl: '.hero__next-btn',
    prevEl: '.hero__prev-btn',
  },
});
