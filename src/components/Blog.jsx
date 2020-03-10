import React, { Component } from 'react';
import BlogImage from './BlogImage';
import BlogVideo from './BlogVideo';

class Blog extends Component {
    render() {
        return (
            <div className="col-lg-8 order-lg-2 order-1">
                <div className="row">
                    <BlogImage/>
                    <BlogVideo/>
                    </div>
                <div className="row">
                    <div className="col-12">
                        <div className="blog-pagination text-center">
                            <ul className="page-pagination">
                                <li><a href="#"><i className="icofont-long-arrow-left" /></a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">6</a></li>
                                <li><a href="#"><i className="icofont-long-arrow-right" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Blog;