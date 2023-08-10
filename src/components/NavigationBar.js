import React from 'react';
import '../Style/Navbar.css';

function NavigationBar() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#portofolio">Portofolio</a></li>
          <li><a href="#cv">CV</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
