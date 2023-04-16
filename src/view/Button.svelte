<script lang="ts">
    import type Button from "../model/elements/Button";

    export let model: Button;

    function onClick(e: Event) {
        e.preventDefault();
        console.log("HELLO");
    }
</script>

<button on:click={onClick} style="background-color: {model.color};">
    {model.text}
</button>

<style>
    button {
        height: 100%;
        border-radius: 10px;
        font-size: 1.75rem;
    }
</style>
