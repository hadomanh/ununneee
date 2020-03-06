import React, { Component } from 'react';

class GalleryItem extends Component {

    render() {
        return (
            <div className="single-game mb-50">
                <div className="game-img">
                    <a href="/profile"><img src={this.props.imgURL} alt="" /></a>
                </div>
                <div className="game-content">
                    <h4><a href="/profile">{this.props.name}</a></h4>
                    <span>pc/xbox/ps4</span>
                </div>
            </div>
        );
    }
}

export default GalleryItem;