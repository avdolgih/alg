export default class TopicVal {

    public readonly topic: string;
    public readonly val: string;

    constructor(topic: string, val: string) {
        this.topic = topic;
        this.val = val;
    }

    public static parseJson(json: string): TopicVal {
        const e = JSON.parse(json);
        const topic: string = e.color;
        const val: string = e.val;
        return new TopicVal(topic, val);
    }
}