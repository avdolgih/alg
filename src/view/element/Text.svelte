<script lang="ts">
    import { Align } from "../util/Align";
    
    export let x: number = 0;
    export let y: number = 0;
    export let w: number = 200;
    export let h: number = 30;
    export let text: string = "";
    export let size: number = 40;
    export let align: Align = Align.center;
    export let bold: boolean = false;
</script>

<div
    style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;font-size:{size}px;
    {bold ? 'font-weight:bold' : ''};justify-content:{align}"
>
    {text}
</div>

<style>
    div {
        display: flex;
        align-items: center;
        position: absolute;
        overflow: hidden;
    }
</style>