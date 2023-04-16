import TopicBool from "../mqtt/TopicBool";
import Element from "./Element";

export default class Switch extends Element {

    public readonly fontsize: number;
    public readonly topic: TopicBool;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string,
        fontsize: number,
        topic: TopicBool
    ) {
        super(x, y, width, height, color);
        this.fontsize = fontsize;
        this.topic = topic;
    }

    public static parseJson(json: string): Switch {
        const e = JSON.parse(json);
        const x: number = parseInt(e.x);
        const y: number = parseInt(e.y);
        const width: number = parseInt(e.width);
        const height: number = parseInt(e.height);
        const color: string = e.color;
        const fontsize: number = parseInt(e.fontsize);
        const topic: TopicBool = TopicBool.parseJson(e.topic);
        return new Switch(x, y, width, height, color, fontsize, topic)
    }
}