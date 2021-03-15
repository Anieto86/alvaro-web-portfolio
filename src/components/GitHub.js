import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
//import styled from "styled-components";
//import  from "react-bootstrap";


const GitHub = () => {

    const [gitHubs , setGitHub] = useState ([])

//!Api Call
    
    useEffect(() => {
        axios
            .get("https://api.github.com")
            .then((res) => {
                console.log(res, 'get')
                setGitHub(res.data)
            })
        .catch((err) => console.log(err))
    }, );

     
    return (
        <div>
            {gitHubs.map((gitHub) => (
                <>{gitHub.name}</> 
          
            ))}
        </div>
    )
}

export default GitHub
