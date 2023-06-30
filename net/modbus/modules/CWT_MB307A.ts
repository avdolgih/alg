import Readable from "../../../var/Readable";
import Writable from "../../../var/Writable";
import Device from "../Device";
import type ModbusRTU from "../ModbusRTU";

export default class CWT_MB307A implements Device {

    private readonly client: ModbusRTU;
    private readonly addr: number;

    private _ai1 = new Writable<number>(0);
    get ai1(): Readable<number> { return this._ai1 }
    private _ai2 = new Writable<number>(0);
    get ai2(): Readable<number> { return this._ai2 }
    private _ai3 = new Writable<number>(0);
    get ai3(): Readable<number> { return this._ai3 }
    private _ai4 = new Writable<number>(0);
    get ai4(): Readable<number> { return this._ai4 }
    private _ai5 = new Writable<number>(0);
    get ai5(): Readable<number> { return this._ai5 }
    private _ai6 = new Writable<number>(0);
    get ai6(): Readable<number> { return this._ai6 }
    private _ai7 = new Writable<number>(0);
    get ai7(): Readable<number> { return this._ai7 }
    private _ai8 = new Writable<number>(0);
    get ai8(): Readable<number> { return this._ai8 }

    readonly ao1 = new Writable<number>(0);
    readonly ao2 = new Writable<number>(0);
    readonly ao3 = new Writable<number>(0);
    readonly ao4 = new Writable<number>(0);

    constructor(client: ModbusRTU, addr: number) {
        this.client = client;
        this.addr = addr;
    }
    
    async update() {
        const ai = await this.client.readAIs(this.addr, 1, 8);
        this._ai1.setVal(ai[0]);
        this._ai2.setVal(ai[1]);
        this._ai3.setVal(ai[2]);
        this._ai4.setVal(ai[3]);
        this._ai5.setVal(ai[4]);
        this._ai6.setVal(ai[5]);
        this._ai7.setVal(ai[6]);
        this._ai8.setVal(ai[7]);

        await this.client.writeAOs(this.addr, 1, [
            this.ao1.getVal(),
            this.ao2.getVal(),
            this.ao3.getVal(),
            this.ao4.getVal(),
        ]);
    }
}