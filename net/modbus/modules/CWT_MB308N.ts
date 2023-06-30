import Readable from "../../../var/Readable";
import Writable from "../../../var/Writable";
import Device from "../Device";
import type ModbusRTU from "../ModbusRTU";

export default class CWT_MB308P implements Device {

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

    readonly do1 = new Writable<boolean>(false);
    readonly do2 = new Writable<boolean>(false);
    readonly do3 = new Writable<boolean>(false);
    readonly do4 = new Writable<boolean>(false);
    readonly do5 = new Writable<boolean>(false);
    readonly do6 = new Writable<boolean>(false);
    readonly do7 = new Writable<boolean>(false);
    readonly do8 = new Writable<boolean>(false);

    constructor(client: ModbusRTU, addr: number) {
        this.client = client;
        this.addr = addr;
    }
    
    async update() {
        const ai = await this.client.readAIs(this.addr, 51, 8);
        this._ai1.setVal(ai[0]);
        this._ai2.setVal(ai[1]);
        this._ai3.setVal(ai[2]);
        this._ai4.setVal(ai[3]);
        this._ai5.setVal(ai[4]);
        this._ai6.setVal(ai[5]);
        this._ai7.setVal(ai[6]);
        this._ai8.setVal(ai[7]);

        await this.client.writeAOs(this.addr, 0, [
            this.ao1.getVal(),
            this.ao2.getVal(),
            this.ao3.getVal(),
            this.ao4.getVal(),
        ]);

        const di = await this.client.readDIs(this.addr, 1, 8);
        this._di1.setVal(di[0]);
        this._di2.setVal(di[1]);
        this._di3.setVal(di[2]);
        this._di4.setVal(di[3]);
        this._di5.setVal(di[4]);
        this._di6.setVal(di[5]);
        this._di7.setVal(di[6]);
        this._di8.setVal(di[7]);

        await this.client.writeDOs(this.addr, 1, [
            this.do1.getVal(),
            this.do2.getVal(),
            this.do3.getVal(),
            this.do4.getVal(),
            this.do5.getVal(),
            this.do6.getVal(),
            this.do7.getVal(),
            this.do8.getVal(),
        ]);
    }
}