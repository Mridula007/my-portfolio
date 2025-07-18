// Smooth scroll
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Toggle dark/light mode
const toggleBtn = document.querySelector('.toggle-btn');
const setMode = (light) => {
  document.body.classList.toggle('light-mode', light);
  toggleBtn.innerHTML = light ? '🌙' : '☀️';
  localStorage.setItem('theme', light ? 'light' : 'dark');
};

const savedMode = localStorage.getItem('theme');
if (savedMode === 'light') setMode(true);

toggleBtn.addEventListener('click', () => {
  const isLight = document.body.classList.contains('light-mode');
  setMode(!isLight);
});