const revealItems = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion) {
  revealItems.forEach(el => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach(el => observer.observe(el));
}

document.getElementById('year').textContent = new Date().getFullYear();

// Small parallax effect on the research-orbit panel; disabled on touch/reduced-motion.
const panel = document.querySelector('.hero-panel');
if (panel && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  panel.addEventListener('mousemove', (event) => {
    const r = panel.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - 0.5;
    const y = (event.clientY - r.top) / r.height - 0.5;
    panel.style.transform = `perspective(900px) rotateY(${x * 2.4}deg) rotateX(${y * -2.4}deg)`;
  });
  panel.addEventListener('mouseleave', () => {
    panel.style.transform = '';
  });
}
// Build the email address only when a visitor clicks a contact button.
// This avoids exposing a plain mailto address directly in the HTML.
document.querySelectorAll('.email-link').forEach((button) => {
  button.addEventListener('click', (event) => {
    if (button.getAttribute('href') === '#contact') {
      return;
    }

    event.preventDefault();

    const user = ['Zahid', 'Razzaq'].join('.');
    const domain = ['student', 'unibz', 'it'].join('.');
    const address = `${user}@${domain}`;

    window.location.href = `mailto:${address}`;
  });
});