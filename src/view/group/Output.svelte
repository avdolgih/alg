<script lang="ts">
    import Group from "../element/Group.svelte";
    import Text from "../element/Text.svelte";
    import Number from "../element/Number.svelte";
    import { Align } from "../util/Align";
    
    export let x: number;
    export let y: number;
    export let text: string;
    export let topic: string;
</script>

<Group {x} {y}>
    <Text x={0} y={0} w={200} h={80} align={Align.left} {text} />
    <Number x={200} y={0} w={150} h={80} size={50} digit={2} {topic} />
    <Text x={350} y={0} w={50} h={80} align={Align.left} text="%" />
</Group>