const headerCatalogTitle = document.querySelector('.header-catalog-title');
headerCatalogTitle.addEventListener('click', (e) => {
  const headerCatalogMenu = document.querySelector('.header-catalog-menu');
  headerCatalogTitle.classList.toggle('header-catalog-title--active');
  headerCatalogMenu.classList.toggle('header-catalog-menu--visible');
});

var slider = document.querySelector('.sidebar-filter-price');

noUiSlider.create(slider, {
  start: [0, 10000],
  connect: true,
  step: 50,
  tooltips: true,
  range: {
    'min': 0,
    'max': 10000
  }
});