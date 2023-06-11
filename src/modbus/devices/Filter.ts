import In from "../IO/In";
import Out from "../IO/Out";


export default class Filter {
    readonly dry = new In<boolean>(false, async () => await this.update());
    readonly alarm = new Out<boolean>(false);

    constructor() { 
        this.dry =  new In<boolean>(false, async () => await this.update());
        this.alarm = new Out<boolean>(false)
    }

    private update() {
        console.log("UPDATE");
        this.alarm.set(this.dry.get());
    }
}