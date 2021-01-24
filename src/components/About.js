import React from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faNodeJs,
  faJs,
  faCss3,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

//styles
const HomeTextStyle = styled.p`
  color: white;
  width: 75%;
  font-size: 150%;
  margin-top:2%;
  margin-left: 15%;
`;
const HomeIconStyle = styled.div`
  width: 75%;
  margin-left: 15%;
  display: flex;
  justify-content: space-between;
`;

const HomeStyled = styled.div`
@media only screen and  (max-width: 320px) {

  }
}

`;

export default function About() {
  return (
    <HomeStyled className='container'>
      <br />
      <br />
      <HomeTextStyle className='text-justify font-italic'>
        I'm a Full-Stack Web-Developer with a strong profile on modern web
        development MERN (MongoDB, Express, REACT.js, Node.Js) Stack Front To
        Back. I have a background in Academia, where I learn to be creative, to
        investigate and develop projects, bring solutions, and many others. My
        previous career as a scientist brought me close to my true passion:
        develop web applications. I enjoy the process of building web-pages
        because I'm a naturally curious person with enthusiasm to understand
        technical challenges. Being a web-developer allows me to use my
        aptitudes like finding solutions, learning and creating. I seek a role
        as a web developer at a company where I can learn, grow, and continue to
        master the craft.
      </HomeTextStyle>

      <HomeIconStyle>
        <FontAwesomeIcon
          icon={faReact}
          style={{ fontSize: "2em", color: "lightblue" }}
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          style={{ fontSize: "2em", color: "green" }}
        />
        <FontAwesomeIcon
          icon={faJs}
          style={{ fontSize: "2em", color: "yellow" }}
        />
        <FontAwesomeIcon
          icon={faCss3}
          style={{ fontSize: "2em", color: "blue" }}
        />
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ fontSize: "2em", color: "orange" }}
        />
        <FontAwesomeIcon
          icon={faDatabase}
          style={{ fontSize: "2em", color: "white" }}
        />
      </HomeIconStyle>
    </HomeStyled>
  );
}
