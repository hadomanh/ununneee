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
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Slider from './components/Slider';
import Featured from './components/Featured';
import Newsletter from './components/Newsletter';
import Profile from './components/Profile';
import Game from './components/Game';
import BannerSlider from './components/BannerSlider';


function App() {

  axios.get('http://localhost:5000/users')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

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

            <Route path="/register">
              <Banner detail="register" />
              <Register />
            </Route>

            <Route path="/profile">
              <Banner detail="profile" />
              <Route path="/profile/:id" component={Profile} />
            </Route>

          </Switch>


          <Newsletter />
          <Footer />
        </Router>


      </div>

    </div>

  );
}

export default App;
