import React, { Component } from 'react';
import SliderItem from './SliderItem';
import Slider from "react-slick";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            {/* Next<i class="icofont-long-arrow-right"></i> */}
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            {/* <i class="icofont-long-arrow-left"></i>Pre */}
        </div>
    );
}

class BannerSlider extends Component {

    render() {
        const settings = {
            infinite: true,
            fade: true,
            dots: false,
            // prevArrow: <button class="slick-prev"><i class="icofont-long-arrow-left"></i>Pre</button>,
            // nextArrow: <button class="slick-next">Next<i class="icofont-long-arrow-right"></i></button>,
            prevArrow: <PrevArrow className="slick-prev"/>,
            nextArrow: <NextArrow className="slick-next"/>,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: false,
                        arrows: true,
                    }
                },
            ]
        };
        return (
            <div className="hero-section section position-relative">
                <Slider className="hero-slider" {...settings}>
                    <SliderItem title="FORTNITE" imgURL="assets/images/hero/hero-3.jpg" />
                    <SliderItem title="THE WITCHER" imgURL="assets/images/hero/hero-1.jpg" />
                    <SliderItem title="OG" imgURL="assets/images/hero/hero-2.jpg" />
                </Slider>
            </div>
        );
    }
}

export default BannerSlider;