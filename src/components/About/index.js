import React from "react";  
import profilePic from '../../assets/images/react-prof-headshot.png';


function About() {
    return(
      <div> 
         <img src={profilePic} alt='profile pic'/> 
         <p>lorem ipsum que hubole con todos los perrinkis trinkis</p>
      </div>
    )
}

export default About;