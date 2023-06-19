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
        <Output x={0} y={0} text="Датчик 1" topic="/nku/propane/sensor1" />
        <Output x={0} y={100} text="Датчик 2" topic="/nku/propane/sensor2" />
        <Output x={0} y={200} text="Датчик 3" topic="/nku/propane/sensor3" />
    </Group>
    <Group x={440} y={200}>
        <Input x={0} y={0} text="Порог 1" topic="/nku/propane/threshold1" />
        <Input x={0} y={100} text="Порог 2" topic="/nku/propane/threshold2" />
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
        <Output x={0} y={0} text="Датчик 1" topic="/nku/methanol/sensor1" />
        <Output x={0} y={100} text="Датчик 2" topic="/nku/methanol/sensor2" />
        <Output x={0} y={200} text="Датчик 3" topic="/nku/methanol/sensor3" />
    </Group>
    <Group x={440} y={200}>
        <Input x={0} y={0} text="Порог 1" topic="/nku/methanol/threshold1" />
        <Input x={0} y={100} text="Порог 2" topic="/nku/methanol/threshold2" />
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
        <Output x={0} y={0} text="Датчик 1" topic="/nku/ammonia/sensor1" />
        <Output x={0} y={100} text="Датчик 2" topic="/nku/ammonia/sensor2" />
        <Output x={0} y={200} text="Датчик 3" topic="/nku/ammonia/sensor3" />
        <Output x={0} y={300} text="Датчик 4" topic="/nku/ammonia/sensor4" />
    </Group>
    <Group x={440} y={300}>
        <Input x={0} y={0} text="Порог 1" topic="/nku/ammonia/threshold1" />
        <Input x={0} y={100} text="Порог 2" topic="/nku/ammonia/threshold2" />
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
        <Output x={0} y={0} text="Датчик 1" topic="/nku/oxygen/sensor1" />
        <Output x={0} y={100} text="Датчик 2" topic="/nku/oxygen/sensor2" />
        <Output x={0} y={200} text="Датчик 3" topic="/nku/oxygen/sensor3" />
    </Group>
    <Group x={440} y={200}>
        <Input x={0} y={0} text="Порог 1" topic="/nku/oxygen/threshold1" />
        <Input x={0} y={100} text="Порог 2" topic="/nku/oxygen/threshold2" />
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
        <Output x={0} y={0} text="Датчик 1" topic="/nku/hydrogen/sensor1" />
    </Group>
    <Group x={440} y={200}>
        <Input x={0} y={0} text="Порог 1" topic="/nku/hydrogen/threshold1" />
        <Input x={0} y={100} text="Порог 2" topic="/nku/hydrogen/threshold2" />
    </Group>
</Group>