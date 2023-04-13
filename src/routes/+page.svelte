<script lang="ts">
    import HMI from "../model/HMI";



// Заготовка отправки сообщения на сервер
let sendMSG = (e: Event, topic: string, data: unknown) => {
  console.log(topic, data);
  return;
};

let hmi: HMI = new HMI('mqtt://nku.su', )


</script>

<div class="index">
    <h1>{info.name}</h1>
    <div class="devices">
        {#each devices as device}
        <div class="device">
            <p class="name">{device.name}</p>
            <p class="status">{device.status}</p>
            <div class="actions">
                {#each device.actions as action}
                <!-- Добавить проверку допустимости рендера-->
                    <button on:click={(e)=>{sendMSG(e, device.MQTTTopic, action)}}>{action.name}</button>
                {/each}
                
            </div>
            <!-- Вывод информации устройства -->
        </div> 
        {/each}
    </div>
    <div class="errors">Ошибки</div>
</div>

<style>
    .index {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        margin: auto;
        font-family: "Roboto", sans-serif;
    }
    .index h1 {
        margin: auto;
    }
    .index .devices {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }

    .index .devices .device{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-around;
        background-color: white;
        gap: 5px;
        padding: 15px;
        border-radius: 5px;
        place-items: center;
        box-shadow: 0px 0px 10px rgb(107, 107, 107);
        margin-left: 15px;
        margin-right: 15px;
    }
    .index .devices .device .actions {
        display: flex;
        gap: 15px
    }
    .index .devices .device .actions button {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 15px;
    }
</style>