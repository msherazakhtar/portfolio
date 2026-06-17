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
      url: 'https://www.instagram.com/sherazai.exe/',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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
          <div className="hero-subtext">
            Java · Spring Boot · PostgreSQL · REST APIs
          </div>
          
          <h1 className="hero-title">
            Building <span className="highlight-orange">Scalable</span> Backend Systems
          </h1>

          <p className="hero-tagline">
            Backend systems for SaaS founders who can't afford to rebuild later. Scalable systems that grow with your business.
          </p>

          <div className="hero-ctas">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="btn btn-filled-orange"
            >
              Discuss Your Project
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="btn btn-outline-blue"
            >
              See My Work
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
