# Daily basics demo
This demo highlights [Daily's prebuilt UI](https://www.daily.co/blog/prebuilt-ui/), how it can be quickly used to embed a video chat widget, and how a separate menu bar for call participants to control their camera, recording, and screensharing could be built around it. The app calls [Daily API methods](https://docs.daily.co/reference#instance-methods) and listens for [Daily events](https://docs.daily.co/reference#events) to enable the menu bar's button controls. 

![Video call takes up most of screen with menu bar around to manage call](./screenshot-basics-demo.png)

## Prerequisites 
* [Sign up for a Daily account](https://dashboard.daily.co/signup) to swap the placeholder room URLs for your own.

## How the demo works 
A participant clicks a "create a room" button, triggering a helper function that generates a temporary demo room. Once the room is created, the participant can click a new button "join meeting (as owner)". This button calls the Daily API [`.join` method](https://docs.daily.co/reference#%EF%B8%8F-join), letting the participant into the call. Once the participant has joined the call, the other buttons around the interface trigger their corresponding Daily methods, so the user can leave the meeting, toggle their camera, or start a recording or screenshare. The app listens for [Daily events](https://docs.daily.co/reference#events) in order to turn on the menu bar buttons. 

## Running locally 
1. `cd daily-demos`
2. `cd static-demos`
3. `npm run start` or `npm run dev`
4. Then open your browser and go to `localhost:<port>/static-demos/basics-demo/basics.html`

## Contributing and feedback 
Let us know how experimenting with this demo goes! Feel free to [open an Issue](https://github.com/daily-co/daily-demos/issues), or reach us any time at `help@daily.co`.

## What's next 
To get to know even more Daily API methods and events, explore our other demos, like [how to add your own chat interface](https://github.com/daily-co/daily-demos/tree/main/static-demos/simple-chat-demo).