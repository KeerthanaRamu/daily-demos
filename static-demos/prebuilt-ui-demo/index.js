/*
 * Main functions: core call infrastructure, letting setting up the room, event listeners, and joining
 * Event listener callbacks: fired when specified Daily events execute
 * Call panel button functions: participant controls
 */

/* Main functions */

// Creates the callframe
// Defines event listeners on Daily events
// Assigns an event listener to the input field to change the join button color
async function setup() {
  callFrame = await window.DailyIframe.createFrame(
    document.getElementById('callframe')
  );

  callFrame
    .on('loaded', showEvent)
    .on('started-camera', showEvent)
    .on('camera-error', showEvent)
    .on('joining-meeting', showEvent)
    .on('joined-meeting', showCallDisplay)
    .on('recording-started', showEvent)
    .on('recording-stopped', resetRecordingButton)
    .on('recording-stats', showEvent)
    .on('recording-error', showEvent)
    .on('app-message', showEvent)
    .on('input-event', showEvent)
    .on('error', showEvent)
    .on('participant-joined', updateParticipantInfoDisplay)
    .on('participant-updated', updateParticipantInfoDisplay)
    .on('participant-left', updateParticipantInfoDisplay)
    .on('left-meeting', hideCallDisplay);

  let roomURL = document.getElementById('room-url');
  const joinButton = document.getElementById('join-call');
  roomURL.addEventListener('input', () => {
    if (roomURL.value) {
      joinButton.classList.toggle('turn-green');
    }
  });
}

// Creates a temporary Daily demo room
// Assigns the demo room URL to the input value
// Changes the color of the 'join' button once a room has been created
async function createDemoRoom() {
  const joinButton = document.getElementById('join-call');
  const roomURL = document.getElementById('room-url');
  room = await createMtgRoom();
  ownerLink = await createMtgLinkWithToken(room, {
    is_owner: true,
    enable_recording: 'local',
  });

  roomURL.value = ownerLink;
  joinButton.classList.toggle('turn-green');
}

// Joins Daily call
// Passes the value in the 'room-url' input to callFrame.join
async function joinCall() {
  const roomURL = document.getElementById('room-url');
  await callFrame.join({
    url: roomURL.value,
    showLeaveButton: true,
  });
}

/* Event listener callbacks */

// Logs the Daily event to the console
function showEvent(e) {
  console.log('callFrame event', e);
}

// 'joined-meeting'
// Displays the call
// Changes instructional text and button to "copy" instead of "create"
// Hides the join call button
// Calls functions to update network stats and display demo room
function showCallDisplay() {
  const callPanel = document.getElementById('call-panel'),
    joinButton = document.getElementById('join-call'),
    instructionText = document.getElementById('instruction-text'),
    topButton = document.getElementById('top-button');

  showEvent();

  callPanel.classList.remove('hide');
  callPanel.classList.add('show');

  instructionText.innerHTML = 'Copy and share the URL to invite others';
  topButton.setAttribute('onclick', 'copyLink()');
  topButton.innerHTML = 'Copy room link';
  joinButton.classList.toggle('hide');

  setInterval(updateNetworkInfoDisplay, 5000);
  displayDemoRoomTimer();
}

// 'left-meeting'
// Hides the call once the participant has exited
// Changes text back to "create" instead of copy
// Clears input and button values
// Restores join call and create demo buttons
function hideCallDisplay() {
  const expiresCountdown = document.getElementById('expires-countdown'),
    callPanel = document.getElementById('call-panel'),
    instructionText = document.getElementById('instruction-text'),
    topButton = document.getElementById('top-button'),
    joinButton = document.getElementById('join-call');

  showEvent();

  expiresCountdown.classList.toggle('hide');

  callPanel.classList.remove('show');
  callPanel.classList.add('hide');

  instructionText.innerHTML =
    'To get started, enter an existing room URL or create a temporary demo room';
  joinButton.classList.toggle('hide');
  topButton.innerHTML = 'Create demo room';
  topButton.setAttribute('onclick', 'createDemoRoom()');
}

