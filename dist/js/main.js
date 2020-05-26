// Select items from DOM
const menuBtn = document.querySelector ('.menu-btn');
const menu = document.querySelector ('.menu');
const menuNav = document.querySelector ('.menu-nav');
const menuBranding = document.querySelector ('.menu-branding');
const navItems = document.querySelectorAll ('.nav-item');
const logo = document.querySelector ('.logo');
const logoImg = document.getElementById ('image_logo');
const header = document.getElementsByTagName ('header')[0];

// Set initial state of menu
let showMenu = false;
let showLogo = true;

menuBtn.addEventListener ('click', toggleMenu);

function toggleMenu () {
  if (!showMenu) {
    menuBtn.classList.add ('close');
    menu.classList.add ('show');
    menuNav.classList.add ('show');
    menuBranding.classList.add ('show');
    navItems.forEach (item => item.classList.add ('show'));
    if (logoImg) {
      logoImg.style.display = 'none';
    }

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove ('close');
    menu.classList.remove ('show');
    menuNav.classList.remove ('show');
    menuBranding.classList.remove ('show');
    navItems.forEach (item => item.classList.remove ('show'));
    if (logoImg) {
      logoImg.style.display = 'block';
    }

    // Set Menu State
    showMenu = false;
  }
}
