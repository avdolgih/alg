import Element from "./Element";

export default class Status extends Element {
  public status: string;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    status: string
  ) {
    super(x, y, width, height, color);
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }
  public setStatus(status: string) {
    this.status = status;
    return this.status;
  }
}

// export enum EStatus {
//   WORKING = "WORKING",
//   WAITING = "WAITNG",
//   ERROR = "ERROR",
// }

export type StatusInput = Omit<Status, "client">;
