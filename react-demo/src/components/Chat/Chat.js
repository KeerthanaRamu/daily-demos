import React, { useContext, useState, useEffect } from 'react';
import CallObjectContext from '../../CallObjectContext';
import './Chat.css';

export default function Chat(props) {
  const callObject = useContext(CallObjectContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handles the local update, and also broadcasts the update to the app-level history (so all participants see)
  function handleSubmit() {
    const name = callObject.participants().local.user_name
      ? callObject.participants().local.user_name
      : 'Guest';
    callObject.sendAppMessage({ message: inputValue }, '*');
    props.setChatHistory([
      ...props.chatHistory,
      {
        sender: name,
        message: inputValue,
      },
    ]);
  }

  return (
    <div className="chat">
      {props.chatHistory.map((entry, index) => (
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
  );
}

// export default class Chat extends Component {
//   // static contextType lets me access the nearest CallObjectContext via "this.context"
//   static contextType = CallObjectContext;

//   // Setting up state
//   constructor() {
//     super();
//     this.state = {
//       inputValue: '',
//       messages: [{ participant: 'Kimee', message: 'Hello, world!' }],
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // Update the input value
//   handleChange(event) {
//     this.setState({ inputValue: event.target.value });
//   }

//   handleSubmit = () => {
//     console.log(this.state.inputValue);
//     this.context.sendAppMessage({ hello: 'world' }, '*');
//   };

//   render() {
//     const messages = this.state.messages.map((message) => (
//       <div>
//         {message.participant}: {message.message}
//       </div>
//     ));
//     return (
//       <div className="chat">
//         <div>{messages}</div>
//         <label for="chatInput">
//           <input
//             id="chatInput"
//             className="chat-input"
//             type="text"
//             placeholder="Type your message here.."
//             value={this.state.inputValue}
//             onChange={this.handleChange}
//           ></input>
//         </label>
//         <button onClick={this.handleSubmit} className="send-chat-button">
//           SEND
//         </button>
//       </div>
//     );
//   }
// }
