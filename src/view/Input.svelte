<script lang="ts">
  import type Input from "../model/elements/Input";
  import MQTT from "../mqtt/MQTT";

  export let model: Input;

  MQTT.subscribe(model.get.topic, (topic, val) => {
    if (topic != model.get.topic) return;
  });
</script>

<input autocomplete="off" value={model.get.val} />

<style>
  input {
    width: 50%;
    padding: 5px;
    border-radius: 5px;
  }
</style>
