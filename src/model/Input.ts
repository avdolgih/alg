import type MQTTClient from "./MQTTClient";
import Element from "./Element";

export default class Input extends Element {
  public readonly label: string;
  public value: string;
  public readonly topic: string;
  private client: MQTTClient;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    label: string,
    value: string,
    topic: string,
    client: MQTTClient
  ) {
    super(x, y, width, height, color);
    this.label = label;
    this.value = value;
    this.topic = topic;
    this.client = client;
  }

  //   Подписываемся на топик
  public subscribeMQTTTopic(topic: string) {
    this.client.subscribeMQTTTopic(topic);
  }

  //   Установка значения
  public setValue(val: string) {
    this.value = val;
    console.log(this.value);
  }

  //   Получение сообщений
  public reciveMQTTMessage(topic: string) {
    this.client.reciveMQTTMssage(topic, (data: string) => {
      this.setValue(data);
    });
  }

  //   Отправка сообщений
  public sendMQTTMessage() {
    this.client.sendMQTTMessage(this.topic, this.value);
  }
}

// TODO: Огоспаде, переименуй
export type InputInput = Omit<Input, "client">;
