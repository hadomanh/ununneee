import React, { useState, useEffect } from 'react';
import ChatContact from './ChatContact';
import LeftMessage from './Chat/LeftMessage';
import RightMessage from './Chat/RightMessage';

import ScrollToBottom from 'react-scroll-to-bottom';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

const Chat = (props) => {

    const [id, setId] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = (event) => {
        event.preventDefault();

        setMessage("");

        var newMessage = {
            senderId: id,
            content: event.target.value
        }

        setMessages([...messages, newMessage]);

        socket.emit('send', newMessage)

    }

    const handleChange = (message) => {
        console.log(message);

        setMessage(message);

        socket.emit('typing', "hadm");
    }

    useEffect(() => {
        socket.on('join', clientId => {
            setId(clientId);
        });
    });

    useEffect(() => {
        socket.on('typing', name => {
            setIsTyping(true);
        });
    });

    useEffect(() => {
        socket.on('message', (data) => {
            setIsTyping(false);
            setMessages([...messages, data]);

            console.log(data)
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [messages]);

    return (
        <div className="col-lg-8 order-lg-2 order-1">
            <div className="row">
                <div className="col-4" style={{ padding: "0", margin: "0" }}>
                    <input className="form-control" type="search" placeholder="Search contact..." />
                    <hr />
                    <ul className="chat-contact-list">
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                        <ChatContact />
                    </ul>

                </div>

                <div className="col-8">
                    <div className="chat-label" >
                        <div className="chat-contact-cover">
                            <img src="assets/images/game/game9.jpg" alt="" />
                        </div>
                        <h2>Do Manh Ha</h2>
                    </div>
                    <hr />
                    <ScrollToBottom className="chat-window">
                        
                        {messages.map(item => {
                            if (item.senderId === id) {
                                return <RightMessage time="3:30 pm" message={item.content} />
                            } else {
                                return <LeftMessage time="3:30 pm" message={item.content} />
                            }
                        })}

                        {(
                            () => {
                                if (isTyping) {
                                    return <LeftMessage message="typing..." />
                                }
                            }
                        )()}

                    </ScrollToBottom>

                    {/* <form> */}
                    <input autoComplete="off" className="form-control mt-3" type="text" placeholder="Typing here..."
                        value={message}
                        onChange={(event) => handleChange(event.target.value)}
                        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
                    {/* </form> */}

                </div>

            </div>
        </div>
    );
}

export default Chat;