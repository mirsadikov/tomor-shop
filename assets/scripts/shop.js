const accordionsContainer = document.querySelector('.accordions');
const accordions = accordionsContainer.querySelectorAll('.accordion');
const filterBtn = document.querySelector('.filter__filter-btn');
const sortBtn = document.querySelector('.filter__sort-btn');
const filter = document.querySelector('.filter');
const sortContainer = document.querySelector('.sorting');
const productsContainer = document.querySelector('.products');

accordionsContainer.addEventListener('click', (event) => {
  const target = event.target;
  const accordionButton = target.closest('.accordion__title');

  if (accordionButton) {
    const isActive =
      accordionButton.parentElement.classList.contains('accordion--open');
    accordions.forEach((item) => {
      item.classList.remove('accordion--open');
    });
    if (!isActive) {
      accordionButton.parentElement.classList.add('accordion--open');
    }
  }
});

filter.addEventListener('click', (event) => {
  const target = event.target;
  const filterButton = target.closest('.filter__filter-btn');
  const sortButton = target.closest('.filter__sort-btn');

  if (filterButton) {
    sortContainer.classList.remove('sorting--open');
    accordionsContainer.classList.toggle('accordions--open');
    filterBtn.classList.toggle('filter__button--open');
    sortBtn.classList.remove('filter__button--open');
  }

  if (sortButton) {
    accordionsContainer.classList.remove('accordions--open');
    sortContainer.classList.toggle('sorting--open');
    sortBtn.classList.toggle('filter__button--open');
    filterBtn.classList.remove('filter__button--open');
  }
});

productsContainer.addEventListener('click', (event) => {
  const target = event.target;
  const product = target.closest('.product');

  if (!target.classList.contains('product__color') && product) {
    window.location.href = 'product.html';
  }
});
