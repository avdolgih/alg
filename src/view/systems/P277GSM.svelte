<script>
    import Group from "../element/Group.svelte";
    import Text from "../element/Text.svelte";
    import Output from "../group/Output.svelte";
    import Input from "../group/Input.svelte";
</script>

<Text x={0} y={0} w={1024} h={100} size={100} bold={true} text="ША-ГСМ" />
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
    <Output x={0} y={0} text="Датчик 1" topic="/sensor1" />
    <Output x={0} y={100} text="Датчик 2" topic="/sensor2" />
</Group>
<Group x={440} y={200}>
    <Input
        x={0}
        y={0}
        text="Порог 1"
        step={1}
        min={0}
        max={100}
        topicSetpoint="/threshold1"
        topicAlarm="/alarm1"
    />
    <Input
        x={0}
        y={100}
        text="Порог 2"
        step={1}
        min={0}
        max={100}
        topicSetpoint="/threshold2"
        topicAlarm="/alarm2"
    />
</Group>
