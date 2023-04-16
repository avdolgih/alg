export default class TopicBool {
  public readonly topic: string;
  public value: string;
  public statusList: TStatus[];
  public text?: string;

  constructor(topic: string, value: string, statusList: TStatus[]) {
    this.topic = topic;
    this.value = value;
    this.statusList = statusList;
    this.text = "---";
  }

  // public static parseJson(e: TopicBool): TopicBool {
  //   const topic: string = e.topic;
  //   const textFalse: string = e.textFalse;
  //   const textTrue: string = e.textTrue;
  //   return new TopicBool(topic, textFalse, textTrue);
  // }

  public updateState(value: string) {
    console.log(value);

    this.value = value;
    this.text = this.statusList.find((status) => {
      return status.value === this.value;
    })?.text;
  }
}

type TStatus = {
  value: string;
  text: string;
};
