import type IOut from "./IOut";
import Out from "./Out";

export default class In<T> {
    private readonly changed;
    private val: T | IOut<T>;

    constructor(val: T, changed: (val: T) => void) {
        this.val = val;
        this.changed = changed;
    }

    bind(val: IOut<T>) {
        if (val === this.val)
            return;

        this.val = val;
        val.subscribe(this.changed);
    }

    set(val: T) {
        if (val === this.val)
            return;
        this.val = val;
    }

    get(): T {
        if (this.val instanceof Out<T>)
            return this.val.get();
        return <T>this.val;
    }
}