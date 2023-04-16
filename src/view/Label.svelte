<script lang="ts">
    import type Label from "../model/elements/Label";
    export let model: Label
</script>

<p style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; color: {model.color}; font-size: {model.fontsize}px;">{model.value}</p>

<style>
    p {
        position: absolute;
        border-radius: 10px;
        font-family: Roboto, Geneva, Tahoma, sans-serif;
    }
</style>