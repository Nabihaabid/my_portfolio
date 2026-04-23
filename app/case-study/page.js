import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'FinTrack Dashboard — Case Study | Portfolio',
  description: 'UX case study: Redesigning the financial tracking experience for a SaaS platform.',
};

export default function CaseStudyPage() {
  return (
    <>
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
          <Link href="/" className="header__logo">port<span>folio.</span></Link>
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
          <h1 className="case-hero__title reveal reveal-delay-1">FinTrack Dashboard</h1>
          <p className="case-hero__subtitle reveal reveal-delay-2">
            Redesigning the financial tracking experience to empower users with clear data insights and streamlined workflows.
          </p>
          <div className="case-hero__meta reveal reveal-delay-3">
            <div className="case-meta-item">
              <span className="case-meta-item__label">Role</span>
              <span className="case-meta-item__value">Lead UI/UX Designer</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-item__label">Timeline</span>
              <span className="case-meta-item__value">12 Weeks</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-item__label">Tools</span>
              <span className="case-meta-item__value">Figma, FigJam, Maze</span>
            </div>
            <div className="case-meta-item">
              <span className="case-meta-item__label">Team</span>
              <span className="case-meta-item__value">2 Designers, 4 Engineers, 1 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Cover Visual */}
      <div className="container">
        <div className="case-visual reveal">
          <div className="case-visual__placeholder" style={{ background: 'linear-gradient(135deg, #F3E8FF, #E8F4FD, #FFF7ED)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8" /><path d="M12 17v4" />
            </svg>
            <span>Dashboard Overview — High-fidelity Mockup</span>
          </div>
        </div>
      </div>

      {/* ========== OVERVIEW ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Project Overview</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>
              FinTrack is a SaaS financial management platform used by small-to-medium businesses to track
              expenses, revenue, and financial health. Despite strong backend capabilities, the existing
              dashboard was cluttered, difficult to navigate, and failed to surface actionable insights.
            </p>
            <p>
              The goal was to redesign the dashboard experience from the ground up — making financial data
              easier to understand, tasks faster to complete, and the overall interface feel modern and trustworthy.
            </p>
          </div>
        </div>
      </section>

      {/* ========== PROBLEM STATEMENT ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Problem Statement</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Through stakeholder interviews and user feedback analysis, we identified several critical pain points:</p>
            <ul>
              <li>Users struggled to find key financial metrics — important data was buried under multiple clicks</li>
              <li>The navigation structure was confusing, leading to high drop-off rates on core workflows</li>
              <li>Visual design felt dated and lacked trust signals essential for financial products</li>
              <li>Mobile experience was nearly unusable, limiting on-the-go access for business owners</li>
            </ul>
            <p>
              The business challenge was clear: user retention had dropped 18% over the past quarter,
              and customer support tickets related to &quot;finding features&quot; had increased significantly.
            </p>
          </div>
        </div>
      </section>

      {/* ========== RESEARCH ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Research &amp; Discovery</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>I conducted a multi-phase research effort to deeply understand the user landscape:</p>
            <ul>
              <li><strong>User Interviews:</strong> 12 in-depth interviews with existing users across different business sizes</li>
              <li><strong>Competitive Analysis:</strong> Evaluated 8 competing financial tools (QuickBooks, Wave, Xero, etc.)</li>
              <li><strong>Analytics Review:</strong> Analyzed usage patterns, drop-off points, and feature adoption rates</li>
              <li><strong>Heuristic Evaluation:</strong> Identified 23 usability issues across the existing dashboard</li>
            </ul>
          </div>

          <h3 className="case-section__title reveal" style={{ fontSize: '1.25rem', marginTop: '2rem' }}>Key Personas</h3>
          <div className="persona-cards reveal reveal-delay-1">
            <div className="persona-card">
              <h4 className="persona-card__name">Sarah Chen</h4>
              <p className="persona-card__role">Small Business Owner, 34</p>
              <p className="persona-card__quote">&quot;I just need to see my cash flow at a glance without clicking through 5 screens.&quot;</p>
            </div>
            <div className="persona-card">
              <h4 className="persona-card__name">Marcus Johnson</h4>
              <p className="persona-card__role">Freelance Accountant, 42</p>
              <p className="persona-card__quote">&quot;I manage multiple client accounts — switching between them is painfully slow.&quot;</p>
            </div>
          </div>

          <div className="case-visual reveal">
            <div className="case-visual__placeholder" style={{ background: 'linear-gradient(135deg, #ECFDF5, #F0FDF4, #F0F9FF)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3v18h18" /><path d="m7 16 4-8 4 4 5-6" />
              </svg>
              <span>User Journey Map — Current State Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== IDEATION ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Ideation &amp; Wireframes</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>Based on research insights, I developed information architecture for the new dashboard that prioritized:</p>
            <ul>
              <li>At-a-glance financial overview as the default landing view</li>
              <li>Progressive disclosure — showing summary first, with drill-down capability</li>
              <li>Quick-action bar for the 5 most common tasks (identified from usage analytics)</li>
              <li>Consistent navigation pattern that works across desktop and mobile</li>
            </ul>
            <p>I created 40+ wireframes exploring different layout approaches, then narrowed down to 3 concepts through team design critiques and lightweight user testing with 5 participants.</p>
          </div>
          <div className="case-visual reveal">
            <div className="case-visual__placeholder" style={{ background: 'linear-gradient(135deg, #F5F0EB, #FAFAF8, #F0ECE6)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
              </svg>
              <span>Low-fidelity Wireframes — Dashboard Explorations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== UI DESIGN ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">UI Design &amp; Design System</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>The visual direction was informed by the need for clarity, trust, and professionalism. I developed a comprehensive design system that could scale across the entire product:</p>
            <ul>
              <li><strong>Color System:</strong> A calming blue-based palette with high-contrast data visualization colors</li>
              <li><strong>Typography:</strong> Inter for UI, with a clear type scale from 12px to 32px</li>
              <li><strong>Components:</strong> 45+ reusable components in Figma with variants and auto-layout</li>
              <li><strong>Data Visualization:</strong> Custom chart components designed for financial data legibility</li>
            </ul>
          </div>
          <div className="case-visual reveal">
            <div className="case-visual__placeholder" style={{ background: 'linear-gradient(135deg, #EDE9FE, #E0E7FF, #F3E8FF)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3a9 9 0 1 0 9 9" /><path d="M12 3v9l6.3-3.6" />
              </svg>
              <span>High-fidelity Dashboard Design &amp; Component Library</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== USABILITY TESTING ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Usability Testing &amp; Iteration</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>I conducted two rounds of usability testing with a total of 10 participants:</p>
            <ul>
              <li><strong>Round 1 (5 users):</strong> Tested core navigation, data comprehension, and task completion for 5 key scenarios</li>
              <li><strong>Round 2 (5 users):</strong> Validated iterations and tested mobile experience</li>
            </ul>
            <p>Key findings and iterations:</p>
            <ul>
              <li>Users wanted a customizable dashboard — we added drag-and-drop widget arrangement</li>
              <li>The date range picker was confusing — simplified to preset ranges with custom option</li>
              <li>Chart tooltips needed more context — added comparison data (vs. previous period)</li>
              <li>Mobile card layout was too dense — increased spacing and added collapsible sections</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== RESULTS ========== */}
      <section className="case-section">
        <div className="container">
          <h2 className="case-section__title reveal">Results &amp; Impact</h2>
          <div className="case-section__content reveal reveal-delay-1">
            <p>After launching the redesigned dashboard, we tracked metrics over a 3-month period and observed significant improvements across all key performance indicators:</p>
          </div>
          <div className="case-stats reveal reveal-delay-2">
            <div className="case-stat">
              <div className="case-stat__number">+32%</div>
              <div className="case-stat__label">User Retention Increase</div>
            </div>
            <div className="case-stat">
              <div className="case-stat__number">-45%</div>
              <div className="case-stat__label">Support Tickets Reduced</div>
            </div>
            <div className="case-stat">
              <div className="case-stat__number">4.6/5</div>
              <div className="case-stat__label">User Satisfaction Score</div>
            </div>
          </div>
          <div className="case-section__content reveal reveal-delay-3" style={{ marginTop: '2.5rem' }}>
            <p><strong>Key Learnings:</strong></p>
            <ul>
              <li>Early and continuous user involvement prevented costly design pivots late in the process</li>
              <li>A robust design system accelerated development handoff by 3x compared to previous projects</li>
              <li>Progressive disclosure was the single most impactful pattern for reducing cognitive load</li>
              <li>Mobile-first thinking improved the desktop experience too — constraint breeds creativity</li>
            </ul>
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
            <Link href="/" className="footer__brand">port<span>folio.</span></Link>
            <div className="footer__socials">
              <a href="mailto:hello@yourportfolio.com" className="footer__social" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a href="#" className="footer__social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className="footer__social" aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zM2.034 10.1c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.647 14.555 1.62 12 1.62c-.824 0-1.63.1-2.4.282v.15zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" /></svg>
              </a>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2026 Portfolio. Designed with care.</p>
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
