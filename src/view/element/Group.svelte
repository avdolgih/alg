<script lang="ts">
    export let x: number = 0;
    export let y: number = 0;
</script>

<div style="left:{x}px;top:{y}px">
    <slot />
</div>

<style>
    div {
        position: absolute;
    }
</style>