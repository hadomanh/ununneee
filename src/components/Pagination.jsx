import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: parseInt(this.props.current)
        }
    }


    pagePagination = () => {
        var items = []

        for (let index = 1; index <= this.props.total; index++) {
            items.push(<li><NavLink activeStyle={{ fontWeight: "bold" }} to={"/list/" + index}>{index}</NavLink></li>)
        }

        return items;
    }

    render() {

        var next = parseInt(this.props.current) + 1, 
            prev = parseInt(this.props.current) - 1;

        return (
            <div className="row">
                <div className="col-12 mb-50">
                    <div className="blog-pagination text-center">
                        <ul className="page-pagination">
                            
                            {(
                                ()=>{
                                    if(this.props.current > 1)
                                        return (<li><Link to={"/list/" + prev}><i className="icofont-long-arrow-left" /></Link></li>)
                                }
                            )()}

                            {this.pagePagination().map((item) => item)}

                            {(
                                ()=>{
                                    if(this.props.current <this.props.total)
                                        return (<li><Link to={"/list/" + next}><i className="icofont-long-arrow-right" /></Link></li>)
                                }
                            )()}
                            
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pagination;