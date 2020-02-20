import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Profile from './Profile';

class Fighter extends Component {
    render() {
        return (
            <div>
                <Breadcrumb title="hadomanh"/>
                <Profile/>
            </div>
        );
    }
}

export default Fighter;