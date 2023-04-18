<script lang="ts">
  import HMIView from "../view/HMI.svelte";
  import data from "../data/data";

  // Выбор шкафа
  import { name } from "../settings";

  let arrayData: string[] = [];
  Object.keys(data).forEach((d) => {
    arrayData.push(d);
  });
</script>

<div style="display: flex; flex-direction:column; gap: 768px;">
  {#each arrayData as name}
    <div style="display: flex; flex-direction:column">
      <div style="position:relative;">
        <HMIView hmi={data[name]} />
      </div>
      <hr color="black" style="width: 100%; position:relative;" />
    </div>
  {/each}
</div>

<style>
</style>
