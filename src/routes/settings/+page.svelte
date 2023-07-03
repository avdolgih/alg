<script lang="ts">
    import { onMount } from "svelte";
    import HandNumber from "../../view/settings/HandNumber.svelte";
    import Mqtt from "../../net/Mqtt";
    import { writable } from "svelte/store";

    let views = writable([]);
    onMount(() => {
        Mqtt.subscribe("view/list", (v) => {
            views.set(JSON.parse(v));
        });
    });
</script>

<select>
    {#each $views as view}
        <option>{view}</option>
    {/each}
</select>
