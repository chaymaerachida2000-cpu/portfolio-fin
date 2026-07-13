import React from 'react';
import { FaLinkedin, FaGithub, FaSlack, FaThreads } from 'react-icons/fa6';
import './Sociallinks.css';

function SocialLinks() {
  return (
    <div className="social-links">
<a href="https://www.linkedin.com/in/chaimae-said-cpu/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
<a href="https://github.com/chaymaerachida2000-cpu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
<a href="https://barcelonacodeschool.slack.com/team/U0ANDKCA85U" target="_blank" rel="noopener noreferrer"><FaSlack /></a>
<a href="https://www.threads.net/@chaymaesa00" target="_blank" rel="noopener noreferrer"><FaThreads /></a>
    </div>
  );
}

export default SocialLinks;