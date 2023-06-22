<script lang="ts">
    import MQTT from "../mqtt/MQTTClient";

    let topic: string = "/nku/threshold1/alarm";
    let value: string = "true";

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