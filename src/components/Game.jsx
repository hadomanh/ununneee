import React, { Component } from 'react';
import GameItem from './GameItem';

class Game extends Component {
    render() {
        return (
            <div className="games-review-section section pb-105 pb-lg-85 pb-md-20 pb-sm-65 pb-xs-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/*Section Title Start*/}
                            <div className="section-title">
                                <h2><span className="color-blue">Games</span> review</h2>
                            </div>
                            {/*Section Title End*/}
                        </div>
                    </div>
                    <div className="row">
                        <GameItem name="DotA 2" imgURL="assets/images/review/review1.jpg" rate={9.9}/>
                        <GameItem name="CS:GO" imgURL="assets/images/review/review1.jpg" rate={8.8}/>
                        <GameItem name="Fortnite" imgURL="assets/images/review/review1.jpg" rate={5.5}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Game;