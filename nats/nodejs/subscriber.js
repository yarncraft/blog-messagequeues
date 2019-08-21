var nats = require("nats");

let nc = nats.connect({
  url: "tcp://myname:password@localhost:4222",
  json: true
});

nc.on("error", function(err) {
  console.log(err);
});

console.log("Connected to " + nc.currentServer.url.host);

nc.subscribe("node-updates", msg => {
  console.log(msg);
});

nc.subscribe("time", (msg, reply) => {
  if (reply) {
    nc.publish(reply, new Date().toLocaleTimeString());
  }
});

nc.subscribe("rust-updates", msg => {
  console.log(msg);
});
