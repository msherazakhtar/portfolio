import React from 'react';
import './Projects.css';

export default function Projects() {
  const projectsList = [
    // {
    //   initials: 'CH',
    //   name: 'Cursa Health EHR',
    //   description: 'A production-level enterprise healthcare platform. Spearheaded backend enhancements that successfully reduced error log volume by approximately 85%.',
    //   stack: ['Java', 'Spring Boot', 'SQL Server', 'HL7'],
    //   link: '#contact'
    // },
    {
      initials: 'BB',
      name: 'Barabar — Expense Splitting App',
      description: 'A SaaS MVP tailored for flatmates in Pakistan. Engineered custom group management and complex debt settlement logic, and deployed the API to a remote VPS.',
      stack: ['Spring Boot', 'PostgreSQL', 'Angular', 'VPS'],
      link: 'https://barabar.devbotsolutions.com',
      image: '/barabar.png'
    },
    // {
    //   initials: 'AD',
    //   name: 'AutoDealerAPI',
    //   description: 'A multi-tenant vehicle inventory system implementing JSON Web Tokens (JWT) authentication, JPA Specifications, and a clean backend architecture design.',
    //   stack: ['Spring Boot', 'PostgreSQL'],
    //   link: '#contact'
    // }
  ];

  return (
    <section id="projects" className="projects-section section-white">
      <div className="container">
        {/* Section title */}
        <div className="projects-header reveal-element">
          <h2 className="projects-title">Selected Work</h2>
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
                  <a href={project.link} className="text-link-orange">
                    View Project
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
