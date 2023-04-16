import HMI from "../model/HMI";
import Button from "../model/elements/Button";
import Label from "../model/elements/Label";
import TopicVal from "../model/mqtt/TopicVal";

export default {
    AV1: new HMI([]),
    P6: new HMI([]),
    P7: new HMI([]),
    V5: new HMI([
        new Label(400, 10, 600, 100, "#000", 60, 'ША В5'),
        new Button(520,230,100,90,'#169873','ПУСК', new TopicVal('/mode/get', 'START'), new TopicVal('/mode/set', 'START')),
    ]),
}