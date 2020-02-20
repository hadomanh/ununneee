import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class Gallery extends Component {
    render() {
        return (
            <section className="gallery_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="section_tittle text-center">
                                <h2>Top Fighters</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="gallery_part_item">
                                <div className="grid">
                                    <div className="grid-sizer" />
                                    <GalleryItem title="Khanh Linh" bio="Come and get it!" imageUrl="gallery_item_1.jpg" />
                                    <GalleryItem title="Do Khanh Huyen" bio="You can't see me!" imageUrl="gallery_item_2.jpg" />
                                    <GalleryItem title="Le Mai Linh" bio="Let's rock!" imageUrl="gallery_item_3.jpg" />
                                    <GalleryItem title="Le Mai Linh" bio="Death is a wind, always by my side!" imageUrl="gallery_item_4.jpg" />
                                    <GalleryItem title="Le Mai Linh" bio="Wanna try?" imageUrl="gallery_item_5.jpg" />
                                    <GalleryItem title="Nguyen Phuong Mai" bio="You can't swipe left, cuz I'm your Mr. Right!" imageUrl="gallery_item_6.jpg" />
                                    <GalleryItem title="Le Tran Diep Anh" bio="On your left!" imageUrl="gallery_item_7.jpg" />
                                    <GalleryItem title="Thu Chang" bio="Come and get it!" imageUrl="gallery_item_8.jpg" />
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