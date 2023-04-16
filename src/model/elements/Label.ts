import Element from "./Element";

export default class Label extends Element {
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

  public static parseJson(json: string): Label {
    const e = JSON.parse(json);
    const x: number = parseInt(e.x);
    const y: number = parseInt(e.y);
    const width: number = parseInt(e.width);
    const height: number = parseInt(e.height);
    const color: string = e.color;
    const fontsize: number = parseInt(e.fontsize);
    const value: string = e.value;
    return new Label(x, y, width, height, color, fontsize, value)
  }
}
