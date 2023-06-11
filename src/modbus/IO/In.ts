import IOut from "./IOut";
import Out from "./Out";

export default class In<T> {
    private readonly changed;
    private val: T | IOut<T>;

    constructor(val: T, changed: (val: T) => void) {
        this.val = val;
        this.changed = changed;
    }

    async set(val: T | IOut<T>) {
        if (val == this.val)
            return;

        if (this.val instanceof Out<T>) 
            this.val.unsubscribe(this.changed);

        this.val = val;

        if (val instanceof Out<T>)
            val.subscribe(this.changed);
        else 
            await this.changed(<T>val);
    }

    get(): T {
        if (this.val instanceof Out<T>) 
            return this.val.get();
        return <T>this.val;
    }
}