export default class TopicBool {
  public readonly topic: string;
  public readonly textTrue: string;
  public readonly textFalse: string;

  constructor(topic: string, textTrue: string, textFalse: string) {
    this.topic = topic;
    this.textTrue = textTrue;
    this.textFalse = textFalse;
  }

  // public static parseJson(e: TopicBool): TopicBool {
  //   const topic: string = e.topic;
  //   return new TopicBool(topic, textTrue, textFalse);
  // }
}