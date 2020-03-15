import React, { Component } from 'react';

class LeftMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTime: false
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-start">
                <div
                    onMouseOver={() => this.setState({ showTime: true })}
                    onMouseLeave={() => this.setState({ showTime: false })}
                    className="chat-message chat-message-left">
                    {this.props.message}
                </div>

                {(
                    () => {
                        if (this.state.showTime)
                            return (<i style={{ marginLeft: "10px" }}>{this.props.time}</i>);
                    }
                )()}

            </div>
        );
    }
}

export default LeftMessage;