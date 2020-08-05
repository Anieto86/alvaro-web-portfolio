import React from 'react'


//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faReact, faNodeJs , faJs, faCss3, faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faDatabase, } from '@fortawesome/free-solid-svg-icons';


//styles
import './style/home.css'

export default function Home() {
    return (
        <div className="container col-md-8 home">
            <div className="row-md-5">
                <div className="col">
                    <h1>About Me</h1>
                    <h3>Hi, I am Alvaro, nice to meet you!!!</h3>
                   
                    <p>
                        Full Stack Web Developer leveraging a background in Molecular Biology and
                        PhD in Neuroscience.Recently earned a certificate in web Development from the University of Adelaide Bootcamp, where I developed my skills in JavaScript, CSS, React.js, and responsive web design. While here, I developed client-focused web pages and applications with other team members. I am a motivated person who always learns and puts my energy
                        into approaching programming challenges from different angles and collaborating with others to
                        create meaningful web applications.
                </p>
                <div className="container icons">
                <FontAwesomeIcon icon={faReact} style={{fontSize:"3.5em" , color: "lightblue"}}/>
                <FontAwesomeIcon icon={faNodeJs} style={{fontSize:"3.5em" , color: "green"}}/>
                <FontAwesomeIcon icon={faJs} style={{fontSize:"3.5em" , color: "yellow"}}/>
                <FontAwesomeIcon icon={faCss3} style={{fontSize:"3.5em" , color: "blue"}}/>
                <FontAwesomeIcon icon={faHtml5} style={{fontSize:"3.5em" , color: "orange"}}/>
                <FontAwesomeIcon icon={faDatabase} style={{fontSize:"3.5em" , color: "black"}}/>
               
                </div>
                </div>
            </div>
        </div>

    )
}
