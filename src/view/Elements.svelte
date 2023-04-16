<script lang="ts">
    import type Element from "../model/elements/Element";

    export let elements: Element[];
</script>

{#each elements as element}
    <!-- {#if element.constructor.name === "Button"}
        <ButtonView model={element} client={$MQTTClientStore} />
    {/if}
    {#if element.constructor.name === "Card"}
        <CardView model={element} />
    {/if}
    {#if element.constructor.name === "Input"}
        <InputView model={element} client={$MQTTClientStore} />
    {/if}
    {#if element.constructor.name === "Text"}
        <TextView model={element} client={$MQTTClientStore} />
    {/if} -->
{/each}
