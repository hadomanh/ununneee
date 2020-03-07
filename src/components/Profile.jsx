import React, { Component } from 'react';
import {
    useParams
} from "react-router-dom";

class Profile extends Component {

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

        console.log(this.props.match.params);
        

        return (

            <div className="games-details-area section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-xs-45">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="game-image-gallery-wrap">
                                        <div className="game-image-large">
                                            <div className="game-image img-full">
                                                <img src="assets/images/game/game-large/game-large1.jpg" alt="" />
                                            </div>
                                            <div className="game-image img-full">
                                                <img src="assets/images/game/game-large/game-large3.jpg" alt="" />
                                            </div>
                                            <div className="game-image img-full">
                                                <img src="assets/images/game/game-large/game-large2.jpg" alt="" />
                                            </div>
                                            <div className="game-image img-full">
                                                <img src="assets/images/game/game-large/game-large2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="game-image-thumbs">
                                            <div className="sm-image"><img src="assets/images/game/game-large/game-large1.jpg" alt="product image thumb" /></div>
                                            <div className="sm-image"><img src="assets/images/game/game-small/game-small2.jpg" alt="product image thumb" /></div>
                                            <div className="sm-image"><img src="assets/images/game/game-small/game-small1.jpg" alt="product image thumb" /></div>
                                            <div className="sm-image"><img src="assets/images/game/game-small/game-small1.jpg" alt="product image thumb" /></div>
                                        </div>
                                        <div className="game-description mb-45">
                                            <h3>{this.props.match.params.id}</h3>
                                            <p><strong>Need for Sped</strong> rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally tances occur in which toil and pain can procure him some great pleasure pleasure rationally encounter sequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain itsuse it is pain, but because occasionally circumstances occur in which toil and pain can procure </p>
                                            <p>Rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally tances occur in which toil and pain can procure him some great pleasure pleasure rationally encounte</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="timelaine-wrapper mb-30">
                                        <div className="single-timeline pb-30">
                                            <h4>the story behiend the game</h4>
                                            <p>Rationally encounter consequences that are extremely painful. Nor again is there anyone oves or pursues or desires to obtain pain of itself, because it is pain, but because sionally tances occur in which toil and pain can procure him some great pleasure pleasure </p>
                                        </div>
                                        <div className="single-timeline pb-30">
                                            <h4>creative team</h4>
                                            <p>Rationally encounter consequences that are extremely painful. Nor again is there anyone oves or pursues or desires to obtain pain of itself, because it is pain, but because sionally tances occur in which toil and pain can procure him some great pleasure pleasure </p>
                                        </div>
                                        <div className="single-timeline pb-30">
                                            <h4>First Release</h4>
                                            <p>Rationally encounter consequences that are extremely painful. Nor again is there anyone oves or pursues or desires to obtain pain of itself, because it is pain, but because sionally tances occur in which toil and pain can procure him some great pleasure pleasure </p>
                                            <p>Rationally encounter consequences that are extremely painful. Nor again is there anyone oves or pursues or desires to obtain pain of itself, because it is pain</p>
                                        </div>
                                        <div className="single-timeline pb-30">
                                            <h4>compitable for</h4>
                                            <span>PC  -  XBOX  -  PS4</span>
                                            <p>Rationally encounter consequences that are extremely painful. Nor again is there anyone oves or pursues or desires to obtain pain of itself, because it is pain, but because sionally tances occur in which toil and pain can procure him some great pleasure pleasure </p>
                                        </div>
                                        <div className="single-timeline pb-30">
                                            <h4>PRICE AND DOWNLOAD</h4>
                                            <span className="game-price">PRICE $49</span>
                                            <a href="checkout.html">CLICK HERE FOR DOWNLOAD</a>
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
                                                <a href="#">Adam Smith</a>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-thumbs-o-up" />425</a></li>
                                                    <li><a href="#"><i className="fa fa-thumbs-o-down" />65</a></li>
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
                                                <a href="#">Thomas Morgan</a>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-thumbs-o-up" />425</a></li>
                                                    <li><a href="#"><i className="fa fa-thumbs-o-down" />65</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*Single Review End*/}
                                        <div className="reply-btn">
                                            <a href="#">view more <i className="icofont-long-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-area mt-sm-50 mt-xs-50">
                                {/*Single Sidebar Widget Start*/}
                                <div className="single-sidebar-widget mb-45">
                                    <h3>featured games</h3>
                                    <div className="single-featured-game mb-20">
                                        <div className="game-img">
                                            <a href="#"><img src="assets/images/banner/sidebar-banner1.jpg" alt="" /></a>
                                            <a className="game-title" href="#">the killer</a>
                                        </div>
                                    </div>
                                    <div className="single-featured-game mb-20">
                                        <div className="game-img">
                                            <a href="#"><img src="assets/images/banner/sidebar-banner2.jpg" alt="" /></a>
                                            <a className="game-title" href="#">muscle cars</a>
                                        </div>
                                    </div>
                                </div>
                                {/*Single Sidebar Widget End*/}
                                {/*Single Sidebar Widget Start*/}
                                <div className="single-sidebar-widget mb-45">
                                    <h3>follow us</h3>
                                    <div className="sidebar-social">
                                        <ul>
                                            <li><a className="facebook" href="#"><i className="icofont-facebook" /></a></li>
                                            <li><a className="youtube" href="#"><i className="icofont-youtube-play" /></a></li>
                                            <li><a className="instagram" href="#"><i className="icofont-instagram" /></a></li>
                                            <li><a className="twitter" href="#"><i className="icofont-twitter" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Single Sidebar Widget End*/}
                                {/*Single Sidebar Widget Start*/}
                                <div className="single-sidebar-widget mb-45">
                                    <h3>popular/recomended</h3>
                                    <div className="popular-game mb-20">
                                        <div className="game-img">
                                            <a href="#"><img src="assets/images/banner/sidebar-banner3.jpg" alt="" /></a>
                                        </div>
                                        <div className="game-content">
                                            <h3><a href="#">Splinter cell</a></h3>
                                            <span>pc/xbox/ps4</span>
                                        </div>
                                    </div>
                                    <div className="popular-game mb-20">
                                        <div className="game-img">
                                            <a href="#"><img src="assets/images/banner/sidebar-banner4.jpg" alt="" /></a>
                                        </div>
                                        <div className="game-content">
                                            <h3><a href="#">battle field 4</a></h3>
                                            <span>pc/xbox/ps4</span>
                                        </div>
                                    </div>
                                </div>
                                {/*Single Sidebar Widget End*/}
                                {/*Single Sidebar Widget Start*/}
                                <div className="single-sidebar-widget mb-45">
                                    <h3>recent post</h3>
                                    <div className="sidebar-rc-post">
                                        <ul>
                                            <li>
                                                <div className="rc-post-thumb">
                                                    <a href="#"><img src="assets/images/rc-img/rc-img1.jpg" alt="" /></a>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h3><a href="#">latest update of the new version</a></h3>
                                                    <div className="widget-date">05 November, 2018</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="rc-post-thumb">
                                                    <a href="#"><img src="assets/images/rc-img/rc-img2.jpg" alt="" /></a>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h3><a href="#">Crew in the earth get new season</a></h3>
                                                    <div className="widget-date">08 November, 2018</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="rc-post-thumb">
                                                    <a href="#"><img src="assets/images/rc-img/rc-img3.jpg" alt="" /></a>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h3><a href="#">secrect code for the Mortal Kombat 4</a></h3>
                                                    <div className="widget-date">05 November, 2018</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="rc-post-thumb">
                                                    <a href="#"><img src="assets/images/rc-img/rc-img4.jpg" alt="" /></a>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h3><a href="#">need for speed have new challenge</a></h3>
                                                    <div className="widget-date">02 November, 2018</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Single Sidebar Widget End*/}
                                {/*Single Sidebar Widget Start*/}
                                <div className="single-sidebar-widget mb-45">
                                    <div className="sidebar-banner">
                                        <a href="#"><img src="assets/images/banner/banner2.jpg" alt="" /></a>
                                    </div>
                                </div>
                                {/*Single Sidebar Widget End*/}
                                {/*Single Sidebar Widget Start*/}
                                <div className="single-sidebar-widget">
                                    <h3>follow us</h3>
                                    <div className="sidebar-instagram">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/instagram/instagram1.jpg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/instagram/instagram2.jpg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/instagram/instagram3.jpg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/instagram/instagram4.jpg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/instagram/instagram5.jpg" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/instagram/instagram6.jpg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Single Sidebar Widget End*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;