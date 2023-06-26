import In from "$lib/vars/In";
import Out from "$lib/vars/Out";
import ModbusRTU from "../net/ModbusRTU";
import CWT_MB308P from "../net/modules/CWT_MB308P";
import mqtt from "../net/MQTTServer";

export default () => {
    const modbus = new ModbusRTU();
    const module1 = new CWT_MB308P(modbus, 2);

    const sensor1 = new Sensor();
    module1.ai1.subscribe((val) => sensor1.sensor.set(val));
    sensor1.multiplier.set(1 / 100);

    const sensor2 = new Sensor();
    module1.ai2.subscribe((val) => sensor2.sensor.set(val));
    sensor2.multiplier.set(1 / 100);

    const threshold = new Tthreshold([sensor1.value, sensor2.value]);
    mqtt.bind("/threshold1", threshold.thersholdLevel1);
    mqtt.bind("/threshold2", threshold.thersholdLevel2);
}

class Sensor {
    readonly sensor = new In<number>(0, this.update);
    readonly offset = new In<number>(0, this.update);
    readonly multiplier = new In<number>(1, this.update);
    readonly value = new Out<number>(0);

    private update() {
        const sensor = this.sensor.get();
        const offset = this.offset.get();
        const multiplier = this.multiplier.get();
        const value = (sensor + offset) * multiplier;
        this.value.set(value);
    }
}

class Tthreshold {
    readonly sensors: Out<number>[];
    readonly thersholdLevel1 = new In<number>(10, this.update);
    readonly thersholdLevel2 = new In<number>(15, this.update);
    readonly thresholdAlarm1 = new Out<boolean>(false);
    readonly thresholdAlarm2 = new Out<boolean>(false);

    constructor(sensors: Out<number>[]) {
        this.sensors = sensors;
        sensors.forEach(sensor => sensor.subscribe(this.update));
    }

    private update() {
        let alarm1 = false;
        let alarm2 = false;
        this.sensors.forEach((sensor) => {
            const sensorVal = sensor.get();
            if (sensorVal > this.thersholdLevel1.get())
                alarm1 = true;
            if (sensorVal > this.thersholdLevel2.get())
                alarm2 = true;
        });
        this.thresholdAlarm1.set(alarm1);
        this.thresholdAlarm2.set(alarm2);
    }
}