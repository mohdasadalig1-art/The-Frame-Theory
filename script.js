// THE FRAME THEORY - Main JavaScript

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple scroll effect for navbar
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav');

  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});