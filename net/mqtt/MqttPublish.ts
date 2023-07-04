import HandBool from "../../lib/hand/HandBool";
import HandVal from "../../lib/hand/HandVal";
import Mqtt from "./Mqtt";

type Publiser = {
    name: string,
    topic: string,
    val: HandVal
}

type PubliserList = { name: string, topic: string, type: string };

export default (mqtt: Mqtt, publisers: Publiser[]) => {
    publisers.forEach(v => {
        if (v.val.type === "boolean") {
            const handBool = <HandBool>v.val;
            mqtt.publishReadable(v.topic + "/val", handBool.out);
            mqtt.publishReadable(v.topic + "/hand", handBool.hand);
            mqtt.publishReadable(v.topic + "/handVal", handBool.handVal);
            mqtt.subscribeWritable(v.topic + "/hand", handBool.hand);
            mqtt.subscribeWritable(v.topic + "/handVal", handBool.handVal);
        }
    });

    let list: PubliserList[] = [];
    publisers.forEach(v => {
        list.push({
            name: v.name,
            topic: v.topic,
            type: v.val.type
        });
    });
}