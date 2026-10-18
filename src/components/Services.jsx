import React from 'react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      id: '01',
      title: 'What to Learn: The Industry Roadmap',
      description: 'Cut through tutorial hell and tech-stack overwhelm. I outline the core computer science fundamentals, backend frameworks (like Spring Boot), and production tools that companies actually hire for today.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      )
    },
    {
      id: '02',
      title: 'How to Learn It: Deep Hands-On Practice',
      description: 'Move beyond copy-pasting code snippets. Master systematic problem-solving, clean code conventions, building production-ready architectures from scratch, and debugging complex runtime issues like a senior engineer.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: '03',
      title: 'Why to Learn It: Architectural Reasoning',
      description: 'Understand the "why" behind engineering choices: database normalization vs performance, monolithic vs microservice tradeoffs, security standards, and why companies pay top dollar for engineers who think in systems.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    {
      id: '04',
      title: '1-on-1 Code Reviews & FYP Guidance',
      description: 'Get senior-level code reviews on your personal repositories and Final Year Projects (FYP). Receive line-by-line constructive feedback on API design, database schemas, code smells, and performance optimization.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
          <line x1="6" y1="9" x2="6" y2="21"></line>
        </svg>
      )
    },
    {
      id: '05',
      title: 'Technical Interviews & Portfolio Polish',
      description: 'Transform your GitHub profile from academic assignments into an impressive engineering portfolio. Learn how to articulate technical trade-offs and communicate with clarity during interviews.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: '06',
      title: 'Startup Engineering & Featstack Insights',
      description: 'Gain firsthand lessons from building my own tech startup, Featstack. Understand how real software teams plan features, ship to production, iterate rapidly, and solve genuine customer problems.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Header Title */}
        <div className="services-header reveal-element">
          <h2 className="services-title">How I Guide Your Growth</h2>
          <p className="services-subtitle">
            A structured mentorship framework answering the 3 critical questions of tech growth: What to learn, How to master it, and Why it matters in production.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card reveal-element">
              <div className="service-number">{service.id}</div>
              <div className="service-icon-wrapper">{service.icon}</div>
              <div className="service-info">
                <h3 className="service-name">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
