const headerCatalogTitle = document.querySelector('.header-catalog-title');
headerCatalogTitle.addEventListener('click', (e) => {
  const headerCatalogMenu = document.querySelector('.header-catalog-menu');
  headerCatalogTitle.classList.toggle('header-catalog-title--active');
  headerCatalogMenu.classList.toggle('header-catalog-menu--visible');
});