import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//Image
//import imgBackground from "./img/backgroundPhoto4.png";
import alvaro from "./img/alvaro.jpg";
//Styled

const HeadStyle = styled.div`
  height: auto;
  width: 18%;
  float: left;
  //background: #c7c6c6; 
  padding: 30px;
  //color: rgb(255, 255, 255);
  border-end-end-radius: 50px;
  border-radius: 50px;
  height: 800px;
  margin-bottom: 30px;
  
`;

const ImgAlvaro = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 150px;
  border: 3px solid white;
  display: block;
  margin: auto;
  border-color:#4392f1;
  &:hover{
  border-color: #0fffc7;
  }
`;

const ButtonLinks = styled.button`
  font-size: 20px;
  padding: 6px;
  margin: 30px;
  width: 100px;
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
  justify-content: space-between;
  margin-top: 3rem;
`;

export default function Header() {
  return (
    <HeadStyle className='col-sm-3 col-md-3'>
      <ImgAlvaro src={alvaro} className='img-fluid' alt='Responsive image' />

      {/* <h4 style={{ textAlign: "center" }}>Alvaro Nieto</h4>
      <p style={{ textAlign: "center" }}> Scientific => Web-Developer</p> */}

      <div className='container' style={{ margin: "18px" }}>
        <Link type='button' to='/'>
          <ButtonLinks>Home</ButtonLinks>
        </Link>

        <Link type='button' to='/about'>
          <ButtonLinks>About</ButtonLinks>
        </Link>

        <Link type='button' to='/Porfolio'>
          <ButtonLinks>Porfolio</ButtonLinks>
        </Link>

        <Link type='button' to='/Contact'>
          <ButtonLinks>Contact</ButtonLinks>
        </Link>
      </div>

      <HeaderIconsStyle className='container'>
        <a href={"https://github.com/Anieto86"}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: "2em", color: "#4392f1" }}
          />
        </a>
        <a href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: "2em", color: "#4392f1" }}
          />
        </a>
        <a href={"mailto: alvaro16nieto@gmail.com"}>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "2em", color: "#4392f1" }}
          />
        </a>
      </HeaderIconsStyle>
    </HeadStyle>
  );
}
