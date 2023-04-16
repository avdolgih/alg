<script lang="ts">
    import type Button from "../model/elements/Button";
    import { mqttClient } from "../store";

    export let model: Button;

    function onClick(e: Event) {
        e.preventDefault();
        $mqttClient.send(model.click?.topic, model.click?.val)
    }
</script>

<button on:click={onClick} style="background-color: {model.state?.val === model.click?.val ? model.color: "grey"};">
    {model.text}
</button>

<style>
    button {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        font-size: 1.75rem;
    }
</style>
