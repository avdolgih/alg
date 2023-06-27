import Sensor from "../lib/Sensor";
import ModbusRTU from "../net/modbus/ModbusRTU";
import CWT_MB308P from "../net/modbus/CWT_MB308P";
import Writable from "../var/Writable";
import Mqtt from "../net/mqtt/Mqtt";
import Readable from "../var/Readable";

export default class P277GSM {

    private readonly mqtt = new Mqtt("ws://localhost:8080");
    // private readonly modbus = new ModbusRTU("ttyUSB0");
    // private readonly module1 = new CWT_MB308P(this.modbus, 2);

    private readonly sensor1 = new Sensor();
    // private readonly sensor2 = new Sensor();

    constructor() {
        this.mqtt.subscribeWritable("/in", this.sensor1.in);
        this.mqtt.publishReadable("/out", this.sensor1.out);

        // module1.ai1.subscribe(val => sensor1.value);
        // sensor1.multiplier.val = 1 / 100;

        // module1.ai2.subscribe(val => sensor2.value);
        // sensor2.multiplier.val = 1 / 100;

        // this.module1 = module1;
        // this.sensor1 = sensor1;
        // this.sensor2 = sensor2;
    }
}