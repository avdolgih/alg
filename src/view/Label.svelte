<script lang="ts">
    import type Label from "../model/elements/Label";
    export let model: Label
</script>

<p style="font-size: {model.fontsize}px; height: 100%;">{model.value}</p>

<style>
    p {
        font-family: Roboto, Geneva, Tahoma, sans-serif;
    }
</style>