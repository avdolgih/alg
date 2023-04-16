<script lang="ts">
    import type Rectangle from "../model/Rectangleangle";
    export let model: Rectangle
</script>

<div class="card" style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.color}"></div>

<style>
    .card {
        position: absolute;
        border-radius: 10px;
        border: solid 1px rgba(128, 128, 128, 0.411);
        box-shadow:  0px 0px 10px rgba(128, 128, 128, 0.301);
        z-index: -1
    }    
</style>