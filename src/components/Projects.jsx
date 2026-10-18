import React from 'react';
import './Projects.css';

export default function Projects() {
  const projectsList = [
    {
      initials: 'FS',
      name: 'Featstack — Tech Startup',
      description: 'My own startup. A modern tech platform engineered to solve real-world problems. Serves as a living blueprint for students and mentees to learn end-to-end product architecture, scalability, and startup execution.',
      stack: ['Tech Startup', 'System Design', 'Java / Spring', 'Cloud'],
      link: 'https://featstack.co/',
      image: '/featstack-logo.png'
    },
    {
      initials: 'BB',
      name: 'Barabar — Expense Splitting SaaS',
      description: 'A live SaaS product engineered for shared expense management. Used as a hands-on case study in my mentorship to teach students database schema normalization, debt-settlement algorithms, and production VPS deployment.',
      stack: ['Spring Boot', 'PostgreSQL', 'Angular', 'VPS Deployment'],
      link: 'https://barabar.devbotsolutions.com',
      image: '/barabar-logo.png'
    }
  ];

  return (
    <section id="projects" className="projects-section section-white">
      <div className="container">
        {/* Section title */}
        <div className="projects-header reveal-element">
          <h2 className="projects-title">Real Systems & Case Studies</h2>
          <p style={{ marginTop: '8px', color: 'var(--color-charcoal-gray)', fontSize: '1.0625rem' }}>
            Production platforms and architectures that power my mentorship teachings—from startup MVPs to high-scale enterprise systems.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projectsList.map((project, idx) => (
            <article key={idx} className="project-card reveal-element">
              {/* Card Header displaying thumbnail or placeholder initials */}
              <div className="project-card-header">
                {project.image ? (
                  <img src={project.image} alt={project.name} className="project-thumbnail" />
                ) : (
                  <span className="project-placeholder-text">{project.initials}</span>
                )}
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Tech tags */}
                <div className="project-tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Orange direct CTA */}
                <div className="project-link-wrapper">
                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-link-orange"
                  >
                    {project.link.startsWith('http') ? 'View Live Platform' : 'Discuss Architecture'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
