import React, {useState} from 'react'

import './style/contact.css'

//Import db from firebase database
import { db } from "../firebase";


//fotAwesomeIcon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//  import { faArrowAltCircleDown  } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    const [name, setName,] = useState ("");
    const [email, setEmail,] = useState ("");
    const [message, setMessage,] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
        })
        .then( () => {
            alert ("Massage has been submitted");
        })
        .catch(err =>{
            alert(err.message);
        })

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
            <form className="row contact" onSubmit={handleSubmit}>
                <div className="col-md-6 col-sm-12 ">
                    <h1>Contact</h1>
                    <div className="form-group">
                        
                        <label>Name</label>
                        <input type="text" className="form-control" 
                        value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        
                        <label>Email</label>
                        <input type="text" className="form-control" 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">

                        <label>Message</label>
                        <textarea className="form-control" rows="5" 
                        value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-dark btn-block submit">Submit</button>
                    </div>
                </div>
        </form>
    )
}
