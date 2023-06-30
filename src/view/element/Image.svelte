<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import Mqtt from "../../net/Mqtt";

    export let x: number;
    export let y: number;
    export let w: number;
    export let h: number;
    export let on: string;
    export let off: string;
    export let topic: string;
    const val = writable(false);

    onMount(() => {
        Mqtt.subscribe(topic, (v) => {
            if (v == "true") val.set(true);
            else val.set(false);
        });
    });
</script>

<img
    style="left:{x}px;top:{y}px;width:{w}px;height:{h}px"
    src={$val ? on : off}
    alt=""
/>

<style>
    img {
        position: absolute;
    }
</style>
