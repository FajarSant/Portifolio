import React from 'react';
import'../Style/Intro.css'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <h1>Fajar Santoso</h1>
        <p>JUNIOR <span>WEB DEVLOPER</span></p>
        <p>"Yakinkan dirimu dan berusahalah sebaik mungkin."</p>
      </div>
      <div className="social-media">
   <div>
   <div className="contact-icons">
      <a href="https://github.com/your_github_profile">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/your_linkedin_profile">
        <FaLinkedin size={30} />
      </a>
      <a href="mailto:your.email@example.com">
        <FaEnvelope size={30} />
      </a>
    </div>
    </div>
</div>

    </section>
  );
};

export default Intro;
