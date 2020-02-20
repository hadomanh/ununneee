import React, { Component } from 'react';

class Price extends Component {
    render() {
        return (
            <section className="pricing_part padding_top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_tittle text-center">
                                <h2>Premium package</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_pricing_part">
                                <p>12 months</p>
                                <h3>$100.00</h3>
                                <ul>
                                    <li>2GB Bandwidth</li>
                                    <li>Two Account</li>
                                    <li>15GB Storage</li>
                                </ul>
                                <a href="#" className="btn_2">Choose Plane</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_pricing_part">
                                <p>6 months</p>
                                <h3>$60.00</h3>
                                <ul>
                                    <li>2GB Bandwidth</li>
                                    <li>Two Account</li>
                                    <li>15GB Storage</li>
                                </ul>
                                <a href="#" className="btn_2">Choose Plane</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_pricing_part">
                                <p>1 month</p>
                                <h3>$15.00</h3>
                                <ul>
                                    <li>2GB Bandwidth</li>
                                    <li>Two Account</li>
                                    <li>15GB Storage</li>
                                </ul>
                                <a href="#" className="btn_2">Choose Plane</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Price;