import React, { Component } from 'react';
import SingleFeatured from './SingleFeatured'
import Slider from "react-slick";

class Featured extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            swipeToSlide: true
        };

        return (
            <div className="featured-section section pb-95 pb-lg-75 pb-md-65 pb-sm-55 pb-xs-45">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-12">
                            {/*Featured Title Start*/}
                            <div className="featured-title">
                                <h2>FEATURED GAMES</h2>
                                <a href="#">VIEW ALL GAMES</a>
                            </div>
                            {/*Featured Title End*/}
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12">
                                <Slider {...settings}>
                                    <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                    <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                    <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                    <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                    <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                    <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                </Slider>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Featured;