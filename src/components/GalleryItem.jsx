import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
        return (
            // grid-item--height-1 
            // grid-item--height-2 
            // grid-item--width-1 
            // sm_weight 


            <a href={"img/gallery/" + this.props.imageUrl } className={"grid-item bg_img img-gal"} style={{ backgroundImage: 'url("img/gallery/'+ this.props.imageUrl +'")' }}  data-toggle="lightbox" data-title={this.props.title} data-gallery="gallery">
                <div className="single_gallery_item">
                    <div className="single_gallery_item_iner">
                        <div className="gallery_item_text">
                            <p>{this.props.bio}</p>
                            <div className="btn btn-outline-light">Challenge me!</div>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export default GalleryItem;