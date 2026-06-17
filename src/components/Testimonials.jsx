import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const feedbackList = [
    {
      name: 'Wasi Haider',
      role: 'Lecturer, Computer Science',
      quote: 'Heartfelt thanks to Mr. Sheraz Akhtar for his invaluable efforts in the FYP Headstart Program. His guidance provided our students with the structured backend support they needed.'
    },
    {
      name: 'Afshan Qasim',
      role: 'BS(IT) Student',
      quote: 'A huge thank you to Sir Sheraz for teaching us these core backend skills. The past few weeks have been an incredible learning journey, taking us from absolute basics to advanced configurations.'
    },
    {
      name: 'Uneeb Ahmed',
      role: 'Android Developer',
      quote: "This program was a game-changer. With Sir Sheraz's guidance I confidently chose Spring Boot, and it opened the door to so many backend learnings that now accelerate my mobile work."
    },
    {
      name: 'Kashaf Zahra',
      role: 'Frontend Developer',
      quote: 'Under Sir Sheraz\'s mentorship I learned how to stay disciplined and consistent. From APIs and databases to authentication—every session gave me something new and practical.'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section section-deep-blue">
      <div className="container">
        {/* Header Title */}
        <div className="testimonials-header reveal-element">
          <h2 className="testimonials-title">What People Say</h2>
        </div>

        {/* Testimonials Grid/Scroll */}
        <div className="testimonials-grid">
          {feedbackList.map((item, idx) => (
            <div key={idx} className="testimonial-card reveal-element">
              <blockquote className="testimonial-quote">
                "{item.quote}"
              </blockquote>
              <div className="testimonial-author">
                <h3 className="testimonial-name">{item.name}</h3>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
