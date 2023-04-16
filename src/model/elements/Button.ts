import type TopicVal from "../mqtt/TopicVal";
import Element from "./Element";

export default class Button extends Element {

  public readonly text: string;
  public readonly state?: TopicVal;
  public readonly click?: TopicVal;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    text: string,
    state?: TopicVal,
    click?: TopicVal,
  ) {
    super(x, y, width, height, color);
    this.text = text;
    this.state = state;
    this.click = click;
  }
}
