import { readable, writable } from "svelte/store";

let mqttClient = writable();

export { mqttClient };
