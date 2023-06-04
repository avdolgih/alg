import type TopicVal from "../mqtt/TopicVal";
import Element from "./Element";

export default class Error extends Element {
  public readonly get: TopicVal;

  constructor(x: number, y: number, width: number, height: number, get: TopicVal) {
    super(x, y, width, height);

    this.get = get;
  }
}
