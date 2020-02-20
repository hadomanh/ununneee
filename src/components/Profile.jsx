import React, { Component } from 'react';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state={
            isFollowed: true,
            isOnline: true
        }
    }

    followBtn = ()=>{
        if(this.state.isFollowed)
        return (<i class="fas fa-heart"/>)
        else return (<i class="far fa-heart"/>)
    }

    toggleFollow = ()=>{
        this.setState({
            isFollowed: !this.state.isFollowed
        });
    }
    

    render() {
        return (
            <section className="content mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Profile Image */}
                            <div className="card card-primary card-outline">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img className="profile-user-img img-fluid img-circle"
                                         src="https://image.freepik.com/free-vector/old-games-seamless-pattern-retro-gaming-pixels-video-game-pixel-art-arcade_102902-925.jpg"
                                          alt="User profile picture"
                                          style={this.state.isOnline ? {borderColor:"#5BC236"}: {}} />
                                    </div>
                                    <h3 className="profile-username text-center text-dark">Ha Do Manh</h3>
                                    <p className="text-muted text-center">Software Engineer</p>
                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <b className="text-dark float-left">Followers</b> <a className="float-right">1,322</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b className="text-dark float-left">Following</b> <a className="float-right">543</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b className="text-dark float-left">Friends</b> <a className="float-right">13,287</a>
                                        </li>
                                    </ul>
                                    <div className="btn btn-danger btn-block" onClick={()=>this.toggleFollow()}>{this.followBtn()}  Follow</div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                            {/* /.card */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item"><a className="nav-link active" href="#activity" data-toggle="tab">Activity</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                                    </ul>
                                </div>{/* /.card-header */}
                                
                            </div>
                            {/* /.nav-tabs-custom */}
                        </div>
                        {/* /.col */}
                    </div>
                </div>
            </section>

        );
    }
}

export default Profile;