// import In from "../IO/In";
// import Out from "../IO/Out";
// import ModbusRTU from "../ModbusRTU";

// export default class CWT_MB308P {

//     private readonly client: ModbusRTU;
//     private readonly addr: number;

//     constructor(client: ModbusRTU, addr: number) {
//         this.client = client;
//         this.addr = addr;
//     }

//     readonly do1: In<boolean> = new In(false, async (val) => { await this.setDO(1, val) });
//     readonly do2: In<boolean> = new In(false, async (val) => { await this.setDO(2, val) });
//     readonly do3: In<boolean> = new In(false, async (val) => { await this.setDO(3, val) });
//     readonly do4: In<boolean> = new In(false, async (val) => { await this.setDO(4, val) });
//     readonly do5: In<boolean> = new In(false, async (val) => { await this.setDO(5, val) });
//     readonly do6: In<boolean> = new In(false, async (val) => { await this.setDO(6, val) });

//     readonly di1: Out<boolean> = new Out(false);
//     readonly di2: Out<boolean> = new Out(false);
//     readonly di3: Out<boolean> = new Out(false);
//     readonly di4: Out<boolean> = new Out(false);
//     readonly di5: Out<boolean> = new Out(false);
//     readonly di6: Out<boolean> = new Out(false);
//     readonly di7: Out<boolean> = new Out(false);
//     readonly di8: Out<boolean> = new Out(false);

//     readonly ai1: Out<number> = new Out(0);
//     readonly ai2: Out<number> = new Out(0);
//     readonly ai3: Out<number> = new Out(0);
//     readonly ai4: Out<number> = new Out(0);
//     readonly ai5: Out<number> = new Out(0);
//     readonly ai6: Out<number> = new Out(0);
//     readonly ai7: Out<number> = new Out(0);
//     readonly ai8: Out<number> = new Out(0);
//     readonly ai9: Out<number> = new Out(0);
//     readonly ai10: Out<number> = new Out(0);
//     readonly ai11: Out<number> = new Out(0);
//     readonly ai12: Out<number> = new Out(0);
//     readonly ai13: Out<number> = new Out(0);
//     readonly ai14: Out<number> = new Out(0);
//     readonly ai15: Out<number> = new Out(0);
//     readonly ai16: Out<number> = new Out(0);

//     private async setDO(idx: number, val: boolean) {
//         await this.client.setDO(this.addr, idx - 1, val);
//     }

//     async update() {
//         const di = await this.client.getDI(this.addr, 0, 8);
//         this.di1.set(di[0]);
//         this.di2.set(di[1]);
//         this.di3.set(di[2]);
//         this.di4.set(di[3]);
//         this.di5.set(di[4]);
//         this.di6.set(di[5]);
//         this.di7.set(di[6]);
//         this.di8.set(di[7]);

//         // const ai = await this.client.getAI(this.addr, 51, 8);
//         // console.log(ai);
//         // this.ai1.val = ai[0];
//         // this.ai2.val = ai[1];
//         // this.ai3.val = ai[2];
//         // this.ai4.val = ai[3];
//         // this.ai5.val = ai[4];
//         // this.ai6.val = ai[5];
//         // this.ai7.val = ai[6];
//         // this.ai8.val = ai[7];
//         // this.ai9.val = ai[8];
//         // this.ai10.val = ai[9];
//         // this.ai11.val = ai[10];
//         // this.ai12.val = ai[11];
//         // this.ai13.val = ai[12];
//         // this.ai14.val = ai[13];
//         // this.ai15.val = ai[14];
//         // this.ai16.val = ai[15];
//     }
// }