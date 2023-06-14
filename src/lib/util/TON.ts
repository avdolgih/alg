import type IOut from "../IO/IOut";
import Out from "../IO/Out";

export default class TON {

    readonly delay: number;

    private timer?: NodeJS.Timeout;
    private readonly _elapsed  = new Out<boolean>(false);

    constructor(delay: number) {
        this.delay = delay;
    }

    set start(val: IOut<boolean>) {

    }

    get elapsed() : IOut<boolean> {
        return this._elapsed;
    }

    // start() {
    //     console.log("Started");
    //     this.stop();
    //     this.timer = setTimeout(()=> this._val.set(true), this.delay * 1000);
    // }

    // stop() {
    //     if (this.timer) {
    //         this._val.set(false);
    //         clearTimeout(this.timer);
    //         this.timer = undefined;
    //     }
    // }
}