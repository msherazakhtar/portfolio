import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section section-white">
      <div className="container">
        <div className="about-grid">
          {/* Left Column Profile Photo */}
          <div className="about-card-container reveal-element reveal-card-3d">
            <div className="about-monogram-card">
              <div className="about-card-badge label-tag">Rawalpindi, PK</div>
              <img src="/profile.png" alt="Sheraz Akhtar" className="about-profile-img" />
            </div>
          </div>

          {/* Right Column Bio Details */}
          <div className="about-content">
            <div className="reveal-element">
              <h2 className="label-tag" style={{ color: 'var(--color-vibrant-orange)', marginBottom: '16px' }}>About Me</h2>
              <div className="about-lead">
                "I don't just write code. I build systems that businesses can depend on."
              </div>
              
              <p className="about-paragraph">
                Based in Rawalpindi, Pakistan, I work remotely as a Senior Backend Developer specializing in Java and Spring Boot. For over 3 years, I've designed, developed, and maintained robust, production-level backend architectures for high-traffic enterprise systems and SaaS startups.
              </p>
              
              <p className="about-paragraph">
                My core expertise lies in crafting scalable database layouts, building responsive REST APIs, and designing efficient solutions for complex domains. I have hands-on experience delivering mission-critical applications across various sectors, including healthcare record platforms (EHR), logistics routing portals, point-of-sale solutions, and key internal management utilities.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="about-stats">
              <div className="stat-box reveal-element reveal-delay-1">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years of Enterprise Experience</div>
              </div>
              <div className="stat-box reveal-element reveal-delay-2">
                <div className="stat-number">85%</div>
                <div className="stat-label">Error Log Reduction (EHR)</div>
              </div>
              <div className="stat-box reveal-element reveal-delay-3">
                <div className="stat-number">100%</div>
                <div className="stat-label">SaaS & Enterprise Ready</div>
              </div>
            </div>

            {/* Download Link */}
            <div className="resume-download-wrapper reveal-element reveal-delay-3">
              <a href="https://drive.google.com/file/d/19bSmLgXciu9G976m0-ROxV1Ja35PlL0r/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-link-orange">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
