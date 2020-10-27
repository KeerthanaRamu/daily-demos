# Daily spooky demo

This demo mirrors Daily's [simple-demo](https://github.com/daily-co/daily-demos/tree/main/static-demos/simple-demo), modified to add Halloween-themed call backgrounds and rotating gifs.

It also makes use of the `participant-joined` event to add sound effects.

![Jack-o-lanterns surround a video chat call interface](./assets/jack-o-lantern-demo.png)
_If you stick with the images in this repo, your call might look something like this_.

## Prerequisites

- [Daily account](https://dashboard.daily.co/): Sign up if you don’t have one already!
- [Giphy API key](https://developers.giphy.com/): So that we can have some fun with gifs.

## How the demo works

When the page loads, a Daily video call is created, and a random background image is set behind the call. Another function is called that requests the Giphy API and inserts a series of rotating random gifs outside the callframe. When _another_ participant joins the call, the `participant-joined` event fires that plays a spooky sound.

To learn more about how we built this, read our [DEV post]().

## Running locally

1. Uncomment line 62 in `spooky.html`, and replace the placeholder `url` with your own Daily room URL.
2. Replace line 15 with your own Giphy API key.
3. Make sure you've followed the [instructions at the root of the daily-demos repo](https://github.com/daily-co/daily-demos)
4. `cd static-demos`
5. `npm run start` or `npm run dev`
6. Then open your browser and go to `localhost:<port>/static-demos/spooky-demo/index.html`

## Contributing and feedback

Let us know how experimenting with this demo goes! Feel free to [open an Issue](https://github.com/daily-co/daily-demos/issues), or reach us any time at `help@daily.co`.

## What's next

There’s so much more you can do to customize your call: experiment with different event listeners, styles, etc. You could even build an entirely custom call using [the Daily call object](https://docs.daily.co/docs/build-a-custom-video-chat-interface), for example placing video streams in the windows of a haunted house.
