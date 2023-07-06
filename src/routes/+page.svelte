<script>
    import SHA_GSM from "../view/systems/P277GSM.svelte";
    import SHA_RSM from "../view/systems/P277RSM.svelte";
    import SHA_YO from "../view/systems/P277YO.svelte";
    import SHA_TU from "../view/systems/P277TU.svelte";
    import HandNumber from "../view/settings/HandNumber.svelte";
</script>

<div class="system">
    <SHA_GSM />
</div>

<style>
    .system {
        background-color: white;
        position: relative;
        box-sizing: border-box;
        user-select: none;
    }
</style>