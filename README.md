const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mainNav.classList.remove('is-open'));
  });
}

const signupForm = document.querySelector('.signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = signupForm.querySelector('button');
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Joined';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        signupForm.reset();
      }, 1800);
    }
  });
}

