import TopicBool from "../mqtt/TopicBool";
import Element from "./Element";

export default class Switch extends Element {
  public readonly fontsize: number;
  public readonly topic: TopicBool;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    fontsize: number,
    topic: TopicBool
  ) {
    super(x, y, width, height, color);
    this.fontsize = fontsize;
    this.topic = topic;
  }

  public static parseJson(e: Switch): Switch {
    const x: number = Number(e.x);
    const y: number = Number(e.y);
    const width: number = Number(e.width);
    const height: number = Number(e.height);
    const color: string = e.color;
    const fontsize: number = Number(e.fontsize);
    const topic: TopicBool = TopicBool.parseJson(e.topic);
    return new Switch(x, y, width, height, color, fontsize, topic);
  }
}
