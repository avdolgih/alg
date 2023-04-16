<script lang="ts">
    import type Element from "../model/elements/Element";
    import Button from "../model/elements/Button";
    import ButtonView from './Button.svelte';
    import Label from "../model/elements/Label";
    import LabelView from "./Label.svelte";

    export let model: Element;
</script>
<!-- Прописать стили -->
<div style="">
    {#if model instanceof Label}
        <LabelView {model} />
    {:else if model instanceof Button}
        <ButtonView {model} />
    {/if}
</div>
