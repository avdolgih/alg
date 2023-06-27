import Readable from "../../var/Readable";
import Writable from "../../var/Writable";
import Device from "./Device";
import type ModbusRTU from "./ModbusRTU";

export default class CWT_MB308P implements Device {

    private readonly client: ModbusRTU;
    private readonly addr: number;

    constructor(client: ModbusRTU, addr: number) {
        this.client = client;
        this.addr = addr;
    }

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

    do1: boolean = false;
    do2: boolean = false;
    do3: boolean = false;
    do4: boolean = false;
    do5: boolean = false;
    do6: boolean = false;

    async update() {
        try {
            const di = await this.client.readDI(this.addr, 0, 8);
            this._di1.val = di[0];
            this._di2.val = di[1];
            this._di3.val = di[2];
            this._di4.val = di[3];
            this._di5.val = di[4];
            this._di6.val = di[5];
            this._di7.val = di[6];
            this._di8.val = di[7];

            const ai = await this.client.readAI(this.addr, 50, 16);
            this._ai1.val = ai[0];
            this._ai2.val = ai[1];
            this._ai3.val = ai[2];
            this._ai4.val = ai[3];
            this._ai5.val = ai[4];
            this._ai6.val = ai[5];
            this._ai7.val = ai[6];
            this._ai8.val = ai[7];
            this._ai9.val = ai[8];
            this._ai10.val = ai[9];
            this._ai11.val = ai[10];
            this._ai12.val = ai[11];
            this._ai13.val = ai[12];
            this._ai14.val = ai[13];
            this._ai15.val = ai[14];
            this._ai16.val = ai[15];

            await this.client.writeDOs(this.addr, 0, [
                this.do1,
                this.do2,
                this.do3,
                this.do4,
                this.do5,
                this.do6,
            ]);
        } catch (e) {
            console.log(e);
        }
    }
}