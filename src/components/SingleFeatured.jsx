import React, { Component } from 'react';

class SingleFeatured extends Component {
    render() {
        return (
            <div className="single-featured">
                <a href="#"><img src={this.props.imgURL} alt="" /></a>
            </div>
        );
    }
}

export default SingleFeatured;