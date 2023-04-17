<script lang="ts">
  import type Button from "../model/elements/Button";
  export let model: Button;

  import MQTT from "../mqtt/MQTTClient";
  MQTT.subscribe(model.state.topic, () => {});
  let colorSwitch =
    model.state?.val === model.click?.val ? model.bgColor : "grey";

  function onClick(e: Event) {
    e.preventDefault();
  }
</script>

<button
  on:click={onClick}
  style="background-color: {colorSwitch};color: {model.textColor}; font-size:{model.fontsize}px;"
>
  {model.text}
</button>

<style>
  button {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
</style>
