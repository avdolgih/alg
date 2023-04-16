import Element from "./Element";

export default class Text extends Element {
  public readonly fontsize: number;
  public readonly value: string;
  public readonly topicSET: string[];
  public readonly topicGET: string[];
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    fontsize: number,
    topicGET: string[],
    topicSET: string[],
    value: string
  ) {
    super(x, y, width, height, color);
    this.fontsize = fontsize;
    this.value = value;
    this.topicGET = topicGET;
    this.topicSET = topicSET;
  }
}

export type TextInput = Text;
