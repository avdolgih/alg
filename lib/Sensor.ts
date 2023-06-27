import Readable from "../var/Readable";
import Writable from "../var/Writable";

export default class Sensor {
    readonly in = new Writable<number>(0);
    readonly offset = new Writable<number>(0);
    readonly multiplier = new Writable<number>(0);


    private readonly _out = new Writable<number>(0);
    get out(): Readable<number> { return this._out }

    update() {
        const in_ = this.in.val;
        const offset = this.offset.val;
        const multiplier = this.multiplier.val;
        this._out.val = (in_ + offset) * multiplier;
    }
}