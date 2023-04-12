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
  deatails: TData[];
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
    deatails: [],
  },
  {
    name: "Насос2",
    status: EStatus.WAITNG,
    MQTTTopic: "Pump2",
    actions: [],
    deatails: [],
  },
  {
    name: "Насос3",
    status: EStatus.AUTO,
    MQTTTopic: "Pump3",
    actions: [],
    deatails: [],
  },
  {
    name: "Насос4",
    status: EStatus.AUTO,
    MQTTTopic: "Pump4",
    actions: [],
    deatails: [],
  },
];

// Заготовка отправки сообщения на сервер
let sendMSG = (e: Event, topic: string, data: unknown) => {
  console.log(topic, data);
  return;
};
