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

            <div className="all-blog-area section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50">
                <div className="container">
                    <div className="row row-25">
                        <div className="col-lg-8 order-lg-2 order-1">
                            <div className="row">
                                <div className="col-12">
                                    {/*Single Blog Post Start*/}
                                    <div className="single-blog-post mb-30">
                                        <div className="blog-img">
                                            <a href="single-blog.html"><img src="assets/images/blog/blog-large1.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <h3><a href="single-blog.html">hidden secret of the elder scroll</a></h3>
                                            <p>Some of hiden secret of the  Elder Scroll is the most popular are ames that your can Latest Mega 2019 games offer you ioous league and also alow you to make smile and enjoy the game maek it easy</p>
                                            <div className="blog-bottom">
                                                <ul className="meta meta-border-bottom">
                                                    <li><a href="#">Smith</a></li>
                                                    <li>15 Devember, 2018 </li>
                                                    <li><a href="#">25 Comments</a></li>
                                                </ul>
                                                <a className="read-btn" href="single-blog.html">READ NOW <i className="fa fa-caret-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Blog Post End*/}
                                </div>
                                <div className="col-12">
                                    {/*Single Blog Post Start*/}
                                    <div className="single-blog-post mb-30">
                                        <div className="blog-video">
                                            <a href="single-blog.html"><img src="assets/images/blog/blog-large2.jpg" alt="" /></a>
                                            <a className="video-btn" href><i className="icofont-play-alt-2" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <h3><a href="single-blog.html">life has no limited speed, but it’s need for speed</a></h3>
                                            <p>Some of hiden secret of the  Elder Scroll is the most popular are ames that your can Latest Mega 2019 games offer you ioous league and also alow you to make smile and enjoy the game maek it easy</p>
                                            <div className="blog-bottom">
                                                <ul className="meta meta-border-bottom">
                                                    <li><a href="#">Nicolus</a></li>
                                                    <li>10 Devember, 2018 </li>
                                                    <li><a href="#">689 Comments</a></li>
                                                </ul>
                                                <a className="read-btn" href="single-blog.html">READ NOW <i className="fa fa-caret-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Blog Post End*/}
                                </div>
                                <div className="col-12">
                                    {/*Single Blog Post Start*/}
                                    <div className="single-blog-post mb-30">
                                        <div className="blog-img">
                                            <a href="single-blog.html"><img src="assets/images/blog/blog-large3.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <h3><a href="single-blog.html">secret code, new adventure for the witcher 3</a></h3>
                                            <p>Some of hiden secret of the  Elder Scroll is the most popular are ames that your can Latest Mega 2019 games offer you ioous league and also alow you to make smile and enjoy the game maek it easy</p>
                                            <div className="blog-bottom">
                                                <ul className="meta meta-border-bottom">
                                                    <li><a href="#">Carlos</a></li>
                                                    <li>13 Devember, 2018 </li>
                                                    <li><a href="#">399 Comments</a></li>
                                                </ul>
                                                <a className="read-btn" href="single-blog.html">READ NOW <i className="fa fa-caret-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Blog Post End*/}
                                </div>
                                <div className="col-12">
                                    {/*Single Blog Post Start*/}
                                    <div className="single-blog-post mb-30">
                                        <div className="blog-img-slider">
                                            <a href="single-blog.html"><img src="assets/images/blog/blog-large4.jpg" alt="" /></a>
                                            <a href="single-blog.html"><img src="assets/images/blog/blog-large2.jpg" alt="" /></a>
                                            <a href="single-blog.html"><img src="assets/images/blog/blog-large3.jpg" alt="" /></a>
                                            <a href="single-blog.html"><img src="assets/images/blog/blog-large1.jpg" alt="" /></a>
                                        </div>
                                        <div className="blog-content">
                                            <h3><a href="single-blog.html">life has no limited speed, but it’s need for speed</a></h3>
                                            <p>Some of hiden secret of the  Elder Scroll is the most popular are ames that your can Latest Mega 2019 games offer you ioous league and also alow you to make smile and enjoy the game maek it easy</p>
                                            <div className="blog-bottom">
                                                <ul className="meta meta-border-bottom">
                                                    <li><a href="#">Albert</a></li>
                                                    <li>08 Devember, 2018 </li>
                                                    <li><a href="#">125 Comments</a></li>
                                                </ul>
                                                <a className="read-btn" href="single-blog.html">READ NOW <i className="fa fa-caret-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Blog Post End*/}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="blog-pagination text-center">
                                        <ul className="page-pagination">
                                            <li><a href="#"><i className="icofont-long-arrow-left" /></a></li>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">6</a></li>
                                            <li><a href="#"><i className="icofont-long-arrow-right" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-1 order-2">
                            <div className="sidebar-area mt-sm-55 mt-xs-50">
                                {/*Single Sidebar Widget Start*/}
                                <div className="single-sidebar-widget mb-45">
                                    <h3>Tien Anh Nguyen</h3>
                                    <div className="single-featured-game mb-20">
                                        <div className="game-img" style={{ height: "320px", width: "320px" }} >
                                            <a href="#">
                                                <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/p960x960/64511272_1164557907061709_2044084333278396416_o.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_ohc=N1IJXg4xkGIAX_1X2z9&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=1571776a673047b6d184609bc51de0ff&oe=5E967D52" alt="" /></a>

                                            <a className="game-title" href="#">24/05/1999</a>
                                        </div>
                                    </div>
                                </div>
                                {/*Single Sidebar Widget End*/}
                                {/*Single Sidebar Widget Start*/}
                                <div className="single-sidebar-widget mb-45">
                                    <h3>follow me</h3>
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
                                    <h3>Setting</h3>

                                    <div className="btn btn-group">
                                        <div className="row">
                                            <div className="btn btn-danger col-12">Upload picture</div>
                                            <div className="btn btn-outline-danger col-6 mt-2">Follow</div>
                                            <div className="btn btn-outline-danger col mt-2 ml-2">Chat</div>
                                            <div className="btn btn-outline-danger col-6 mt-2">Donate</div>
                                            <div className="btn btn-outline-danger col mt-2 ml-2">About</div>
                                        </div>

                                    </div>
                                </div>
                                {/*Single Sidebar Widget End*/}

                                {/*Single Sidebar Widget Start*/}
                                <div className="single-sidebar-widget mb-45">
                                    <h3>games</h3>
                                    <div className="popular-game mb-20">
                                        <div className="game-img">
                                            <a href="#"><img src="assets/images/banner/sidebar-banner3.jpg" alt="" /></a>
                                        </div>
                                        <div className="game-content">
                                            <h3><a href="#">DotA 2</a></h3>
                                            <span>pc/xbox/ps4</span>
                                        </div>
                                    </div>
                                    <div className="popular-game mb-20">
                                        <div className="game-img">
                                            <a href="#"><img src="assets/images/banner/sidebar-banner4.jpg" alt="" /></a>
                                        </div>
                                        <div className="game-content">
                                            <h3><a href="#">Counter Strike: Global Offensive</a></h3>
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
                                <div className="single-sidebar-widget">
                                    <h3>me on instagram:</h3>
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