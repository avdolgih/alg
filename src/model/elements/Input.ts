import type TopicVal from "../mqtt/TopicVal";
import Element from "./Element";

export default class Input extends Element {
  public readonly label: string;
  public value: string;

  public readonly state?: TopicVal;
  public readonly click?: TopicVal;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    label: string,
    value: string,
    state?: TopicVal,
    click?: TopicVal
  ) {
    super(x, y, width, height, color);
    this.label = label;
    this.value = value;
    this.state = state;
    this.click = click;
  }

  //   Установка значения
  public setValue(val: string) {
    this.value = val;
  }

  public static parseJson(e: Input): Input {
    const x: number = Number(e.x);
    const y: number = Number(e.y);
    const width: number = Number(e.width);
    const height: number = Number(e.height);
    const color: string = e.color;
    const label: string = e.label;
    const value: string = e.value;
    const state: TopicVal | undefined = e.state;
    const click: TopicVal | undefined = e.click;

    return new Input(x, y, width, height, color, label, value, state, click);
  }
}
