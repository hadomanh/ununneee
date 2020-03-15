import React, { Component } from 'react';

class ChatContact extends Component {
    render() {
        return (
            <li className="chat-contact">
                <div className="chat-contact-cover">
                    <img src="assets/images/game/game9.jpg" alt="" />
                </div>

                <div className="chat-contact-detail">
                    <h5>Do Manh Ha</h5>
                    <p>em an com chua</p>
                </div>
            </li>
        );
    }
}

export default ChatContact;