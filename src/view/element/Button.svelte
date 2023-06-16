<script lang="ts">
    import { Align } from "../util/Align";
    import type IAction from "../util/IAction";

    export let text: string;
    export let x: number = 0;
    export let y: number = 0;
    export let w: number = 80;
    export let h: number = 30;
    export let align: Align = Align.center;
    export let size: number = 40;
    export let action: () => void;
</script>

<button
    on:click={action}
    style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;justify-content:{align};font-size:{size}px"
    >{text}
</button>

<style>
    button {
        display: flex;
        align-items: center;
        font-weight: bold;
        position: absolute;
        border-radius: 10px;
    }
</style>
