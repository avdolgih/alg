import type { Client } from "mqtt";
import mqtt from "mqtt/dist/mqtt.min";

export default class MQTT {
  private static readonly mqtt: Client = mqtt.connect('ws://test.mosquitto.org:8080');

  public static send(topic: string, data: string) {
    MQTT.mqtt.publish(topic, data);
  }

  public static subscribe(topic: string, callback: (val: string) => void) {
    MQTT.mqtt.subscribe(topic, (err) => {
      if (!err)
        MQTT.mqtt.on('message', (topic, msg) => {
          callback(msg.toString());
        });
    })
  }
}