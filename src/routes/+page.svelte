<script lang="ts">
    import HMIView from "../view/HMI.svelte"
    import data from "../data/data"
    import HMI from "../model/HMI";
    import type Element from "../model/elements/Element";
    import MQTTClient from "../mqtt/MQTTClient";
    import { mqttClient } from "../store";

    // Выбор шкафа
    import { name } from "../settings";

    let client = MQTTClient.getInstanse('test.mosquitto.org', 8081)

    let _data = data[name]
    // Определим топики на подпись
    let subTopics: string[] = []
    _data.elements.map((element)=>{
        if (element.hasOwnProperty('state')) {
            subTopics.push(element.state.topic)
        }
    })

    let updateState = (topic: string, message: string) => {
        let newState: Element[] = []
        _data.elements.map((element)=>{
            if (element.hasOwnProperty("state")) {
                if (element.state.topic === topic) {
                    element.updateState(message)
                }
                newState.push(element)
            } else {newState.push(element)}
            
        })
        
        _data = new HMI(newState)
        console.log({_data, newState});
        
    }

    // Подписываемся на топики
    client.subscribe(subTopics, updateState)
    mqttClient.set(client)
</script>

<HMIView hmi={_data}/>
