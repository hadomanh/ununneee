import React, { Component,  } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const emailRegex = "^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$";
const passwordRegex = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

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
                    // this.props.push("/");
                    window.location.href='/';
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
<<<<<<< HEAD
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
=======
>>>>>>> master
    }



    render() {

        return (
            <div className="mx-auto" style={{ maxWidth: '400px' }}>
                <div style={{ height: "150px" }}></div>
                <h4 className="text-center text-light">Create Account</h4>
                <p className="text-center">Get started with your free account</p>

                <p>
                    <a href="http://localhost:5000/auth/google" className="btn btn-block btn-google"> <i class="fab fa-google" /> &nbsp; Login via Google</a>
                    <a href className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f" /> &nbsp; Login via facebook</a>
                </p>
                <hr className="bg-light" />

                <p>or</p>

                <form onSubmit={(event) => this.handleFormSubmit(event)} >
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user" /> </span>
                        </div>
                        <input name="name" className="form-control" placeholder="Full name" type="text" onChange={(event) => this.handleChange(event)} />
                    </div>

                    {(() => {
                        if (this.state.emailErrorMessage)
                            return (<i className="text-danger">Email has been used!</i>)
                    })()}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                        </div>
                        <input name="email" pattern={emailRegex} title="" className="form-control" placeholder="Email address" type="email" onChange={(event) => this.handleChange(event)} />
                    </div>

                    {/* <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                                </div>

                                <select className="form-control custom-select" style={{ maxWidth: '120px' }}>
                                    <option selected>+084</option>
                                    <option value={1}>+034</option>
                                    <option value={2}>+035</option>
                                    <option value={3}>+036</option>
                                </select>
                                
                                <input name className="form-control" placeholder="Phone number" type="text" />
                            </div>

                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-building" /> </span>
                                </div>
                                <select className="form-control">
                                    <option selected> Select job type</option>
                                    <option>Designer</option>
                                    <option>Manager</option>
                                    <option>Accaunting</option>
                                </select>
                            </div>  */}

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                        </div>
                        <input name="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" className="form-control" placeholder="Create password" type="password" onChange={(event) => this.handleChange(event)} />
                    </div>


                    {(() => {
                        if (this.state.errorMessage)
                            return (<i className="text-danger">Wrong password!</i>)
                    })()}

                    <div className="form-group input-group">

                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                        </div>
                        <input name="repeatPassword" className="form-control" placeholder="Repeat password" type="password" onChange={(event) => this.handleChange(event)} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" > Create Account</button>
                    </div>

                    <p className="text-center">Have an account? <a href>Log In</a> </p>

                </form>
            </div>

        );
    }
}

export default Register;