import type TopicBool from "../mqtt/TopicBool";
import Element from "./Element";

export default class Switch extends Element {
  public readonly fontsize: number;
  public readonly get: TopicBool;
  public readonly textColor: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    textColor: string,
    fontsize: number,
    get: TopicBool
  ) {
    super(x, y, width, height);
    this.fontsize = fontsize;
    this.get = get;
    this.textColor = textColor;
  }

  // public static parseJson(e: Switch): Switch {
  //   const x: number = Number(e.x);
  //   const y: number = Number(e.y);
  //   const width: number = Number(e.width);
  //   const height: number = Number(e.height);
  //   const color: string = e.color;
  //   const fontsize: number = Number(e.fontsize);
  //   const state: TopicBool = TopicBool.parseJson(e.state);
  //   return new Switch(x, y, width, height, color, fontsize, state);
  // }
}
