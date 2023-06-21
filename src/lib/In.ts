type Action<T> = (val: T) => void;

export default class In<T> {

    private val: T;
    private readonly changed?: Action<T>;

    constructor(val: T, changed?: Action<T>) {
        this.val = val;
        this.changed = changed;
    }

    set(val: T) {
        if (val === this.val)
            return;
        this.val = val;
        if (this.changed)
            this.changed(val)
    }

    get(): T {
        return this.val;
    }
}