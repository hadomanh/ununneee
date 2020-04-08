import React, { Component } from 'react';
import PlayerListItem from './PlayerListItem';
import axios from 'axios';

const pageSize = 3;

class PlayerGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
        }
    }

    render() {

        var that = this;

        axios({
            method: 'get',
            url: "http://localhost:5000/users/pagination?pageNumber=" + this.props.match.params.page,
        })
            .then(function (response) {
                that.setState({
                    players: response.data.data.data,
                });
            })
            .catch(function (error) {
                //handle error
                if (error)
                    console.log(error);
            })

        return (
            <div className="row">
                {this.state.players.map((item) => <PlayerListItem name={item.name} />)}
            </div>
        );
    }
}

export default PlayerGrid;