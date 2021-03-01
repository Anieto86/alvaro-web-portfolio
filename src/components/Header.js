import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


//Image
//import imgBackground from "./img/backgroundPhoto4.png";
import alvaro from "../alvaro.jpg";
//Styled

const HeadStyle = styled.div`
  text-align: center;
  height: auto;
  padding: 30px;
  border-end-end-radius: 50px;
  border-radius: 50px;
  height: 800px;
  margin-bottom: 30px;
  font-family: "Bungee Shade", cursive;
  display: flex;
  flex-direction: column;
`;

const ImgAlvaro = styled.img`
  border-radius: 50%;
  border: 5px solid;
  border-color: #4392f1;
  &:hover {
    border-color: #0fffc7;
  }
`;

const ButtonLinks = styled.button`
  font-size: 20px;
  padding: 8px;
  margin: 15px;
  margin-left: 1rem;
  border-radius: 50px;
  color: #4392f1;
  background: none;
  border: none;
  &:hover {
    color: #0fffc7;
    background: #4392f1;
  }
`;

const HeaderIconsStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  color: #4392f1;
  &:hover {
    color: #0fffc7;
    -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
  }
`;

export default function Header() {
  return (
    <HeadStyle className="container">
      <ImgAlvaro src={alvaro} alt='Resposive image ' />
      <div className='container' style={{display: 'flex',  flexDirection: "column",  alignItems: 'center'}}>
        <Link type='button' to='/'>
          <ButtonLinks>Home</ButtonLinks>
        </Link>
        <Link type='button' to='/about'>
          <ButtonLinks>About</ButtonLinks>
        </Link>
        <Link type='button' to='/Porfolio'>
          <ButtonLinks>Portfolio</ButtonLinks>
        </Link>

        <Link type='button' to='/Contact'>
          <ButtonLinks>Contact</ButtonLinks>
        </Link>
      </div>
      <HeaderIconsStyle>
        <a href={"https://github.com/Anieto86"}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: "2em", color: "#4392f1", margin: "22px" }}
          />
        </a>
        <a href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: "2em", color: "#4392f1", margin: "22px" }}
          />
        </a>
        <a href={"mailto: alvaro16nieto@gmail.com"}>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "2em", color: "#4392f1", margin: "22px" }}
          />
        </a>
      </HeaderIconsStyle>
    </HeadStyle>
  );
}
