<script lang="ts">
    import type Button from '../model/Button';
    import type MQTTClient from "../mqtt/MQTTClient";

    export let model: Button;
    export let client: MQTTClient
    
// TODO: сейчас обновление UI в этом коде не работает
    let handleClick = (e: Event) => {
        e.preventDefault()
        
        model.value != model.action ? client.sendMQTTMessage(model.topicSET[0], model.action) : null
    }
</script>

<button 
on:click={handleClick}
    style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.value === model.action ? model.color :"#DFDFDF"}">
        {model.text}
</button>


<style>
    button {
        position: absolute;
        border-radius: 10px;
        font-size: 1.75rem;
    }
</style>