const hamburger = document.querySelector('.header-hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeMenu = document.querySelectorAll('.has-fade');

hamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    //close hamburger menu
    header.classList.remove('open');
    body.classList.remove('no-scroll');

    fadeMenu.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    //open hamburger menu
    header.classList.add('open');
    body.classList.add('no-scroll');
    fadeMenu.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
