import P277GSM from "./alg/P277GSM";
import P239ITP from "./alg/P239ITP/P239ITP";
import Mqtt from "./net/mqtt/Mqtt";


const mqtt = new Mqtt("ws://localhost:8080");
mqtt.publish("/view/list", JSON.stringify(["P277GSM", "P239ITP"]));

mqtt.subscribe("/view/selected", (s) => {
    console.log("Смена алгоритма на: " + s);
    switch (s) {
        case "P277GSM":
            new P277GSM();
            break;
        case "P239ITP":
            new P239ITP();
            break;
        default: throw new Error("Алгоритм " + s + " не найден");
    }
});