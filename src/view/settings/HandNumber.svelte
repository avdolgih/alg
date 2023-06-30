<script lang="ts">
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    import Mqtt from "../../net/Mqtt";

    export let topic: string;
    const val = writable("0");
    let handVal: number = 0;

    onMount(() => {
        Mqtt.subscribe(topic, (v) => {
            val.set(v);
        });
    });

    function write() {
        Mqtt.publish(topic, handVal.toString());
    }
</script>

<div class="root">
    <div class="topic">{topic}</div>
    <div class="value">{$val}</div>
    <input type="number" bind:value={handVal} on:submit={write} />
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

    input {
        width: 50px;
    }
</style>