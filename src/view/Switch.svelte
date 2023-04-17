<script lang="ts">
  import type Switch from "../model/elements/Switch";
  import MQTT from "../mqtt/MQTT";
  export let model: Switch;
  MQTT.subscribe(model.state.topic, (topic, view) => {});
</script>

<span style="font-size: {model.fontsize}px; color: {model.textColor};">
  {model.state.text}
</span>

<style>
  span {
    height: fit-content;
    font-family: Roboto, Geneva, Tahoma, sans-serif;
  }
</style>
