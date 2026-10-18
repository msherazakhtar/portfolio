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
              <div className="about-card-badge label-tag">Technical Team lead @ Featstack</div>
              <img src="/profile.png" alt="Sheraz Akhtar" className="about-profile-img" />
            </div>
          </div>

          {/* Right Column Bio Details */}
          <div className="about-content">
            <div className="reveal-element">
              <h2 className="label-tag" style={{ color: 'var(--color-vibrant-orange)', marginBottom: '16px' }}>About Me</h2>
              <div className="about-lead">
                "I don't just teach code syntax. I teach how to think, architect, and grow as a real-world engineer."
              </div>
              
              <p className="about-paragraph">
                Based in Rawalpindi, Pakistan, I am a Senior Backend Developer, Tech Mentor, and Founder of Featstack. Over the past 3+ years, I have designed, built, and scaled high-traffic architectures in Java, Spring Boot, and PostgreSQL across logistics, enterprise platforms, and SaaS products.
              </p>
              
              <p className="about-paragraph">
                Along the way, I saw a massive gap between traditional university syllabi and the realities of modern engineering teams. Today, my mission is to mentor students, beginners, and fresh graduates to help them build high-impact careers in IT and Computer Science. I equip aspiring developers with actionable roadmaps: clarifying <strong>what to learn</strong>, practicing <strong>how to learn it</strong> through real projects, and understanding <strong>why</strong> system design and clean code matter.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="about-stats">
              <div className="stat-box reveal-element reveal-delay-1">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Senior Dev Experience</div>
              </div>
              <div className="stat-box reveal-element reveal-delay-2">
                <div className="stat-number">100+</div>
                <div className="stat-label">Students & Mentees Guided</div>
              </div>
              <div className="stat-box reveal-element reveal-delay-3">
                <div className="stat-number">3 Pillars</div>
                <div className="stat-label">What · How · Why to Learn</div>
              </div>
            </div>

            {/* Download Link */}
            <div className="resume-download-wrapper reveal-element reveal-delay-3">
              <a href="https://drive.google.com/file/d/19bSmLgXciu9G976m0-ROxV1Ja35PlL0r/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-link-orange">
                Download Resume & Profile
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
