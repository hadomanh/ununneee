import React, { Component } from 'react';

class BlogImageSlider extends Component {
    render() {
        return (
            <div className="col-12">
                {/*Single Blog Post Start*/}
                <div className="single-blog-post mb-30">
                    <div className="blog-img-slider">
                        <a href="single-blog.html"><img src="assets/images/blog/blog-large4.jpg" alt="" /></a>
                        <a href="single-blog.html"><img src="assets/images/blog/blog-large2.jpg" alt="" /></a>
                        <a href="single-blog.html"><img src="assets/images/blog/blog-large3.jpg" alt="" /></a>
                        <a href="single-blog.html"><img src="assets/images/blog/blog-large1.jpg" alt="" /></a>
                    </div>
                    <div className="blog-content">
                        <h3><a href="single-blog.html">life has no limited speed, but it’s need for speed</a></h3>
                        <p>Some of hiden secret of the  Elder Scroll is the most popular are ames that your can Latest Mega 2019 games offer you ioous league and also alow you to make smile and enjoy the game maek it easy</p>
                        <div className="blog-bottom">
                            <ul className="meta meta-border-bottom">
                                <li><a href="#">Albert</a></li>
                                <li>08 Devember, 2018 </li>
                                <li><a href="#">125 Comments</a></li>
                            </ul>
                            <a className="read-btn" href="single-blog.html">READ NOW <i className="fa fa-caret-right" /></a>
                        </div>
                    </div>
                </div>
                {/*Single Blog Post End*/}
            </div>

        );
    }
}

export default BlogImageSlider;