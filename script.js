const bar = document.querySelector('#mobile-nav');
const menu = document.querySelector('#mobile-menu');
const xmark = document.querySelector('#xmark');

function mobileMenu() {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else menu.style.display = 'block';
}

bar.addEventListener('click', mobileMenu);
menu.addEventListener('click', mobileMenu);
xmark.addEventListener('click', mobileMenu);