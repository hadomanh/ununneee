import React, { Component } from 'react';
import PlayedGame from './PlayedGame';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const maxFileSize=5000000;
const imageFileRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;



class SideBar extends Component {
    state={
        file:undefined,
        imageURL:'',
        errormessage:'',
    }
    handleUploadAva = (event) => {
        event.preventDefault();
        var that = this;
     
        {
            axios({
                method: 'post',
                url: 'http://localhost:5000/users/uploadAva',
                withCredentials: true,
                data: {
                    email: JSON.parse(localStorage.getItem('info')).email,
                }
            })
                .then(function (response) {
                    //handle success
                    console.log('uploadAva call success');
                })
                .catch(function (error) {
                    //handle error
                    if(error) 
                    console.log(error);
                })
                .finally(() => {
    
                });
        }
    }

    handleFileChange=(event)=>{
        console.log('handlefile funciton',event.target.files[0]);
        const file=event.target.files[0];

        if (!imageFileRegex.test(file.name)) {
            console.log('eror1');
            this.setState({
                errormessage: 'invalid file',
            });
            
        }
        else if (file.size > maxFileSize) {
            console.log('eror2');
            this.setState({
                errormessage: 'file is too large',
            });

        } else {
            console.log('eror3');
            //file reader để cho preview
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                //filereader.result
                console.log('file reader result',fileReader.result);
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
                                <a className="game-title" href="#">tanhng</a>
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
                                <li><a className="facebook" href="#"><i className="icofont-facebook" /></a></li>
                                <li><a className="youtube" href="#"><i className="icofont-youtube-play" /></a></li>
                                <li><a className="instagram" href="#"><i className="icofont-instagram" /></a></li>
                                <li><a className="twitter" href="#"><i className="icofont-twitter" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*Single Sidebar Widget End*/}

                    {/*Single Sidebar Widget Start*/}
                    <div className="single-sidebar-widget mb-45">
                        <h3>Setting</h3>

                        <div className="btn btn-group">
                        
                            <div className="row">
                            
                            <input
                                placeholder="upload"
                                id='file'
                                type="file"
                                className='form-control-file col-12'
                                accept="image/*"
                                filename={this.state.file ? this.state.file.name : ''}
                                onChange={this.handleFileChange}
                            />
                            
                            {this.state.imageUrl ? (
                            <div style={{
                                backgroundImage: `url(${this.state.imageUrl})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                width: '100%',
                                height: '400px',

                            }}></div>
                        ) : null}
                                <div className="btn btn-danger col-12" onClick={(event)=>this.handleUploadAva(event)} >Upload picture</div>
                                <div className="btn btn-outline-danger col-6 mt-2"><i class="far fa-heart"></i>  Follow</div>
                                <div className="btn btn-outline-danger col mt-2 ml-2">Chat</div>
                                <div className="btn btn-outline-danger col-6 mt-2">Donate</div>
                                <div className="btn btn-outline-danger col mt-2 ml-2">About</div>
                    
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
                                <li><a href="#"><img src="assets/images/instagram/instagram1.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram2.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram3.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram4.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram5.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="assets/images/instagram/instagram6.jpg" alt="" /></a></li>
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