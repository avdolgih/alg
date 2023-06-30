import fs from "fs";
import P277GSM from "./alg/P277GSM";

const conf = fs.readFileSync("config.conf").toString();
switch (conf) {
    case "P277GSM":
        new P277GSM();
        break;
    default: throw new Error("Алгоритм " + conf + " не найден");
}