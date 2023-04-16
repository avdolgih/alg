import type { Client } from "mqtt";
import mqtt from "mqtt/dist/mqtt.min";

export default class MQTTClient {

  private readonly mqtt: Client;

  private constructor(
    url: string,
    port: number,
    login?: {
      username: string,
      password: string
    }
  ) {
    this.mqtt = mqtt.connect(`ws://${url}:${port}`, login);
  }

  public send(topic: string, data: string) {
    this.mqtt.publish(topic, data);
  }

  public subscribe(topic: string, callback: (topic: string, msg: string) => void) {
    this.mqtt.subscribe(topic, (err) => {
      if (!err)
        this.mqtt.on('message', callback);
    })
  }
}
