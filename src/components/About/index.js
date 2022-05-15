import React from "react";  
import profilePic from '../../assets/images/react-prof-headshot.png';


function About() {
    return(
      <div className="my-5"> 
        <h1>About Me:</h1>
         <img src={profilePic} alt='profile pic'/> 
         <p>My name is Jonathan Rivera. I arrived in Austin, Texas in 2011 to pursue a musical education and carreer. Throughout my education, I facilitated my studies by working in the service industry, which has given me a deep skillset for interpersonal relationships. As the Capital of Texas has evolved, so has my interest in Web Development. I am looking to grown in the tech field by expanding my skillset in the workforce by working on projects and joining a company with vision and integrity parallel to mine</p>
      </div>
    )
}

export default About;