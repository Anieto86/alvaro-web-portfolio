import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//Image
import imgBackground from "./img/backgroundPhoto4.png";
import alvaro from "./img/alvaro.jpg";
//Styled

const HeadStyle = styled.div`
  height: auto;
  width: 18%;
  float: left;
  background: white;
  background: rgb(119,221,177);
  background: linear-gradient(170deg, rgba(119,221,177,0.4962359943977591) 19%, rgba(33,38,46,0.7175245098039216) 63%);
  // background-image: url(${imgBackground});
  padding: 30px;
  color: rgb(255, 255, 255);
  border-end-end-radius: 50px;
  border-radius: 50px;
  height: 1000px;
  margin-bottom: 30px;
`;

const ImgAlvaro = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 150px;
  border: 3px solid white;
  display: block;
  margin: auto;
`;

const ButtonLinks = styled.button`
  font-size: 20px;
  padding: 6px;
  margin: 30px;
  margin-right: 80px;
  width: 100px;
  border-radius: 50px;
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

      <div>
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
            style={{ fontSize: "2em", color: "White" }}
          />
        </a>
        <a href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: "2em", color: "White" }}
          />
        </a>
        <a href={"mailto: alvaro16nieto@gmail.com"}>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "2em", color: "White" }}
          />
        </a>
      </HeaderIconsStyle>
    </HeadStyle>
  );
}
