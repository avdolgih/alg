<script lang="ts">
    import type Parameter from "../model/Parameter";
    export let model: Parameter

    $: model
</script>


<p style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.color}">
    {model.text} - {model.value} {model.demension}
</p>

<style>
    p {
        position: absolute;
        border-radius: 10px;
        align-self: center;
        margin: auto;
        padding: auto;
    }
</style>