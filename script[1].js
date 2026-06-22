// === MOBILE NAV ===
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// === ACTIVE NAV HIGHLIGHT ===
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  links.forEach(a => {
    const isActive = a.getAttribute('href') === '#' + current;
    a.style.color  = isActive ? '#2563eb' : '';
    a.style.fontWeight = isActive ? '700' : '';
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// === SCROLL REVEAL ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');

    const bar = entry.target.querySelector('.bar-fill');
    if (bar) bar.style.width = bar.dataset.w + '%';

    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .projek-card').forEach(el => {
  observer.observe(el);
});
