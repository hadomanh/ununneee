import React, { Component } from 'react';

class Upcoming extends Component {
    render() {
        return (
            <section className="upcomming_war">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section_tittle text-center">
                                <h2>Upcoming Fighter</h2>
                            </div>
                        </div>
                    </div>
                    <div className="upcomming_war_iner">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-10 col-sm-5 col-lg-3">
                                <div className="upcomming_war_counter text-center">
                                    <h2>Tanhng</h2>
                                    <div id="timer" className="d-flex justify-content-between">
                                        <div id="days" />
                                        <div id="hours" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Upcoming;