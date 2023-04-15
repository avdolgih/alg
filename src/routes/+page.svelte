<script lang="ts">
    import HMI from "../model/HMI";
    import Input from "../model/Input";
    import Button from "../model/Button";
    import Card from "../model/Card";
    import Text from "../model/Text";

    import InputView  from "../view/InputView.svelte"
    import ButtonView from "../view/ButtonView.svelte";
    import CardView from "../view/CardView.svelte";
    import TextView from "../view/TextView.svelte";

    import MQTTClient from "../mqtt/MQTTClient";
    import { MQTTClientStore } from "./store";
    import { browser } from "$app/environment";

    import settings from "../serverMock/SHA_AV1.json"
    console.log(settings.elements);


    // TODO: РУГАЕТСЯ НА ТИПЫ

    let elements = settings.elements.map((element)=>{
        
        switch (element.type) {
            case "Text":
                return new Text(element.x, element.y, element.width, element.height, element.color, element.fontsize, element.topic, element.value)
            case "Card":
                return  new Card(element.x, element.y, element.width, element.height, element.color)
            case "Button":
                return new Button(element.x, element.y, element.width, element.height, element.color, element.text, element.topic, element.value)
            case "Input":
               return   new Input(element.x, element.y, element.width, element.height, element.color, element.label, element.value, element.topic)
            default:
                break;
        }
    })

    
    let hmi = new HMI(elements)
    console.log(hmi.constructor.name);
    

    if (browser) {
        let client = MQTTClient.getInstanse("test.mosquitto.org", 8081, "", "")
        
        // TODO: Для корректной работы экспорта клиента требуется отправить его в стор. Надо подумать как исправить.
        MQTTClientStore.set(client)

        // Подписываемся на топики
        hmi.elements.map((element)=>{element.topic && client.subscribeMQTTTopic(element.topic)})

        // Функция обновления данных по топику
        let updateState = (topic: string, value: string) => {
            
        // Определяем UI для обновления
        let newState = hmi.elements.map((element)=>{
            if (element?.topic === topic) {
                element.value = value.toString()
            }
            return element
                })
            hmi = new HMI(newState)
        }

        // Подписываемся на приходящие сообщения
        client.reciveMQTTMssage(updateState)
    }
</script>


<div class="index">

    <!-- TODO: Надо сделать динамическим, чтобы не прописывать каждый класс отдельно -->
    {#each hmi.elements as element}
        {#if element.constructor.name === "Button"}
            <ButtonView model={element} client={$MQTTClientStore}></ButtonView>
        {/if}
        {#if element.constructor.name === "Card"}
            <CardView model={element}></CardView>
        {/if}
        {#if element.constructor.name === "Input"}
            <InputView model={element} client={$MQTTClientStore}></InputView>
        {/if}
        {#if element.constructor.name === "Text"}
            <TextView model={element} client={$MQTTClientStore}></TextView>
        {/if}       
    {/each}
</div>


