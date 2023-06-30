import fs from "fs";
import os from "os";
import path from "path";

import P277GSM from "./alg/P277GSM";
import P239ITP from "./alg/P239ITP";


const filePath = path.join(os.homedir(), "alg.conf");
const conf = fs.readFileSync(filePath).toString();

switch (conf) {
    case "P277GSM":
        new P277GSM();
        break;
    case "P239ITP":
        new P239ITP();
        break;
    default: throw new Error("Алгоритм " + conf + " не найден");
}