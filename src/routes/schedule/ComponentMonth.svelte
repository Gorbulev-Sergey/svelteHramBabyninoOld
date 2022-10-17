<script>
	import ComponentFildDate from './ComponentFildDate.svelte';
	import Month from './Month';

	export let month = new Month();
</script>

<div class="border rounded">
	{#each month.fildsDayAll as item}
		<ComponentFildDate fildDate={item} />
	{/each}
</div>
