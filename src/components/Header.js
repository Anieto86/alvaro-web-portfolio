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
  width: 22%;
  float: left;
  padding: 30px;
  border-end-end-radius: 50px;
  border-radius: 50px;
  height: 800px;
  margin-bottom: 30px;
`;

const ImgAlvaro = styled.img`
  //max-width: auto;
  height: auto;
  border-radius: 50%;
  border: 5px solid;
  display: block;
  margin: auto;
  border-color: #4392f1;
  &:hover {
    border-color: #0fffc7;
  }
`;

const ButtonLinks = styled.button`
  font-size: 20px;
  padding: 8px;
  margin: 20px;
  margin-right:2rem;
  border-radius: 50px;
  color: #4392f1;
  background: none;
  border: none;
  &:hover {
    color: #0fffc7;
    background: #4392f1;
    
  }
  /* display: flex;
 flex-direction:column; */
`;

const HeaderIconsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  color: #4392f1;
  &:hover {
    color: #0fffc7;
  }
`;

export default function Header() {
  return (
    
     
    <HeadStyle className='container '>
       <div className="row-lg-9 row-md-12 row-sm-12"> 
      <div className=" container col-lg-4 col-md-2 col-sm-2 " >
      <ImgAlvaro src={alvaro} alt='Responsive image' />
        <Link type='button' to='/'>
          <ButtonLinks> Home</ButtonLinks>
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
      

      <HeaderIconsStyle >
        <a href={"https://github.com/Anieto86"}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: "3em", color: "#4392f1", margin: "22px" }}
          />
        </a>
        <a href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: "3em", color: "#4392f1", margin: "22px" }}
          />
        </a>
        <a href={"mailto: alvaro16nieto@gmail.com"}>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "3em", color: "#4392f1", margin: "22px" }}
          />
        </a>
      </HeaderIconsStyle>
     
      </div>
    </div>
    </HeadStyle>
   
  
    
  );
}
