import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <section className="about_us section_padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5 col-lg-6 col-xl-6">
                            <div className="learning_img">
                                <img src="img/about_img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <div className="about_us_text">
                                <h2>Find out about us in history</h2>
                                <p>About us day nay</p>
                                <a href="#" className="btn_1">Install Now</a>
                                <a href="#" className="btn_1">Watch Tutorial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;