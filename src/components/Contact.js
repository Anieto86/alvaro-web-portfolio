import React from 'react'

import './style/contact.css'


//fotAwesomeIcon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//  import { faArrowAltCircleDown  } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
            <div className="row contact">
                <div className="col-md-6 col-sm-12 ">
                    <h1>Contact</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-dark btn-block submit">Submit</button>
                    </div>
                </div>
        </div>


    )
}
