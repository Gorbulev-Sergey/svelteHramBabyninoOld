<script>
	import ComponentFild from './ComponentFild.svelte';
	import Fild from './Fild';
	import Month from './Month';

	export let year = new Date(Date.now()).getFullYear();
	export let month = new Date().getMonth();
	export let filds = new Month();
	for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
		filds.push(new Fild(new Date(year, month, i)));
	}
	let _class = '';
	export { _class as class };
</script>

<div class={_class}>
	{#each filds as item}
		<ComponentFild fild={item} />
	{/each}
</div>
