/* ============================================
   Main JavaScript — Portfolio Interactions
   (Next.js compatible version)
   ============================================ */

(function () {
  // --- Loading Animation ---
  // In Next.js, window.load may have already fired, so we use a short fixed timeout
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => { loader.style.display = 'none'; }, 600);
    }, 600);
  }

  // --- Sticky Header ---
  function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on init
  }

  // --- Mobile Navigation ---
  function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Active Nav Link Tracking ---
  function initActiveNav() {
    const navLinks = document.querySelectorAll('.header__link');
    const sections = document.querySelectorAll('section[id]');
    if (!navLinks.length || !sections.length) return;

    const updateActiveLink = () => {
      const scrollY = window.scrollY + 150;
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
          });
        }
      });
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
  }

  // --- Scroll Reveal (IntersectionObserver) ---
  function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    revealElements.forEach(el => observer.observe(el));
  }

  // --- Smooth Scroll for Anchor Links ---
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offsetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      });
    });
  }

  // --- Back to Top ---
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // --- Button Ripple Effect ---
  function initRipple() {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`;
        this.appendChild(ripple);
        setTimeout(() => { if (ripple.parentNode) ripple.parentNode.removeChild(ripple); }, 600);
      });
    });
  }

  // --- Custom Cursor ---
  function initCursor() {
    const cursorFollower = document.getElementById('cursorFollower');
    if (!cursorFollower) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth <= 768) return;

    let mouseX = -100, mouseY = -100, cursorX = -100, cursorY = -100;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorFollower.classList.add('visible');
    });

    document.addEventListener('mouseleave', () => cursorFollower.classList.remove('visible'));

    document.querySelectorAll('a, button, .project-card, .about__tool, .about__tag').forEach(el => {
      el.addEventListener('mouseenter', () => cursorFollower.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursorFollower.classList.remove('hover'));
    });

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursorFollower.style.left = `${cursorX}px`;
      cursorFollower.style.top = `${cursorY}px`;
      requestAnimationFrame(animateCursor);
    };
    animateCursor();
  }

  // --- Parallax Hero Shapes ---
  function initParallax() {
    const heroShapes = document.querySelectorAll('.hero__shape');
    if (!heroShapes.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const moveY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      heroShapes.forEach((shape, i) => {
        const depth = (i + 1) * 12;
        shape.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    }, { passive: true });
  }

  // --- Stat Counter Animation (Case Study page) ---
  function initStatCounters() {
    const statNumbers = document.querySelectorAll('.case-stat__number');
    if (!statNumbers.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStatNumber(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNumbers.forEach(stat => observer.observe(stat));
  }

  function animateStatNumber(element) {
    const finalText = element.textContent;
    const hasPlus = finalText.includes('+');
    const hasMinus = finalText.includes('-');
    const hasSlash = finalText.includes('/');
    const duration = 1200;
    const startTime = performance.now();

    if (hasSlash) {
      const parts = finalText.split('/');
      const target = parseFloat(parts[0]);
      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${(target * eased).toFixed(1)}/${parts[1]}`;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    } else {
      const target = parseInt(finalText.replace(/[^0-9]/g, ''), 10);
      const prefix = hasPlus ? '+' : hasMinus ? '-' : '';
      const suffix = finalText.includes('%') ? '%' : '';
      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }

  // --- Boot ---
  function init() {
    initLoader();
    initHeader();
    initMobileNav();
    initActiveNav();
    initReveal();
    initSmoothScroll();
    initBackToTop();
    initRipple();
    initCursor();
    initParallax();
    initStatCounters();
  }

  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
