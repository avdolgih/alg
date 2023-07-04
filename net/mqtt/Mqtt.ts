import { connect } from "mqtt";
import Writable from "../../var/Writable";
import Readable from "../../var/Readable";
import HandNumber from "../../lib/hand/HandNumber";
import HandVal from "../../lib/hand/HandVal";

type Action = (v: string) => void;

export default class Mqtt {
    private client;
    private readonly subscribers = new Map<string, Action[]>();

    constructor(url: string) {
        this.client = connect(url);
        this.client.on("message", (topic, payload) => {
            const onMessage = this.subscribers.get(topic);
            if (!onMessage) return;
            const value = payload.toString();
            onMessage.forEach(f => f(value));
        });
    }

    subscribe(topic: string, action: Action) {
        const subs = this.subscribers.get(topic);
        if (!subs) {
            this.client.subscribe(topic);
            this.subscribers.set(topic, [action]);
        } else
            subs.push(action);
    }

    publish(topic: string, msg: string) {
        this.client.publish(topic, msg, { retain: true, qos: 1 });
    }

    subscribeWritable<T>(topic: string, w: Writable<T>) {
        console.log(topic);
        this.subscribe(topic, v => w.setString(v));
    }

    publishReadable<T>(topic: string, r: Readable<T>) {
        r.subscribe((val) => {
            this.publish(topic, r.getString())
        });
    }
}