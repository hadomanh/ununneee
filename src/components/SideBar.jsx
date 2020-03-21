import React, { Component } from 'react';
import PlayedGame from './PlayedGame';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const maxFileSize = 5000000;
const imageFileRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: undefined,
            imageURL: '',
            errormessage: '',
        }
    }
    
    handleUploadAva = (event) => {
        event.preventDefault();
        var that = this;
        if (!this.state.file) {
            this.setState({
                errormessage: 'please upload image',
            })
        } else {
            try {
                const formData = new FormData();
                formData.append('image', this.state.file);
                
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/uploads/photos',
                    withCredentials: true,
                    data: formData
                })
                    .then(function (response) {
                        //handle success
                        axios({
                            method: 'post',
                            url: 'http://localhost:5000/users/uploadAva',
                            withCredentials: true,
                            headers: {
                                "Content-Type": "application/json"
                            },
                            data: JSON.stringify({

                                imageUrl: response.data.data,

                            }),
                        })
                            .then(function (response) {
                                //handle success  
                            })
                            .catch(function (error) {
                                //handle error
                                if (error)
                                    console.log(error);
                            })
                            .finally(() => {

                            });
                    })
                    .catch(function (error) {
                        //handle error
                        if (error)
                            console.log(error);
                    })
                    .finally(() => {

                    });

            }
            catch (error) {
                this.setState({
                    errormessage: error.message,
                })
            }
            this.setState({
                errormessage: '',
            })
        }


    }

    handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!imageFileRegex.test(file.name)) {
            this.setState({
                errormessage: 'invalid file',
            });

        }
        else if (file.size > maxFileSize) {
            this.setState({
                errormessage: 'file is too large',
            });

        } else {
            //file reader để cho preview
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                //filereader.result
                this.setState({
                    errormessage: '',
                    file: file,
                    imageUrl: fileReader.result,
                });
            };

        }

    }

    render() {
        return (
            <div className="col-lg-4 order-lg-1 order-2">
                <div className="sidebar-area mt-sm-55 mt-xs-50">
                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget mb-45">
                        <div className="single-featured-game mb-20">
                            <div className="game-img" >
                                <img src="assets/images/game/game9.jpg" alt="" />
                                <a className="game-title" href="kenh14.vn">tanhng</a>
                            </div>
                        </div>
                        <h3>Tien Anh Nguyen</h3>
                        <h5>D.O.B: 24/05/1999</h5>
                    </div>
                    {/*Single Sidebar Widget End*/}
                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget mb-45">
                        <h3>follow me</h3>
                        <div className="sidebar-social">
                            <ul>
                                <li><a className="facebook" href="kenh14.vn"><i className="icofont-facebook" /></a></li>
                                <li><a className="youtube" href="kenh14.vn"><i className="icofont-youtube-play" /></a></li>
                                <li><a className="instagram" href="kenh14.vn"><i className="icofont-instagram" /></a></li>
                                <li><a className="twitter" href="kenh14.vn"><i className="icofont-twitter" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}

                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget mb-45">
                        <h3>Setting</h3>

                        <div className="btn btn-group">

                            <div className="row">

                                {this.state.imageUrl ? null :
                                    <div className="upload-btn-wrapper btn btn-danger col-12">
                                        Upload picture
                                        <input
                                            type="file"
                                            accept="image/*"
                                            filename={this.state.file ? this.state.file.name : ''}
                                            onChange={this.handleFileChange}
                                        />
                                    </div>
                                }

                                {this.state.imageUrl ? (
                                    <div style={{
                                        backgroundImage: `url(${this.state.imageUrl})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '400px',
                                    }}></div>
                                ) : null}

                                {this.state.imageUrl ? (
                                    <div
                                        className="btn btn-success col-12 mt-2"
                                        onClick={(event) => this.handleUploadAva(event)} >
                                        Save picture
                                    </div>
                                ) : null}

                                {this.state.imageUrl ? (
                                    <div className="btn btn-outline-dark col-12 mt-2" onClick={() => this.setState({ imageUrl: '' })}>
                                        Cancel
                                    </div>
                                ) : null}


                                <div className="btn btn-outline-danger col-6 mt-2"><i className="far fa-heart"></i>  Follow</div>
                                <Link className="btn btn-outline-danger col mt-2 ml-2" to={"/profile/" + this.props.id + "/chat"}>
                                    Chat
                                </Link>
                                <div className="btn btn-outline-danger col-6 mt-2">Donate</div>
                                <Link className="btn btn-outline-danger col mt-2 ml-2" to={"/profile/" + this.props.id + "/blog"}>
                                    About
                                </Link>
                            </div>

                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}

                    <div className="single-sidebar-widget mb-45">
                        <h3>most played games</h3>
                        <div className="sidebar-rc-post">
                            <ul>
                                <PlayedGame name="DotA 2" time="5 minutes ago" />
                                <PlayedGame name="CS:GO" time="10 minutes ago" />
                                <PlayedGame name="PUBG" time="45 minutes ago" />
                            </ul>
                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}

                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget">
                        <h3>me on instagram:</h3>
                        <div className="sidebar-instagram">
                            <ul>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram1.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram2.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram3.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram4.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram5.jpg" alt="" /></a></li>
                                <li><a href="kenh14.vn"><img src="assets/images/instagram/instagram6.jpg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}
                </div>
            </div>

        );
    }
}

export default SideBar;