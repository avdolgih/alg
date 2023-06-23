import { MqttClient, connect } from "mqtt";

type onMessage = (msg: string) => void;

class MQTT {
    private client: MqttClient;
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

    publish(topic: string, msg: string) {
        this.client.publish(topic, msg, { retain: true, qos: 1 });
    }
}
export default new MQTT("wss://test.mosquitto.org:8081");