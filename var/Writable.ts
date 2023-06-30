import Readable from "./Readable";

export default class Writable<T> extends Readable<T> {

    setVal(val: T) {
        if (val === this._val)
            return;
        this._val = val;
        this.subscribers.forEach(f => f(val));
    }

    setString(val: string) {
        const type = typeof this._val;
        switch (type) {
            case "boolean":
                if (val === "true") this.setVal(<T>true);
                else if (val === "false") this.setVal(<T>false);
                else throw new Error("Ошибка преобразования в boolean: " + val);
                break;
            case "number":
                this.setVal(<T>parseFloat(val));
                break;
            default:
                throw new Error("Неизвестный тип: " + type);
        }
    }
}

