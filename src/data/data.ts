import HMI from "../model/HMI";
import Button from "../model/elements/Button";
import Label from "../model/elements/Label";
import Rectangle from "../model/elements/Rectangle";
import Switch from "../model/elements/Switch";
import Input from "../model/elements/Input";
import TopicBool from "../model/mqtt/TopicBool";
import TopicVal from "../model/mqtt/TopicVal";

export default {
  AV1: new HMI([
    new Label(380, 40, 600, 100, "", 80, "ША АВ1"),
    new Label(100, 200, 150, 0, "black", 55, "АВ1"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V5: new HMI([
    new Label(380, 40, 600, 100, "", 80, "ША В5"),
    new Label(100, 200, 150, 0, "black", 55, "В5"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V6: new HMI([
    new Label(380, 40, 600, 100, "", 80, "ША В6"),
    new Label(100, 200, 150, 0, "black", 55, "В6"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V7: new HMI([
    new Label(380, 40, 600, 100, "", 80, "ША В7"),
    new Label(100, 200, 150, 0, "black", 55, "В7"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V8: new HMI([
    new Label(380, 40, 600, 100, "", 80, "ША В8"),
    new Label(100, 200, 150, 0, "black", 55, "В8"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V9: new HMI([
    new Label(380, 40, 600, 100, "", 80, "ША В9"),
    new Label(100, 200, 150, 0, "black", 55, "В9"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V10: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В10"),
    new Label(100, 200, 150, 0, "black", 55, "В10"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V11: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В11"),
    new Label(100, 200, 150, 0, "black", 55, "В11"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V12: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В12"),
    new Label(100, 200, 150, 0, "black", 55, "В12"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V13: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В13"),
    new Label(100, 200, 150, 0, "black", 55, "В13"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V14: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В14"),
    new Label(100, 200, 150, 0, "black", 55, "В14"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V18V18R: new HMI([
    new Label(270, 40, 600, 100, "", 80, "ША В18В18Р"),
    new Label(100, 200, 150, 0, "black", 55, "В18"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(100, 290, 150, 0, "black", 55, "В18Р"),
    new Switch(400, 290, 200, 0, "black", 55, new TopicBool("/vent2", "Работает", "Ожидает")),
    new Button(15, 460, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 460, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 460, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 230, "#fff"),
  ]),
  V19: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В19"),
    new Label(100, 200, 150, 0, "black", 55, "В19"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V20: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В20"),
    new Label(100, 200, 150, 0, "black", 55, "В20"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V21: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В21"),
    new Label(100, 200, 150, 0, "black", 55, "В21"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V22: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В22"),
    new Label(100, 200, 150, 0, "black", 55, "В22"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V23: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В23"),
    new Label(50, 200, 150, 0, "black", 55, "В23"),
    new Switch(160, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(460, 200, 150, 0, "black", 55, "Температура"),
    new Input(800, 200, 100, 60, "black", "white", 55, "100", true, new TopicVal("/heater/get", "100"), new TopicVal("", "100")),
    new Label(925, 200, 150, 0, "black", 55, "C°"),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V28: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША В28"),
    new Label(100, 200, 150, 0, "black", 55, "В28"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  V32V32R: new HMI([
    new Label(270, 40, 600, 100, "", 80, "ША В32В32Р"),
    new Label(100, 200, 150, 0, "black", 55, "В32"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(100, 290, 150, 0, "black", 55, "В32Р"),
    new Switch(400, 290, 200, 0, "black", 55, new TopicBool("/vent2", "Работает", "Ожидает")),
    new Button(15, 460, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 460, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 460, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 230, "#fff"),
  ]),
  V37V37R: new HMI([
    new Label(270, 40, 600, 100, "", 80, "ША В37В3Р"),
    new Label(100, 200, 150, 0, "black", 55, "В37"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(100, 290, 150, 0, "black", 55, "В37Р"),
    new Switch(400, 290, 200, 0, "black", 55, new TopicBool("/vent2", "Работает", "Ожидает")),
    new Button(15, 460, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 460, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 460, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 230, "#fff"),
  ]),
  V38V38R: new HMI([
    new Label(270, 40, 600, 100, "", 80, "ША В38В38Р"),
    new Label(100, 200, 150, 0, "black", 55, "В38"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(100, 290, 150, 0, "black", 55, "В38Р"),
    new Switch(400, 290, 200, 0, "black", 55, new TopicBool("/vent2", "Работает", "Ожидает")),
    new Button(15, 460, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 460, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 460, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 230, "#fff"),
  ]),
  VD1: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША ВД1"),
    new Label(100, 200, 150, 0, "black", 55, "ВД1"),
    new Switch(220, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(550, 200, 150, 0, "black", 55, "ПД1"),
    new Switch(670, 200, 200, 0, "black", 55, new TopicBool("/PD1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  VD2: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША ВД2"),
    new Label(100, 200, 150, 0, "black", 55, "ВД2"),
    new Switch(220, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(550, 200, 150, 0, "black", 55, "ПД2"),
    new Switch(670, 200, 200, 0, "black", 55, new TopicBool("/PD2", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  P6: new HMI([
    new Label(380, 40, 600, 100, "", 80, "ША П6"),
    new Label(100, 200, 150, 0, "black", 55, "П6"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  P7: new HMI([
    new Label(380, 40, 600, 100, "", 80, "ША П7"),
    new Label(100, 200, 150, 0, "black", 55, "П7"),
    new Switch(400, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  P10P10R: new HMI([
    new Label(270, 40, 600, 100, "", 80, "ША П10П10Р"),
    new Label(60, 200, 150, 0, "black", 50, "П10"),
    new Switch(220, 200, 200, 0, "black", 50, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(60, 380, 150, 0, "black", 50, "Заслонка"),
    new Switch(320, 380, 200, 0, "black", 50, new TopicBool("/damper/get", "Работает", "Ожидает")),
    new Label(60, 290, 150, 0, "black", 50, "П10Р"),
    new Switch(220, 290, 200, 0, "black", 50, new TopicBool("/vent2", "Работает", "Ожидает")),
    new Label(540, 200, 250, 0, "black", 50, "t притока"),
    new Input(780, 190, 95, 65, "black", "white", 50, "100", true, new TopicVal("/heater/get", "100"), new TopicVal("", "")),
    new Label(900, 200, 150, 0, "black", 50, "С°"),
    new Label(540, 290, 300, 0, "black", 50, "Уставка t"),
    new Input(780, 285, 95, 65, "black", "white", 50, "100", false, new TopicVal("/heater/mode/get", "100"), new TopicVal("/heater/mode/set", "")),
    new Label(900, 290, 150, 0, "black", 50, "С°"),
    new Button(15, 500, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 500, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 500, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 320, "#fff"),
  ]),
  P11P11R: new HMI([
    new Label(270, 40, 600, 100, "", 80, "ША П11П11Р"),
    new Label(60, 200, 150, 0, "black", 50, "П11"),
    new Switch(220, 200, 200, 0, "black", 50, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(60, 380, 150, 0, "black", 50, "Заслонка"),
    new Switch(320, 380, 200, 0, "black", 50, new TopicBool("/damper/get", "Работает", "Ожидает")),
    new Label(60, 290, 150, 0, "black", 50, "П11Р"),
    new Switch(220, 290, 200, 0, "black", 50, new TopicBool("/vent2", "Работает", "Ожидает")),
    new Label(540, 200, 250, 0, "black", 50, "t притока"),
    new Input(780, 190, 95, 65, "black", "white", 50, "100", true, new TopicVal("/heater/get", "100"), new TopicVal("", "")),
    new Label(900, 200, 150, 0, "black", 50, "С°"),
    new Label(540, 290, 300, 0, "black", 50, "Уставка t"),
    new Input(780, 285, 95, 65, "black", "white", 50, "100", false, new TopicVal("/heater/mode/get", "100"), new TopicVal("/heater/mode/set", "")),
    new Label(900, 290, 150, 0, "black", 50, "С°"),
    new Button(15, 500, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 500, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 500, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 320, "#fff"),
  ]),
  P12P12R: new HMI([
    new Label(270, 40, 600, 100, "", 80, "ША П12П12Р"),
    new Label(60, 200, 150, 0, "black", 50, "П12"),
    new Switch(220, 200, 200, 0, "black", 50, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(60, 380, 150, 0, "black", 50, "Заслонка"),
    new Switch(320, 380, 200, 0, "black", 50, new TopicBool("/damper/get", "Работает", "Ожидает")),
    new Label(60, 290, 150, 0, "black", 50, "П12Р"),
    new Switch(220, 290, 200, 0, "black", 50, new TopicBool("/vent2", "Работает", "Ожидает")),
    new Label(540, 200, 250, 0, "black", 50, "t притока"),
    new Input(780, 190, 95, 65, "black", "white", 50, "100", true, new TopicVal("/heater/get", "100"), new TopicVal("", "")),
    new Label(900, 200, 150, 0, "black", 50, "С°"),
    new Label(540, 290, 300, 0, "black", 50, "Уставка t"),
    new Input(780, 285, 95, 65, "black", "white", 50, "100", false, new TopicVal("/heater/mode/get", "100"), new TopicVal("/heater/mode/set", "")),
    new Label(900, 290, 150, 0, "black", 50, "С°"),
    new Button(15, 500, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 500, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 500, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 320, "#fff"),
  ]),
  P13P13R: new HMI([
    new Label(270, 40, 600, 100, "", 80, "ША П13П13Р"),
    new Label(60, 200, 150, 0, "black", 50, "П13"),
    new Switch(220, 200, 200, 0, "black", 50, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(60, 380, 150, 0, "black", 50, "Заслонка"),
    new Switch(320, 380, 200, 0, "black", 50, new TopicBool("/damper/get", "Работает", "Ожидает")),
    new Label(60, 290, 150, 0, "black", 50, "П13Р"),
    new Switch(220, 290, 200, 0, "black", 50, new TopicBool("/vent2", "Работает", "Ожидает")),
    new Label(540, 200, 250, 0, "black", 50, "t притока"),
    new Input(780, 190, 95, 65, "black", "white", 50, "100", true, new TopicVal("/heater/get", "100"), new TopicVal("", "")),
    new Label(900, 200, 150, 0, "black", 50, "С°"),
    new Label(540, 290, 300, 0, "black", 50, "Уставка t"),
    new Input(780, 285, 95, 65, "black", "white", 50, "100", false, new TopicVal("/heater/mode/get", "100"), new TopicVal("/heater/mode/set", "")),
    new Label(900, 290, 150, 0, "black", 50, "С°"),
    new Button(15, 500, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 500, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 500, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 320, "#fff"),
  ]),
  PD1: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША ПД1"),
    new Label(100, 200, 150, 0, "black", 55, "ПД1"),
    new Switch(220, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(550, 200, 150, 0, "black", 55, "ВД1"),
    new Switch(670, 200, 200, 0, "black", 55, new TopicBool("/VD1", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
  PD2: new HMI([
    new Label(370, 40, 600, 100, "", 80, "ША ПД2"),
    new Label(100, 200, 150, 0, "black", 55, "ПД2"),
    new Switch(220, 200, 200, 0, "black", 55, new TopicBool("/vent1", "Работает", "Ожидает")),
    new Label(550, 200, 150, 0, "black", 55, "ВД2"),
    new Switch(670, 200, 200, 0, "black", 55, new TopicBool("/VD2", "Работает", "Ожидает")),
    new Button(15, 380, 280, 100, "#0FB800", "black", "ПУСК", 65, new TopicVal("/mode/get", "START"), new TopicVal("/mode/set", "START")),
    new Button(365, 380, 280, 100, "#AA0000", "black", "СТОП", 65, new TopicVal("/mode/get", "STOP"), new TopicVal("/mode/set", "STOP")),
    new Button(730, 380, 280, 100, "#D1CB29", "black", "АВТО", 65, new TopicVal("/mode/get", "AUTO"), new TopicVal("/mode/set", "AUTO")),
    new Rectangle(15, 160, 994, 150, "#fff"),
  ]),
};
