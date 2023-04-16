import type { Client } from "mqtt";
import mqtt from "mqtt/dist/mqtt.min";

export default class MQTTClient {
  private static instanse: MQTTClient;

  public readonly client: Client;

  private constructor(
    url: string,
    port: number,
    username?: string,
    password?: string
  ) {
    this.client = mqtt.connect(`ws://${url}:${port}`, {
      protocol: "ws",
      username,
      password,
    });
  }

  public static getInstanse(
    url: string,
    port: number,
    username?: string,
    password?: string
  ) {
    if (!MQTTClient.instanse) {
      MQTTClient.instanse = new MQTTClient(url, port, username, password);
    }
    return MQTTClient.instanse;
  }

  public subscribe(
    topic: string[] | string,
    callback: (topic: string, message: string) => void
  ) {
    this.client.subscribe(topic, (err) => {
      if (!err)
        this.client.on("message", (topic, message) => {
          let _message = message.toString();
          callback(topic, _message);
        });
    });
  }

  public send(topic: string, data: string) {
    this.client.publish(topic, data);
  }
}
