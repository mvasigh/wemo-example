const Wemo = require("wemo-client");
const wemo = new Wemo();

wemo.discover((err, deviceInfo) => {
  const client = wemo.client(deviceInfo);
  client.on("error", console.error);
  client.on("binaryState", val => {
    console.log(`Binary state changed to ${val}`);
  });
  client.setBinaryState(1);
  // blink(client, deviceInfo.friendlyName === "Table Lamp" ? 1 : 0);
});

function blink(client, initialState) {
  let binaryState = initialState;
  setInterval(() => {
    binaryState = binaryState ? 0 : 1
    client.setBinaryState(binaryState);
  }, 3000);
}
