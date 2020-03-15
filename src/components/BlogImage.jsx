import React, { Component } from 'react';
import Slider from "react-slick";

class BlogImage extends Component {
    render() {

        const settings = {
            className: "blog-img",
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="col-12">

                <div className="single-blog-post mb-30">
                    <Slider {...settings}>
                        <a href="kenh14.vn"><img src="assets/images/game/game9.jpg" alt="" /></a>
                        <a href="kenh14.vn"><img src="assets/images/game/game5.jpg" alt="" /></a>
                    </Slider>

                    <div className="blog-content">
                        <h3><a href="kenh14.vn">hidden secret of the elder scroll</a></h3>
                        <p>Some of hiden secret of the  Elder Scroll is the most popular are ames that your can Latest Mega 2019 games offer you ioous league and also alow you to make smile and enjoy the game maek it easy</p>
                        <div className="blog-bottom">
                            <ul className="meta meta-border-bottom">
                                <li><a href="kenh14.vn">Smith</a></li>
                                <li>15 Devember, 2018 </li>
                                <li><a href="kenh14.vn">25 Comments</a></li>
                            </ul>
                            <a className="read-btn" href="kenh14.vn">READ NOW <i className="fa fa-caret-right" /></a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BlogImage;