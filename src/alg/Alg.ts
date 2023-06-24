import ModbusRTU from "../net/ModbusRTU";
import CWT_MB308P from "../net/modules/CWT_MB308P";
import Filter from "./devices/Filter";

export default {
    test: () => {
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
        module1.do2.bind(filter.alarm);
        module1.do3.bind(filter.alarm);
        module1.do4.bind(filter.alarm);
        module1.do5.bind(filter.alarm);
        module1.do6.bind(filter.alarm);
    }
}


