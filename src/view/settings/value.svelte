<script lang="ts">
    import { writable } from "svelte/store";
    import MQTT from "../../mqtt/MQTT";
    import { onMount } from "svelte";

    export let topic: string;
    const val = writable("");

    onMount(() => {
        MQTT.subscribe(topic, (v) => {
            val.set(v);
        });
    });
</script>

<div>
    <div>{topic}</div>
    <div>{$val}</div>
</div>
