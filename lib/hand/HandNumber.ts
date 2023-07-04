import Readable from "../../var/Readable";
import Writable from "../../var/Writable";
import HandVal from "./HandVal";

export default class HandNumber implements HandVal {
    get type() {
        return "number";
    }

    readonly in = new Writable<number>(0);
    readonly hand = new Writable<boolean>(false);
    readonly handVal = new Writable<number>(0);
    private readonly _out = new Writable<number>(0);
    get out(): Readable<number> { return this._out }

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