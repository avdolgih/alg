import { MqttClient, connect } from "mqtt/dist/mqtt.min";

type onMessage = (msg: string) => void;

class MQTT {
    private readonly url;
    private client: MqttClient;
    private readonly subscribers = new Map<string, onMessage[]>();

    constructor(url: string) {
        this.url = url;
        this.client = connect(url);
    }

    async connect() {
        this.client = connect(this.url);
        this.client.on("message", (topic, payload) => {
            const onMessage = this.subscribers.get(topic);
            if (!onMessage)
                return;

            const value = payload.toString();
            onMessage.forEach(f => f(value));
        });
        return new Promise<boolean>(resolve => this.client.on("connect", () => resolve(true)));
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
        this.client.publish(topic, msg);
    }
}

const mqtt = new MQTT("ws://test.mosquitto.org:8080");
await mqtt.connect();
export default mqtt;