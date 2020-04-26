import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class RenterUtilsBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }
    
    render() {
        return (
            <div className="single-sidebar-widget mb-45">
                <h3>Something</h3>
                <div className="btn btn-group">
                    <div className="row">
                        <div className="btn btn-outline-danger col-6 mt-2"><i className="far fa-heart"></i>  Follow</div>
                        <Link className="btn btn-outline-danger col mt-2 ml-2" to={"/profile/" + this.state.id + "/chat"}>
                            Chat
                        </Link>
                        <div className="btn btn-outline-danger col-6 mt-2">Donate</div>
                        <Link className="btn btn-outline-danger col mt-2 ml-2" to={"/profile/" + this.state.id + "/blog"}>
                            About
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default RenterUtilsBtn;