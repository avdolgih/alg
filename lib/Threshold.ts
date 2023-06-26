import Sensor from "./Sensor";

export default class Threshold {
    sensors: Sensor[] = [];
    thersholdLevel1: number = 10;
    thersholdLevel2: number = 15;
    alarm1: boolean = false;
    alarm2: boolean = false;

    private update() {
        this.alarm1 = false;
        this.alarm2 = false;
        this.sensors.forEach((sensor) => {
            const sensorVal = sensor.value;
            if (sensorVal > this.thersholdLevel1)
                this.alarm1 = true;
            if (sensorVal > this.thersholdLevel2)
                this.alarm2 = true;
        });
    }
}