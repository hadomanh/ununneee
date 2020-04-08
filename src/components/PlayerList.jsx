import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Pagination from './Pagination';
import PlayerGrid from './PlayerGrid';

class PlayerList extends Component {

    render() {
        return (
            <div className="gallery-area section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50">
                <div className="container">
                    <Switch>
                        <Route path="/list/:page" component={PlayerGrid} />
                    </Switch>

                    <Pagination total={3} current={this.props.match.params.page} />

                </div>
            </div>

        );
    }
}

export default PlayerList;