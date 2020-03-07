import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Profile from './Profile';
const Axios=require('axios');
class Fighter extends Component {
    componentDidMount=()=>{
        console.log('params:',window.location.pathname);
        const pathNameParts=window.location.pathname.split('/');
        const fighterId=pathNameParts[pathNameParts.length-1];
        console.log('fighter ID:',fighterId);
        
        Axios({
            method:'get',
            url:`http://localhost:5000/users/get-fighter-by-id?fighterId=${fighterId}`,
        })
        .then(function(response){
            console.log('user lay ra ne',response);
        })
        .catch(function(error){
            console.log('error:',error);
        })
    }


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