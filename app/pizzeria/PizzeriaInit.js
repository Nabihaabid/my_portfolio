'use client';

import { useEffect } from 'react';

export default function PizzeriaInit() {
  useEffect(() => {
    // Hide loader immediately on client-side navigation
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      loader.style.display = 'none';
    }

    // Re-initialize scroll reveal for new page elements
    const revealElements = document.querySelectorAll('.reveal:not(.revealed)');
    if (revealElements.length && 'IntersectionObserver' in window) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        revealElements.forEach(el => el.classList.add('revealed'));
      } else {
        const observer = new IntersectionObserver(
          (entries) => {
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
    }

    // Re-initialize sticky header
    const header = document.getElementById('header');
    if (header) {
      const handleScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }

    // Re-initialize back to top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      const handler = () => window.scrollTo({ top: 0, behavior: 'smooth' });
      backToTop.addEventListener('click', handler);
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return null;
}
