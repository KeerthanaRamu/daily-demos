# Daily browser, bandwidth, and device check demo
This demo checks a participant's browser, bandwidth, and device status. It also lets a participant test their camera and microphone in a temporary Daily call. 

![Video call takes up most of screen with menu bar around to manage call](./screenshot-browser-device-test-demo.gif)

## Prerequisites 
* [Sign up for a Daily account](https://dashboard.daily.co/signup)

## How the demo works 
The app calls the [Daily API `supportedBrowser()` method](https://docs.daily.co/reference#-supportedbrowser) and displays a message about the participant's browser accordingly. A participant can then click "continue...test your camera and mic." That generates a test call and runs several tests to confirm the participant's bandwidth and call quality. Once the tests run, the app displays the results to the participant. 

## Running locally 
1. Make sure you've followed the instructions at the root of the daily-demos repo
2. cd static-demos
3. `npm run start` or `npm run dev`
4. Then open your browser and go to `localhost:<port>/static-demos/browser-device-check-demo/browser-device-check-demo.html`

## Contributing and feedback 
Let us know how experimenting with this demo goes! Feel free to [open an Issue](https://github.com/daily-co/daily-demos/issues), or reach us any time at `help@daily.co`.

## What's next 
To get to know even more Daily API methods and events, explore our other demos, like [how to add your own chat interface](https://github.com/daily-co/daily-demos/tree/main/static-demos/simple-chat-demo).