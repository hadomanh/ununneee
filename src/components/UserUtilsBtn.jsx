import React, { Component } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const maxFileSize = 5000000;
const imageFileRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;

class UserUtilsBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            file: undefined,
            imageURL: '',
            errormessage: '',
            status: "waiting"
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
                }).then(function (response) {
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
                }).catch(function (error) {
                    //handle error
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
                imageUrl: '',
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
            <div className="single-sidebar-widget mb-45">
                <h3>Setting</h3>

                <div className="btn btn-group">

                    <div className="row">

                        {
                            this.state.imageUrl ? null :
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

                        {
                            this.state.imageUrl ? (
                                <div style={{
                                    backgroundImage: `url(${this.state.imageUrl})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '400px',
                                }}></div>
                            ) : null
                        }

                        {
                            this.state.imageUrl ? (
                                <div
                                    className="btn btn-success col-12 mt-2"
                                    onClick={(event) => this.handleUploadAva(event)} >
                                    Save picture
                                </div>
                            ) : null
                        }

                        {
                            this.state.imageUrl ? (
                                <div className="btn btn-outline-dark col-12 mt-2" onClick={() => this.setState({ imageUrl: '' })}>
                                    Cancel
                                </div>
                            ) : null
                        }

                        {
                            (
                                () => {
                                    if (this.state.status === "waiting")
                                        return (
                                            <div className="btn btn-success col-12 mt-2"
                                                onClick={() => {
                                                    this.setState({ status: "working" })
                                                    this.props.toggleStatus("working")
                                                }
                                                }>
                                                <i class="fas fa-toggle-off"></i>  Waiting
                                            </div>
                                        )
                                    else return (
                                        <div className="btn btn-primary col-12 mt-2"
                                            onClick={() => {
                                                this.setState({ status: "waiting" })
                                                this.props.toggleStatus("waiting")
                                            }
                                            } >
                                            <i class="fas fa-toggle-on"></i>  Working
                                        </div>
                                    )
                                }
                            )()
                        }

                        <a className="btn btn-outline-danger col-6 mt-2" href={"/profile/" + this.state.id + "/chat"}>
                            Chat
                        </a>

                        <Link className="btn btn-outline-danger col mt-2 ml-2" to={"/profile/" + this.state.id + "/blog"}>
                            About
                        </Link>

                        <Link className="btn btn-outline-danger col-6 mt-2" to={"/profile/" + this.state.id + "/edit"}>
                            Edit
                        </Link>

                        <Link className="btn btn-outline-danger col mt-2 ml-2" to={"/profile/" + this.state.id + "/post"}>
                            Post
                        </Link>

                    </div>

                </div>
            </div>

        );
    }
}

export default UserUtilsBtn;