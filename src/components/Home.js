import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeTitleStyled = styled.h2`
 
  font-size: 4rem;
  margin-left: 9rem;
  padding: 0.5rem;
  color: #f3f6f7;
  font-family: "Bungee Shade", cursive;
  width: 100%;
 text-align: center;
 &:hover {
    color: #0fffc7;  
  }

`;

export default function Home() {
  return (
    <div className='container col-md-8'>
      <HomeTitleStyled>Hi, I'am Alvaro </HomeTitleStyled>
      <HomeTitleStyled> Junior Web-Developer</HomeTitleStyled>
    </div>
  );
}
