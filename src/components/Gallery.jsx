import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import Slider from "react-slick";
class Gallery extends Component {

    state = {
        data: [],
        total: 0,
        currentPageNumber: 1,
    };

    render() {
        const settings = {
            classname: "game-slide",
            swipeToSlide: true,
            rows: 2,
            fade: false,
            dots: true,
            infinite: true,
            autoplaySpeed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };





        return (
            <div className="new-game-area section pb-50 pb-lg-30 pb-md-20 pb-sm-10 pb-xs-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/*Section Title Start*/}
                            <div className="section-title">
                                <h2><span className="color-blue">new</span> streamers</h2>
                            </div>
                            {/*Section Title End*/}
                        </div>
                    </div>

                    <Slider {...settings}>

                        <GalleryItem id="1" name="111" imgURL="assets/images/game/game1.jpg" />
                        <GalleryItem id="2" name="222" imgURL="assets/images/game/game2.jpg" />


                        <GalleryItem id="3" name="333" imgURL="assets/images/game/game3.jpg" />
                        <GalleryItem id="4" name="444" imgURL="assets/images/game/game4.jpg" />


                        <GalleryItem id="5" name="555" imgURL="assets/images/game/game5.jpg" />
                        <GalleryItem id="6" name="666" imgURL="assets/images/game/game6.jpg" />


                        <GalleryItem id="7" name="777" imgURL="assets/images/game/game7.jpg" />
                        <GalleryItem id="8" name="888" imgURL="assets/images/game/game8.jpg" />


                        <GalleryItem id="9" name="999" imgURL="assets/images/game/game9.jpg" />
                        <GalleryItem id="10" name="1000" imgURL="assets/images/game/game10.jpg" />



                    </Slider>


                </div>
            </div>

        );
    }
}

export default Gallery;