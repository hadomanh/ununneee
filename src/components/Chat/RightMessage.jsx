import React, { Component } from 'react';

class RightMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTime: false
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-end">
                {(
                    () => {
                        if (this.state.showTime)
                            return (<i style={{ marginRight: "10px" }}>{this.props.time}</i>);
                    }
                )()}

                <div
                    onMouseOver={() => this.setState({ showTime: true })}
                    onMouseLeave={() => this.setState({ showTime: false })}
                    className="chat-message chat-message-right">
                    {this.props.message}
                </div>


            </div>
        );
    }
}

export default RightMessage;