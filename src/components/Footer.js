import React from 'react'

// import { Link } from 'react-router-dom';


import './style/footer.css'


//fotAwesomeIcon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";




export default function Footer() {
    return (

        <div className="container footer ">
            {/* <FontAwesomeIcon icon={faLinkedin} /> */}
            <a href="https://www.linkedin.com/in/alvaro-fernando-nieto-guil"> LinkedIn</a>   
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            <a href={"mailto: alvaro16nieto@gmail.com"}>Mail</a>
            {/* <FontAwesomeIcon icon={faFile} /> */}
            <a href={"https://app.luminpdf.com/viewer/5ee9e11c4bf72800198446a2"}>Resume</a>  
            
             <a href={"https://github.com/Anieto86"}>GitHub</a>    
            
        </div>
    )
}
