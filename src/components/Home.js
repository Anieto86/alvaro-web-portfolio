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
   <div className="container">
      <div className='row-md-12 row-sm-12 row-lg-12'>
        <HomeTitleStyled className='text-center col-lg-6 col-sm-12 col-md-6'>
          Hi, I'am Alvaro Junior Web-Developer
        </HomeTitleStyled>
        </div>
      </div>

  );
}
