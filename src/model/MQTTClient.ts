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
    this.client.publish(topic, data, { qos: 2 });
  }

  public subscribeMQTTTopic(topic: string) {
    this.client.subscribe(topic, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("SUBSCRIBED");
      }
    });
  }

  public reciveMQTTMssage(subedTopic: string, callback: any) {
    let data: string = "---";

    this.client.on("message", function (topic: string, message: Buffer) {
      if (subedTopic === topic) {
        callback(message.toString());
        data = message.toString();
      }
    });

    return data;
  }
}
