import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//components
import Header from "./components/Header";
//import HorizontalHeader from "./components/horizontalHeader.js";
import Home from "./components/Home";
import About from "./components/About";
import Porfolio from "./components/Porfolio";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className=' App'>
        <Route exact path='/'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2 col-md-10 col-sm-10'>
                <Header />
              </div>
              <div className='col-10 col-md-10 col-sm-10'>
                <Home />
              </div>
            </div>
          </div>
        </Route>

        <Route path='/about'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2 col-md-10 col-sm-10'>
                <Header />
              </div>
              <div className='col-10 col-md-10 col-sm-10'>
                <About />
              </div>
            </div>
          </div>
        </Route>

        <Route path='/contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2 col-md-10 col-sm-10'>
                <Header />
              </div>
              <div className='col-9'>
                <Contact />
              </div>
            </div>
          </div>
        </Route>

        <Route path='/porfolio'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2 col-md-10 col-sm-10'>
                <Header />
              </div>
              <div className='profolioAPP col-10'>
                <Porfolio />
              </div>
            </div>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default App;

// }
