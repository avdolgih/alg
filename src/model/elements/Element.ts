export default abstract class Element {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
}
