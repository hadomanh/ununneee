import React, { Component } from 'react';
import SingleFeatured from './SingleFeatured'

class Featured extends Component {
    render() {
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
                            <div className="featured-slide">
                                <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                                <SingleFeatured imgURL="assets/images/feature/feature-slide-1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Featured;