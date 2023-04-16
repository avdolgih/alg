<script lang="ts">
    import type HMI from "../model/HMI";
    import Element from "./Element.svelte";

    export let hmi: HMI;
</script>

{#each hmi.elements as model}
    <Element {model} />
{/each}
