<script lang="ts">
  import type Input from "../model/elements/Input";
    export let model: Input

</script>

<form >
    <label for={model.state?.topic}>{model.label}:</label>
    <input 
    id={model.state?.topic}
    autocomplete="off"
    value={model.state?.val} 
   
    />
</form>


<style>
    form {
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