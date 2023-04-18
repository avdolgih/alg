<script lang="ts">
  import type Input from "../model/elements/Input";
  import MQTT from "../mqtt/MQTT";

  export let model: Input;

  let value: string = "---";

  MQTT.subscribe(model.get.topic, (topic, val) => {


    value = val;
  });
</script>

<input autocomplete="off" {value} style="font-size: {model.fontsize}px;" />

<style>
  input {
    height: 100%;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
  }
</style>
