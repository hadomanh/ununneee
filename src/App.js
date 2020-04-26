import React from 'react';
import './App.css';
import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Featured from './components/Featured';
import Newsletter from './components/Newsletter';
import Profile from './components/Profile';
import Game from './components/Game';
import BannerSlider from './components/BannerSlider';
import PlayerList from './components/PlayerList';


function App() {

  return (
    <div className="App">
      <div id="main-wrapper">

        <Router>
          <Header />

          <Switch>
            <Route exact path="/" >
              <BannerSlider/>
              <Featured />
              <Gallery />
              <Game />
            </Route>

            <Route path="/login">
              <Banner detail="login" />
              <Login />
            </Route>
            
            <Route path="/list">
              <Banner detail="list" />
              <Route path="/list/:page" component={PlayerList} />
            </Route>

            <Route path="/register">
              <Banner detail="register" />
              <Register />
            </Route>

            <Route path="/profile">
              <Banner detail="profile" />
              <Route path="/profile/:id" component={Profile} />
            </Route>

          </Switch>


          {/* <Newsletter /> */}
          <Footer />
        </Router>


      </div>

    </div>

  );
}

export default App;
