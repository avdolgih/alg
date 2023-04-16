export default class TopicBool {
    public readonly topic: string;
    public readonly textFalse: string;
    public readonly textTrue: string;

    constructor(topic: string, textFalse: string, textTrue: string) {
        this.topic = topic;
        this.textFalse = textFalse;
        this.textTrue = textTrue;
    }

    public static parseJson(json: string): TopicBool {
        const e = JSON.parse(json);
        const topic: string = e.topic;
        const textFalse: string = e.textFalse;
        const textTrue: string = e.textTrue;
        return new TopicBool(topic, textFalse, textTrue);
    }
}