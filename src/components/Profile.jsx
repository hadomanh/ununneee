import React, { Component } from 'react';
import SideBar from './SideBar';
import Blog from './Blog';
import SocialProfile from './SocialProfile';
import {
    Switch,
    Route,
} from "react-router-dom";
import Chat from './Chat';
import EditForm from './EditForm';
import PostForm from './PostForm';

class Profile extends Component {

    render() {
        return (

            <div className="all-blog-area section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50">
                <div className="container">
                    <div className="row row-25">
                        <SideBar id={this.props.match.params.id} />
                        <Switch>
                            <Route path="/profile/:id/blog">
                                <Blog />
                            </Route>

                            <Route path="/profile/:id/chat">
                                <Chat />
                            </Route>

                            <Route exact path="/profile/:id">
                                <SocialProfile />
                            </Route>

                            <Route path="/profile/:id/edit">
                                <EditForm />
                            </Route>

                            <Route path="/profile/:id/post">
                                <PostForm />
                            </Route>

                        </Switch>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;