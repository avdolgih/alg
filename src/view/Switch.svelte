<script lang="ts">
  import type Switch from "../model/elements/Switch";
  import MQTT from "../mqtt/MQTT";
  export let model: Switch;

  let text: string = "---";

  MQTT.subscribe(model.get.topic, (val) => {
    val === "true" ? (text = model.get.textTrue) : (text = model.get.textFalse);
  });
</script>

<span style="font-size: {model.fontsize}px; color: {model.textColor};">
  {text}
</span>

<style>
  span {
    height: fit-content;
    font-family: Roboto, Geneva, Tahoma, sans-serif;
  }
</style>
