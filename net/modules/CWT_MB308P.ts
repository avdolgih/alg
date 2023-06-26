import type ModbusRTU from "../ModbusRTU";

export default class CWT_MB308P {

    private readonly client: ModbusRTU;
    private readonly addr: number;

    constructor(client: ModbusRTU, addr: number) {
        this.client = client;
        this.addr = addr;
    }

    di1: boolean = false;
    di2: boolean = false;
    di3: boolean = false;
    di4: boolean = false;
    di5: boolean = false;
    di6: boolean = false;
    di7: boolean = false;
    di8: boolean = false;

    ai1: number = 0;
    ai2: number = 0;
    ai3: number = 0;
    ai4: number = 0;
    ai5: number = 0;
    ai6: number = 0;
    ai7: number = 0;
    ai8: number = 0;
    ai9: number = 0;
    ai10: number = 0;
    ai11: number = 0;
    ai12: number = 0;
    ai13: number = 0;
    ai14: number = 0;
    ai15: number = 0;
    ai16: number = 0;

    do1: boolean = false;
    do2: boolean = false;
    do3: boolean = false;
    do4: boolean = false;
    do5: boolean = false;
    do6: boolean = false;

    async update() {
        try {
            const di = await this.client.readDI(this.addr, 0, 8);
            this.di1 = di[0];
            this.di2 = di[1];
            this.di3 = di[2];
            this.di4 = di[3];
            this.di5 = di[4];
            this.di6 = di[5];
            this.di7 = di[6];
            this.di8 = di[7];

            const ai = await this.client.readAI(this.addr, 50, 16);
            this.ai1 = ai[0];
            this.ai2 = ai[1];
            this.ai3 = ai[2];
            this.ai4 = ai[3];
            this.ai5 = ai[4];
            this.ai6 = ai[5];
            this.ai7 = ai[6];
            this.ai8 = ai[7];
            this.ai9 = ai[8];
            this.ai10 = ai[9];
            this.ai11 = ai[10];
            this.ai12 = ai[11];
            this.ai13 = ai[12];
            this.ai14 = ai[13];
            this.ai15 = ai[14];
            this.ai16 = ai[15];

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