import Button from "./elements/Button";
import type Element from "./elements/Element";
import Input from "./elements/Input";
import Label from "./elements/Label";
import Rectangle from "./elements/Rectangle";
import Switch from "./elements/Switch";

export default class HMI {
  public readonly elements: Element[];

  constructor(elements: Element[]) {
    this.elements = elements;
  }

  public static parseJSON(json: string): HMI {
    const elements: Element[] = [];
    const elems: any[] = json.elements;

    elems.map((elem) => {
      let e: Element;
      switch (elem.type) {
        case "Button":
          e = Button.parseJson(elem);
          break;
        case "Input":
          e = Input.parseJson(elem);
          break;
        case "Label":
          e = Label.parseJson(elem);
          break;
        case "Rectangle":
          e = Rectangle.parseJson(elem);
          break;
        case "Switch":
          e = Switch.parseJson(elem);
          break;
        default:
          throw new Error("Элемент " + elem + " не найдет");
      }
      elements.push(e);
    });

    return new HMI(elements);
  }
}
