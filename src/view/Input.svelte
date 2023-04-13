<!-- TODO: Разбить на range input и обычный -->
<script lang="ts">
    import type Input from "../model/Input";
    
    export let model: Input

    let changeHandler = (e: Event) => {
        const target = e.target as HTMLInputElement;
        e.preventDefault()
        model.setValue(target.value)
    }

    let sendHandler = (e: Event) => {
        e.preventDefault()
        model.sendMQTTMessage()
    }
</script>

<input 
    value={model.value} 
    on:change={changeHandler} 
    on:submit={sendHandler}
    style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.color}"/>

<style>
    input {
        padding: 15px 30px 15px 30px ;
        border-radius: 10px;
    }
</style>