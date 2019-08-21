extern crate nats;
use serde_json::*;


fn main() {
    let cluster = vec!("nats://localhost:4222");
    let mut client = nats::Client::new(cluster).unwrap();
    
    let ev = json!({
        "name": "RustEvent",
        "id": 42,
        "values": [
            "111.15",
            "88.6",
            "99.12"
        ]
    });

    client.publish("rust-updates", ev.to_string().as_bytes()).unwrap();
}