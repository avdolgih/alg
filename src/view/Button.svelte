<script lang="ts">
  import type Button from "../model/elements/Button";
  import MQTT from "../mqtt/MQTT";
  export let model: Button;

  let bgColor: string;

  MQTT.subscribe(model.get.topic, (val) => {
    const activeVal = model.get.val;
    if (val === activeVal) bgColor = model.bgColor;
    else bgColor = "";
  });

  function onClick() {
    const topic = model.set.topic;
    const val = model.set.val;
    MQTT.send(topic, val);
  }
</script>

<button on:click={onClick} style="background-color: {bgColor};color: {model.textColor}; font-size:{model.fontsize}px;">
  {model.text}
</button>

<style>
  button {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 1;
  }
</style>
