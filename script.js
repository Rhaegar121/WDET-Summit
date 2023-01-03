const bar = document.querySelector('#mobile-nav');
const menu = document.querySelector('#mobile-menu');
const xmark = document.querySelector('#xmark');

function mobileMenu() {
  if (menu.style.display === 'block' && bar.style.display === 'none') {
    menu.style.display = 'none';
    bar.style.display = 'flex';
  } else {
    menu.style.display = 'block';
    bar.style.display = 'none';
  }
}

bar.addEventListener('click', mobileMenu);
menu.addEventListener('click', mobileMenu);
// xmark.addEventListener('click', mobileMenu);
xmark.onclick = () => {
    menu.style.display = 'block';
    bar.style.display = 'none';
}