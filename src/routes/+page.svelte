<script lang="ts">
  import HMIView from "../view/HMI.svelte";
  import data from "../data/data";

  // Выбор шкафа
  import { name } from "../settings";
  import MQTT from "../mqtt/MQTT";

  MQTT.subscribe("/mode/set", (val: string) => {
    console.log(val);
  });

  let arrayData: string[] = [];
  Object.keys(data).forEach((d) => {
    arrayData.push(d);
  });
  console.log(arrayData);
</script>

<div style="display: flex; flex-direction:column; height: 18600px; gap: 768px;">
  {#each arrayData as name}
    <div style="display: flex; flex-direction:column">
      <div style="position:relative;">
        <HMIView hmi={data[name]} />
      </div>
      <hr color="black" style="width: 100%; position:relative;" />
    </div>
  {/each}
</div>
