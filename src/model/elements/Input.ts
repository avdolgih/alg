import type TopicVal from "../mqtt/TopicVal";
import Element from "./Element";

export default class Input extends Element {
  public value: string;

  public readonly get: TopicVal;
  public readonly set: TopicVal;

  public readonly textColor: string;
  public readonly bgColor: string;
  public readonly fontsize: number;

  public readonly disabled: boolean;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    textColor: string,
    bgColor: string,
    fontsize: number,
    value: string,
    disabled: boolean,
    get: TopicVal,
    set: TopicVal
  ) {
    super(x, y, width, height);
    this.value = value;
    this.get = get;
    this.set = set;
    this.fontsize = fontsize;
    this.textColor = textColor;
    this.bgColor = bgColor;
    this.disabled = disabled;
  }

  // public static parseJson(e: Input): Input {
  //   const x: number = Number(e.x);
  //   const y: number = Number(e.y);
  //   const width: number = Number(e.width);
  //   const height: number = Number(e.height);
  //   const color: string = e.color;
  //   const label: string = e.label;
  //   const value: string = e.value;
  //   const state: TopicVal | undefined = e.state;
  //   const click: TopicVal | undefined = e.click;

  //   return new Input(x, y, width, height, color, label, value, state, click);
  // }
}
