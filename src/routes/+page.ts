import _ from "lodash";

import { browser } from "$app/environment";
import HMI from "../model/HMI";
import MQTTClient from "../model/MQTTClient";
import Button from "../model/Button";
import Card from "../model/Card";
import Input from "../model/Input";
import Parameter from "../model/Parameter";
import Status from "../model/Status";
import Text from "../model/Text";

import type { ButtonInput } from "../model/Button";
import type { CardInput } from "../model/Card";
import type { InputInput } from "../model/Input";
import type { ParameterInput } from "../model/Parameter";
import type { StatusInput } from "../model/Status";
import type { TextInput } from "../model/Text";

let _buttons: Button[];
let _cards: Card[];
let _inputs: Input[];
let _status: Status[];
let _parameters: Parameter[];
let _texts: Text[];

let _hmi: HMI;

if (browser) {
  let buttons: ButtonInput[] = [];
  let cards: CardInput[] = [
    { x: 0, y: 0, width: 0, height: 0, color: "#F0F0F0" },
  ];
  let inputs: InputInput[] = [];
  let parameters: ParameterInput[] = [];
  let status: StatusInput[] = [];
  let text: TextInput[] = [];

  let mqttInstanse = MQTTClient.getInstanse("test.mosquitto.org", 8081, "", "");

  _buttons = buttons.map((_) => {
    return new Button(
      _.x,
      _.y,
      _.width,
      _.height,
      _.color,
      _.text,
      _.topic,
      _.value,
      mqttInstanse
    );
  });

  _cards = cards.map((_) => {
    return new Card(_.x, _.y, _.width, _.height, _.color);
  });

  _inputs = inputs.map((_) => {
    return new Input(
      _.x,
      _.y,
      _.width,
      _.height,
      _.color,
      _.label,
      _.value,
      _.topic,
      mqttInstanse
    );
  });

  _parameters = parameters.map((_) => {
    return new Parameter(
      _.x,
      _.y,
      _.width,
      _.height,
      _.color,
      _.text,
      _.topic,
      _.demension,
      mqttInstanse
    );
  });

  _status = status.map((_) => {
    return new Status(_.x, _.y, _.width, _.height, _.color, _.status);
  });

  _texts = text.map((_) => {
    return new Text(_.x, _.y, _.width, _.height, _.color, _.fontsize, _.value);
  });

  let elements = _.union(
    _buttons,
    _cards,
    _inputs,
    _parameters,
    _status,
    _texts
  );

  _hmi = new HMI(elements);

  console.log(_hmi.elements[0].costructor.name);
}

export { _hmi };
