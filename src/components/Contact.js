import React, { useState } from "react";
import styled from "styled-components";

//Import db from firebase database
import { db } from "../firebase";

// import "./style/contact.css";

//styles

const ContactStyle = styled.form`
  display: flex;
  justify-content: center;
  font-family: "Signika", sans-serif;
  margin-bottom: 15%;
  width: 75%;
`;

const SubmitStyled = styled.button`
  background-color: rgb(90, 82, 82);
  -bobox-shadow: 10px 10px 5px #ccc;
  -moz-box-shadow: 10px 10px 5px #ccc;
  -webkit-box-shadow: 10px 10px 5px #ccc;
  -khtml-box-shadow: 10px 10px 5px #ccc;
`;


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Massage has been submitted");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ContactStyle className='row contact' onSubmit={handleSubmit}>
      <div className='col-md-6 col-sm-12 '>
        <h1>Contact</h1>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='text'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <textarea
            className='form-control'
            rows='5'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className='form-group'>
          <SubmitStyled className='btn btn-dark btn-block submit'>Submit</SubmitStyled>
        </div>
      </div>
    </ContactStyle>
  );
}
