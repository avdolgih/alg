<script>
    import SHA_GSM from "../view/systems/SHA_GSM.svelte";
    import SHA_RSM from "../view/systems/SHA_RSM.svelte";
    import SHA_YO from "../view/systems/SHA_YO.svelte";
    import SHA_TU from "../view/systems/SHA_TU.svelte";
    import Button from "../view/element/Button.svelte";
    import MQTT from "../mqtt/MQTT";
    import Test from "../view/Test.svelte";


    MQTT.subscribe("/nku/", (val)=> console.log(val));
    const action = () => {
        MQTT.publish("/nku/sensor1", "34.21");
    };
</script>

<Test />

<Button x={1030} y={0} w={300} h={80} text="Hello" {action} />

<div class="system">
    <SHA_GSM />
</div>

<div class="system">
    <SHA_RSM />
</div>

<div class="system">
    <SHA_YO />
</div>

<div class="system">
    <SHA_TU />
</div>

<style>
    .system {
        position: relative;
        width: 1024px;
        height: 600px;
        box-sizing: border-box;
        border: 1px solid #000;
        margin-bottom: 20px;
    }
</style>
