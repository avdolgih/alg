// import Queue from "./Queue";
import ModbusRTU from "./ModbusRTU";

const modbusRTU = new ModbusRTU();

commands();

async function commands() {
    await modbusRTU.connect();
    while (true) {
        console.log(await modbusRTU.readAI(2, 50, 8));
    }
};

// modbusRTU.writeDO(2, 0, true).then((val) => {
//     console.log("Then: " + val);
// }).catch((e) => {
//     console.log("Catch: " + e);
// });