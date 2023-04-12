<script lang="ts">
  // Вынести в отдельный файл
// Добавить получение данных с сервера

// Описать возможные действия
enum EActions {
  START = "START",
  STOP = "STOP",
  AUTO = "AUTO",
  MANUAL = "MANUAL",
}

// Описать возможные статусы оборудования
enum EStatus {
  AUTO = "AUTO",
  MANUAL = "MANUAL",
  WAITNG = "WAITING",
  ERROR = "ERROR",
}

type TAction = {
  name: EActions;
  MQTTSubtupic: string;
  validation: EStatus[]; // Проверка действия. Можно ли отразить его при текущем состоянии устройства.
};

// Описание данных устройства
type TData = {
  name: string;
  value: string;
};

// Устройство
type TDevice = {
  name: string;
  status: EStatus;
  MQTTTopic: string;
  actions: TAction[];
  data: TData[];
};

// Общая информация о системе
let info = {
  name: "Название щита",
};

// Список устройств. Сейчас хардкод, далее необходимо получить данные с сервера
let devices: TDevice[] = [
  {
    name: "Насос1",
    status: EStatus.AUTO,
    MQTTTopic: "Pump1",
    actions: [
      { name: EActions.AUTO, MQTTSubtupic: "RUN_AUTO", validation: [] },
      { name: EActions.STOP, MQTTSubtupic: "STOP", validation: [] },
    ],
    data: [],
  },
  {
    name: "Насос2",
    status: EStatus.WAITNG,
    MQTTTopic: "Pump2",
    actions: [],
    data: [],
  },
  {
    name: "Насос3",
    status: EStatus.AUTO,
    MQTTTopic: "Pump3",
    actions: [],
    data: [],
  },
  {
    name: "Насос4",
    status: EStatus.AUTO,
    MQTTTopic: "Pump4",
    actions: [],
    data: [],
  },
];

// Заготовка отправки сообщения на сервер
let sendMSG = (e: Event, topic: string, data: unknown) => {
  console.log(topic, data);
  return;
};

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