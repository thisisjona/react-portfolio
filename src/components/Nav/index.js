import React from "react";  

function Nav() {
    return(
       
            <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use></use></svg>
        <span class="fs-4">Jonathan Rivera</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About Me</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Resume</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
      </ul>
    </header>
  </div>
        
    );
}

export default Nav;