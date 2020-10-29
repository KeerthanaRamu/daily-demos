# Daily simple chat demo 
This demo makes use of the `sendAppMessage()` instance method and the corresponding `app-message` event listener to add a chat interface to a Daily video call. 

![Gif of chat](./screenshot-simple-chat.gif)

## How the demo works 
When a participant types a message and clicks send, a function fires that adds that message to the participant's local display. The function also broadcasts a message to the other participants using Daily's [`sendAppMessage()`](https://docs.daily.co/reference#%EF%B8%8F-sendappmessage) instance method. `sendAppMessage` triggers the `app-message`event. A callback function on `app-message` updates the other participants' displays and changes the text of "Chat" in their menu bar to red. 

To learn more about how we built this, read our [blog post](https://www.daily.co/blog/three-ways-to-add-chat-to-your-video-calls-with-the-daily-api/). 

## Running locally 
1. `cd daily-demos`
2. `cd static-demos`
3. `npm run start` or `npm run dev`
4. Then open your browser and go to `localhost:<port>/static-demos/simple-chat-demo/index.html`

## Contributing and feedback 
Let us know how experimenting with this demo goes! Feel free to [open an Issue](https://github.com/daily-co/daily-demos/issues), or reach us any time at `help@daily.co`. 
 
## What's next 
In this demo, chats do not persist. New callers who join a call are not able to see chat history. For more advanced chat features like this, stay tuned for tutorials on integrating Daily with third-party chat API's. 
