import P277GSM from "./alg/P277GSM";
import P239ITP from "./alg/P239ITP/P239ITP";
import Mqtt from "./net/mqtt/Mqtt";
import HandBool from "./lib/hand/HandBool";
import MqttPublish from "./net/mqtt/MqttPublish";
import HandNumber from "./lib/hand/HandNumber";

const mqtt = new Mqtt("ws://localhost:8080");
mqtt.publish("/view/list", JSON.stringify(["P277GSM", "P239ITP"]));

mqtt.subscribe("/view/selected", (s) => {
    switch (s) {
        case "P277GSM":
            new P277GSM(mqtt);
            break;
        case "P239ITP":
            new P239ITP(mqtt);
            break;
        default: throw new Error("Алгоритм " + s + " не найден");
    }
});

// const ai1 = new HandNumber();
// const ao1 = new HandNumber();

// ai1.out.subscribe(v => {
//     console.log(v);
//     ao1.in.setVal(v)
// });

// MqttPublish(mqtt, [
//     { name: "ai1", topic: "/ai1", val: ai1 },
//     { name: "ao1", topic: "/ao1", val: ao1 },
// ]);