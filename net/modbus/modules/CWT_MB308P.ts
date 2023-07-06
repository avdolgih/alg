import Readable from "../../../var/Readable";
import Writable from "../../../var/Writable";
import Device from "../Device";
import type ModbusRTU from "../ModbusRTU";

export default class CWT_MB308P implements Device {

    private readonly client: ModbusRTU;
    private readonly addr: number;

    private _di1 = new Writable<boolean>(false);
    get di1(): Readable<boolean> { return this._di1 }
    private _di2 = new Writable<boolean>(false);
    get di2(): Readable<boolean> { return this._di2 }
    private _di3 = new Writable<boolean>(false);
    get di3(): Readable<boolean> { return this._di3 }
    private _di4 = new Writable<boolean>(false);
    get di4(): Readable<boolean> { return this._di4 }
    private _di5 = new Writable<boolean>(false);
    get di5(): Readable<boolean> { return this._di5 }
    private _di6 = new Writable<boolean>(false);
    get di6(): Readable<boolean> { return this._di6 }
    private _di7 = new Writable<boolean>(false);
    get di7(): Readable<boolean> { return this._di7 }
    private _di8 = new Writable<boolean>(false);
    get di8(): Readable<boolean> { return this._di8 }

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
    private _ai15 = new Writable<number>(0);
    get ai15(): Readable<number> { return this._ai15 }
    private _ai16 = new Writable<number>(0);
    get ai16(): Readable<number> { return this._ai16 }

    readonly do1 = new Writable<boolean>(false);
    readonly do2 = new Writable<boolean>(false);
    readonly do3 = new Writable<boolean>(false);
    readonly do4 = new Writable<boolean>(false);
    readonly do5 = new Writable<boolean>(false);
    readonly do6 = new Writable<boolean>(false);

    constructor(client: ModbusRTU, addr: number) {
        this.client = client;
        this.addr = addr;
    }
    
    async update() {
        const di = await this.client.readDIs(this.addr, 0, 8);
        console.log(di);
        this._di1.setVal(di[0]);
        this._di2.setVal(di[1]);
        this._di3.setVal(di[2]);
        this._di4.setVal(di[3]);
        this._di5.setVal(di[4]);
        this._di6.setVal(di[5]);
        this._di7.setVal(di[6]);
        this._di8.setVal(di[7]);

        const ai = await this.client.readAIs(this.addr, 50, 16);
        console.log(ai);
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
        this._ai15.setVal(ai[14]);
        this._ai16.setVal(ai[15]);

        await this.client.writeDOs(this.addr, 0, [
            this.do1.getVal(),
            this.do2.getVal(),
            this.do3.getVal(),
            this.do4.getVal(),
            this.do5.getVal(),
            this.do6.getVal(),
        ]);
    }
}