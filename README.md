# daily-demos
[Daily](https://www.daily.co/) builds video APIs to add video chat to any app or website. 

This `daily-demos` repository hosts some demo projects that make use of [daily-js](https://github.com/daily-co/daily-js).

## Current demos 
### react-demo 
Build an entirely custom video chat interface with our React demo. 

[Code](https://github.com/daily-co/daily-demos/tree/main/react-demo) || [Blog post walkthrough](https://www.daily.co/blog/building-a-custom-video-chat-app-with-react/) 

### static-demos
* [simple-demo](https://github.com/daily-co/daily-demos/blob/master/static-demos/simple-demo/simple.html): Test out embedding Daily's prebuilt UI in a web page. 
* [basics-demo](https://github.com/daily-co/daily-demos/tree/master/static-demos/basics-demo): Pass styling properties to the DailyIframe and add custom buttons above the embed. 
* [simple-chat-demo](https://github.com/daily-co/daily-demos/tree/main/static-demos/simple-chat-demo): Use the Daily `sendAppMessage()` instance method and corresponding `app-message` event listener to add text chat to a video call interface. 
* [mobile-demo](https://github.com/daily-co/daily-demos/tree/main/static-demos/mobile-demo): Display small call "bubbles" for a mobile device UI, and respond to click/touch events. 
* [remote-monitoring](https://github.com/daily-co/daily-demos/tree/main/static-demos/remote-monitoring-demo): Remote monitoring use case. One-way video, and managing bandwidth use dynamically.

## Running demo projects locally
Each demo project is an independent standalone project. You can choose to run a single project, or the entire demo project site.

### Running a single demo project
Using the `static-demos` project as an example:

```bash
# From daily-demos
nvm i
cd static-demos/
npm i

npm run start
# or
npm run dev # automatically restarts server on file changes
```

Then open your browser and go to `localhost:<port>`, using the `port` printed in the terminal after running the above.

### Running the entire demo project site
```bash
# From daily-demos
nvm i
npm i

npm run start
# or
npm run dev # automatically restarts server on file changes
```

Then open your browser and go to [localhost:3000](http://localhost:3000/).

### Running the React demo Electron runner
The following runs the React demo app from within a simple Electron shell.

```bash
# From react-demo-electron-runner
nvm i
npm i

npm run start # points to demos.daily.co
# or
npm run dev # points to localhost:3000 (prerequisite: "Running the entire demo project site")
```

## Contributions 
We welcome all contributions that make it easier for developers to use this repo to get to know Daily. If you'd like to open or claim an issue, add a demo project, or contribute in another way, please read [CONTRIBUTING.md](CONTRIBUTING.md). 

## Contact us 
We're always happy to help developers building on Daily. Reach out to us any time at `help@daily.co`, or [start a chat conversation](https://www.daily.co/contact-us). 