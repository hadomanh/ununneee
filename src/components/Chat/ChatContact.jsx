import React, { Component } from 'react';

class ChatContact extends Component {
    render() {
        return (
            <li className="chat-contact" onClick={()=>this.props.setReceiver()}>
                <div className="chat-contact-cover">
                    <img src="assets/images/game/game9.jpg" alt="" />
                </div>

                <div className="chat-contact-detail">
                    <h5>Do Manh Ha</h5>
                    <p>{this.props.clientId}</p>
                </div>
            </li>
        );
    }
}

export default ChatContact;