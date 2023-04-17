<script lang="ts">
  import type Input from "../model/elements/Input";
  import MQTT from "../mqtt/MQTTClient";

  export let model: Input;

  MQTT.subscribe(model.state.topic, () => {});
</script>

<input id={model.state?.topic} autocomplete="off" value={model.state?.val} />

<style>
  input {
    width: 50%;
    padding: 5px;
    border-radius: 5px;
  }
</style>
