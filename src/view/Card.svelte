<script lang="ts">
    import type Card from "../model/Card";
    export let model: Card
</script>

<div class="card" style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.color}"></div>

<style>
    .card {
        position: absolute;
        border-radius: 10px;
        box-shadow:  0px 0px 5px rgba(128, 128, 128, 0.301);
    }    
</style>