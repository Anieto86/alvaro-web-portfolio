import React from 'react'


//style
import './style/porfolio.css'


export default function Porfolio(props) {
    return (
       
        <div className=" container porfolio">
            <div className="container card">
                <img src={props.photo} className="card-img-top" alt="/" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                 <p className="card-text">{props.message}</p>
                <a href={props.links} >
                 <button type="button" className="btn btn-outline-dark btn-block">{props.button}</button>
                 </a>

                </div>
            </div>
        </div>
    )
    
}



            
// <div className="card" >
// <img src={wuber} class="card-img-top" alt="/" />
// <div className="card-body">
//     <h5 class="card-title">Wuber APP</h5>
//     <p className="card-text">Our clients are the Wineries, the wine consumers and wine producers of Adelaide. This platform connects these words. To bring new wine experiences and foment new connections.</p>
// </div>
// </div>

// <div className="card" >
// <img src={fitness} class="card-img-top" alt="/" />
// <div className="card-body">
//     <h5 class="card-title">Fitness Tracker APP</h5>
//     <p className="card-text"> Track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. .</p>
// </div>

// </div>