<script lang="ts">
    import Group from "../element/Group.svelte";
    import Text from "../element/Text.svelte";
    import Number from "../element/Number.svelte";
    import { Align } from "../util/Align";
    import Button from "../element/Button.svelte";
    import Image from "../element/Image.svelte";

    export let x: number;
    export let y: number;
    export let text: string;
    export let topic: string = "";

    const plus = () => {
        console.log("plus");
    };
    const minus = () => {
        console.log("minus");
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
        {topic}
    />
    <Number x={240} y={0} w={100} h={80} size={50} {topic} />
    <Text x={340} y={0} w={40} h={80} align={Align.left} text="%" />
    <Button x={390} y={0} w={80} h={80} text="−" action={minus} />
    <Button x={480} y={0} w={80} h={80} text="+" action={plus} />
</Group>
