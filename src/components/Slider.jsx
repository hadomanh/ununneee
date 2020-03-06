import React, { Component } from 'react';
import SliderItem from './SliderItem';

class Slider extends Component {    

    render() {
        return (
            <div className="hero-section section position-relative">
                <div className="hero-slider">
                    {/*Hero Item start*/}
                    <SliderItem title="FORTNITE" imgURL="assets/images/hero/hero-3.jpg"/>
                    <SliderItem title="THE WITCHER" imgURL="assets/images/hero/hero-1.jpg"/>
                    <SliderItem title="OG" imgURL="assets/images/hero/hero-2.jpg"/>
                    
                </div>
            </div>

        );
    }
}

export default Slider;