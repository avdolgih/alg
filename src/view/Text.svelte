<script lang="ts">
    import type Text from "../model/Text";
    export let model: Text
</script>

<p style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.color}; font-size: {model.fontsize};">{model.value}</p>