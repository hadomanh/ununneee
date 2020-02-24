import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {


    render() {

        var isLoggedIn = [];
        if(JSON.parse(localStorage.getItem('info')))
        isLoggedIn.push(<li className="nav-item"><NavLink className="nav-link" to="/" activeStyle={{color: 'crimson'}} >WELCOME {JSON.parse(localStorage.getItem('info')).name.toUpperCase()}</NavLink></li>);
        isLoggedIn.push(<li className="nav-item"><NavLink className="nav-link" to="/" activeStyle={{}} >Log out</NavLink></li>);

        var isLoggedOut = [];
        isLoggedOut.push(<li className="nav-item"><NavLink className="nav-link" to="/register" activeStyle={{ fontWeight: "bold", color: "red" }} >Register</NavLink></li>);
        isLoggedOut.push(<li className="nav-item"><NavLink className="nav-link" to="/login" activeStyle={{ fontWeight: "bold", color: "red" }} >Login</NavLink></li>);

        return (
            <header className="main_menu single_page_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo" /> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu_icon"><i className="fas fa-bars" /></span>
                                </button>
                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact to="/" activeStyle={{ fontWeight: "bold", color: "red" }} >Home</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/fighter" activeStyle={{ fontWeight: "bold", color: "red" }} >Fighter</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="team.html">team</a>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Blog</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="blog.html"> blog</a>
                                                <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                            </div>
                                        </li>

                                        

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login" activeStyle={{ fontWeight: "bold", color: "red" }} >Login</NavLink>
                                        </li>

                                        {(
                                            () => {
                                                if (window.localStorage.getItem('info')) {
                                                    return (
                                                        isLoggedIn
                                                    )
                                                }
                                                else return (isLoggedOut)
                                            }
                                        )()}

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;