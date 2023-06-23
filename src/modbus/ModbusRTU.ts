import ModbusSerial from "modbus-serial";
import type { WriteMultipleResult } from "modbus-serial/ModbusRTU";

export default class ModbusRTU {

    private client = new ModbusSerial();

    async connect(port: string) {
        return this.client.connectRTUBuffered(port, { baudRate: 115200 });
    }

    async readDI(addr: number, reg: number, count: number): Promise<boolean[]> {
        this.client.setID(addr);
        return (await this.client.readDiscreteInputs(reg, count)).data;
    }

    async readAI(addr: number, reg: number, count: number): Promise<number[]> {
        this.client.setID(addr);
        return (await this.client.readHoldingRegisters(reg, count)).data;
    }

    async writeDO(addr: number, reg: number, val: boolean): Promise<boolean> {
        this.client.setID(addr);
        return ((await this.client.writeCoil(reg, val)).state)
    }

    async writeDOs(addr: number, reg: number, val: boolean[]): Promise<WriteMultipleResult> {
        this.client.setID(addr);
        return (await this.client.writeCoils(reg, val));
    }
}