import type MQTTClient from "./MQTTClient";
import Element from "./Element";

export default class Button extends Element {
  public readonly text: string;
  public readonly topic: string;
  public readonly value: string;

  private client: MQTTClient;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    text: string,
    topic: string,
    value: string,
    client: MQTTClient
  ) {
    super(x, y, width, height, color);

    this.text = text;
    this.topic = topic;
    this.value = value;
    this.client = client;
  }

  public sendMQTTMessage() {
    this.client.sendMQTTMessage(this.topic, this.value);
  }
}

export type ButtonInput = Omit<Button, "client">;
