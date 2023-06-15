<script lang="ts">
    export let x: number;
    export let y: number;
    export let w: number;
    export let h: number;
    export let on: string;
    export let off: string;
</script>

<img style="left:{x}px;top:{y}px;width:{w}px;height:{h}px" src="{off}" alt=""/>

<style>
    img {
        position: absolute;
    }
</style>