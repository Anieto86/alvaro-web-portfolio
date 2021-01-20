import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeTitleStyled = styled.h2`
font-size: 4rem;
margin: 2rem;
padding:1rem;
color:#77ddb1;
font-family: 'Bungee Shade', cursive;
width: 100%;
`;




export default function Home() {
  return (
    <div className='container col-md-8'>
      <HomeTitleStyled >Hi, I'am Alvaro </HomeTitleStyled>
      <HomeTitleStyled> Junior Web-Developer</HomeTitleStyled>
    </div>
  );
}
