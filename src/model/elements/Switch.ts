import type TopicBool from "../mqtt/TopicBool";
import Element from "./Element";

export default class Switch extends Element {
  public readonly fontsize: number;
  public readonly state: TopicBool;
  public readonly textColor: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    textColor: string,
    fontsize: number,
    state: TopicBool
  ) {
    super(x, y, width, height);
    this.fontsize = fontsize;
    this.state = state;
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

  public updateState(value: string) {
    this.state.updateState(value);
  }
}
