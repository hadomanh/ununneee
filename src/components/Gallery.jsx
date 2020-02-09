import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <section className="gallery_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="section_tittle text-center">
                                <h2>All Fighter</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="gallery_part_item">
                                <div className="grid">
                                    <div className="grid-sizer" />
                                    <a href="img/gallery/gallery_item_1.png" className="grid-item bg_img img-gal grid-item--height-1" style={{ backgroundImage: 'url("img/gallery/gallery_item_1.png")' }}>
                                        <div className="single_gallery_item">
                                            <div className="single_gallery_item_iner">
                                                <div className="gallery_item_text">
                                                    <i className="ti-zoom-in" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="img/gallery/gallery_item_2.png" className="grid-item bg_img img-gal" style={{ backgroundImage: 'url("img/gallery/gallery_item_2.png")' }}>
                                        <div className="single_gallery_item">
                                            <div className="single_gallery_item_iner">
                                                <div className="gallery_item_text">
                                                    <i className="ti-zoom-in" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="img/gallery/gallery_item_3.png" className="grid-item bg_img img-gal" style={{ backgroundImage: 'url("img/gallery/gallery_item_3.png")' }}>
                                        <div className="single_gallery_item">
                                            <div className="single_gallery_item_iner">
                                                <div className="gallery_item_text">
                                                    <i className="ti-zoom-in" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="img/gallery/gallery_item_5.png" className="grid-item bg_img img-gal grid-item--height-2" style={{ backgroundImage: 'url("img/gallery/gallery_item_5.png")' }}>
                                        <div className="single_gallery_item">
                                            <div className="single_gallery_item_iner">
                                                <div className="gallery_item_text">
                                                    <i className="ti-zoom-in" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="img/gallery/gallery_item_7.png" className="grid-item bg_img img-gal grid-item--height-2" style={{ backgroundImage: 'url("img/gallery/gallery_item_7.png")' }}>
                                        <div className="single_gallery_item">
                                            <div className="single_gallery_item_iner">
                                                <div className="gallery_item_text">
                                                    <i className="ti-zoom-in" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="img/gallery/gallery_item_6.png" className="grid-item bg_img img-gal grid-item--width-1" style={{ backgroundImage: 'url("img/gallery/gallery_item_6.png")' }}>
                                        <div className="single_gallery_item">
                                            <div className="single_gallery_item_iner">
                                                <div className="gallery_item_text">
                                                    <i className="ti-zoom-in" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="img/gallery/gallery_item_4.png" className="grid-item bg_img img-gal sm_weight  grid-item--height-1" style={{ backgroundImage: 'url("img/gallery/gallery_item_4.png")' }}>
                                        <div className="single_gallery_item">
                                            <div className="single_gallery_item_iner">
                                                <div className="gallery_item_text">
                                                    <i className="ti-zoom-in" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Gallery;