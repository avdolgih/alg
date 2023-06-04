<script lang="ts">
  import type Error from "../model/elements/Error";
  import MQTT from "../mqtt/MQTT";

  let errStack: string[] = [];

  export let model: Error;
  MQTT.subscribe(model.get.topic, (val) => {
    if (val === "clear") errStack = [];
    else errStack = [...errStack, val];
    console.log(errStack);
  });
</script>

<div>
  {#each errStack as err}
    <div class="error">{err}</div>
    <hr />
  {/each}
</div>

<style>
  .error {
    font-size: 40px;
    font-family: Roboto, sans-serif;
    color: #aa0000;
  }
</style>
