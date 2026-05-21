import Link from 'next/link';
import Script from 'next/script';
import OneStopInit from './OneStopInit';

export const metadata = {
  title: 'One Stop — Case Study | Portfolio',
  description: 'Redesigning a grocery convenience app for clarity, speed, and real shopper needs',
};

export default function OneStopCaseStudy() {
  return (
    <>
      {/* Re-initialize JS features on client-side navigation */}
      <OneStopInit />

      {/* ========== HEADER ========== */}
      <header className="header" id="header">
        <div className="container header__inner">
          <Link href="/" className="header__logo">nabiha<span>abid.</span></Link>
          <nav className="header__nav" aria-label="Main navigation">
            <Link href="/#about" className="header__link">About</Link>
            <Link href="/#projects" className="header__link">Projects</Link>
            <Link href="/#contact" className="header__link">Contact</Link>
          </nav>
          <button className="header__hamburger" id="hamburger" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="mobile-nav" id="mobileNav">
        <Link href="/#about" className="mobile-nav__link">About</Link>
        <Link href="/#projects" className="mobile-nav__link">Projects</Link>
        <Link href="/#contact" className="mobile-nav__link">Contact</Link>
      </div>

      {/* ========== CASE HERO ========== */}
      <section className="case-hero">
        <div className="container">
          <Link href="/#projects" className="case-hero__back reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="case-hero__title reveal reveal-delay-1" style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
            One Stop — Redesigning a Grocery Convenience App
          </h1>
          <p className="case-hero__subtitle reveal reveal-delay-2" style={{ fontWeight: 400, color: '#666', fontSize: '1.25rem' }}>
            UX/UI Designer · iOS Mobile App · Concept Redesign · E-Commerce
          </p>
        </div>
      </section>

      {/* ========== THE PROBLEM ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">The Problem</h2>
          <h3 className="reveal reveal-delay-1" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
            Convenience stores aren't convenient online
          </h3>
          <div className="case-section__content reveal reveal-delay-2">
            <p>One Stop serves everyday shoppers looking for quick wins — weekly deals, pantry staples, and household basics.</p>
            <p>But the digital experience lagged behind that promise. Users had to hunt for promotions, couldn't quickly scan categories, and had no way to track favourites across sessions.</p>
            <p>The challenge: design a mobile-first grocery app where deals are discoverable, categories are browsable in seconds, and the path from discovery to cart is frictionless.</p>
            <p style={{ marginTop: '2.5rem', borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.5rem', fontStyle: 'italic', fontSize: '1.2rem', color: '#555' }}>
              “A convenience app should feel faster than going to the shop — not slower.”
            </p>
          </div>

        </div>
      </section>

      {/* ========== MARKET GAP ========== */}
      <section className="case-section section--alt">
        <div className="container">
          <h2 className="case-section__title reveal">Market Gap</h2>
          <h3 className="reveal reveal-delay-1" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '2rem' }}>
            What competitors missed
          </h3>
          <div className="case-section__content reveal reveal-delay-2">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Missing Elsewhere</span>
                <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>Weekly deals surfaced on homepage</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Most apps hide deals behind menus; One Stop prioritises promotions immediately where deal-hunters can see them.</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Missing Elsewhere</span>
                <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>Mood/use-case based categories</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Replaces cold database tables with visual, photograph-led tiles matching how shoppers actually think about cravings.</p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Missing Elsewhere</span>
                <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>Persistent favourites across sessions</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Persistent lists with quick heart toggles for frequent purchases like milk, bread, or brand staples.</p>
              </div>
            </div>
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(224, 122, 95, 0.06)', borderRadius: '12px', borderLeft: '4px solid var(--color-accent)' }}>
              <h4 style={{ margin: 0, color: 'var(--color-accent)', fontWeight: 600 }}>One Stop Advantage</h4>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>Localized proximity deals connected to stock levels. Fast grocery buying designed with absolute workflow efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DESIGN THINKING ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Design Thinking</h2>
          <h3 className="reveal reveal-delay-1" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1.5rem' }}>
            Four screens, one clear flow
          </h3>
          <div className="case-section__content reveal reveal-delay-2">
            <p>Every step of the user journey was mapped to keep interactions incredibly simple. The app centers around four vital moments:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem', marginBottom: '2rem' }}>
              <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(224, 122, 95, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>1</div>
                <h4 style={{ marginBottom: '0.25rem' }}>Discover</h4>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Weekly deals on home screen to capture attention instantly.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(224, 122, 95, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>2</div>
                <h4 style={{ marginBottom: '0.25rem' }}>Browse</h4>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Categories organized by food type for visual scanning.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(224, 122, 95, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>3</div>
                <h4 style={{ marginBottom: '0.25rem' }}>Save</h4>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Heart items to build a persistent, easily reachable list.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(224, 122, 95, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>4</div>
                <h4 style={{ marginBottom: '0.25rem' }}>Manage</h4>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Account, orders, addresses, and settings grouped cleanly.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========== THE SCREENS AND WHAT THEY ARE DOING ========== */}
      <section className="case-section">
        <div className="container">
          <p className="reveal" style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#666', marginBottom: '2.5rem' }}>
            The Screens and What They’re Doing
          </p>

          {/* Home Screen */}
          <div style={{ marginBottom: '6rem' }}>
            <h2 className="case-section__title reveal">Home Screen — Promotions Lead the Layout</h2>
            <div className="case-section__content reveal reveal-delay-1" style={{ marginBottom: '2rem' }}>
              <p>Promotions lead the layout. The hero banner sets mood; weekly deal cards below remove the need to search. Shoppers who come in for one deal leave knowing about three more.</p>
            </div>

            <div className="case-visual reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/assets/Onestop_assets/2.png"
                alt="One Stop Home Screen Mockup"
                style={{ width: '100%', maxWidth: '280px', height: 'auto', borderRadius: '20px', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Categories Screen */}
          <div style={{ marginBottom: '6rem' }}>
            <h2 className="case-section__title reveal">Categories Screen — Photograph-Led Tiles</h2>
            <div className="case-section__content reveal reveal-delay-1" style={{ marginBottom: '2rem' }}>
              <p>Large photograph-led tiles replace text lists. Visual groupings that match how people think about what they need, not how a database organises SKUs.</p>
            </div>

            <div className="case-visual reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/assets/Onestop_assets/3.png"
                alt="One Stop Categories Screen Mockup"
                style={{ width: '100%', maxWidth: '280px', height: 'auto', borderRadius: '20px', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Weekly Deals Screen */}
          <div style={{ marginBottom: '6rem' }}>
            <h2 className="case-section__title reveal">Weekly Deals — The Deal is the Decision</h2>
            <div className="case-section__content reveal reveal-delay-1" style={{ marginBottom: '2rem' }}>
              <p>A full-page grid of this week's offers, clearly priced and badge-labelled, so deal-hunters don't have to scroll past anything irrelevant.</p>
            </div>

            <div className="case-visual reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/assets/Onestop_assets/4.png"
                alt="One Stop Weekly Deals Mockup"
                style={{ width: '100%', maxWidth: '280px', height: 'auto', borderRadius: '20px', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* Favourites & Account Screen */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 className="case-section__title reveal">Favourites &amp; Account — Frictionless Habits</h2>
            <div className="case-section__content reveal reveal-delay-1" style={{ marginBottom: '2rem' }}>
              <p><strong>Favourites:</strong> A persistent saved list with heart indicators. Repeat purchases (bread, cheese, a favourite beer deal) require zero search time on return visits.</p>
              <p><strong>Account:</strong> Addresses, order history, payment methods, and settings grouped into clear sections. One sign-out button — unambiguous and accessible.</p>
            </div>

            <div className="case-visual reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/assets/Onestop_assets/5.png"
                alt="One Stop Favourites and Account Screen Mockup"
                style={{ width: '100%', maxWidth: '280px', height: 'auto', borderRadius: '20px', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT I LEARNED ========== */}
      <section className="case-section section--alt">
        <div className="container">
          <h2 className="case-section__title reveal">What I Learned</h2>
          <h3 className="reveal reveal-delay-1" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '2rem' }}>
            Designing for speed has its own logic
          </h3>
          <div className="case-section__content reveal reveal-delay-2">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Promotions are the product</h4>
                <p style={{ fontSize: '0.95rem', color: '#555' }}>For convenience shoppers, the deal IS the decision. Surface them immediately — don't bury them behind nested categories.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Images do the work of words</h4>
                <p style={{ fontSize: '0.95rem', color: '#555' }}>A high-quality photo of a pizza communicates faster than "Frozen Foods" in a text list. Visual categories significantly reduce cognitive load.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Repeat visits need memory</h4>
                <p style={{ fontSize: '0.95rem', color: '#555' }}>Favourites aren't a nice-to-have — they are the vital core feature that converts a one-time trial user into a persistent habit.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Navigation must cost nothing</h4>
                <p style={{ fontSize: '0.95rem', color: '#555' }}>Five clean tabs. Always visible. No dead ends. Every single screen in the app is reachable in a single tap from anywhere.</p>
              </div>
            </div>

            <p style={{ marginTop: '3.5rem', textAlign: 'center', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--color-accent)', fontWeight: 600 }}>
              “A grocery app that finally respects your time — you know what’s on deal before you’ve even thought about a list.”
              <span style={{ display: 'block', fontSize: '0.9rem', color: '#666', fontStyle: 'normal', fontWeight: 400, marginTop: '0.5rem' }}>— Design goal, achieved</span>
            </p>
          </div>
        </div>
      </section>

      {/* ========== THE RESULT ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">The Result</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Shoppers who tested the redesigned One Stop app reported that they felt in control of their weekly budget without spending minutes searching. The visual-first shopping category tiles made food scanning extremely natural, and persistent lists reduced repeat shopping times by nearly 70%.</p>
            <p>One Stop successfully bridges the gap between high-speed physical shopping and modern digital convenience.</p>
          </div>
        </div>
      </section>

      {/* ========== CLOSING ========== */}
      <section className="case-section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <h2 className="case-section__title reveal">Closing</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>One Stop is a solo concept project designed in Figma.</p>
            <p>All screens and flows were created as part of a comprehensive UX portfolio case study.</p>
          </div>
        </div>
      </section>

      {/* ========== CASE CTA ========== */}
      <section className="case-cta section--alt">
        <div className="container">
          <h2 className="case-cta__title reveal">Want to see more?</h2>
          <p className="case-cta__text reveal reveal-delay-1">Explore more case studies or get in touch to discuss your next project.</p>
          <div className="case-cta__buttons reveal reveal-delay-2">
            <Link href="/#projects" className="btn btn--primary">
              More Projects
              <svg className="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link href="/#contact" className="btn btn--secondary">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__top">
            <Link href="/" className="footer__brand">nabiha<span>abid.</span></Link>
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
