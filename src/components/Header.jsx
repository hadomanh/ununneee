import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {

    logout = () => {

        window.localStorage.clear();

        axios.get('http://localhost:5000/auth/logout')
            .then((response) => {
                window.location.href = '/';
            })
    }

    // componentWillMount() {
    //     function loadScript(src) {
    //         return new Promise(function (resolve, reject) {
    //             var script = document.createElement('script');
    //             script.src = src;
    //             script.addEventListener('load', function () {
    //                 resolve();
    //             });
    //             script.addEventListener('error', function (e) {
    //                 reject(e);
    //             });
    //             document.body.appendChild(script);
    //             document.body.removeChild(script);
    //         })
    //     };

    //     loadScript("assets/js/vendor/modernizr-2.8.3.min.js")
    //     loadScript("assets/js/vendor/jquery-1.12.4.min.js")
    //     loadScript("assets/js/popper.min.js")
    //     loadScript("assets/js/bootstrap.min.js")
    //     loadScript("assets/js/plugins.js")
    //     loadScript("assets/js/main.js")
    // }


    render() {

        var isLoggedOut = [];
        isLoggedOut.push(<li><NavLink to="/login" activeStyle={{ color: "white" }}>LOGIN</NavLink></li>);
        isLoggedOut.push(<li><NavLink to="/register" activeStyle={{ color: "white" }}>REGISTER</NavLink></li>);

        return (
            <header className="header header-static bg-black header-sticky">
                <div className="default-header menu-right">
                    <div className="container container-1520">
                        <div className="row">
                            {/*Logo start*/}
                            <div className="col-12 col-md-3 col-lg-3 order-md-1 order-lg-1 mt-20 mb-20">
                                <div className="logo">
                                    {/* <a href="/"><img src="assets/images/logo.png" alt="" /></a> */}
                                    <NavLink exact to="/" >
                                        <img src="assets/images/logo.png" alt="" />
                                    </NavLink>
                                </div>
                            </div>
                            {/*Logo end*/}
                            {/*Menu start*/}
                            <div className="col-lg-6 col-12 order-md-3 order-lg-2 d-flex justify-content-center">
                                <nav className="main-menu menu-style-2">
                                    <ul>
                                        <li><a href="index.html">Home</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Home One</a></li>
                                                <li><a href="index-2.html">Home Two</a></li>
                                                <li><a href="index-3.html">Home Three</a></li>
                                                <li><a href="index-4.html">Home Four</a></li>
                                                <li><a href="index-5.html">Home Five</a></li>
                                                <li><a href="index-6.html">Home Six</a></li>
                                                <li><a href="index-landing.html">Home Landing</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="games.html">games</a>
                                            <ul className="sub-menu">
                                                <li><a href="games.html">Games</a></li>
                                                <li><a href="games-details.html">Games Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="video.html">Highlights</a></li>
                                        <li><a href="forum.html">Forums</a>
                                            <ul className="sub-menu">
                                                <li><a href="forum.html">Forums</a></li>
                                                <li><a href="forum-create.html">Forums Create</a></li>
                                                <li><a href="forum-post.html">Forums Post</a></li>
                                            </ul>
                                        </li>

                                        {(
                                            () => {
                                                if (JSON.parse(localStorage.getItem('info')))
                                                    return (
                                                        <li><a href={'/profile/' + JSON.parse(localStorage.getItem('info')).id} >Profile</a></li>
                                                    )
                                            }
                                        )()}



                                        <li><a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                <li><a href="blog-list.html">Blog List</a></li>
                                                <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                                <li><a href="single-blog.html">Single Blog</a></li>
                                                <li><a href="single-blog-left.html">Single Blog Left Sidebar</a></li>
                                                <li><a href="gallery.html">Gallery</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="register.html">REGISTER</a></li>
                                            </ul>
                                        </li>

                                        {(
                                            () => {
                                                if (JSON.parse(localStorage.getItem('info')))
                                                    return (
                                                        <li>
                                                            <div className="ava-img mt-3">
                                                                <img src="assets/images/game/game9.jpg" />
                                                            </div>
                                                            <ul className="sub-menu">
                                                                <li><a href="#">buy premium</a></li>
                                                                <li><a href="#">setting</a></li>
                                                                <hr />
                                                                <li><a href="/" >Logout</a></li>
                                                            </ul>
                                                        </li>
                                                    )
                                            }
                                        )()}


                                    </ul>
                                </nav>
                            </div>
                            {/*Menu end*/}
                            {/*Header Right Wrap*/}
                            <div className="col-12 col-md-9 order-md-2 order-lg-3 col-lg-3">
                                <div className="header-right-wrap">
                                    <ul>

                                        {(
                                            () => {
                                                if (JSON.parse(localStorage.getItem('info')))
                                                    return (
                                                        <li onClick={() => this.logout()}>
                                                            <div>LOGOUT</div>
                                                        </li>
                                                    );
                                                else return isLoggedOut;

                                            }
                                        )()}



                                        <li className="header-search"><a className="header-search-toggle" href="#"><i className="icofont-search-2" /></a>
                                            <div className="header-search-form">
                                                <form action="#">
                                                    <input type="text" placeholder="Type and hit enter" />
                                                    <button><i className="icofont-search" /></button>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*Header Right Wrap*/}
                        </div>
                        {/*Mobile Menu start*/}
                        <div className="row">
                            <div className="col-12 d-flex d-lg-none">
                                <div className="mobile-menu" />
                            </div>
                        </div>
                        {/*Mobile Menu end*/}
                    </div>
                </div>
            </header >

        );
    }
}

export default Header;