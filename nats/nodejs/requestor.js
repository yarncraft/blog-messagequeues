var nats = require("nats");

let nc = nats.connect({
  url: "tcp://localhost:4222",
  json: true
});

console.log("Connected to " + nc.currentServer.url.host);

nc.requestOne("time", msg => {
  console.log("the time is", msg);
  nc.close();
});
