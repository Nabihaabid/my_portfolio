import Link from 'next/link';
import Script from 'next/script';
import FontoraInit from './FontoraInit';

export const metadata = {
  title: 'Fontora — Case Study | Portfolio',
  description: 'Designing the AI That Thinks Like a Designer',
};

export default function FontoraCaseStudy() {
  return (
    <>
      {/* Re-initialize JS features on client-side navigation */}
      <FontoraInit />

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
            Fontora — Designing the AI That Thinks Like a Designer
          </h1>
          <p className="case-hero__subtitle reveal reveal-delay-2" style={{ fontWeight: 400, color: '#666', fontSize: '1.25rem' }}>
            A solo UX product design project · UI/UX Design · AI · Typography
          </p>
        </div>
      </section>

      {/* Case Study Cover Visual - IMAGE_1 Full Width */}
      <div className="container">
        <div className="case-visual reveal">
          <img 
            src="/assets/Fontora_assets/1.png" 
            alt="Fontora Hero Image" 
            style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
          />
        </div>
      </div>

      {/* ========== THE PROBLEM I COULDN'T IGNORE ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">The Problem I Couldn’t Ignore</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Every designer knows the feeling — you open a blank canvas, you know the vibe you’re going for, and then you spend the next two hours falling into a font rabbit hole that leads nowhere.</p>
            <p>I’ve lived this loop. On a branding project, I caught myself switching between Google Fonts, Typewolf, and three browser tabs of inspiration boards just to decide between two typefaces.</p>
            <p>The fonts weren’t hard to find — the decision was.</p>
            <p>There was no tool that understood context, no AI that could read the mood of a project and say: here, try these.</p>
            <p>That frustration became Fontora.</p>
            <p style={{ marginTop: '2rem' }}>
              <em style={{ fontWeight: 600 }}>The core question:</em> Why does picking two fonts that work together still feel like guesswork in 2024?
            </p>
          </div>
          
          <div className="case-visual reveal reveal-delay-2" style={{ marginTop: '3rem' }}>
            <img 
              src="/assets/Fontora_assets/2.png" 
              alt="The typography decision loop" 
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* ========== ME, THE USER ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Me, the User</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>I designed Fontora for myself first — because I knew my pain points intimately.</p>
            <p><em>Nabiha Abid, 22 — UI/UX Designer, typography obsessive.</em></p>
            <p>I love fonts. I hate how long choosing them takes. My daily struggles looked like this:</p>
            <ul style={{ marginTop: '1rem', marginBottom: '1.5rem', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
              <li>Endless scrolling with no way to filter by mood or project context</li>
              <li>Pairing by gut feel, then second-guessing it for an hour</li>
              <li>Jumping between tools just to preview a combination in real text</li>
              <li>No guidance — just an ocean of options and my own judgment</li>
            </ul>
            <p>Designing for myself gave me a cheat code: I never had to guess what the user wanted. I was the user. Every decision I made was validated against a real, recurring frustration.</p>
          </div>
        </div>
      </section>

      {/* ========== THE DESIGN THINKING ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">The Design Thinking: Four Steps</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>I mapped the ideal designer workflow and stripped it down to four moments:</p>
            <ol style={{ marginTop: '1rem', marginBottom: '1.5rem', listStyleType: 'decimal', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '1rem' }}><strong>Discover</strong> — Describe your project, mood, or style in plain language. Fontora’s AI interprets the intent, not just keywords.</li>
              <li style={{ marginBottom: '1rem' }}><strong>Select</strong> — Browse pairings generated specifically for your input. Not a generic list — a curated set tuned to your brief.</li>
              <li style={{ marginBottom: '1rem' }}><strong>Preview</strong> — See your fonts applied to real text, instantly. No mockups, no copy-pasting into Figma to check.</li>
              <li style={{ marginBottom: '1rem' }}><strong>Save & Export</strong> — Lock in your choices and push them directly to your design tools.</li>
            </ol>
            <p>The logic was simple: every extra step a designer has to take is a moment where they lose momentum. I designed to protect that momentum.</p>
          </div>
          
          <div className="case-visual reveal reveal-delay-2" style={{ marginTop: '3rem' }}>
            <img 
              src="/assets/Fontora_assets/3.png" 
              alt="4 step design thinking process" 
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* ========== MARKET ANALYSIS ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Market Analysis (And What Was Missing)</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <ul style={{ marginBottom: '1.5rem', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
              <li>Google Fonts → no pairing intelligence</li>
              <li>Fontjoy → lacks context</li>
              <li>Canva Fonts → locked ecosystem</li>
              <li>Typewolf → inspiration only</li>
            </ul>
            <p style={{ fontWeight: 600 }}>Gap: No full workflow from intent → decision → export</p>
          </div>
        </div>
      </section>

      {/* ========== AUTHENTICATION ========== */}
      <section className="case-section">
        <div className="container">
          <p className="reveal" style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#666', marginBottom: '2rem' }}>
            The Screens and What They’re Doing
          </p>
          
          <h2 className="case-section__title reveal">Authentication — Remove the Wall, Not the Guard</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>The sign-up screen is minimal by design. One field, social auth options, a bold yellow CTA. The visual weight of the button tells users exactly where to go. The goal: get designers into the product before they talk themselves out of trying it.</p>
          </div>
          
          {/* IMAGE_4 -> centered (40% width) */}
          <div className="case-visual reveal reveal-delay-2" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/assets/Fontora_assets/4.png" 
              alt="Authentication screens" 
              style={{ width: '40%', minWidth: '300px', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* ========== FONT EXPLORATION ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Font Exploration — Curated, Not Overwhelming</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Font cards are grouped by mood and use case — not alphabetically, not by popularity. This was a deliberate UX decision: a designer briefed on a “bold editorial” project shouldn’t have to filter past “friendly” or “minimal” options. The system pre-filters based on their input.</p>
          </div>
          
          {/* IMAGE_5 -> full-width */}
          <div className="case-visual reveal reveal-delay-2" style={{ marginTop: '3rem' }}>
            <img 
              src="/assets/Fontora_assets/5.png" 
              alt="Font grouping by mood" 
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
          
          {/* IMAGE_6 -> centered (60% width) */}
          <div className="case-visual reveal reveal-delay-3" style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/assets/Fontora_assets/6.png" 
              alt="Font exploration detailed UI" 
              style={{ width: '60%', minWidth: '320px', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* ========== REAL-TIME PREVIEW ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Real-Time Preview — See It Before You Commit</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Showing a font name means nothing. Showing it set in a headline, a subheading, and a paragraph of body copy — that’s what makes a decision feel confident. The preview screen renders combinations in real-time across multiple type scales so designers can evaluate hierarchy, not just aesthetics.</p>
          </div>
          
          {/* IMAGE_7 -> centered (70% width) */}
          <div className="case-visual reveal reveal-delay-2" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/assets/Fontora_assets/7.png" 
              alt="Real-time hierarchy preview" 
              style={{ width: '70%', minWidth: '320px', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* ========== SIDE-BY-SIDE COMPARISON ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Side-by-Side Comparison — Decide Faster</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>One of the biggest time-sinks in font selection is context-switching — you preview one pair, mentally store it, then preview another and try to compare from memory. Comparison mode eliminates that by showing two (or more) pairings side by side against identical content. The decision becomes visual, not cognitive.</p>
          </div>
          
          {/* IMAGE_8 -> full-width */}
          <div className="case-visual reveal reveal-delay-2" style={{ marginTop: '3rem' }}>
            <img 
              src="/assets/Fontora_assets/8.png" 
              alt="Visual comparison component" 
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Pricing — Honest and Scannable</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>The free tier is visually prominent — not buried. This was intentional: designers are skeptical of new tools. Letting them explore without a credit card is a trust signal, not a revenue sacrifice. The premium tier is presented as an upgrade, never a gate.</p>
          </div>
          
          {/* IMAGE_9 -> full-width */}
          <div className="case-visual reveal reveal-delay-2" style={{ marginTop: '3rem' }}>
            <img 
              src="/assets/Fontora_assets/9.png" 
              alt="Pricing structure" 
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* ========== WHAT I LEARNED ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">What I Learned Building Fontora Alone</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Working solo meant every decision landed on me — and every mistake was mine to catch. Here’s what the process actually taught me:</p>
            <ul style={{ marginTop: '1.5rem', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><strong>AI should guide, not govern.</strong> Every suggestion Fontora makes can be overridden, tweaked, or ignored. Designers need to feel in control; the AI is the assistant, not the art director.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Previews aren’t a feature — they’re the product.</strong> Without real-time rendering, Fontora is just another font list. The preview is where the value becomes tangible.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Workflow integration is the difference between a tool and a habit.</strong> A great suggestion that still requires five manual steps to implement won’t change anyone’s behaviour. Export and save had to be frictionless.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Scope discipline is a design skill.</strong> I had ideas for a style quiz, a mood board generator, and collaborative sharing. I built none of them in V1. The core had to work perfectly first.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== THE RESULT ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">The Result</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Designers who tested Fontora described it as having “a typography assistant in your pocket.” Not a search engine. Not a mood board. An assistant — something that understands intent and responds with direction.</p>
            <p>That’s the product I set out to build. And it’s the experience I’ll keep designing toward.</p>
          </div>
        </div>
      </section>

      {/* ========== CLOSING ========== */}
      <section className="case-section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <h2 className="case-section__title reveal">Closing</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Fontora is a solo concept project designed in Figma.</p>
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
