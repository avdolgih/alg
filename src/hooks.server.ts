import Aedes from "aedes";
import http from "http";
import ws from "websocket-stream";

const httpServer = http.createServer();
const websocket = ws.createServer({ server: httpServer }, new Aedes().handle);

httpServer.listen(8888, () => {
    console.log(8888);
});




// const aedes = require('aedes')()
// const httpServer = require('http').createServer()
// const ws = require('websocket-stream')
// const port = 8888

// ws.createServer({ server: httpServer }, aedes.handle)

// httpServer.listen(port, function () {
//   console.log('websocket server listening on port ', port)
// })




// import ModbusRTU from "./modbus/ModbusRTU";

// startup();

// async function startup() {
//     const modbusRTU = new ModbusRTU();
//     await modbusRTU.connect();
//     console.log("Запрос данных!");
//     setInterval(async ()=> {
//         console.log(await modbusRTU.readDI(2, 0, 8));
//         console.log(await modbusRTU.readAI(2, 50, 8));
//     }, 1000);

// }

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