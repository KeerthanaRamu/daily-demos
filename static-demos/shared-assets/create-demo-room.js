const newRoomEndpoint =
    'https://fu6720epic.execute-api.us-west-2.amazonaws.com/default/dailyWwwApiDemoNewCall',
  tokenEndpoint =
    'https://dwdd5s2bp7.execute-api.us-west-2.amazonaws.com/default/dailyWWWApiDemoToken';


  // https://github.com/daily-co/rn-daily-js-playground/pull/42/commits/4ae537d3a682e1b8357fae3847039ec2d057bc2c
  async function createMtgRoom() {
  try {
    let response = await fetch(newRoomEndpoint),
      room = await response.json();
    return room;
  } catch (e) {
    console.error(e);
  }
}

async function createMtgLinkWithToken(room, properties = {}) {
  try {
    let response = await fetch(tokenEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        properties: {
          room_name: room.name,
          ...properties,
        },
      }),
    });
    let token = await response.text();
    return `${room.url}?t=${token}`;
  } catch (e) {
    console.error(e);
  }
}
