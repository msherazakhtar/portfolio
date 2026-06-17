import React from 'react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      id: '01',
      title: 'SaaS Backend Development',
      description: 'Custom, reliable backend architectures designed using Java and Spring Boot that scale seamlessly alongside your active user base.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="6" rx="1" ry="1"></rect>
          <rect x="2" y="9" width="20" height="6" rx="1" ry="1"></rect>
          <rect x="2" y="16" width="20" height="6" rx="1" ry="1"></rect>
          <line x1="6" y1="5" x2="6.01" y2="5"></line>
          <line x1="6" y1="12" x2="6.01" y2="12"></line>
          <line x1="6" y1="19" x2="6.01" y2="19"></line>
        </svg>
      )
    },
    {
      id: '02',
      title: 'REST API Development & Integration',
      description: 'Clean, secure, and fully documented RESTful API endpoints that connect frontend web apps, mobile apps, and third-party services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3"></circle>
          <circle cx="5" cy="19" r="3"></circle>
          <circle cx="19" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="10.41" y2="7.49"></line>
          <line x1="15.41" y1="7.49" x2="17.23" y2="13.51"></line>
        </svg>
      )
    },
    {
      id: '03',
      title: 'Database Design & Optimization',
      description: 'High-performance relational database schemas utilizing PostgreSQL and SQL Server, optimized for complex queries and high read/write loads.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      )
    },
    {
      id: '04',
      title: 'Internal Tools & Management Systems',
      description: 'Tailored management interfaces, POS systems, and logistics dashboards designed to streamline your business workflows.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="9" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="15" x2="21" y2="15"></line>
        </svg>
      )
    },
    {
      id: '05',
      title: 'Legacy System Improvement',
      description: 'Breathe new life into aging Java systems. I refactor legacy codebases, optimize performance, and resolve persistent bugs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      id: '06',
      title: 'Code Audit & Architecture Review',
      description: 'Deep-dive codebase analysis to isolate performance bottlenecks, security vulnerabilities, and scale limitations before production.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 11 11 13 15 9"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Header Title */}
        <div className="services-header reveal-element">
          <h2 className="services-title">What I Can Do For You</h2>
          <p className="services-subtitle">
            Scalable backend systems for SaaS founders and growing businesses who need reliability.
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
