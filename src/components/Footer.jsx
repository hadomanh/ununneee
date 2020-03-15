import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-section style-2 section bg-theme" style={{ backgroundImage: 'url(assets/images/bg/footer-bg.jpg)' }}>
                {/*Footer Top start*/}
                <div className="footer-top section pt-80 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-40 pb-80 pb-lg-70 pb-md-60 pb-sm-15 pb-xs-40">
                    <div className="container container-1520">
                        <div className="row justify-content-lg-between">
                            {/*Footer Widget start*/}
                            <div className="col-xl-3 col-lg-2 col-md-3">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Widget end*/}
                            {/*Footer Widget start*/}
                            <div className="col-xl-6 col-lg-6 col-md-9">
                                <div className="footer-widget">
                                    <div className="footer-nav">
                                        <nav>
                                            <ul>
                                                <li><a href="kenh14.vn">forums</a></li>
                                                <li><a href="kenh14.vn">demo</a></li>
                                                <li><a href="kenh14.vn">support</a></li>
                                                <li><a href="kenh14.vn">terms &amp; conditions</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Widget end*/}
                            {/*Footer Widget start*/}
                            <div className="col-xl-3 col-lg-4 col-md-12">
                                <div className="footer-widget">
                                    <div className="footer-social">
                                        <span>follow us:</span>
                                        <ul>
                                            <li><a href="kenh14.vn"><i className="icofont-facebook" /></a></li>
                                            <li><a href="kenh14.vn"><i className="icofont-twitter" /></a></li>
                                            <li><a href="kenh14.vn"><i className="icofont-instagram" /></a></li>
                                            <li><a href="kenh14.vn"><i className="icofont-youtube-play" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Widget end*/}
                        </div>
                    </div>
                </div>
                {/*Footer Top end*/}
                {/*Footer bottom start*/}
                <div className="footer-bottom border-color section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="copyright text-center">
                                    <p>Copyright ©2018 <a href="kenh14.vn">Gilbard</a>. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer bottom end*/}
            </footer>

        );
    }
}

export default Footer;