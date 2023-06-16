<script lang="ts">
    import { onMount } from "svelte/types/runtime/internal/lifecycle";
    import { Align } from "../util/Align";
    import MQTT from "../../mqtt/MQTT";

    export let x: number = 0;
    export let y: number = 0;
    export let w: number = 80;
    export let h: number = 30;
    export let topic: string;
    export let size: number = 40;
    export let align: Align = Align.center;

    let val: number = NaN;

    onMount(() => {
        MQTT.subscribe(topic, (v)=> {
            val = parseFloat(v);
        });
	});
</script>

<div
    style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;justify-content:{align};font-size:{size}px"
>
    {val}
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
