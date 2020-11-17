# A video chat app using React and the Daily JavaScript API

This demo is meant to showcase a basic but complete video chat web app using React and the low-level Daily call object. [The call object](https://docs.daily.co/docs/build-a-custom-video-chat-interface#daily-call-object) gives you direct access to the audio and video tracks, letting you build your app however you'd like with those primitives.

![Two participants on a video chat call](./screenshot-react-demo.png)

For a step-by-step guide on how we built this demo, [check out our blog post](https://www.daily.co/blog/building-a-custom-video-chat-app-with-react/).

## Prerequisites

- [Sign up for a Daily account](https://dashboard.daily.co/signup) if you'd like to plug your own room URL into the demo.

## How the demo works

In our app, when a user clicks to start a call, the app will create a [meeting room](https://docs.daily.co/reference#rooms), pass the room’s URL to a new Daily call object, and join the call. The call object is something that keeps track of important information about the meeting, like other participants (including their audio and video tracks) and the things they do on the call (e.g. muting their mic or leaving), and provides methods for interacting with the meeting. The app leverages this object to update its state accordingly, and to carry out user actions like muting or screen-sharing. When the user leaves the meeting room, the call object is destroyed.

## Running locally

1. `cd daily-demos`
2. `nvm i`
3. `cd react-demo`
4. `npm i`
5. `npm run dev`
6. Then open your browser and go to `localhost:<port>/react-demo`

## Contributing and feedback

Let us know how experimenting with this demo goes! Feel free to [open an Issue](https://github.com/daily-co/daily-demos/issues), or reach us any time at `help@daily.co`. You can also join the conversation about this demo on [DEV](https://dev.to/trydaily/build-a-video-chat-app-in-minutes-with-react-and-daily-js-481c).

## What's next

To get to know even more Daily API methods and events, explore our other demos, like [how to add your own chat interface](https://github.com/daily-co/daily-demos/tree/main/static-demos/simple-chat-demo).
