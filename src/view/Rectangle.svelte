<script lang="ts">
  import type Rectangle from "../model/elements/Rectangle";
  export let model: Rectangle;
</script>

<div style="height: 100%; background-color: {model.bgColor};" />

<style>
  div {
    position: absolute;
    z-index: -1;
    border-radius: 10px;
    border: solid 1px #80808066;
    box-shadow: 0px 0px 10px #8080803d;
    height: 100%;
    width: 100%;
  }
</style>
