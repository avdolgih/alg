import Readable from "../var/Readable";
import Writable from "../var/Writable";

export default class Sensor {
    readonly in = new Writable<number>(0);
    readonly offset = new Writable<number>(0);
    readonly multiplier = new Writable<number>(1);

    private readonly _out = new Writable<number>(0);
    get out(): Readable<number> { return this._out }

    constructor() {
        this.in.subscribe(() => this.update());
        this.offset.subscribe(() => this.update());
        this.multiplier.subscribe(() => this.update());
    }

    update() {
        const in_ = this.in.getVal();
        const offset = this.offset.getVal();
        const multiplier = this.multiplier.getVal();
        this._out.setVal((in_ + offset) * multiplier);
    }
}