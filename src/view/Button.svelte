<script lang="ts">
    import type Button from "../model/elements/Button";

    export let model: Button;

    // TODO: сейчас обновление UI в этом коде не работает
    // function onClick(e: Event) {
    //     e.preventDefault();

    //     model.value != model.action
    //         ? client.send(model.topicSET[0], model.action)
    //         : null;
    // }
</script>

<button>{model.text}</button>

<!-- <button
    on:click={onClick}
    style="left: {model.x}px; top: {model.y}px; width: {model.width}px; height: {model.height}px; background-color: {model.value ===
    model.action
        ? model.color
        : '#DFDFDF'}"
>
    {model.text}
</button> -->

<style>
    button {
        position: absolute;
        border-radius: 10px;
        font-size: 1.75rem;
    }
</style>
