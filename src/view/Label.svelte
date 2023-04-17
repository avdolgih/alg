<script lang="ts">
    import type Label from "../model/elements/Label";
    export let model: Label
</script>

<span style="font-size: {model.fontsize}px; height: 100%;">{model.value}</span>

<style>
    span {
        font-family: Roboto, Geneva, Tahoma, sans-serif;
        width: 100%;
    }
</style>