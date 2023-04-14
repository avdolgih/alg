import Element from "./Element";

export default class Card extends Element {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) {
    super(x, y, width, height, color);
  }
}

export type CardInput = Card;
