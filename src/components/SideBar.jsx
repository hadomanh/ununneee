import React, { Component } from 'react';
import PlayedGame from './PlayedGame';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class SideBar extends Component {
    render() {
        return (
            <div className="col-lg-4 order-lg-1 order-2">
                <div className="sidebar-area mt-sm-55 mt-xs-50">
                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget mb-45">
                        <div className="single-featured-game mb-20">
                            <div className="game-img" >
                                <img src="assets/images/game/game9.jpg" alt="" />
                                <a className="game-title" href="#">tanhng</a>
                            </div>
                        </div>
                        <h3>Tien Anh Nguyen</h3>
                        <h5>D.O.B: 24/05/1999</h5>
                    </div>
                    {/*Single Sidebar Widget End*/}
                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget mb-45">
                        <h3>follow me</h3>
                        <div className="sidebar-social">
                            <ul>
                                <li><a className="facebook" href="#"><i className="icofont-facebook" /></a></li>
                                <li><a className="youtube" href="#"><i className="icofont-youtube-play" /></a></li>
                                <li><a className="instagram" href="#"><i className="icofont-instagram" /></a></li>
                                <li><a className="twitter" href="#"><i className="icofont-twitter" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}

                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget mb-45">
                        <h3>Setting</h3>

                        <div className="btn btn-group">
                            <div className="row">
                                <div className="btn btn-danger col-12">Upload picture</div>
                                <div className="btn btn-outline-danger col-6 mt-2"><i class="far fa-heart"></i>  Follow</div>
                                <div className="btn btn-outline-danger col mt-2 ml-2">Chat</div>
                                <div className="btn btn-outline-danger col-6 mt-2">Donate</div>
                                <div className="btn btn-outline-danger col mt-2 ml-2">About</div>
                            </div>

                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}

                    <div className="single-sidebar-widget mb-45">
                        <h3>most played games</h3>
                        <div className="sidebar-rc-post">
                            <ul>
                                <PlayedGame name="DotA 2" time="5 minutes ago" />
                                <PlayedGame name="CS:GO" time="10 minutes ago" />
                                <PlayedGame name="PUBG" time="45 minutes ago" />
                            </ul>
                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}

                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget">
                        <h3>me on instagram:</h3>
                        <div className="sidebar-instagram">
                            <ul>
                                <li><a href="#"><img src="assets/images/instagram/instagram1.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram2.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram3.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram4.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram5.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram6.jpg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}
                </div>
            </div>

        );
    }
}

export default SideBar;