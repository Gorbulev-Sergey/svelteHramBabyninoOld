<script>
	import ComponentPageTitle from '$lib/components/ComponentPageTitle.svelte';
	import ComponentNavigation from '$lib/components/layout/ComponentNavigation.svelte';
	import ComponentFild from './ComponentFild.svelte';
	import Fild from './Fild';

	let listFild = [];
	for (let i = 1; i <= 30; i++) {
		listFild.push(new Fild(new Date(2022, 10, i)));
	}
</script>

{#each listFild as item}
	<ComponentFild fild={item} />
{/each}
