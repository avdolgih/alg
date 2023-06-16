import { MqttClient, connect } from "mqtt";

class MQTT {
    // private client: MqttClient;
    // private readonly subscribers = new Map<string, Callback>();

    constructor(url: string) {
        // this.client = connect(url);
        // this.client.on("connect", () => {
        //     console.log("connected");
        // });
        // this.client.on("disconnect", () => {
        //     console.log("disconnected");
        // });
        // this.client.on("message", (topic, payload) => {
        //     const callback = this.subscribers.get(topic);
        //     if (callback)
        //         callback(payload.toString());
        //     else
        //         console.log("Топик не найден: " + topic);
        // });
    }

    // subscribe(topic: string, callback: Callback) {
    //     this.client.subscribe(topic);
    //     this.subscribers.set(topic, callback);
    // }

    // publish(topic: string, msg: string) {
    //     this.client.publish(topic, msg);
    // }
}

export default new MQTT("ws://test.mosquitto.org:8080");
// type Callback = (msg: string) => void;