// Changes the text on the recording button
function resetRecordingButton() {
  const recordingButton = document.getElementById('recording-button');
  recordingButton.setAttribute('onclick', 'callFrame.startRecording()');
  recordingButton.innerHTML = 'Start recording';
}

/* Call panel button functions */
function copyLink() {
  const link = document.getElementById('room-url');
  link.select();
  document.execCommand('copy');
  console.log('copied');
}

function toggleCamera() {
  callFrame.setLocalVideo(!callFrame.participants().local.video);
}

function toggleMic() {
  callFrame.setLocalAudio(!callFrame.participants().local.audio);
}

function toggleScreenshare() {
  let participants = callFrame.participants();
  const shareButton = document.getElementById('share-button');
  if (participants.local) {
    if (!participants.local.screen) {
      callFrame.startScreenShare();
      shareButton.innerHTML = 'Stop screenshare';
    } else if (participants.local.screen) {
      callFrame.stopScreenShare();
      shareButton.innerHTML = 'Share screen';
    }
  }
}

function toggleRecording() {
  const recordingButton = document.getElementById('recording-button');
  callFrame.startRecording();
  recordingButton.setAttribute('onclick', 'callFrame.stopRecording()');
  recordingButton.innerHTML = 'Stop recording';
}

function updateBackground() {
  const backgrounds = [
    'balloons.jpg',
    'confetti.jpg',
    'dessert.jpg',
    'fireworks.jpg',
    '',
  ];

  document.body.style.backgroundImage = `url('./assets/backgrounds/${
    backgrounds[Math.ceil(Math.random() * (backgrounds.length - 1))]
  }')`;
}

function unsubscribeTracks() {
  callFrame.setSubscribeToTracksAutomatically(false);
  const tracksButton = document.getElementById('tracks-button');
  tracksButton.setAttribute('onclick', 'subscribeTracks()');
  tracksButton.innerHTML = 'Subscribe to video and audio';
}

function subscribeTracks() {
  callFrame.setSubscribeToTracksAutomatically(true);
  const tracksButton = document.getElementById('tracks-button');
  tracksButton.setAttribute('onclick', 'unsubscribeTracks()');
  tracksButton.innerHTML = 'Unsubscribe from video and audio';
}

/* Other helper functions */

// Populates 'network info' with information info from daily-js
async function updateNetworkInfoDisplay() {
  let networkInfo = document.getElementById('network-info'),
    statsInfo = await callFrame.getNetworkStats();
  networkInfo.innerHTML = `
      <li>
        Video send:
        ${Math.floor(statsInfo.stats.latest.videoSendBitsPerSecond / 1000)} kb/s
      </li>
      <li>
        Video recv:
        ${Math.floor(statsInfo.stats.latest.videoRecvBitsPerSecond / 1000)} kb/s
      </li>
      <li>
        Worst send packet loss:
        ${Math.floor(statsInfo.stats.worstVideoSendPacketLoss * 100)}%
      </li>
      <li>Worst recv packet loss:
        ${Math.floor(statsInfo.stats.worstVideoRecvPacketLoss * 100)}%
      </li>
  `;
}

// Loops through callFrame.participants() to list participants on the call
function updateParticipantInfoDisplay(e) {
  showEvent(e);
  let meetingParticipantsInfo = document.getElementById(
      'meeting-participants-info'
    ),
    participants = callFrame.participants(),
    participantsList = '';
  for (var id in participants) {
    let p = participants[id];
    participantsList += `
        <li>${p.user_name || 'Guest'}</li>
    `;
  }
  meetingParticipantsInfo.innerHTML = participantsList;
}

// Displays a countdown timer for the demo room if a demo room has been created
function displayDemoRoomTimer() {
  if (!window.expiresUpdate) {
    window.expiresUpdate = setInterval(() => {
      let exp = room && room.config && room.config.exp;
      if (exp) {
        document.getElementById('expires-countdown').innerHTML = `
           <em>⏳ Heads up! Your demo room expires in
             ${Math.floor((new Date(exp * 1000) - Date.now()) / 1000)}
           seconds ⏳</em>
         `;
      }
    }, 1000);
  }
}
