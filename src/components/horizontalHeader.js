import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//Image
import imgBackground from "./img/backgroundPhoto4.png";
import alvaro from "./img/alvaro.jpg";

//Styled
const HeadStyle = styled.div`
  max-width: 500rem;
  float: left;
  background-image: url(${imgBackground});
  padding: 30px;
  color: rgb(255, 255, 255);
  border-end-end-radius: 50px;
  border-radius: 50px;
  height: 230px;
  margin-bottom: 30px;
`;

const ImgAlvaro = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 150px;
  border: 3px solid white;
  margin-right:25rem;
`;

const ButtonLinks = styled.button`
  padding: 20px;
  margin: 35px;
  width: 100px;
  color: pink;
  
`;

// const HeaderIconsStyle = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10rem;
// `;

export default function HorizontalHeader() {
  return (
    <HeadStyle className='col-sm-3 col-md-3'  style={{display:'flex', justifyContent: 'flex-end'}}>

      <ImgAlvaro src={alvaro} className='img-fluid' alt='Responsive image' style={{ justifyContent: 'flex-start'}} />

        <Link type='button' to='/'>
          <ButtonLinks>Home</ButtonLinks>
        </Link>
      
        <Link type='button' to='/'>
          <ButtonLinks>About</ButtonLinks>
        </Link>

  
        <Link type='button' to='/Porfolio'>
          <ButtonLinks>Porfolio</ButtonLinks>
        </Link>
      
        <Link type='button' to='/Contact'>
          <ButtonLinks>Contact</ButtonLinks>
        </Link>
 

      {/* <HeaderIconsStyle className='container'>
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
      </HeaderIconsStyle> */}
    </HeadStyle>
  );
}
