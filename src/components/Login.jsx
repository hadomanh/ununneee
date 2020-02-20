import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const emailRegex = "^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$";
const passwordRegex = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

class Login extends Component {
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
                        <input name="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" className="form-control" placeholder="Password" type="password" onChange={(event) => this.handleChange(event)} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" >Login</button>
                    </div>

                </form>


                <hr className="bg-light" />



                <p>
                    <a href className="btn btn-block btn-google"> <i class="fab fa-google" /> &nbsp; Login via Google</a>
                    <a href className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f" /> &nbsp; Login via facebook</a>
                </p>

            </div>

        );
    }
}

export default Login;