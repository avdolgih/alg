import type { Client } from "mqtt";
import mqtt from "mqtt/dist/mqtt.min";

export default class MQTT {
  private static readonly mqtt: Client = mqtt.connect("ws://test.mosquitto.org:8081");

  public static send(topic: string, data: string) {
    console.log({ topic, data });

    MQTT.mqtt.publish(topic, data);
  }

  public static subscribe(topic: string, callback: (val: string) => void) {
    MQTT.mqtt.subscribe(topic, (err) => {
      if (!err) {
        console.log("SUBBED");

        MQTT.mqtt.on("message", (msgTopic, msg) => {
          if (topic === msgTopic) {
            console.log(msgTopic, msg.toString());
            callback(msg.toString());
          }
        });
      }
    });
  }
}
