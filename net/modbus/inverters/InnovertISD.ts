import Readable from "../../../var/Readable";
import Writable from "../../../var/Writable";
import Device from "../Device";
import type ModbusRTU from "../ModbusRTU";

export default class InnovertISD implements Device {

    private readonly client: ModbusRTU;
    private readonly addr: number;

    readonly start = new Writable<boolean>(false);
    readonly perfSetpoint = new Writable<number>(0);

    private readonly _perfReal = new Writable<number>(0);
    get perfReal(): Readable<number> { return this._perfReal }


    constructor(client: ModbusRTU, addr: number) {
        this.client = client;
        this.addr = addr;
    }

    async update() {
        const perfReal = await this.client.readAI(this.addr, 2);
        this._perfReal.setVal(perfReal);

        const start = this.start.getVal();
        const cmdStart = start ? 2 : 1;
        await this.client.writeAO(this.addr, 8192, cmdStart);

        const perfSetpoint = this.perfSetpoint.getVal();
        const cmdPerf = perfSetpoint * 5;
        await this.client.writeAO(this.addr, 8193, cmdPerf);
    }
}