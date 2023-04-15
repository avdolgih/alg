// import type Button from "./Button";
// import type Card from "./Card";
// import type Input from "./Input";
// import type MQTTClient from "../mqtt/MQTTClient";
// import type Parameter from "./Parameter";
// import type Status from "./Status";
// import type Text from "./Text";

// type union = Button | Card | Input | Parameter | Status | Text;

import type Element from "./Element";

export default class HMI {
  public readonly elements: Element[];

  constructor(elements: Element[]) {
    this.elements = elements;
  }
}
