<script lang="ts">
  import type Label from "../model/elements/Label";
  export let model: Label;
</script>

<span style="font-size: {model.fontsize}px; font-size=50px;">{model.value}</span>

<style>
  span {
    color: black;
    height: 100%;
    font-family: Roboto, Geneva, Tahoma, sans-serif;
    width: 100%;
  }
</style>
