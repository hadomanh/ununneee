import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            pass: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }



    handleFormSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'post',
            url: 'http://localhost:5000/users/verify',
            withCredentials: true,
            data: {
                email: this.state.email,
                password: this.state.pass,
            }
        })
            .then(function (response) {
                //handle success
                if (response.status === 200) {
                    const info = {
                        name: response.data.data.name,
                        email: response.data.data.email,
                        id: response.data.data.id,
                    };
                    window.localStorage.setItem("info", JSON.stringify(info));
                    window.location.href = '/';
                }
            })
            .catch(function (error) {
                //handle error
                if (error)

                    console.log(error);
            })
            .finally(() => {

            });

    }

    componentDidMount() {
        axios({
            method: "GET",
            url: "http://localhost:5000/auth/google/user",
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                // handle success
                var info = {
                    name: response.data.name,
                    email: response.data.email,
                    id: response.data._id,
                }

                window.localStorage.setItem('info', JSON.stringify(info));

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }


    render() {
        return (
            <div className="login-section section pt-95 pt-lg-75 pt-md-65 pt-sm-55 pt-xs-45">
                <div className="container">
                    <div className="row">
                        {/* Login */}
                        <div className="col-md-6 col-12 d-flex">
                            <div className="gilbard-login">
                                <h3>Login to your account</h3>
                                <p>Gilbard provide how all this mistaken idea of denouncing pleasure and sing pain born an will give you a complete account of the system, and expound</p>
                                {/* Login Form */}
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="row">
                                        <div className="col-12 mb-30"><input name='email' type="email" placeholder="Type your username or email address" onChange={this.handleChange} /></div>
                                        <div className="col-12 mb-20"><input name='pass' type="password" placeholder="Enter your passward" onChange={this.handleChange} /></div>
                                        <div className="col-12 mb-15">
                                            <input type="checkbox" id="remember_me" />
                                            <label htmlFor="remember_me">Remember me</label>
                                            <a href="kenh14.vn">Forgotten pasward?</a>
                                        </div>
                                        <div className="col-12"><input type="submit" value="LOGIN" /></div>
                                    </div>
                                </form>
                                <h4>Don’t have account? please click <Link to="/register">Register</Link> </h4>
                            </div>
                        </div>
                        <div className="col-md-1 col-12 d-flex">
                            <div className="login-reg-vertical-boder" />
                        </div>
                        {/* Login With Social */}
                        <div className="col-md-5 col-12 d-flex">
                            <div className="gilbard-social-login">
                                <h3>Also you can login with...</h3>
                                <a href="http://localhost:5000/auth/facebook" className="facebook-login">Login with <i className="fa fa-facebook" /></a>
                                <a href="http://localhost:5000/auth/google" className="google-plus-login">Login with <i className="fa fa-google-plus" /></a>
                                <a href="kenh14.vn" className="twitter-login">Login with <i className="fa fa-twitter" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;