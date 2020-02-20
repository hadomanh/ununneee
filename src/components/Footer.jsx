import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer_part">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-4">
                                <div className="single_footer_part">
                                    <a href="index.html" className="footer_logo_iner"> <img src="img/logo.png" alt="#" /> </a>
                                    <p>Passion Spreading</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="single_footer_part">
                                    <h4>Contact Info</h4>
                                    <p>Address : Hanoi University of Science and Technology</p>
                                    <p>Phone : +0344 982 572</p>
                                    <p>Email : hadomanh99@gmail.com</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="single_footer_part">
                                    <h4>Newsletter</h4>
                                    <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days open </p>
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="" method="get" className="subscribe_form relative mail_part">
                                            <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address" className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '" />
                                            <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm"><i className="far fa-paper-plane" /></button>
                                            <div className="mt-10 info" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copygight_text">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="copyright_text">
                                    <p>
                                        Copyright © All rights reserved | Made with <i className="ti-heart" aria-hidden="true" /> by <a href="" target="_blank">hadm &#38; tanhng</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer_icon social_icon">
                                    <ul className="list-unstyled">
                                        <li><a href="https://fb.com/hadomanh99" className="single_social_icon"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li><a href="https://fb.com/hot.ajushi" className="single_social_icon"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="https://fb.com/dhbkhanoi/" className="single_social_icon"><i className="fas fa-globe" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;