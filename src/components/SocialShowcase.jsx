import React from 'react';
import './SocialShowcase.css';

export default function SocialShowcase() {
  const reels = [
    {
      id: 'reel-1',
      tag: 'Career Journey',
      title: 'From Fresh IT Graduate to Senior Backend Engineer & Founder',
      desc: 'The real-world roadmap of going from an entry-level IT student to a Senior Backend Engineer, Technical Team Lead, and Startup Founder.',
      link: 'https://www.instagram.com/evolvewithsheraz/reel/Dd_Tz6MMTey/',
      image: '/reels/reel-1.jpg',
      badge: 'Viral Story'
    },
    {
      id: 'reel-2',
      tag: 'What to Learn',
      title: 'Top 10 Best Career Options for CS/IT Students',
      desc: 'A deep-dive breakdown into high-growth, high-paying tech domains so you can pick the right path with clarity and avoid tutorial fatigue.',
      link: 'https://www.instagram.com/evolvewithsheraz/reel/DeGwnG9MdlF/',
      image: '/reels/reel-2.jpg',
      badge: 'Top Pick'
    },
    {
      id: 'reel-3',
      tag: 'Job Hunt Strategy',
      title: '5 Things for a Job Hunt Headstart as a Fresh Graduate',
      desc: '5 high-leverage habits that set you apart from hundreds of generic applicant resumes and help you land top engineering roles.',
      link: 'https://www.instagram.com/evolvewithsheraz/reel/DeBkRG7Mcs0/',
      image: '/reels/reel-3.jpg',
      badge: 'Actionable'
    }
  ];

  return (
    <section id="content" className="social-showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="social-showcase-header reveal-element">
          <div className="instagram-brand-pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram Mentorship & Reels</span>
          </div>

          <h2 className="social-showcase-title">
            Watch Daily Guidance on <span className="highlight-instagram">@evolvewithsheraz</span>
          </h2>

          <p className="social-showcase-subtitle">
            Direct, actionable reels answering what to learn, how to master it, and how to kickstart your tech career.
          </p>
        </div>

        {/* Vertical Instagram Reels Grid */}
        <div className="reels-vertical-grid">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="vertical-reel-card reveal-element"
            >
              {/* Actual Instagram Reel Thumbnail Image */}
              <div className="reel-media-wrapper">
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="reel-background-img"
                  loading="lazy"
                />
                <div className="reel-gradient-overlay"></div>
              </div>

              {/* Reel Header Info */}
              <div className="reel-top-bar">
                <span className="reel-tag-pill">{reel.tag}</span>
                <div className="reel-badge-icon" title="Instagram Reel">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>

              {/* Play Button Overlay in center */}
              <div className="reel-center-play">
                <div className="reel-play-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 4 20 12 6 20 6 4"></polygon>
                  </svg>
                </div>
              </div>

              {/* Bottom Reel UI Layer */}
              <div className="reel-bottom-ui">
                {/* Creator Handle */}
                <div className="reel-creator-row">
                  <img src="/profile.png" alt="Sheraz Akhtar" className="reel-creator-avatar" />
                  <span className="reel-creator-handle">@evolvewithsheraz</span>
                  <span className="reel-highlight-badge">{reel.badge}</span>
                </div>

                {/* Caption / Topic Title */}
                <h3 className="reel-ui-caption">{reel.title}</h3>
                {/* <p className="reel-ui-desc">{reel.desc}</p> */}

                {/* Action CTA Link */}
                <div className="reel-ui-action">
                  {/* <span>Watch on Instagram</span> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg> */}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="social-showcase-cta reveal-element">
          <a
            href="https://www.instagram.com/evolvewithsheraz/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-filled-orange"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow @evolvewithsheraz for Daily Roadmaps
          </a>
        </div>
      </div>
    </section>
  );
}
