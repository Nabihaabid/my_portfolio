/* ============================================
   Main JavaScript — Portfolio Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Loading Animation ---
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 500);
      }, 800);
    });
    // Fallback in case load event already fired
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => { if (loader.parentNode) loader.remove(); }, 500);
    }, 2000);
  }

  // --- Sticky Header ---
  const header = document.getElementById('header');
  let lastScroll = 0;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // --- Mobile Navigation ---
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Active Nav Link Tracking ---
  const navLinks = document.querySelectorAll('.header__link');
  const sections = document.querySelectorAll('section[id]');

  const updateActiveLink = () => {
    const scrollY = window.scrollY + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // --- Scroll Reveal (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      revealElements.forEach(el => el.classList.add('revealed'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -60px 0px'
        }
      );

      revealElements.forEach(el => revealObserver.observe(el));
    }
  } else {
    // Fallback: show everything
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Back to Top ---
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Button Ripple Effect ---
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      // Don't add ripple to links that navigate
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // --- Custom Cursor ---
  const cursorFollower = document.getElementById('cursorFollower');

  if (cursorFollower && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.innerWidth > 768) {
    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorFollower.classList.add('visible');
    });

    // Hover state for interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .project-card, .about__tool, .about__tag');
    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => cursorFollower.classList.add('hover'));
      target.addEventListener('mouseleave', () => cursorFollower.classList.remove('hover'));
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      cursorFollower.classList.remove('visible');
    });

    // Animate cursor with requestAnimationFrame
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursorFollower.style.left = `${cursorX}px`;
      cursorFollower.style.top = `${cursorY}px`;

      requestAnimationFrame(animateCursor);
    };

    animateCursor();
  }

  // --- Parallax on Hero Shapes ---
  const heroShapes = document.querySelectorAll('.hero__shape');

  if (heroShapes.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const moveY = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      heroShapes.forEach((shape, index) => {
        const depth = (index + 1) * 12;
        const x = moveX * depth;
        const y = moveY * depth;
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    }, { passive: true });
  }

  // --- Contact Form ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('.btn');
      const originalHTML = btn.innerHTML;

      // Simulate submission
      btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        Sending...
      `;
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Message Sent!
        `;
        btn.style.background = '#27CA40';
        btn.style.boxShadow = '0 4px 16px rgba(39, 202, 64, 0.3)';

        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.disabled = false;
          btn.style.background = '';
          btn.style.boxShadow = '';
          contactForm.reset();
        }, 2500);
      }, 1500);
    });
  }

  // --- Typing / counter animation for case study stats ---
  const statNumbers = document.querySelectorAll('.case-stat__number');

  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStatNumber(entry.target);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach(stat => statsObserver.observe(stat));
  }

  function animateStatNumber(element) {
    const finalText = element.textContent;
    const hasPlus = finalText.includes('+');
    const hasMinus = finalText.includes('-');
    const hasSlash = finalText.includes('/');

    if (hasSlash) {
      // For scores like "4.6/5"
      const parts = finalText.split('/');
      const target = parseFloat(parts[0]);
      const duration = 1200;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = (target * eased).toFixed(1);
        element.textContent = `${current}/${parts[1]}`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else {
      // For percentage values like "+32%" or "-45%"
      const numStr = finalText.replace(/[^0-9]/g, '');
      const target = parseInt(numStr, 10);
      const prefix = hasPlus ? '+' : hasMinus ? '-' : '';
      const suffix = finalText.includes('%') ? '%' : '';
      const duration = 1200;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        element.textContent = `${prefix}${current}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }
});

// --- Add spin keyframe for form loading ---
const style = document.createElement('style');
style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);
