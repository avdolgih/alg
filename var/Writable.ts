import Readable from "./Readable";

export default class Writable<T> extends Readable<T> {
    
    set val(val: T) {
        if (val === super._val)
            return;

        this.val = val;
        super.subscribers.forEach(f => f(val));
    }

    setString(val: string): T {
        const type = typeof this._val;
        switch (type) {
            case "boolean":
                if (val === "true") this.val = <T>true;
                else if (val === "false") this.val = <T>false;
                else throw new Error("Ошибка преобразования в boolean: " + val);
            case "number":
                this.val = <T>parseFloat(val);
            default:
                throw new Error("Неизвестный тип: " + type);
        }
    }
}

