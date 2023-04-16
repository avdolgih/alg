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
    click?: TopicVal
  ) {
    super(x, y, width, height, color);

    this.text = text;
    this.state = state;
    this.click = click;
  }

  public static parseJson(e: Button): Button {
    const x: number = Number(e.x);
    const y: number = Number(e.y);
    const width: number = Number(e.width);
    const height: number = Number(e.height);
    const color: string = e.color;
    const text: string = e.text;
    const state: TopicVal | undefined = e.state;
    const click: TopicVal | undefined = e.click;

    return new Button(x, y, width, height, color, text, state, click);
  }

  public updateState(value: string): void {
    this.state?.updateState(value);
  }
}
