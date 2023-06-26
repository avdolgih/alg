<script>
    import Group from "../element/Group.svelte";
    import Text from "../element/Text.svelte";
    import Output from "../group/Output.svelte";
    import Input from "../group/Input.svelte";
</script>

<Text x={0} y={0} w={1024} h={100} size={100} bold={true} text="ША-ТУ" />

<Group>
    <Text
        x={0}
        y={120}
        w={1024}
        h={60}
        size={40}
        bold={true}
        text="Концентрация пропана ∑CH"
    />
    <Group x={10} y={200}>
        <Output x={0} y={0} text="Датчик 1" topic="/propane/sensor1" />
        <Output x={0} y={100} text="Датчик 2" topic="/propane/sensor2" />
        <Output x={0} y={200} text="Датчик 3" topic="/propane/sensor3" />
    </Group>
    <Group x={440} y={200}>
        <Input
            x={0}
            y={0}
            text="Порог 1"
            step={1}
            min={0}
            max={100}
            topic="/propane/threshold1"
        />
        <Input
            x={0}
            y={100}
            text="Порог 2"
            step={1}
            min={0}
            max={100}
            topic="/propane/threshold2"
        />
    </Group>
</Group>

<Group y={390}>
    <Text
        x={0}
        y={120}
        w={1024}
        h={60}
        size={40}
        bold={true}
        text="Концентрация метанола CH₃OH"
    />
    <Group x={10} y={200}>
        <Output x={0} y={0} text="Датчик 1" topic="/methanol/sensor1" />
        <Output x={0} y={100} text="Датчик 2" topic="/methanol/sensor2" />
        <Output x={0} y={200} text="Датчик 3" topic="/methanol/sensor3" />
    </Group>
    <Group x={440} y={200}>
        <Input
            x={0}
            y={0}
            text="Порог 1"
            step={1}
            min={0}
            max={100}
            topic="/methanol/threshold1"
        />
        <Input
            x={0}
            y={100}
            text="Порог 2"
            step={1}
            min={0}
            max={100}
            topic="/methanol/threshold2"
        />
    </Group>
</Group>

<Group y={780}>
    <Text
        x={0}
        y={120}
        w={1024}
        h={60}
        size={40}
        bold={true}
        text="Концентрация аммиака NH₃"
    />
    <Group x={10} y={200}>
        <Output x={0} y={0} text="Датчик 1" topic="/ammonia/sensor1" />
        <Output x={0} y={100} text="Датчик 2" topic="/ammonia/sensor2" />
        <Output x={0} y={200} text="Датчик 3" topic="/ammonia/sensor3" />
        <Output x={0} y={300} text="Датчик 4" topic="/ammonia/sensor4" />
    </Group>
    <Group x={440} y={300}>
        <Input
            x={0}
            y={0}
            text="Порог 1"
            step={1}
            min={0}
            max={100}
            topic="/ammonia/threshold1"
        />
        <Input
            x={0}
            y={100}
            text="Порог 2"
            step={1}
            min={0}
            max={100}
            topic="/ammonia/threshold2"
        />
    </Group>
</Group>

<Group y={1270}>
    <Text
        x={0}
        y={120}
        w={1024}
        h={60}
        size={40}
        bold={true}
        text="Концентрация кислорода O₂"
    />
    <Group x={10} y={200}>
        <Output x={0} y={0} text="Датчик 1" topic="/oxygen/sensor1" />
        <Output x={0} y={100} text="Датчик 2" topic="/oxygen/sensor2" />
        <Output x={0} y={200} text="Датчик 3" topic="/oxygen/sensor3" />
    </Group>
    <Group x={440} y={200}>
        <Input
            x={0}
            y={0}
            text="Порог 1"
            step={1}
            min={0}
            max={100}
            topic="/oxygen/threshold1"
        />
        <Input
            x={0}
            y={100}
            text="Порог 2"
            step={1}
            min={0}
            max={100}
            topic="/oxygen/threshold2"
        />
    </Group>
</Group>

<Group y={1660}>
    <Text
        x={0}
        y={120}
        w={1024}
        h={60}
        size={40}
        bold={true}
        text="Концентрация водорода H₂"
    />
    <Group x={10} y={200}>
        <Output x={0} y={0} text="Датчик 1" topic="/hydrogen/sensor1" />
    </Group>
    <Group x={440} y={200}>
        <Input
            x={0}
            y={0}
            text="Порог 1"
            step={1}
            min={0}
            max={100}
            topic="/hydrogen/threshold1"
        />
        <Input
            x={0}
            y={100}
            text="Порог 2"
            step={1}
            min={0}
            max={100}
            topic="/hydrogen/threshold2"
        />
    </Group>
</Group>
