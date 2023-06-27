import ModbusRTU from "modbus-serial";
import Device from "./Device";

export default class ModbusServer {

    private readonly modbusRTU;
    private readonly devices;

    constructor(port: string, devices: Device[]) {
        this.modbusRTU = new ModbusRTU(port);
        this.devices = devices;
    }

    // start() {
    //     while (true) {
    //         this.devices.forEach()
    //     }
    // }
}