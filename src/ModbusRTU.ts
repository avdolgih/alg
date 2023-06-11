import Queue from "./Queue";
import Client from "modbus-serial";

export default class ModbusRTU {

    private client = new Client();
    private readonly queue = new Queue();

    constructor() { }

    async connect() {
        return this.client.connectRTUBuffered("COM4", { baudRate: 115200 });
    }

    async readDI(addr: number, reg: number, count: number): Promise<boolean[]> {
        return new Promise<boolean[]>((resolve, reject) => {

        });
    }

    async readAI(addr: number, reg: number, count: number): Promise<number[]> {
        this.client.setID(addr);
        return (await this.client.readHoldingRegisters(reg, count)).data;
    }

    async writeDO(addr: number, reg: number, val: boolean): Promise<boolean> {
        console.log("Write DO");

        return new Promise<boolean>((resolve, reject) => {
            this.client.setID(addr);
            this.client.writeCoil(reg, val);
        });
    }
}