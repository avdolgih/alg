<script lang="ts">
    import type HMI from "../model/HMI";
    import Elements from "./Elements.svelte";

    export let hmi: HMI
</script>

{#each hmi.elements as element}
    <Elements element = {element}/>
{/each}