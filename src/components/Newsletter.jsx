import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        return (
            <div className="newslatter-section section pb-125 pb-lg-105 pb-md-70 pb-sm-85 pb-xs-50 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/*News Latter Area Start*/}
                            <div className="news-latter-area">
                                <div className="news-latter-box">
                                    <h3>SUBSCRIBE OUR <span className="color-blue">NEWSLETTER</span> <br /> GET ALL <span className="color-red">LATEST</span> NEWS, UPDATE, <br /> <span className="color-blue">VIDEOS</span> AND OFFERS </h3>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your email here" />
                                    </form>
                                </div>
                                <div className="news-latter-banner-image">
                                    <img src="assets/images/news-latter/news-banner.png" alt="" />
                                </div>
                            </div>
                            {/*News Latter Area End*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsletter;