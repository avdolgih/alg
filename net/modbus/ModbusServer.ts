import ModbusRTU from "modbus-serial";
import Device from "./Device";

export default class ModbusServer {

    private readonly devices;

    constructor(devices: Device[]) {
        this.devices = devices;
        this.start();
    }

    start() {
        while (true) {
            this.devices.forEach(async d => { await d.update() });
        }
    }
}