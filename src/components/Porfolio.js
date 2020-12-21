import React from "react";
import styled from "styled-components";

const PorfolioStyled = styled.div`
  width:25%;
  padding-bottom: 5%;
`;

const CardStyled = styled.div`
  bobox-shadow: 10px 10px 5px rgb(22, 22, 22);
  -moz-box-shadow: 10px 10px 5px rgb(22, 22, 22);
  -webkit-box-shadow: 10px 10px 5px rgb(22, 22, 22);
  -khtml-box-shadow: 10px 10px 5px rgb(22, 22, 22);

  height: 30rem;
  padding: 10px;
  background-color: white;
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
