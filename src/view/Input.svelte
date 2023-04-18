<script lang="ts">
  import type Input from "../model/elements/Input";
  import MQTT from "../mqtt/MQTT";

  export let model: Input;

  let value: string = "---";

  MQTT.subscribe(model.get.topic, (val) => {
    value = val;
  });

  let changeHandler = (e: Event) => {
    const target = e.target as HTMLInputElement;
    value = target.value;
  };

  let submitHandler = (e: Event) => {
    MQTT.send(model.set.topic, value);
  };
</script>

<form on:submit={submitHandler}>
  <input autocomplete="off" {value} on:change={changeHandler} disabled={model.disabled} style="font-size: {model.fontsize}px;" />
</form>

<style>
  input {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    z-index: 1;
  }
</style>
