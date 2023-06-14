import CWT_MB308P from "./modbus/modules/CWT_MB308P";
import ModbusRTU from "./modbus/ModbusRTU";
import Filter from "./lib/devices/Filter";

const modbusRTU = new ModbusRTU();
const module1 = new CWT_MB308P(modbusRTU, 2);

(async () => {
    await modbusRTU.connect();
    
    while (true) {
        await module1.update();
    }
})();

const filter = new Filter();
filter.dry.bind(module1.di1);
module1.do1.bind(filter.alarm);