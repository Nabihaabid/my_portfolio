import Link from 'next/link';
import Script from 'next/script';
import PizzeriaInit from './PizzeriaInit';

export const metadata = {
  title: 'Pizzeria — Case Study | Portfolio',
  description: 'We Just Wanted Ordering Pizza to Feel as Good as Eating It',
};

export default function PizzeriaCaseStudy() {
  return (
    <>
      <PizzeriaInit />

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
            Pizzeria — We Just Wanted Ordering Pizza to Feel as Good as Eating It
          </h1>
          <p className="case-hero__subtitle reveal reveal-delay-2" style={{ fontWeight: 400, color: '#666', fontSize: '1.25rem' }}>
            Solo product design project · Mobile UX · Food &amp; Delivery
          </p>
        </div>
      </section>

      {/* ========== THE PROBLEM WAS BORING APPS ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Honestly? The Problem Was Boring Apps</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Pizza is exciting. It&apos;s Friday night energy, it&apos;s 2am with your friends, it&apos;s celebration food. So why does every pizza app feel like filing a tax return?</p>
            <p>Cluttered menus. Confusing customization. A checkout flow that makes you work for something you&apos;re about to eat in 20 minutes.</p>
            <p>Pizzeria started from one very simple belief: the app should feel as good as the first bite.</p>
          </div>
        </div>
      </section>

      {/* ========== FIGMA PROTOTYPE EMBED ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Interactive Prototype</h2>
          <div className="case-section__content reveal reveal-delay-1" style={{ width: '100%', height: '800px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #eaeaea', marginTop: '2rem' }}>
            <iframe 
              style={{ border: 'none', background: '#f8f8f8' }} 
              width="100%" 
              height="100%" 
              src="https://embed.figma.com/proto/4GZdcU2cStP1fiz9OanY0O/Pizza-Delivery-App?page-id=0%3A1&node-id=4001-6&p=f&viewport=26%2C235%2C0.03&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=4001%3A6&show-proto-sidebar=1&embed-host=share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ========== THE ONLY GOAL THAT MATTERED ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">The Only Goal That Mattered</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>No grand mission. No complex user research spiral. Just this — make a hungry person smile before the pizza even arrives.</p>
            <p>That meant the experience had to be fast, warm, and a little bit fun. Every screen needed to feel like it was excited to serve you, not just process your order.</p>
          </div>
        </div>
      </section>

      {/* ========== WHAT I FOCUSED ON ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">What I Focused On</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <ul style={{ marginTop: '1rem', marginBottom: '1.5rem', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><strong>A menu that makes you hungry, not confused</strong> — big visuals, clear descriptions, no decision fatigue. You should be able to pick your pizza in under a minute and feel good about it.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Customization that doesn&apos;t feel like a form</strong> — choosing your crust, toppings, and size should feel playful, not like filling out a spreadsheet.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>A checkout that gets out of the way</strong> — minimal steps, saved preferences, one tap to reorder your usual. Because nobody wants friction between them and their pizza.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Order tracking with personality</strong> — instead of a cold progress bar, something warm and alive. Your pizza deserves a better send-off than &quot;order confirmed.&quot;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== THE VIBE WAS EVERYTHING ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">The Vibe Was Everything</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Pizzeria isn&apos;t trying to disrupt the food industry. It&apos;s not an AI revolution. It&apos;s just a really good time ordering a really good pizza.</p>
            <p>The color palette is warm. The copy is playful. The interactions are satisfying. Every little detail — the button press, the confirmation screen, the tracking page — was designed to give the customer a small hit of joy before the big one arrives at their door.</p>
          </div>
        </div>
      </section>

      {/* ========== WHAT THIS TAUGHT ME ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">What This Taught Me</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Sometimes the brief is simple and that&apos;s the hardest kind to get right. When there&apos;s no complex problem to solve, the design itself has to carry the experience. Every visual decision, every word, every micro-interaction becomes load-bearing.</p>
            <p>Pizzeria taught me that delight is a design goal — not a bonus feature you add at the end.</p>
          </div>
        </div>
      </section>

      {/* ========== CLOSING ========== */}
      <section className="case-section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <h2 className="case-section__title reveal">Closing</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Solo concept project. Prototypes in Figma.</p>
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
