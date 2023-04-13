<script lang="ts">
    import Button from "../view/Button.svelte";
    import Parameter from "../view/Parameter.svelte";
    import { _parameters } from "./+page";
    import { elements } from "./store";

    $: _parameters
    $: elements
</script>


<div class="index">

    {#if _parameters}
        {#each _parameters as element}
            <Parameter model={element}></Parameter>
        {/each}
    {/if}  
</div>





<style>

</style>