import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeTitleStyled = styled.h2`
  font-size: 3rem;
  color: #f3f6f7;
  font-family: "Bungee Shade", cursive;
  max-width: 50%;
  margin: auto;
  text-align: center;
  &:hover {
    color: #0fffc7;
  }
`;

export default function Home() {
  return (
   
      <div className='row'>
        <div className=' col-md-12 col-sm-12'>
        <HomeTitleStyled className='text-center  '>
          Hi, I'am Alvaro Junior Web-Developer
        </HomeTitleStyled>
        </div>
      </div>
    
  );
}
