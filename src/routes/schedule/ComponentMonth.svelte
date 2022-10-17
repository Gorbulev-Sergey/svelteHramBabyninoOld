<script>
	import ComponentFildDate from './ComponentFildDate.svelte';
	import Month from './Month';

	export let month = new Month();
</script>

{#if month.fildsDayNotEmpty != null}
	<div class="border rounded">
		{#each month.fildsDayNotEmpty as item}
			<ComponentFildDate fildDate={item} />
		{/each}
	</div>
{/if}
