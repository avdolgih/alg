// import type { Mqtt } from "../../net/Mqtt";
// import type IAction from "./IAction";

// export enum Type {
//     add, sub
// }

// export class ChangeValue implements IAction {
//     private readonly mqtt: Mqtt;
//     private readonly topic: string;
//     private readonly type: Type;
//     private readonly val: number;

//     constructor(mqtt: Mqtt, topic: string, type: Type, val: number) {
//         this.mqtt = mqtt
//         this.topic = topic;
//         this.type = type;
//         this.val = val;
//     }

//     exec(): void {
//         this.mqtt.publish(this.topic, )
//     }  
// }