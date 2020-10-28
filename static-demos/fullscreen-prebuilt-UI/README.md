# Daily fullscreen prebuilt UI demo
This demo highlights [Daily's prebuilt UI](https://www.daily.co/blog/prebuilt-ui/), and how it can be expanded fullscreen in a website or app. 

![Video call takes up most of screen with menu bar around to manage call](./screenshot-fullscreen-prebuilt-UI.gif)

## Prerequisites 
* [Sign up for a Daily account](https://dashboard.daily.co/signup) to swap the placeholder room URLs for your own. 

## How the demo works 
A participant clicks a "Click here to start a call" button, triggering a function that generates a temporary demo room URL and creates a DailyIframe. The [`iframeStyle` properties](https://docs.daily.co/reference#properties) passed when the DailyIframe is created set the prebuilt UI to fullscreen. 

## Running locally 
1. Make sure you've followed the instructions at the root of the daily-demos repo
2. cd static-demos
3. `npm run start` or `npm run dev`
4. Then open your browser and go to `localhost:<port>/static-demos/fullscreen-prebuilt-ui/fullscreen-prebuilt-ui.html`

## Contributing and feedback 
Let us know how experimenting with this demo goes! Feel free to [open an Issue](https://github.com/daily-co/daily-demos/issues), or reach us any time at `help@daily.co`.

## What's next 
To get to know even more Daily API methods and events, explore our other demos, like [how to add your own chat interface](https://github.com/daily-co/daily-demos/tree/main/static-demos/simple-chat-demo).