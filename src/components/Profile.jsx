import React, { Component } from 'react';
import {
    useParams
} from "react-router-dom";
import axios from 'axios';
import SideBar from './SideBar';
import Blog from './Blog';
import SocialProfile from './SocialProfile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Profile extends Component {

    render() {

        console.log(this.props.match.params.id);
        
        console.log(this.props.match.params);
        return (

            <div className="all-blog-area section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50">
                <div className="container">
                    <div className="row row-25">
                        <SideBar id={this.props.match.params.id} />
                            <Switch>
                                <Route path="/profile/:id/blog">
                                    <Blog />
                                </Route>

                                <Route path="/profile/:id">
                                    <SocialProfile />
                                </Route>

                            </Switch>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;