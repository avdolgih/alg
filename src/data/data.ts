import HMI from "../model/HMI";
import Button from "../model/elements/Button";
import Label from "../model/elements/Label";
import Rectangle from "../model/elements/Rectangle";
import Switch from "../model/elements/Switch";
import TopicBool from "../model/mqtt/TopicBool";
import TopicVal from "../model/mqtt/TopicVal";

export default {
  V5: new HMI([
    new Label(400, 40, 600, 100, "", 60, "ША В5"),
    new Label(100, 200, 150, 0, "black", 55, "В5"),
    new Switch(
      400,
      200,
      200,
      0,
      "black",
      55,
      new TopicBool("/mode/get", "START", [
        { value: "START", text: "Работает" },
        { value: "STOP", text: "Ожидает" },
      ])
    ),
    new Button(
      15,
      380,
      280,
      100,
      "#14FF00",
      "black",
      "ПУСК",
      65,
      new TopicVal("/mode/get", "START"),
      new TopicVal("/mode/set", "START")
    ),
    new Button(
      365,
      380,
      280,
      100,
      "red",
      "black",
      "СТОП",
      65,
      new TopicVal("/mode/get", "STOP"),
      new TopicVal("/mode/set", "STOP")
    ),
    new Button(
      730,
      380,
      280,
      100,
      "#FFF96C",
      "black",
      "АВТО",
      65,
      new TopicVal("/mode/get", "AUTO"),
      new TopicVal("/mode/set", "AUTO")
    ),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
};

//  V6: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В6"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V7: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В7"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V8: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В8"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V9: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В9"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V10: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В10"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V11: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В11"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V12: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В12"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V13: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В13"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V14: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В14"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V19: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В19"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V20: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В20"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V21: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В21"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V22: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В22"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V23: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В23"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V28: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША В28"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   VD1: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША ВД1"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   VD2: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША ВД2"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   AV1: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША АВ1"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   P6: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША Р6"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   P7: new HMI([
//     new Label(400, 0, 600, 100, "", 60, "ША Р7"),
//     new Label(100, 170, 150, 0, "black", 40, "Вентилятор"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       380,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "START")
//     ),
//     new Button(
//       365,
//       380,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       380,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/mode/get", ""),
//       new TopicVal("/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 150, "#fff"),
//   ]),
//   V18V18R: new HMI([
//     new Label(330, 0, 600, 100, "", 60, "ША В18В18Р"),
//     new Label(100, 170, 250, 0, "black", 40, "Вентилятор 1"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/M1/mode/get", "", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Label(100, 250, 250, 0, "black", 40, "Вентилятор 2"),
//     new Switch(
//       400,
//       250,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/M2/mode/get", "", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       420,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "START")
//     ),
//     new Button(
//       365,
//       420,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       420,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 230, "#fff"),
//   ]),
//   V32V32R: new HMI([
//     new Label(330, 0, 600, 100, "", 60, "ША В32В32Р"),
//     new Label(100, 170, 250, 0, "black", 40, "Вентилятор 1"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/M1/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Label(100, 250, 250, 0, "black", 40, "Вентилятор 2"),
//     new Switch(
//       400,
//       250,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/M2/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       420,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "START")
//     ),
//     new Button(
//       365,
//       420,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       420,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 230, "#fff"),
//   ]),
//   V37V37R: new HMI([
//     new Label(330, 0, 600, 100, "", 60, "ША В378В37Р"),
//     new Label(100, 170, 250, 0, "black", 40, "Вентилятор 1"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/M1/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Label(100, 250, 250, 0, "black", 40, "Вентилятор 2"),
//     new Switch(
//       400,
//       250,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/M2/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       420,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "START")
//     ),
//     new Button(
//       365,
//       420,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       420,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 230, "#fff"),
//   ]),
//   V38V38R: new HMI([
//     new Label(330, 0, 600, 100, "", 60, "ША В38В38Р"),
//     new Label(100, 170, 250, 0, "black", 40, "Вентилятор 1"),
//     new Switch(
//       400,
//       170,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/M1/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Label(100, 250, 250, 0, "black", 40, "Вентилятор 2"),
//     new Switch(
//       400,
//       250,
//       200,
//       0,
//       "black",
//       40,
//       new TopicBool("/M2/mode/get", "START", [
//         { value: "START", text: "Работает" },
//         { value: "STOP", text: "Ожидает" },
//         { value: "AUTO", text: "Авто" },
//         { value: "ERROR", text: "Ошибка" },
//       ])
//     ),
//     new Button(
//       15,
//       420,
//       280,
//       250,
//       "#14FF00",
//       "ПУСК",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "START")
//     ),
//     new Button(
//       365,
//       420,
//       280,
//       250,
//       "#FF4747",
//       "СТОП",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "STOP")
//     ),
//     new Button(
//       730,
//       420,
//       280,
//       250,
//       "#FFF96C",
//       "АВТО",
//       new TopicVal("/broadcast/mode/get", ""),
//       new TopicVal("/broadcast/mode/set", "AUTO")
//     ),
//     new Rectangle(15, 160, 994, 230, "#fff"),
//   ]),
