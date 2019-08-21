var nats = require("nats");

let nc = nats.connect({
  url: "tcp://localhost:4222",
  json: true
});

console.log("Connected to " + nc.currentServer.url.host);

nc.publish("node-updates", { foo: "bar", answer: 42 });

let inbox = nats.createInbox();

nc.subscribe(inbox, { max: 1 }, msg => {
  console.log(msg);
});

nc.publish("time", {}, inbox);
