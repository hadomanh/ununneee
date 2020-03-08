import React, { Component } from 'react';
import {
    useParams
} from "react-router-dom";
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

    componentDidMount() {
        function loadScript(src) {
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript("assets/js/vendor/modernizr-2.8.3.min.js")
        loadScript("assets/js/vendor/jquery-1.12.4.min.js")
        loadScript("assets/js/popper.min.js")
        loadScript("assets/js/bootstrap.min.js")
        loadScript("assets/js/plugins.js")
        loadScript("assets/js/main.js")
    }

    render() {

        console.log(this.props.match.params);

        


        return (

            <div className="all-blog-area section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50">
                <div className="container">
                    <div className="row row-25">
                        <SideBar />
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