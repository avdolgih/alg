// MQTTClient синглтон
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
    username: string,
    password: string
  ) {
    if (!MQTTClient.instanse) {
      MQTTClient.instanse = new MQTTClient(url, port, username, password);
    }
    return MQTTClient.instanse;
  }

  //   TODO: Следует ли изменить функцию для обеспечения полиморфизма?
  //   TODO: Также следует ли создать тип сообщения? Следует подумать над структурой сообщений.
  public sendMQTTMessage(topic: string, data: string) {
    this.client.publish(topic, data, {});
    console.log({ topic, data });
  }

  public subscribeMQTTTopic(topic: string) {
    console.log(topic);

    this.client.subscribe(topic, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("SUBSCRIBED");
      }
    });
  }

  public reciveMQTTMssage(callback: any) {
    this.client.on("message", (topic, message) => {
      console.log(topic);
      callback(topic, message);
    });
  }
}
