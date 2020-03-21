import React, { Component } from 'react';

class EditForm extends Component {

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
            <div className="col-lg-8 order-lg-2 order-1 checkout-form">
                <div id="billing-form" className="mb-10">
                    <h4 className="checkout-title">Profile</h4>
                    <div className="row">
                        <div className="col-md-6 col-12 mb-20">
                            <label>Name*</label>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                            <label>D.O.B*</label>
                            <input type="date" placeholder="" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                            <label>ID*</label>
                            <input type="text" placeholder="Your ID" />
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                            <label>Gender*</label>
                            <select className="form-control">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        <div className="col-md-6 col-12 mb-20">
                            <label>Email*</label>
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="col-md-6 col-12 mb-20">
                            <label>Phone no*</label>
                            <input type="text" placeholder="Phone number" />
                        </div>
                        <div className="col-12 mb-20">
                            <label>Bio</label>
                            <textarea className="my-textarea" placeholder="Something"/>
                        </div>
                        <div className="col-12 mb-20">
                            <label>Address*</label>
                            <input type="text" placeholder="Address line 1" />
                            <input type="text" placeholder="Address line 2" />
                        </div>
                        
                        <div className="col-12 mb-20">
                            <div className="check-box">
                                <input type="checkbox" id="create_account" />
                                <label htmlFor="create_account">Do something?</label>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="place-order df-btn">Save</div>
                <div className="place-order df-cancel-btn">Cancel</div>
            </div>
        );
    }
}

export default EditForm;