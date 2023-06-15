<script>
    import SHA_GSM from "../view/systems/SHA_GSM.svelte";
    import SHA_RSM from "../view/systems/SHA_RSM.svelte";
    import SHA_YO from "../view/systems/SHA_YO.svelte";
    import SHA_TU from "../view/systems/SHA_TU.svelte";
</script>

<div class="system">
    <SHA_GSM />
</div>

<div class="system">
    <SHA_RSM />
</div>

<div class="system">
    <SHA_YO />
</div>

<div class="system">
    <SHA_TU />
</div>

<style>
    .system {
        position: relative;
        width: 1024px;
        height: 600px;
        box-sizing: border-box;
        border: 1px solid #000;
        margin-bottom: 20px;
    }
</style>
