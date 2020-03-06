import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class Gallery extends Component {
    render() {
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
                    <div className="row game-slide">
                        <div className="col-4">
                            <GalleryItem name="1" imgURL="assets/images/game/game1.jpg"/>
                            <GalleryItem name="2" imgURL="assets/images/game/game2.jpg"/>
                        </div>
                        <div className="col-4">
                            <GalleryItem name="3" imgURL="assets/images/game/game3.jpg"/>
                            <GalleryItem name="4" imgURL="assets/images/game/game4.jpg"/>
                        </div>
                        <div className="col-4">
                            <GalleryItem name="5" imgURL="assets/images/game/game5.jpg"/>
                            <GalleryItem name="6" imgURL="assets/images/game/game6.jpg"/>
                        </div>
                        <div className="col-4">
                            <GalleryItem name="7" imgURL="assets/images/game/game7.jpg"/>
                            <GalleryItem name="8" imgURL="assets/images/game/game8.jpg"/>
                        </div>
                        <div className="col-4">
                            <GalleryItem name="9" imgURL="assets/images/game/game9.jpg"/>
                            <GalleryItem name="10" imgURL="assets/images/game/game10.jpg"/>
                        </div>
                        </div>
                </div>
            </div>

        );
    }
}

export default Gallery;