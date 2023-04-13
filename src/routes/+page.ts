import HMI from "../model/HMI";
import MQTTClient from "../model/MQTTClient";
import { browser } from "$app/environment";
import Status, { EStatus } from "../model/Status";
import type Button from "../model/Button";
import Parameter from "../model/Parameter";
import { elements } from "./store";

let _buttons: Button[];
let _parameters: Parameter[];

if (browser) {
  let buttons = [{}];
  let parameters = [
    {
      x: 0,
      y: 0,
      width: 500,
      height: 50,
      color: "#F0F0F0",
      text: "Название параметра",
      demension: "Размерность",
      topic: "test_input",
    },
  ];

  let mqttInstanse = MQTTClient.getInstanse("test.mosquitto.org", 8081, "", "");

  _parameters = parameters.map((param) => {
    return new Parameter(
      param.x,
      param.y,
      param.width,
      param.height,
      param.color,
      param.text,
      param.topic,
      param.demension,
      mqttInstanse
    );
  });
  elements.set(_parameters);
}

export { _parameters };
