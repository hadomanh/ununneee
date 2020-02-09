import React, { Component } from 'react';

class ClientLogo extends Component {
    render() {
        return (
            <section className="client_logo">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="client_logo_slider owl-carousel d-flex justify-content-between">
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_6.png" height="60px" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_7.png" height="60px" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_8.png" height="60px" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_9.png" height="60px" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="img/client_logo/client_logo_10.png" height="60px" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ClientLogo;