<script>
	import ComponentFildTime from './ComponentFildTime.svelte';
	import FildDate from './FildDate';

	export let fildDate = new FildDate();
</script>

<div style="display: grid; grid-template-columns: .14fr 1fr">
	<div class="text-center px-3 py-2" style="min-width: 8em;">
		{@html fildDate.date}<br /><i>воскресенье</i>
	</div>
	<div>
		{#each fildDate.fildsTime as item}
			<ComponentFildTime fildTime={item} />
		{/each}
	</div>
</div>
