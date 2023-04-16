<script lang="ts">
    import type Rectangle from "../model/elements/Rectangle";
    export let model: Rectangle
    console.log(model);
    
</script>

<div class="card" style="height: 100%;"></div>

<style>
    .card {
        border-radius: 10px;
        border: solid 1px rgba(128, 128, 128, 0.4);
        box-shadow:  0px 0px 10px rgba(128, 128, 128, 0.03);
        z-index: -1
    }    
</style>