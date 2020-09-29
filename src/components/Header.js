import React from 'react'
import { Link } from 'react-router-dom';
//styles
import './style/header.css'
import alvaro from './img/alvaro.jpg'


//icons 
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,faFile } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
   return (

      <div className="container head">
         <div className="row head2">
            <div className="col-ml-4">
                  <img src={alvaro} className="imgAlvaro" alt="Responsive imag"/>
                  <h4>Alvaro Nieto</h4>
                  <p>Scientific=>Web-Developer</p>
                  <Link type="button" className="list-group-item" to="/">Home</Link>
                  <br />
                  <Link type="button" className="list-group-item" to="/Porfolio">Porfolio</Link>
                  <br />
                  <Link type="button" className="list-group-item" to="/Contact">Contact</Link>
                  <br />
                  <div className="container icons">

                  <a href={"https://github.com/Anieto86"}>
                  <FontAwesomeIcon icon={faGithub} style={{fontSize:"2em", color:"White"}}/>
                  </a>
                  <a href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                  <FontAwesomeIcon icon={faLinkedin} style={{fontSize:"2em",  color:"White"}}/>
                  </a>

                  <a href={"mailto: alvaro16nieto@gmail.com"}>
                  <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"2em" , color:"White"}}/>
                  </a>
                  <a href={'https://docs.google.com/document/d/1Eb2UgyeRpoqY-QMwbnyWrXrJmKRF_IMUKEvXY9-j3NQ/edit?usp=sharing'}>
                  <FontAwesomeIcon icon={faFile} style={{fontSize:"2em",  color:"White"}}/>
                  </a> 
                  </div>
            </div>
         </div>        
      </div>
   )

}


