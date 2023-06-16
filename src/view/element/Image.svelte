<script lang="ts">
    import { onMount } from "svelte";
    import MQTT from "../../mqtt/MQTT";

    export let x: number;
    export let y: number;
    export let w: number;
    export let h: number;
    export let on: string;
    export let off: string;
    export let topic: string;
    let val: boolean;

    onMount(() => {
        MQTT.subscribe(topic, (v) => {
            if (v == "true") val = true;
            else val = false;
        });
    });
</script>

<img
    style="left:{x}px;top:{y}px;width:{w}px;height:{h}px"
    src={val ? on : off}
    alt=""
/>

<style>
    img {
        position: absolute;
    }
</style>
