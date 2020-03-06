import React, { Component } from 'react';

class GameItem extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="single-games-review mb-50">
                    <div className="review-img">
                        <a href="games-details.html"><img src={this.props.imgURL} alt="" /></a>
                    </div>
                    <div className="review-content">
                        <h4><a href="#">{this.props.name}</a></h4>
                        <span>rating: {this.props.rate}</span>
                        <p>The Elder Scroll is the most popular are ames that your can Latest Mega 2019 games offer you ioous league and also alow you to make youe and smile</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameItem;