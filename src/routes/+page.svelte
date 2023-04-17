<script lang="ts">
  import HMIView from "../view/HMI.svelte";
  import data from "../data/data";

  // Выбор шкафа
  import { name } from "../settings";

  let _data = data[name];
</script>

<HMIView hmi={_data} />
