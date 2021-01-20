import React from "react";
import styled from "styled-components";

const PorfolioStyled = styled.div`
  width:25%;
  padding-bottom: 5%;
`;

const CardStyled = styled.div`
  border-radius: 20px;
  height: 30rem;
  padding: 10px;
  background-color: #c7c6c6;

  display: block;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(21);
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



export default function Porfolio(props) {
  return (
    <PorfolioStyled className=' container col-md-4 '>
      <CardStyled className='container'>
        <img src={props.photo} className='card-img-top' alt='/' />
        <div className='card-body'>
          <h5 className='card-title'>{props.name}</h5>
          <p className='card-text'>{props.message}</p>
          <a href={props.links}>
            <button type='button' className='btn btn-outline-dark btn-block'>
              {props.button}
            </button>
          </a>
        </div>
      </CardStyled>
    </PorfolioStyled>
  );
}
