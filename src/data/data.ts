import HMI from "../model/HMI";
import Button from "../model/elements/Button";
import Input from "../model/elements/Input";
import Label from "../model/elements/Label";
import Rectangle from "../model/elements/Rectangle";
import Switch from "../model/elements/Switch";
import TopicBool from "../model/mqtt/TopicBool";
import TopicVal from "../model/mqtt/TopicVal";

export default {
  V5: new HMI([
    new Label(400, 10, 600, 100, "", 60, "ША В5"),
    new Label(140, 220, 150, 0, "black", 34, "Вентилятор"),
    new Switch(
      350,
      220,
      200,
      0,
      "black",
      35,
      new TopicBool("/mode/get", "Работает", "Ожидает")
    ),
    new Button(
      560,
      230,
      100,
      90,
      "green",
      "ПУСК",
      new TopicVal("/mode/get", ""),
      new TopicVal("/mode/set", "START")
    ),
    new Button(
      680,
      230,
      100,
      90,
      "red",
      "СТОП",
      new TopicVal("/mode/get", ""),
      new TopicVal("/mode/set", "STOP")
    ),
    new Button(
      800,
      230,
      100,
      90,
      "yellow",
      "АВТО",
      new TopicVal("/mode/get", ""),
      new TopicVal("/mode/set", "AUTO")
    ),
    new Rectangle(100, 200, 830, 150, "#fff"),
  ]),
};
