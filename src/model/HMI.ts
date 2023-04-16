import type Element from "./elements/Element";
import Label from "./elements/Label";

export default class HMI {
  public readonly elements: Element[];

  constructor(elements: Element[]) {
    this.elements = elements;
  }

  public static parseJSON(json: string): HMI {
    const elements: Element[] = [];
    const elems: any[] = JSON.parse(json);
    elems.map((elem) => {
      let e: Element;
      switch (elem.type) {
        case 'Label':
          e = Label.parseJson(elem);
          break;
        case 'Button':
          e = Label.parseJson(elem);
          break;
        default:
          throw new Error('Элемент ' + elem + ' не найдет');
      }
      elements.push(e)
    });

    return new HMI(elements);
  }
}
