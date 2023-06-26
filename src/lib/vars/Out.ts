import type IOut from "./IOut";

export default class Out<T> implements IOut<T> {

    private val: T;
    private subscribers = new Set<(val: T) => void>();

    constructor(val: T) {
        this.val = val;
    }

    get(): T {
        return this.val;
    }

    set(val: T) {
        if (val === this.val)
            return;

        console.log("Значение изменилось с " + this.val + " на " + val);
        this.val = val;

        this.subscribers.forEach((callback) => {
            callback(this.val);
        });
    }

    subscribe(callback: (val: T) => void): void {
        this.subscribers.add(callback);
    }

    unsubscribe(callback: (val: T) => void): void {
        this.subscribers.delete(callback);
    }

    getType() : string {
        return typeof this.val;
    }
}