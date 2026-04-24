import Link from 'next/link';
import Script from 'next/script';
import RephraimInit from './RephraimInit';

export const metadata = {
  title: 'Rephraim — Case Study | Portfolio',
  description: 'Because "Can You Send Me the Photos?" Deserved a Better Answer',
};

export default function RephraimCaseStudy() {
  return (
    <>
      <RephraimInit />

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
            Rephraim — Because &quot;Can You Send Me the Photos?&quot; Deserved a Better Answer
          </h1>
          <p className="case-hero__subtitle reveal reveal-delay-2" style={{ fontWeight: 400, color: '#666', fontSize: '1.25rem' }}>
            Solo product design project · Mobile UX · AI · Collaborative Photo Sharing
          </p>
        </div>
      </section>



      {/* ========== IT STARTED AT A PARTY ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">It Started at a Party</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Birthday dinner. 12 people. 300 photos. The night ends and someone says &quot;can you send me the pics?&quot; — and suddenly there are WhatsApp threads, expired Drive links, and one person who took the best shot on a device nobody can reach.</p>
            <p>This happens at every event. I got tired of it. So I asked the question nobody had fully answered: what if collecting shared memories was as effortless as taking them?</p>
            <p>That became Rephraim.</p>
          </div>
        </div>
      </section>

      {/* ========== THE PERSON I DESIGNED FOR ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">The Person I Designed For</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p><strong>Maryam. 21. Captures everything. Organizes nothing.</strong></p>
            <p>Three devices. 14,000 unorganized photos. Not lazy — just let down by tools that were never built for how she actually lives.</p>
            <p>Her frustrations were the brief: photos scattered across devices, manual tagging that takes forever, duplicates cluttering the good shots, and sharing that requires everyone to download yet another app.</p>
            <p>She didn&apos;t need another photo app. She needed one that thought alongside her.</p>
          </div>
          
          {/* Side-by-Side Images */}
          <div className="case-visual reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
            <img 
              src="/assets/Rephraim_assets/2.png" 
              alt="Rephraim Concept 1" 
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
            <img 
              src="/assets/Rephraim_assets/3.png" 
              alt="Rephraim Concept 2" 
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </div>
      </section>

      {/* ========== THE FIVE THINGS THAT HAD TO BE TRUE ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">The Five Things That Had to Be True</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>One sentence guided every decision: if sharing is instant and AI handles the organization, people will stop losing their memories.</p>
            <p>That led to five non-negotiables:</p>
            <ul style={{ marginTop: '1rem', marginBottom: '1.5rem', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><strong>QR Album Joining</strong> — Scan a code, you&apos;re in. No account, no install, no friction.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>AI Search</strong> — Type &quot;everyone by the cake&quot; and find exactly that. Natural language, not folder names.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Face Clustering</strong> — Photos group themselves by person. The album organizes without anyone touching it.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>Real-Time Collaboration</strong> — Everyone uploads to the same album, live, at the same time.</li>
              <li style={{ marginBottom: '0.75rem' }}><strong>AI Cleanup</strong> — Duplicates and blurry shots flagged automatically. Never deleted — always your call.</li>
            </ul>
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
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOzdmchw81d4wOHmyTiu8jt%2FPhotos-Management%3Fnode-id%3D186-130%26page-id%3D148%253A64%26starting-point-node-id%3D186%253A130%26t%3DlNnxvE8MVb4QomGB-1" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ========== WHAT THE MARKET WAS MISSING ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">What the Market Was Missing</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Google Photos is brilliant but personal. Event apps like Playlog are shareable but dumb. Apple Photos clusters beautifully but only if everyone owns an iPhone.</p>
            <p>Nobody had combined frictionless sharing with intelligent organization in one mobile-first product. That was the gap.</p>
          </div>
        </div>
      </section>

      {/* ========== ONE DESIGN PRINCIPLE THAT SHAPED EVERYTHING ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">One Design Principle That Shaped Everything</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>The cleanup feature nearly auto-deleted photos. I pulled it back — and I&apos;m glad I did.</p>
            <p>Testing showed users were protective of their photos, even the blurry ones. So the rule became: AI suggests, humans confirm. Every recommendation is surfaced, never enforced. The moment an app deletes something without asking, you lose trust forever.</p>
            <p>This principle ended up shaping the entire AI layer — face clustering, search results, duplicate flagging. All of it offers, none of it imposes.</p>
          </div>
        </div>
      </section>

      {/* ========== WHAT TESTING REVEALED ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">What Testing Revealed</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>QR entry removed the signup wall and guest participation jumped. Search made testers visibly emotional — finding a years-old photo in seconds felt like magic. And one behavior change stood out above everything else: people started putting their phones away at events, knowing the album would fill itself from everyone else.</p>
            <p>That&apos;s the best kind of UX win. One that changes how people act.</p>
          </div>
        </div>
      </section>

      {/* ========== WHAT I TOOK AWAY ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">What I Took Away</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Frictionless entry isn&apos;t polish — it&apos;s the product. Transparency is what makes AI feel safe. And the core has to be airtight before anything optional gets built.</p>
            <p>Rephraim started as frustration at a birthday dinner. It ended as a system that turns scattered memories into something you can actually find, share, and keep.</p>
          </div>
        </div>
      </section>

      {/* ========== CLOSING ========== */}
      <section className="case-section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <h2 className="case-section__title reveal">Closing</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Solo concept project. Prototypes in Figma, AI flows simulated with example datasets.</p>
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
