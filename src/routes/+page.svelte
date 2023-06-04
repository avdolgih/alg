<script lang="ts">
  import HMIView from "../view/HMI.svelte";
  import data from "../data/data";
  import MQTT from "../mqtt/MQTT";

  MQTT.send("/getState", "");
</script>

<div style="position:relative;">
  <HMIView hmi={data["P10P10R"]} />
</div>

<style>
</style>
