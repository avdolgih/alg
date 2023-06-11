import ModbusRTU from "./modbus/ModbusRTU";


startup();
console.log("Работает!");

async function startup() {
    const modbusRTU = new ModbusRTU();
    await modbusRTU.connect();
    console.log("Запрос данных!");
    setInterval(async ()=> {
        console.log(await modbusRTU.readDI(2, 0, 8));
        console.log(await modbusRTU.readAI(2, 50, 8));
    }, 1000);

}

// commands();

// async function commands() {
//     await modbusRTU.connect();
//     while (true) {
//         console.log(await modbusRTU.readAI(2, 50, 8));
//     }
// };

// modbusRTU.writeDO(2, 0, true).then((val) => {
//     console.log("Then: " + val);
// }).catch((e) => {
//     console.log("Catch: " + e);
// });