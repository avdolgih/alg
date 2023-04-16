<script lang="ts">
    import type HMI from "../model/HMI";
    import Elements from "./Elements.svelte";
    import { browser } from "$app/environment"; 
    import MQTTClient from "../mqtt/MQTTClient";

    export let hmi: HMI
    let client
    if (browser) {
         client = new MQTTClient("test.mosquitto.org", 8081)
        function catcheMessage(topic: string, message: string) {
            message = message.toString()  
            // Логика обновления HMI
        }
    client.subscribe("/mode/get", catcheMessage)
    }
</script>

{#each hmi.elements as element}
    <Elements {element}/>
{/each}