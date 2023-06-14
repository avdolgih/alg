<script>
    import ShaGsm from "../view/SHA_GSM.svelte";
    import ShaRsm from "../view/SHA_RSM.svelte";
    import ShaTu from "../view/SHA_TU.svelte";
    import ShaYo from "../view/SHA_YO.svelte";
</script>

<div class="root">
    <ShaRsm />
    <ShaGsm />
    <ShaYo />
    <ShaTu />
</div>

<style>
    .root {
        width: 1024px;
        border: 1px solid #000;
    }
</style>
