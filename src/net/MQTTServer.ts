import type In from "$lib/vars/In";
import type Out from "$lib/vars/Out";
import { connect } from "mqtt";

type onMessage = (msg: string) => void;

class MQTT {
    private client;
    private readonly subscribers = new Map<string, onMessage[]>();

    constructor(url: string) {
        this.client = connect(url);
        this.client.on("message", (topic, payload) => {
            const onMessage = this.subscribers.get(topic);
            if (!onMessage) return;
            const value = payload.toString();
            onMessage.forEach(f => f(value));
        });
    }

    subscribe(topic: string, onMessage: onMessage) {
        const subs = this.subscribers.get(topic);
        if (!subs) {
            this.client.subscribe(topic);
            this.subscribers.set(topic, [onMessage]);
        } else
            subs.push(onMessage);
    }


    subscribeIn<T>(topic: string, val: In<T>) {
        if (val.getType() === "number")
            this.subscribe(topic, (msg) => (<In<number>><unknown>val).set(parseFloat(msg)));
        else if (val.getType() === "boolean")
            this.subscribe(topic, (msg) => (<In<boolean>><unknown>val).set(msg === "true" ? true : false));
    }

    publish(topic: string, msg: string) {
        this.client.publish(topic, msg, { retain: true, qos: 1 });
    }

    bind<T>(topic: string, val: Out<T>) {
        if (val.getType() === "number")
            val.subscribe((val) => { this.publish(topic, val.toString())});
    }
}
export default new MQTT("ws://localhost:8080");