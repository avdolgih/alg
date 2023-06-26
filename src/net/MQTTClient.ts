import type In from "$lib/vars/In";
import { connect } from "mqtt/dist/mqtt.min";

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
        this.client.on("connect", () => {
            console.log("MQTT connected");
        });
        this.client.on("disconnect", () => {
            console.log("MQTT disconnected");
        });
    }

    subscribe(topic: string, onMessage: onMessage) {
        const subs = this.subscribers.get(topic);
        if (!subs) {
            this.subscribers.set(topic, [onMessage]);
            this.client.subscribe(topic);
        } else subs.push(onMessage);
    }

    publish(topic: string, msg: string) {
        this.client.publish(topic, msg, { retain: true, qos: 1 });
    }
}
export default new MQTT("ws://" + location.hostname + ":8080");