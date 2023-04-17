import type TopicVal from "../mqtt/TopicVal";
import Element from "./Element";

export default class Button extends Element {
  public readonly text: string;
  public readonly get: TopicVal;
  public readonly set: TopicVal;

  public readonly fontsize: number;
  public readonly bgColor: string;
  public readonly textColor: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    bgColor: string,
    textColor: string,
    text: string,
    fontsize: number,
    get: TopicVal,
    set: TopicVal
  ) {
    super(x, y, width, height);

    this.text = text;
    this.get = get;
    this.set = set;
    this.bgColor = bgColor;
    this.fontsize = fontsize;
    this.textColor = textColor;
  }

  // public static parseJson(e: Button): Button {
  //   const x: number = Number(e.x);
  //   const y: number = Number(e.y);
  //   const width: number = Number(e.width);
  //   const height: number = Number(e.height);
  //   const color: string = e.color;
  //   const text: string = e.text;
  //   const state: TopicVal | undefined = e.state;
  //   const click: TopicVal | undefined = e.click;

  //   return new Button(x, y, width, height, color, text, state, click);
  // }
}
