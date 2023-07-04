import HandNumber from "../../lib/hand/HandNumber";
import ModbusRTU from "../../net/modbus/ModbusRTU";
import InnovertISD from "../../net/modbus/inverters/InnovertISD";
import CWT_MB307A from "../../net/modbus/modules/CWT_MB307A";
import CWT_MB308N from "../../net/modbus/modules/CWT_MB308N";
import CWT_TM14PT1000 from "../../net/modbus/modules/CWT_TM14PT1000";
import Mqtt from "../../net/mqtt/Mqtt";
import IO from "./IO";

export default class P239ITP {

    readonly mqtt;
    private readonly modbus1 = new ModbusRTU("ttyUSB0");
    readonly module1 = new CWT_TM14PT1000(this.modbus1, 2);
    readonly module2 = new CWT_MB308N(this.modbus1, 3);
    readonly module3 = new CWT_MB307A(this.modbus1, 4);

    private readonly modbus2 = new ModbusRTU("ttyUSB1");
    readonly inverter1 = new InnovertISD(this.modbus2, 1);
    readonly inverter2 = new InnovertISD(this.modbus2, 2);
    readonly inverter3 = new InnovertISD(this.modbus2, 3);
    readonly inverter4 = new InnovertISD(this.modbus2, 4);
    readonly inverter5 = new InnovertISD(this.modbus2, 5);
    readonly inverter6 = new InnovertISD(this.modbus2, 6);
    readonly inverter7 = new InnovertISD(this.modbus2, 7);
    readonly inverter8 = new InnovertISD(this.modbus2, 8);

    private readonly IO = new IO(this);

    constructor(mqtt: Mqtt) {
        this.mqtt = mqtt;
    }
}