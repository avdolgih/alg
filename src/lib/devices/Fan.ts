import Out from "../IO/Out";
import In from "../IO/In";

export default class Fan {

    readonly run = new In<boolean>(false, () => this.update());
    readonly pressure = new In<boolean>(false, () => this.update);
    readonly delay = new In<number>(10, () => this.update);

    readonly start = new Out<boolean>(false);
    readonly alarm = new Out<boolean>(false);


    // private timer: Timer = new Timer(5, () => {});

    constructor() {
        // this.start.subscribe((val) => { this.onStart(val) })
    }

    reset() {

    }

    // private onStart(val: boolean) {
    //     if (val)
    //         this.timer.start();
    //     else
    //         this.timer.stop();
    // }


    private update() {
        this.start.set(this.run.get() && !this.alarm.get())
    }
}