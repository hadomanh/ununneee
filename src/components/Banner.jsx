import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <section className="banner_part">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 col-md-8">
                            <div className="banner_text">
                                <div className="banner_text_iner">
                                    <h1>Charged by phonecard</h1>
                                    <p className="text-right">Viettel, Vinaphone, Mobifone... available</p>
                                    <a href="#" className="btn_1">Buy now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;