const links = document.querySelectorAll('.header-name-link');
const bigLinks = document.querySelectorAll('.header-name-bigLink');

links.forEach((link) => {
  link.addEventListener('mouseover', (event) => {
    link.classList.add('text-custom-blue');
    link.classList.remove('md:text-8xl');
    link.classList.add('md:text-9xl');
  });
  link.addEventListener('mouseout', (event) => {
    link.classList.remove('text-custom-blue');
    link.classList.remove('md:text-9xl');
    link.classList.add('md:text-8xl');
  });
});

bigLinks.forEach((link) => {
  link.addEventListener('mouseover', (event) => {
    link.classList.add('text-custom-blue');
    link.classList.add('text-8xl');
  });
  link.addEventListener('mouseout', (event) => {
    link.classList.remove('text-custom-blue');
    link.classList.remove('text-8xl');
  });
});