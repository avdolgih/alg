import Readable from "../../../var/Readable";
import Writable from "../../../var/Writable";
import Device from "../Device";
import type ModbusRTU from "../ModbusRTU";

export default class CWT_TM14PT1000 implements Device {

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
    private _ai9 = new Writable<number>(0);
    get ai9(): Readable<number> { return this._ai9 }
    private _ai10 = new Writable<number>(0);
    get ai10(): Readable<number> { return this._ai10 }
    private _ai11 = new Writable<number>(0);
    get ai11(): Readable<number> { return this._ai11 }
    private _ai12 = new Writable<number>(0);
    get ai12(): Readable<number> { return this._ai12 }
    private _ai13 = new Writable<number>(0);
    get ai13(): Readable<number> { return this._ai13 }
    private _ai14 = new Writable<number>(0);
    get ai14(): Readable<number> { return this._ai14 }

    constructor(client: ModbusRTU, addr: number) {
        this.client = client;
        this.addr = addr;
    }

    async update() {
        const ai = await this.client.readAIs(this.addr, 32, 14);
        this._ai1.setVal(ai[0]);
        this._ai2.setVal(ai[1]);
        this._ai3.setVal(ai[2]);
        this._ai4.setVal(ai[3]);
        this._ai5.setVal(ai[4]);
        this._ai6.setVal(ai[5]);
        this._ai7.setVal(ai[6]);
        this._ai8.setVal(ai[7]);
        this._ai9.setVal(ai[8]);
        this._ai10.setVal(ai[9]);
        this._ai11.setVal(ai[10]);
        this._ai12.setVal(ai[11]);
        this._ai13.setVal(ai[12]);
        this._ai14.setVal(ai[13]);
    }
}