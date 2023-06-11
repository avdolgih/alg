// import ModbusRTU from "./Modbus/ModbusRTU";




// const modbusRTU = new ModbusRTU("COM4");
// modbusRTU.connect().then(async () => {
//     while (true) {
        
//         await modbusRTU.getDI(2, 0, 8).then((data) =>{
//             console.log("1:" + data);
//         });
//         // modbusRTU.getDI(2, 0, 8).then((data) =>{
//         //     console.log("2:" + data);
//         // });
//     }
        // modbusRTU.setDO(2, 0, true).then((data) =>{
        //     console.log(data);
        // });
        // modbusRTU.setDO(2, 1, true).then((data) =>{
        //     console.log(data);
        // });
        // modbusRTU.setDO(2, 2, true).then((data) =>{
        //     console.log(data);
        // });
// });




// import CWT_MB308P from "./Modbus/modules/CWT_MB308P";

// import Filter from "./devices/Filter";

// const modbusRTU = new ModbusRTU("COM4");
// const module1 = new CWT_MB308P(modbusRTU, 2);
// modbusRTU.connect().then(async ()=> {
//     while(true) {
//         await module1.update();
//         // await module1.do1.set(false);
//         // await module1.do2.set(true);
//         // await module1.do3.set(true);
//         // await module1.do4.set(true);
//         // await module1.do5.set(true);
//         // await module1.do6.set(true);
//     }
// });

// const filter = new Filter();

// filter.dry.set(module1.di1);
// module1.do1.set(filter.alarm);


