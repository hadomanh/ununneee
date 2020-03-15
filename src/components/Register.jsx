import React, { Component, } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            errorMessage: false,
            emailErrorMessage: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.name);
    }

    handleFormSubmit = (event) => {
        var that = this;
        event.preventDefault();
        if (this.state.password !== this.state.repeatPassword) {
            this.setState({ errorMessage: true });
        }
        else {
            axios({
                method: 'post',
                url: 'http://localhost:5000/users',
                withCredentials: true,
                data: {
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                }
            })
                .then(function (response) {
                    //handle success
                    if (response.status === 201) {
                        alert(response.data.message);
                    };
                    const info = {
                        'name': response.data.data.name,
                        'email': response.data.data.email,
                    };
                    window.localStorage.setItem("info", JSON.stringify(info));
                    window.location.href = '/';
                })
                .catch(function (error) {
                    //handle error
                    if (error.response.status === 400) {
                        that.setState({
                            emailErrorMessage: true
                        });
                    }
                });
        }
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
                console.log("register front-end", response);
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
                                <h3>We will need for your registration</h3>
                                <p>Gilbard provide how all this mistaken idea of denouncing pleasure and sing pain born an will give you a complete account of the system, and expound</p>
                                {/* Login Form */}
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="row">
                                        <div className="col-12 mb-30"><input name='name' type="text" placeholder="Your name here" onChange={this.handleChange} /></div>
                                        <div className="col-12 mb-30"><input name='email' type="email" placeholder="Your email here" onChange={this.handleChange} /></div>
                                        <div className="col-12 mb-30"><input name='password' type="password" placeholder="Enter passward" onChange={this.handleChange} /></div>
                                        <div className="col-12 mb-30"><input name='repeatPassword' type="password" placeholder="Conform password" onChange={this.handleChange} /></div>
                                        <div className="col-12"><input type="submit" value="register" /></div>
                                    </div>
                                </form>
                                <h4>Have an account? please click <Link to="/login">Login</Link> </h4>
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

export default Register;