<script lang="ts">
    import { writable } from "svelte/store";
    import MQTT from "../../mqtt/MQTTClient";
    import { onMount } from "svelte";

    export let topic: string;
    const val = writable("0");

    onMount(() => {
        MQTT.subscribe(topic, (v) => {
            val.set(v);
        });
    });
</script>

<div class="root">
    <div class="topic">{topic}</div>
    <div class="value">{$val}</div>
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
</style>