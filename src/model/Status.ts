import Element from "./Element";

export default class Status extends Element {
  private status: EStatus;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    status: EStatus
  ) {
    super(x, y, width, height, color);
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }
  public setStatus(status: EStatus) {
    this.status = status;
    return this.status;
  }
}

export enum EStatus {
  WORKING = "WORKING",
  WAITING = "WAITNG",
  ERROR = "ERROR",
}
