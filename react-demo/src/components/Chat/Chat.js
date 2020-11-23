import React from 'react';
import './Chat.css';

export default function Chat(props) {
  return (
    <div className="chat">
      <input
        className="chat-input"
        type="text"
        placeholder="Type a message here.."
      ></input>
      <button className="send-chat-button">SEND</button>
    </div>
  );
}
