import Element from "./Element";

export default class Rectangle extends Element {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) {
    super(x, y, width, height, color);
  }

  public static parseJson(e: Rectangle): Rectangle {
    const x: number = Number(e.x);
    const y: number = Number(e.y);
    const width: number = Number(e.width);
    const height: number = Number(e.height);
    const color: string = e.color;
    return new Rectangle(x, y, width, height, color);
  }
}
