//Menu
const desktopNav = document.getElementsByClassName('desktop-nav');
const mobileNav = document.getElementsByClassName('mobile-nav');
const mobileMenu = document.getElementsByClassName('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

function menuResize() {
  
  if (window.innerWidth <= 768) {
    desktopNav[0].classList.add('hidden');
    desktopNav[0].classList.remove('show');

    mobileNav[0].classList.add('show');
    mobileNav[0].classList.remove('hidden');
  } else {
    desktopNav[0].classList.add('show');
    desktopNav[0].classList.remove('hidden');

    mobileNav[0].classList.add('hidden');
    mobileNav[0].classList.remove('show');
  }
};

window.onload = menuResize;
window.addEventListener('resize', menuResize);

mobileNav[0].addEventListener('click', function(){
  mobileMenu[0].classList.add('show');
  mobileNav[0].classList.add('hidden');
  mobileMenu[0].classList.remove('hidden');
  mobileNav[0].classList.remove('show');
});

mobileMenuClose.addEventListener('click', function(){
  mobileMenu[0].classList.add('hidden');
  mobileNav[0].classList.add('show');
  mobileMenu[0].classList.remove('show');
  mobileNav[0].classList.remove('hidden');
});