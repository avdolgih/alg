<script>
    import SHA_GSM from "../view/systems/SHA_GSM.svelte";
    import SHA_RSM from "../view/systems/SHA_RSM.svelte";
    import SHA_YO from "../view/systems/SHA_YO.svelte";
    import SHA_TU from "../view/systems/SHA_TU.svelte";
    import { system } from "../config.json";
    import Test from "../view/Test.svelte";
</script>

<Test />
<Test />
<div class="system">
    {#if system == "SHA_GSM"}
        <SHA_GSM />
    {:else if system == "SHA_RSM"}
        <SHA_RSM />
    {:else if system == "SHA_YO"}
        <SHA_YO />
    {:else if system == "SHA_TU"}
        <SHA_TU />
    {/if}
</div>


<style>
    .system {
        position: relative;
        width: 1024px;
        height: 600px;
        box-sizing: border-box;
        border: 1px solid #000;
        margin-bottom: 20px;
        user-select: none;
    }
</style>
