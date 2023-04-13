export default class Button extends Element {

    public readonly text: string;
    public readonly topic: string;
    public readonly val: string;

    constructor(text: string, topic: string, val: string) {
        super()
        this.text = text;
        this.topic = topic;
        this.val = val;
    }
}