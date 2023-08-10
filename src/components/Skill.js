import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaPhp, FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import '../Style/Skill.css';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Database', icon: <FaDatabase /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'ReactJS', icon: <FaReact /> },
  // Tambahkan skill lainnya dengan nama dan ikon dari react-icons/fa
];

function FluidExample() {
  return (
    <div className="skills-container">
      <h2 className="section-title">My Skills</h2>
      <p className="section-description">Description of your skills.</p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill.icon}
            <div className="caption">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FluidExample;
