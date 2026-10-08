const revealItems = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((el) => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });

  revealItems.forEach((el) => observer.observe(el));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

function getEmailAddress() {
  const user = ['Zahid', 'Razzaq'].join('.');
  const domain = ['student', 'unibz', 'it'].join('.');
  return `${user}@${domain}`;
}

document.querySelectorAll('.email-link').forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = `mailto:${getEmailAddress()}`;
  });
});

const copyButton = document.querySelector('.copy-email');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const address = getEmailAddress();
    try {
      await navigator.clipboard.writeText(address);
      const original = copyButton.textContent;
      copyButton.textContent = 'Copied';
      setTimeout(() => { copyButton.textContent = original; }, 1600);
    } catch {
      window.prompt('Copy email address:', address);
    }
  });
}
