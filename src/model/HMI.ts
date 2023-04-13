import type MQTTClient from "./MQTTClient";

export default class HMI {
  // TODO: Есть ли смысл объявлять здесь клиента MQTT и url?
  //   public readonly MQTTClient: MQTTClient;

  public readonly elements: Element[];

  constructor(elements: Element[]) {
    this.elements = elements;
  }
}
