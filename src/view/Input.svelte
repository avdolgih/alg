<!-- TODO: Разбить на range input и обычный -->
<script lang="ts">
    import type Input from "../model/Input";
    import type MQTTClient from "../mqtt/MQTTClientTClientt

    
    export let model: Input
    export let client: MQTTClient

    let changeHandler = (e: Event) => {
        const target = e.target as HTMLInputElement;
        e.preventDefault()
        model.setValue(target.value)
    }

    let sendHandler = (e: Event) => {
        client.send(model.topic, model.value)
    }
</script>

<form on:submit={sendHandler} style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.color}">
    <label for={model.topic}>{model.label}:</label>
    <input 
    id={model.topic}
    autocomplete="off"
    value={model.value} 
    on:change={changeHandler} 
    />
</form>


<style>
    form {
        position: absolute;
        padding: 15px 30px 15px 30px ;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.295);
    }

    input {
        width: 50%;
        padding: 5px;
        border-radius: 5px;
    }
</style>