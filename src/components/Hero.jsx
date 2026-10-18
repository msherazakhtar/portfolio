import React from 'react';
import InteractiveCanvas from './InteractiveCanvas';
import './Hero.css';

export default function Hero() {
  const handleScrollTo = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      const headerOffset = 64; // shrink header size
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-sheraz-akhtar/',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'Github',
      url: 'https://github.com/msherazakhtar',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/evolvewithsheraz/',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'Featstack',
      url: 'https://featstack.co/',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="home" className="hero-section section-white">
      {/* Full width Canvas Background */}
      <div className="hero-canvas-background">
        <InteractiveCanvas />
      </div>

      {/* Social Sidebar fixed to screen (desktop only) */}
      <div className="social-sidebar">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            title={social.name}
          >
            {social.svg}
          </a>
        ))}
      </div>

      <div className="container">
        {/* Centered Hero Details */}
        <div className="hero-content reveal-element">
          {/* Social Proof Pill */}
          <div className="hero-social-proof-pill">
            <div className="avatar-stack">
              <div className="avatar-circle avatar-c1">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="avatar-circle avatar-c2">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="avatar-circle avatar-c3">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            <div className="social-proof-content">
              <span className="proof-star">★</span>
              <span className="proof-text">Mentoring 100+ Students & Graduates</span>
              <span className="proof-divider">|</span>
              <span className="proof-sub">Founder @ Featstack</span>
            </div>
          </div>
          
          <h1 className="hero-title">
            Guiding Future <span className="highlight-orange">Engineers</span> to Real-World Impact
          </h1>

          {/* The What · How · Why 3-Step Visual Flow */}
          <div className="hero-pillars-flow">
            <div className="pillar-step-badge pillar-what">
              <span className="pillar-num">1</span>
              <span className="pillar-label">What to Learn</span>
            </div>
            <div className="pillar-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="pillar-step-badge pillar-how">
              <span className="pillar-num">2</span>
              <span className="pillar-label">How to Master It</span>
            </div>
            <div className="pillar-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div className="pillar-step-badge pillar-why">
              <span className="pillar-num">3</span>
              <span className="pillar-label">Why It Matters</span>
            </div>
          </div>

          <p className="hero-tagline">
            Empowering students, beginners, and fresh graduates to break into IT & Computer Science. I cut through the noise to answer the 3 fundamental questions: What to learn, How to master it, and Why it matters in production.
          </p>

          <div className="hero-ctas">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="btn btn-filled-orange"
            >
              Book a 1-on-1 Guidance Session
            </a>
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, 'services')}
              className="btn btn-outline-blue"
            >
              Explore What I Teach
            </a>
          </div>

          {/* Mobile Social Row */}
          <div className="social-sidebar-mobile">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                title={social.name}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
