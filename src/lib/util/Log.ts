import type IOut from "$lib/vars/IOut";

export default class Log<T> {

    constructor(v: IOut<T>) {
        v.subscribe(this.log);
    }

    private log(val: T) {
        console.log(val);
    }
}