import React, { useContext, useState, useEffect } from 'react';
import CallObjectContext from '../../CallObjectContext';
import './Chat.css';

export default function Chat(props) {
  const callObject = useContext(CallObjectContext);
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleSubmit() {
    callObject.sendAppMessage({ message: inputValue }, '*');
    const name = callObject.participants().local.user_name
      ? callObject.participants().local.user_name
      : 'Guest';
    setChatHistory([
      ...chatHistory,
      {
        sender: name,
        message: inputValue,
      },
    ]);
  }

  /**
   * Update chat state based on a message received to all participants.
   *
   */
  useEffect(() => {
    if (!callObject) {
      return;
    }

    function handleAppMessage(event) {
      const participants = callObject.participants();
      const name = participants[event.fromId].user_name
        ? participants[event.fromId].user_name
        : 'Guest';
      setChatHistory([
        ...chatHistory,
        {
          sender: name,
          message: event.data.message,
        },
      ]);
      // Make other icons light up
      props.notification();
    }

    callObject.on('app-message', handleAppMessage);

    return function cleanup() {
      callObject.off('app-message', handleAppMessage);
    };
  }, [callObject, chatHistory]);

  useEffect(() => {
    console.log(...chatHistory);
  }, [chatHistory]);

  return props.onClickDisplay ? (
    <div className="chat">
      {chatHistory.map((entry, index) => (
        <div key={`entry-${index}`} className="messageList">
          <b>{entry.sender}</b>: {entry.message}
        </div>
      ))}
      <label htmlFor="chatInput">
        <input
          id="chatInput"
          className="chat-input"
          type="text"
          placeholder="Type your message here.."
          value={inputValue}
          onChange={handleChange}
        ></input>
      </label>
      <button onClick={handleSubmit} className="send-chat-button">
        Send
      </button>
    </div>
  ) : null;
}
