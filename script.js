/* NAVBAR SCROLL */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* MOBILE TOGGLE */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* SCROLL SPY */
const sections = document.querySelectorAll('section[id]');
const allLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 400;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  allLinks.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === `#${current}`) {
      l.classList.add('active');
    }
  });
});
/* CLICK ANIMATION NAVBAR */
allLinks.forEach(link => {
  link.addEventListener('click', function() {

    // Hapus active semua
    allLinks.forEach(l => l.classList.remove('active'));

    // Tambahkan active ke yang diklik
    this.classList.add('active');

    // Efek klik (scale cepat)
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);

  });
});

/* REVEAL ON SCROLL */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* MODAL */
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
/* SMOOTH SCROLL + OFFSET */
allLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80;

    const top = target.offsetTop - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  });
});
