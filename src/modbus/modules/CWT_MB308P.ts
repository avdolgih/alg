import In from "../../lib/In";
import Out from "../../lib/IO/Out";
import type ModbusRTU from "../ModbusRTU";

export default class CWT_MB308P {

    private readonly client: ModbusRTU;
    private readonly addr: number;

    constructor(client: ModbusRTU, addr: number) {
        this.client = client;
        this.addr = addr;
    }

    readonly do1: In<boolean> = new In(false, () => this.write);
    readonly do2: In<boolean> = new In(false, () => this.write);
    readonly do3: In<boolean> = new In(false, () => this.write);
    readonly do4: In<boolean> = new In(false, () => this.write);
    readonly do5: In<boolean> = new In(false, () => this.write);
    readonly do6: In<boolean> = new In(false, () => this.write);

    readonly di1: Out<boolean> = new Out(false);
    readonly di2: Out<boolean> = new Out(false);
    readonly di3: Out<boolean> = new Out(false);
    readonly di4: Out<boolean> = new Out(false);
    readonly di5: Out<boolean> = new Out(false);
    readonly di6: Out<boolean> = new Out(false);
    readonly di7: Out<boolean> = new Out(false);
    readonly di8: Out<boolean> = new Out(false);

    readonly ai1: Out<number> = new Out(0);
    readonly ai2: Out<number> = new Out(0);
    readonly ai3: Out<number> = new Out(0);
    readonly ai4: Out<number> = new Out(0);
    readonly ai5: Out<number> = new Out(0);
    readonly ai6: Out<number> = new Out(0);
    readonly ai7: Out<number> = new Out(0);
    readonly ai8: Out<number> = new Out(0);
    readonly ai9: Out<number> = new Out(0);
    readonly ai10: Out<number> = new Out(0);
    readonly ai11: Out<number> = new Out(0);
    readonly ai12: Out<number> = new Out(0);
    readonly ai13: Out<number> = new Out(0);
    readonly ai14: Out<number> = new Out(0);
    readonly ai15: Out<number> = new Out(0);
    readonly ai16: Out<number> = new Out(0);

    private async write() {
        console.log("Запись значения");
    }

    async update() {
        const di = await this.client.readDI(this.addr, 0, 8);
        this.di1.set(di[0]);
        this.di2.set(di[1]);
        this.di3.set(di[2]);
        this.di4.set(di[3]);
        this.di5.set(di[4]);
        this.di6.set(di[5]);
        this.di7.set(di[6]);
        this.di8.set(di[7]);

        const ai = await this.client.readAI(this.addr, 50, 16);
        this.ai1.set(ai[0]);
        this.ai2.set(ai[1]);
        this.ai3.set(ai[2]);
        this.ai4.set(ai[3]);
        this.ai5.set(ai[4]);
        this.ai6.set(ai[5]);
        this.ai7.set(ai[6]);
        this.ai8.set(ai[7]);
        this.ai9.set(ai[8]);
        this.ai10.set(ai[9]);
        this.ai11.set(ai[10]);
        this.ai12.set(ai[11]);
        this.ai13.set(ai[12]);
        this.ai14.set(ai[13]);
        this.ai15.set(ai[14]);
        this.ai16.set(ai[15]);

        await this.client.writeDOs(this.addr, 0, [
            this.do1.get(),
            this.do2.get(),
            this.do3.get(),
            this.do4.get(),
            this.do5.get(),
            this.do6.get(),
        ]);
    }
}