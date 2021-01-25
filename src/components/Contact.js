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
  margin-top: 5%;
  margin-left: 30%;
  text-align: center;
  color: #f3f6f7;
  font-family: "Bungee Shade", cursive;
`;

const SubmitStyled = styled.button`
  background-color: #21262e;
  &:hover {
    color: #0fffc7;
    background-color: #4392f1;
  }
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
    <ContactStyle onSubmit={handleSubmit}>
      <div className=' container '>
        <h1 style={{ marginBottom: "5%" }}>Contact</h1>
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
          <SubmitStyled className='btn btn-dark btn-block submit'>
            Submit
          </SubmitStyled>
        </div>
      </div>
    </ContactStyle>
  );
}
