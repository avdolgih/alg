import type Button from "./Button";
import type Card from "./Card";
import type Input from "./Input";
import type MQTTClient from "./MQTTClient";
import type Parameter from "./Parameter";
import type Status from "./Status";
import type Text from "./Text";

type union = Button | Card | Input | Parameter | Status | Text;

export default class HMI {
  // TODO: Есть ли смысл объявлять здесь клиента MQTT и url?
  //   public readonly MQTTClient: MQTTClient;

  public readonly elements: union[];

  constructor(elements: union[]) {
    this.elements = elements;
  }
}
