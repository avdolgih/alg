<script>
    import Group from "../element/Group.svelte";
    import Text from "../element/Text.svelte";
    import Output from "../group/Output.svelte";
    import Input from "../group/Input.svelte";
</script>

<Text x={0} y={0} w={1024} h={100} size={100} bold={true} text="ША-УО" />
<Text x={0} y={120} w={1024} h={60} size={40} bold={true} text="Концентрация пропана ∑CH" />
<Group x={10} y={200}>
    <Output x={0} y={0} text="Датчик 1" />
    <Output x={0} y={100} text="Датчик 2" />
</Group>
<Group x={440} y={200}>
    <Input x={0} y={0} text="Порог 1" />
    <Input x={0} y={100} text="Порог 2" />
</Group>