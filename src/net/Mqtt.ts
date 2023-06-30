import { connect } from "mqtt/dist/mqtt.min";

type Action = (v: string) => void;

class Mqtt {
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
        this.client.on("connect", () => {
            console.log("MQTT connected");
        });
        this.client.on("disconnect", () => {
            console.log("MQTT disconnected");
        });
    }

    subscribe(topic: string, action: Action) {
        const subs = this.subscribers.get(topic);
        if (!subs) {
            this.subscribers.set(topic, [action]);
            this.client.subscribe(topic);
        } else subs.push(action);
    }

    publish(topic: string, msg: string) {
        this.client.publish(topic, msg, { retain: true, qos: 1 });
    }
}
export default new Mqtt("ws://" + location.hostname + ":8080");