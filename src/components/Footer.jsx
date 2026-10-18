import React from 'react';
import './Footer.css';

export default function Footer() {
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

  const links = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Mentorship', target: 'services' },
    { label: 'Work', target: 'projects' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-grid">
        {/* Left Column Brand */}
        <div className="footer-brand">
          <h3>Sheraz Akhtar<span>.</span></h3>
          <p className="footer-brand-tagline">
            Empowering future software engineers with clarity on what, how, and why to learn.
          </p>
        </div>

        {/* Center Navigation Links */}
        <div className="footer-links">
          <h4 className="footer-links-title">Navigate</h4>
          <ul className="footer-links-list">
            {links.map((link) => (
              <li key={link.target} className="footer-link-item">
                <a href={`#${link.target}`} onClick={(e) => handleScrollTo(e, link.target)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Social Links */}
        <div className="footer-socials">
          <h4 className="footer-links-title">Connect</h4>
          <div className="footer-socials-list">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title={social.name}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2026 Sheraz Akhtar · Senior Developer, Mentor & Founder @ Featstack.
        </p>
      </div>
    </footer>
  );
}
