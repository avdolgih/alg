import ModbusRTU from "../net/modbus/ModbusRTU";
import InnovertISD from "../net/modbus/inverters/InnovertISD";
import CWT_MB307A from "../net/modbus/modules/CWT_MB307A";
import CWT_MB308N from "../net/modbus/modules/CWT_MB308N";
import CWT_TM14PT1000 from "../net/modbus/modules/CWT_TM14PT1000";
import Mqtt from "../net/mqtt/Mqtt";

export default class P239ITP {

    private readonly mqtt = new Mqtt("ws://localhost:8080");
    private readonly modbus1 = new ModbusRTU("ttyUSB0");
    private readonly module1 = new CWT_TM14PT1000(this.modbus1, 2);
    private readonly module2 = new CWT_MB308N(this.modbus1, 3);
    private readonly module3 = new CWT_MB307A(this.modbus1, 4);

    private readonly modbus2 = new ModbusRTU("ttyUSB1");
    private readonly inverter1 = new InnovertISD(this.modbus2, 1);
    private readonly inverter2 = new InnovertISD(this.modbus2, 2);
    private readonly inverter3 = new InnovertISD(this.modbus2, 3);
    private readonly inverter4 = new InnovertISD(this.modbus2, 4);
    private readonly inverter5 = new InnovertISD(this.modbus2, 5);
    private readonly inverter6 = new InnovertISD(this.modbus2, 6);
    private readonly inverter7 = new InnovertISD(this.modbus2, 7);
    private readonly inverter8 = new InnovertISD(this.modbus2, 8);

    constructor() {
        this.mqtt.publishReadable("/boiler/direct_temp", this.module1.ai1);
        this.mqtt.publishReadable("/boiler/reverse_temp", this.module1.ai2);
        this.mqtt.publishReadable("/temple/direct_temp", this.module1.ai3);
        this.mqtt.publishReadable("/temple/reverse_temp", this.module1.ai4);
        this.mqtt.publishReadable("/pricht/direct_temp", this.module1.ai5);
        this.mqtt.publishReadable("/pricht/reverse_temp", this.module1.ai6);
        this.mqtt.publishReadable("/vent/direct_temp", this.module1.ai7);
        this.mqtt.publishReadable("/vent/reverse_temp", this.module1.ai8);
        this.mqtt.publishReadable("/garage/direct_temp", this.module1.ai9);
        this.mqtt.publishReadable("/garage/reverse_temp", this.module1.ai10);
        this.mqtt.publishReadable("/DHW/direct_temp", this.module1.ai11);
        this.mqtt.publishReadable("/DHW/reverse_temp", this.module1.ai12);
        this.mqtt.publishReadable("/outdoor_temp", this.module1.ai13);

        this.mqtt.publishReadable("/boiler/direct_pressure", this.module2.ai1);
        this.mqtt.publishReadable("/boiler/reverse_pressure", this.module2.ai2);
        this.mqtt.publishReadable("/temple/direct_pressure", this.module2.ai3);
        this.mqtt.publishReadable("/temple/reverse_pressure", this.module2.ai4);
        this.mqtt.publishReadable("/pricht/direct_pressure", this.module2.ai5);
        this.mqtt.publishReadable("/pricht/reverse_pressure", this.module2.ai6);
        this.mqtt.publishReadable("/vent/direct_pressure", this.module2.ai7);
        this.mqtt.publishReadable("/vent/reverse_pressure", this.module2.ai8);
        this.mqtt.publishReadable("/power", this.module2.di1);
        this.mqtt.publishReadable("/flood", this.module2.di2);
        this.mqtt.publishReadable("/garage/pump1", this.module2.do1);
        this.mqtt.publishReadable("/garage/pump2", this.module2.do2);
        this.mqtt.publishReadable("/DHW/valve", this.module2.ao1);
        this.mqtt.publishReadable("/pricht/valve", this.module2.ao2);
        this.mqtt.publishReadable("/DHW/pump1.1", this.module2.ao3);
        this.mqtt.publishReadable("/DHW/pump1.2", this.module2.ao4);

        this.mqtt.publishReadable("/garage/direct_pressure", this.module3.ai1);
        this.mqtt.publishReadable("/garage/reverse_pressure", this.module3.ai2);
        this.mqtt.publishReadable("/DHW/direct_pressure", this.module3.ai3);
        this.mqtt.publishReadable("/DHW/reverse_pressure", this.module3.ai4);
        this.mqtt.publishReadable("/DHW/pump1.3", this.module3.ao1);
        this.mqtt.publishReadable("/DHW/pump1.4", this.module3.ao2);

        this.mqtt.publishReadable("/boiler/pump1/start", this.inverter1.start);
        this.mqtt.publishReadable("/boiler/pump1/perf_setpint", this.inverter1.perfSetpoint);
        this.mqtt.publishReadable("/boiler/pump1/perf_real", this.inverter1.perfReal);

        this.mqtt.publishReadable("/boiler/pump2/start", this.inverter2.start);
        this.mqtt.publishReadable("/boiler/pump2/perf_setpint", this.inverter2.perfSetpoint);
        this.mqtt.publishReadable("/boiler/pump2/perf_real", this.inverter2.perfReal);

        this.mqtt.publishReadable("/temple/pump1/start", this.inverter3.start);
        this.mqtt.publishReadable("/temple/pump1/perf_setpint", this.inverter3.perfSetpoint);
        this.mqtt.publishReadable("/temple/pump1/perf_real", this.inverter3.perfReal);

        this.mqtt.publishReadable("/temple/pump2/start", this.inverter4.start);
        this.mqtt.publishReadable("/temple/pump2/perf_setpint", this.inverter4.perfSetpoint);
        this.mqtt.publishReadable("/temple/pump2/perf_real", this.inverter4.perfReal);

        this.mqtt.publishReadable("/pricht/heat/pump1/start", this.inverter5.start);
        this.mqtt.publishReadable("/pricht/heat/pump1/perf_setpint", this.inverter5.perfSetpoint);
        this.mqtt.publishReadable("/pricht/heat/pump1/perf_real", this.inverter5.perfReal);

        this.mqtt.publishReadable("/pricht/heat/pump2/start", this.inverter6.start);
        this.mqtt.publishReadable("/pricht/heat/pump2/perf_setpint", this.inverter6.perfSetpoint);
        this.mqtt.publishReadable("/pricht/heat/pump2/perf_real", this.inverter6.perfReal);

        this.mqtt.publishReadable("/pricht/vent/pump1/start", this.inverter7.start);
        this.mqtt.publishReadable("/pricht/vent/pump1/perf_setpint", this.inverter7.perfSetpoint);
        this.mqtt.publishReadable("/pricht/vent/perf_real", this.inverter7.perfReal);

        this.mqtt.publishReadable("/pricht/vent/pump2/start", this.inverter8.start);
        this.mqtt.publishReadable("/pricht/vent/pump2/perf_setpint", this.inverter8.perfSetpoint);
        this.mqtt.publishReadable("/pricht/vent/pump2/perf_real", this.inverter8.perfReal);
    }
}