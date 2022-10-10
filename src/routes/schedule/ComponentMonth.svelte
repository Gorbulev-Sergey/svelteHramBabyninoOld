<script>
	import ComponentFild from './ComponentFild.svelte';
	import Fild from './Fild';

	export let year = new Date(Date.now()).getFullYear();
	export let month = new Date().getMonth();
	export let listFild = new Array();
	for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
		listFild.push(new Fild(new Date(year, month, i)));
	}
	let className = '';
	export { className as class };
</script>

<div class={className}>
	{#each listFild as item}
		<ComponentFild fild={item} />
	{/each}
</div>
