import Sensor from "./lib/Sensor";
import ModbusRTU from "./net/ModbusRTU";
import CWT_MB308P from "./net/modules/CWT_MB308P";

const modbus = new ModbusRTU();
const module1 = new CWT_MB308P(modbus, 2);
modbus.connect("ttyUSB0");

const sensor1 = new Sensor();
sensor1.multiplier = 1 / 100;

const sensor2 = new Sensor();
sensor2.multiplier = 1 / 100;

(() => {
    sensor1.sensor = module1.ai1;
    sensor1.update();

    sensor2.sensor = module1.ai2;
    sensor2.update();
})();