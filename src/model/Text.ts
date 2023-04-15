import Element from "./Element";

export default class Text extends Element {
  public readonly fontsize: number;
  public readonly value: string;
  public readonly topic: string[];
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    fontsize: number,
    topic: string[],
    value: string
  ) {
    super(x, y, width, height, color);
    this.fontsize = fontsize;
    this.value = value;
    this.topic = topic;
  }
}

export type TextInput = Text;
