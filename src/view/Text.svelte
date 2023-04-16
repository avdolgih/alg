<script lang="ts">
    import type Text from "../model/Labell";
    export let model: Text
</script>

<p style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; color: {model.color}; font-size: {model.fontsize}px;">{model.value}</p>

<style>
    p {
        position: absolute;
        border-radius: 10px;
        font-family: Roboto, Geneva, Tahoma, sans-serif;
    }
</style>