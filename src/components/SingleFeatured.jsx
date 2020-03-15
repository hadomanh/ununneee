import React, { Component } from 'react';

class SingleFeatured extends Component {
    render() {
        return (
            <div className="single-featured">
                <a href="kenh14.vn"><img src={this.props.imgURL} alt="" /></a>
            </div>
        );
    }
}

export default SingleFeatured;