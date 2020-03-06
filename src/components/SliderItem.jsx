import React, { Component } from 'react';

class SliderItem extends Component {
    render() {
        return (
            <div className="hero-item hero-item-2" style={{ backgroundImage: 'url(' + this.props.imgURL + ')' }}>
                <div className="container container-1520">
                    <div className="row">
                        <div className="col-12">
                            {/*Hero Content start*/}
                            <div className="hero-content">
                                <h1>{this.props.title}</h1>
                                <h2>BATTLE BEGAN’S HERE</h2>
                                <a className="df-btn" href="#">Buy now</a>
                            </div>
                            {/*Hero Content end*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderItem;