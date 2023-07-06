import ModbusSerial from "modbus-serial";
import type { WriteMultipleResult } from "modbus-serial/ModbusRTU";

export default class ModbusRTU {

    private readonly port: string;
    private client = new ModbusSerial();

    constructor(port: string) {
        this.port = port;
        this.client.setTimeout(500);
        this.client.on("close", this.connect);
        this.connect();
    }

    private connect() {
        try {
            this.client.connectRTUBuffered(this.port, { baudRate: 115200 });
        } catch (e) {
            console.log(e);
        }
    }

    async readAI(addr: number, reg: number) {
        this.client.setID(addr);
        return (await this.client.readHoldingRegisters(reg, 1)).data[0];
    }

    async readAIs(addr: number, reg: number, count: number) {
        this.client.setID(addr);
        return (await this.client.readHoldingRegisters(reg, count)).data;
    }

    async readDIs(addr: number, reg: number, count: number) {
        this.client.setID(addr);
        return (await this.client.readDiscreteInputs(reg, count)).data;
    }

    async writeAO(addr: number, reg: number, val: number) {
        this.client.setID(addr);
        return await this.client.writeRegister(reg, val);
    }

    async writeAOs(addr: number, reg: number, val: number[]) {
        this.client.setID(addr);
        return await this.client.writeRegisters(reg, val);
    }

    async writeDO(addr: number, reg: number, val: boolean) {
        this.client.setID(addr);
        return (await this.client.writeCoil(reg, val)).state;
    }

    async writeDOs(addr: number, reg: number, val: boolean[]) {
        this.client.setID(addr);
        return await this.client.writeCoils(reg, val);
    }
}