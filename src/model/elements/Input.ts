import Element from "./Element";

export default class Input extends Element {
  public readonly label: string;
  public value: string;
  public readonly topicSET: string[];
  public readonly topicGET: string[];

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    label: string,
    value: string,
    topicGET: string[],
    topicSET: string[]
  ) {
    super(x, y, width, height, color);
    this.label = label;
    this.value = value;
    this.topicSET = topicSET;
    this.topicGET = topicGET;
  }

  //   Установка значения
  public setValue(val: string) {
    this.value = val;
  }
}
