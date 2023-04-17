<script lang="ts">
  import HMIView from "../view/HMI.svelte";
  import data from "../data/data";

  // Выбор шкафа
  import { name } from "../settings";
    import MQTT from "../mqtt/MQTT";

  let _data = data[name];


  MQTT.subscribe('/mode/set', (val: string) => {
    console.log(val);
  });
</script>

<HMIView hmi={_data} />
