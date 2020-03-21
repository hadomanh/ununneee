import React, { useState, useEffect } from 'react';
import ChatContact from './Chat/ChatContact';
import LeftMessage from './Chat/LeftMessage';
import RightMessage from './Chat/RightMessage';
import ScrollToBottom from 'react-scroll-to-bottom';
import openSocket from 'socket.io-client';
import {
    NavLink
} from "react-router-dom";
import _ from 'lodash';
const socket = openSocket('http://localhost:5000');

const Chat = (props) => {

    const [id, setId] = useState(socket.id);
    const [isTyping, setIsTyping] = useState('');
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [clients, setClients] = useState([]);
    const [receiverId, setReceiverId] = useState("");

    const sendMessage = (event) => {
        event.preventDefault();

        setMessage("");

        var newMessage = {
            senderId: id,
            receiverId: receiverId,
            content: event.target.value
        }

        setMessages([...messages, newMessage]);

        socket.emit('send', newMessage)

    }

    const handleChange = (message) => {
        console.log(message);

        setMessage(message);
        socket.emit('typing', receiverId);
    }

    useEffect(() => {
        socket.on('connect', () => {
            console.log("socketID", socket.id);
            setId(socket.id);
        });
    });

    useEffect(() => {
        socket.on('newClient', clients => {
            console.log("clients", _.difference(clients, [id]));
            setClients(_.difference(clients, [id]));
        });
    });

    useEffect(() => {
        socket.on('typing', typer => {
            setIsTyping(typer);
        });
    });

    useEffect(() => {
        socket.on('message', (data) => {
            setIsTyping('');
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
                        {clients.map((item) => {
                            return (<ChatContact clientId={item} setReceiver={()=>setReceiverId(item)}  />)
                        })}
                    </ul>

                </div>

                <div className="col-8">
                    <div className="chat-label" >
                        <div className="chat-contact-cover">
                            <img src="assets/images/game/game9.jpg" alt="" />
                        </div>
                        {/* <h2>Do Manh Ha</h2> */}
                        <i className="ml-5">{receiverId}</i>
                    </div>
                    <hr />
                    <ScrollToBottom className="chat-window">

                        {messages.map(item => {
                            if (item.senderId === id) {
                                return <RightMessage name={item.senderId} time="3:30 pm" message={item.content} />
                            } else {
                                return <LeftMessage name={item.senderId} time="3:30 pm" message={item.content} />
                            }
                        })}

                        {(
                            () => {
                                if (isTyping) {
                                    return <LeftMessage message={isTyping + " typing..."} />
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