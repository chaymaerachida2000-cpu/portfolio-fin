import React from 'react';
import './Hero.css';
import SocialLinks from './SocialLinks';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* اليسار: الصورة، السوشيال، والبوطونة */}
        <div className="hero-image-wrapper">
          <img src="/my-avatar.png" alt="Chaimae Said" className="hero-avatar" />
          <SocialLinks />
          <a href="/cv.pdf" download="Chaimae_Said_CV.pdf" className="hero-buttons">
            Download CV <span>↓</span>
          </a>
        </div>

        {/* اليمين: النص */}
        <div className="hero-text-content">
          <h1 className="hero-title">Hello, I Am Chaimae Said</h1>
          <h2 className="hero-subtitle">Full-Stack JavaScript Developer</h2>
          <p className="hero-description">
            I help founders design and build modern, high-performing web applications.
            Passionate about crafting seamless user experiences and scalable back-end solutions using React, Node.js, and modern cloud technologies.
          </p>
        </div>

      </div>
      
      {/* الماركي لتحت */}
      <div className="hero-marquee">
        <div className="marquee-track">
          <span>96% Client Satisfaction</span>
          <span className="marquee-star">✦</span>
          <span>Clean & Modern Code</span>
          <span className="marquee-star">✦</span>
          <span>React & Node.js Expert</span>
          <span className="marquee-star">✦</span>
          <span>96% Client Satisfaction</span>
          <span className="marquee-star">✦</span>
          <span>Clean & Modern Code</span>
          <span className="marquee-star">✦</span>
          <span>React & Node.js Expert</span>
          <span className="marquee-star">✦</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;