<script lang="ts">
    import { writable, get } from "svelte/store";
    import { onMount } from "svelte";
    import Mqtt from "../../net/Mqtt";

    export let topic: string;
    export let name: string;

    const val = writable(0);
    const hand = writable(false);
    const handVal = writable(0);

    onMount(() => {
        Mqtt.subscribe(topic + "/val", (v) => {
            val.set(parseFloat(v));
        });

        Mqtt.subscribe(topic + "/hand", (v) => {
            if (v === "true") hand.set(true);
            else if (v === "false") hand.set(false);
            else throw new Error("Ожидается значение boolean");
        });

        Mqtt.subscribe(topic + "/handVal", (v) => {
            handVal.set(parseFloat(v));
        });
    });

    function updateHandVal() {
        const val = get(handVal).toString();
        console.log(val);
        Mqtt.publish(topic + "/handVal", val);
    }

    function updateHand() {
        const val = get(hand).toString();
        console.log(val);
        Mqtt.publish(topic + "/hand", val);
    }
</script>

<div class="root" title={topic}>
    <div class="topic">{name}</div>
    <div class="value">{$val}</div>
    <input
        class="handVal"
        type="number"
        bind:value={$handVal}
        on:change={updateHandVal}
    />

    <span>Ручной</span>
    <input type="checkbox" id="hand" bind:checked={$hand} on:change={updateHand} />
</div>

<style>
    .root {
        display: flex;
        flex-direction: row;
    }

    .topic {
        width: 200px;
    }

    .value {
        width: 100px;
    }

    .handVal {
        width: 50px;
    }
</style>
