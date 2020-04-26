import React, { Component } from 'react';
import Select from 'react-select'
import axios from 'axios';

const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
]

const gameOptions = [
    { value: 'dota2', label: 'DOTA 2' },
    { value: 'csgo', label: 'CS:GO' },
    { value: 'pubg', label: 'PUBG' },
]

const customStyles = {

    control: () => ({
        height: "44px",
        backgroundColor: "transparent",
        border: "1px solid #999999",
        borderRadius: 0,
        lineHeight: "23px",
        padding: "10px 20px",
        fontSize: "14px",
        color: "#151515",
        cursor: "default"
    }),

    indicatorsContainer: () => ({
        display: "none"

    }),

    indicatorSeparator: () => ({
        display: "none"
    }),

    valueContainer: () => ({

    }),
}

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
                    <form className="row">
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
                            <Select options={genderOptions} styles={customStyles} />
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
                            <label>Game*</label>
                            <Select
                                defaultValue={[gameOptions[2]]}
                                isMulti
                                options={gameOptions}
                                classNamePrefix="select"
                            />
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
                    </form>
                </div>
                
                {/* <div type='submit' className="place-order df-btn">Save</div> */}
                <div className="col-12"><input type="submit" value="SAVE" /></div>
                <div className="place-order df-cancel-btn">Cancel</div>
            </form>
        );
    }
}

export default EditForm;