import Element from "./Element";

export default class Input extends Element {
  public readonly label: string;
  public value: string;
  public readonly topic: string[];

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    label: string,
    value: string,
    topic: string[]
  ) {
    super(x, y, width, height, color);
    this.label = label;
    this.value = value;
    this.topic = topic;
  }

  //   Установка значения
  public setValue(val: string) {
    this.value = val;
  }
}
