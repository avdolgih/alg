import type Out from "$lib/Out";
import ModbusRTU from "./net/ModbusRTU";
import CWT_MB308P from "./net/modules/CWT_MB308P";
import MQTT from "./net/MQTTServer";


import Aedes from 'aedes';
import { createServer } from 'http';
import ws from "websocket-stream";

const port = 8888;
const aedes = new Aedes();
const httpServer = createServer();
ws.createServer({ server: httpServer }, new Aedes().handle);
httpServer.listen(port, function () {
    console.log('websocket server listening on port ', port)
});

const modbus = new ModbusRTU();
const module1 = new CWT_MB308P(modbus, 2);

// (async () => {
//     try {
//         await modbus.connect("/dev/ttyUSB0");
//         console.log("connected");
//         while (true) {
//             console.log("update");
//             await module1.update();
//         }
//     } catch (e) {
//         console.log(e);
//     }
// })();

sub(module1.ai1, "/nku/module1/ai1");
sub(module1.ai2, "/nku/module1/ai2");
sub(module1.ai3, "/nku/module1/ai3");
sub(module1.ai4, "/nku/module1/ai4");
sub(module1.ai5, "/nku/module1/ai5");
sub(module1.ai6, "/nku/module1/ai6");
sub(module1.ai7, "/nku/module1/ai7");
sub(module1.ai8, "/nku/module1/ai8");
sub(module1.ai9, "/nku/module1/ai9");
sub(module1.ai10, "/nku/module1/ai10");
sub(module1.ai11, "/nku/module1/ai11");
sub(module1.ai12, "/nku/module1/ai12");
sub(module1.ai13, "/nku/module1/ai13");
sub(module1.ai14, "/nku/module1/ai14");
sub(module1.ai15, "/nku/module1/ai15");
sub(module1.ai16, "/nku/module1/ai16");
sub(module1.di1, "/nku/module1/di1");
sub(module1.di2, "/nku/module1/di2");
sub(module1.di3, "/nku/module1/di3");
sub(module1.di4, "/nku/module1/di4");
sub(module1.di5, "/nku/module1/di5");
sub(module1.di6, "/nku/module1/di6");
sub(module1.di7, "/nku/module1/di7");
sub(module1.di8, "/nku/module1/di8");

function sub<T>(out: Out<T>, topic: string) {
    let val: string;
    switch (out.getType()) {
        case "boolean":
            out.subscribe(val => MQTT.publish(topic, <boolean>val ? "true" : "false"));
        case "number":
            out.subscribe(val => MQTT.publish(topic, (<number>val).toString()));
    }
}