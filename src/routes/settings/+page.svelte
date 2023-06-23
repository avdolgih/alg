<script lang="ts">
    import { writable, type Writable } from "svelte/store";
    import Value from "../../view/settings/Val.svelte";
    import P277GSM from "../../view/systems/P277GSM.svelte";
    import P277RSM from "../../view/systems/P277RSM.svelte";
    import P277TU from "../../view/systems/P277TU.svelte";
    import P277YO from "../../view/systems/P277YO.svelte";

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
        "/nku/module1/di8",
    ];

    const projects = new Map([
        ["277 / ША-ГСМ", P277GSM],
        ["277 / ША-РСМ", P277RSM],
        ["277 / ША-ТУ", P277TU],
        ["277 / ША-УО", P277YO],
    ]);

    const project: Writable<any> = writable();
</script>

<div>
    {#each items as item}
        <Value topic={item} />
    {/each}
</div>

<select bind:value={$project}>
    {#each Array.from(projects.keys()) as project}
        <option>{project}</option>
    {/each}
</select>

<div class="system">
    <svelte:component this={projects.get($project)} />
</div>

<style>
    .system {
        position: relative;
        width: 1024px;
        min-height: 600px;
        box-sizing: border-box;
        border: 1px solid #000;
        margin-bottom: 20px;
        user-select: none;
    }
</style>
