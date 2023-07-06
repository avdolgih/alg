<script lang="ts">
    import { onMount } from "svelte";
    import Mqtt from "../../net/Mqtt";
    import { writable, type Writable } from "svelte/store";
    import HandBool from "../../view/settings/HandBool.svelte";
    import HandNumber from "../../view/settings/HandNumber.svelte";

    type IO = {
        name: string;
        topic: string;
        type: string;
    };

    let views = writable<string[]>([]);
    let vals = writable<IO[]>([]);
    let selected: string;

    onMount(() => {
        Mqtt.subscribe("/views/list", (v) => {
            views.set(JSON.parse(v));
        });
        Mqtt.subscribe("/IO/list", (v) => {
            console.log(v);
            vals.set(JSON.parse(v));
        });
    });

    function onChange() {
        Mqtt.publish("/view/selected", selected);
    }
</script>

<select bind:value={selected} on:change={onChange}>
    {#each $views as view}
        <option>{view}</option>
    {/each}
</select>

{#each $vals as val}
    {#if val.type === "boolean"}
        <HandBool name={val.name} topic={val.topic} />
    {:else if val.type === "number"}
        <HandNumber name={val.name} topic={val.topic} />
    {/if}
{/each}