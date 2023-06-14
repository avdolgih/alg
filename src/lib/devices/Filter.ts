import In from "../IO/In";
import Out from "../IO/Out";


export default class Filter {
    readonly dry = new In<boolean>(false, () => this.update());
    readonly alarm = new Out<boolean>(false);

    constructor() { 
        this.dry =  new In<boolean>(false, () => this.update());
        this.alarm = new Out<boolean>(false)
    }

    private update() {
        console.log("Filter dry: " + this.dry.get());
        this.alarm.set(this.dry.get());
    }
}