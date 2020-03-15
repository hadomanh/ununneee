import React, { Component } from 'react';
import Slider from "react-slick";

class SocialProfile extends Component {
    render() {

        const settings = {
            customPaging: function (i) {
                return (
                    <div className="sm-image"><img src={`assets/images/game/game${i+1}.jpg`} alt="#" /></div>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="col-lg-8 order-lg-2 order-1">
                <div className="row">
                    <div className="col-12">
                        <div className="game-image-gallery-wrap">
                            {/* <div className="game-image-large">
                                <div className="game-image-full">
                                    <img src="assets/images/game/game5.jpg" alt="" />
                                </div>
                                <div className="game-image-full">
                                    <img src="assets/images/game/game10.jpg" alt="" />
                                </div>
                                <div className="game-image-full">
                                    <img src="assets/images/game/game7.jpg" alt="" />
                                </div>
                                <div className="game-image-full">
                                    <img src="assets/images/game/game8.jpg" alt="" />
                                </div>
                            </div> */}
                            {/* <div className="game-image-thumbs">
                                <div className="sm-image"><img src="assets/images/game/game5.jpg" alt="product image thumb" /></div>
                                <div className="sm-image"><img src="assets/images/game/game10.jpg" alt="product image thumb" /></div>
                                <div className="sm-image"><img src="assets/images/game/game7.jpg" alt="product image thumb" /></div>
                                <div className="sm-image"><img src="assets/images/game/game8.jpg" alt="product image thumb" /></div>
                            </div> */}

                            <Slider  className="game-image-large" {...settings}>
                                <div className="game-image-full">
                                    <img src="assets/images/game/game5.jpg" alt="" />
                                </div>
                                <div className="game-image-full">
                                    <img src="assets/images/game/game10.jpg" alt="" />
                                </div>
                                <div className="game-image-full">
                                    <img src="assets/images/game/game7.jpg" alt="" />
                                </div>
                                <div className="game-image-full">
                                    <img src="assets/images/game/game8.jpg" alt="" />
                                </div>
                            </Slider>

                            <div className="game-description mb-45">
                                <h3>the witchrer 3 reloded</h3>
                                <p><strong>Need for Sped</strong> rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally tances occur in which toil and pain can procure him some great pleasure pleasure rationally encounter sequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain itsuse it is pain, but because occasionally circumstances occur in which toil and pain can procure </p>
                                <p>Rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally tances occur in which toil and pain can procure him some great pleasure pleasure rationally encounte</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Top donate</h3>
                        <div className="timelaine-wrapper mt-30 mb-30">
                            <div className="single-timeline pb-30">
                                <h4>#1: Do Manh Ha <span className="game-price">$49</span></h4>
                                <blockquote className="blockquote">
                                    <p>Rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because  nally tances occur in which toil and pain can procure </p>
                                </blockquote>
                            </div>
                            <div className="single-timeline pb-30">
                                <h4>#2: Do Manh Ha <span className="game-price">$49</span></h4>
                            </div>
                            <div className="single-timeline pb-30">
                                <h4>#3: Do Manh Ha <span className="game-price">$49</span></h4>
                            </div>
                            <div className="single-timeline pb-30">
                                <h4>#4: Do Manh Ha <span className="game-price">$49</span></h4>
                            </div>
                            <div className="single-timeline pb-30">
                                <h4>#5: Do Manh Ha <span className="game-price">$49</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="ratting-wrap mb-40">
                            <h3>ratings</h3>
                            <div className="rating-area">
                                <div className="total-rating">
                                    <h2>4.82</h2>
                                    <span>(4.8 out of 5)</span>
                                </div>
                                <div className="rating-review">
                                    <div className="single-rating">
                                        <div className="rating-star">
                                            <span>5</span>
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="rating-progress">
                                            <div className="progress">
                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} data-wow-duration="1.5s" data-wow-delay="1.2s" />
                                            </div>
                                        </div>
                                        <div className="rating-count">
                                            <span>980</span>
                                        </div>
                                    </div>
                                    <div className="single-rating">
                                        <div className="rating-star">
                                            <span>4</span>
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="rating-progress">
                                            <div className="progress">
                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} data-wow-duration="1.5s" data-wow-delay="1.2s" />
                                            </div>
                                        </div>
                                        <div className="rating-count">
                                            <span>280</span>
                                        </div>
                                    </div>
                                    <div className="single-rating">
                                        <div className="rating-star">
                                            <span>3</span>
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="rating-progress">
                                            <div className="progress">
                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} data-wow-duration="1.5s" data-wow-delay="1.2s" />
                                            </div>
                                        </div>
                                        <div className="rating-count">
                                            <span>89</span>
                                        </div>
                                    </div>
                                    <div className="single-rating">
                                        <div className="rating-star">
                                            <span>2</span>
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="rating-progress">
                                            <div className="progress">
                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} data-wow-duration="1.5s" data-wow-delay="1.2s" />
                                            </div>
                                        </div>
                                        <div className="rating-count">
                                            <span>25</span>
                                        </div>
                                    </div>
                                    <div className="single-rating">
                                        <div className="rating-star">
                                            <span>1</span>
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="rating-progress">
                                            <div className="progress">
                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} data-wow-duration="1.5s" data-wow-delay="1.2s" />
                                            </div>
                                        </div>
                                        <div className="rating-count">
                                            <span>25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="review-wrap">
                            <h3>reviews(120)</h3>
                            {/*Single Review Start*/}
                            <div className="single-review mb-30">
                                <h4>Best action game play ever</h4>
                                <div className="ratting">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half-o" />
                                </div>
                                <p>The Witcher 3 is the best action game that i play ever. encounter consequences that are mely painful. Nor again is there me anyone who loves or pursues or desires take a trivial meaning less sexample, which of us ever undertakes laborious physical exercise.</p>
                                <div className="review-name-action">
                                    <a href="kenh14.vn">Adam Smith</a>
                                    <ul>
                                        <li><a href="kenh14.vn"><i className="fa fa-thumbs-o-up" />425</a></li>
                                        <li><a href="kenh14.vn"><i className="fa fa-thumbs-o-down" />65</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Single Review End*/}
                            {/*Single Review Start*/}
                            <div className="single-review mb-30">
                                <h4>Really love this game</h4>
                                <div className="ratting">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half-o" />
                                </div>
                                <p>The Witcher 3 is the best action game that i play ever. encounter consequences that are mely painful. Nor again is there me anyone who loves or pursues or desires take a trivial meaning less sexample, which of us ever undertakes laborious physical exercise.</p>
                                <div className="review-name-action">
                                    <a href="kenh14.vn">Thomas Morgan</a>
                                    <ul>
                                        <li><a href="kenh14.vn"><i className="fa fa-thumbs-o-up" />425</a></li>
                                        <li><a href="kenh14.vn"><i className="fa fa-thumbs-o-down" />65</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Single Review End*/}
                            <div className="reply-btn">
                                <a href="kenh14.vn">view more <i className="icofont-long-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SocialProfile;