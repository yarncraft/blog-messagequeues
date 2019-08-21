var msgpack = require("msgpack-lite");
var zmq = require("zeromq"),
  sock = zmq.socket("sub");

sock.connect("tcp://127.0.0.1:3000");
sock.subscribe("foobar");
console.log("Subscriber connected to port 3000");

sock.on("message", function(topic, message) {
  var data = msgpack.decode(message);
  console.log(data);
});
