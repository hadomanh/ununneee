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
import Slider from './components/Slider';
import Featured from './components/Featured';
import Newsletter from './components/Newsletter';
import Profile from './components/Profile';
import Game from './components/Game';


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
              <Slider />
              <Featured />
              <Gallery />

              {/*Video section start*/}
              <div className="video-section section pb-135 pb-lg-115 pb-md-105 pb-sm-95 pb-xs-85">
                <div className="container-fluid p-0">
                  <div className="row no-gutters align-items-end">
                    <div className="col-12">
                      <div className="video-slider-active">
                        <div className="single-video">
                          <div className="video-img video-img-2">
                            <img src="assets/images/video/video-front1.jpg" alt="" />
                            <div className="video-content content-center">
                              <h3>The Magician 3</h3>
                              <a className="video-popup" href="https://www.youtube.com/watch?v=BjiaMBk6rHk"><i className="icofont-play-alt-2" /> view demo</a>
                            </div>
                          </div>
                        </div>
                        <div className="single-video">
                          <div className="video-img video-img-2">
                            <img src="assets/images/video/video-front3.jpg" alt="" />
                            <div className="video-content content-center">
                              <h3>The Magician 3</h3>
                              <a className="video-popup" href="https://www.youtube.com/watch?v=BjiaMBk6rHk"><i className="icofont-play-alt-2" /> view demo</a>
                            </div>
                          </div>
                        </div>
                        <div className="single-video">
                          <div className="video-img video-img-2">
                            <img src="assets/images/video/video-front2.jpg" alt="" />
                            <div className="video-content content-center">
                              <h3>The Magician 3</h3>
                              <a className="video-popup" href="https://www.youtube.com/watch?v=BjiaMBk6rHk"><i className="icofont-play-alt-2" /> view demo</a>
                            </div>
                          </div>
                        </div>
                        <div className="single-video">
                          <div className="video-img video-img-2">
                            <img src="assets/images/video/video-front4.jpg" alt="" />
                            <div className="video-content content-center">
                              <h3>The Magician 3</h3>
                              <a className="video-popup" href="https://www.youtube.com/watch?v=BjiaMBk6rHk"><i className="icofont-play-alt-2" /> view demo</a>
                            </div>
                          </div>
                        </div>
                        <div className="single-video">
                          <div className="video-img video-img-2">
                            <img src="assets/images/video/video-front1.jpg" alt="" />
                            <div className="video-content content-center">
                              <h3>The Magician 3</h3>
                              <a className="video-popup" href="https://www.youtube.com/watch?v=BjiaMBk6rHk"><i className="icofont-play-alt-2" /> view demo</a>
                            </div>
                          </div>
                        </div>
                        <div className="single-video">
                          <div className="video-img video-img-2">
                            <img src="assets/images/video/video-front4.jpg" alt="" />
                            <div className="video-content content-center">
                              <h3>The Magician 3</h3>
                              <a className="video-popup" href="https://www.youtube.com/watch?v=BjiaMBk6rHk"><i className="icofont-play-alt-2" /> view demo</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Video section start*/}
              {/*Games Review Section Start*/}
              <Game/>
            </Route>

            <Route path="/login">
              <Banner path="login" />
              <Login />
            </Route>

            <Route path="/register">
              <Banner path="register" />
              <Register />
            </Route>

            <Route path="/profile">
              <Banner path="profile" />
              <Profile/>
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
