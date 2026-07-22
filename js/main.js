gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

/* ---------- Header on scroll ---------- */
const header = document.getElementById('siteHeader');
ScrollTrigger.create({
  start: 'top -40',
  onUpdate: (self) => {
    header.classList.toggle('is-scrolled', self.scroll() > 40);
  }
});

/* ---------- Mobile nav ---------- */
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileClose');

function openNav() { mobileNav.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
function closeNav() { mobileNav.classList.remove('is-open'); document.body.style.overflow = ''; }

navToggle.addEventListener('click', openNav);
mobileClose.addEventListener('click', closeNav);
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

/* ---------- Smooth anchor scroll ---------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        gsap.to(window, { duration: 1, ease: 'power2.inOut', scrollTo: { y: target, offsetY: 76 } });
      }
    }
  });
});

/* ---------- Hero seal photo — signature element ---------- */
gsap.fromTo('.seal-photo-frame', { opacity: 0, scale: 0.88 }, { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out', delay: 0.3 });
gsap.fromTo('.seal-photo-ring', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.9 });
gsap.fromTo('.seal-photo-caption', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.05 });
gsap.fromTo('.hero-stats', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.6 });

gsap.from('.hero-copy h1, .hero-copy p.lede, .hero-copy .hero-actions', {
  opacity: 0, y: 22, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.1
});

/* ---------- Scroll reveals ---------- */
const revealGroups = document.querySelectorAll('.reveal');
revealGroups.forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 88%' }
  });
});

/* Diagnostic steps stagger */
gsap.utils.toArray('.diagnostic-step').forEach((step, i) => {
  gsap.from(step, {
    opacity: 0, y: 16, duration: 0.6, ease: 'power2.out',
    delay: i * 0.1,
    scrollTrigger: { trigger: step, start: 'top 92%' }
  });
});

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.faq-item').forEach((item) => {
  const btn = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove('is-open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      }
    });
    if (isOpen) {
      item.classList.remove('is-open');
      answer.style.maxHeight = null;
    } else {
      item.classList.add('is-open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

/* ---------- About image (real photo, searched at build time) ---------- */
document.getElementById('aboutImg').src =
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200';
document.getElementById('aboutImg').alt = 'Equipa em reunião de trabalho, ambiente corporativo';
