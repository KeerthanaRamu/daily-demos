# Daily remote monitoring demo

This demo illustrates how to monitor the quality of your Daily calls in realtime. It calls [Daily API methods](https://docs.daily.co/reference#instance-methods) to create and join the call, and listens for [Daily events](https://docs.daily.co/reference#events) to enable the buttons.

![User joins a call and toggles the bandwidth of the video track](./screenshot-remote-monitoring-demo.gif)

## Prerequisites

- [Sign up for a Daily account](https://dashboard.daily.co/signup) if you'd like to swap the placeholder room URL for your own.

## How the demo works

From the "human" page, a user clicks to create a Daily room. Once the room is created, they can click the "device page link," and that device will join the call. Then, from the human page, the user can "join meeting (as owner)" to view the device page's camera and to toggle the call bandwidth.

The demo makes use of the Daily [`.setBandwidth()`](https://docs.daily.co/reference#%EF%B8%8F-setbandwidth) and [`.getNetworkStats()`](https://docs.daily.co/reference#%EF%B8%8F-getnetworkstats) methods.

## Running locally

1. `cd daily-demos`
2. `cd static-demos`
3. `npm run start` or `npm run dev`
4. Then open your browser and go to `localhost:<port>/static-demos/remote-monitoring-demo/remote-monitoring-human.html`
5. Click "create room"
6. Open the device page link in a new tab
7. From the "human" page, click "join meeting as owner"
8. When the device video track appears, toggle the different bandwidth options, and monitor network stats

## Contributing and feedback

Let us know how experimenting with this demo goes! Feel free to [open an Issue](https://github.com/daily-co/daily-demos/issues), or reach us any time at `help@daily.co`.

## What's next

To dive even deeper into your Daily call quality, [learn about our `/logs` endpoint](https://www.daily.co/blog/the-logs-endpoint-and-beyond/).
