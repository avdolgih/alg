<script lang="ts">
    import type Switch from "../model/elements/Switch";
    export let model: Switch
</script>

<p style="font-size: {model.fontsize}px;">{model.topic.topic}</p>

<style>
    p {
        height: fit-content;
        font-family: Roboto, Geneva, Tahoma, sans-serif;
    }
</style>