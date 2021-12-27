(() => {
  const refs = {
    openMenuBtn: document.querySelector('.button-menu-open'),
    closeMenuBtn: document.querySelector('.button-menu-close'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();