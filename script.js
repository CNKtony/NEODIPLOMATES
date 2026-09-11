const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('joinForm');
const message = document.getElementById('formMessage');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || 'vous';

  message.textContent = `Merci ${name}. Votre demande a été préparée. La connexion à un backend/email pourra être ajoutée ensuite.`;
  form.reset();
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 40 ? 'rgba(16,27,22,.96)' : 'transparent';
  header.style.backdropFilter = window.scrollY > 40 ? 'blur(12px)' : 'none';
});
