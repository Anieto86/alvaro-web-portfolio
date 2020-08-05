import React from 'react'
import { Link } from 'react-router-dom';
//styles
import './style/header.css'
import alvaro from './img/alvaro.jpg'



export default function Header() {
   return (

      <div className="container head">
         <div className="row head2">
            <div className="col-ml-4">
                  <img src={alvaro} className="imgAlvaro" alt="" />
                  <h4>Alvaro Nieto</h4>
                  <p>Scientific=>Web-Developer</p>
                  <Link type="button" className="list-group-item" to="/">Home</Link>
                  <br />
                  <Link type="button" className="list-group-item" to="/Porfolio">Porfolio</Link>
                  <br />
                  <Link type="button" className="list-group-item" to="/Contact">Contact</Link>
                  <br />
                  <p></p>
            </div>
         </div>
      </div>
   )

}


