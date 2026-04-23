'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success | error
  const [formMessage, setFormMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormStatus('success');
        setFormMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
        setToastMessage('Message submitted successfully!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 4000);
      } else {
        setFormStatus('error');
        setFormMessage(data.error || 'Something went wrong. Please try again.');
        setTimeout(() => setFormStatus('idle'), 4000);
      }
    } catch {
      setFormStatus('error');
      setFormMessage('Network error. Please check your connection and try again.');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <div className={`toast-notification ${showToast ? 'toast-notification--visible' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        {toastMessage}
      </div>

      {/* Loading Animation */}
      <div className="loader" id="loader">
        <div className="loader__inner">
          <div className="loader__dot"></div>
          <div className="loader__dot"></div>
          <div className="loader__dot"></div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div className="cursor-follower" id="cursorFollower"></div>

      {/* ========== HEADER ========== */}
      <header className="header" id="header">
        <div className="container header__inner">
          <a href="#hero" className="header__logo">
            nabiha<span>abid.</span>
          </a>
          <nav className="header__nav" aria-label="Main navigation">
            <a href="#about" className="header__link">About</a>
            <a href="#projects" className="header__link">Projects</a>
            <a href="#contact" className="header__link">Contact</a>
          </nav>
          <button className="header__hamburger" id="hamburger" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="mobile-nav" id="mobileNav">
        <a href="#about" className="mobile-nav__link">About</a>
        <a href="#projects" className="mobile-nav__link">Projects</a>
        <a href="#contact" className="mobile-nav__link">Contact</a>
      </div>

      {/* ========== HERO ========== */}
      <section className="hero" id="hero">
        <div className="container hero__content">
          <div className="hero__badge reveal">
            <span className="hero__badge-dot"></span>
            Available for new projects
          </div>
          <h1 className="hero__title reveal reveal-delay-1">
            Designing <span className="hero__title-accent">experiences</span> that people love to use
          </h1>
          <p className="hero__description reveal reveal-delay-2">
            UI/UX Designer focused on crafting intuitive, research-driven digital products. I bridge
            the gap between beautiful interfaces and meaningful user experiences.
          </p>
          <div className="hero__ctas reveal reveal-delay-3">
            <a href="#projects" className="btn btn--primary">
              View Projects
              <svg className="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="/assets/CV/NabihaAbid_CV.pdf" download="NabihaAbid_CV.pdf" className="btn btn--secondary">
              <svg className="btn__icon" style={{ transform: 'none' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Abstract Background Shapes */}
        <div className="hero__shapes" aria-hidden="true">
          <div className="hero__shape hero__shape--1"></div>
          <div className="hero__shape hero__shape--2"></div>
          <div className="hero__shape hero__shape--3"></div>
          <div className="hero__shape hero__shape--4"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-text">Scroll</span>
          <span className="hero__scroll-line"></span>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="section section--alt" id="about">
        <div className="container">
          <div className="reveal">
            <span className="section__label">About Me</span>
            <h2 className="section__title">Design with intention,<br />build with purpose.</h2>
          </div>

          <div className="about__grid">
            <div className="about__text reveal reveal-delay-1">
              <p>
                I&apos;m a UI/UX designer who thrives at the intersection of strategy and creativity.
                With a deep focus on user research, information architecture, and visual design systems,
                I create products that are not only beautiful but genuinely solve real-world problems.
              </p>
              <p>
                My process is rooted in empathy—understanding the people I design for.
                From initial discovery through prototyping and testing, every decision is backed by
                data and driven by the goal of creating seamless, intuitive experiences.
              </p>

              <div className="about__tools">
                <h3>Tools I Use</h3>
                <div className="about__tool-grid">
                  {/* Figma */}
                  <div className="about__tool">
                    <span className="about__tool-tooltip">Figma</span>
                    <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                    </svg>
                  </div>
                  {/* Framer */}
                  <div className="about__tool">
                    <span className="about__tool-tooltip">Framer</span>
                    <svg viewBox="0 0 24 24" fill="#05F" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 20V12H12L20 20H4Z" /><path d="M20 12H12V4L20 12Z" /><path d="M4 12L12 4H4V12Z" />
                    </svg>
                  </div>
                  {/* Adobe */}
                  <div className="about__tool">
                    <span className="about__tool-tooltip">Adobe CC</span>
                    <svg viewBox="0 0 24 24" fill="#FA0F00" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm6.6 14l1.2-3.2h3.4l1 3.2h2l-3.8-10.8h-2.2L8.5 16h2.1zm4-5H11.2l1.7-4.7L14.6 11z" />
                    </svg>
                  </div>
                  {/* Sketch */}
                  <div className="about__tool">
                    <span className="about__tool-tooltip">Sketch</span>
                    <svg viewBox="0 0 24 24" fill="#F7B500" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 9l8 13 8-13-8-7zm0 0l-4.5 7h9L12 2z" />
                    </svg>
                  </div>
                  {/* VS Code */}
                  <div className="about__tool">
                    <span className="about__tool-tooltip">VS Code</span>
                    <svg viewBox="0 0 24 24" fill="#007ACC" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 2L8.3 11.5 4 8l-2 1.5v5L4 16l4.3-3.5L17.5 22l4.5-2V4L17.5 2zM6 14.3L3.5 12 6 9.7V14.3zM17 18.1l-7-5.5V11.4l7-5.5v12.2z" />
                    </svg>
                  </div>
                  {/* Notion */}
                  <div className="about__tool">
                    <span className="about__tool-tooltip">Notion</span>
                    <svg viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4.5A2.5 2.5 0 016.5 2H14l6 6v9.5a2.5 2.5 0 01-2.5 2.5H6.5A2.5 2.5 0 014 17.5V4.5zM13 3v5h5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__skills reveal reveal-delay-2">
              <div className="about__skill-group">
                <h3>Research &amp; Strategy</h3>
                <div className="about__tags">
                  <span className="about__tag">User Research</span>
                  <span className="about__tag">Personas</span>
                  <span className="about__tag">Journey Mapping</span>
                  <span className="about__tag">Competitive Analysis</span>
                  <span className="about__tag">Information Architecture</span>
                </div>
              </div>
              <div className="about__skill-group">
                <h3>Design &amp; Prototyping</h3>
                <div className="about__tags">
                  <span className="about__tag">Wireframing</span>
                  <span className="about__tag">UI Design</span>
                  <span className="about__tag">Prototyping</span>
                  <span className="about__tag">Design Systems</span>
                  <span className="about__tag">Responsive Design</span>
                  <span className="about__tag">Interaction Design</span>
                </div>
              </div>
              <div className="about__skill-group">
                <h3>Frontend &amp; Development</h3>
                <div className="about__tags">
                  <span className="about__tag">HTML / CSS</span>
                  <span className="about__tag">JavaScript</span>
                  <span className="about__tag">React Basics</span>
                  <span className="about__tag">Accessibility</span>
                </div>
              </div>
              <div className="about__skill-group">
                <h3>Soft Skills</h3>
                <div className="about__tags">
                  <span className="about__tag">Design Thinking</span>
                  <span className="about__tag">Cross-functional Collaboration</span>
                  <span className="about__tag">Stakeholder Management</span>
                  <span className="about__tag">Usability Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section className="section" id="projects">
        <div className="container">
          <div className="reveal">
            <span className="section__label">Featured Work</span>
            <h2 className="section__title">Selected projects</h2>
            <p className="section__subtitle">
              Each project represents a thoughtful design process — from research and strategy to polished interfaces and real impact.
            </p>
          </div>

          <div className="projects__grid">
            {/* Project 1 */}
            <Link href="/fontora" className="project-card reveal reveal-delay-1">
              <div className="project-card__thumb">
                <div className="project-card__thumb-inner" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src="/assets/Fontora_assets/display.png" alt="Fontora Project Display Card" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">Fontora</h3>
                <p className="project-card__desc">Designing the AI That Thinks Like a Designer. A typography assistant in your pocket.</p>
                <p className="project-card__role">Solo UX Product Designer</p>
                <div className="project-card__tags">
                  <span className="project-card__tag">UI/UX Design</span>
                  <span className="project-card__tag">AI</span>
                  <span className="project-card__tag">Typography</span>
                </div>
              </div>
              <div className="project-card__arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className="section section--alt" id="contact">
        <div className="container">
          <div className="reveal">
            <span className="section__label">Get in Touch</span>
            <h2 className="section__title">Let&apos;s create something<br />great together.</h2>
          </div>

          <div className="contact__grid">
            <div className="contact__info reveal reveal-delay-1">
              <p className="contact__text">
                I&apos;m always excited to connect with new people, discuss design challenges, or explore
                collaboration opportunities. Whether you have a project in mind or just want to say
                hello — I&apos;d love to hear from you.
              </p>
              <div className="contact__details">
                <div className="contact__detail">
                  <div className="contact__detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span>hello@yourportfolio.com</span>
                </div>
                <div className="contact__detail">
                  <div className="contact__detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span>Open to remote &amp; relocation</span>
                </div>
              </div>
              <div className="contact__socials">
                <a href="#" className="contact__social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="#" className="contact__social" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 1.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 6.061-2.207 6.061zM2.972 9.59h3.363c3.104 0 3.164-3.545 0-3.545H2.972v3.545zm0 4.31v3.969h3.572c3.636 0 3.508-3.969 0-3.969H2.972z" /></svg>
                </a>
                <a href="#" className="contact__social" aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zM2.034 10.1c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.647 14.555 1.62 12 1.62c-.824 0-1.63.1-2.4.282v.15zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" /></svg>
                </a>
                <a href="#" className="contact__social" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              </div>
            </div>

            {/* ===== CONTACT FORM (connected to Supabase via API) ===== */}
            <form className="contact__form reveal reveal-delay-2" id="contactForm" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  disabled={formStatus === 'loading'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  disabled={formStatus === 'loading'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={handleFormChange}
                  disabled={formStatus === 'loading'}
                ></textarea>
              </div>

              {/* Feedback message */}
              {formMessage && (
                <div className={`form-feedback form-feedback--${formStatus}`}>
                  {formMessage}
                </div>
              )}

              <button
                type="submit"
                className="btn btn--primary"
                disabled={formStatus === 'loading' || formStatus === 'success'}
                style={formStatus === 'success' ? { background: '#27CA40', boxShadow: '0 4px 16px rgba(39,202,64,0.3)' } : {}}
              >
                {formStatus === 'loading' ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__top">
            <a href="#hero" className="footer__brand">nabiha<span>abid.</span></a>
            <div className="footer__socials">
              <a href="mailto:hello@yourportfolio.com" className="footer__social" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/nabiha-abid-29578a20b/" className="footer__social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://www.behance.net/nabihaabid2" className="footer__social" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 1.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 6.061-2.207 6.061zM2.972 9.59h3.363c3.104 0 3.164-3.545 0-3.545H2.972v3.545zm0 4.31v3.969h3.572c3.636 0 3.508-3.969 0-3.969H2.972z" /></svg>
              </a>
            </div>
          </div>
          <div className="footer__links">
            <a href="#about" className="footer__link">About</a>
            <a href="#projects" className="footer__link">Projects</a>
            <a href="#contact" className="footer__link">Contact</a>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2026 Nabiha Abid. Designed with care.</p>
            <button className="footer__back-to-top" id="backToTop">
              Back to top
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" /><path d="m5 12 7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </footer>

      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
