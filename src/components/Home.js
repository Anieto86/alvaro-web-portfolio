import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeTitleStyled = styled.h2`
  margin-top: 3rem;
  padding:1rem;
  font-size: 3rem;
  color: #f3f6f7;
  font-family: "Bungee Shade", cursive;
  text-align: center;
  border-radius: 50px;
  &:hover {
    color: #0fffc7;
    font-size: 3.2rem;
    background-color: #4392f1;
  }
`;

export default function Home() {
  return (
    <HomeTitleStyled>
      Hi, I'am Alvaro <br />

      <h2>Jr web developer</h2>
    </HomeTitleStyled>
  );
}
