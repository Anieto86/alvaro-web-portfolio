import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';



//components
import Header from './components/Header.js';    
import Home from './components/Home';
import Porfolio from './components/Porfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';

// image component



//images
import got from './components/img/project1.PNG';
import wuber from './components/img/project2.PNG';
import fitnessTracker from './components/img/fitnessTracker.PNG';
import quizzApp from './components/img/quiz.PNG';
import scheduler from './components/img/Scheduler.PNG';
import adelaideMarket from './components/img/Logo_Alvaro_small.png'


import './App.css';

function App() {

  return (

    <Router>
      <div className=" App">
        <br />
        <Header />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/contact" component={Contact} />

        <Route path="/porfolio" >

        <Porfolio
            name="Adelaide Market"
            message="Adelaide Market is a platform to add new services in local market communities and to  support local economies, the green economies and promote local trade"
            photo={adelaideMarket} />

          <Porfolio
            name="GOT"
            message="Search app for fans of the Game of Thrones saga, where users can learn more about their favourite characters"
            photo={got} />

          <Porfolio
            name="Wuber"
            message="Our clients are the Wineries, the wine consumers and wine producers of Adelaide. This platform connects these words. To bring new wine experiences and foment new connections" 
            photo={wuber}/>

          <Porfolio
            name="Fitness Traker"
            message=" Track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise."
            photo={fitnessTracker} />

          <Porfolio
            name="Quizapp"
            message=" Quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers."
            photo={quizzApp} />

          <Porfolio
            name="Work Day Scheduler"
            message="This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.  Moment.js library to work with date and time"
            photo={scheduler} />

          {/* <Porfolio
            name="Password Generator"
            message="Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code."
            photo={passwordGenerator} /> */}

        </Route>

        <Footer />
      </div>
    </Router>
  );
}

export default App;





// }