<script>
	import Month from '../../schedule/Month';
	import ComponentFildDateEdit from './ComponentFildDateEdit.svelte';

	export let month = new Month();
</script>

<div class="rounded bg-white">
	{#each month.fildsDayAll as item}
		<ComponentFildDateEdit fildDate={item} />
	{/each}
</div>
