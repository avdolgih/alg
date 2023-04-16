<script lang="ts">
    
    import type Element from "../model/elements/Element";

    import Button from "../model/elements/Button";
    import Input from "../model/elements/Input";
    import Label from "../model/elements/Label";
    import Rectangle from "../model/elements/Rectangle";

    import ButtonView from "./Button.svelte"
    import RectangleView from "./Rectangle.svelte"
    import InputView from "./Input.svelte"
    import LabelView from "./Label.svelte"
    import SwitchView from "./Switch.svelte"
    import Switch from "../model/elements/Switch";

    
    export let element: Element;
</script>

<div style="left: {element.x}px; top: {element.y}px; width: {element.width}px; height: {element.height}px;">
    {#if element instanceof Button}
        <ButtonView model={element} />
    {/if}
    {#if element instanceof Rectangle}
        <RectangleView model={element} />
    {/if}
    {#if element instanceof Input}
        <InputView model={element} />
    {/if}
    {#if element instanceof Label}
        <LabelView model={element} />
    {/if} 
    {#if element instanceof Switch}
        <SwitchView model={element} />
    {/if} 
</div>

<style>
    div {position: absolute;}
</style>

