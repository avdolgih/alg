import Readable from "../var/Readable";
import Writable from "../var/Writable";

export default class HandBool {
    readonly in = new Writable<boolean>(false);
    readonly hand = new Writable<boolean>(false);
    readonly handVal = new Writable<boolean>(false);
    private readonly _out = new Writable<boolean>(false);
    get out(): Readable<boolean> { return this._out }

    constructor() {
        this.in.subscribe(() => this.update());
        this.hand.subscribe(() => this.update());
        this.handVal.subscribe(() => this.update());
    }

    update() {
        const in_ = this.in.getVal();
        const hand = this.hand.getVal();
        const handVal = this.handVal.getVal();
        const out = hand ? handVal : in_;
        this._out.setVal(out);
    }
}