import React from "react";

import styled from "styled-components";

const PorfolioStyled = styled.div``;

const CardStyled = styled.div`
  border-radius: 20px;
  height: 30rem;
  background-color: #c7c6c6;
  display: block;
  position: relative;
  width: 250px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 10px 10px;
  margin: 10px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #4392f1;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(30);
  }
}

&:hover {
  p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
  }
}
`;

const ButtonLinks = styled.button`
  color: #4392f1;
 border-color: #4392f1;
  font-family: "Bungee Shade", cursive;
  font-size:20px;
  display: flex;
  justify-content: center;
  
  &:hover {
   color: #0fffc7;
   border-color: #0fffc7;
  
  }
`;

export default function Porfolio(props) {
  return (
    <PorfolioStyled>
      <CardStyled>
        <img src={props.photo} className='card-img-top' alt='/' />
        <div className='card-body'>
          <h5 className='card-title'>{props.name}</h5>
          <p className='card-text'>{props.message}</p>
          <a href={props.links}>
            <ButtonLinks
              
              ButtonLinks
              ButtonLinksn
              type='button'
              className='btn btn-outline btn-block'
            >
              LINK
            </ButtonLinks>
          </a>
        </div>
      </CardStyled>
    </PorfolioStyled>
  );
}
