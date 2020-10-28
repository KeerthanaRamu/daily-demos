# Daily simple demo
This demo highlights [Daily's prebuilt UI](https://www.daily.co/blog/prebuilt-ui/), and the Daily call events that can be monitored in the console. 

![Daily prebuilt video chat widget sits in bottom right corner of screen](./screenshot-simple-demo.png)

## Prerequisites 
* [Sign up for a Daily account](https://dashboard.daily.co/signup) to swap the placeholder room URLs for your own. 

## How the demo works 
A participant clicks a "Click here to start a call" button, triggering a function that generates a temporary demo room URL and creates a DailyIframe. The DailyIframe appears in its default position: the lower right corner. A participant can also monitor [Daily events](https://docs.daily.co/reference#events) on the call by opening up the console. 

## Running locally 
1. `cd daily-demos`
2. `cd static-demos`
3. `npm run start` or `npm run dev`
4. Then open your browser and go to `localhost:<port>/static-demos/simple-demo/simple.html`

## Contributing and feedback 
Let us know how experimenting with this demo goes! Feel free to [open an Issue](https://github.com/daily-co/daily-demos/issues), or reach us any time at `help@daily.co`.

## What's next 
To get to know even more Daily API methods and events, explore our other demos, like [how to add your own chat interface](https://github.com/daily-co/daily-demos/tree/main/static-demos/simple-chat-demo).