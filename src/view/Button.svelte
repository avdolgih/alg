<script lang="ts">
    import type Button from '../model/Button';

    export let model: Button;

    let click = () => model.sendMQTTMessage()
</script>

<button 
    on:click={click} 
    style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.color}">
        {model.text}
</button>


<style>
    button {
        position: absolute;
        border-radius: 10px;
    }
</style>