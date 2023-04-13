import Element from "./Element";

export default class Text extends Element {
  public readonly fontsize: number;
  public readonly value: string;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    fontsize: number,
    value: string
  ) {
    super(x, y, width, height, color);
    this.fontsize = fontsize;
    this.value = value;
  }
}
