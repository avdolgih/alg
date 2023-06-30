<script lang="ts">
    import { onMount } from "svelte";
    import { Align } from "../util/Align";
    import { writable, type Writable } from "svelte/store";
    import Mqtt from "../../net/Mqtt";

    export let x: number = 0;
    export let y: number = 0;
    export let w: number = 80;
    export let h: number = 30;
    export let topic: string;
    export let size: number = 40;
    export let align: Align = Align.center;
    export let digit: number = 0;

    const val = writable(0);

    onMount(() => {
        Mqtt.subscribe(topic, (v) => {
            val.set(parseFloat(v));
        });
    });
</script>

<div
    style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;justify-content:{align};font-size:{size}px"
>
    {$val.toFixed(digit)}
</div>

<style>
    div {
        display: flex;
        align-items: center;
        font-weight: bold;
        position: absolute;
        box-sizing: border-box;
        border: 1px solid #000;
        border-radius: 10px;
    }
</style>