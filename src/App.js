import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//components
import Header from "./components/Header";
//import HorizontalHeader from "./components/horizontalHeader.js";
import Home from "./components/home";
import About from "./components/About";
import Porfolio from "./components/Porfolio";
import Contact from "./components/Contact";

//images
import got from "./components/img/project1.PNG";
import wuber from "./components/img/project2.PNG";
import fitnessTracker from "./components/img/fitnessTracker.PNG";
import quizzApp from "./components/img/quiz.PNG";
import scheduler from "./components/img/Scheduler.PNG";
import adelaideMarket from "./components/img/Logo_Alvaro_small.png";
import passwordGenerator from "./components/img/PAsswordGenerator.PNG";
import chemDye from "./components/img/Colourspalet.png";

import "./App.css";

function App() {
  return (
    <Router>
      <div className=' App'>
        <br />

        <Route exact path='/'>
          <Header />
          <Home/>
        </Route>


        <Route path='/about'>
          <Header />
          <About />
        </Route>

        <Route path='/contact'>
          <Header />
          <Contact />
        </Route>

        <Route path='/porfolio'>
          <Header />
          <div className='container profolioAPP'>
            <Porfolio
              name='ChemDye'
              message='ChemDye born with the idea to help researchers to achieve their goals using the powerful tool of visual communication'
              photo={chemDye}
              links={"https://chem-dye-portfolio.herokuapp.com/"}
              button='ChemDye'
            />
            <Porfolio
              name='Adelaide Market'
              message='Adelaide Market is a platform to add new services in local market communities and to  support local economies, the green economies and promote local trade'
              photo={adelaideMarket}
              links={"https://github.com/Anieto86/Adelaide-Market"}
              button='Adelaide Market'
            />
            <Porfolio
              name='GOT'
              message='Search app for fans of the Game of Thrones saga, where users can learn more about their favourite characters'
              photo={got}
              links={"https://nicolegeorge.github.io/suicide-squad-GoT-app/"}
              button='GOT'
            />
            <Porfolio
              name='Wuber'
              message='Our clients are the Wineries, the wine consumers and wine producers of Adelaide. This platform connects these words. To bring new wine experiences and foment new connections'
              photo={wuber}
              links={"https://wuber-wines.herokuapp.com/"}
              button='WUBER'
            />
            <Porfolio
              name='Fitness Traker'
              message=' Track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise.'
              photo={fitnessTracker}
              links={"https://github.com/Anieto86/Workout-Tracker"}
              button='Fitness Traker'
            />
            <Porfolio
              name='Quizapp'
              message=' Quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers.'
              photo={quizzApp}
              links={"https://github.com/Anieto86/4-Quizapp"}
              button='Quizapp'
            />
            <Porfolio
              name='Work Day Scheduler'
              message='This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.  Moment.js library to work with date and time'
              photo={scheduler}
              links={"https://github.com/Anieto86/5-work-days-scheduler"}
              button='Work Day Scheduler'
            />

            <Porfolio
              name='Password Generator'
              message='Create an application that generates a random password based on user-selected criteria.'
              photo={passwordGenerator}
              links={"https://github.com/Anieto86/3-password-generator"}
              button='Password Generator'
            />
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default App;

// }
