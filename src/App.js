import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import ClientLogo from './components/ClientLogo';
import AboutUs from './components/AboutUs';
import LiveStream from './components/LiveStream';
import Price from './components/Price';
import Lastest from './components/Lastest';
import Gallery from './components/Gallery';
import Upcoming from './components/Upcoming';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Test from './components/Test';
import Login from './components/Login';
import Fighter from './components/Fighter';

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
      <div className="body_bg">

        <Router>
          <Header />

          <Switch>

            <Route exact path="/">
              {/* <Test/> */}
              <Gallery />
              <Banner />
              <ClientLogo />
              <AboutUs />
              <Lastest />
              <Upcoming />
              <Price />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/fighter">
              <Fighter />
            </Route>

          </Switch>
        </Router>

        <Footer />

      </div>

    </div>
  );
}

export default App;
