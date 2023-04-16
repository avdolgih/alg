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

  public static parseJson(e: Label): Label {
    const x: number = Number(e.x);
    const y: number = Number(e.y);
    const width: number = Number(e.width);
    const height: number = Number(e.height);
    const color: string = e.color;
    const fontsize: number = Number(e.fontsize);
    const value: string = e.value;
    return new Label(x, y, width, height, color, fontsize, value);
  }
}
