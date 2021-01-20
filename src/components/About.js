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
  font-size: 150%;
`;
const HomeIconStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-bottom: 30%;
  color: #dedee6;
`;

const HomeStyled = styled.div`
 float: left;
`

export default function About() {
  return (
    <HomeStyled className='container col-md-8'>
      <div className='row-md-5'>
        <div className='col'>
          <br />
          <HomeTextStyle className='text-justify font-italic'>
            I'm a Full-Stack junior Web-Developer with strong skills in modern web
            development MERN Stack Front To Back. My previous career as a
            scientist brought me close to my true passion: building web
            applications. I enjoy the process of building web-pages because I'm
            a naturally curious person with enthusiasm to understand technical
            challenges. Being a web-developer allows me to use my passions like
            finding solutions, learning and creating. I seek a role as a web
            developer at a company where I can learn, grow, and continue to
            master the craft.
          </HomeTextStyle>

          <HomeIconStyle className='container'>
            <FontAwesomeIcon
              icon={faReact}
              style={{ fontSize: "3.5em", color: "lightblue" }}
            />
            <FontAwesomeIcon
              icon={faNodeJs}
              style={{ fontSize: "3.5em", color: "green" }}
            />
            <FontAwesomeIcon
              icon={faJs}
              style={{ fontSize: "3.5em", color: "yellow" }}
            />
            <FontAwesomeIcon
              icon={faCss3}
              style={{ fontSize: "3.5em", color: "blue" }}
            />
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ fontSize: "3.5em", color: "orange" }}
            />
            <FontAwesomeIcon
              icon={faDatabase}
              style={{ fontSize: "3.5em", color: "white" }}
            />
          </HomeIconStyle>
        </div>
      </div>
    </HomeStyled>
  );
}
