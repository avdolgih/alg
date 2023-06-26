export default class Sensor {
    sensor: number = 0;
    offset: number = 0;
    multiplier: number = 1;
    value: number = 0;

    update() {
        const sensor = this.sensor;
        const offset = this.offset;
        const multiplier = this.multiplier;
        this.value = (sensor + offset) * multiplier;
    }
}