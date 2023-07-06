import ModbusRTU from "../net/modbus/ModbusRTU";
import CWT_MB308P from "../net/modbus/modules/CWT_MB308P";
import Mqtt from "../net/mqtt/Mqtt";
import Threshold from "../lib/Threshold";

export default class P277GSM {

    private readonly mqtt;
    private readonly threshold = new Threshold(2);
    private readonly modbus = new ModbusRTU("ttyUSB0");
    private readonly module1 = new CWT_MB308P(this.modbus, 2);

    constructor(mqtt: Mqtt) {
        this.mqtt = mqtt;
        this.mqtt.subscribeWritable("/sensor1", this.threshold.sensors[0].in);
        this.mqtt.subscribeWritable("/sensor2", this.threshold.sensors[1].in);
        this.mqtt.subscribeWritable("/threshold1", this.threshold.level1);
        this.mqtt.subscribeWritable("/threshold2", this.threshold.level2);
        this.mqtt.publishReadable("/alarm1", this.threshold.alarm1);
        this.mqtt.publishReadable("/alarm2", this.threshold.alarm2);

        this.update();
    }

    async update() {
        while (true) {
            await this.module1.update
        }
    }
}