<script lang="ts">
    import type Button from '../model/Button';
//    import mqtt from '';
    let model: Button;

    function click() {
        //mqtt.send(model.topic, model.val);
    }
</script>

<button on:click={click}>{model.text}</button>