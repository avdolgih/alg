<script lang="ts">
    import type Status from "../model/Status";
    export let model: Status
</script>

// TODO: внимательно посмотреть стили

<div
    style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.color}">
>
    {#if model.getStatus() === "WORKING"}
        <div class="greenC"></div>
    {/if}

    {#if model.getStatus() === "WAITNG"}
        <div class="grayC"></div>
    {/if}

    {#if model.getStatus() === "ERROR"}
        <div class="redC"></div>
    {/if}
</div>


<style>
    .greenC {
        background: green;
        border: 0.1875em solid #0F1C3F;
        border-radius: 50%;
        box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
        height: 5em;
        width: 5em;
    }
    .grayC {
        background: gray;
        border: 0.1875em solid #0F1C3F;
        border-radius: 50%;
        box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
        height: 5em;
        width: 5em;
    }
    .redC {
        background: red;
        border: 0.1875em solid #0F1C3F;
        border-radius: 50%;
        box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
        height: 5em;
        width: 5em;
    }
</style>