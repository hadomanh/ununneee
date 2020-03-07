import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class GalleryItem extends Component {

    render() {
        return (
            <div className="single-game mb-50">
                <div className="game-img">
                    <Link to={"/profile/" + this.props.id} ><img src={this.props.imgURL} alt="" /></Link>
                </div>
                <div className="game-content">
                    <h4><Link to={"/profile/" + this.props.id} >{this.props.name}</Link></h4>
                    <span>pc/xbox/ps4</span>
                </div>
            </div>
        );
    }
}

export default GalleryItem;