<script lang="ts">
    import Group from "../element/Group.svelte";
    import Text from "../element/Text.svelte";
    import Number from "../element/Number.svelte";
    import { Align } from "../util/Align";
    import Button from "../element/Button.svelte";
    import Image from "../element/Image.svelte";
    import { onMount } from "svelte";
    import Mqtt from "../../net/Mqtt";

    export let x: number;
    export let y: number;
    export let text: string;
    
    export let step: number;
    export let min: number;
    export let max: number;
    export let topicSetpoint: string;
    export let topicAlarm: string;

    let val = 0;

    onMount(() => {
        Mqtt.subscribe(topicSetpoint, (v) => {
            val = parseFloat(v);
        });
    });

    const plus = () => {
        const v = val + step;
        if (v > max) return;
        Mqtt.publish(topicSetpoint, v.toString());
    };

    const minus = () => {
        const v = val - step;
        if (v < min) return;
        Mqtt.publish(topicSetpoint, v.toString());
    };
</script>

<Group {x} {y}>
    <Text x={0} y={0} w={160} h={80} align={Align.left} {text} />
    <Image
        x={170}
        y={10}
        w={60}
        h={60}
        on="circle-red.svg"
        off="circle-gray.svg"
        topic={topicAlarm}
    />
    <Number x={240} y={0} w={100} h={80} size={50} topic={topicSetpoint} />
    <Text x={340} y={0} w={40} h={80} align={Align.left} text="%" />
    <Button x={390} y={0} w={80} h={80} text="−" action={minus} />
    <Button x={480} y={0} w={80} h={80} text="+" action={plus} />
</Group>
