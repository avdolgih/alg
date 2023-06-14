<script>
    import ShaGsm from "../hmi/SHA_GSM.svelte";
    import ShaRsm from "../hmi/SHA_RSM.svelte";
    import ShaTu from "../hmi/SHA_TU.svelte";
    import ShaYo from "../hmi/SHA_YO.svelte";
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
