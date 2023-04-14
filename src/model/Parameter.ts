import type MQTTClient from "./MQTTClient";
import Element from "./Element";

export default class Parameter extends Element {
  public readonly text: string;
  public readonly topic: string;
  public value: string;
  public readonly demension: string;
  private client: MQTTClient;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    text: string,
    topic: string,
    demension: string,
    client: MQTTClient
  ) {
    super(x, y, width, height, color);

    this.text = text;
    this.topic = topic;
    this.client = client;
    this.value = "0";
    this.demension = demension;

    this.subscribeMQTTTopic(this.topic);
    this.reciveMQTTMessage(this.topic);
  }

  public subscribeMQTTTopic(topic: string) {
    this.client.subscribeMQTTTopic(topic);
  }

  public setValue(val: string) {
    this.value = val;
    console.log(this.value);
  }

  public reciveMQTTMessage(topic: string) {
    this.client.reciveMQTTMssage(topic, (data: string) => {
      this.setValue(data);
    });
  }
}

export type ParameterInput = Omit<Parameter, "client">;
