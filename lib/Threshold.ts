import Readable from "../var/Readable";
import Writable from "../var/Writable";
import Sensor from "./Sensor";

export default class Threshold {
    readonly sensors: Sensor[] = [];
    readonly level1 = new Writable<number>(10);
    readonly level2 = new Writable<number>(15);

    private readonly _alarm1 = new Writable<boolean>(false);
    get alarm1(): Readable<boolean> { return this._alarm1 }
    private readonly _alarm2 = new Writable<boolean>(false);
    get alarm2(): Readable<boolean> { return this._alarm2 }

    constructor(sensorsCount: number) {
        for (let i = 0; i < sensorsCount; i++) {
            const sensor = new Sensor();
            sensor.out.subscribe(() => this.update());
            this.sensors.push(sensor);
        }

        this.level1.subscribe(() => this.update());
        this.level2.subscribe(() => this.update());
    }

    private update() {
        const level1 = this.level1.getVal();
        const level2 = this.level2.getVal();

        let alarm1 = false;
        let alarm2 = false;
        this.sensors.forEach((sensor) => {
            const sensorVal = sensor.out.getVal();
            if (sensorVal > level1)
                alarm1 = true;
            if (sensorVal > level2)
                alarm2 = true;
        });
        this._alarm1.setVal(alarm1);
        this._alarm2.setVal(alarm2);
    }
}