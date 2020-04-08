import React, { Component } from 'react';

class PlayerListItem extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6">
                {/*Single Gallery Start*/}
                <div className="single-gallery mb-30">
                    <div className="gallery-image">
                        <a href="/profile/1"><img src="assets/images/game/game1.jpg" alt="" /></a>
                        <div className="gallery-hover">
                            <h4>{this.props.name}</h4>
                            <span>pc/xbox/ps4</span>
                        </div>
                    </div>
                </div>
                {/*Single Gallery End*/}
            </div>
        );
    }
}

export default PlayerListItem;