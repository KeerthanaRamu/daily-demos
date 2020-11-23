import React, { Component } from 'react';
import './Chat.css';

export default class Chat extends Component {
  sendChatMessage = () => {
    // Update the local display, making sure all previous messages display
    // Also broadcasts message
  };

  render() {
    return (
      <div className="chat">
        <input
          id="chatInput"
          className="chat-input"
          type="text"
          placeholder="Type your message here.."
        ></input>
        <button onClick={this.sendChatMessage} className="send-chat-button">
          SEND
        </button>
      </div>
    );
  }
}
