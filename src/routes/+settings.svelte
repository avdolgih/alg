<script lang="ts">
    import Value from "../view/settings/Value.svelte";

    const items = [
        "/nku/module1/ai1",
        "/nku/module1/ai2",
        "/nku/module1/ai3",
        "/nku/module1/ai4",
        "/nku/module1/ai5",
        "/nku/module1/ai6",
        "/nku/module1/ai7",
        "/nku/module1/ai8",
        "/nku/module1/ai9",
        "/nku/module1/ai10",
        "/nku/module1/ai11",
        "/nku/module1/ai12",
        "/nku/module1/ai13",
        "/nku/module1/ai14",
        "/nku/module1/ai15",
        "/nku/module1/ai16",
        "/nku/module1/di1",
        "/nku/module1/di2",
        "/nku/module1/di3",
        "/nku/module1/di4",
        "/nku/module1/di5",
        "/nku/module1/di6",
        "/nku/module1/di7",
        "/nku/module1/di8"
    ];
</script>

{#each items as item}
    <Value topic={item} />
{/each}
