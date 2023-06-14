import Queue from "./Queue";
import JSModbusRTU from "jsmodbus";
import ModbusSerial from "modbus-serial";

export default class ModbusRTU {

    private client = new ModbusSerial("COM4");

    async connect() {
        return this.client.connectRTUBuffered("COM4", { baudRate: 115200 });
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

    async writeDOs(addr: number, reg: number, val: boolean[]) {
        this.client.setID(addr);
        return (await this.client.writeCoils(reg, val));
    }
}