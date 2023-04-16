<script lang="ts">
    import HMI from "../model/HMI";

    import Elements from "../view/Elements.svelte";
    import settings from "../serverMock/SHA_AV1.json"

    // const HMIString = fs.readFileSync("src/serverMock/SHA_AV1.json").toString()
    const hmi: HMI = HMI.parseJSON(settings);
  


    // console.log(hmi);
    

    // if (browser) {
    //     let client = MQTTClient.getInstanse("test.mosquitto.org", 8081, "", "");

    //     // TODO: Для корректной работы экспорта клиента требуется отправить его в стор. Надо подумать как исправить.
    //     MQTTClientStore.set(client);

    //     // Подписываемся на топики
    //     hmi.elements.map((element) => {
    //         if (element.hasOwnProperty("topicGET")) {
    //             console.log(element.topicGET);
    //             client.subscribeMQTTTopic(element.topicGET);
    //         }
    //     });

    //     // Функция обновления данных по топику
    //     let updateState = (topic: string, value: string) => {
    //         // Определяем UI для обновления
    //         let newState = hmi.elements.map((element) => {
    //             if (element?.topicGET?.includes(topic)) {
    //                 element.value = value.toString();
    //             }
    //             return element;
    //         });
    //         hmi = new HMI(newState);
    //     };

    //     // Подписываемся на приходящие сообщения
    //     client.reciveMQTTMssage(updateState);
    // }
</script>

<Elements elements={hmi.elements} />
