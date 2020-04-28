import React, { Component } from 'react';
import PlayedGame from './PlayedGame';
import RenterUtilsBtn from './RenterUtilsBtn';
import UserUtilsBtn from './UserUtilsBtn';
import {
    Link
} from "react-router-dom";
import axios from 'axios';


class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            file: undefined,
            imageURL: '',
            errormessage: '',
            status: "waiting"
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:5000/users/' + this.state.id,
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                this.setState({
                    name: response.data.data.name,
                    email: response.data.data.email,
                    avaUrl: response.data.data.avaUrl,
                });
            }
        })
    }


    render() {
        return (
            <div className="col-lg-4 order-lg-1 order-2">
                <div className="sidebar-area mt-sm-55 mt-xs-50">
                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget mb-45">
                        <div className="single-featured-game mb-20">
                            <div className="game-img" >
                                <img src={"http://localhost:5000/" + this.state.avaUrl} alt="" />
                                <p className="game-title">{this.state.id}</p>
                            </div>
                        </div>
                        <h3>
                            {this.state.name}


                            {(
                                () => {
                                    if (this.state.status === "working") {
                                        return (
                                            <span style={{ color: "red", marginLeft: "10px" }}>
                                                working
                                            </span>
                                        )
                                    } else {
                                        return (
                                            <span style={{ color: "green", marginLeft: "10px" }}>
                                                waiting
                                            </span>
                                        )
                                    }
                                }
                            )()}

                        </h3>

                        <span><b>12</b> follower</span>
                        <span><b>7</b> following</span>
                        <span><b>69h</b> completed</span>
                    </div>

                    {(
                        () => {
                            if (JSON.parse(localStorage.getItem('info')).id === this.state.id) {
                                return (<UserUtilsBtn id={this.state.id} toggleStatus={(currentStt)=>this.setState({status: currentStt})} />)
                            } else {
                                return (<RenterUtilsBtn id={this.state.id} />)
                            }
                        }
                    )()}

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

                    <div className="single-sidebar-widget mb-45">
                        <h3>me on instagram:</h3>
                        <div className="sidebar-instagram">
                            <ul>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram1.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram2.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram3.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram4.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram5.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram6.jpg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}

                    <div className="single-sidebar-widget">
                        <h3>follow me</h3>
                        <div className="sidebar-social">
                            <ul>
                                <li><a className="facebook" href="kenh14.vn"><i className="icofont-facebook" /></a></li>
                                <li><a className="youtube" href="kenh14.vn"><i className="icofont-youtube-play" /></a></li>
                                <li><a className="instagram" href="kenh14.vn"><i className="icofont-instagram" /></a></li>
                                <li><a className="twitter" href="kenh14.vn"><i className="icofont-twitter" /></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default SideBar;