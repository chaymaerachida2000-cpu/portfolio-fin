import React from 'react';
import './Contact.css'; // تأكدي أن الملف فـ نفس المجلد
import { FaLinkedin, FaGithub, FaSlack, FaThreads } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className="contact-container">
      <h2 className="contact-title">Let's Talk!</h2>
      <div className="status-container">
  <div className="status-badge">
    <div className="pulse-dot"></div>
    Available for work
  </div>
</div>

      <div className="contact-card">
        <p className='card-label'>number phone</p>
        <a className='card-link'>+34666866986</a>
        <p className="card-label">Email</p>
        <a href="mailto:your@email.com" className="card-link">chaymaerachida2000@gmail.com</a>
      </div>

    
       
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <div className="social-links">
               <p className="card-label">Follow Me</p>
         <a href="https://www.linkedin.com/in/chaimae-said-cpu/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
         <a href="https://github.com/chaymaerachida2000-cpu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
         <a href="https://barcelonacodeschool.slack.com/team/U0ANDKCA85U" target="_blank" rel="noopener noreferrer"><FaSlack /></a>
         <a href="https://www.threads.net/@chaymaesa00" target="_blank" rel="noopener noreferrer"><FaThreads /></a>
         </div>
      </div>
    </section>
  );
};

export default Contact;