import React from "react";  

function Nav() {
  const categories = [
  {name: 'About Me',description: 'Short Description of myself!'},
  {name: 'Portfolio', description: 'Compilation of projects that showcase my coding skills'},
  {name: 'Resume', description: 'Curriculum Vitae'},
  {name: 'Contact', description: 'Contact me through various channels!'}
  ]
  
  return(
     <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use></use></svg>
        <span class="fs-4">Jonathan Rivera</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#about" class="nav-link">About Me</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Resume</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
      </ul>
    </header>
  </div>
        
    );
}

export default Nav;