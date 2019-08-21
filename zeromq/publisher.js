var msgpack = require("msgpack-lite");

var zmq = require("zeromq"),
  sock = zmq.socket("pub");

sock.bindSync("tcp://127.0.0.1:3000");
console.log("Publisher bound to port 3000");

setInterval(function() {
  var buffer = msgpack.encode({ foo: "bar" });
  sock.send(["foobar", buffer]);
  console.log("message sent");
}, 5000);
