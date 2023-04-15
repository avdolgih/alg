<script lang="ts">
    import type Button from '../model/Button';
    import type MQTTClient from "../mqtt/MQTTClient";

    export let model: Button;
    export let client: MQTTClient
    
    let handleClick = (e: Event) => {
        e.preventDefault()
        model.value != "active" ? client.sendMQTTMessage(model.topic, model.text) : null
    }

    
</script>

<button 
on:click={handleClick}
    style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.value === "active" ? model.color :"gray"}">
        {model.text}
</button>


<style>
    button {
        position: absolute;
        border-radius: 10px;
        font-size: 1.75rem;
    }
</style>