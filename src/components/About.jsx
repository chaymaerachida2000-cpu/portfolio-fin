import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <header className="about-header">
          <h1>Creative Developer & Designer</h1>
          <p className="intro-text">
            Graduate of <strong>Barcelona Code School</strong>, I merge the logic of 
            <strong> Full-Stack Development</strong> with the artistic precision of 
            <strong> Adobe Design</strong>. My mission is to build digital products that 
            don't just work perfectly, but look stunning.
          </p>
        </header>

        <div className="freelance-highlight">
          <h3>The Best of Both Worlds</h3>
          <p>
            As a freelancer, I provide a unique value: I handle the entire lifecycle of your 
            project. From crafting high-fidelity prototypes in <strong>Adobe XD/Figma</strong> 
            and creating custom assets in <strong>Photoshop & Illustrator</strong>, 
            to developing the final app with <strong>React and Python</strong>.
          </p>
        </div>

        <div className="content-grid">
          <div className="card">
            <h3>Technical Toolkit</h3>
            <ul className="skills-list">
              <li><span>Development:</span> React, JS, Python, AI Scripting</li>
              <li><span>Architecture:</span> Modern Web & API Integration</li>
            </ul>
          </div>

          <div className="card">
            <h3>Design & Adobe Mastery</h3>
            <ul className="skills-list">
              <li><span>UI/UX Design:</span> Adobe XD, Figma</li>
              <li><span>Visuals:</span> Adobe Photoshop, Illustrator</li>
              <li><span>Strategy:</span> User-Centric Design Principles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;