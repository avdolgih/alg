<script lang="ts">
    import MQTT from "../mqtt/MQTT";

    let topic: string = "/nku/sensor1";
    let value: string = "30";

    function send() {
        MQTT.publish(topic, value);
    }
</script>

<div>
    <div>
        <span>Topic:</span>
        <input type="text" bind:value={topic} />
    </div>
    <div>
        <span>Value:</span>
        <input type="text" bind:value={value} />
    </div>

    <button on:click={send}>SEND</button>
</div>
