window.addEventListener('DOMContentLoaded', event => {

  const video = document.getElementById('hop-video');
  video.play();

  // Navbar shrink function
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const images = document.querySelectorAll('.gallery-pic');

    images.forEach(function (image) {
      const imagePosition = image.getBoundingClientRect().top;

      if (imagePosition < window.innerHeight) {
        image.classList.add('grow-animation');
      } else {
        image.classList.remove('grow-animation');
      }
    });
  });

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }


  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});
