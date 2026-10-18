import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  // Monitor scroll for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor sections for active link highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Matches intersection at middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Mentorship', target: 'services' },
    { label: 'Work', target: 'projects' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(target);
    if (element) {
      const headerOffset = window.scrollY > 40 ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="logo-container">
          <img src="/logo-orange.png" alt="Sheraz Akhtar Logo" className="nav-logo-img" />
          <span className="logo-text">Sheraz Akhtar<span>.</span></span>
        </a>

        {/* Desktop & Mobile Navigation Menu */}
        <nav>
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.target}>
                <a
                  href={`#${link.target}`}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className={`nav-link ${activeSection === link.target ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close SVG Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger SVG Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
