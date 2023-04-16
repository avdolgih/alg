import Element from "./Element";

export default class Button extends Element {
  public readonly text: string;
  public readonly topicSET: string[];
  public readonly topicGET: string[];
  public readonly value: string;
  public readonly action: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    text: string,
    topicGET: string[],
    topicSET: string[],
    value: string,
    action: string
  ) {
    super(x, y, width, height, color);

    this.text = text;
    this.topicSET = topicSET;
    this.topicGET = topicGET;

    this.value = value;

    this.action = action;
  }
}
