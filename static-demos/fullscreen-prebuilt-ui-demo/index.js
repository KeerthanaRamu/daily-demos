// Helper function prints events to the console
// Will be passed as callback to callFrame event handlers
function showEvent(e) {
  console.log('video call event -->', e);
}

async function run() {
  // Create a short-lived demo room, using the imported script
  // If you prefer to hard-code your own link for testing, replace the function call with your own URL, e.g.
  // room = { url: 'https://your-domain.daily.co/hello' }
  room = await createMtgRoom();

  // Create the DailyIframe, passing styling properties to make it fullscreen
  window.callFrame = window.DailyIframe.createFrame({
    iframeStyle: {
      position: 'fixed',
      border: 0,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  });

  // Install event handlers
  callFrame
    .on('loading', showEvent)
    .on('loaded', showEvent)
    .on('started-camera', showEvent)
    .on('camera-error', showEvent)
    .on('joining-meeting', showEvent)
    .on('joined-meeting', showEvent)
    .on('participant-joined', showEvent)
    .on('participant-updated', showEvent)
    .on('participant-left', showEvent)
    .on('recording-started', showEvent)
    .on('recording-stopped', showEvent)
    .on('recording-stats', showEvent)
    .on('recording-error', showEvent)
    .on('recording-upload-completed', showEvent)
    .on('app-message', showEvent)
    .on('input-event', showEvent)
    .on('error', showEvent)
    // Add a leave handler to clean things up
    .on('left-meeting', leave);

  // Join the room
  await callFrame.join({
    url: room.url,
    showLeaveButton: true,
  });

  // Leave handler
  function leave(e) {
    showEvent(e);
    callFrame.destroy();
    document.getElementsByClassName('start-button')[0].style.display =
      'initial';
  }

  // Once a call starts running, hide the start button and prompts
  document.getElementsByClassName('start-button')[0].style.display = 'none';

  // Log information about the call to the console
  console.log(
    ' You are connected to',
    callFrame.properties.url,
    '\n',
    'Use the window.callFrame object to experiment with',
    '\n',
    'controlling this call. For example, in the console',
    '\n',
    'try',
    '\n',
    '    callFrame.participants()',
    '\n',
    '    callFrame.setLocalVideo(false)',
    '\n',
    '    callFrame.startScreenShare()'
  );
}
