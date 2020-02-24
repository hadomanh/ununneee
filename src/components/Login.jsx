import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const emailRegex = "^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$";
const passwordRegex = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

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
        var that = this;
        event.preventDefault();
        {
            axios({
                method: 'post',
                url: 'http://localhost:5000/users/verify',
                data: {
                    email: this.state.email,
                    password: this.state.pass,
                }
            })
                .then(function (response) {
                    //handle success
                    if (response.status === 200) {
                        const info = {
                            'name': response.data.data.name,
                            'email': response.data.data.email,
                        };
                        window.localStorage.setItem("info", JSON.stringify(info));

                        window.location.href = '/';
                    }
                })
                .catch(function (error) {
                    //handle error
                    if (error.response.status === 400) {
                        console.log('400');
                    }
                    else if (error.response.status === 404) {
                        console.log('404');
                    }
                    else if (error.response.status === 500) {
                        console.log('500');
                    }
                })
                .finally(() => {

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
                console.log("login front-end", response);
                var info = {
                    name: response.data.name,
                    email: response.data.email
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
            <div className="mx-auto" style={{ maxWidth: '400px' }}>

                <div style={{ height: "150px" }}></div>

                <h4 className="text-center text-light">Login</h4>
                <p className="text-center">Don't have account? <Link to="/register">Signup now</Link> </p>
                <form onSubmit={(event) => this.handleFormSubmit(event)} >

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                        </div>
                        <input name="email" pattern={emailRegex} title="" className="form-control" placeholder="Email address" type="email" onChange={(event) => this.handleChange(event)} />
                    </div>

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                        </div>
                        <input name="pass" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" className="form-control" placeholder="Password" type="password" onChange={(event) => this.handleChange(event)} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" >Login</button>
                    </div>

                </form>


                <hr className="bg-light" />



                <p>
                    <a href="http://localhost:5000/auth/google" className="btn btn-block btn-google"> <i class="fab fa-google" /> &nbsp; Login via Google</a>
                    <a href className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f" /> &nbsp; Login via facebook</a>
                </p>

            </div>

        );
    }
}

export default Login;