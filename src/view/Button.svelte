<script lang="ts">
  import type Button from "../model/elements/Button";
  import MQTT from "../mqtt/MQTT";
  export let model: Button;

  let bgColor: string;

  MQTT.subscribe(model.state.topic, (val) => {
    const activeVal = model.state.val;
    if (val === activeVal) bgColor = model.bgColor;
    else bgColor = "";
  });

  function onClick() {
    const topic = model.click.topic;
    const val = model.click.val;
    MQTT.send(topic, val);
  }
</script>

<button
  on:click={onClick}
  style="background-color: {bgColor};color: {model.textColor}; font-size:{model.fontsize}px;"
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
