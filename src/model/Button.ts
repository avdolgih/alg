import Element from "./Element";

export default class Button extends Element {
  public readonly text: string;
  public readonly topic: string[];
  public readonly value: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    text: string,
    topic: string[],
    value: string
  ) {
    super(x, y, width, height, color);

    this.text = text;
    this.topic = topic;
    this.value = value;
  }
}
