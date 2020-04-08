import React, { Component } from 'react';
import axios from 'axios';

class EditForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            address1: "",
            address2: "",
            dob:"",
            gender:"",
            phone:"",
            bio:"",
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);
    }

    handleSelected= (event)=>{
        // console.log("here",event.target.value);
        // this.setState({ gender: event.target.value });
        // console.log("here",this.state.gender);
        localStorage.setItem("orderby", event.target.value);
        window.location.reload();
    }
    handleFormSubmit=(event)=>{
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:5000/users/updateprofile',
            withCredentials: true,
            data: {
                name: this.state.name,
                password: this.state.pass,
                address1:this.state.address1,
                address2:this.state.address2,
                bio:this.state.bio,
                phone:this.state.phone,
                gender:this.state.gender,
                id: JSON.parse(localStorage.getItem('info')).id,
            }
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    componentDidMount() {
        





        function loadScript(src) {
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };




        
        loadScript("assets/js/vendor/modernizr-2.8.3.min.js")
        loadScript("assets/js/vendor/jquery-1.12.4.min.js")
        loadScript("assets/js/popper.min.js")
        loadScript("assets/js/bootstrap.min.js")
        loadScript("assets/js/plugins.js")
        loadScript("assets/js/main.js")
    }
    
    render() {

        return (
            <form className="col-lg-8 order-lg-2 order-1 checkout-form" onSubmit={this.handleFormSubmit}>
                <div id="billing-form" className="mb-10">
                    <h4 className="checkout-title">Profile</h4>
                    <div className="row">
                        <div className="col-md-6 col-12 mb-20">
                            <label>Name*</label>
                            <input name='name' onChange={this.handleChange} type="text" placeholder="Name" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                            <label>D.O.B*</label>
                            <input  onChange={this.handleChange} name='dob' type="date" placeholder="" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                            <label>ID*</label>
                            <input type="text" placeholder="Your ID" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                            <label>Gender*</label>
                            {/* <select        
                                value={this.state.gender} 
                                onChange={(event)=>this.handleSelected(event)}   
                                className="form-control"
                                >

                                <option value="a" >Male</option>
                                <option value="b" >Female</option>
                                <option value="c" >Male3</option>
                                <option value="d" >Female3</option>
                                <option value="e" >Male2</option>
                                <option value="f" >Female2</option>
                                <option value="g" >Male1</option>
                                <option value="h" >Female1</option>
                            </select> */}
                                    <select className="form-control" onChange={(event)=>this.handleSelected(event)}>
                                        <option selected value="1">None</option>
                                        <option value="2">High - Low</option>
                                        <option value="3">Low - High</option>
                                    </select>
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                            <label>Email*</label>
                            <input type="email" onChange={this.handleChange} placeholder="Email Address" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                            <label>Phone no*</label>
                            <input name='phone' onChange={this.handleChange} type="text" placeholder="Phone number" />
                        </div>
                        <div className="col-12 mb-20">
                            <label>Bio</label>
                            <textarea name='bio' onChange={this.handleChange} className="my-textarea" placeholder="Something"/>
                        </div>
                        <div className="col-12 mb-20">
                            <label>Address*</label>
                            <input name='address1' onChange={this.handleChange} type="text" placeholder="Address line 1" />
                            <input name='address2' onChange={this.handleChange} type="text" placeholder="Address line 2" />
                        </div>
                        
                        <div className="col-12 mb-20">
                            <div className="check-box">
                                <input type="checkbox" id="create_account" />
                                <label htmlFor="create_account">Do something?</label>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                {/* <div type='submit' className="place-order df-btn">Save</div> */}
                <div className="col-12"><input type="submit" value="SAVE" /></div>
                <div className="place-order df-cancel-btn">Cancel</div>
            </form>
        );
    }
}

export default EditForm;