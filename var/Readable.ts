export default abstract class Readable<T> {

    protected _val: T;
    protected readonly subscribers = new Set<Callback<T>>();

    constructor(val: T) {
        this._val = val;
    }

    getVal() {
        return this._val;
    }

    subscribe(callback: Callback<T>) {
        this.subscribers.add(callback);
    }

    unsubscribe(callback: Callback<T>): void {
        this.subscribers.delete(callback);
    }

    getString(): string {
        const type = typeof this._val;
        switch (type) {
            case "boolean": {
                const val = <boolean>this._val;
                return val ? "true" : "false";
            }
            case "number": {
                const val = <number>this._val;
                return val.toString();
            }
            default:
                throw new Error("Неизвестный тип: " + type);
        }
    }
}

type Callback<T> = (val: T) => void